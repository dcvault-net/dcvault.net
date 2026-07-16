---
title: "NMDC-Protokoll: das ursprüngliche Direct Connect"
sidebar_label: "NMDC-Protokoll"
description: "Das ursprüngliche Direct-Connect-Protokoll (NMDC): wie seine Befehle arbeiten, warum es weiterhin verbreitet ist und welche Grenzen zu ADC führten."
sidebar_position: 1
---

NMDC ist das ursprüngliche Direct-Connect-Protokoll aus den NeoModus-Tagen. Es ist textbasiert, ist organisch gewachsen und an manchen Stellen unsauber. Vieles wurde von der Community per Reverse Engineering erschlossen, weil es jahrelang keine saubere offizielle Spezifikation gab. Im Datenverkehr siehst du Befehle wie `$MyINFO`, `$Search`, `$ConnectToMe` und `$ADCGET`. Später kam TLS-Verschlüsselung dazu (NMDCS).

## Dokumentation

- [NMDC-Protokoll-Dokumentation](https://dc-protocols.github.io/NMDC.html) (aktualisiert von Aleksandr Zenkov, 2026)
- [Ältere NMDC-Dokumentation](https://nmdc.sourceforge.io/) (wird nicht mehr gepflegt)

Siehe auch den modernen Nachfolger, das [ADC-Protokoll](/de/docs/protocols/adc).
