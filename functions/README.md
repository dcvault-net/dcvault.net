# Hub status API (Cloudflare Pages Functions)

Receives status heartbeats from the DCVault support hub (Luadch-ng
`etc_status_push` plugin) and serves the current status plus a user-count
history for the wiki widget.

## Endpoints

- `POST /api/hub-status/ingest` — hub to receiver, Bearer-token auth.
  Body: `{ "name": string, "users": int>=0, "uptime": int>=0 }`.
  The server stamps the receipt time; the hub sends no timestamp.
  `204` on success, `401` unauthorized, `400` malformed, `413` too large.
- `GET /api/hub-status[?window=24h|7d|30d]` — public read for the wiki.
  Returns `{ online, name, users, uptime, lastSeen, serverTime, staleAfter,
  window, history: [{ ts, users }] }`. `online` is derived from the freshness
  of the last beat (stale after 11 minutes), it is not sent by the hub.

## Bindings (configure in the Cloudflare Pages project)

- D1 database bound as `DB`.
- Secret `HUB_STATUS_TOKEN`, identical to the hub env var
  `LUADCH_ETC_STATUS_PUSH_TOKEN`. Generate with `openssl rand -hex 32`.

## Setup

```sh
# 1. Create the database
npx wrangler d1 create dcvault-hub-status

# 2. Apply the schema
npx wrangler d1 execute dcvault-hub-status --remote --file=./db/hub-status-schema.sql
```

Then in the Pages project:

- Settings, Functions, D1 database bindings: add `DB` pointing at
  `dcvault-hub-status`.
- Settings, Environment variables and secrets: add `HUB_STATUS_TOKEN`
  (Production, and Preview too if you test on a preview URL).

## Notes

- One row per heartbeat (default every 300 s). The 30-day window is
  downsampled to hourly averages; 24h and 7d are raw.
- No automatic retention yet. Add a scheduled cleanup (Cron Trigger) if the
  table should be capped.
- The `GET` response is edge-cached for 60 s, so page traffic does not hit D1
  on every request.
