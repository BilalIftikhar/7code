"use client";

import { useState } from "react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { name: "X", href: `https://x.com/intent/post?url=${u}&text=${t}` },
    { name: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <p className="text-sm text-graphite">Share this article</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.name}>
            <button
              type="button"
              onClick={() => window.open(l.href, "_blank", "noopener,noreferrer,width=640,height=640")}
              className="block rounded-full border border-rule bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-night"
            >
              Share on {l.name}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={copy}
            className="rounded-full border border-rule bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-night"
          >
            {copied ? "Link copied" : "Copy link"}
          </button>
          <span className="sr-only" role="status">
            {copied ? "Link copied to clipboard" : ""}
          </span>
        </li>
      </ul>
    </div>
  );
}
