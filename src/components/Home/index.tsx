import React from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

// Prefix internal links with the active locale so the same href works on the
// English and German landing pages. External links pass through untouched.
function useLocalize(): (href: string) => string {
  const {
    i18n: {currentLocale, defaultLocale},
  } = useDocusaurusContext();
  return (href) => {
    if (!href.startsWith('/')) {
      return href;
    }
    return currentLocale === defaultLocale ? href : `/${currentLocale}${href}`;
  };
}

// Small, subtle line icons (Feather, MIT). Stroke inherits the current color.
const ICONS: Record<string, ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </>
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </>
  ),
  server: (
    <>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </>
  ),
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  list: (
    <>
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  arrowRight: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  x: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
};

type IconProps = {name: keyof typeof ICONS | string; className?: string};

export function Icon({name, className}: IconProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {ICONS[name] ?? null}
    </svg>
  );
}

export function FeatureCards({children}: {children: ReactNode}): ReactNode {
  return <div className={styles.featureCards}>{children}</div>;
}

type FeatureCardProps = {
  title: string;
  href: string;
  cta: string;
  icon: string;
  children: ReactNode;
};

export function FeatureCard({
  title,
  href,
  cta,
  icon,
  children,
}: FeatureCardProps): ReactNode {
  const localize = useLocalize();
  return (
    <Link to={localize(href)} className={styles.featureCard}>
      <span className={styles.featureIcon}>
        <Icon name={icon} />
      </span>
      <span className={styles.featureTitle}>{title}</span>
      <span className={styles.featureBody}>{children}</span>
      <span className={styles.featureCta}>
        {cta}
        <Icon name="arrowRight" className={styles.ctaArrow} />
      </span>
    </Link>
  );
}

export function TopicGrid({children}: {children: ReactNode}): ReactNode {
  return <div className={styles.topicGrid}>{children}</div>;
}

type TopicCardProps = {
  title: string;
  href?: string;
  icon: string;
  badge?: string;
  children: ReactNode;
};

export function TopicCard({
  title,
  href,
  icon,
  badge,
  children,
}: TopicCardProps): ReactNode {
  const localize = useLocalize();
  const inner = (
    <>
      <span className={styles.topicIcon}>
        <Icon name={icon} />
      </span>
      <span className={styles.topicText}>
        <span className={styles.topicTitle}>
          {title}
          {badge && <span className={styles.badge}>{badge}</span>}
        </span>
        <span className={styles.topicDesc}>{children}</span>
      </span>
    </>
  );

  // A card with a badge (e.g. "Soon") or no target renders as a static,
  // non-clickable placeholder.
  if (badge || !href) {
    return (
      <div className={`${styles.topicCard} ${styles.topicCardStatic}`}>{inner}</div>
    );
  }
  return (
    <Link to={localize(href)} className={styles.topicCard}>
      {inner}
    </Link>
  );
}
