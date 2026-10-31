"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/components/motion/utils";
import { whenIdle } from "@/components/motion/idle";

const steps = [
  { name: "Build", body: "We design and build a fast website, store or product around how your customers buy." },
  { name: "Launch", body: "Technical SEO, location pages and structured data get you found on Google and in AI answers." },
  { name: "Grow", body: "Search, content and campaigns turn visits into enquiries, measured and improved every month." },
];
// Timeline seconds at which each step becomes the active one
const STEP_AT = [0, 3.2, 7.2];

const N = "var(--color-night)";
const R = "var(--color-rule)";
const C = "var(--color-card)";
const G = "#e4e4e4";

/**
 * Motion-graphic story. Desktop: pinned and scrubbed by scroll.
 * Mobile: plays on its own when in view. Reduced motion: static.
 * Illustrative only — no data or figures are implied.
 */
export function GrowthStory() {
  const section = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [step, setStep] = useState(0);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = svg.current;
    const sec = section.current;
    if (!root || !sec || prefersReducedMotion()) return;
    let tl: gsap.core.Timeline | null = null;
    let mm: gsap.MatchMedia | null = null;
    let io: IntersectionObserver | null = null;

    // Built lazily: on desktop in idle time, on phones only when the section is near
    const build = () => {
    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(root);

    tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
    let lastStep = -1;
    const onUpdate = () => {
      const t = tl!.time();
      const next = t >= STEP_AT[2] ? 2 : t >= STEP_AT[1] ? 1 : 0;
      if (next !== lastStep) {
        lastStep = next;
        setStep(next);
      }
      // Progress bar is written directly — no React re-render per frame
      if (bar.current) bar.current.style.transform = `scaleX(${tl!.progress()})`;
    };
    tl.eventCallback("onUpdate", onUpdate);

    // Initial states
    gsap.set(q(".draw"), { strokeDasharray: 1, strokeDashoffset: 1 });
    gsap.set(q(".pop"), { scale: 0, transformOrigin: "50% 50%", transformBox: "fill-box" });
    gsap.set(q(".scene-2, .scene-3"), { autoAlpha: 0 });
    gsap.set(q(".row"), { autoAlpha: 0, y: 24 });
    gsap.set(q(".query-clip"), { attr: { width: 0 } });

    // Scene 1 — Build
    tl.to(q(".s1-frame"), { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" })
      .to(q(".s1-dot"), { scale: 1, stagger: 0.08, duration: 0.3 }, "-=0.3")
      .to(q(".s1-block"), { scale: 1, stagger: 0.12, duration: 0.5, ease: "back.out(1.6)" }, "-=0.1")
      .to({}, { duration: 0.5 })
      // Scene 2 — Launch
      .to(q(".scene-1"), { autoAlpha: 0, y: -20, duration: 0.5 }, STEP_AT[1])
      .fromTo(q(".scene-2"), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "<0.15")
      .to(q(".query-clip"), { attr: { width: 440 }, duration: 0.9, ease: "steps(30)" })
      .to(q(".row"), { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.45 }, "-=0.2")
      .to(q(".row-ours"), { y: -240, duration: 1, ease: "power3.inOut" }, "+=0.2")
      .to(q(".row-other"), { y: 80, duration: 1, ease: "power3.inOut" }, "<")
      .to(q(".s2-badge"), { scale: 1, duration: 0.35, ease: "back.out(2.5)" }, "-=0.15")
      .to({}, { duration: 0.4 })
      // Scene 3 — Grow
      .to(q(".scene-2"), { autoAlpha: 0, y: -20, duration: 0.5 }, STEP_AT[2])
      .fromTo(q(".scene-3"), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "<0.15")
      .to(q(".s3-axis"), { strokeDashoffset: 0, duration: 0.5, stagger: 0.1 })
      .to(q(".s3-line"), { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" })
      .to(q(".s3-area"), { opacity: 0.07, duration: 0.6 }, "-=0.6")
      .to(q(".s3-point"), { scale: 1, stagger: 0.12, duration: 0.3, ease: "back.out(3)" }, "-=1.2")
      .from(q(".bar"), { attr: { height: 0, y: 420 }, stagger: 0.08, duration: 0.6 }, "-=0.6")
      .to({}, { duration: 0.6 });

    mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const st = ScrollTrigger.create({
        trigger: sec,
        start: "top top",
        end: "+=2600",
        pin: true,
        scrub: 0.6,
        animation: tl!,
      });
      return () => st.kill();
    });
    mm.add("(max-width: 1023px)", () => {
      // Phones: play through once when it comes into view
      tl!.play();
    });
    };

    let cancelIdle = () => {};
    if (window.matchMedia("(min-width: 1024px)").matches) {
      cancelIdle = whenIdle(build);
    } else {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            io?.disconnect();
            build();
          }
        },
        { rootMargin: "0px 0px -25% 0px" },
      );
      io.observe(sec);
    }

    return () => {
      cancelIdle();
      io?.disconnect();
      mm?.revert();
      tl?.kill();
    };
  }, []);

  return (
    <section ref={section} aria-labelledby="story-h" className="relative overflow-hidden bg-card lg:h-svh">
      <div className="wrap grid h-full gap-10 py-20 lg:grid-cols-12 lg:items-center lg:py-0">
        <div className="lg:col-span-5">
          <h2 id="story-h" className="display text-[clamp(2.4rem,5vw,4.25rem)]">
            From first line of code to first enquiry.
          </h2>
          <ol className="mt-10 space-y-2">
            {steps.map((s, i) => (
              <li
                key={s.name}
                aria-current={step === i ? "step" : undefined}
                className={`rounded-xl border p-5 transition-colors duration-500 ${step === i ? "border-night bg-night text-white" : "border-rule"}`}
              >
                <p className="flex items-baseline gap-3">
                  <span className={`text-sm tabular-nums ${step === i ? "text-white/60" : "text-graphite"}`}>0{i + 1}</span>
                  <span className="text-xl font-semibold">{s.name}</span>
                </p>
                <p className={`mt-2 leading-relaxed ${step === i ? "text-white/75" : "text-graphite"}`}>{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 h-1 overflow-hidden rounded-full bg-rule" aria-hidden="true">
            <div ref={bar} className="h-full origin-left bg-night" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <svg ref={svg} viewBox="0 0 640 520" className="h-auto w-full" role="img" aria-label="Illustration: a website is built, rises to the top of search results, and enquiries grow">
            {/* Scene 1 — a website assembling */}
            <g className="scene-1">
              <rect className="draw s1-frame" pathLength={1} x="40" y="40" width="560" height="430" rx="16" fill={C} stroke={N} strokeWidth="2" />
              <line x1="40" y1="84" x2="600" y2="84" stroke={R} strokeWidth="2" />
              {[66, 86, 106].map((cx) => (
                <circle key={cx} className="pop s1-dot" cx={cx} cy="62" r="6" fill={R} />
              ))}
              <rect className="pop s1-block" x="72" y="108" width="496" height="20" rx="6" fill={G} />
              <rect className="pop s1-block" x="72" y="148" width="300" height="118" rx="10" fill={N} />
              <rect className="pop s1-block" x="96" y="176" width="210" height="16" rx="4" fill="#fff" opacity=".85" />
              <rect className="pop s1-block" x="96" y="204" width="150" height="16" rx="4" fill="#fff" opacity=".45" />
              <rect className="pop s1-block" x="96" y="232" width="90" height="22" rx="11" fill="#fff" />
              <rect className="pop s1-block" x="392" y="148" width="176" height="118" rx="10" fill={G} />
              {[72, 240, 408].map((x) => (
                <rect key={x} className="pop s1-block" x={x} y="292" width="160" height="148" rx="10" fill={G} />
              ))}
            </g>

            {/* Scene 2 — climbing the search results */}
            <g className="scene-2" style={{ visibility: "hidden" }}>
              <rect x="60" y="48" width="520" height="52" rx="26" fill={C} stroke={N} strokeWidth="2" />
              <clipPath id="query-clip">
                <rect className="query-clip" x="96" y="60" width="440" height="30" />
              </clipPath>
              <text x="96" y="81" fontSize="18" fontWeight="500" fill={N} clipPath="url(#query-clip)">
                web development company abu dhabi
              </text>
              {[0, 1, 2].map((i) => (
                <g key={i} transform={`translate(0 ${136 + i * 80})`}>
                  <g className="row row-other">
                    <rect x="60" y="0" width="520" height="64" rx="12" fill={C} stroke={R} strokeWidth="1.5" />
                    <rect x="84" y="18" width={220 - i * 30} height="12" rx="4" fill={G} />
                    <rect x="84" y="38" width={300 - i * 20} height="9" rx="4" fill={G} opacity=".7" />
                  </g>
                </g>
              ))}
              <g transform="translate(0 376)">
              <g className="row row-ours">
                <rect x="60" y="0" width="520" height="64" rx="12" fill={N} />
                <text x="84" y="30" fontSize="17" fontWeight="650" fill="#fff">Your business</text>
                <rect x="84" y="40" width="240" height="9" rx="4" fill="#fff" opacity=".4" />
                <g className="pop s2-badge">
                  <circle cx="540" cy="32" r="20" fill="#fff" />
                  <text x="540" y="38" fontSize="16" fontWeight="700" textAnchor="middle" fill={N}>#1</text>
                </g>
              </g>
              </g>
            </g>

            {/* Scene 3 — growth */}
            <g className="scene-3" style={{ visibility: "hidden" }}>
              <line className="draw s3-axis" pathLength={1} x1="80" y1="60" x2="80" y2="420" stroke={N} strokeWidth="2" />
              <line className="draw s3-axis" pathLength={1} x1="80" y1="420" x2="600" y2="420" stroke={N} strokeWidth="2" />
              {[46, 70, 98, 132, 176, 228].map((h, i) => (
                <rect key={i} className="bar" x={112 + i * 80} y={420 - h} width="44" height={h} rx="5" fill={i === 5 ? N : G} opacity={i === 5 ? 0.9 : 1} />
              ))}
              <path
                className="s3-area"
                d="M80 400 C 170 392, 220 352, 290 336 S 410 262, 470 206 S 560 104, 600 86 L600 420 L80 420 Z"
                fill={N}
                opacity="0"
              />
              <path
                className="draw s3-line"
                pathLength={1}
                d="M80 400 C 170 392, 220 352, 290 336 S 410 262, 470 206 S 560 104, 600 86"
                fill="none"
                stroke={N}
                strokeWidth="4"
                strokeLinecap="round"
              />
              {[
                [80, 400],
                [290, 336],
                [470, 206],
                [600, 86],
              ].map(([cx, cy]) => (
                <circle key={cx} className="pop s3-point" cx={cx} cy={cy} r="8" fill={C} stroke={N} strokeWidth="3" />
              ))}
              <text x="96" y="80" fontSize="14" fill="var(--color-graphite)">Visits</text>
              <text x="600" y="448" fontSize="14" textAnchor="end" fill="var(--color-graphite)">Enquiries</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
