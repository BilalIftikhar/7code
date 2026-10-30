"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./utils";

/** Counts up to `to` when scrolled into view. The real number is server-rendered. */
export function CountUp({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration: 1.6,
      ease: "power3.out",
      paused: true,
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}${suffix}`;
      },
    });
    el.textContent = `0${suffix}`;
    const st = ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => tween.play() });
    return () => {
      st.kill();
      tween.kill();
      el.textContent = `${to}${suffix}`;
    };
  }, [to, suffix]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {to}
      {suffix}
    </span>
  );
}
