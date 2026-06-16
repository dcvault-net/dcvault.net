---
title: "Installation & Konfiguration"
description: "Hub-Software installieren und die wichtigsten Einstellungen vornehmen."
sidebar_position: 3
---

import {TopicGrid, TopicCard} from '@site/src/components/Home';

Die genauen Schritte unterscheiden sich je Software, aber der Kern ist überall ähnlich. Nach der Installation legst du fest, wie der Hub erreichbar ist und wie er sich zeigt.

## Kern-Konfiguration

- Ports und Erreichbarkeit: den Hub-Port an Firewall oder Router öffnen, oder den Hub auf einem Server mit öffentlicher IP betreiben.
- Hub-Name, Adresse und Beschreibung: Name und Topic, die Nutzer sehen, und die Adresse (Hostname oder IP, mit einem Protokoll-Schema wie `adc://` oder `dchub://`).
- Limits: maximale Nutzerzahl und, falls gewünscht, eine Mindest-Freigabe.
- Admin-Konto: ein starkes Passwort für den Owner- oder Admin-Login.

## Anleitungen

Einrichtungs-Anleitungen für bestimmte Hub-Software. Folgt in Kürze.

<TopicGrid>
  <TopicCard title="Verlihub" icon="server" badge="Bald">Anleitung folgt.</TopicCard>
  <TopicCard title="ADCH++" icon="server" badge="Bald">Anleitung folgt.</TopicCard>
  <TopicCard title="Luadch-ng" icon="server" badge="Bald">Anleitung folgt.</TopicCard>
  <TopicCard title="uHub" icon="server" badge="Bald">Anleitung folgt.</TopicCard>
  <TopicCard title="PtokaX" icon="server" badge="Bald">Anleitung folgt.</TopicCard>
</TopicGrid>

:::warning[Betreibe deinen Hub mit TLS]
Betreibe den Hub verschlüsselt: ADCS für ADC, NMDCS für NMDC. Ohne TLS ist die Verbindung zwischen Nutzern und Hub Klartext, jeder, der den Netzwerkweg beobachten kann (ein ISP, ein Netzwerk- oder WLAN-Betreiber, jemand im selben Netz), kann Chat, Suchanfragen und an den Hub gesendete Zugangsdaten mitlesen, und Manipulation wird leichter. TLS schützt diese Verbindung vor Dritten. Es verbirgt nicht die IP eines Nutzers gegenüber Peers, und du als Betreiber siehst Hub-Chat und Suchen weiterhin. Halte die Software aktuell, nutze eine Firewall und wähle ein starkes Admin-Passwort.
:::

Die Details variieren, sieh für die genauen Einstellungen in der Doku deiner Software nach.
