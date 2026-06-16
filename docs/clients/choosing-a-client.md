---
title: "Choosing a client"
description: "How to pick a Direct Connect client for your platform and the way you want to use the network."
sidebar_position: 1
---

import {TopicGrid, TopicCard} from '@site/src/components/Home';

Several DC clients exist, and which one fits depends on your platform and how you like to work.

:::warning[Choose a maintained client]
Prefer a client that is still actively developed. Several older DC clients have not been updated in years and may carry unpatched security holes, especially around TLS. The [client list](/docs/clients/dc-clients) marks which ones are active.
:::

## What to weigh

- Your platform. Some clients are Windows-only, others run on Linux and macOS too.
- The interface you want: a desktop GUI, a command-line client, or a web UI.
- Active development. A maintained client keeps getting security and protocol fixes.

## Good starting points

<TopicGrid>
  <TopicCard title="DC++" href="/docs/clients/dc-clients" icon="download">The original GUI client for Windows. A solid default if you are new.</TopicCard>
  <TopicCard title="AirDC++" href="/docs/clients/dc-clients" icon="server">GUI and web UI for Windows and Linux. Good for always-on or remote setups.</TopicCard>
</TopicGrid>

See the full [client list](/docs/clients/dc-clients) for a side-by-side comparison, then move on to [installation & setup](/docs/clients/installation-setup).
