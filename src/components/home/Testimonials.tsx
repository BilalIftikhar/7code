import { site } from "@/lib/site";
import { Card3D } from "@/components/motion/Card3D";

// Verbatim client feedback from the founder's Upwork contracts (5.0 ratings).
const reviews = [
  {
    quote:
      "Bilal worked with us for about a year on a large Laravel and NextJS platform. He was always responsive, easy to communicate with and reliable with his hours. He took feedback well and was always willing to put in the effort to improve. He contributed to several features across the admin and technician sides of the platform.",
    source: "Client on Upwork",
    context: "Laravel & Next.js platform, Sept 2025 – Oct 2026",
  },
  {
    quote: "Bilal diagnosed our significant backend and css issues for our website and successfully fixed our issues.",
    source: "Client on Upwork",
    context: "Website backend and CSS fix, 2025",
  },
];

function Stars() {
  return (
    <span className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7z" fill="currentColor" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section aria-labelledby="reviews-h" className="wrap pb-24 md:pb-32">
      <div className="grid gap-6 border-t border-night pt-10 md:grid-cols-12">
        <h2 id="reviews-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
          What clients say
        </h2>
        <div className="md:col-span-4 md:col-start-9 md:self-end">
          <p className="text-lg leading-relaxed text-graphite">
            Verified reviews from co-founder Bilal&apos;s Upwork contracts, where he is Top Rated Plus with a 100% Job Success Score.
          </p>
          <a href={site.founder.upwork} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold underline underline-offset-4">
            See the Upwork profile
          </a>
        </div>
      </div>
      <ul className="mt-12 grid gap-3 md:grid-cols-12">
        {reviews.map((r, i) => (
          <Card3D as="li" key={i} max={5} className={`flex flex-col justify-between gap-10 rounded-xl p-7 md:p-10 ${i === 0 ? "bg-night text-white md:col-span-8" : "bg-card md:col-span-4"}`}>
            <figure>
              <Stars />
              <blockquote className={`mt-6 leading-relaxed ${i === 0 ? "display-soft text-[clamp(1.3rem,2.2vw,1.85rem)]" : "text-xl"}`}>
                <p>&ldquo;{r.quote}&rdquo;</p>
              </blockquote>
              <figcaption className={`mt-8 text-sm ${i === 0 ? "text-white/65" : "text-graphite"}`}>
                <span className={`block font-semibold ${i === 0 ? "text-white" : "text-night"}`}>{r.source}</span>
                {r.context}
              </figcaption>
            </figure>
          </Card3D>
        ))}
      </ul>
    </section>
  );
}
