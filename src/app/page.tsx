import Link from "next/link";
import { services } from "@/lib/services";
import { archive, projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WorkGrid } from "@/components/home/WorkGrid";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { RevealText } from "@/components/motion/RevealText";
import { Magnetic } from "@/components/motion/Magnetic";

const industries: { name: string; work?: string }[] = [
  { name: "Live events & marketplaces", work: "av-leads" },
  { name: "Logistics & transport", work: "ferry-global" },
  { name: "Heavy equipment & cranes", work: "seven-lift" },
  { name: "Construction & contracting", work: "maxtgc" },
  { name: "Industrial lifting", work: "masood-lifts" },
  { name: "Apparel & manufacturing", work: "muhseeq" },
  { name: "eCommerce & retail", work: "poolstore" },
  { name: "Enterprise XR", work: "igivu" },
  { name: "Logistics platforms", work: "logistivo" },
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
      <Hero featured={projects[0]} />

      {/* CREDIBILITY — verified facts only */}
      <section aria-label="At a glance" className="wrap py-16 md:py-20">
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-card p-6 md:p-8">
            <dt className="text-graphite">Founder&apos;s full-stack experience</dt>
            <dd className="display mt-6 text-6xl">{site.founder.yearsExperience} years</dd>
          </div>
          <div className="rounded-xl bg-card p-6 md:p-8">
            <dt className="text-graphite">Projects shipped, including design work</dt>
            <dd className="display mt-6 text-6xl">{projects.length + archive.length}</dd>
            <dd className="mt-1 text-sm text-graphite">{projects.length} with full case studies</dd>
          </div>
          <div className="rounded-xl bg-card p-6 md:p-8">
            <dt className="text-graphite">Countries those clients operate in</dt>
            <dd className="display mt-6 text-6xl">4</dd>
            <dd className="mt-1 text-sm text-graphite">UAE, Oman, United Kingdom and Pakistan</dd>
          </div>
        </dl>
      </section>

      {/* SERVICES — index list */}
      <section aria-labelledby="services-h" className="wrap pb-24 md:pb-32">
        <div className="grid gap-6 border-t border-night pt-10 md:grid-cols-12">
          <RevealText id="services-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
              What we do
            </RevealText>
          <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
            Nine disciplines, one team. Hire us for a single job or the whole thing, from first design to the leads that
            follow.
          </p>
        </div>
        <ServicesIndex services={services} />
      </section>

      <Marquee />

      {/* SELECTED WORK */}
      <section aria-labelledby="work-h" className="py-24 md:py-32">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-12">
            <RevealText id="work-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
              More work
            </RevealText>
            <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
              Marketplaces, storefronts, business websites and search programmes for clients in the UAE, Oman, the UK and
              Pakistan.
            </p>
          </div>

          <div className="mt-14">
            <WorkGrid projects={projects.slice(1)} offset={1} />
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/work"
              className="rounded-full border border-night/20 bg-card px-7 py-4 font-semibold transition-colors hover:border-night"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>

      {/* WHY 7CODE */}
      <section aria-labelledby="why-h" className="wrap py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <RevealText id="why-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-5">
              More than an agency. Your growth partner.
            </RevealText>
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
          <RevealText id="process-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
              How a project runs
            </RevealText>
          <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
            Eight stages from first call to ongoing growth. Select a stage to see what happens.
          </p>
        </div>
        <ProcessTimeline />
      </section>

      {/* INDUSTRIES */}
      <section aria-labelledby="ind-h" className="bg-card py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <RevealText id="ind-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)]">
              Industries
            </RevealText>
            <p className="mt-6 max-w-[40ch] leading-relaxed text-graphite">
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
                    className="block rounded-full bg-signal px-5 py-3 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
                  >
                    {ind.name}
                  </Link>
                </li>
              ) : (
                <li key={ind.name} className="rounded-full border border-rule px-5 py-3 text-graphite">
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
            <RevealText id="founder-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)]">
              Founder-led
            </RevealText>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xl leading-relaxed">
              7CODE was founded by {site.founder.name}, a senior full-stack engineer with {site.founder.yearsExperience}{" "}
              years of building production web applications in Laravel, PHP, React, Vue, Next.js and Shopify.
            </p>
            <p className="mt-5 leading-relaxed text-graphite">
              He spent four years as a senior software engineer at Algolix Technologies building SaaS products, and
              currently builds the AV Leads marketplace. He is Top Rated on Upwork with a 100% Job Success Score.
            </p>
            <p className="mt-5 leading-relaxed text-graphite">
              At 7CODE he leads the technical direction on every project and works with a distributed team of designers,
              developers and marketers across Pakistan. Clients get senior judgement on their project, not a hand-off to
              whoever is free.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-semibold">
              <Link href="/about" className="text-signal-ink underline-offset-4 hover:underline">
                About 7CODE
              </Link>
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal-ink underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={site.founder.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal-ink underline-offset-4 hover:underline"
              >
                Upwork profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section aria-labelledby="cta-h" className="wrap pb-6">
        <div className="grid gap-10 rounded-2xl bg-night px-6 py-16 text-white md:grid-cols-12 md:px-12 md:py-24">
          <RevealText id="cta-h" className="display text-[clamp(2.6rem,6.5vw,5.75rem)] md:col-span-8">
              Have a big idea? Let&apos;s build it properly.
            </RevealText>
          <div className="md:col-span-4 md:self-end">
            <p className="text-lg leading-relaxed opacity-85">
              Tell us about your goals. We&apos;ll reply with a practical plan, a timeline and a price.
            </p>
            <Magnetic>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-semibold text-night transition-colors hover:bg-chalk"
            >
              Start your project
            </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
