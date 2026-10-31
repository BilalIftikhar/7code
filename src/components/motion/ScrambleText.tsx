"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./utils";

const GLYPHS = "01<>/{}[]=+*#7ABCDEFGHJKLMNPQRSTUVWXYZ";

/**
 * Kinetic "decode" reveal: characters resolve from code glyphs left to right.
 * The final text is server-rendered, so search engines and screen readers get it as-is.
 */
export function ScrambleText({
  text,
  delay = 0,
  duration = 1100,
  className = "",
  afterIntro = false,
}: {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  /** Wait for the first-visit preloader before starting */
  afterIntro?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    // Phones skip the effect so the text is final at first paint
    if (!el || prefersReducedMotion() || window.innerWidth < 768) return;
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / duration);
      const resolved = Math.floor(t * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        out += i < resolved || c === " " ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    const introWait = afterIntro && !document.documentElement.classList.contains("intro-seen") ? 1050 : 0;
    const id = window.setTimeout(() => (raf = requestAnimationFrame(tick)), delay + introWait);
    return () => {
      window.clearTimeout(id);
      cancelAnimationFrame(raf);
      el.textContent = text;
    };
  }, [text, delay, duration, afterIntro]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
