---
title: "Installation & setup"
description: "Install a Direct Connect client and complete the first-run configuration."
sidebar_position: 3
---

Once you have chosen a client, it is time to set it up. The GUI clients (DC++ and AirDC++) are laid out almost identically, so this DC++ walkthrough transfers well. The AirDC++ web UI is set up differently.

## DC++ on Windows

Download DC++ from the [official website](https://dcplusplus.sourceforge.io/) and install it. On first launch it opens the settings, so you can set the important options right away.

### Personal information

![DC++ personal information settings](/img/getting-started/1_personalinfo.png)

1. Enter your nickname. It is used globally across hubs, but you can set a per-hub nick later.
2. The description is optional.
3. The email is optional.
4. Enter your upload speed (test it at [Speedtest.net](https://www.speedtest.net/)).
5. Set an away message that is sent to people who message you while you are away.

### Connection

![DC++ automatic connection settings](/img/getting-started/2_connectauto.png)

1. You can let DC++ configure the network automatically. This only works if UPnP is enabled on your router.
2. If it cannot set up active mode on its own, configure the connection manually.

![DC++ manual connection settings](/img/getting-started/3_connectmanual.png)

1. TCP port for incoming connections from other peers.
2. TCP port for incoming TLS (encrypted) connections. Use a different value than the transfer port.
3. UDP port for incoming search results.
4. If you forwarded the ports yourself, pick the first option. If UPnP is enabled, pick the second. Without port forwarding you are stuck in passive mode, which is limited.
5. Choose MiniUPnP, since UPnP is built into most home routers.

:::warning[Set up active mode]
Port forwarding or UPnP is not rocket science. Search for your `router model + port forwarding` or `router model + UPnP`, there are plenty of guides and videos. See [Active vs. passive mode](/docs/clients/active-vs-passive-mode) for why it matters.
:::

### Downloads

![DC++ downloads settings](/img/getting-started/4_downloads.png)

1. Pick a download folder.
2. Pick a folder for incomplete downloads.
3. Choose a sensible limit on simultaneous downloads. Values between 4 and 10 work well.

### Optional, under Advanced

- Register DC++ to handle `adc://`, `adcs://`, `dchub://`, and `nmdcs://` links.
- Under Security & Certificates, enable "Always attempt to establish a direct encrypted private message channel". This only works with TLS hubs (ADCS and NMDCS).

Next, set up what you share. See [Sharing files](/docs/clients/sharing-files).

## AirDC++ web UI with Docker

Coming soon.
