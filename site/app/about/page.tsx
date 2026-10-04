import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "About wg-init - Architecture & WireGuard Security",
  description: "Learn about the motivation, key management philosophy, and design decisions behind wg-init.",
};

export default function AboutPage() {
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
          About wg-init
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          The philosophy, security considerations, and architecture behind the tool.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">The Motivation</h2>
          <p>
            WireGuard is renowned for its speed, simplicity, and state-of-the-art cryptography. However, provisioning new client workstations or IoT nodes often involves multiple manual steps:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Generating private and public keys using <code className="font-mono">wg genkey</code> and <code className="font-mono">wg pubkey</code>.</li>
            <li>Ensuring proper UNIX file permissions (<code className="font-mono">chmod 600</code> or <code className="font-mono">umask 0077</code>) so private keys are never exposed.</li>
            <li>Constructing the <code className="font-mono">wg0.conf</code> file with the correct sections, endpoints, and allowed IPs.</li>
            <li>Writing the configuration into <code className="font-mono">/etc/wireguard/</code> with root privileges without leaving world-readable temporary files.</li>
          </ul>
          <p className="mt-2">
            <code className="font-mono text-cyan-500 font-semibold">wg-init</code> automates this routine into a single idempotent command with built-in guardrails against configuration overwrites and permission leaks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Security By Design</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Subshell umask Isolation</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                During key generation, <code className="font-mono">(umask 0077 &amp;&amp; tee $HOSTNAME.key)</code> guarantees that newly created private key files are strictly accessible only by the owner from the exact microsecond of creation.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Atomic Non-Destructive Install</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                If <code className="font-mono">/etc/wireguard/wg0.conf</code> already exists, <code className="font-mono">wg-init</code> refuses to overwrite it, protecting active VPN profiles from accidental deletion.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Open Source & Licensing</h2>
          <p>
            <code className="font-mono">wg-init</code> is open source software created by Joshua Cox and distributed under the <strong>GNU General Public License v3.0 (GPL-3.0)</strong>.
          </p>
          <p>
            Source code, Docker testing harnesses, and documentation contributions are welcomed at:
          </p>
          <p>
            <a
              href="https://github.com/joshuacox/wg-init"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>github.com/joshuacox/wg-init</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
        </section>
      </div>

      <AdBanner slot="7777777777" className="mt-12" />
    </article>
  );
}
