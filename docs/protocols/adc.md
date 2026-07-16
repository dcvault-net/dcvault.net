---
title: "ADC protocol: the modern Direct Connect"
sidebar_label: "ADC protocol"
description: "The modern ADC protocol for Direct Connect: its design, how it differs from NMDC, its command structure, and extensions such as HBRI for IPv4 and IPv6."
sidebar_position: 2
---

ADC (Advanced Direct Connect) is the modern successor to NMDC. The idea is the same, the hub coordinates and clients transfer, but the design is cleaner: a clear message structure, real client identities (CID and SID), feature negotiation, and proper TLS support (ADCS). Setting something up fresh today? ADC is the saner pick.

## Documentation

- [ADC protocol documentation](https://adc.sourceforge.io/ADC.html) (maintained by the DC++ team)
- [ADC-EXT documentation](https://adc.sourceforge.io/ADC-EXT.html) (maintained by the DC++ team)

## HBRI

HBRI is an unofficial ADC extension for hybrid hubs that are reachable over both IPv4 and IPv6. It lets the hub verify the address a client did not connect with: the client opens a short second login connection over the other IP version and proves it with a token, so the hub can publish both addresses and keep client-to-client connections and NAT traversal working across both protocols.

It is implemented in AirDC++, ADCH++, and Luadch-ng but is not part of the official ADC specification. For the original proposal, the implementation notes, and an example login, see the discussion on our forum:

- [HBRI: IPv4/IPv6 verification for hybrid hubs](https://forum.dcvault.net/t/hbri-ipv4-ipv6-verification-for-hybrid-hubs/22)

For the older protocol, see [NMDC](/docs/protocols/nmdc).
