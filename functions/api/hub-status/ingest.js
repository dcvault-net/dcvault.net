// POST /api/hub-status/ingest
//
// Receives a status heartbeat from the DCVault support hub (Luadch-ng
// etc_status_push plugin) and appends one row to D1. Contract and setup
// live in functions/README.md.
//
// Bindings (configure in the Cloudflare Pages project):
//   env.DB               D1 database (schema in db/hub-status-schema.sql)
//   env.HUB_STATUS_TOKEN shared secret, equal to the hub env var
//                        LUADCH_ETC_STATUS_PUSH_TOKEN

const MAX_BODY_BYTES = 2048;      // heartbeats are tiny; reject anything larger
const MAX_NAME_LEN = 128;         // clamp the operator-set hub name
const MIN_WRITE_INTERVAL_S = 20;  // coalesce beats arriving faster than this
const RETENTION_DAYS = 60;        // drop samples older than this (bounds table growth)

// Constant-time string compare so the token check does not leak length or
// content through early-exit timing.
function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function json(status, obj) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // Fail closed if the secret is not configured: never accept unauthenticated writes.
  const expected = env.HUB_STATUS_TOKEN;
  if (!expected) return json(503, { error: 'ingest not configured' });

  const auth = request.headers.get('Authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!timingSafeEqual(token, expected)) return json(401, { error: 'unauthorized' });

  // Body-size cap: declared, then actual.
  const declared = Number(request.headers.get('Content-Length') || '0');
  if (declared && declared > MAX_BODY_BYTES) return json(413, { error: 'body too large' });
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json(413, { error: 'body too large' });

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { error: 'invalid json' });
  }

  // Validate the fixed field set from the hub handoff. users/uptime are
  // non-negative integers; users == 0 is a valid empty hub, not "offline".
  const isCount = (v) => typeof v === 'number' && Number.isInteger(v) && v >= 0;
  if (!body || typeof body !== 'object' ||
      typeof body.name !== 'string' || !isCount(body.users) || !isCount(body.uptime)) {
    return json(400, { error: 'invalid payload' });
  }

  const name = body.name.slice(0, MAX_NAME_LEN);
  const users = body.users;
  const uptime = body.uptime;
  const ts = Math.floor(Date.now() / 1000); // server stamps the receipt time

  try {
    // Light write throttle: ignore (but ack) beats faster than MIN_WRITE_INTERVAL_S
    // so a misconfigured hub cannot flood D1.
    const last = await env.DB.prepare(
      'SELECT ts FROM hub_samples ORDER BY ts DESC LIMIT 1'
    ).first();
    if (last && ts - last.ts < MIN_WRITE_INTERVAL_S) {
      return new Response(null, { status: 204 });
    }

    await env.DB.prepare(
      'INSERT INTO hub_samples (ts, name, users, uptime) VALUES (?, ?, ?, ?)'
    ).bind(ts, name, users, uptime).run();

    // Retention: about once per new UTC day (reusing the `last` row already
    // read above), drop samples older than RETENTION_DAYS so the table stays
    // bounded. Indexed on ts and run in the background, so it neither delays the
    // hub's ack nor costs more than a handful of writes per day.
    if (!last || Math.floor(ts / 86400) !== Math.floor(last.ts / 86400)) {
      const cutoff = ts - RETENTION_DAYS * 86400;
      context.waitUntil(
        env.DB.prepare('DELETE FROM hub_samples WHERE ts < ?').bind(cutoff).run().catch(() => {})
      );
    }
  } catch (err) {
    // The hub logs and retries on the next interval; surface a 5xx.
    return json(500, { error: 'store failed' });
  }

  return new Response(null, { status: 204 });
}
