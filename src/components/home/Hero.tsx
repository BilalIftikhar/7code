"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "@/components/motion/Magnetic";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { ProjectVisual } from "@/components/ProjectVisual";
import { HeroSeven } from "@/components/three/HeroSeven";
import { prefersReducedMotion } from "@/components/motion/utils";
import { whenIdle } from "@/components/motion/idle";
import { site, whatsappLink } from "@/lib/site";
import type { Project } from "@/lib/projects";

const LINES = ["Digital", "experiences,", "engineered", "for growth."];

export function Hero({ featured }: { featured: Project }) {
  const showcase = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop only: the scroll-scrubbed clip-path repaints on every scroll frame
    if (prefersReducedMotion() || window.innerWidth < 1024) return;
    let ctx: gsap.Context | null = null;
    const cancel = whenIdle(() => {
    gsap.registerPlugin(ScrollTrigger);
    ctx = gsap.context(() => {
      // Showcase opens up as it scrolls in (headline reveal is pure CSS — see .line-rise)
      gsap.fromTo(
        showcase.current,
        { clipPath: "inset(6% 4% 0% 4% round 18px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 12px)",
          ease: "none",
          scrollTrigger: { trigger: showcase.current, start: "top 95%", end: "top 30%", scrub: 0.5 },
        },
      );
    });
    });
    return () => {
      cancel();
      ctx?.revert();
    };
  }, []);

  return (
    <section className="wrap pt-10 md:pt-16">
      <div className="grid items-center gap-6 lg:grid-cols-12">
        <div className="relative z-10 lg:col-span-8">
          <h1>
            <span className="flex items-center gap-3 text-sm font-semibold text-graphite md:text-base">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#25d366] shadow-[0_0_0_4px_rgba(37,211,102,0.18)]" aria-hidden="true" />
              <ScrambleText text="Web development, SEO & digital marketing agency for Dubai, Abu Dhabi & Worldwide" delay={150} afterIntro />
            </span>{" "}
            <span className="display mt-6 block text-[clamp(2.7rem,7.4vw,7.4rem)]">
              {LINES.map((l, i) => (
                <span key={l} className="block overflow-hidden pb-[0.06em]">
                  <span className="line-rise block" style={{ ["--d" as string]: `${0.15 + i * 0.09}s` }}>
                    {l}
                  </span>{" "}
                </span>
              ))}
            </span>
          </h1>
        </div>
        <HeroSeven className="-mt-4 h-[300px] sm:h-[380px] lg:col-span-4 lg:mt-0 lg:h-[560px]" />
      </div>

      <div className="rise mt-6 grid gap-6 md:mt-10 md:grid-cols-12 md:items-end" style={{ ["--d" as string]: "0.8s" }}>
        <div className="md:col-span-6">
          <p className="max-w-[48ch] text-lg leading-relaxed text-graphite text-pretty">
            Custom websites, web apps, Shopify stores and mobile apps, plus the SEO, AI-search and ad campaigns that make them
            pay. Built by senior engineers for businesses across the UAE, Oman, the UK and Pakistan.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm">
            <li className="flex items-center gap-2 rounded-full border border-rule bg-card px-3.5 py-2">
              <span className="font-semibold">Top Rated</span>
              <span className="text-graphite">on Upwork</span>
            </li>
            <li className="flex items-center gap-2 rounded-full border border-rule bg-card px-3.5 py-2">
              <span className="font-semibold">100%</span>
              <span className="text-graphite">Job Success</span>
            </li>
            <li className="flex items-center gap-2 rounded-full border border-rule bg-card px-3.5 py-2">
              <span className="font-semibold">{site.founder.yearsExperience} years</span>
              <span className="text-graphite">senior engineering</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
          <Magnetic>
            <Link
              href="/contact"
              className="block rounded-full bg-signal px-7 py-4 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
            >
              Get a free quote
            </Link>
          </Magnetic>
          <Magnetic>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border border-night/20 bg-card px-7 py-4 font-semibold text-night transition-colors hover:border-night"
            >
              WhatsApp us
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Featured project showcase */}
      <div className="mt-14 md:mt-20">
        <Link href={`/work/${featured.slug}`} data-cursor="View case" className="group block">
          <div ref={showcase} className="overflow-hidden rounded-xl will-change-[clip-path]">
            <ProjectVisual
              project={featured}
              index={0}
              size="lg"
              className="aspect-[4/5] transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:scale-[1.015] sm:aspect-[16/10] md:aspect-[16/8]"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 items-center gap-4 rounded-xl bg-card px-5 py-4 md:grid-cols-12 md:px-6">
            <div className="flex items-center gap-3 md:col-span-4">
              <span className="rounded-full bg-night px-3 py-1 text-xs font-semibold text-white">Featured project</span>
              <span className="font-semibold">{featured.name}</span>
            </div>
            <p className="hidden text-sm text-graphite md:col-span-3 md:block">{featured.industry}</p>
            <p className="hidden text-sm text-graphite md:col-span-3 md:block">{featured.region}</p>
            <span className="justify-self-end text-sm font-semibold underline-offset-4 group-hover:underline md:col-span-2">
              View case study
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
