"use client";

import { useEffect } from "react";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle?: any[];
  }
}

export default function AdBanner({
  slot = "1234567890",
  format = "auto",
  responsive = true,
  className = "",
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      // Ignore adsbygoogle push errors in development or offline
    }
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={`my-8 mx-auto w-full max-w-4xl px-4 py-3 text-center ${className}`}
    >
      <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40 p-4 transition-colors">
        <span className="block text-[11px] font-medium tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-2">
          Advertisement
        </span>
        <div className="min-h-[100px] flex items-center justify-center overflow-hidden">
          <ins
            className="adsbygoogle"
            style={{ display: "block", minWidth: "250px", minHeight: "90px" }}
            data-ad-client="ca-pub-8973108060277483"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        </div>
      </div>
    </aside>
  );
}
