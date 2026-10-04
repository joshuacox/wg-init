import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Privacy Policy - wg-init Documentation",
  description: "Privacy policy for the wg-init project documentation website and Google AdSense compliance.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">1. Overview</h2>
          <p>
            This Privacy Policy explains how information is collected, used, and disclosed when you visit the <strong>wg-init</strong> documentation website. We are dedicated to respecting and protecting the privacy of visitors accessing this open-source documentation site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">2. The wg-init Software Tool</h2>
          <p>
            The <code className="font-mono text-cyan-500">wg-init</code> utility is open-source shell software executed locally on your computer or server. It operates completely offline and <strong>never</strong> collects, transmits, or phones-home any system information, cryptographic keys, IP addresses, or telemetry. All generated private keys and configuration details remain strictly on your local disk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">3. Web Server Log Files</h2>
          <p>
            Standard web hosting infrastructure logs page requests. These logs may include IP addresses, browser types, Internet Service Providers (ISP), referring/exit pages, date/time stamps, and click counts. This data is utilized solely for site administration, troubleshooting, and aggregated traffic analytics, and is not linked to personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">4. Cookies and Web Beacons</h2>
          <p>
            This website may use cookies to store visitor preferences and optimize user experience based on browser type or navigation history.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">5. Google AdSense & DoubleClick DART Cookies</h2>
          <p>
            Google is a third-party vendor on our website that uses cookies, including DART cookies, to serve ads based on your visit to this and other websites across the Internet:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other sites.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to our sites and/or other sites on the Internet.
            </li>
            <li>
              You may opt out of personalized advertising at any time by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:underline"
              >
                Google Ads Settings
              </a>
              {" "}or through{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">6. CCPA and GDPR Privacy Rights</h2>
          <p>
            Depending on your jurisdiction (such as under the CCPA or GDPR), you may have rights regarding access to, rectification of, or deletion of personal data. Since this documentation site does not require registration or store user accounts, no personal databases are maintained.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">7. Contact Information</h2>
          <p>
            For questions regarding this policy or the wg-init website, please open an issue on GitHub:{" "}
            <a
              href="https://github.com/joshuacox/wg-init/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline"
            >
              github.com/joshuacox/wg-init/issues
            </a>
            .
          </p>
        </section>
      </div>

      <AdBanner slot="5555555555" className="mt-12" />
    </article>
  );
}
