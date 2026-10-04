# wg-init

Automated WireGuard client key generation and configuration bootstrapping utility.

[![Deploy Next.js Static Site to GitHub Pages](https://github.com/joshuacox/wg-init/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/joshuacox/wg-init/actions/workflows/deploy-pages.yml)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

**Documentation & Interactive Config Generator Website**: [https://joshuacox.github.io/wg-init/](https://joshuacox.github.io/wg-init/)

---

## Overview

`wg-init` streamlines the setup of new WireGuard clients by automating keypair generation, strict file permissions (`umask 0077` and `chmod 700`), validation of networking parameters, and configuration installation directly into `/etc/wireguard/wg0.conf`.

## Installation

### Easy Install (Bootstrap One-Liner)

```bash
curl https://raw.githubusercontent.com/joshuacox/wg-init/refs/heads/main/bootstrap | bash
```

### Manual Install

```bash
git clone https://github.com/joshuacox/wg-init.git
cd wg-init
sudo make install
```

Or copy `wg-init` anywhere in your `$PATH` (e.g. `/usr/local/bin/wg-init`).

---

## Usage

Set the required environment variables and run `wg-init`:

```bash
MyAddress=192.168.1.5/24 \
MyDNS=192.168.1.1 \
PeerPublicKey='DEADBEEF123=' \
PeerAllowedIPs='192.168.1.0/24' \
PeerEndpoint='10.0.0.23:51820' \
wg-init
```

### Environment Variables

| Variable | Description | Example |
| :--- | :--- | :--- |
| `MyAddress` | Client IP address and CIDR mask | `192.168.1.5/24` |
| `MyDNS` | DNS server used when connected | `192.168.1.1` |
| `PeerPublicKey` | Server/Peer WireGuard public key | `DEADBEEF123=` |
| `PeerAllowedIPs` | Subnets routed through tunnel | `192.168.1.0/24` or `0.0.0.0/0` |
| `PeerEndpoint` | Server public host/IP and UDP port | `10.0.0.23:51820` |

### Post-Run

Once `wg-init` finishes:
1. It prints your newly generated public key.
2. Add that public key to your WireGuard server's peer list.
3. Bring up the interface with:
   ```bash
   sudo wg-quick up wg0
   ```

---

## Docker Sandbox Testing

Test WireGuard in an isolated container without affecting host networking:

```bash
./run.sh
```

---

## Documentation Website

The interactive documentation website is built with Next.js (located in `./site`) and deployed automatically to GitHub Pages via GitHub Actions:
- Step-by-step Quickstart guide
- Interactive configuration generator
- Google AdSense integration & verified `ads.txt`
