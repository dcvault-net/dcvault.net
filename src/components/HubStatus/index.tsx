import React, {useCallback, useEffect, useMemo, useState} from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Live status card for the DCVault support hub. Reads /api/hub-status (a
// Cloudflare Pages Function backed by D1) client-side and refreshes on an
// interval. The adcs:// address is passed in from the page (static), the hub
// name / online state / user count / history come from the API.

type Sample = {ts: number; users: number};

type StatusData = {
  online: boolean;
  name: string | null;
  users: number | null;
  uptime: number | null;
  lastSeen: number | null;
  serverTime: number;
  staleAfter: number;
  window: string;
  history: Sample[];
  error?: string;
};

type Range = '24h' | '7d' | '30d';

type Labels = {
  online: string;
  offline: string;
  checking: string;
  unavailable: string;
  usersOnline: string;
  offlineNote: string;
  connect: string;
  connectHint: string;
  copy: string;
  copied: string;
  address: string;
  uptime: string;
  history: string;
  noData: string;
  heading: string;
  open: string;
  ranges: {h24: string; d7: string; d30: string};
};

const EN: Labels = {
  online: 'Online',
  offline: 'Offline',
  checking: 'Checking…',
  unavailable: 'Status unavailable',
  usersOnline: 'users online',
  offlineNote: 'The hub is not reachable right now.',
  connect: 'Connect',
  connectHint: 'Opens your Direct Connect client',
  copy: 'Copy',
  copied: 'Copied',
  address: 'Hub address',
  uptime: 'Uptime',
  history: 'Users over time',
  noData: 'No data yet',
  heading: 'Support hub',
  open: 'Open the support hub',
  ranges: {h24: '24 h', d7: '7 d', d30: '30 d'},
};

const RANGES: Range[] = ['24h', '7d', '30d'];

type Props = {
  address: string;
  labels?: Partial<Labels> & {ranges?: Partial<Labels['ranges']>};
  endpoint?: string;
  refreshMs?: number;
  compact?: boolean;
  pageHref?: string;
};

function fmtUptime(s: number | null): string {
  if (s == null || s < 0) return '';
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

function useHubStatus(endpoint: string, range: Range, refreshMs: number) {
  const [state, setState] = useState<{
    status: 'loading' | 'ready' | 'error';
    data: StatusData | null;
  }>({status: 'loading', data: null});

  useEffect(() => {
    let active = true;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const hidden = () => typeof document !== 'undefined' && document.hidden;
    const clear = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const load = () =>
      fetch(`${endpoint}?window=${range}`, {headers: {accept: 'application/json'}})
        .then((r) => r.json())
        .then((d: StatusData) => {
          if (active) setState({status: 'ready', data: d});
        })
        .catch(() => {
          if (active) setState((s) => ({status: 'error', data: s.data}));
        });
    // Only keep a timer running while the tab is visible: a backgrounded or
    // pinned tab must not poll the D1-backed endpoint around the clock.
    const schedule = () => {
      clear();
      if (!active || hidden()) return;
      timer = setTimeout(() => {
        void load().finally(schedule);
      }, refreshMs);
    };
    const onVisibility = () => {
      if (hidden()) {
        clear();
      } else {
        void load().finally(schedule); // refresh on return, then resume polling
      }
    };
    void load().finally(schedule);
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', onVisibility);
    }
    return () => {
      active = false;
      clear();
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', onVisibility);
      }
    };
  }, [endpoint, range, refreshMs]);

  return state;
}

function Chart({history}: {history: Sample[]}): ReactNode {
  const W = 1000;
  const H = 120;
  const PAD = 10;
  const chart = useMemo(() => {
    if (!history.length) return null;
    const xs = history.map((p) => p.ts);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    const span = xMax - xMin || 1;
    const yMax = Math.max(1, ...history.map((p) => p.users));
    const pts = history.map((p) => {
      const x = ((p.ts - xMin) / span) * W;
      const y = H - PAD - (p.users / yMax) * (H - 2 * PAD);
      return [x, y] as const;
    });
    const line = pts
      .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`)
      .join(' ');
    const area = `${line} L${W} ${H} L0 ${H} Z`;
    return {line, area, yMax};
  }, [history]);

  if (!chart) return null;
  return (
    <svg
      className={styles.chart}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden="true">
      <path className={styles.area} d={chart.area} />
      <path
        className={styles.line}
        d={chart.line}
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function HubStatus({
  address,
  labels,
  endpoint = '/api/hub-status',
  refreshMs = 300000,
  compact = false,
  pageHref = '/docs/community/support-hub',
}: Props): ReactNode {
  const L: Labels = {
    ...EN,
    ...labels,
    ranges: {...EN.ranges, ...(labels?.ranges ?? {})},
  };
  const [range, setRange] = useState<Range>('7d');
  const {status, data} = useHubStatus(endpoint, range, refreshMs);
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(() => {});
    }
  }, [address]);

  const unavailable = status === 'error' || !!(data && data.error);
  const online = !!(data && data.online && !data.error);
  const loading = status === 'loading' && !data;
  const count = data && typeof data.users === 'number' ? data.users : null;

  const badge = loading
    ? {cls: styles.badgeChecking, text: L.checking}
    : unavailable
    ? {cls: styles.badgeOff, text: L.unavailable}
    : online
    ? {cls: styles.badgeOn, text: L.online}
    : {cls: styles.badgeOff, text: L.offline};

  const badgeEl = (
    <span className={`${styles.badge} ${badge.cls}`}>
      <span className={styles.badgeDot} aria-hidden="true" />
      {badge.text}
    </span>
  );

  const connectBtn = (
    <a className={styles.connect} href={address}>
      {L.connect}
    </a>
  );

  const shownCount = !unavailable && count != null ? count : '—';

  if (compact) {
    return (
      <div className={styles.compact}>
        <div className={styles.compactMain}>
          <span className={styles.compactTitle}>{L.heading}</span>
          {badgeEl}
          <span className={styles.compactMetric}>
            <span className={`${styles.compactNumber} ${online ? '' : styles.dim}`}>
              {shownCount}
            </span>
            <span className={styles.compactWord}>{L.usersOnline}</span>
          </span>
        </div>
        <div className={styles.compactActions}>
          {connectBtn}
          <Link className={styles.compactLink} to={pageHref}>
            {L.open}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card} aria-live="polite">
      <div className={styles.head}>
        {badgeEl}
        {data && data.name ? <span className={styles.hubName}>{data.name}</span> : null}
        {online && data && data.uptime != null ? (
          <span className={styles.uptime}>
            {L.uptime} {fmtUptime(data.uptime)}
          </span>
        ) : null}
      </div>

      <div className={styles.metric}>
        <span className={`${styles.number} ${online ? '' : styles.dim}`}>{shownCount}</span>
        <span className={styles.metricWord}>
          {unavailable ? L.unavailable : online ? L.usersOnline : L.offlineNote}
        </span>
      </div>

      <div className={styles.connectRow}>
        {connectBtn}
        <span className={styles.connectHint}>{L.connectHint}</span>
      </div>

      <div className={styles.addressRow}>
        <span className={styles.addressLabel}>{L.address}</span>
        <code className={styles.address}>{address}</code>
        <button type="button" className={styles.copy} onClick={copy}>
          {copied ? L.copied : L.copy}
        </button>
      </div>

      <div className={styles.chartHead}>
        <span className={styles.chartTitle}>{L.history}</span>
        <div className={styles.ranges} role="group">
          {RANGES.map((r) => (
            <button
              key={r}
              type="button"
              className={`${styles.rangeBtn} ${range === r ? styles.rangeActive : ''}`}
              onClick={() => setRange(r)}>
              {r === '24h' ? L.ranges.h24 : r === '7d' ? L.ranges.d7 : L.ranges.d30}
            </button>
          ))}
        </div>
      </div>
      {data && data.history && data.history.length > 0 ? (
        <Chart history={data.history} />
      ) : (
        <div className={styles.noData}>{unavailable ? L.unavailable : L.noData}</div>
      )}
    </div>
  );
}
