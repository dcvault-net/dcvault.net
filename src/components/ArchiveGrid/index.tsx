import React from 'react';
import type {ReactNode} from 'react';
import styles from './styles.module.css';

// Show a compact host + path for the link line (drops protocol and any
// trailing slash), so each card states where it goes.
function displayUrl(href: string): string {
  try {
    const u = new URL(href);
    const path = u.pathname.replace(/\/$/, '');
    return u.host + path;
  } catch {
    return href;
  }
}

export function ArchiveGrid({children}: {children: ReactNode}): ReactNode {
  return <div className={styles.grid}>{children}</div>;
}

type ArchiveCardProps = {
  title: string;
  href: string;
  image: string;
  meta?: string;
  children: ReactNode;
};

// A whole-card link to an external archive site: screenshot on top, then the
// title, a short meta line, the description, and the destination URL.
export function ArchiveCard({
  title,
  href,
  image,
  meta,
  children,
}: ArchiveCardProps): ReactNode {
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer">
      <span className={styles.thumb}>
        <img src={image} alt={title} loading="lazy" />
      </span>
      <span className={styles.body}>
        {meta && <span className={styles.meta}>{meta}</span>}
        <span className={styles.title}>{title}</span>
        <span className={styles.desc}>{children}</span>
        <span className={styles.host}>
          {displayUrl(href)}
          <svg
            className={styles.arrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </span>
    </a>
  );
}
