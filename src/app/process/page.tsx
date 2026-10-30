import type { Metadata } from "next";
import { CtaBox, JsonLd, PageHeader, SectionTitle } from "@/components/PageParts";
import { FaqList, faqJsonLd } from "@/components/FaqList";

export const metadata: Metadata = {
  title: "How we work — 7CODE's project process",
  description:
    "How a 7CODE project runs, from discovery and strategy to design, development, testing, launch and ongoing growth, plus engagement models and communication.",
  alternates: { canonical: "/process" },
};

const stages = [
  { name: "Discover", body: "A call and a short questionnaire about your business, customers and goals.", get: "A one-page brief we both agree on" },
  { name: "Strategize", body: "Sitemap, keyword research and a plan for how the site or product will bring in customers.", get: "Sitemap, page list and fixed quote" },
  { name: "Design", body: "Wireframes, then full designs for desktop and mobile with your real content.", get: "Figma designs to review and comment on" },
  { name: "Develop", body: "We build on a staging link you can open at any time, with regular releases.", get: "A working staging site from the early weeks" },
  { name: "Test", body: "Every page, form and button on phones, tablets and desktops, plus speed, accessibility and SEO checks.", get: "A test checklist with everything ticked" },
  { name: "Launch", body: "Domain, hosting, redirects, analytics and Search Console set up, then go live without downtime.", get: "A live site on accounts you own" },
  { name: "Optimize", body: "We watch real visitor data in the first weeks and fix what slows people down.", get: "A short post-launch report" },
  { name: "Grow", body: "Ongoing SEO, content, ads and new features, monthly or project by project.", get: "A monthly plan and report" },
];

const models = [
  { name: "Fixed-price project", body: "A defined scope, timeline and price agreed before work starts. Best for websites, stores and first product versions.", fit: "Websites, stores, MVPs" },
  { name: "Monthly retainer", body: "A set amount of work each month for SEO, content, ads, maintenance and improvements.", fit: "SEO, marketing, maintenance" },
  { name: "Dedicated developer", body: "A senior developer working as part of your team on your priorities, billed monthly.", fit: "Product teams, ongoing builds" },
];

const faqs = [
  { q: "How do we communicate during a project?", a: "Mainly on WhatsApp and email, with a shared task board and a staging link you can check anytime. We schedule calls when a decision needs discussion." },
  { q: "What time zone do you work in?", a: "Pakistan Standard Time (UTC+5). That's one hour ahead of the UAE and Oman, so working days overlap almost completely. For UK and US clients we keep a few overlapping hours each day." },
  { q: "How do payments work?", a: "Fixed-price projects are usually split into milestones, with a deposit to start. Retainers and dedicated developers are billed monthly." },
  { q: "What if I want changes after the design is approved?", a: "Small changes are fine. Larger changes that affect scope are quoted separately before we do them, so there are no surprises on the invoice." },
  { q: "Will you sign an NDA?", a: "Yes. We're happy to sign a non-disclosure agreement before you share details of your project." },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "How we work" }]}
        title="How a project runs, step by step."
        wide
        intro={
          <p className="text-xl leading-relaxed md:text-2xl">
            Eight stages from first call to ongoing growth. At each one you know what we&apos;re doing and what you&apos;ll
            receive.
          </p>
        }
      />

      <section aria-label="Stages" className="wrap py-16 md:py-24">
        <ol className="divide-y divide-rule border-y border-night">
          {stages.map((s, i) => (
            <li key={s.name} className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-6">
              <span className="text-sm tabular-nums text-graphite md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display-soft text-3xl md:col-span-3">{s.name}</h2>
              <p className="max-w-[52ch] text-lg leading-relaxed md:col-span-5">{s.body}</p>
              <p className="text-sm text-graphite md:col-span-3">
                <span className="block font-semibold text-night">You get</span>
                {s.get}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="models-h" className="wrap pb-20 md:pb-28">
        <SectionTitle id="models-h" note="Pick the arrangement that fits the work. You can switch as the project changes.">
          Ways to work with us
        </SectionTitle>
        <ul className="mt-12 grid gap-3 md:grid-cols-3">
          {models.map((m) => (
            <li key={m.name} className="flex flex-col justify-between gap-8 rounded-xl bg-card p-6 md:p-8">
              <div>
                <h3 className="text-2xl font-semibold">{m.name}</h3>
                <p className="mt-3 leading-relaxed text-graphite">{m.body}</p>
              </div>
              <p className="text-sm">
                <span className="text-graphite">Good for: </span>
                <span className="font-semibold">{m.fit}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="pfaq-h" className="wrap pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 id="pfaq-h" className="display text-[clamp(2.2rem,5vw,4rem)] md:col-span-4">
            Working together
          </h2>
          <div className="md:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaBox />
    </>
  );
}
