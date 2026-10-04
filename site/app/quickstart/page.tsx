import type { Metadata } from "next";
import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Quickstart Guide - wg-init Documentation",
  description:
    "Step-by-step tutorial on connecting a new client machine to a WireGuard VPN server using wg-init.",
};

export default function QuickstartPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 mb-4"
        >
          ← Back to Documentation
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          WireGuard Client Quickstart Guide
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Learn how to bootstrap a new client node from scratch in under 3 minutes using wg-init.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Step 1: Install WireGuard and Tools</h2>
          <p>
            Before running <code className="font-mono text-cyan-500">wg-init</code>, ensure that the WireGuard kernel module/tools and <code className="font-mono">resolvconf</code> (or <code className="font-mono">openresolv</code>) are installed on your Linux client:
          </p>
          <CodeBlock
            code={`# On Debian / Ubuntu
sudo apt update && sudo apt install -y wireguard openresolv

# On Arch Linux
sudo pacman -S wireguard-tools openresolv

# On Fedora / RHEL
sudo dnf install -y wireguard-tools systemd-resolved`}
            caption="Installing prerequisites"
          />
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Step 2: Install wg-init</h2>
          <p>
            Download and install <code className="font-mono text-cyan-500">wg-init</code> using the one-line bootstrap installer:
          </p>
          <CodeBlock
            code="curl https://raw.githubusercontent.com/joshuacox/wg-init/refs/heads/main/bootstrap | bash"
            caption="Install wg-init"
          />
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Step 3: Collect Server Parameters</h2>
          <p>
            Obtain the connection parameters from your WireGuard server administrator or your VPN host:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Server Public Key:</strong> e.g., <code className="font-mono">v8mBq...=</code></li>
            <li><strong>Server Public Endpoint:</strong> e.g., <code className="font-mono">vpn.company.com:51820</code></li>
            <li><strong>Assigned Client IP:</strong> e.g., <code className="font-mono">10.100.0.4/24</code></li>
            <li><strong>Internal DNS Resolver:</strong> e.g., <code className="font-mono">10.100.0.1</code></li>
            <li><strong>Allowed IPs:</strong> e.g., <code className="font-mono">10.100.0.0/24</code> (split tunnel) or <code className="font-mono">0.0.0.0/0</code> (full tunnel)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Step 4: Execute wg-init</h2>
          <p>
            Run <code className="font-mono text-cyan-500">wg-init</code> with the environment variables set:
          </p>
          <CodeBlock
            code={`MyAddress=10.100.0.4/24 \\
MyDNS=10.100.0.1 \\
PeerPublicKey='v8mBqK8Z...' \\
PeerAllowedIPs='10.100.0.0/24' \\
PeerEndpoint='vpn.company.com:51820' \\
wg-init`}
            caption="Execute bootstrap"
          />
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Step 5: Exchange Public Key & Start Tunnel</h2>
          <p>
            Copy the public key printed on the screen and add it to your server configuration:
          </p>
          <CodeBlock
            code={`# On the WireGuard Server:
sudo wg set wg0 peer <CLIENT_PUBLIC_KEY> allowed-ips 10.100.0.4/32`}
            caption="Server-side peer authorization"
          />
          <p className="mt-4">
            Then, bring up your connection on your client machine using <code className="font-mono">wg-quick</code>:
          </p>
          <CodeBlock
            code={`# Bring up tunnel
sudo wg-quick up wg0

# Verify active handshake and transfer stats
sudo wg show

# Test ping through the encrypted tunnel
ping -c 3 10.100.0.1`}
            caption="Start and verify connection"
          />
        </section>
      </div>

      <AdBanner slot="4444444444" className="mt-12" />
    </article>
  );
}
