"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-mono font-bold flex items-center justify-center text-lg shadow-sm group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
                ⚡
              </span>
              <span className="font-mono text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                wg-init
              </span>
            </Link>
            <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
              WireGuard Automation
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300" aria-label="Main Navigation">
            <Link href="/#overview" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Overview
            </Link>
            <Link href="/#installation" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Installation
            </Link>
            <Link href="/#usage" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Usage & Env Vars
            </Link>
            <Link href="/#generator" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Config Generator
            </Link>
            <Link href="/#docker" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Docker & Testing
            </Link>
            <Link href="/quickstart" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Quickstart
            </Link>
            <Link href="/about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              About
            </Link>
          </nav>

          {/* Right Action: GitHub button & mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/joshuacox/wg-init"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <nav id="mobile-menu" className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3 text-base font-medium">
            <Link
              href="/#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              Overview
            </Link>
            <Link
              href="/#installation"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              Installation
            </Link>
            <Link
              href="/#usage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              Usage & Env Vars
            </Link>
            <Link
              href="/#generator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              Config Generator
            </Link>
            <Link
              href="/#docker"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              Docker & Testing
            </Link>
            <Link
              href="/quickstart"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              Quickstart Guide
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              About
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:text-cyan-500"
            >
              Terms of Service
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
