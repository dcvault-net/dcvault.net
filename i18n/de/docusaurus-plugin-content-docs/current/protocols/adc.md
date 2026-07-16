---
title: "ADC-Protokoll: das moderne Direct Connect"
sidebar_label: "ADC-Protokoll"
description: "Das moderne ADC-Protokoll für Direct Connect: sein Aufbau, die Unterschiede zu NMDC, die Befehlsstruktur und Erweiterungen wie HBRI für IPv4 und IPv6."
sidebar_position: 2
---

ADC (Advanced Direct Connect) ist der moderne Nachfolger von NMDC. Die Idee ist dieselbe, der Hub koordiniert und die Clients übertragen, aber der Aufbau ist sauberer: eine klare Nachrichtenstruktur, echte Client-Identitäten (CID und SID), Feature-Aushandlung und sauberes TLS (ADCS). Du richtest heute etwas Neues ein? Dann ist ADC die vernünftigere Wahl.

## Dokumentation

- [ADC-Protokoll-Dokumentation](https://adc.sourceforge.io/ADC.html) (gepflegt vom DC++-Team)
- [ADC-EXT-Dokumentation](https://adc.sourceforge.io/ADC-EXT.html) (gepflegt vom DC++-Team)

## HBRI

HBRI ist eine inoffizielle ADC-Erweiterung für hybride Hubs, die über IPv4 und IPv6 erreichbar sind. Der Hub prüft damit die Adresse, mit der ein Client nicht verbunden ist: Der Client baut eine kurze zweite Login-Verbindung über die andere IP-Version auf und weist sie mit einem Token nach. So kann der Hub beide Adressen veröffentlichen, und Client-zu-Client-Verbindungen sowie NAT-Traversal funktionieren über beide Protokolle.

Umgesetzt ist HBRI in AirDC++, ADCH++ und Luadch-ng, Teil der offiziellen ADC-Spezifikation ist es aber nicht. Den ursprünglichen Vorschlag, die Umsetzungsnotizen und ein Login-Beispiel findest du in der Diskussion in unserem Forum:

- [HBRI: IPv4/IPv6 verification for hybrid hubs](https://forum.dcvault.net/t/hbri-ipv4-ipv6-verification-for-hybrid-hubs/22)

Zum älteren Protokoll siehe [NMDC](/de/docs/protocols/nmdc).
