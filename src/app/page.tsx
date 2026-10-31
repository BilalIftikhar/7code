import Link from "next/link";
import { Suspense } from "react";
import { ClientStrip } from "@/components/home/ClientStrip";
import { GrowthStory } from "@/components/home/GrowthStory";
import { Testimonials } from "@/components/home/Testimonials";
import { CountUp } from "@/components/motion/CountUp";
import { Card3D } from "@/components/motion/Card3D";
import { ContactForm } from "@/app/contact/ContactForm";
import { services } from "@/lib/services";
import { archive, projects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WorkGallery3D } from "@/components/home/WorkGallery3D";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { RevealText } from "@/components/motion/RevealText";
import { getArticles } from "@/lib/insights";
import { ArticleCard } from "@/components/insights/ArticleCard";

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

      <div className="mt-16 md:mt-24">
        <ClientStrip />
      </div>

      {/* CREDIBILITY — verified facts only */}
      <section aria-label="At a glance" className="wrap py-16 md:py-20">
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Card3D className="rounded-xl bg-card p-6 md:p-8" max={10}>
            <dt className="text-graphite">Founder&apos;s full-stack experience</dt>
            <dd className="display mt-6 text-6xl">
              <CountUp to={6} suffix="+" /> years
            </dd>
          </Card3D>
          <Card3D className="rounded-xl bg-card p-6 md:p-8" max={10}>
            <dt className="text-graphite">Projects shipped, including design work</dt>
            <dd className="display mt-6 text-6xl">
              <CountUp to={projects.length + archive.length} />
            </dd>
            <dd className="mt-1 text-sm text-graphite">{projects.length} with full case studies</dd>
          </Card3D>
          <Card3D className="rounded-xl bg-card p-6 md:p-8" max={10}>
            <dt className="text-graphite">Countries those clients operate in</dt>
            <dd className="display mt-6 text-6xl">
              <CountUp to={4} />
            </dd>
            <dd className="mt-1 text-sm text-graphite">UAE, Oman, United Kingdom and Pakistan</dd>
          </Card3D>
        </dl>
      </section>

      {/* SERVICES — index list */}
      <section aria-labelledby="services-h" className="wrap pb-24 md:pb-32">
        <div className="grid gap-6 border-t border-night pt-10 md:grid-cols-12">
          <RevealText id="services-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
              What we do
            </RevealText>
          <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
            Web development, mobile apps, Shopify, WordPress, SEO and digital marketing — nine disciplines, one team, from
            first design to the leads that follow.
          </p>
        </div>
        <Suspense>
          <ServicesIndex services={services} />
        </Suspense>
      </section>

      <Suspense>
        <GrowthStory />
      </Suspense>

      <Suspense>
        <Marquee />
      </Suspense>

      {/* SELECTED WORK — pinned horizontal 3D gallery */}
      <Suspense>
        <WorkGallery3D projects={projects} total={projects.length + archive.length} />
      </Suspense>

      <Suspense>
        <Testimonials />
      </Suspense>

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
        <Suspense>
          <ProcessTimeline />
        </Suspense>
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

      {/* INSIGHTS */}
      <section aria-labelledby="insights-h" className="wrap pb-24 md:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-night pt-10">
          <RevealText id="insights-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)]">
            Latest insights
          </RevealText>
          <Link href="/insights" className="font-semibold underline-offset-4 hover:underline">
            All insights
          </Link>
        </div>
        <ul className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {getArticles()
            .slice(0, 3)
            .map((a, i) => (
              <li key={a.slug}>
                <ArticleCard a={a} index={i} />
              </li>
            ))}
        </ul>
      </section>

      {/* QUOTE */}
      <section aria-labelledby="quote-h" className="wrap pb-6">
        <div className="grid gap-12 rounded-2xl bg-night px-6 py-14 text-white md:px-12 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RevealText id="quote-h" className="display text-[clamp(2.6rem,5.5vw,5rem)]">
              Have a big idea? Get a free quote.
            </RevealText>
            <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-white/75">
              Tell us about your goals. We&apos;ll reply with a practical plan, a timeline and a fixed price.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full border border-white/25 px-6 py-3 font-semibold transition-colors hover:border-white"
            >
              Prefer WhatsApp? Message us
            </a>
          </div>
          <div className="rounded-xl bg-paper p-5 text-night md:p-8 lg:col-span-7">
            <Suspense fallback={<div className="h-[560px]" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
