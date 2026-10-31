import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import Link from "next/link";
import { CtaBox, JsonLd, PageHeader, SectionTitle } from "@/components/PageParts";
import { archive, projects } from "@/lib/projects";
import { ids } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = meta({
  title: "About us — a founder-led digital agency in Lahore",
  description:
    "7CODE is a founder-led digital agency in Lahore, led by senior full-stack engineer Muhammad Bilal Iftikhar, serving clients in the UAE, Oman, the UK and beyond.",
  path: "/about",
});

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
  { area: "Frontend", items: "Next.js (SSR, SSG, ISR), React, Vue.js, TypeScript, Tailwind CSS, responsive Figma-to-code builds" },
  { area: "Backend", items: "PHP, Laravel, CodeIgniter, Node.js (Next.js API routes and server runtime)" },
  { area: "Data", items: "PostgreSQL, MySQL, MongoDB, Sequelize, Mongoose; data modelling, indexing and query tuning" },
  { area: "APIs & integrations", items: "REST API design, OAuth login, payment gateways and webhooks, Shopify (Liquid and headless storefronts)" },
  { area: "Cloud & delivery", items: "Git and GitHub, CI/CD, Vercel, Netlify, Supabase Storage" },
  { area: "Ways of working", items: "Cross-functional delivery with product, design and QA in distributed, remote teams" },
];

// From the founder's CV. Only facts he has documented.
const roles = [
  {
    role: "Full-Stack Developer",
    org: "Vocuit, contracted to AV Leads",
    when: "Sep 2025 – present",
    where: "Remote",
    points: [
      "Builds and maintains the AV Leads platform on a Next.js front end and Laravel back end, working directly with the founders and design team on new features.",
      "Designed the booking and matching data model in MySQL and PostgreSQL and built the REST APIs behind it, with validation and indexing to keep it fast as usage grew.",
      "Takes releases from a rough product spec to a shipped, responsive interface, usually a few times a month, straight from conversations with the founders.",
      "Rebuilt several of the highest-traffic pages with SSR, SSG and code-splitting, which brought load times down noticeably.",
    ],
  },
  {
    role: "Senior Software Engineer",
    org: "Algolix Technologies",
    when: "Jun 2021 – Aug 2025",
    where: "Pakistan",
    points: [
      "Four years building Laravel back ends with matching Vue, React and Next.js front ends for a range of client SaaS products.",
      "Worked through the slowest MySQL queries across the company's services and reworked indexing and query structure, cutting response times on the heaviest pages.",
      "Integrated OAuth login and payment gateway APIs into several client applications, including the auth and webhook edge cases that real payment flows bring.",
      "Worked closely with product and UX/UI to turn requirements into interfaces, and was usually the one who caught inconsistencies before they shipped.",
    ],
  },
];

const strengths = [
  { name: "End-to-end ownership", body: "Database, APIs and interface designed together, so the pieces fit and nothing is lost between teams." },
  { name: "Speed you can measure", body: "Query and index tuning on the back end, SSR, SSG and code-splitting on the front." },
  { name: "Payments and logins that hold up", body: "OAuth and payment gateways wired in with the webhook and failure cases handled, not just the happy path." },
  { name: "Founder-friendly", body: "Comfortable turning a conversation or a rough spec into a shipped release without a long backlog." },
];

const workedOn = [
  { slug: "av-leads", name: "AV Leads", line: "Marketplace connecting live-event organisers with vetted AV engineers. Built and maintains the Next.js and Laravel platform end to end." },
  { slug: "poolstore", name: "PoolStore", line: "UK online retailer of pool and spa supplies. Built and optimised the storefront for page speed and conversion on key product pages." },
  { slug: "igivu", name: "IGIVU", line: "Enterprise XR (VR, AR, MR) platform serving 3,000+ organisations, including Stanford University. Front-end and integration work." },
  { slug: "logistivo", name: "Logistivo", line: "Logistics platform. Turned the Figma designs into a fully responsive, production-ready web interface." },
  { slug: "maxtgc", name: "Maxtgc Transport", line: "UAE heavy equipment rental and haulage. Built the customer-facing Next.js site with service pages, fleet listings and lead forms." },
];

export default function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ids.founder,
    name: site.founder.name,
    jobTitle: "Founder & Senior Full-Stack Software Engineer",
    worksFor: { "@id": ids.org },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Agriculture Faisalabad" },
    knowsAbout: ["Laravel", "PHP", "CodeIgniter", "Node.js", "Next.js", "React", "Vue.js", "TypeScript", "Tailwind CSS", "Shopify", "REST APIs", "OAuth", "Payment gateway integration", "PostgreSQL", "MySQL", "MongoDB", "Database optimisation"],
    hasOccupation: { "@type": "Occupation", name: "Senior Full-Stack Software Engineer", skills: skills.map((s) => s.items).join("; ") },
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
            <div className="rounded-xl bg-night p-8 text-white md:sticky md:top-28 md:p-10">
              <p className="display text-4xl md:text-5xl">{site.founder.name}</p>
              <p className="mt-4 text-white/70">Founder and senior full-stack software engineer</p>
              <dl className="mt-8 space-y-4 border-t border-white/15 pt-6 text-sm">
                <div className="flex justify-between gap-6">
                  <dt className="text-white/60">Experience</dt>
                  <dd className="text-right font-semibold">{site.founder.yearsExperience} years in production web apps</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-white/60">Based in</dt>
                  <dd className="text-right font-semibold">Lahore, GMT+5, working remotely worldwide</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-white/60">Upwork</dt>
                  <dd className="text-right font-semibold">Top Rated, 100% Job Success</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-white/60">Education</dt>
                  <dd className="text-right font-semibold">BS Information Technology, University of Agriculture Faisalabad</dd>
                </div>
              </dl>
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
            <p className="mt-5 leading-relaxed text-graphite">
              Before founding 7CODE he spent four years as a senior engineer at Algolix Technologies building client SaaS
              products, and since 2025 he has been the full-stack developer on AV Leads, a live-events marketplace, where
              he designed the booking and matching system and the APIs behind it. Along the way he has worked on a UK
              eCommerce store, an enterprise XR platform used by 3,000+ organisations, and logistics and heavy-equipment
              sites in the UAE.
            </p>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.12em] text-graphite">What he&apos;s known for</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {strengths.map((x) => (
                <li key={x.name} className="rounded-xl bg-card p-5">
                  <p className="flex items-center gap-2.5 font-semibold">
                    <span aria-hidden="true" className="h-[3px] w-3 shrink-0 rounded-sm bg-cursor" />
                    {x.name}
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-graphite">{x.body}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.12em] text-graphite">Skills and tools</h3>
            <dl className="mt-4 divide-y divide-rule border-y border-rule">
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

      {/* Experience */}
      <section aria-labelledby="experience-h" className="wrap pb-20 md:pb-28">
        <SectionTitle id="experience-h" note="His two most recent roles, shipping production software for founders and product teams.">
          Experience
        </SectionTitle>
        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {roles.map((r) => (
            <article key={r.org} className="rounded-xl bg-card p-6 md:p-8">
              <p className="text-sm tabular-nums text-graphite">
                {r.when} · {r.where}
              </p>
              <h3 className="display-soft mt-5 text-2xl md:text-3xl">{r.role}</h3>
              <p className="mt-1 font-semibold text-graphite">{r.org}</p>
              <ul className="mt-6 space-y-3">
                {r.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.75em] h-[3px] w-3 shrink-0 rounded-sm bg-cursor" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Projects worked on */}
      <section aria-labelledby="projects-h" className="wrap pb-20 md:pb-28">
        <SectionTitle id="projects-h">Selected projects he has worked on</SectionTitle>
        <ul className="mt-12 border-t border-rule">
          {workedOn.map((w) => (
            <li key={w.slug} className="border-b border-rule">
              <Link href={`/work/${w.slug}`} className="group grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-8">
                <span className="display-soft text-2xl transition-transform group-hover:translate-x-1 md:col-span-4 md:text-3xl">{w.name}</span>
                <span className="leading-relaxed text-graphite md:col-span-7">{w.line}</span>
                <span aria-hidden="true" className="hidden text-right text-xl transition-transform group-hover:translate-x-1 md:col-span-1 md:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
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
