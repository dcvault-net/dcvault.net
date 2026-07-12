// GET /api/forum-latest
//
// Server-side proxy for the Discourse forum's latest topics. Fetches
// forum.dcvault.net/latest.json, trims it to what the homepage box needs
// (incl. author avatar), and serves an edge-cached JSON. Server-side keeps
// direct traffic off the forum and sidesteps CORS.

const FORUM = 'https://forum.dcvault.net';
const LIMIT = 6;

function json(status, obj, cacheSeconds) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  };
  if (cacheSeconds) headers['Cache-Control'] = `public, max-age=${cacheSeconds}`;
  return new Response(JSON.stringify(obj), {status, headers});
}

function avatarUrl(tpl) {
  if (!tpl) return null;
  const u = tpl.replace('{size}', '48');
  return u.startsWith('http') ? u : `${FORUM}${u}`;
}

export async function onRequestGet() {
  try {
    const res = await fetch(`${FORUM}/latest.json`, {
      headers: {Accept: 'application/json', 'User-Agent': 'DCVault-Wiki'},
      cf: {cacheTtl: 300, cacheEverything: true},
    });
    // A Cloudflare bot challenge would answer with HTML rather than JSON.
    const ct = res.headers.get('content-type') || '';
    if (!res.ok || !ct.includes('json')) {
      return json(200, {topics: [], error: 'unavailable'}, 60);
    }
    const data = await res.json();
    const list = (data && data.topic_list && data.topic_list.topics) || [];
    const byId = {};
    for (const u of data.users || []) byId[u.id] = u;

    const topics = list
      .filter(Boolean)
      .slice(0, LIMIT)
      .map((t) => {
        const poster = t.posters && t.posters[0] ? byId[t.posters[0].user_id] : null;
        return {
          id: t.id,
          title: t.title,
          url: `${FORUM}/t/${t.slug}/${t.id}`,
          replies:
            typeof t.reply_count === 'number'
              ? t.reply_count
              : Math.max(0, (t.posts_count || 1) - 1),
          views: t.views || 0,
          activity: t.last_posted_at || t.bumped_at || t.created_at,
          author: poster ? poster.username : t.last_poster_username || '',
          avatar: poster ? avatarUrl(poster.avatar_template) : null,
        };
      });
    return json(200, {topics}, 300);
  } catch (e) {
    return json(200, {topics: [], error: 'unavailable'}, 60);
  }
}
