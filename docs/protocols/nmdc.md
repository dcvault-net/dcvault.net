---
title: "NMDC protocol"
description: "The original Direct Connect protocol (NMDC) and how it works."
sidebar_position: 1
---

NMDC is the original Direct Connect protocol from the NeoModus days. It is text-based, grew organically, and is messy in spots. A lot of it was reverse-engineered by the community, because there was no clean official spec for years. Sniff the traffic and you will see commands like `$MyINFO`, `$Search`, `$ConnectToMe`, and `$ADCGET`. NMDC later gained TLS encryption (NMDCS).

## Documentation

- [NMDC protocol documentation](https://dc-protocols.github.io/NMDC.html) (updated by Aleksandr Zenkov, 2026)
- [Older NMDC documentation](https://nmdc.sourceforge.io/) (no longer updated)

See also the modern successor, the [ADC protocol](/docs/protocols/adc).
