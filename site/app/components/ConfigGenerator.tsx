"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function ConfigGenerator() {
  const [myAddress, setMyAddress] = useState("192.168.1.5/24");
  const [myDNS, setMyDNS] = useState("192.168.1.1");
  const [peerPublicKey, setPeerPublicKey] = useState("DEADBEEF1234567890abcdefDEADBEEF1234567890=");
  const [peerAllowedIPs, setPeerAllowedIPs] = useState("192.168.1.0/24");
  const [peerEndpoint, setPeerEndpoint] = useState("10.0.0.23:51820");

  const generatedCommand = `MyAddress="${myAddress}" \\
MyDNS="${myDNS}" \\
PeerPublicKey="${peerPublicKey}" \\
PeerAllowedIPs="${peerAllowedIPs}" \\
PeerEndpoint="${peerEndpoint}" \\
wg-init`;

  const previewConfig = `[Interface]
Address = ${myAddress}
PrivateKey = <generated in ~/.wg/keys/\$HOSTNAME.key>
DNS = ${myDNS}

[Peer]
PublicKey = ${peerPublicKey}
AllowedIPs = ${peerAllowedIPs}
Endpoint = ${peerEndpoint}`;

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          Interactive wg-init Command & Config Builder
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Customize your WireGuard endpoint details below to instantly generate the exact execution command and resulting <code className="font-mono text-cyan-500">/etc/wireguard/wg0.conf</code> file.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Client Tunnel IP (MyAddress)
          </label>
          <input
            type="text"
            value={myAddress}
            onChange={(e) => setMyAddress(e.target.value)}
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
            placeholder="192.168.1.5/24"
          />
          <span className="text-[11px] text-zinc-500 mt-1 block">Assigned IP address inside the WireGuard subnet</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Client DNS Server (MyDNS)
          </label>
          <input
            type="text"
            value={myDNS}
            onChange={(e) => setMyDNS(e.target.value)}
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
            placeholder="192.168.1.1"
          />
          <span className="text-[11px] text-zinc-500 mt-1 block">DNS resolver applied when tunnel connects</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Server Public Key (PeerPublicKey)
          </label>
          <input
            type="text"
            value={peerPublicKey}
            onChange={(e) => setPeerPublicKey(e.target.value)}
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
            placeholder="DEADBEEF123="
          />
          <span className="text-[11px] text-zinc-500 mt-1 block">Base64 WireGuard public key of the remote peer / server</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Routing Subnets (PeerAllowedIPs)
          </label>
          <input
            type="text"
            value={peerAllowedIPs}
            onChange={(e) => setPeerAllowedIPs(e.target.value)}
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
            placeholder="0.0.0.0/0 or 192.168.1.0/24"
          />
          <span className="text-[11px] text-zinc-500 mt-1 block">IP ranges routed over this tunnel (e.g. 0.0.0.0/0 for full tunnel)</span>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Peer Endpoint (PeerEndpoint)
          </label>
          <input
            type="text"
            value={peerEndpoint}
            onChange={(e) => setPeerEndpoint(e.target.value)}
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
            placeholder="vpn.example.com:51820"
          />
          <span className="text-[11px] text-zinc-500 mt-1 block">Public IP or domain and UDP port of the remote WireGuard server</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <CodeBlock
            code={generatedCommand}
            language="bash"
            caption="Ready-to-run wg-init Command"
          />
        </div>
        <div>
          <CodeBlock
            code={previewConfig}
            language="ini"
            caption="Target /etc/wireguard/wg0.conf Preview"
          />
        </div>
      </div>
    </div>
  );
}
