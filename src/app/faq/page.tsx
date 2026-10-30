import type { Metadata } from "next";
import Link from "next/link";
import { CtaBox, JsonLd, PageHeader } from "@/components/PageParts";
import { FaqList, faqJsonLd } from "@/components/FaqList";

export const metadata: Metadata = {
  title: "FAQ — working with 7CODE",
  description:
    "Answers about 7CODE: where we're based, working with UAE and UK clients remotely, pricing, timelines, ownership, support and what a full-service digital agency does.",
  alternates: { canonical: "/faq" },
};

const groups: { name: string; faqs: { q: string; a: string }[] }[] = [
  {
    name: "About 7CODE",
    faqs: [
      { q: "What does a full-service digital agency do?", a: "It handles everything a business needs online in one place: strategy, design, website or app development, eCommerce, search optimisation, social media and paid advertising. 7CODE covers all of these with one team, so the build and the marketing are planned together." },
      { q: "Where is 7CODE based?", a: "In Lahore, Pakistan. We work remotely with clients in the UAE, Oman, the United Kingdom and elsewhere." },
      { q: "Do you have an office in Dubai or Abu Dhabi?", a: "No. We don't have a physical office in the UAE. We serve UAE clients remotely, with a UAE WhatsApp number and working hours that overlap almost completely with Gulf time." },
      { q: "Who will actually work on my project?", a: "The founder, a senior full-stack engineer, leads every project and reviews the work. Specialists in design, development, SEO and marketing join depending on what your project needs." },
    ],
  },
  {
    name: "Remote projects",
    faqs: [
      { q: "How can a UAE company hire a remote software development team?", a: "Agree a clear scope and price up front, insist on a staging link you can check anytime, keep code and hosting on your own accounts, and pick a team whose hours overlap with yours. We work this way by default, and Pakistan time is just one hour ahead of the UAE." },
      { q: "How do we stay in touch?", a: "WhatsApp and email day to day, a shared task board, regular releases to a staging site, and calls when there's a decision to make." },
      { q: "Can we meet in person?", a: "Most of our work is fully remote. For clients in Lahore, in-person meetings can be arranged." },
    ],
  },
  {
    name: "Pricing and timelines",
    faqs: [
      { q: "How much does website development cost?", a: "It depends on the number of pages, features, integrations and how much content needs writing. We send a fixed quote after a short discovery call, broken down so you can see where the cost sits." },
      { q: "How long does custom software development take?", a: "A focused first version can often be built in weeks; larger platforms take months. We break work into stages so something usable ships early and you're never waiting on one big reveal." },
      { q: "Do you work with small budgets?", a: "Often, yes. We'll suggest the smallest version that does the job and a path to grow it, rather than squeezing a big project into a small budget." },
    ],
  },
  {
    name: "Ownership and support",
    faqs: [
      { q: "Who owns the website and code?", a: "You do. Code, designs, domains and hosting are set up on your accounts, and everything we build for you is yours once the project is paid." },
      { q: "Do you provide support after launch?", a: "Yes, through a monthly maintenance plan or as needed: updates, security, monitoring, backups and improvements." },
      { q: "Can you guarantee Google or ChatGPT rankings?", a: "No one honestly can. Search engines and AI assistants decide what they show. We do the work that gives you the best chance and report on the results clearly." },
    ],
  },
];

export default function FaqPage() {
  const all = groups.flatMap((g) => g.faqs);
  return (
    <>
      <JsonLd data={faqJsonLd(all)} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
        title="Questions, answered plainly."
        wide
        intro={
          <p className="text-xl leading-relaxed md:text-2xl">
            If your question isn&apos;t here, ask us on WhatsApp or through the{" "}
            <Link href="/contact" className="underline underline-offset-4">
              contact form
            </Link>
            .
          </p>
        }
      />
      <div className="wrap space-y-16 py-16 md:space-y-24 md:py-24">
        {groups.map((g) => (
          <section key={g.name} aria-labelledby={`g-${g.name}`} className="grid gap-8 md:grid-cols-12">
            <h2 id={`g-${g.name}`} className="display-soft text-3xl md:col-span-4">
              {g.name}
            </h2>
            <div className="md:col-span-8">
              <FaqList faqs={g.faqs} />
            </div>
          </section>
        ))}
      </div>
      <CtaBox />
    </>
  );
}
