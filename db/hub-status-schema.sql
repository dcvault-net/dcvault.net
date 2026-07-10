-- DCVault support-hub status samples: one row per heartbeat.
-- Apply with:
--   npx wrangler d1 execute dcvault-hub-status --remote --file=./db/hub-status-schema.sql
CREATE TABLE IF NOT EXISTS hub_samples (
  ts     INTEGER NOT NULL,  -- server receipt time, unix seconds
  name   TEXT    NOT NULL,  -- operator-set hub name
  users  INTEGER NOT NULL,  -- online humans (bots excluded), >= 0
  uptime INTEGER NOT NULL   -- seconds since hub start, >= 0
);

CREATE INDEX IF NOT EXISTS idx_hub_samples_ts ON hub_samples (ts);
