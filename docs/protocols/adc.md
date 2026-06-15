---
title: "ADC protocol"
description: "The modern ADC protocol, its design, and how it differs from NMDC."
sidebar_position: 2
---

ADC (Advanced Direct Connect) is the modern successor to NMDC. The idea is the same, the hub coordinates and clients transfer, but the design is cleaner: a clear message structure, real client identities (CID and SID), feature negotiation, and proper TLS support (ADCS). Setting something up fresh today? ADC is the saner pick.

## Documentation

- [ADC protocol documentation](https://adc.sourceforge.io/ADC.html) (maintained by the DC++ team)
- [ADC-EXT documentation](https://adc.sourceforge.io/ADC-EXT.html) (maintained by the DC++ team)

For the older protocol, see [NMDC](/docs/protocols/nmdc).
