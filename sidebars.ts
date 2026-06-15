import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// The sidebar is defined explicitly so that section order and labels stay
// under our control. German category labels are translated through
// i18n/de/docusaurus-plugin-content-docs/current.json. Document labels come
// from each file's frontmatter title, so they translate via the German files.
const sidebars: SidebarsConfig = {
  wiki: [
    {
      type: 'category',
      label: 'Basics',
      collapsed: false,
      items: [
        'basics/what-is-direct-connect',
        'basics/how-the-network-works',
        'basics/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Clients & Usage',
      items: [
        'clients/choosing-a-client',
        'clients/dc-clients',
        'clients/installation-setup',
        'clients/sharing-files',
        'clients/finding-joining-hubs',
        'clients/searching-downloading',
        'clients/active-vs-passive-mode',
        'clients/vpn-privacy',
      ],
    },
    {
      type: 'category',
      label: 'Running a Hub',
      items: [
        'hub/basics',
        'hub/software',
        'hub/installation-config',
        'hub/scripting',
        'hub/moderation-operators',
        'hub/listing-your-hub',
      ],
    },
    {
      type: 'category',
      label: 'Protocols & Technical',
      items: [
        'protocols/nmdc',
        'protocols/adc',
        'protocols/tth-hashing',
        'protocols/magnet-links',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/faq',
        'community/glossary',
        'community/contributing',
        {
          type: 'link',
          label: 'Forum',
          href: 'https://forum.dcvault.net',
        },
      ],
    },
  ],
};

export default sidebars;
