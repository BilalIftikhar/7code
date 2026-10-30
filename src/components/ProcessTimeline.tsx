"use client";

import { useState } from "react";

const steps = [
  { name: "Discover", detail: "We learn how your business makes money, who buys from you and what the website has to do. Usually one call and a short questionnaire." },
  { name: "Strategize", detail: "Sitemap, keyword research and a conversion plan. You see exactly which pages we'll build and why each one exists." },
  { name: "Design", detail: "Wireframes, then full designs in Figma for desktop and mobile. You review real layouts with your real content, not lorem ipsum." },
  { name: "Develop", detail: "We build in Next.js, Laravel, Shopify or WordPress, whichever suits the job, on a staging link you can open at any time." },
  { name: "Test", detail: "Every page, form and button checked on phones, tablets and desktops, plus speed, accessibility and SEO checks before anything goes live." },
  { name: "Launch", detail: "Domain, hosting, redirects, analytics and Search Console set up, then the site goes live with no downtime." },
  { name: "Optimize", detail: "We watch real visitor data for the first weeks and fix what slows people down or stops them contacting you." },
  { name: "Grow", detail: "Ongoing SEO, content, ads and new features, on a monthly plan or project by project." },
];

export function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ol
        role="tablist"
        aria-label="Our process"
        className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-8"
      >
        {steps.map((s, i) => (
          <li key={s.name} role="presentation" className="bg-paper">
            <button
              role="tab"
              id={`step-tab-${i}`}
              aria-selected={active === i}
              aria-controls="step-panel"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`flex h-full w-full flex-col items-start gap-6 px-3 py-4 text-left transition-colors md:px-4 md:py-6 ${
                active === i ? "bg-night text-white" : "hover:bg-chalk"
              }`}
            >
              <span className={`text-sm tabular-nums ${active === i ? "text-signal-soft" : "text-graphite"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display-soft text-[0.95rem] sm:text-lg">{s.name}</span>
            </button>
          </li>
        ))}
      </ol>
      <div
        id="step-panel"
        role="tabpanel"
        aria-labelledby={`step-tab-${active}`}
        aria-live="polite"
        className="mt-8 grid gap-4 md:grid-cols-12"
      >
        <p className="display-soft text-3xl md:col-span-4">{steps[active].name}</p>
        <p className="max-w-[60ch] text-lg leading-relaxed text-graphite md:col-span-7 md:col-start-6">
          {steps[active].detail}
        </p>
      </div>
    </div>
  );
}
