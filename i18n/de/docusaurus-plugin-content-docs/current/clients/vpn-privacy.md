---
title: "VPN & Privatsphäre"
description: "Worauf du bei Privatsphäre in Direct Connect achtest und wie ein VPN dein Setup verändert."
sidebar_position: 8
---

Standardmäßig sehen andere im Netzwerk mehr, als du vielleicht denkst. Diese Seite zeigt, was sichtbar ist, wie ein VPN hilft, worauf du achten musst und wie sich die Rechtsdurchsetzung je Land unterscheidet.

## Was andere sehen

- Der Hub sieht deine IP-Adresse, deinen Nick, deine Freigabe, Chat und Suchen.
- Im Active Mode verbinden sich andere Clients für Übertragungen direkt mit dir, sehen also auch deine IP.
- Auf einem Hub ohne TLS kann jeder, der den Netzwerkweg beobachtet, Chat und Suchen mitlesen. Siehe [Active- vs. Passive-Mode](/de/docs/clients/active-vs-passive-mode).

Deine IP-Adresse ist das, was dich identifiziert.

## Was ein VPN bewirkt

Ein VPN leitet deinen Verkehr über seinen Server, Peers und Hub sehen also die IP des VPN statt deiner echten. Beim Filesharing ist das der wichtigste Gewinn: Es verbirgt die IP, auf die sich die Rechtsdurchsetzung stützt.

Es ist keine vollständige Anonymität. Der Hub sieht weiterhin, was du preisgibst, etwa Nick und Chat, und ein VPN verschlüsselt deinen DC-Verkehr nicht von allein. Für Verschlüsselung nutze TLS-Hubs (ADCS oder NMDCS).

## Der Port-Haken

Direct Connect braucht für Active Mode rund drei Ports: TCP für Übertragungen, TCP für TLS-Übertragungen und UDP für die Suche. Viele VPNs erlauben keine Portfreigabe, dann steckst du im eingeschränkten Passive Mode. Wähle ein VPN, das Portfreigabe unterstützt, idealerweise mehrere Ports.

## VPNs, die mit DC funktionieren

_Die folgenden Links sind Referral-Links, die DCVault unterstützen._

- [AirVPN](https://airvpn.org/?referred_by=746001) lässt dich bis zu fünf Ports freigeben, das passt gut zu Direct Connect. Getestet und funktioniert. Unser Tipp.
- [Hide.me](https://ref.hide.io/EPmoZN) öffnet Ports automatisch über UPnP. Getestet und funktioniert.

## Rechtsdurchsetzung je Land

Das hier ist allgemeine Information, keine Rechtsberatung, und die Regeln ändern sich. Der Kern: Fast jede Durchsetzung beginnt bei deiner IP-Adresse.

- **Deutschland**: am schärfsten. Kanzleien verschicken massenhaft Abmahnungen anhand geloggter IPs und verlangen eine Unterlassungserklärung und eine oft vierstellige Zahlung.
- **Restliches Westeuropa**: abgestufter. Frankreich hat ein Verwarn- und Stufensystem (früher HADOPI, heute unter der Behörde ARCOM), das bis zu Geldstrafen reichen kann. Großbritannien setzt auf Warnbriefe der Provider. Massen-Abmahnungen wie in Deutschland sind die Ausnahme.
- **Osteuropa**: die Durchsetzung ist meist weniger aggressiv und stark länderabhängig.
- **USA**: keine Briefe wie in Deutschland, aber Copyright Trolls verklagen IP-identifizierte „Doe"-Beklagte in Massen und nutzen hohe Schadensersatzdrohungen, um Vergleiche zu erzwingen. Provider leiten zudem Infringement-Notices weiter.
- **China**: die Durchsetzung ist uneinheitlich und anders gelagert. Der größere Faktor ist die starke staatliche Kontrolle des Internets.

## Privatsphäre-Tipps

:::tip[Bleib privat]

- Keine echten Namen verwenden.
- Keine privaten Daten preisgeben.
- Vorsichtig bleiben und mitdenken.

:::
