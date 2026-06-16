---
title: "Installation & config"
description: "Install hub software and work through the core configuration."
sidebar_position: 3
---

import {TopicGrid, TopicCard} from '@site/src/components/Home';

The exact steps differ per software, but the core setup is similar everywhere. After installing, you configure how the hub is reached and how it presents itself.

## Core configuration

- Ports and reachability: open the hub's port on your firewall or router, or run it on a server with a public IP.
- Hub name, address, and description: the name and topic users see, and the address (hostname or IP, with a protocol scheme like `adc://` or `dchub://`).
- Limits: maximum users, and a minimum share if you want one.
- Admin account: set a strong password for the owner or admin login.

## Guides

Setup guides for specific hub software. Coming soon.

<TopicGrid>
  <TopicCard title="Verlihub" icon="server" badge="Soon">Setup guide coming soon.</TopicCard>
  <TopicCard title="ADCH++" icon="server" badge="Soon">Setup guide coming soon.</TopicCard>
  <TopicCard title="Luadch-ng" icon="server" badge="Soon">Setup guide coming soon.</TopicCard>
  <TopicCard title="uHub" icon="server" badge="Soon">Setup guide coming soon.</TopicCard>
  <TopicCard title="PtokaX" icon="server" badge="Soon">Setup guide coming soon.</TopicCard>
</TopicGrid>

:::warning[Run your hub with TLS]
Run the hub encrypted: ADCS for ADC, NMDCS for NMDC. Without TLS the connection between users and the hub is plaintext, so anyone who can watch the network path (an ISP, a network or Wi-Fi operator, someone on the same network) can read chat, search queries, and credentials sent to the hub, and tampering is easier. TLS protects that connection from outsiders. It does not hide a user's IP from peers, and you as the operator still see hub chat and searches. Keep the software updated, use a firewall, and pick a strong admin password.
:::

Specifics vary, so check your software's own documentation for the exact settings.
