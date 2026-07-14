---
title: "AirVPN für DC++ einrichten"
sidebar_label: "AirVPN"
description: "AirVPN mit DC++ einrichten: Eddie installieren, die drei Ports freigeben, die Direct Connect braucht, und DC++ in den Active Mode schalten."
sidebar_position: 1
---

Ein VPN verbirgt deine echte IP vor dem Hub und vor anderen Nutzern. Dieser Guide richtet eins für DC++ ein. Andere Clients sind etwas anders aufgebaut, die Einstellungen sind aber vergleichbar. Was ein VPN schützt und was nicht, steht unter [VPN & Privatsphäre](/de/docs/clients/vpn-privacy).

## Warum AirVPN

Direct Connect braucht für den [Active Mode](/de/docs/clients/active-vs-passive-mode) eine Portfreigabe, und zwar mehr als einen Port: einen TCP-Port für Übertragungen, einen TCP-Port für verschlüsselte Übertragungen und einen UDP-Port für die Suche. Die meisten VPNs geben gar keine Ports frei, und die wenigen, die es können, hören oft bei einem oder zwei auf. Bei AirVPN gibst du bis zu fünf Ports frei, das reicht für Direct Connect mit Abstand.

Leg dir zum Start ein Konto auf [AirVPN.org](https://airvpn.org/?referred_by=746001)<sup>*</sup> an.

## Eddie installieren

Eddie ist der eigene Client von AirVPN und der einfachste Weg, dich zu verbinden. Lade ihn für dein System:

- [Windows](https://airvpn.org/windows/)
- [Linux](https://airvpn.org/linux/eddie/)
- [macOS](https://airvpn.org/macos/eddie/)

Erfahrene Nutzer können stattdessen WireGuard- oder OpenVPN-Configs erzeugen, für die meisten funktioniert Eddie aber am besten.

## Eddie-Einstellungen prüfen

Öffne nach der Installation die Einstellungen und geh diese Reiter durch.

### Allgemein

Aktiviere „beim Start verbinden", „mit dem letzten Server neu verbinden", „Network Lock beim Start aktivieren" und „mit dem System starten". So steht das VPN, bevor du irgendetwas anderes öffnest.

![Eddie Allgemein-Einstellungen](/img/airvpn/airvpn_eddie_settings_general.png)

### Network Lock

Das ist der Kill Switch. Lass ihn auf „Automatic". Fällt der Tunnel aus, blockiert er den gesamten Verkehr, damit deine echte IP nicht nach außen dringt. Lass „Allow lan/private" aktiv, damit dein lokales Netzwerk weiter funktioniert.

![Eddie Network-Lock-Einstellungen](/img/airvpn/airvpn_eddie_settings_networklock.png)

### Routen (optional)

Trage deinen lokalen Netzbereich als „Outside the VPN tunnel" ein, wenn du im verbundenen Zustand weiter auf Geräte im LAN zugreifen willst, etwa den Router oder ein NAS. Nimm dein eigenes Subnetz.

![Eddie Routen-Einstellungen](/img/airvpn/airvpn_eddie_settings_routes.png)

### Mit einem Server verbinden

Öffne die Serverliste, wähl einen in deiner Nähe und verbinde dich per Doppelklick. Jeder AirVPN-Server unterstützt Portfreigabe, es funktioniert also jeder.

![Eddie Serverliste](/img/airvpn/airvpn_eddie_settings_serverbrowser.png)

## Ports freigeben

Öffne in deinem Konto die [Seite für Portfreigaben](https://airvpn.org/ports/) und leg drei Ports an. Die Nummern selbst sind egal, nimm also freie beliebige, aber übernimm Beschriftung und Protokoll genau so:

- Transfer Port, TCP only
- Search Port, UDP only
- Transfer Encrypted, TCP only

Lass die IP-Ebene auf IPv4+IPv6. Notiere dir die drei Nummern, du brauchst sie gleich in DC++.

![AirVPN Portfreigaben](/img/airvpn/airvpn_portforwarding_site.png)

## DC++ einrichten

Richte DC++ auf dieselben drei Ports aus. Der Screenshot zeigt die drei Schritte:

1. Öffne die Einstellungen.
2. Geh zu Connectivity, dann Manual configuration.
3. Trage dieselben Nummern ein, die du bei AirVPN gesetzt hast: den Transfer Port bei „Transfer port", den Transfer Encrypted bei „Encrypted transfer port" und den Search Port bei „Search port". Wähl dann „Active mode (I have no router / I have configured my router)" und stell dasselbe im Abschnitt IPv6 darunter ein.

![DC++ Verbindungseinstellungen](/img/airvpn/dcpp_connection_settings.png)

Lass das Feld für die externe IP leer. DC++ nutzt dann die Adresse, die der Hub sieht, und das ist die des VPN.

:::tip[Prüfen, ob es läuft]
Nutz bei jedem Port in AirVPN „Test open", um zu prüfen, ob der Port erreichbar ist. In DC++ läuft der Active Mode, sobald deine Suchen Treffer liefern und andere von dir herunterladen können.
:::

Lass Eddie verbunden, solange du DC++ nutzt. Ist das VPN aus, blockiert der Network Lock die Verbindung, statt deine echte IP preiszugeben.

---

<small>\*Referral-Link, der DCVault unterstützt: [https://airvpn.org/?referred_by=746001](https://airvpn.org/?referred_by=746001)</small>
