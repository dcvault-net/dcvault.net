---
title: "Glossary"
description: "Definitions of common Direct Connect terms and abbreviations."
sidebar_position: 2
---

import {Glossary, Term} from '@site/src/components/Glossary';

Short definitions of the terms and abbreviations you will meet across Direct Connect.

## Network & hubs

<Glossary>
  <Term name="Favorites">Hubs and users your client saves for quick access.</Term>
  <Term name="File list" href="/docs/basics/how-the-network-works">The list of everything a user shares, which others browse to download.</Term>
  <Term name="Hub" href="/docs/basics/how-the-network-works">The server where users meet, chat, and search. It coordinates but never carries files.</Term>
  <Term name="Hublist" href="/docs/clients/finding-joining-hubs">A directory of public hubs your client can load.</Term>
  <Term name="Minimum share">The smallest share size a hub requires before you can join.</Term>
  <Term name="Search" href="/docs/clients/searching-downloading">Asking the hub to query everyone for files that match your terms.</Term>
  <Term name="Share" href="/docs/clients/sharing-files">The files you offer to the network.</Term>
  <Term name="Slot">One upload connection. Hubs and clients limit how many run at once.</Term>
</Glossary>

## Connection & modes

<Glossary>
  <Term name="Active mode" href="/docs/clients/active-vs-passive-mode">Your client accepts incoming connections directly. Best for search and downloads.</Term>
  <Term name="Passive mode" href="/docs/clients/active-vs-passive-mode">Your client cannot accept incoming connections, for example behind NAT or a firewall. Limited.</Term>
  <Term name="Port forwarding" href="/docs/clients/active-vs-passive-mode">Opening a port on your router so other clients can reach you, which enables active mode.</Term>
  <Term name="UPnP">A router feature that can open ports automatically, used to set up active mode without manual forwarding.</Term>
</Glossary>

## Protocols & hashing

<Glossary>
  <Term name="ADC" href="/docs/protocols/adc">Advanced Direct Connect, the modern protocol.</Term>
  <Term name="ADCS">ADC over TLS (encrypted).</Term>
  <Term name="CID / SID">In ADC, a client's permanent ID (CID) and its per-session ID (SID).</Term>
  <Term name="Magnet link" href="/docs/protocols/magnet-links">A link that points to a file by its hash.</Term>
  <Term name="NMDC" href="/docs/protocols/nmdc">NeoModus Direct Connect, the original protocol.</Term>
  <Term name="NMDCS">NMDC over TLS (encrypted).</Term>
  <Term name="TTH" href="/docs/protocols/tth-hashing">Tiger Tree Hash, the hash that identifies a file by its content.</Term>
</Glossary>

## Clients & people

<Glossary>
  <Term name="Client" href="/docs/clients/dc-clients">The program you use to connect, like DC++ or AirDC++.</Term>
  <Term name="DC++" href="/docs/clients/dc-clients">The original open-source client and the basis for several others.</Term>
  <Term name="Leecher">Someone who downloads but shares little or nothing. Many hubs discourage this with a minimum share.</Term>
  <Term name="Operator (op)">A user with moderation rights on a hub.</Term>
  <Term name="Private message (PM)">A one-to-one chat with another user on a hub.</Term>
</Glossary>
