---
title: "Wie das Netzwerk funktioniert"
description: "Wie Hubs, Clients und Peers in Direct Connect verbunden sind und was bei Suche und Download passiert."
sidebar_position: 2
---

Direct Connect besteht aus zwei Teilen: Hubs bringen Leute zusammen, Clients verbinden Peers direkt für die Übertragung. So greift das ineinander.

Der häufigste Stolperstein für Neue: Der Hub ist nicht der Ort, an dem die Dateien liegen. Ein Hub ist ein Treffpunkt. Du verbindest dich, siehst wer online ist, chattest und suchst. Beim Download spricht dein Client direkt mit dem Client der anderen Person. Der Hub fasst die Datei nie an.

## Was der Hub macht

- Meldet dich an und verwaltet deinen Spitznamen auf dem Hub
- Führt den Hauptchat und private Nachrichten
- Hält die Benutzerliste
- Leitet deine Suchanfragen an alle weiter
- Stellt die Verbindungen zwischen den Clients her
- Setzt die Regeln durch (Rechte, Klassen, Operators, Bans)

Bei ADC handelt er zusätzlich Funktionen zwischen den Clients aus. Mehr dazu im [ADC-Protokoll](/de/docs/protocols/adc).

## Wie ein Download abläuft

![So läuft ein Download in Direct Connect ab](/img/getting-started/dcdownload.webp)

Du und ein anderer Nutzer seid beide mit dem Hub verbunden. Du suchst nach einer Datei, der Hub reicht deine Anfrage herum, und jemand antwortet. Die beiden Clients öffnen dann eine direkte Verbindung, und Datei, Dateiliste oder Hash-Prüfung laufen direkt zwischen euch. Über den Hub gehen nur die Suche, die Antworten und die Verbindungsanfrage. Die Übertragung selbst nie.

## Dateilisten

Dein Client bietet keine losen Dateien spontan an. Er baut eine Dateiliste von allem, was du teilst, mit Ordnerstruktur, Namen, Größen und Hashes (meist TTH). Andere laden diese Liste, stöbern darin und holen sich, was sie wollen, wieder direkt von deinem Rechner.

Hashes identifizieren eine Datei über ihren Inhalt, nicht über ihren Namen. Warum das wichtig ist, steht unter [TTH & Hashing](/de/docs/protocols/tth-hashing).

## Kurz gesagt

Der Hub ist die Lobby. Deine Dateien bleiben auf deinem Rechner. Downloads laufen direkt zwischen den Clients, und Hashes verbinden das Ganze, damit das Netzwerk dieselbe Datei an mehreren Stellen findet. Bring [Active Mode](/de/docs/clients/active-vs-passive-mode) zum Laufen, dann verschwindet der meiste Ärger.
