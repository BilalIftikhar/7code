"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/components/motion/utils";

const words = ["Websites", "Web apps", "Mobile apps", "Shopify", "WordPress", "SEO", "AEO", "GEO", "Branding", "AI automation"];

function Row({ outline = false }: { outline?: boolean }) {
  return (
    <>
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
          {words.map((w, i) => (
            <li key={w} className="flex items-center">
              <span
                className={`display px-[0.35em] text-[clamp(3rem,9vw,8.5rem)] leading-[1.05] ${
                  outline && i % 2 === 0 ? "text-transparent [-webkit-text-stroke:1.5px_var(--color-night)]" : ""
                }`}
              >
                {w}
              </span>
              <svg viewBox="0 0 100 120" className="h-[0.9em] w-auto text-signal text-[clamp(2rem,5vw,4.5rem)]" aria-hidden="true">
                <path d="M8 14 H90 L38 116" fill="none" stroke="currentColor" strokeWidth="16" />
              </svg>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}

/** Two-way services marquee that speeds up with scroll velocity (Locomotive-style). */
export function Marquee() {
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !a.current || !b.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const skewTargets = [a.current.firstElementChild, b.current.firstElementChild].filter(Boolean);
    const t1 = gsap.to(a.current, { xPercent: -50, ease: "none", duration: 45, repeat: -1 });
    const t2 = gsap.fromTo(b.current, { xPercent: -50 }, { xPercent: 0, ease: "none", duration: 45, repeat: -1 });
    const st = ScrollTrigger.create({
      trigger: a.current.parentElement,
      start: "top bottom",
      end: "bottom top",
      onUpdate(self) {
        const v = self.getVelocity();
        const boost = 1 + Math.min(Math.abs(v) / 250, 6);
        gsap.to([t1, t2], { timeScale: boost, duration: 0.2, overwrite: true });
        gsap.to([t1, t2], { timeScale: 1, duration: 1.2, delay: 0.2, ease: "power2.out" });
        // Lean the type with scroll speed, then settle
        const skew = gsap.utils.clamp(-14, 14, v / -220);
        gsap.to(skewTargets, { skewX: skew, duration: 0.25, overwrite: true });
        gsap.to(skewTargets, { skewX: 0, duration: 0.9, delay: 0.25, ease: "power3.out" });
      },
    });
    return () => {
      t1.kill();
      t2.kill();
      st.kill();
    };
  }, []);

  return (
    <section aria-label="What we build" className="overflow-hidden border-y border-rule py-6 md:py-10">
      <div ref={a} className="flex w-max">
        <Row />
      </div>
      <div ref={b} className="flex w-max">
        <Row outline />
      </div>
    </section>
  );
}
