import React from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

// Prefix internal links with the active locale so the same href works on the
// English and German glossary pages.
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

export function Glossary({children}: {children: ReactNode}): ReactNode {
  return <dl className={styles.grid}>{children}</dl>;
}

type TermProps = {name: string; href?: string; children: ReactNode};

export function Term({name, href, children}: TermProps): ReactNode {
  const localize = useLocalize();
  return (
    <div className={styles.card}>
      <dt className={styles.term}>
        {href ? (
          <Link to={localize(href)} className={styles.termLink}>
            {name}
          </Link>
        ) : (
          name
        )}
      </dt>
      <dd className={styles.def}>{children}</dd>
    </div>
  );
}
