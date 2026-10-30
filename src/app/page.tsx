import Link from "next/link";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ProcessTimeline } from "@/components/ProcessTimeline";

const industries: { name: string; work?: string }[] = [
  { name: "Logistics & transport", work: "ferry-global" },
  { name: "Heavy equipment & cranes", work: "seven-lift" },
  { name: "Construction & contracting", work: "maxtgc" },
  { name: "Industrial lifting", work: "masood-lifts" },
  { name: "Apparel & manufacturing", work: "muhseeq" },
  { name: "eCommerce & retail" },
  { name: "Real estate" },
  { name: "Healthcare" },
  { name: "Education" },
  { name: "SaaS & startups" },
  { name: "Hospitality & travel" },
  { name: "Professional services" },
];

const reasons = [
  {
    title: "One team for the build and the growth",
    body: "The people who build your site also run its SEO and campaigns, so nothing gets lost between agencies.",
  },
  {
    title: "A senior engineer leads every project",
    body: `Our founder has ${site.founder.yearsExperience} years of full-stack experience across Laravel, Next.js, React and Shopify, and reviews the work himself.`,
  },
  {
    title: "Built for UAE and Gulf businesses",
    body: "We've shipped for crane hire, logistics and contracting firms in Abu Dhabi and Sohar, and we know how buyers there search and get in touch.",
  },
  {
    title: "You always know where things stand",
    body: "A staging link from week one, a shared task list, and updates on WhatsApp in your working hours.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="seven-edge relative -mt-px overflow-hidden bg-night pb-36 text-white md:pb-44">
        <svg
          viewBox="0 0 100 120"
          className="pointer-events-none absolute -right-[12%] top-[27rem] h-[52%] w-auto text-signal sm:-right-[8%] md:right-[-2%] md:top-60 md:h-[95%] lg:right-[3%]"
          aria-hidden="true"
        >
          <path
            className="seven-stroke"
            pathLength={1}
            d="M8 14 H90 L38 116"
            fill="none"
            stroke="currentColor"
            strokeWidth="13"
            strokeLinejoin="miter"
          />
        </svg>

        <div className="wrap relative pt-20 md:pt-32">
          <p className="rise max-w-md text-mist" style={{ animationDelay: "0.35s" }}>
            Digital agency in Lahore, working with businesses across the UAE, Oman and worldwide.
          </p>
          <h1
            className="rise display mt-8 max-w-[11ch] text-[clamp(2.3rem,10.5vw,9.5rem)]"
            style={{ animationDelay: "0.5s" }}
          >
            Digital experiences, engineered for growth.
          </h1>
          <div
            className="rise mt-10 grid gap-8 md:mt-14 md:grid-cols-12"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="max-w-[46ch] text-lg leading-relaxed text-chalk/85 md:col-span-5">
              From custom software and high-performing websites to mobile apps, eCommerce and search marketing, 7CODE
              helps businesses build, launch and grow with confidence.
            </p>
            <div className="flex flex-wrap items-start gap-3 md:col-span-6 md:col-start-7 md:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-signal px-7 py-4 font-semibold text-white transition-colors hover:bg-[#5a48ff]"
              >
                Start a project
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-white/25 bg-night/60 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:border-white/60"
              >
                Explore our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY — verified facts only */}
      <section aria-label="At a glance" className="wrap py-16 md:py-20">
        <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-10">
          <div className="border-l-2 border-signal pl-5">
            <dt className="text-graphite">Founder&apos;s full-stack experience</dt>
            <dd className="display mt-2 text-5xl">{site.founder.yearsExperience} years</dd>
          </div>
          <div className="border-l-2 border-rule pl-5">
            <dt className="text-graphite">Live projects in this portfolio</dt>
            <dd className="display mt-2 text-5xl">{projects.length}</dd>
          </div>
          <div className="border-l-2 border-rule pl-5">
            <dt className="text-graphite">Countries those clients operate in</dt>
            <dd className="display mt-2 text-5xl">3</dd>
            <dd className="mt-1 text-sm text-graphite">UAE, Oman and Pakistan</dd>
          </div>
        </dl>
      </section>

      {/* SERVICES — index list */}
      <section aria-labelledby="services-h" className="wrap pb-24 md:pb-32">
        <div className="grid gap-6 border-t border-night pt-10 md:grid-cols-12">
          <h2 id="services-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
            What we do
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
            Nine disciplines, one team. Hire us for a single job or the whole thing, from first design to the leads that
            follow.
          </p>
        </div>
        <ul className="mt-12">
          {services.map((s) => (
            <li key={s.slug} className="border-b border-rule first:border-t">
              <Link
                href={`/services/${s.slug}`}
                className="group grid grid-cols-1 gap-3 py-7 transition-colors md:grid-cols-12 md:items-baseline md:gap-6 md:px-4 md:hover:bg-chalk"
              >
                <h3 className="display-soft text-2xl transition-colors group-hover:text-signal md:col-span-4 md:text-[1.75rem]">
                  {s.name}
                </h3>
                <p className="max-w-[52ch] leading-relaxed text-graphite md:col-span-5">{s.line}</p>
                <p className="text-sm text-graphite md:col-span-3 md:text-right">{s.tools.join(", ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* SELECTED WORK */}
      <section aria-labelledby="work-h" className="bg-chalk py-24 md:py-32">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-12">
            <h2 id="work-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
              Selected work
            </h2>
            <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
              Websites and search programmes for companies that sell heavy, specialised services, where one good lead is
              worth a lot.
            </p>
          </div>

          <ul className="mt-14 space-y-6 md:space-y-8">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid overflow-hidden rounded-3xl bg-paper md:grid-cols-12"
                >
                  <div
                    className={`relative flex min-h-64 flex-col justify-between overflow-hidden bg-night p-7 text-white md:col-span-7 md:min-h-[24rem] md:p-10 ${
                      i % 2 ? "md:order-2" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 100 120"
                      className="absolute -bottom-10 -right-6 h-56 w-auto text-signal/25 transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:-translate-y-3 md:h-80"
                      aria-hidden="true"
                    >
                      <path d="M8 14 H90 L38 116" fill="none" stroke="currentColor" strokeWidth="13" />
                    </svg>
                    <p className="relative text-sm text-mist">{p.region}</p>
                    <div className="relative">
                      <p className="display text-[clamp(2.2rem,5vw,4rem)]">{p.name}</p>
                      {p.url && (
                        <p className="mt-3 text-signal-soft">{p.url.replace(/^https?:\/\/(www\.)?/, "")}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-8 p-7 md:col-span-5 md:p-10">
                    <div>
                      <p className="text-sm text-graphite">{p.industry}</p>
                      <p className="mt-3 text-lg leading-relaxed">{p.summary}</p>
                    </div>
                    <div>
                      <ul className="flex flex-wrap gap-2">
                        {p.scope.map((s) => (
                          <li key={s} className="rounded-full border border-rule px-3 py-1 text-sm text-graphite">
                            {s}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-block font-semibold text-signal underline-offset-4 group-hover:underline">
                        Read the case study
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY 7CODE */}
      <section aria-labelledby="why-h" className="wrap py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <h2 id="why-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-5">
            More than an agency. Your growth partner.
          </h2>
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-7">
            {reasons.map((r) => (
              <li key={r.title}>
                <h3 className="display-soft text-xl">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-graphite">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section aria-labelledby="process-h" className="wrap pb-24 md:pb-32">
        <div className="mb-10 grid gap-6 border-t border-night pt-10 md:grid-cols-12">
          <h2 id="process-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
            How a project runs
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
            Eight stages from first call to ongoing growth. Select a stage to see what happens.
          </p>
        </div>
        <ProcessTimeline />
      </section>

      {/* INDUSTRIES */}
      <section aria-labelledby="ind-h" className="bg-night py-24 text-white md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="ind-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)]">
              Industries
            </h2>
            <p className="mt-6 max-w-[40ch] leading-relaxed text-mist">
              The highlighted sectors link to work we&apos;ve shipped. The rest are sectors we build for using the same
              approach.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-3 md:col-span-8">
            {industries.map((ind) =>
              ind.work ? (
                <li key={ind.name}>
                  <Link
                    href={`/work/${ind.work}`}
                    className="block rounded-full bg-signal px-5 py-3 font-semibold transition-colors hover:bg-[#5a48ff]"
                  >
                    {ind.name}
                  </Link>
                </li>
              ) : (
                <li key={ind.name} className="rounded-full border border-white/15 px-5 py-3 text-chalk/80">
                  {ind.name}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* FOUNDER */}
      <section aria-labelledby="founder-h" className="wrap py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 id="founder-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)]">
              Founder-led
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xl leading-relaxed">
              7CODE was founded by {site.founder.name}, a senior full-stack engineer with {site.founder.yearsExperience}{" "}
              years of building production applications in Laravel, PHP, React, Next.js, Vue and Shopify.
            </p>
            <p className="mt-5 leading-relaxed text-graphite">
              He leads the technical direction on every project and works with a distributed team of designers,
              developers and marketers across Pakistan. Clients get senior judgement on their project, not a hand-off to
              whoever is free.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-semibold">
              <Link href="/about" className="text-signal underline-offset-4 hover:underline">
                About 7CODE
              </Link>
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={site.founder.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline-offset-4 hover:underline"
              >
                Upwork profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section aria-labelledby="cta-h" className="bg-signal text-white">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 id="cta-h" className="display text-[clamp(2.6rem,6.5vw,5.75rem)] md:col-span-8">
            Have a big idea? Let&apos;s build it properly.
          </h2>
          <div className="md:col-span-4 md:self-end">
            <p className="text-lg leading-relaxed text-white/85">
              Tell us about your goals. We&apos;ll reply with a practical plan, a timeline and a price.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-semibold text-night transition-colors hover:bg-chalk"
            >
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
