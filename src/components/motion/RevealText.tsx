"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { prefersReducedMotion } from "./utils";

type Props = {
  as?: "h1" | "h2" | "h3" | "p";
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  /** Animate on page load instead of when scrolled into view */
  onLoad?: boolean;
};

/** Headline that rises line by line from behind a mask (Locomotive-style). */
export function RevealText({ as = "h2", children, className, id, delay = 0, onLoad = false }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.style.visibility = "visible";
      return;
    }
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { visibility: "visible" });
        return gsap.from(self.lines, {
          yPercent: 115,
          duration: 1.15,
          ease: "expo.out",
          stagger: 0.09,
          delay,
          scrollTrigger: onLoad ? undefined : { trigger: el, start: "top 88%", once: true },
        });
      },
    });
    return () => split.revert();
  }, [delay, onLoad]);

  const props = { id, className, "data-reveal": "" };
  if (as === "h1") return <h1 ref={ref as React.Ref<HTMLHeadingElement>} {...props}>{children}</h1>;
  if (as === "h3") return <h3 ref={ref as React.Ref<HTMLHeadingElement>} {...props}>{children}</h3>;
  if (as === "p") return <p ref={ref as React.Ref<HTMLParagraphElement>} {...props}>{children}</p>;
  return <h2 ref={ref as React.Ref<HTMLHeadingElement>} {...props}>{children}</h2>;
}
