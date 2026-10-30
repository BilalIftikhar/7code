"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import type { ServiceCategory } from "@/lib/services";
import { useRichPointer } from "@/components/motion/utils";

/** Services list with a floating preview that follows the cursor (Resn/Locomotive-style). */
export function ServicesIndex({ services }: { services: ServiceCategory[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const enabled = useRichPointer();

  useEffect(() => {
    if (!enabled || !wrap.current || !panel.current) return;
    const el = panel.current;
    const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "power3.out" });
    const host = wrap.current;
    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      xTo(e.clientX - r.left + 28);
      yTo(e.clientY - r.top - 40);
    };
    host.addEventListener("pointermove", move);
    return () => host.removeEventListener("pointermove", move);
  }, [enabled]);

  const current = active !== null ? services[active] : null;

  return (
    <div ref={wrap} className="relative mt-12" onPointerLeave={() => setActive(null)}>
      <ul>
        {services.map((s, i) => (
          <li key={s.slug} className="border-b border-rule first:border-t">
            <Link
              href={`/services/${s.slug}`}
              onPointerEnter={() => setActive(i)}
              className={`group grid grid-cols-1 gap-3 py-7 transition-[color,padding] duration-500 ease-[var(--ease-out-quart)] md:grid-cols-12 md:items-baseline md:gap-6 md:px-4 ${
                active !== null && active !== i ? "md:text-night/35" : ""
              } md:hover:pl-8`}
            >
              <h3 className="display-soft text-2xl transition-colors group-hover:text-signal md:col-span-5 md:text-[2.1rem]">
                {s.name}
              </h3>
              <p className="max-w-[52ch] leading-relaxed text-graphite md:col-span-5">{s.line}</p>
              <p className="text-sm text-graphite md:col-span-2 md:text-right">{s.tools.slice(0, 2).join(", ")}</p>
            </Link>
          </li>
        ))}
      </ul>

      {enabled && (
        <div
          ref={panel}
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 top-0 z-10 w-72 rounded-2xl bg-night p-6 text-white shadow-[0_30px_60px_-20px_rgba(13,15,36,0.5)] transition-[opacity,scale] duration-300 ease-[var(--ease-out-quart)] ${
            current ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {current && (
            <>
              <p className="text-sm text-signal-soft">Includes</p>
              <ul className="mt-3 space-y-1.5">
                {current.includes.map((x) => (
                  <li key={x} className="display-soft text-lg">
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-mist">{current.tools.join(", ")}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
