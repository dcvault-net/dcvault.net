---
title: "Dateien teilen"
description: "Freigabe einrichten, Dateiliste erstellen und verstehen, wie Hashing funktioniert."
sidebar_position: 4
---

Über die Freigabe trägst du zum Netzwerk bei. Dein Client bietet keine losen Dateien spontan an. Er baut eine Dateiliste von allem, was du teilst, mit Ordnerstruktur, Namen, Größen und Hashes (meist TTH). Andere laden diese Liste, stöbern darin und holen sich, was sie wollen, direkt von deinem Rechner.

:::warning[Teile nur, was du wirklich teilen willst]
Gib keine Ordner frei, die private Daten wie persönliche Fotos, Dokumente oder Systemordner enthalten. Alles in deiner Freigabe ist für andere auf dem Hub sichtbar und kann heruntergeladen werden. Am sichersten legst du einen eigenen Ordner nur für die Freigabe an und kopierst dort nur die Dateien hinein, die du anbieten willst.
:::

## Freigabe in DC++ einrichten

![DC++ Freigabe-Einstellungen](/img/getting-started/5_sharing.png)

1. Dieses Fenster zeigt deine freigegebenen Ordner.
2. Klicke hier, um einen Ordner zur Freigabe hinzuzufügen, und wähle den Pfad.
3. Stelle die Upload-Slots passend zu deiner Verbindung ein. An einer Heimleitung sind 3 bis 5 in Ordnung. Auf einer Seedbox oder einem Server kannst du höher gehen, 10 bis 30. Du musst etwas ausprobieren.
4. Die Extra-Slots kannst du so lassen. Sie sind für kleine Dateien und Dateilisten, wenn deine normalen Slots voll sind.
5. Wenn du einen Ordner hinzufügst, startet das Hashing automatisch. Dieses Fenster zeigt den Fortschritt von Indexierung und Hashing.

Hashes identifizieren Dateien über den Inhalt. Details stehen unter [TTH & Hashing](/de/docs/protocols/tth-hashing).
