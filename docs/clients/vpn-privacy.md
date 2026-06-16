---
title: "VPN & privacy"
description: "Privacy on Direct Connect and how a VPN changes your setup."
sidebar_position: 8
---

By default, other people on the network can see more than you might expect. This page covers what is visible, how a VPN helps, what to watch for, and how copyright enforcement differs by country.

## What others can see

- The hub sees your IP address, nick, share, chat, and searches.
- In active mode, other clients connect directly to you for transfers, so they see your IP too.
- On a hub without TLS, anyone watching the network path can read chat and searches. See [Active vs. passive mode](/docs/clients/active-vs-passive-mode).

Your IP address is the piece that identifies you.

## What a VPN does

A VPN routes your traffic through its server, so peers and the hub see the VPN's IP instead of your real one. For filesharing this is the main privacy gain: it hides the IP that copyright enforcement relies on.

It is not full anonymity. The hub still sees whatever you reveal, like your nick and chat, and a VPN does not encrypt your DC traffic on its own. For encryption, use TLS hubs (ADCS or NMDCS).

## The port catch

Direct Connect needs about three ports for active mode: TCP for transfers, TCP for TLS transfers, and UDP for search. Many VPNs do not allow port forwarding, which leaves you stuck in passive mode and its limits. Pick a VPN that supports port forwarding, ideally several ports.

## VPNs that work with DC

_The links below are referral links that help support DCVault._

- [AirVPN](https://airvpn.org/?referred_by=746001) lets you forward up to five ports, which suits Direct Connect well. Tested and working. This is our pick.
- [Hide.me](https://ref.hide.io/EPmoZN) opens ports automatically through UPnP. Tested and working.

## Copyright enforcement by country

This is general information, not legal advice, and the rules change. The point is that almost all enforcement starts from your IP address.

- **Germany**: the most aggressive. Law firms send mass cease-and-desist letters (Abmahnungen) based on logged IPs, demanding a signed declaration and a payment that is often in the four figures.
- **Rest of Western Europe**: more graduated. France runs a warning and strike system (formerly HADOPI, now under the regulator ARCOM) that can escalate to fines. The UK leans on ISP warning letters. Mass-letter campaigns like Germany's are the exception.
- **Eastern Europe**: enforcement is generally less aggressive and varies a lot by country.
- **USA**: no German-style letters, but copyright trolls file mass lawsuits against IP-identified "Doe" defendants and use high statutory damages to push settlements. ISPs also forward infringement notices.
- **China**: enforcement is inconsistent and works differently. The bigger factor is heavy state control of the internet.

## Privacy tips

:::tip[Keep it private]

- Do not use your real name.
- Do not reveal private data.
- Stay careful and use common sense.

:::
