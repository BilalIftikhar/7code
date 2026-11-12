import type { Metadata } from "next";
import Link from "next/link";
import { meta } from "@/lib/meta";
import { ids } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";
import { byKind } from "@/lib/landings";
import { CtaBox, JsonLd, PageHeader, SectionTitle } from "@/components/PageParts";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { LandingGrid } from "@/components/landing/LandingPage";
import { Card3D } from "@/components/motion/Card3D";

const PATH = "/social-media-management";

export const metadata: Metadata = meta({
  title: "Social Media Management Agency | 7CODE",
  description:
    "7CODE manages social media for businesses in the UAE, Oman, Pakistan and worldwide: strategy, content calendar, design, Reels, captions, scheduling, community management and monthly reporting.",
  path: PATH,
});

/** The twelve things covered by a full management retainer. */
const included = [
  { n: "01", name: "Strategy and planning", body: "Which platforms deserve your effort, what you'll be known for, and how a viewer becomes an enquiry. Reviewed every quarter, not written once and filed." },
  { n: "02", name: "Account management", body: "Your accounts run day to day inside your own Business Manager: settings, access, categories, links and the housekeeping nobody remembers." },
  { n: "03", name: "Post and carousel design", body: "On-brand designs that make one point clearly, built to be read on a phone in two seconds." },
  { n: "04", name: "Reels and short video", body: "Vertical video edited hook-first, with burned-in captions and licensed music, exported for every platform you use." },
  { n: "05", name: "Video editing", body: "Your footage, a shoot, or motion graphics when there's nothing to film. Long videos cut into clips that each stand alone." },
  { n: "06", name: "Content and copywriting", body: "Captions, hooks and calls to action written in your voice, from your offers and your customers' real questions." },
  { n: "07", name: "Content calendar", body: "A month planned in advance, with the reason for each post written next to it, approved by you in one batch." },
  { n: "08", name: "Scheduling and publishing", body: "Posts go out at the times your audience is actually active, without anyone on your team remembering to press publish." },
  { n: "09", name: "Brand consistency", body: "A template set, fonts, colours and layouts so every post looks like it belongs to the same company." },
  { n: "10", name: "Community management", body: "Comments and DMs answered in working hours using replies you've approved, with sales enquiries passed to you the same day." },
  { n: "11", name: "Growth", body: "Hashtags, keywords, formats and posting times adjusted monthly against what the numbers actually show." },
  { n: "12", name: "Reporting and analytics", body: "A short monthly report on reach, engagement and enquiries, and the two or three things changing next month." },
];

const month = [
  { name: "Plan", body: "We agree next month's calendar: what each post is for, which offer or season it supports, and the date it goes out." },
  { name: "Create", body: "Designs, video and captions produced in your brand style, sent for approval in one batch rather than piece by piece." },
  { name: "Publish and engage", body: "Scheduled at the right times, with comments and messages answered and enquiries passed straight to your team." },
  { name: "Report", body: "What went out, what earned attention, what brought enquiries, and what we're changing next month." },
];

const deliverables: [string, string, string][] = [
  ["Content calendar", "1 month ahead", "Approved before anything is produced"],
  ["Feed posts and carousels", "8 to 12", "Designed per platform, not exported once"],
  ["Short-form video", "4 to 8", "9:16, plus 4:5 and 1:1 cuts with their own covers"],
  ["Story sets", "8 to 16", "Polls, questions and links to start conversations"],
  ["Captions and hashtags", "Every post", "Written in your voice, one clear call to action"],
  ["Community management", "Working days", "Comments and DMs, enquiries passed same day"],
  ["Performance report", "1", "Reach, engagement, enquiries and next month's changes"],
  ["Plan call", "1", "Thirty minutes to agree what comes next"],
];

const faqs = [
  {
    q: "How much does social media management cost?",
    a: "It depends on how many platforms you want run, how much video is involved and whether we create content only or publish and reply too. We quote a fixed monthly fee after a free review of your current accounts, with no setup fee and no long lock-in.",
  },
  {
    q: "Which platforms do you manage?",
    a: "Instagram, Facebook, LinkedIn and TikTok. Most businesses do better on one or two of these than spread across all four, and the free review will tell you which ones are worth your budget.",
  },
  {
    q: "What do you need from us each month?",
    a: "Usually under an hour: a short call about what's coming up, approval of the month's content in one batch, and any new photos or clips from your business. Everything else is on us.",
  },
  {
    q: "Do we have to sign a long contract?",
    a: "No. We work month to month after an initial period long enough to be fair to both sides, normally three months, because social media results compound and judging one month alone tells you very little.",
  },
  {
    q: "Who owns the accounts and the content?",
    a: "You do. We work inside your own accounts with partner access rather than creating accounts we control, and you keep the designs, templates and source files if we stop working together.",
  },
  {
    q: "Can you work with our existing designer or marketing team?",
    a: "Yes. Some clients want us to create only, and their team publishes. Others want the whole thing run. We can also take over just video, or just strategy, and stay out of the rest.",
  },
  {
    q: "Do you run paid ads as well?",
    a: "Ads sit in our performance marketing service. The two work well together: organic content makes paid traffic convert better, because people recognise you before they click.",
  },
  {
    q: "What results should we expect?",
    a: "Expect the first movement in reach within four to six weeks, and a clearer picture of enquiries after about three months. We won't promise a follower number or a viral post, and we report on enquiries rather than vanity metrics.",
  },
  {
    q: "Do you work with businesses outside the UAE?",
    a: "Yes. We work with clients in the UAE, Oman, Pakistan, the UK and further afield, remotely. We'll say plainly where we have local knowledge and where we don't.",
  },
  {
    q: "Can you post in Arabic or Urdu?",
    a: "Yes, including right-to-left layout for Arabic. Wording is agreed with you or a native speaker on your side, so it reads naturally rather than like a translation.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social media management",
  serviceType: "Social media management",
  description:
    "Full-service social media management: strategy, content calendar, design, short-form video, copywriting, scheduling, community management and monthly reporting for Instagram, Facebook, LinkedIn and TikTok.",
  url: `${site.url}${PATH}`,
  provider: { "@type": "Organization", "@id": ids.org, name: site.name, url: site.url },
  areaServed: ["United Arab Emirates", "Oman", "Pakistan", "Saudi Arabia", "Qatar", "United Kingdom", "United States"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Social media management services",
    itemListElement: included.map((i) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: i.name, description: i.body },
    })),
  },
};

export default function SocialMediaManagementPage() {
  const platforms = byKind("social");

  return (
    <article>
      <JsonLd data={[serviceLd, faqJsonLd(faqs)]} />

      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Social media management" }]}
        title="Your social media, run properly."
        wide
        intro={
          <>
            <p className="text-xl leading-relaxed md:text-2xl">
              Most business pages don&apos;t fail because the posts are bad. They fail because posting is the job that
              slips when the week gets busy, and a page that went quiet six weeks ago reads like a business that went
              quiet too.
            </p>
            <p className="text-lg leading-relaxed text-graphite">
              7CODE plans, designs, writes, films, publishes and reports on your social media, on Instagram, Facebook,
              LinkedIn and TikTok. You approve a month at a time and get on with running the company.
            </p>
            <p className="text-lg leading-relaxed text-graphite">
              We don&apos;t buy followers, we don&apos;t promise viral posts, and we don&apos;t invent results. What we
              do promise is that your page will be consistent, on-brand, and asking people to get in touch.
            </p>
          </>
        }
        aside={
          <div className="flex flex-wrap content-start gap-3 md:justify-end">
            <Link
              href="/contact?service=social-media"
              className="block rounded-full bg-signal px-7 py-4 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
            >
              Get a free profile review
            </Link>
            <a
              href={whatsappLink("Hi 7CODE, I'd like a free review of our social media profile.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border border-night/20 bg-card px-7 py-4 font-semibold transition-colors hover:border-night"
            >
              WhatsApp us
            </a>
            <p className="w-full text-sm leading-relaxed text-graphite md:text-right">
              Three specific things to fix on your page, sent within two working days, whether or not you hire us.
            </p>
          </div>
        }
      />

      <section aria-label="In short" className="wrap pt-14 md:pt-20">
        <div className="rounded-2xl border border-rule bg-card p-6 md:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite">
            What does a social media management agency do?
          </h2>
          <p className="mt-4 max-w-[70ch] text-xl leading-relaxed md:text-2xl">
            A social media management agency takes responsibility for a company&apos;s social accounts end to end:
            setting the strategy, planning a monthly content calendar, designing posts and editing video, writing
            captions, publishing on schedule, replying to comments and messages, and reporting each month on reach,
            engagement and the enquiries the work produced.
          </p>
        </div>
      </section>

      <section aria-labelledby="included-h" className="wrap py-16 md:py-24">
        <SectionTitle
          id="included-h"
          note="One retainer covers all of it, so the strategy, the design and the replies all say the same thing."
        >
          What&apos;s included
        </SectionTitle>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((d) => (
            <li key={d.name}>
              <Card3D className="h-full rounded-xl bg-card p-6 md:p-8" max={6}>
                <span className="text-sm tabular-nums text-graphite">{d.n}</span>
                <h3 data-depth style={{ ["--depth" as string]: 24 }} className="mt-6 text-xl font-semibold">
                  {d.name}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite">{d.body}</p>
              </Card3D>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="month-h" className="bg-night py-20 text-white md:py-28">
        <div className="wrap">
          <h2 id="month-h" className="display text-[clamp(2.2rem,5vw,4rem)]">
            How a month works
          </h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {month.map((a, n) => (
              <li key={a.name} className="bg-night p-6 md:p-8">
                <span className="text-sm tabular-nums text-mist">{String(n + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-xl font-semibold">{a.name}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="platforms-h" className="wrap py-16 md:py-24">
        <SectionTitle
          id="platforms-h"
          note="Most businesses do better on one or two platforms done properly than on four done thinly. The free review will tell you which."
        >
          Platforms we run
        </SectionTitle>
        <div className="mt-10">
          <LandingGrid items={platforms} />
        </div>
      </section>

      <section aria-labelledby="deliverables-h" className="wrap pb-16 md:pb-24">
        <SectionTitle id="deliverables-h" note="Volumes are agreed per account. We would rather post less and post well.">
          What you get each month
        </SectionTitle>
        <div className="table-wrap mt-10 overflow-x-auto rounded-xl border border-rule bg-card">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                {["Deliverable", "Typical volume", "Notes"].map((h) => (
                  <th key={h} scope="col" className="border-b border-rule px-5 py-4 text-sm font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {deliverables.map(([a, b, c]) => (
                <tr key={a} className="align-top">
                  <th scope="row" className="border-b border-rule px-5 py-4 font-semibold">
                    {a}
                  </th>
                  <td className="border-b border-rule px-5 py-4 leading-relaxed text-graphite">{b}</td>
                  <td className="border-b border-rule px-5 py-4 leading-relaxed text-graphite">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="who-h" className="wrap pb-16 md:pb-24">
        <SectionTitle id="who-h">Who this is for</SectionTitle>
        <ul className="mt-10 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {[
            "Owners who keep meaning to post and never get to it",
            "Companies whose page looks worse than their actual business",
            "Restaurants, retail, clinics, salons and local services",
            "Real estate agents and property developers",
            "B2B companies and founders who need to be credible on LinkedIn",
            "eCommerce brands who need a steady flow of video",
            "Teams with a designer but no plan, or a plan but no time",
            "Businesses running ads on a page that looks abandoned",
          ].map((w) => (
            <li key={w} className="flex gap-3 text-lg leading-relaxed">
              <span className="mt-[0.8em] h-[3px] w-3 shrink-0 rounded-sm bg-cursor" aria-hidden="true" />
              {w}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="honest-h" className="wrap pb-16 md:pb-24">
        <SectionTitle id="honest-h">What we don&apos;t do</SectionTitle>
        <div className="mt-10 max-w-[68ch] space-y-5 text-lg leading-relaxed text-graphite">
          <p>
            We don&apos;t buy followers, use engagement pods, or run follow-unfollow and comment bots. Bought
            engagement inflates the numbers you report to yourself, and it tells the platform your content is being
            shown to people who don&apos;t want it, which pushes your reach down over time.
          </p>
          <p>
            We don&apos;t promise that a post will go viral, or quote a follower number you&apos;ll reach by a certain
            date. Reach depends on the platform, your market and your offer, and anyone guaranteeing it is guessing.
          </p>
          <p>
            We don&apos;t invent reviews, testimonials or case-study numbers, and we don&apos;t present AI-generated
            images as real products, premises or customers. If a claim appears on your page, it should be one you can
            stand behind.
          </p>
          <p>
            And we&apos;ll tell you when social media isn&apos;t your problem. If your website doesn&apos;t convert or
            nobody answers the phone, more posts won&apos;t fix it, and we would rather say so before you pay us.
          </p>
        </div>
      </section>

      <section aria-labelledby="start-h" className="wrap pb-16 md:pb-24">
        <SectionTitle id="start-h" note="No pitch deck, no pressure. You get something useful whether or not you hire us.">
          Start with a free profile review
        </SectionTitle>
        <ol className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { n: "01", name: "Send us your page", body: "Your profile link and which platforms matter to you. WhatsApp is fine." },
            { n: "02", name: "We review it", body: "Within two working days you get three specific things to change, with the reason for each." },
            { n: "03", name: "Decide after that", body: "If you want us to run it, we quote a fixed monthly fee. If not, you keep the review." },
          ].map((s) => (
            <li key={s.n} className="rounded-xl bg-card p-6 md:p-8">
              <span className="text-sm tabular-nums text-graphite">{s.n}</span>
              <h3 className="mt-6 text-xl font-semibold">{s.name}</h3>
              <p className="mt-3 leading-relaxed text-graphite">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="faq-h" className="wrap pb-20 md:pb-28">
        <div className="grid gap-10 border-t border-night pt-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="faq-h" className="display text-[clamp(2rem,4.4vw,3.5rem)]">
              Questions
            </h2>
            <p className="mt-5 max-w-[34ch] leading-relaxed text-graphite">
              Something else? Ask us on{" "}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-night underline underline-offset-4"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <section aria-labelledby="rel-h" className="wrap pb-20 md:pb-28">
        <h2 id="rel-h" className="text-sm text-graphite">
          Related
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[
            { href: "/services/social-media", name: "Social media service overview" },
            { href: "/services/performance-marketing", name: "Performance marketing" },
            { href: "/services/branding-ui-ux", name: "Branding & UI/UX" },
            { href: "/services/seo-aeo-geo", name: "SEO, AEO & GEO" },
            { href: "/work", name: "Case studies" },
          ].map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="block rounded-full border border-rule bg-card px-5 py-3 font-semibold transition-colors hover:border-night"
              >
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBox
        title="Let's start with your page."
        body="Send us your profile and we'll reply with three specific things to change, then a fixed monthly quote if you want us to run it."
        href="/contact?service=social-media"
        label="Get a free profile review"
      />
    </article>
  );
}
