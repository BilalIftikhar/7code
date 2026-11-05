"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Adds `is-in` once the footer scrolls into view, which starts its CSS entrance sequence. */
export function FooterReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = el.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          node.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
