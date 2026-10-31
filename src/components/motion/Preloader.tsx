"use client";

import { useEffect, useRef, useState } from "react";

const KEY = "7code-intro";
export const INTRO_MS = 1150;

/**
 * First-visit preloader: a 0→100 counter beside the 7 mark, then a curtain lift.
 * Repeat visits within 12 hours skip it before paint (see the inline script
 * in the root layout), and reduced-motion users never see it.
 */
export function Preloader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("intro-seen") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      localStorage.setItem(KEY, String(Date.now()));
    } catch {
      /* storage unavailable — intro will simply play again next time */
    }
    let raf = 0;
    const start = performance.now();
    const dur = 850;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      if (count.current) count.current.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDone(true);
    };
    raf = requestAnimationFrame(tick);
    const remove = window.setTimeout(() => setGone(true), INTRO_MS + 700);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div aria-hidden="true" className={`preloader ${done ? "is-done" : ""}`}>
      <div className="flex items-end gap-5">
        <svg viewBox="0 0 100 120" className="h-16 w-auto md:h-20">
          <path className="preloader-seven" pathLength={1} d="M0 0H100V17L51 120H29L76 19H0Z" fill="none" stroke="#fff" strokeWidth="3" />
        </svg>
        <span ref={count} className="display text-6xl tabular-nums md:text-8xl">
          000
        </span>
      </div>
      <p className="mt-6 text-sm text-white/50">7CODE — Lahore, Dubai, Abu Dhabi</p>
    </div>
  );
}

/** Inline, pre-paint: mark repeat visits so CSS hides the preloader immediately. */
// Skips the intro if it played in the last 12 hours (any tab).
export const introScript = `try{var t=+localStorage.getItem("${KEY}");if(t&&Date.now()-t<432e5)document.documentElement.classList.add("intro-seen")}catch(e){document.documentElement.classList.add("intro-seen")}`;
