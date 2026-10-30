import type { Metadata } from "next";
import Link from "next/link";
import { CtaBox, JsonLd, PageHeader, SectionTitle } from "@/components/PageParts";
import { archive, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About 7CODE — founder-led digital agency in Lahore",
  description:
    "7CODE is a founder-led digital agency in Lahore, Pakistan, led by senior full-stack engineer Muhammad Bilal Iftikhar and serving clients in the UAE, Oman, the UK and worldwide.",
  alternates: { canonical: "/about" },
};

const timeline = [
  { when: "2017 – 2021", what: "Bachelor's in Information Technology, University of Agriculture Faisalabad", detail: "System analysis, software architecture and database design." },
  { when: "2021 – 2025", what: "Senior Software Engineer, Algolix Technologies", detail: "Four years building Laravel back ends with Vue, React and Next.js front ends for client SaaS products, including query optimisation, OAuth and payment integrations." },
  { when: "2025 – now", what: "Full-Stack Developer on AV Leads (via Vocuit)", detail: "Building and maintaining a live-events marketplace on Next.js and Laravel, working directly with its founders." },
  { when: "Now", what: "Founder, 7CODE", detail: "Bringing development, design and growth marketing together for clients in the UAE, Oman, the UK and Pakistan." },
];

const principles = [
  { name: "Say what's true", body: "We only show real projects, real numbers and real reviews. Where we contributed to someone else's product, our case study says so." },
  { name: "Senior eyes on everything", body: "The founder reviews the architecture and code on every project. You never get handed to whoever happens to be free." },
  { name: "You own it all", body: "Code, designs, domains and hosting live on your accounts. If you ever move on, you take everything with you." },
  { name: "Build only what helps", body: "We suggest the smallest thing that solves the problem, and tell you when you don't need what you asked for." },
];

const skills = [
  { area: "Frontend", items: "Next.js, React, Vue.js, TypeScript, Tailwind CSS" },
  { area: "Backend", items: "PHP, Laravel, CodeIgniter, Node.js" },
  { area: "Data", items: "PostgreSQL, MySQL, MongoDB" },
  { area: "Commerce & APIs", items: "Shopify (Liquid & headless), REST APIs, OAuth, payment gateways" },
  { area: "Delivery", items: "Git, CI/CD, Vercel, Netlify, Supabase" },
];

export default function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder.name,
    jobTitle: "Founder & Senior Full-Stack Software Engineer",
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Agriculture Faisalabad" },
    knowsAbout: ["Laravel", "PHP", "Next.js", "React", "Vue.js", "TypeScript", "Shopify", "REST APIs", "PostgreSQL", "MySQL"],
    sameAs: [site.founder.linkedin, site.founder.upwork, site.founder.portfolio],
  };

  return (
    <>
      <JsonLd data={personLd} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        title="A founder-led studio for building and growing online."
        wide
        intro={
          <>
            <p className="text-xl leading-relaxed md:text-2xl">
              7CODE is a digital agency based in Lahore, Pakistan. We design and build websites, web applications, mobile
              apps and online stores, then help them grow through search, content and paid campaigns.
            </p>
            <p className="text-lg leading-relaxed text-graphite">
              We work remotely with clients across the UAE, Oman, the United Kingdom and beyond. Our projects so far include
              a live-events marketplace, a UK pool and spa retailer, crane and logistics companies in Abu Dhabi and an
              apparel manufacturer in Faisalabad.
            </p>
          </>
        }
      />

      {/* Numbers we can stand behind */}
      <section aria-label="At a glance" className="wrap py-16 md:py-24">
        <dl className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-card p-6 md:p-8">
            <dt className="text-graphite">Founder&apos;s full-stack experience</dt>
            <dd className="display mt-6 text-6xl">{site.founder.yearsExperience} years</dd>
          </div>
          <div className="rounded-xl bg-card p-6 md:p-8">
            <dt className="text-graphite">Projects shipped, including design</dt>
            <dd className="display mt-6 text-6xl">{projects.length + archive.length}</dd>
          </div>
          <div className="rounded-xl bg-card p-6 md:p-8">
            <dt className="text-graphite">Upwork standing</dt>
            <dd className="display mt-6 text-6xl">100%</dd>
            <dd className="mt-1 text-sm text-graphite">Job Success Score, Top Rated</dd>
          </div>
        </dl>
      </section>

      {/* Founder */}
      <section aria-labelledby="founder-h" className="wrap pb-20 md:pb-28">
        <SectionTitle id="founder-h">The founder</SectionTitle>
        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rounded-xl bg-night p-8 text-white md:p-10">
              <p className="display text-4xl md:text-5xl">{site.founder.name}</p>
              <p className="mt-4 text-white/70">Founder and senior full-stack software engineer</p>
              <div className="mt-10 flex flex-wrap gap-2">
                <a href={site.founder.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-night hover:bg-chalk">
                  LinkedIn
                </a>
                <a href={site.founder.upwork} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold hover:border-white">
                  Upwork
                </a>
                <a href={site.founder.portfolio} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold hover:border-white">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xl leading-relaxed">
              Bilal has spent {site.founder.yearsExperience} years building production web applications, mostly with
              Laravel on the back end and React, Vue or Next.js on the front. He is used to owning a project end to end:
              designing the database and APIs, then building the interface on top of them.
            </p>
            <p className="mt-5 leading-relaxed text-graphite">
              He prefers working straight from founders and designers rather than a fully specified ticket, which is how
              most of 7CODE&apos;s client work runs. He is Top Rated on Upwork with a 100% Job Success Score.
            </p>
            <dl className="mt-10 divide-y divide-rule border-y border-rule">
              {skills.map((s) => (
                <div key={s.area} className="grid gap-1 py-4 sm:grid-cols-3">
                  <dt className="font-semibold">{s.area}</dt>
                  <dd className="text-graphite sm:col-span-2">{s.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline-h" className="bg-night py-20 text-white md:py-28">
        <div className="wrap">
          <h2 id="timeline-h" className="display text-[clamp(2.2rem,5vw,4rem)]">How we got here</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-4">
            {timeline.map((t) => (
              <li key={t.what} className="bg-night p-6 md:p-8">
                <p className="text-sm tabular-nums text-mist">{t.when}</p>
                <h3 className="mt-8 text-lg font-semibold">{t.what}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{t.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How the team works */}
      <section aria-labelledby="team-h" className="wrap py-20 md:py-28">
        <SectionTitle
          id="team-h"
          note="We bring in the right specialists for each project instead of keeping a large fixed team you'd be paying for."
        >
          How the team works
        </SectionTitle>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Founder-led direction</h3>
            <p className="mt-3 leading-relaxed text-graphite">Architecture, code review and the final say on quality sit with the founder on every project.</p>
          </div>
          <div className="rounded-xl bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Distributed specialists</h3>
            <p className="mt-3 leading-relaxed text-graphite">Designers, developers, SEO and marketing specialists across Pakistan, matched to what your project needs.</p>
          </div>
          <div className="rounded-xl bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Remote by design</h3>
            <p className="mt-3 leading-relaxed text-graphite">Shared task boards, staging links and WhatsApp updates in your working hours, wherever you are.</p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-h" className="wrap pb-20 md:pb-28">
        <SectionTitle id="principles-h">What we stand by</SectionTitle>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p.name}>
              <h3 className="display-soft text-2xl">{p.name}</h3>
              <p className="mt-3 max-w-[52ch] leading-relaxed text-graphite">{p.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12">
          <Link href="/work" className="font-semibold underline underline-offset-4">
            See the work
          </Link>
        </p>
      </section>

      <CtaBox />
    </>
  );
}
