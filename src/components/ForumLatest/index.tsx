import React, {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import styles from './styles.module.css';

// Box of the forum's latest topics for the landing page, with author avatars.
// Reads /api/forum-latest (a Cloudflare Pages Function that proxies the
// Discourse latest.json) client-side and refreshes on an interval.

type Topic = {
  id: number;
  title: string;
  url: string;
  replies: number;
  views: number;
  activity: string;
  author: string;
  avatar: string | null;
};

type Labels = {
  heading: string;
  viewAll: string;
  empty: string;
  unavailable: string;
};

const EN: Labels = {
  heading: 'Latest from the forum',
  viewAll: 'Open the forum',
  empty: 'No topics yet',
  unavailable: 'Forum unavailable',
};

type Props = {
  labels?: Partial<Labels>;
  endpoint?: string;
  forumUrl?: string;
  count?: number;
  refreshMs?: number;
};

function fmtAgo(iso: string): string {
  const t = new Date(iso).getTime();
  if (!t) return '';
  const s = Math.max(0, (Date.now() - t) / 1000);
  if (s < 3600) return `${Math.floor(s / 60)}m`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  if (s < 7 * 86400) return `${Math.floor(s / 86400)}d`;
  return `${Math.floor(s / (7 * 86400))}w`;
}

function Icon({d, extra}: {d: string; extra?: ReactNode}): ReactNode {
  return (
    <svg
      className={styles.metaIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d={d} />
      {extra}
    </svg>
  );
}

const REPLY_D =
  'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z';
const EYE_D = 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z';

export default function ForumLatest({
  labels,
  endpoint = '/api/forum-latest',
  forumUrl = 'https://forum.dcvault.net',
  count = 3,
  refreshMs = 300000,
}: Props): ReactNode {
  const L: Labels = {...EN, ...labels};
  const [state, setState] = useState<{status: 'loading' | 'ready' | 'error'; topics: Topic[]}>({
    status: 'loading',
    topics: [],
  });

  useEffect(() => {
    let active = true;
    const load = () =>
      fetch(endpoint, {headers: {accept: 'application/json'}})
        .then((r) => r.json())
        .then((d) => {
          if (!active) return;
          if (d && Array.isArray(d.topics) && !d.error) {
            setState({status: 'ready', topics: d.topics});
          } else {
            setState({status: 'error', topics: []});
          }
        })
        .catch(() => {
          if (active) setState({status: 'error', topics: []});
        });
    load();
    const id = setInterval(load, refreshMs);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, [endpoint, refreshMs]);

  const topics = state.topics.slice(0, count);

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <span className={styles.title}>{L.heading}</span>
        <a
          className={styles.viewAll}
          href={forumUrl}
          target="_blank"
          rel="noopener noreferrer">
          {L.viewAll}
        </a>
      </div>

      {state.status === 'loading' ? (
        <ul className={styles.list} aria-hidden="true">
          {Array.from({length: count}).map((_, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.itemLink}>
                <span className={styles.avatar} />
                <span className={styles.itemBody}>
                  <span className={styles.skeleton} style={{width: '85%'}} />
                  <span className={styles.skeleton} style={{width: '45%', height: '0.7rem'}} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : topics.length > 0 ? (
        <ul className={styles.list}>
          {topics.map((t) => (
            <li key={t.id} className={styles.item}>
              <a
                className={styles.itemLink}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer">
                {t.avatar ? (
                  <img
                    className={styles.avatar}
                    src={t.avatar}
                    alt=""
                    width={36}
                    height={36}
                    loading="lazy"
                  />
                ) : (
                  <span className={styles.avatar} aria-hidden="true" />
                )}
                <span className={styles.itemBody}>
                  <span className={styles.topicTitle}>{t.title}</span>
                  <span className={styles.meta}>
                    {t.author ? <span className={styles.author}>{t.author}</span> : null}
                    <span className={styles.metaItem}>
                      <Icon d={REPLY_D} />
                      {t.replies}
                    </span>
                    <span className={styles.metaItem}>
                      <Icon d={EYE_D} extra={<circle cx="12" cy="12" r="3" />} />
                      {t.views}
                    </span>
                    <span className={styles.metaTime}>{fmtAgo(t.activity)}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.placeholder}>
          {state.status === 'error' ? L.unavailable : L.empty}
        </div>
      )}
    </div>
  );
}
