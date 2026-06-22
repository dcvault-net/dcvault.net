import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// Exported as an async function so we can dynamically import the ESM-only
// tab-blocks remark plugin.

export default async function createConfig(): Promise<Config> {
  const tabBlocks = (await import('docusaurus-remark-plugin-tab-blocks')).default;

  const config: Config = {
    title: 'DCVault',
    tagline: 'Your Community to Direct Connect',
    favicon: 'img/favicon.png',

    future: {
      v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    url: 'https://dcvault.net',
    baseUrl: '/',

    organizationName: 'dcvault-net',
    projectName: 'dcvault.net',

    onBrokenLinks: 'throw',

    markdown: {
      hooks: {
        onBrokenMarkdownLinks: 'warn',
      },
    },

    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'de'],
      localeConfigs: {
        en: {label: 'English', htmlLang: 'en'},
        de: {label: 'Deutsch', htmlLang: 'de'},
      },
    },

    presets: [
      [
        'classic',
        {
          docs: {
            sidebarPath: './sidebars.ts',
            editUrl: 'https://github.com/dcvault-net/dcvault.net/tree/main/',
            editLocalizedFiles: true,
            beforeDefaultRemarkPlugins: [tabBlocks],
          },
          blog: false,
          theme: {
            customCss: ['./src/css/custom.css', './src/css/nav-icons.css'],
          },
        } satisfies Preset.Options,
      ],
    ],

    plugins: ['./src/plugins/llms.js'],

    clientModules: ['./src/clientModules/matomo.ts'],

    themes: [
      [
        '@easyops-cn/docusaurus-search-local',
        {
          hashed: true,
          language: ['en', 'de'],
          indexDocs: true,
          indexBlog: false,
          indexPages: false,
          highlightSearchTermsOnTargetPage: true,
          searchResultLimits: 8,
        },
      ],
    ],

    themeConfig: {
      image: 'img/social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'DCVault',
        logo: {
          alt: 'DCVault',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wiki',
            position: 'left',
            label: 'Wiki',
            className: 'dcv-ico dcv-ico--book',
          },
          {
            href: 'https://forum.dcvault.net',
            label: 'Forum',
            position: 'left',
            className: 'dcv-ico dcv-ico--forum',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/dcvault-net/dcvault.net',
            label: 'GitHub',
            position: 'right',
            className: 'dcv-ico dcv-ico--github',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {label: 'Basics', to: '/docs/basics/what-is-direct-connect'},
              {label: 'Clients & Usage', to: '/docs/clients/choosing-a-client'},
              {label: 'Running a Hub', to: '/docs/hub/basics'},
              {label: 'Protocols & Technical', to: '/docs/protocols/nmdc'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Forum', href: 'https://forum.dcvault.net'},
              {label: 'FAQ', to: '/docs/community/faq'},
              {label: 'Glossary', to: '/docs/community/glossary'},
              {label: 'Contributing', to: '/docs/community/contributing'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'GitHub', href: 'https://github.com/dcvault-net/dcvault.net'},
              {label: 'Status', href: 'https://status.dcvault.net/'},
            ],
          },
          {
            // Friends and related sites. Replace the placeholder with real links.
            title: 'Friends',
            items: [
              {label: 'DCHublist', href: 'https://dchublist.org/'},
              {label: 'Team Elite', href: 'https://www.te-home.net/'},
              {label: 'DC++ Blog', href: 'https://dcpp.wordpress.com/'},
            ],
          },
        ],
        copyright: `Content licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> &middot; &copy; ${new Date().getFullYear()} DCVault &middot; Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,
  };

  return config;
}
