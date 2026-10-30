"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText } from "@/components/motion/RevealText";
import { Magnetic } from "@/components/motion/Magnetic";
import { finePointer, prefersReducedMotion } from "@/components/motion/utils";

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const seven = useRef<SVGSVGElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !section.current || !seven.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Scroll: the 7 swings forward and away, the copy drifts up slower
      gsap.to(seven.current, {
        rotate: -14,
        scale: 1.35,
        xPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
      gsap.to(content.current, {
        yPercent: -18,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    }, section);

    // Pointer: the 7 tilts toward the cursor
    let cleanupPointer = () => {};
    if (finePointer()) {
      const inner = seven.current.querySelector("g")!;
      const rx = gsap.quickTo(inner, "x", { duration: 1.2, ease: "power3.out" });
      const ry = gsap.quickTo(inner, "y", { duration: 1.2, ease: "power3.out" });
      const rr = gsap.quickTo(inner, "rotation", { duration: 1.4, ease: "power3.out" });
      const onMove = (e: PointerEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        rx(nx * 6);
        ry(ny * 6);
        rr(nx * 4);
      };
      window.addEventListener("pointermove", onMove);
      cleanupPointer = () => window.removeEventListener("pointermove", onMove);
    }
    return () => {
      ctx.revert();
      cleanupPointer();
    };
  }, []);

  return (
    <section ref={section} className="seven-edge relative -mt-px overflow-hidden bg-night pb-36 text-white md:min-h-[calc(100svh-4.5rem)] md:pb-44">
      <svg
        ref={seven}
        viewBox="0 0 100 120"
        className="pointer-events-none absolute -right-[12%] top-[27rem] h-[52%] w-auto origin-bottom-left text-signal sm:-right-[8%] md:right-[-2%] md:top-60 md:h-[95%] lg:right-[3%]"
        aria-hidden="true"
      >
        <g style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path
            className="seven-stroke"
            pathLength={1}
            d="M8 14 H90 L38 116"
            fill="none"
            stroke="currentColor"
            strokeWidth="13"
            strokeLinejoin="miter"
          />
        </g>
      </svg>

      <div ref={content} className="wrap relative pt-20 md:pt-32">
        <p className="rise max-w-md text-mist" style={{ animationDelay: "0.2s" }}>
          Digital agency in Lahore, working with businesses across the UAE, Oman and worldwide.
        </p>
        <RevealText
          as="h1"
          onLoad
          delay={0.3}
          className="display invisible mt-8 max-w-[11ch] text-[clamp(2.3rem,10.5vw,9.5rem)]"
        >
          Digital experiences, engineered for growth.
        </RevealText>
        <div className="rise mt-10 grid gap-8 md:mt-14 md:grid-cols-12" style={{ animationDelay: "0.9s" }}>
          <p className="max-w-[46ch] text-lg leading-relaxed text-chalk/85 md:col-span-5">
            From custom software and high-performing websites to mobile apps, eCommerce and search marketing, 7CODE helps
            businesses build, launch and grow with confidence.
          </p>
          <div className="flex flex-wrap items-start gap-3 md:col-span-6 md:col-start-7">
            <Magnetic>
              <Link
                href="/contact"
                className="block rounded-full bg-signal px-7 py-4 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
              >
                Start a project
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/work"
                className="block rounded-full border border-white/25 bg-night/60 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:border-white/60"
              >
                Explore our work
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
