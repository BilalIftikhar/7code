"use client";

import { useEffect, useRef, useState } from "react";
import type { SevenSceneHandle } from "./SevenScene";
import { prefersReducedMotion } from "@/components/motion/utils";

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Interactive 3D "7" for the hero. Shows a flat SVG 7 until three.js has
 * loaded (and permanently if WebGL is unavailable).
 */
export function HeroSeven({ className = "" }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv || !webglAvailable()) return;

    let handle: SevenSceneHandle | null = null;
    let cancelled = false;
    const reduced = prefersReducedMotion();
    const lowPower = window.innerWidth < 768 || (navigator.hardwareConcurrency ?? 8) <= 4;

    const start = async () => {
      const { createSevenScene } = await import("./SevenScene");
      if (cancelled) return;
      handle = createSevenScene(cv, { reducedMotion: reduced, lowPower });
      setReady(true);
    };
    // Start after the hero intro has played, then wait for an idle moment
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
    const delay = window.setTimeout(() => idle(() => void start()), 1400);

    const onPointer = (e: PointerEvent) => {
      handle?.setPointer((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
    };
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height + window.innerHeight * 0.5)));
      handle?.setScroll(p);
    };
    const io = new IntersectionObserver(([entry]) => handle?.setActive(entry.isIntersecting && !document.hidden));
    io.observe(el);
    const onVis = () => handle?.setActive(!document.hidden);

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelled = true;
      window.clearTimeout(delay);
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
      handle?.dispose();
    };
  }, []);

  return (
    <div ref={wrap} className={`relative ${className}`} aria-hidden="true">
      {/* Flat fallback, faded out once the 3D scene is ready */}
      <svg
        viewBox="0 0 100 120"
        className={`absolute inset-0 m-auto h-[70%] w-auto text-night transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}
      >
        <path d="M0 0H100V17L51 120H29L76 19H0Z" fill="currentColor" />
      </svg>
      <canvas
        ref={canvas}
        className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
