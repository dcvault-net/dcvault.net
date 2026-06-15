# DCVault

Landing page and bilingual wiki for the Direct Connect (DC++) peer-to-peer
network. Built with [Docusaurus](https://docusaurus.io/) and hosted on
Cloudflare Pages.

- Site: https://dcvault.net
- Forum: https://forum.dcvault.net (separate system, not part of this repo)

## Requirements

- Node 20 or newer (see [`.nvmrc`](.nvmrc))
- npm

## Local development

```bash
npm install
npm run start                 # English, http://localhost:3000
npm run start -- --locale de  # German preview
```

The dev server runs one locale at a time. Use the `--locale` flag to preview German.

## Build

```bash
npm run build   # builds all locales into build/
npm run serve   # serve the production build locally
```

## Project structure

- `docs/` holds the English docs. German lives under `i18n/de/`.
- `sidebars.ts` defines the wiki navigation.
- `src/pages/index.mdx` is the English landing page; the German one is at
  `i18n/de/docusaurus-plugin-content-pages/index.mdx`.
- `src/css/custom.css` holds the theme colors and the landing hero style.
- Logos and the favicon are in `static/img/`.

## Internationalization

English is the default locale and is served at `/`. German is served at `/de/`.
Translated content mirrors the English structure:

- `i18n/de/docusaurus-plugin-content-docs/current/` — German docs (same file
  paths as `docs/`)
- `i18n/de/docusaurus-plugin-content-pages/` — German standalone pages
- `i18n/de/docusaurus-plugin-content-docs/current.json` — sidebar category labels
- `i18n/de/docusaurus-theme-classic/` — navbar and footer labels
- `i18n/de/code.json` — built-in theme UI strings

### Adding a page

1. Create the English file under `docs/<section>/<name>.md` with `title`,
   `description`, and `sidebar_position` in the frontmatter.
2. Add it to `sidebars.ts`.
3. Add the German translation at
   `i18n/de/docusaurus-plugin-content-docs/current/<section>/<name>.md`.

After changing navbar, footer, or sidebar labels, refresh the translation files:

```bash
npm run write-translations -- --locale de
```

This adds new keys without overwriting translations you already filled in.

## Editing and contributing

Every page has an "Edit this page" link that opens the source file on GitHub.
Changes are reviewed through pull requests. See
[Contributing](https://dcvault.net/docs/community/contributing) for details.

## Deployment

Cloudflare Pages builds and deploys automatically on every push to `main`.

- Build command: `npm run build`
- Output directory: `build`
- Node version: `20` (set `NODE_VERSION=20` in the Pages settings, or rely on
  `.nvmrc`)

The custom domain `dcvault.net` and automatic SSL are managed in Cloudflare Pages.

## License

Content is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
