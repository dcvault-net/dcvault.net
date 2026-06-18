\# Projekt-Brief: DCVault — Landing + Wiki (Docusaurus)



> Verwendung: Diesen Text als ersten Prompt an Claude Code geben — oder als

> `CLAUDE.md` ins Repo-Root legen, dann wird er bei jeder Session automatisch geladen.



\## Was wir bauen



DCVault ist eine Community-Wissensbasis zum \*\*Direct-Connect-Netzwerk (DC)\*\*.

Dieses Repo ist die \*\*Landingpage + das Wiki\*\*, gebaut mit \*\*Docusaurus\*\* (statisch),

\*\*zweisprachig (Englisch + Deutsch)\*\*, gehostet auf \*\*Cloudflare Pages\*\*.



Das Forum (Discourse) ist ein \*\*separates System\*\* auf einem VPS (`forum.dcvault.net`) und

gehört NICHT in dieses Repo — nur darauf verlinken.



\## Bereits getroffene Entscheidungen (nicht neu aufrollen)



\- \*\*Inhaltsmodell:\*\* kuratierte Doku, vom Team gepflegt, Bearbeitung per Git/PR — \*kein\*

&#x20; In-Browser-Editing durch die Community. (Deshalb statisch, kein Login, kein SSO im Wiki.)

\- \*\*Mehrsprachigkeit ist Pflicht:\*\* i18n mit `en` (Default) und `de`, pro Sprache eigene

&#x20; Inhalte und eigene Sidebar. (Das war der Hauptgrund für Docusaurus — Wiki.js konnte das nicht.)

\- \*\*Hosting:\*\* Cloudflare Pages (Free-Tier), Auto-Build aus diesem GitHub-Repo, Custom Domain

&#x20; `dcvault.net`, automatisches SSL. Sprachen über Pfad-Präfixe `/` (en) und `/de/`.

\- \*\*Lizenz der Inhalte:\*\* \*\*CC BY-SA 4.0\*\* (im Footer anzeigen).

\- \*\*Design:\*\* schlicht, zurückhaltend, bewusst — \*kein\* generisch-überdesigntes „AI-Look".

&#x20; Gute Hierarchie statt Deko. Theme-Farben/Typo erben, nicht hart reincodieren.

\- \*\*Logo:\*\* ein Icon "dcvault.icon.png" und ein logo "style-logo.png" liegen im Ordner und sollen verwendet werden.

&#x20; Die farben sollen auch als Akzente für das Theme genutzt werden





\## Domains



\- `dcvault.net` → diese Docusaurus-Seite (Cloudflare Pages)

\- `forum.dcvault.net` → Discourse (separat, VPS; nur verlinken)



\## Aufgaben für Claude Code



1\. Docusaurus-Projekt scaffolden (aktuelle Version, `classic`-Preset).

&#x20;  \*\*Vorher fragen:\*\* TypeScript oder JavaScript?

2\. \*\*i18n\*\* einrichten: Locales `en` (Default) und `de`, Sprach-Dropdown in der Navbar.

&#x20;  (Hinweis: Default-Locale `en` wegen der international englischsprachigen DC-Community —

&#x20;  gegenchecken, ob das so gewollt ist oder `de` Default sein soll.)

3\. Die \*\*Navigations-/Sidebar-Struktur\*\* unten umsetzen, pro Locale.

4\. Für jeden Nav-Eintrag eine \*\*Stub-Seite\*\* anlegen (Frontmatter: `title`, `description`,

&#x20;  `sidebar\_position`) mit kurzem Platzhalter-Intro, damit die Seite baut und die Nav

&#x20;  funktioniert. Echte Inhalte kommen später.

5\. \*\*Custom Landingpage\*\* (`src/pages`) mit den Home-Inhalten unten (EN + DE).

6\. \*\*SEO-Basics:\*\* Site-Title, die Meta-Descriptions unten, saubere Seitentitel.

&#x20;  Achtung: „Direct Connect" ist als Keyword mehrdeutig (AWS etc.) — auf qualifizierte

&#x20;  Phrasen zielen: „Direct Connect P2P", „DC++", „hub setup", „NMDC/ADC".

7\. \*\*Footer:\*\* CC-BY-SA-4.0-Hinweis + Link zum Forum.

8\. \*\*`editUrl`\*\* auf das GitHub-Repo setzen, damit „Edit this page" → PR funktioniert

&#x20;  (so können Externe per PR beitragen, passend zum kuratierten Modell).

9\. \*\*README\*\* mit: lokal starten (`npm install`, `npm run start`), bauen (`npm run build`),

&#x20;  wie i18n funktioniert (`i18n/`-Ordner, `docusaurus write-translations`), und dass das

&#x20;  Deployment über Cloudflare Pages per Push automatisch läuft.



Bei größeren strukturellen Entscheidungen (TS vs. JS, Theme-Anpassungen) bitte erst

nachfragen.



\## Navigations-/Sidebar-Struktur (beide Sprachen)



Hinweis: Die früher gewählten MDI-/Font-Awesome-Icons waren für Wiki.js. Docusaurus-Sidebars

sind standardmäßig textbasiert — Icons sind optional und anders umzusetzen (CSS/Swizzle),

also vorerst weglassen, außer ich frage danach.



| Sektion (EN / DE) | Einträge (EN / DE) |

|---|---|

| \*\*Home\*\* / Home | — |

| \*\*Basics\*\* / Grundlagen | What is Direct Connect? / Was ist Direct Connect? · How the Network Works / Wie das Netzwerk funktioniert · Quick Start / Schnellstart |

| \*\*Clients \& Usage\*\* / Clients \& Nutzung | Choosing a Client / Client auswählen · DC Clients / DC-Clients · Installation \& Setup / Installation \& Einrichtung · Sharing Files / Dateien teilen · Finding \& Joining Hubs / Hubs finden \& beitreten · Searching \& Downloading / Suchen \& Herunterladen · Active vs. Passive Mode / Active vs. Passive Mode · VPN \& Privacy / VPN \& Privatsphäre |

| \*\*Running a Hub\*\* / Hub betreiben | Hub Basics / Hub-Grundlagen · Hub Software / Hub-Software · Installation \& Config / Installation \& Konfiguration · Scripting / Scripting · Moderation \& Operators / Moderation \& Operators · Listing Your Hub / Hub eintragen |

| \*\*Protocols \& Technical\*\* / Protokolle \& Technik | NMDC Protocol / NMDC-Protokoll · ADC Protocol / ADC-Protokoll · TTH / Hashing · Magnet Links / Magnet-Links |

| \*\*Community\*\* / Community | Forum (→ https://forum.dcvault.net) · FAQ · Glossary / Glossar · Contributing / Mitmachen |



\## Landingpage-Inhalt



\### Englisch (Default)



```markdown

\# DCVault — Your Guide to Direct Connect



DCVault explains the Direct Connect P2P network from the ground up — how it works, how to

take part, and how to run your own hub. You'll find every topic in the sidebar; here's

where to start.



Never heard of it? Direct Connect (DC) is a peer-to-peer network for sharing files and

chatting on community-run hubs.



\## Where do I start?

\*\*\[What is Direct Connect? →](/docs/basics/what-is-direct-connect)\*\* — the 5-minute intro if you're brand new.

Prefer to dive in? The \*\*\[Quick Start →](/docs/basics/quick-start)\*\* gets you onto the network in a few steps.



\### You want to use the network

Set up a client, find hubs, share files — everything to take part.

\*\*\[Get started as a user →](/docs/clients/choosing-a-client)\*\*



\### You want to run a hub

From choosing hub software to advanced scripting.

\*\*\[Get started as a hub operator →](/docs/hub/basics)\*\*



\## Join the community

Questions and discussion live on the \*\*\[forum](https://forum.dcvault.net)\*\*. Spot something

missing or wrong? \*\*\[Anyone can contribute](/docs/community/contributing)\*\* — this wiki grows

with the community.

```



\### Deutsch



```markdown

\# DCVault — Dein Wegweiser durch Direct Connect



DCVault erklärt das Direct-Connect-P2P-Netzwerk von Grund auf — wie es funktioniert, wie du

mitmachst und wie du selbst einen Hub betreibst. Alle Themen findest du in der Seitenleiste;

hier zeigen wir dir, wo du am besten anfängst.



Noch nie davon gehört? Direct Connect (DC) ist ein Peer-to-Peer-Netzwerk zum Teilen von

Dateien und zum Chatten auf von der Community betriebenen Hubs.



\## Wo fange ich an?

\*\*\[Was ist Direct Connect? →](/de/docs/basics/what-is-direct-connect)\*\* — die 5-Minuten-Einführung, wenn du ganz neu bist.

Lieber direkt loslegen? Der \*\*\[Schnellstart →](/de/docs/basics/quick-start)\*\* bringt dich in wenigen Schritten ins Netzwerk.



\### Du willst das Netzwerk nutzen

Client einrichten, Hubs finden, Dateien teilen — alles, um teilzunehmen.

\*\*\[Einstieg für Nutzer →](/de/docs/clients/choosing-a-client)\*\*



\### Du willst einen eigenen Hub betreiben

Von der passenden Hub-Software bis zum Scripting.

\*\*\[Einstieg für Hub-Betreiber →](/de/docs/hub/basics)\*\*



\## Mitreden \& mitmachen

Fragen und Austausch laufen im \*\*\[Forum](https://forum.dcvault.net)\*\*. Fehlt etwas oder ist

etwas falsch? \*\*\[Jeder kann mitschreiben](/de/docs/community/contributing)\*\* — dieses Wiki

wächst mit der Community.

```



\## Meta-Descriptions (SEO)



\- \*\*EN:\*\* `DCVault is the community wiki for the Direct Connect (DC) peer-to-peer network: guides on clients like DC++, hubs, the NMDC/ADC protocols and file sharing.`

\- \*\*DE:\*\* `DCVault ist die Community-Wiki zum Direct-Connect-Netzwerk (DC): Anleitungen zu Clients wie DC++, Hubs, den Protokollen NMDC/ADC und Filesharing.`



\## Deploy-Kontext (zum Verständnis, nicht zwingend Aufgabe)



\- Repo wird auf GitHub (eigene Org) liegen; Cloudflare Pages baut bei jedem Push automatisch.

\- Custom Domain `dcvault.net` + autom. SSL über Cloudflare Pages.

\- Lokales Arbeiten + Push macht der Nutzer aus VS Code; Claude Code darf Git-Workflows nutzen.



## Schreibkonventionen und Arbeitsweise

Gelten für alle selbst verfassten Texte (Wiki-Inhalte, README, Commit-Messages, Antworten):

- Einfacher, professioneller Stil. Minimalismus, keine Wall of Text.
- Niemals Em-Dashes. Stattdessen Komma, Punkt, Doppelpunkt oder Klammern.
- Englische Texte folgen dem Humanizer-Leitfaden <https://github.com/blader/humanizer>
  (entspricht dem lokalen `humanizer`-Skill): keine Werbe- oder Floskelsprache, kein
  erzwungener Dreierschritt, keine Signposting-Floskeln ("let's dive in"), keine
  Inline-Header-Listen, Überschriften in Sentence-case, gerade Anführungszeichen,
  sparsames Fett, aktive Sätze, konkrete Aussagen statt vager Attributionen.
- Deutsche Texte folgen <https://github.com/marmbiz/humanizer-de>. Zusätzlich: deutsche
  Anführungszeichen „…", deutsches Datums- und Zahlenformat, Sentence-case-Überschriften,
  keine Anglizismus-Satzbauten, variierender Satzrhythmus, konkrete Zahlen statt Abstraktion.
- EN ist Hauptsprache, DE wird gleichwertig gepflegt. Jede Seite entsteht in beiden Sprachen.

Arbeitsprinzip: Keine Annahmen. Bei Unsicherheit per Deep-Dive (Doku, Web, Quelle) prüfen,
bevor etwas gebaut oder behauptet wird.

