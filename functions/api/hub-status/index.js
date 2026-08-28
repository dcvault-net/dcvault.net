// GET /api/hub-status[?window=24h|7d|30d]
//
// Public read endpoint for the wiki widget: current hub status plus a
// user-count history window for the graph. online/offline is derived from
// the freshness of the last heartbeat (the hub sends no online field).

const STALE_AFTER_S = 11 * 60; // > ~2x the 300s heartbeat -> offline/stale
const DEFAULT_WINDOW = '7d';
const MAX_POINTS = 3000;
const EDGE_TTL = 120; // edge-cache TTL (s); hub samples change only every ~5 min
const WINDOWS = {
  '24h': { seconds: 24 * 3600, bucket: 0 },         // raw (~5 min resolution)
  '7d':  { seconds: 7 * 24 * 3600, bucket: 0 },      // raw
  '30d': { seconds: 30 * 24 * 3600, bucket: 3600 },  // hourly averages
};

function json(status, obj, cacheSeconds) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*', // public read-only data
  };
  if (cacheSeconds) headers['Cache-Control'] = `public, max-age=${cacheSeconds}`;
  return new Response(JSON.stringify(obj), { status, headers });
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const reqWindow = url.searchParams.get('window');
  const wKey = WINDOWS[reqWindow] ? reqWindow : DEFAULT_WINDOW;
  const w = WINDOWS[wKey];

  // Serve from the Cloudflare edge cache when possible. The key is normalised to
  // the resolved window so the three ranges share one entry each; D1 is touched
  // only on a miss. This decouples D1 row-reads from how often the widget polls
  // or how many tabs/crawlers hit the endpoint (the whole cause of the overage).
  const cache = caches.default;
  const cacheKey = new Request(`${url.origin}/api/hub-status?window=${wKey}`);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const now = Math.floor(Date.now() / 1000);
  const since = now - w.seconds;

  try {
    const latest = await env.DB.prepare(
      'SELECT ts, name, users, uptime FROM hub_samples ORDER BY ts DESC LIMIT 1'
    ).first();

    let history;
    if (w.bucket > 0) {
      const rows = await env.DB.prepare(
        'SELECT (ts / ?) * ? AS ts, CAST(ROUND(AVG(users)) AS INTEGER) AS users ' +
        'FROM hub_samples WHERE ts >= ? GROUP BY ts / ? ORDER BY ts ASC LIMIT ?'
      ).bind(w.bucket, w.bucket, since, w.bucket, MAX_POINTS).all();
      history = rows.results || [];
    } else {
      const rows = await env.DB.prepare(
        'SELECT ts, users FROM hub_samples WHERE ts >= ? ORDER BY ts ASC LIMIT ?'
      ).bind(since, MAX_POINTS).all();
      history = rows.results || [];
    }

    const online = !!latest && (now - latest.ts) <= STALE_AFTER_S;
    const resp = json(200, {
      online,
      name: latest ? latest.name : null,
      users: latest ? latest.users : null,
      uptime: latest ? latest.uptime : null,
      lastSeen: latest ? latest.ts : null,
      serverTime: now,
      staleAfter: STALE_AFTER_S,
      window: wKey,
      history, // [{ ts, users }]
    }, EDGE_TTL);
    context.waitUntil(cache.put(cacheKey, resp.clone()));
    return resp;
  } catch (err) {
    // Degrade gracefully: the widget shows "unavailable" instead of breaking.
    return json(200, {
      online: false, name: null, users: null, uptime: null,
      lastSeen: null, serverTime: now, staleAfter: STALE_AFTER_S,
      window: wKey, history: [], error: 'unavailable',
    }, 10);
  }
}
