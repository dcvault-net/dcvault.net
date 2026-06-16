---
title: "Magnet-Links"
description: "Wie Magnet-Links in Direct Connect funktionieren und wie du sie nutzt."
sidebar_position: 4
---

Ein Magnet-Link ist ein kurzer, anklickbarer Verweis auf eine Datei. In Direct Connect verweist er über den [Tiger Tree Hash](/de/docs/protocols/tth-hashing) auf eine Datei, sodass jeder genau diese Datei suchen und herunterladen kann, ohne dass du die Datei selbst verschickst.

## Wie ein Magnet-Link aufgebaut ist

Ein Direct-Connect-Magnet-Link sieht so aus:

```text
magnet:?xt=urn:tree:tiger:UXNWMYERN37HJNXB7V6KDJKZXMFBIQAGMDMYDBY&xl=10568432&dn=beispiel-datei.zip
```

Auf das Präfix `magnet:?` folgen ein paar Parameter:

- `xt` (exact topic): die Kennung der Datei. In Direct Connect ist das `urn:tree:tiger:` gefolgt vom base32-kodierten Tiger Tree Hash. Das ist der wesentliche Teil, er identifiziert die Datei über ihren Inhalt.
- `xl` (exact length): die Dateigröße in Bytes.
- `dn` (display name): der Dateiname, der dem Nutzer angezeigt wird (URL-kodiert).

Nur `xt` ist nötig, um die Datei zu finden. `xl` und `dn` sind Zusatzinfos.

## Nutzung in DC++

In einem GUI-Client wie DC++ kannst du eine Datei, in einem Suchergebnis oder einer Dateiliste, per Rechtsklick als Magnet-Link kopieren und ihn dann in den Hub-Chat oder anderswo einfügen. Klickt jemand auf einen Magnet-Link, bietet der Client an, im Netzwerk nach dem Hash zu suchen, und lädt die Datei von dem, der sie teilt.

Ein Punkt dabei: Ein Direct-Connect-Magnet findet die Datei nur, wenn jemand auf einem Hub, mit dem du verbunden bist, sie teilt. Es gibt keinen globalen Tracker, die Reichweite eines Magnets sind also die Hubs, auf denen du bist.

## Nicht dasselbe wie Torrent-Magnets

Torrent-Magnet-Links nutzen dasselbe Schema `magnet:?xt=urn:...`, daher die leichte Verwechslungsgefahr, aber der Hash-Typ ist ein anderer, und die beiden sind nicht austauschbar.

| | Direct Connect | BitTorrent |
| --- | --- | --- |
| `xt`-Namespace | `urn:tree:tiger` | `urn:btih` (v1), `urn:btmh` (v2) |
| Hash | Tiger Tree Hash der Datei | Info-Hash des Torrents |
| Identifiziert | eine einzelne Datei | einen Torrent (eine oder mehrere Dateien plus Metadaten) |
| Findet Peers über | die Hubs, mit denen du verbunden bist | Tracker und die DHT |

:::note[Nicht austauschbar]
Ein DC-Client versteht nur `urn:tree:tiger`-Magnets, ein Torrent-Client nur `urn:btih`. Ein Torrent-Magnet, in DC++ eingefügt, funktioniert nicht, und ein Direct-Connect-Magnet funktioniert nicht in einem Torrent-Client.
:::
