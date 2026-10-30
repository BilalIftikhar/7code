"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useRichPointer } from "./utils";

/**
 * Custom cursor (Dogstudio-style). Grows into a labelled disc over any
 * element with a data-cursor="Label" attribute. Desktop only.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const enabled = useRichPointer();

  useEffect(() => {
    const el = dot.current;
    if (!enabled || !el) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });
    let shown = false;
    let px = -1;
    let py = -1;
    const labelAt = (x: number, y: number) => {
      const hit = document.elementFromPoint(x, y) as HTMLElement | null;
      setLabel(hit?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? null);
    };
    // Content moves under a still pointer while scrolling
    const onScroll = () => {
      if (px >= 0) labelAt(px, py);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const move = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!shown) {
        gsap.set(el, { x: e.clientX, y: e.clientY });
        gsap.to(el, { autoAlpha: 1, duration: 0.3 });
        shown = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
      labelAt(e.clientX, e.clientY);
    };
    const leave = () => {
      gsap.to(el, { autoAlpha: 0, duration: 0.2 });
      shown = false;
    };
    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.classList.add("has-cursor");
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0"
      style={{ visibility: "hidden" }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color] duration-300 ease-[var(--ease-out-quart)] flex items-center justify-center ${
          label ? "h-28 w-28 bg-white shadow-[0_10px_40px_-8px_color-mix(in_srgb,var(--color-night)_45%,transparent)] ring-1 ring-night/10" : "h-3 w-3 bg-signal"
        }`}
      >
        <span
          className={`whitespace-nowrap text-sm font-semibold text-night transition-opacity duration-200 ${
            label ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
