---
title: "TTH & Hashing"
description: "Wie Tiger Tree Hashing Dateien identifiziert und Downloads in Direct Connect prüft."
sidebar_position: 3
---

Direct Connect setzt stark auf [Tiger Tree Hashing](https://hashing.tools/tiger) (TTH). Der Kern: Eine Datei wird über ihren Hash identifiziert, nicht über ihren Namen. Du kannst sie beliebig umbenennen, der TTH bleibt gleich.

Das bringt mehrere Vorteile:

- Dein Client erkennt dieselbe Datei bei mehreren Nutzern
- Er kann aus mehreren Quellen gleichzeitig laden
- Er kann bei einem anderen weitermachen, wenn ein Peer abbricht
- Er prüft, ob der Download unversehrt angekommen ist

Genau das lässt [Dateilisten](/de/docs/basics/how-the-network-works) und [Magnet-Links](/de/docs/protocols/magnet-links) funktionieren.
