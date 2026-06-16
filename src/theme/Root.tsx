import React from 'react';
import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Injects site-level structured data (JSON-LD) on every page, in both locales.
// Root wraps the whole app, so this runs for English and German equally.
export default function Root({children}: {children: ReactNode}): ReactNode {
  const {siteConfig, i18n} = useDocusaurusContext();
  const siteUrl = siteConfig.url;
  const isDe = i18n.currentLocale === 'de';
  const inLanguage = isDe ? 'de-DE' : 'en-US';
  const description = isDe
    ? 'Community-Wiki zum Direct-Connect-P2P-Netzwerk (DC++): Clients, Hubs, Protokolle und Filesharing.'
    : 'Community wiki for the Direct Connect (DC++) P2P network: clients, hubs, protocols and file sharing.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'DCVault',
        url: siteUrl,
        logo: `${siteUrl}/img/logo.png`,
        sameAs: ['https://github.com/dcvault-net', 'https://forum.dcvault.net'],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: siteConfig.title,
        url: siteUrl,
        description,
        inLanguage,
        publisher: {'@id': `${siteUrl}/#organization`},
      },
    ],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      {children}
    </>
  );
}
