---
title: "Installation & Einrichtung"
description: "Einen Direct-Connect-Client installieren und die erste Konfiguration abschließen."
sidebar_position: 3
---

Wenn du dich für einen Client entschieden hast, geht es ans Einrichten. Die GUI-Clients (DC++ und AirDC++) sind fast gleich aufgebaut, daher lässt sich dieser DC++-Durchlauf gut übertragen. Die Web-Oberfläche von AirDC++ wird anders eingerichtet.

## DC++ unter Windows

Lade DC++ von der [offiziellen Website](https://dcplusplus.sourceforge.io/) und installiere es. Beim ersten Start öffnen sich direkt die Einstellungen, sodass du die wichtigsten Optionen gleich setzen kannst.

### Persönliche Angaben

![DC++ Einstellungen für persönliche Angaben](/img/getting-started/1_personalinfo.png)

1. Trage deinen Spitznamen ein. Er gilt global für alle Hubs, du kannst später aber pro Hub einen eigenen setzen.
2. Die Beschreibung ist optional.
3. Die E-Mail ist optional.
4. Trage deine Upload-Geschwindigkeit ein (teste sie bei [Speedtest.net](https://www.speedtest.net/)).
5. Lege eine Abwesenheitsnachricht fest, die an Leute geht, die dir schreiben, während du weg bist.

### Verbindung

![DC++ automatische Verbindungseinstellungen](/img/getting-started/2_connectauto.png)

1. Du kannst DC++ das Netzwerk automatisch einrichten lassen. Das klappt nur, wenn UPnP an deinem Router aktiv ist.
2. Wenn Active Mode nicht von allein klappt, richte die Verbindung manuell ein.

![DC++ manuelle Verbindungseinstellungen](/img/getting-started/3_connectmanual.png)

1. TCP-Port für eingehende Verbindungen von anderen Peers.
2. TCP-Port für eingehende TLS-Verbindungen (verschlüsselt). Nimm einen anderen Wert als für die Übertragungen.
3. UDP-Port für eingehende Suchergebnisse.
4. Wenn du die Ports selbst freigegeben hast, wähle die erste Option. Ist UPnP aktiv, wähle die zweite. Ohne Portfreigabe bleibst du im Passive Mode, der stark eingeschränkt ist.
5. Wähle hier MiniUPnP, da UPnP in den meisten Heimroutern eingebaut ist.

:::warning[Active Mode einrichten]
Portfreigabe oder UPnP ist kein Hexenwerk. Suche nach `Routermodell + Portfreigabe` oder `Routermodell + UPnP`, es gibt viele Anleitungen und Videos. Warum das wichtig ist, steht unter [Active- vs. Passive-Mode](/de/docs/clients/active-vs-passive-mode).
:::

### Downloads

![DC++ Download-Einstellungen](/img/getting-started/4_downloads.png)

1. Wähle einen Download-Ordner.
2. Wähle einen Ordner für unvollständige Downloads.
3. Wähle ein sinnvolles Limit für gleichzeitige Downloads. Werte zwischen 4 und 10 sind gut.

### Optional, unter Advanced

- Registriere DC++ für die Links `adc://`, `adcs://`, `dchub://` und `nmdcs://`.
- Aktiviere unter Security & Certificates die Option "Always attempt to establish a direct encrypted private message channel". Das funktioniert nur mit TLS-Hubs (ADCS und NMDCS).

Als Nächstes richtest du deine Freigabe ein. Siehe [Dateien teilen](/de/docs/clients/sharing-files).

## AirDC++ Web-UI mit Docker

Kommt bald.
