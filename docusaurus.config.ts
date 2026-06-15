import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DCVault',
  tagline: 'Your guide to Direct Connect',
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo-full.png',
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
        },
        {
          href: 'https://forum.dcvault.net',
          label: 'Forum',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/dcvault-net/dcvault.net',
          label: 'GitHub',
          position: 'right',
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

export default config;
