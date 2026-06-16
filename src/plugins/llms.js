// Local Docusaurus plugin: generates llms.txt and llms-full.txt at build time
// (https://llmstxt.org). Runs per locale, so /llms.txt is English and
// /de/llms.txt is German, always in sync with the docs.
const fs = require('fs');
const path = require('path');

const SECTIONS = [
  ['basics', {en: 'Basics', de: 'Grundlagen'}],
  ['clients', {en: 'Clients & usage', de: 'Clients & Nutzung'}],
  ['hub', {en: 'Running a hub', de: 'Hub betreiben'}],
  ['protocols', {en: 'Protocols & technical', de: 'Protokolle & Technik'}],
  ['community', {en: 'Community', de: 'Community'}],
];

const TEXT = {
  en: {
    summary:
      'Community wiki for the Direct Connect (DC++) peer-to-peer network: clients, hubs, the NMDC and ADC protocols, and file sharing. Available in English and German.',
    full: 'Full text of the DCVault wiki (English).',
    optional: 'Optional',
    forum: 'community discussion and support',
  },
  de: {
    summary:
      'Community-Wiki zum Direct-Connect-(DC++)-Peer-to-Peer-Netzwerk: Clients, Hubs, die Protokolle NMDC und ADC und Filesharing. Verfügbar auf Englisch und Deutsch.',
    full: 'Volltext des DCVault-Wikis (Deutsch).',
    optional: 'Optional',
    forum: 'Community-Austausch und Support',
  },
};

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

function parse(file, docsDir, docsBase) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const fm = m ? m[1] : '';
  const body = m ? m[2] : raw;
  const title = (fm.match(/^title:\s*"(.*)"\s*$/m) || [])[1] || '';
  const description = (fm.match(/^description:\s*"(.*)"\s*$/m) || [])[1] || '';
  const pos = parseInt((fm.match(/^sidebar_position:\s*(\d+)/m) || [])[1] || '99', 10);
  const rel = path.relative(docsDir, file).replace(/\\/g, '/').replace(/\.md$/, '');
  return {title, description, pos, rel, section: rel.split('/')[0], body, url: `${docsBase}/${rel}`};
}

function cleanBody(body) {
  return body
    .replace(/^import .*$/gm, '')
    .replace(/<HubTable[\s\S]*?\/>/g, '(Hub software comparison table on the page.)')
    .replace(/<Term\s+name="([^"]+)"(?:\s+href="[^"]*")?\s*>([\s\S]*?)<\/Term>/g, '- $1: $2')
    .replace(/<TopicCard\s+title="([^"]+)"[^>]*>([\s\S]*?)<\/TopicCard>/g, '- $1: $2')
    .replace(/^\s*<\/?(?:Glossary|TopicGrid|FeatureCards)\b[^>]*>\s*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

module.exports = function llmsPlugin(context) {
  const {siteDir, i18n} = context;
  const locale = i18n.currentLocale;
  const isDefault = locale === i18n.defaultLocale;
  const t = TEXT[locale] || TEXT.en;

  return {
    name: 'dcvault-llms',
    async postBuild({siteConfig, outDir}) {
      const docsDir = isDefault
        ? path.join(siteDir, 'docs')
        : path.join(siteDir, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current');
      if (!fs.existsSync(docsDir)) return;

      const site = siteConfig.url.replace(/\/$/, '');
      const docsBase = isDefault ? `${site}/docs` : `${site}/${locale}/docs`;
      const pages = walk(docsDir).map((f) => parse(f, docsDir, docsBase));

      let idx = `# DCVault\n\n> ${t.summary}\n`;
      let full = `# DCVault\n\n> ${t.summary}\n\n${t.full} Source: ${site}\n`;
      for (const [key, label] of SECTIONS) {
        const inSection = pages.filter((p) => p.section === key).sort((a, b) => a.pos - b.pos);
        if (!inSection.length) continue;
        idx += `\n## ${label[locale] || label.en}\n\n`;
        for (const p of inSection) {
          idx += `- [${p.title}](${p.url})${p.description ? ': ' + p.description : ''}\n`;
          full += `\n\n---\n\n# ${p.title}\n\nSource: ${p.url}\n\n${cleanBody(p.body)}\n`;
        }
      }
      idx += `\n## ${t.optional}\n\n- [Forum](https://forum.dcvault.net): ${t.forum}\n`;

      fs.writeFileSync(path.join(outDir, 'llms.txt'), idx, 'utf8');
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), full, 'utf8');
    },
  };
};
