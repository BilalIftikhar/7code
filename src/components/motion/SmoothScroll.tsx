"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import { finePointer, prefersReducedMotion } from "./utils";
import { whenIdle } from "./idle";

let lenis: Lenis | null = null;
let trigger: typeof ScrollTriggerType | null = null;

/**
 * Locomotive-style inertial scrolling, kept in sync with GSAP ScrollTrigger.
 * Mouse/trackpad only (touch already has native momentum). Lenis and GSAP are
 * loaded on demand in idle time, so they never delay first paint — and phones
 * never download them from here.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion() || !finePointer()) return;
    let cancelled = false;
    let tick: ((time: number) => void) | null = null;
    let removeTick = () => {};

    const cancelIdle = whenIdle(async () => {
      const [{ default: LenisCtor }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      trigger = ScrollTrigger;
      lenis = new LenisCtor({ lerp: 0.11, wheelMultiplier: 1, anchors: { offset: -96 } });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      removeTick = () => tick && gsap.ticker.remove(tick);
    }, 2500);

    return () => {
      cancelled = true;
      cancelIdle();
      removeTick();
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // New page: jump to top and recalculate triggers
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    requestAnimationFrame(() => trigger?.refresh());
  }, [pathname]);

  return null;
}
