import { useSyncExternalStore } from "react";

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
export const FINE_POINTER = "(hover: hover) and (pointer: fine)";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION).matches;

export const finePointer = () => typeof window !== "undefined" && window.matchMedia(FINE_POINTER).matches;

/** Live media-query match; false during server render. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** True on desktop pointers when the visitor hasn't asked for reduced motion. */
export function useRichPointer() {
  const fine = useMediaQuery(FINE_POINTER);
  const reduced = useMediaQuery(REDUCED_MOTION);
  return fine && !reduced;
}
