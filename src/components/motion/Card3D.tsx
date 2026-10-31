"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useRichPointer } from "./utils";

/**
 * 3D tilt card: leans toward the pointer in real perspective, with a moving
 * specular glare. Children marked `data-depth="40"` float that many px above
 * the card surface. Desktop pointers only; inert for reduced motion.
 */
export function Card3D({
  children,
  className = "",
  max = 9,
  glare = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees */
  max?: number;
  glare?: boolean;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const enabled = useRichPointer();

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0, gx = 50, gy = 50, hover = 0, h = 0;

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      h += (hover - h) * 0.12;
      el.style.setProperty("--rx", `${(-cy * max).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(cx * max).toFixed(2)}deg`);
      el.style.setProperty("--gx", `${gx.toFixed(1)}%`);
      el.style.setProperty("--gy", `${gy.toFixed(1)}%`);
      el.style.setProperty("--h", h.toFixed(3));
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 || Math.abs(hover - h) > 0.001) raf = requestAnimationFrame(loop);
      else raf = 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      tx = px * 2 - 1;
      ty = py * 2 - 1;
      gx = px * 100;
      gy = py * 100;
      hover = 1;
      kick();
    };
    const leave = () => {
      tx = 0;
      ty = 0;
      hover = 0;
      kick();
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, [enabled, max]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`card3d relative ${className}`}
      data-tilt={enabled ? "" : undefined}
    >
      {children}
      {glare && enabled && <span aria-hidden="true" className="card3d-glare" />}
    </Tag>
  );
}
