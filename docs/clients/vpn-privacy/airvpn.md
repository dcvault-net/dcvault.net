---
title: "AirVPN setup for DC++"
sidebar_label: "AirVPN"
description: "Set up AirVPN with DC++: install Eddie, forward the three ports Direct Connect needs, and switch DC++ to active mode."
sidebar_position: 1
---

A VPN hides your real IP from the hub and from other users. This guide sets one up for DC++. Other clients are arranged a little differently, but the settings are the same. For what a VPN does and does not protect, see [VPN & privacy](/docs/clients/vpn-privacy).

## Why AirVPN

Direct Connect needs port forwarding for [active mode](/docs/clients/active-vs-passive-mode), and it needs more than one port: one TCP port for transfers, one TCP port for encrypted transfers, and one UDP port for search. Most VPNs forward no ports at all, and the few that do often stop at one or two. AirVPN lets you forward up to five, which is more than enough for Direct Connect.

Create an account on [AirVPN.org](https://airvpn.org/?referred_by=746001)<sup>*</sup> to get started.

## Install Eddie

Eddie is AirVPN's own client and the easiest way to connect. Download it for your system:

- [Windows](https://airvpn.org/windows/)
- [Linux](https://airvpn.org/linux/eddie/)
- [macOS](https://airvpn.org/macos/eddie/)

Experienced users can generate WireGuard or OpenVPN configs instead, but for most people Eddie works best.

## Check the Eddie settings

After installing, open the settings and go through these tabs.

### General

Turn on connect at startup, reconnect to the last server, activate Network Lock at startup, and start with system. The VPN is then up before you open anything else.

![Eddie general settings](/img/airvpn/airvpn_eddie_settings_general.png)

### Network lock

This is the kill switch. Leave it on Automatic. If the tunnel drops, it blocks all traffic so your real IP cannot leak. Keep "Allow lan/private" checked so your local network keeps working.

![Eddie Network Lock settings](/img/airvpn/airvpn_eddie_settings_networklock.png)

### Routes (optional)

Add your local network range as "Outside the VPN tunnel" if you want to keep reaching devices on your LAN, such as your router or a NAS, while connected. Use your own subnet.

![Eddie routes settings](/img/airvpn/airvpn_eddie_settings_routes.png)

### Connect to a server

Open the server list, pick one near you, and double-click to connect. Every AirVPN server supports port forwarding, so any of them works.

![Eddie server list](/img/airvpn/airvpn_eddie_settings_serverbrowser.png)

## Forward the ports

Open the [forwarded ports page](https://airvpn.org/ports/) in your account and add three ports. The numbers themselves do not matter, so pick any free ones, but copy the labels and protocols exactly:

- Transfer Port, TCP only
- Search Port, UDP only
- Transfer Encrypted, TCP only

Leave the IP layer on IPv4+IPv6. Note the three numbers, you will need them in DC++.

![AirVPN forwarded ports](/img/airvpn/airvpn_portforwarding_site.png)

## Configure DC++

Point DC++ at the same three ports. The screenshot shows the three steps:

1. Open the settings.
2. Go to Connectivity, then Manual configuration.
3. Enter the same numbers you set on AirVPN: the Transfer Port in Transfer port, the Transfer Encrypted port in Encrypted transfer port, and the Search Port in Search port. Then select "Active mode (I have no router / I have configured my router)", and set the same in the IPv6 section below.

![DC++ connection settings](/img/airvpn/dcpp_connection_settings.png)

Leave the external IP field empty. DC++ then uses the address the hub sees, which is the VPN's.

:::tip[Check it works]
Use "Test open" on each port card in AirVPN to confirm the ports are reachable. In DC++, active mode is working once your searches return results and other users can download from you.
:::

Keep Eddie connected whenever you use DC++. If the VPN is down, Network Lock blocks the connection instead of exposing your real IP.

---

<small>\*Referral link that helps support DCVault: [https://airvpn.org/?referred_by=746001](https://airvpn.org/?referred_by=746001)</small>
