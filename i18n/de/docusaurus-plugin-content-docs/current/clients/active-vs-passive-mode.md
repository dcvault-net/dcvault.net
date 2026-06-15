---
title: "Active- vs. Passive-Mode"
description: "Der Unterschied zwischen Active- und Passive-Mode in Direct Connect und wie du beide einrichtest."
sidebar_position: 7
---

Dein Verbindungsmodus entscheidet, wie gut Suche und Download funktionieren. Es gibt zwei Modi, Active und Passive.

![Aktive und passive Verbindungen in Direct Connect](/img/getting-started/activepassive.webp)

## Active Mode

Active heißt, andere Clients erreichen dich direkt. Suche und Übertragungen laufen ohne Probleme, und du kannst dich mit aktiven wie passiven Nutzern verbinden.

## Passive Mode

Passive heißt, du sitzt hinter NAT oder einer Firewall ohne Portfreigabe, also kommt von außen nichts zu dir durch. Zwei passive Nutzer können sich oft gar nicht verbinden, und deine Suchergebnisse laufen stattdessen über den Hub. Wenn Downloads sich halb kaputt anfühlen, liegt es meist daran.

## Wie ein passiver Download trotzdem klappt

Wenn ein aktiver und ein passiver Nutzer tauschen wollen, hilft der Hub beim Zusammenfinden.

![Ein passiver Client öffnet die Verbindung nach außen](/img/getting-started/dc_active_passive.webp)

Der Hub leitet die Verbindungsanfrage weiter, der passive Client öffnet die Verbindung nach außen (was seine Firewall durchlässt), und die Dateidaten fließen dann zurück zur aktiven Seite.

:::tip[Active Mode bringt die besten Ergebnisse]

Um das meiste aus dem Netzwerk zu holen, nutze Active Mode. Das heißt, die richtigen Ports an Router oder Firewall zu öffnen. Portfreigabe oder UPnP einzurichten ist kein Hexenwerk: Suche nach `Routermodell + Portfreigabe` oder `Routermodell + UPnP`, es gibt viele Anleitungen.

:::
