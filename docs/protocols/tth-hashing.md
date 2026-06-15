---
title: "TTH & hashing"
description: "How Tiger Tree Hashing identifies files and verifies downloads in Direct Connect."
sidebar_position: 3
---

Direct Connect leans hard on [Tiger Tree Hashing](https://hashing.tools/tiger) (TTH). The point: a file is identified by its hash, not its name. Rename it all you want, the TTH stays the same.

That does a few things for you:

- Your client can spot the same file across several users
- It can pull from multiple sources at once
- It can resume from someone else if a peer drops
- It checks that the download arrived intact

This is also what makes [file lists](/docs/basics/how-the-network-works) and [magnet links](/docs/protocols/magnet-links) work.
