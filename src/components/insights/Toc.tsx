"use client";

import { useEffect, useState } from "react";

/** Table of contents that highlights the section currently in view. */
export function Toc({ items }: { items: { id: string; text: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    let frame = 0;
    // Active = the last heading that has scrolled past the sticky header
    const update = () => {
      frame = 0;
      let current: string | null = null;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= 140) current = el.id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <nav aria-label="On this page">
      <p className="text-sm text-graphite">On this page</p>
      <ol className="mt-3 space-y-1 border-l border-rule">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "location" : undefined}
              className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm leading-snug text-graphite transition-colors hover:text-night aria-[current=location]:border-night aria-[current=location]:font-semibold aria-[current=location]:text-night"
            >
              {i.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
