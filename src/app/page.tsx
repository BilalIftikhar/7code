import Link from "next/link";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WorkStack } from "@/components/home/WorkStack";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { RevealText } from "@/components/motion/RevealText";
import { Magnetic } from "@/components/motion/Magnetic";

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
      <Hero />

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
              Selected work
            </RevealText>
            <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
              Websites and search programmes for companies that sell heavy, specialised services, where one good lead is
              worth a lot.
            </p>
          </div>

          <div className="mt-14">
            <WorkStack projects={projects} />
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
      <section aria-labelledby="ind-h" className="bg-night py-24 text-white md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <RevealText id="ind-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)]">
              Industries
            </RevealText>
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
                    className="block rounded-full bg-signal px-5 py-3 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
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
            <RevealText id="founder-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)]">
              Founder-led
            </RevealText>
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
      <section aria-labelledby="cta-h" className="bg-signal text-on-signal">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
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
              className="mt-8 inline-block rounded-full bg-night px-7 py-4 font-semibold text-white transition-colors hover:bg-night-2"
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
