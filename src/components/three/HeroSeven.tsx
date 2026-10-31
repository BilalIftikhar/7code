"use client";

import { useEffect, useRef, useState } from "react";
import type { SevenSceneHandle } from "./SevenScene";
import { prefersReducedMotion } from "@/components/motion/utils";

/** WebGL that runs on a real GPU. Software renderers (SwiftShader, llvmpipe) would stall the main thread. */
function hardwareWebGL() {
  try {
    const c = document.createElement("canvas");
    const gl = (c.getContext("webgl2") || c.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|software|basic render/i.test(renderer);
  } catch {
    return false;
  }
}

const INTERACTION = ["pointermove", "pointerdown", "touchstart", "wheel", "scroll", "keydown"] as const;

/**
 * Interactive 3D "7" for the hero. The flat SVG 7 renders instantly and stays
 * until the visitor first interacts — only then is three.js downloaded — so the
 * 3D scene never competes with the first paint. Without a hardware GPU, with
 * Save-Data on, or with reduced motion, the flat 7 simply stays.
 */
export function HeroSeven({ className = "" }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv || prefersReducedMotion()) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;

    let handle: SevenSceneHandle | null = null;
    let cancelled = false;
    let started = false;
    const lowPower = window.innerWidth < 768 || (navigator.hardwareConcurrency ?? 8) <= 4;

    const start = async () => {
      if (started) return;
      started = true;
      INTERACTION.forEach((t) => window.removeEventListener(t, onFirst));
      if (!hardwareWebGL()) return;
      const { createSevenScene } = await import("./SevenScene");
      if (cancelled) return;
      handle = createSevenScene(cv, { reducedMotion: false, lowPower });
      setReady(true);
    };
    const onFirst = () => {
      const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
      idle(() => void start(), { timeout: 600 });
    };
    INTERACTION.forEach((t) => window.addEventListener(t, onFirst, { once: true, passive: true }));

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
      INTERACTION.forEach((t) => window.removeEventListener(t, onFirst));
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
      handle?.dispose();
    };
  }, []);

  return (
    <div ref={wrap} className={`relative ${className}`} aria-hidden="true">
      {/* Flat 7: instant, zero-JS; faded out once the 3D scene takes over */}
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
