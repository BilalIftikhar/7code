"use client";

import { useState, type ReactNode } from "react";
import { CodeMark } from "@/components/Logo";

// Persists across client-side navigations; false only for the very first render.
let firstRender = true;

/** Route transition: a curtain wipes up off each newly opened page. */
export default function Template({ children }: { children: ReactNode }) {
  // Decided in the browser only: the server (and the first hydration) never render a curtain
  const [curtain] = useState(() => {
    if (typeof window === "undefined") return false;
    const show = !firstRender;
    firstRender = false;
    return show;
  });

  return (
    <>
      {curtain && (
        <div aria-hidden="true" className="page-curtain">
          <CodeMark color="#fff" className="h-12 w-auto" />
        </div>
      )}
      {children}
    </>
  );
}
