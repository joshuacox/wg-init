import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Terms of Service - wg-init Documentation",
  description: "Terms and conditions of use for the wg-init open source documentation website.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">1. Terms Acceptance</h2>
          <p>
            By accessing and reading this website or downloading the <code className="font-mono text-cyan-500">wg-init</code> software, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please discontinue using this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">2. Open Source License</h2>
          <p>
            The <code className="font-mono">wg-init</code> utility is published under the <strong>GNU General Public License v3.0 (GPL-3.0)</strong>. You have the right to inspect, copy, modify, and redistribute the program subject to the provisions of that license.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">3. Disclaimer of Warranties & Liability</h2>
          <p>
            The software and informational documentation are provided &ldquo;as is&rdquo;, without warranty of any kind, either express or implied, including without limitation the warranties of merchantability, fitness for a particular purpose, or non-infringement. Authors and contributors shall not be held liable for any damages, configuration errors, network outages, or data loss arising from the use of the scripts or website instructions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">4. Advertisements & External Links</h2>
          <p>
            This website displays third-party contextual advertisements through Google AdSense. We do not endorse or assume responsibility for any third-party products, services, or websites linked to or advertised on this platform.
          </p>
        </section>
      </div>

      <AdBanner slot="6666666666" className="mt-12" />
    </article>
  );
}
