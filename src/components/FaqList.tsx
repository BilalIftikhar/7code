/** Answer-first FAQ list using native <details> — works without JavaScript. */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <ul className="border-t border-night">
      {faqs.map((f) => (
        <li key={f.q} className="border-b border-rule">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold md:text-xl [&::-webkit-details-marker]:hidden">
              <h3>{f.q}</h3>
              <span
                aria-hidden="true"
                className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule bg-card transition-transform duration-300 group-open:rotate-45"
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
            </summary>
            <p className="max-w-[68ch] pb-6 leading-relaxed text-graphite">{f.a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
