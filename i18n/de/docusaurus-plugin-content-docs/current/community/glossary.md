---
title: "Glossar"
description: "Erklärungen gängiger Begriffe und Abkürzungen rund um Direct Connect."
sidebar_position: 2
---

import {Glossary, Term} from '@site/src/components/Glossary';

Kurze Erklärungen der Begriffe und Abkürzungen, die dir in Direct Connect begegnen.

## Netzwerk & Hubs

<Glossary>
  <Term name="Dateiliste" href="/docs/basics/how-the-network-works">Die Liste von allem, was ein Nutzer teilt, in der andere zum Herunterladen stöbern.</Term>
  <Term name="Favoriten">Hubs und Nutzer, die dein Client für den schnellen Zugriff speichert.</Term>
  <Term name="Freigabe (Share)" href="/docs/clients/sharing-files">Die Dateien, die du dem Netzwerk anbietest.</Term>
  <Term name="Hub" href="/docs/basics/how-the-network-works">Der Server, auf dem sich Nutzer treffen, chatten und suchen. Er koordiniert, trägt aber nie Dateien.</Term>
  <Term name="Hubliste" href="/docs/clients/finding-joining-hubs">Ein Verzeichnis öffentlicher Hubs, das dein Client laden kann.</Term>
  <Term name="Mindest-Freigabe">Die kleinste Freigabegröße, die ein Hub verlangt, bevor du beitreten kannst.</Term>
  <Term name="Slot">Eine Upload-Verbindung. Hubs und Clients begrenzen, wie viele gleichzeitig laufen.</Term>
  <Term name="Suche" href="/docs/clients/searching-downloading">Den Hub bitten, bei allen nach Dateien zu fragen, die zu deinen Begriffen passen.</Term>
</Glossary>

## Verbindung & Modi

<Glossary>
  <Term name="Active Mode" href="/docs/clients/active-vs-passive-mode">Dein Client nimmt eingehende Verbindungen direkt an. Am besten für Suche und Download.</Term>
  <Term name="Passive Mode" href="/docs/clients/active-vs-passive-mode">Dein Client kann keine eingehenden Verbindungen annehmen, etwa hinter NAT oder einer Firewall. Eingeschränkt.</Term>
  <Term name="Portfreigabe" href="/docs/clients/active-vs-passive-mode">Einen Port am Router öffnen, damit andere Clients dich erreichen, was Active Mode ermöglicht.</Term>
  <Term name="UPnP">Eine Router-Funktion, die Ports automatisch öffnen kann, um Active Mode ohne manuelle Freigabe einzurichten.</Term>
</Glossary>

## Protokolle & Hashing

<Glossary>
  <Term name="ADC" href="/docs/protocols/adc">Advanced Direct Connect, das moderne Protokoll.</Term>
  <Term name="ADCS">ADC über TLS (verschlüsselt).</Term>
  <Term name="CID / SID">In ADC die dauerhafte Kennung eines Clients (CID) und seine Sitzungs-Kennung (SID).</Term>
  <Term name="Magnet-Link" href="/docs/protocols/magnet-links">Ein Link, der über den Hash auf eine Datei verweist.</Term>
  <Term name="NMDC" href="/docs/protocols/nmdc">NeoModus Direct Connect, das ursprüngliche Protokoll.</Term>
  <Term name="NMDCS">NMDC über TLS (verschlüsselt).</Term>
  <Term name="TTH" href="/docs/protocols/tth-hashing">Tiger Tree Hash, der Hash, der eine Datei über ihren Inhalt identifiziert.</Term>
</Glossary>

## Clients & Leute

<Glossary>
  <Term name="Client" href="/docs/clients/dc-clients">Das Programm, mit dem du dich verbindest, etwa DC++ oder AirDC++.</Term>
  <Term name="DC++" href="/docs/clients/dc-clients">Der ursprüngliche Open-Source-Client und die Basis für mehrere andere.</Term>
  <Term name="Leecher">Jemand, der lädt, aber wenig oder nichts teilt. Viele Hubs wirken dem mit einer Mindest-Freigabe entgegen.</Term>
  <Term name="Operator (Op)">Ein Nutzer mit Moderationsrechten auf einem Hub.</Term>
  <Term name="Private Nachricht (PM)">Ein Eins-zu-eins-Chat mit einem anderen Nutzer auf einem Hub.</Term>
</Glossary>
