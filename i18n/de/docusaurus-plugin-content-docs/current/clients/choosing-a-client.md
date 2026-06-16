---
title: "Client auswählen"
description: "Wie du einen Direct-Connect-Client für dein System und deine Nutzung auswählst."
sidebar_position: 1
---

import {TopicGrid, TopicCard} from '@site/src/components/Home';

Es gibt mehrere DC-Clients, und welcher passt, hängt von deinem System und deiner Arbeitsweise ab.

:::warning[Nimm einen gepflegten Client]
Nimm einen Client, der noch aktiv entwickelt wird. Mehrere ältere DC-Clients wurden seit Jahren nicht aktualisiert und können ungepatchte Sicherheitslücken haben, gerade bei TLS. Die [Client-Liste](/de/docs/clients/dc-clients) zeigt, welche aktiv sind.
:::

## Worauf achten

- Dein System. Manche Clients laufen nur unter Windows, andere auch unter Linux und macOS.
- Die gewünschte Oberfläche: ein Desktop-Programm, ein Kommandozeilen-Client oder eine Web-Oberfläche.
- Aktive Entwicklung. Ein gepflegter Client bekommt weiter Sicherheits- und Protokoll-Updates.

## Gute Startpunkte

<TopicGrid>
  <TopicCard title="DC++" href="/docs/clients/dc-clients" icon="download">Der ursprüngliche GUI-Client für Windows. Ein solider Standard für den Anfang.</TopicCard>
  <TopicCard title="AirDC++" href="/docs/clients/dc-clients" icon="server">GUI und Web-Oberfläche für Windows und Linux. Gut für Dauerbetrieb oder entfernte Setups.</TopicCard>
</TopicGrid>

In der [Client-Liste](/de/docs/clients/dc-clients) findest du einen direkten Vergleich, danach geht es weiter zur [Installation & Einrichtung](/de/docs/clients/installation-setup).
