"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { finePointer, prefersReducedMotion } from "@/components/motion/utils";
import { whenIdle } from "@/components/motion/idle";

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
              <span className="mx-[0.15em] mt-[0.55em] inline-block h-[0.14em] w-[0.5em] rounded-sm bg-cursor text-[clamp(3rem,9vw,8.5rem)]" aria-hidden="true" />
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}

/**
 * Two-way services marquee. The scrolling itself is a CSS animation (runs on
 * the compositor, zero main-thread cost); on desktop, scroll velocity speeds
 * it up and leans the type (Locomotive-style).
 */
export function Marquee() {
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rowA = a.current;
    const rowB = b.current;
    if (prefersReducedMotion() || !finePointer() || !rowA || !rowB) return;
    let st: ScrollTrigger | null = null;
    const cancel = whenIdle(() => {
      gsap.registerPlugin(ScrollTrigger);
      const anims = [rowA, rowB].flatMap((r) => (r.firstElementChild as HTMLElement).getAnimations());
      const rate = { v: 1 };
      const applyRate = () => anims.forEach((an) => (an.playbackRate = rate.v));
      st = ScrollTrigger.create({
        trigger: rowA.parentElement,
        start: "top bottom",
        end: "bottom top",
        onUpdate(self) {
          const v = self.getVelocity();
          gsap.to(rate, { v: 1 + Math.min(Math.abs(v) / 250, 6), duration: 0.2, overwrite: true, onUpdate: applyRate });
          gsap.to(rate, { v: 1, duration: 1.2, delay: 0.2, ease: "power2.out", onUpdate: applyRate });
          const skew = gsap.utils.clamp(-14, 14, v / -220);
          gsap.to([rowA, rowB], { skewX: skew, duration: 0.25, overwrite: true });
          gsap.to([rowA, rowB], { skewX: 0, duration: 0.9, delay: 0.25, ease: "power3.out" });
        },
      });
    });
    return () => {
      cancel();
      st?.kill();
    };
  }, []);

  return (
    <section aria-label="What we build" className="overflow-hidden border-y border-rule py-6 md:py-10">
      <div ref={a}>
        <div className="flex w-max animate-[marquee_45s_linear_infinite] motion-reduce:animate-none">
          <Row />
        </div>
      </div>
      <div ref={b}>
        <div className="flex w-max animate-[marquee_45s_linear_infinite_reverse] motion-reduce:animate-none">
          <Row outline />
        </div>
      </div>
    </section>
  );
}
