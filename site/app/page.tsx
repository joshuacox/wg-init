import Link from "next/link";
import CodeBlock from "./components/CodeBlock";
import AdBanner from "./components/AdBanner";
import ConfigGenerator from "./components/ConfigGenerator";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* 1. Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full text-xs font-mono font-medium bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 shadow-sm">
          <span>⚡ Zero-Friction WireGuard Client Provisioning</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
          Automate WireGuard client keys and configuration.
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          <code className="text-cyan-600 dark:text-cyan-400 font-mono font-semibold">wg-init</code> is a lightweight, reliable bootstrapping tool that generates cryptographic keypairs with strict <code className="font-mono">umask 0077</code> permissions, validates environment parameters, and configures <code className="font-mono text-zinc-800 dark:text-zinc-200">/etc/wireguard/wg0.conf</code> ready for <code className="font-mono text-zinc-800 dark:text-zinc-200">wg-quick</code>.
        </p>

        {/* Quick Install Box */}
        <div className="max-w-xl mx-auto text-left mb-8">
          <CodeBlock
            code="curl https://raw.githubusercontent.com/joshuacox/wg-init/refs/heads/main/bootstrap | bash"
            caption="One-liner Bootstrap Install"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#installation"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Installation Guide
          </a>
          <a
            href="#generator"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400"
          >
            Interactive Config Builder
          </a>
          <a
            href="https://github.com/joshuacox/wg-init"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-900 dark:border dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <span>GitHub</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Top Ad Unit */}
      <AdBanner slot="9876543210" format="auto" />

      {/* 2. Interactive Config Builder Section */}
      <section id="generator" className="py-8">
        <ConfigGenerator />
      </section>

      {/* 3. Key Architecture & Features Section */}
      <section id="overview" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Built for Security, Simplicity, and Speed
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            WireGuard makes modern VPN tunnels fast and efficient, but manually creating client keys, maintaining directory permissions, and populating configuration files by hand is error prone. <code className="font-mono text-cyan-500">wg-init</code> automates the entire flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🔐
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Cryptographic Key Hardening
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Generates keys into <code className="font-mono text-xs">~/.wg/keys/</code> with <code className="font-mono text-xs">chmod 700</code> and an enforced <code className="font-mono text-xs">umask 0077</code> pipeline. Your private key is never world or group readable.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🛡️
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Strict Environment Validation
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Validates all 5 mandatory networking parameters (<code className="font-mono text-xs">MyAddress</code>, <code className="font-mono text-xs">MyDNS</code>, <code className="font-mono text-xs">PeerPublicKey</code>, <code className="font-mono text-xs">PeerAllowedIPs</code>, <code className="font-mono text-xs">PeerEndpoint</code>) before executing or writing any files.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🚀
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Safe Atomic Deployment
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Assembles the configuration in an isolated temporary directory and installs it via <code className="font-mono text-xs">sudo install -v -m400</code> into <code className="font-mono text-xs">/etc/wireguard/wg0.conf</code>, preventing accidental overwrites.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Installation Section */}
      <section id="installation" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          Installation Methods
        </h2>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Option 1: One-Line Bootstrap (Recommended)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Pulls the bootstrap script directly from GitHub, clones the repository into a safe temporary directory, and runs <code className="font-mono">sudo make install</code>:
            </p>
            <CodeBlock
              code="curl https://raw.githubusercontent.com/joshuacox/wg-init/refs/heads/main/bootstrap | bash"
              caption="Bootstrap One-liner"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Option 2: Git Clone and Make Install
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Clone the repository to inspect the shell scripts locally and install into <code className="font-mono">/usr/local/bin/</code>:
            </p>
            <CodeBlock
              code={`git clone https://github.com/joshuacox/wg-init.git
cd wg-init
sudo make install`}
              caption="Manual Installation"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Option 3: Direct PATH Placement
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Since <code className="font-mono">wg-init</code> is a single self-contained Bash script, you can place it anywhere on your system <code className="font-mono">$PATH</code>:
            </p>
            <CodeBlock
              code={`sudo curl -fsSL https://raw.githubusercontent.com/joshuacox/wg-init/main/wg-init -o /usr/local/bin/wg-init
sudo chmod 555 /usr/local/bin/wg-init`}
              caption="Direct Download"
            />
          </div>
        </div>
      </section>

      {/* Middle Ad Unit */}
      <AdBanner slot="8888888888" format="auto" />

      {/* 5. Usage & Environment Variables Section */}
      <section id="usage" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Environment Variables Reference
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          <code className="font-mono text-cyan-500">wg-init</code> reads its configuration strictly from environment variables. If any variable is missing, the script halts with a helpful example.
        </p>

        <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 mb-8">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200">
              <tr>
                <th className="py-3 px-4 font-mono font-semibold">Variable</th>
                <th className="py-3 px-4 font-semibold">Description</th>
                <th className="py-3 px-4 font-mono font-semibold">Example Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
              <tr>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400 font-semibold">MyAddress</td>
                <td className="py-3 px-4">Local IP address and subnet mask assigned to this client inside the VPN tunnel.</td>
                <td className="py-3 px-4 font-mono text-xs">192.168.1.5/24</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400 font-semibold">MyDNS</td>
                <td className="py-3 px-4">DNS server IP used to resolve queries while connected to the VPN.</td>
                <td className="py-3 px-4 font-mono text-xs">192.168.1.1</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400 font-semibold">PeerPublicKey</td>
                <td className="py-3 px-4">WireGuard public key of the remote peer / gateway server.</td>
                <td className="py-3 px-4 font-mono text-xs">DEADBEEF123=</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400 font-semibold">PeerAllowedIPs</td>
                <td className="py-3 px-4">Subnets routed through the peer. Use 0.0.0.0/0 for default routing.</td>
                <td className="py-3 px-4 font-mono text-xs">192.168.1.0/24</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400 font-semibold">PeerEndpoint</td>
                <td className="py-3 px-4">Public IP address or hostname and UDP listening port of the remote server.</td>
                <td className="py-3 px-4 font-mono text-xs">10.0.0.23:51820</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
          Example Invocations
        </h3>
        <CodeBlock
          code={`MyAddress=192.168.1.5/24 \\
MyDNS=192.168.1.1 \\
PeerPublicKey='DEADBEEF123=' \\
PeerAllowedIPs='192.168.1.0/24' \\
PeerEndpoint='10.0.0.23:51820' \\
wg-init`}
          caption="Running wg-init with inline variables"
        />

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
          Once <code className="font-mono">wg-init</code> finishes, it prints your local public key:
        </p>
        <CodeBlock
          code={`Directory /home/user/.wg/keys already exists, continuing...
Installing /tmp/tmp.XXXX/wg0.conf to /etc/wireguard/
You can now use wg-quick
i.e.
sudo wg-quick up wg0
After you add your pub to your peer. Your pub is:

xK88n+7e9FpQ9k4N1q7Z8r8uW8dE8aP8t1Y8q3L5w7M=`}
          caption="Example Output"
        />
      </section>

      {/* 6. Docker & Test Rig Section */}
      <section id="docker" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Docker Sandbox & Testing Rig
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          The <code className="font-mono text-cyan-500">wg-init</code> repository includes a dedicated Debian Trixie container test suite (<code className="font-mono">Dockerfile</code>, <code className="font-mono">net.sh</code>, and <code className="font-mono">run.sh</code>) to test WireGuard routing in an isolated Linux network namespace without modifying host interfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Isolated Docker Bridge (net.sh)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Sets up a dual-stack IPv4 (<code className="font-mono">10.43.43.0/24</code>) and IPv6 (<code className="font-mono">fdcc:ad94:bacf:62a3::/64</code>) Docker network:
            </p>
            <CodeBlock
              code={`#!/bin/bash
docker network create --subnet 10.43.43.0/24 \\
  --ipv6 --subnet fdcc:ad94:bacf:62a3::/64 wg`}
              caption="net.sh"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Privileged Kernel Runner (run.sh)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Mounts kernel modules, enables sysctls for packet forwarding, and runs the WireGuard test container:
            </p>
            <CodeBlock
              code={`./run.sh`}
              caption="Executing test suite"
            />
          </div>
        </div>
      </section>

      {/* Bottom Ad Unit */}
      <AdBanner slot="7777777777" format="auto" />
    </div>
  );
}
