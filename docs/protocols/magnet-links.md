---
title: "Magnet links"
description: "How magnet links work in Direct Connect and how to use them."
sidebar_position: 4
---

A magnet link is a short, clickable reference to a file. In Direct Connect it points to a file by its [Tiger Tree Hash](/docs/protocols/tth-hashing), so anyone can search for and download that exact file without you sending the file itself.

## How a magnet link is built

A Direct Connect magnet link looks like this:

```text
magnet:?xt=urn:tree:tiger:UXNWMYERN37HJNXB7V6KDJKZXMFBIQAGMDMYDBY&xl=10568432&dn=example-file.zip
```

After the `magnet:?` prefix come a few parameters:

- `xt` (exact topic): the file's identifier. In Direct Connect this is `urn:tree:tiger:` followed by the base32-encoded Tiger Tree Hash. This is the essential part, it identifies the file by its content.
- `xl` (exact length): the file size in bytes.
- `dn` (display name): the filename shown to the user (URL-encoded).

Only `xt` is needed to find the file. `xl` and `dn` are extra information.

## Using them in DC++

In a GUI client like DC++ you can right-click a file, in a search result or a file list, and copy its magnet link, then paste it into hub chat or anywhere else. When someone clicks a magnet link, the client offers to search the network for that hash and downloads it from whoever shares it.

One thing to keep in mind: a Direct Connect magnet only finds the file if someone on a hub you are connected to shares it. There is no global tracker, so the reach of a magnet is the hubs you are on.

## Not the same as torrent magnets

Torrent magnet links use the same `magnet:?xt=urn:...` scheme, which is why they are easy to mix up, but the hash type is different and the two are not interchangeable.

| | Direct Connect | BitTorrent |
| --- | --- | --- |
| `xt` namespace | `urn:tree:tiger` | `urn:btih` (v1), `urn:btmh` (v2) |
| Hash | Tiger Tree Hash of the file | info hash of the torrent |
| Identifies | a single file | a torrent (one or more files plus metadata) |
| Finds peers via | the hubs you are connected to | trackers and the DHT |

:::note[Not interchangeable]
A DC client only understands `urn:tree:tiger` magnets, and a torrent client only understands `urn:btih`. A torrent magnet pasted into DC++ will not work, and a Direct Connect magnet will not work in a torrent client.
:::
