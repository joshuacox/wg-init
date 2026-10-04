import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "wg-init - Automated WireGuard Client Key Generation & Configuration",
  description:
    "wg-init is a fast, automated bootstrapping utility for WireGuard VPN clients. Safely manages private keys with strict umask 0077 permissions, configures /etc/wireguard/wg0.conf, and validates network environments.",
  keywords: [
    "wg-init",
    "wireguard client setup",
    "wireguard key generation",
    "wireguard automation",
    "vpn configuration tool",
    "wg-quick automation",
    "linux wireguard",
    "wireguard bash script",
    "docker wireguard test",
  ],
  authors: [{ name: "Joshua Cox" }],
  other: {
    "google-adsense-account": "ca-pub-8973108060277483",
  },
  openGraph: {
    title: "wg-init - Automated WireGuard Client Key Generation & Configuration",
    description:
      "Automated WireGuard VPN bootstrapping tool. Generates secure client keypairs, installs wg0.conf, and prepares endpoints for wg-quick.",
    type: "website",
    url: "https://joshuacox.github.io/wg-init/",
    siteName: "wg-init Documentation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-cyan-500 selection:text-zinc-950">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
