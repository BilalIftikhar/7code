// Case studies — projects built by the 7CODE founder.
// Outcomes are left out on purpose until real numbers (rankings, leads,
// traffic) are pulled from Search Console / analytics and approved.

export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  region: string;
  url?: string;
  summary: string;
  scope: string[];
  stack: string[];
  challenge: string;
  approach: string[];
  focusAreas?: string[];
};

export const projects: Project[] = [
  {
    slug: "seven-lift",
    name: "Seven Lift",
    client: "Seven Lift General Transport",
    industry: "Crane & equipment hire",
    region: "Abu Dhabi, UAE",
    url: "https://sevenlift.net",
    summary:
      "A lead-focused website and local search programme for a crane and heavy equipment hire company covering Abu Dhabi and its surrounding areas.",
    scope: ["Next.js website", "Local SEO", "AEO & GEO", "Blog content"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Schema.org"],
    challenge:
      "Equipment hire in Abu Dhabi is won on the phone, usually within minutes of a search. Seven Lift needed to show up for the specific districts where jobs happen, not just for the city name.",
    approach: [
      "Rebuilt the site in Next.js with fast, server-rendered pages and a clear call-and-WhatsApp path on every screen.",
      "Planned location coverage across Abu Dhabi, including Al Reem, Yas and Saadiyat Island, with each page written for its own area.",
      "Added answer-first FAQs and structured data so AI assistants and search engines can describe the services accurately.",
      "Set up a blog for equipment and site-planning questions that customers actually ask.",
    ],
    focusAreas: ["Abu Dhabi", "Al Reem Island", "Yas Island", "Saadiyat Island"],
  },
  {
    slug: "maxtgc",
    name: "Maxtgc",
    client: "Maxhaul Transport & General Contracting",
    industry: "Heavy equipment rental & transport",
    region: "UAE",
    url: "https://www.maxtgc.com",
    summary:
      "A Next.js rebuild that replaced an ageing WordPress site and consolidated all search visibility onto one new domain.",
    scope: ["Website rebuild", "Domain consolidation", "Location pages", "Technical SEO"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    challenge:
      "The company's search presence was split between an old WordPress site and a new domain, with duplicated area pages competing against each other.",
    approach: [
      "Built the new site on Next.js and moved all SEO focus to maxtgc.com.",
      "Stripped the duplicate area pages from the old WordPress site so the two domains stopped competing.",
      "Wrote every location page with its own title, description, H1, content, FAQs, internal links and schema, with no mass-generated city pages.",
    ],
  },
  {
    slug: "ferry-global",
    name: "Ferry Global Logistics",
    client: "Ferry Global Logistics and General Transport LLC",
    industry: "Logistics & general transport",
    region: "Abu Dhabi, serving all 7 emirates",
    url: "https://ferryglobaluae.com",
    summary:
      "A new website for an Abu Dhabi logistics company that runs land, sea and air freight, warehousing, customs clearance and equipment rental from a single office in MBZ City.",
    scope: ["Website design & build", "UAE-wide SEO", "Service architecture", "Deployment"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    challenge:
      "Ferry Global's licence covers a wide range of services, from freight and customs to cranes and towing. The site needed to present all of it clearly without looking like a directory, and to rank across the UAE from one office.",
    approach: [
      "Organised the licensed activities into a clear service structure that a procurement manager can scan in seconds.",
      "Planned emirate-level search coverage from the single MBZ City base, without claiming offices that don't exist.",
      "Launched on its own domain, ferryglobaluae.com, deployed on Vercel.",
    ],
    focusAreas: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  },
  {
    slug: "masood-lifts",
    name: "Masood Lifts",
    client: "Abdul Masood Trading",
    industry: "Lifting & equipment",
    region: "Sohar, Oman",
    url: "https://masoodlifts.com",
    summary:
      "SEO, AEO and GEO work that targets the industrial areas around Sohar where lifting work is actually commissioned.",
    scope: ["Keyword & competitor research", "Local SEO", "AEO & GEO", "Area blog pages"],
    stack: ["Semrush", "Schema.org", "Google Search Console"],
    challenge:
      "Industrial buyers in North Batinah search by site — the port, the freezone, the industrial area — rather than by city. Generic 'Oman' pages were not reaching them.",
    approach: [
      "Chose keywords by studying the competitors that already rank in the region.",
      "Built area-specific content for Sohar Port, Sohar Freezone, Sohar Industrial Area, Liwa and Saham.",
      "Structured answers and entity information so AI search tools can cite the business correctly.",
    ],
    focusAreas: ["Sohar", "Sohar Port", "Sohar Freezone", "Sohar Industrial Area", "Liwa", "Saham"],
  },
  {
    slug: "muhseeq",
    name: "MUHSEEQ",
    client: "MUHSEEQ Apparel Manufacturing",
    industry: "Apparel manufacturing (B2B)",
    region: "Faisalabad, Pakistan",
    summary:
      "A B2B product catalogue and quotation website for an apparel manufacturer selling to international buyers.",
    scope: ["Product catalogue", "Quotation flow", "WhatsApp & email inquiries", "Deployment"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    challenge:
      "Wholesale buyers want to see the range, then ask for a price on specific items. The manufacturer needed that flow without the cost of running a backend or online checkout.",
    approach: [
      "Built a fast, browsable catalogue in Next.js and TypeScript.",
      "Designed a quotation flow that sends buyers' selections straight to WhatsApp, email or phone.",
      "Kept the site serverless and static, so it is cheap to host and quick to load for overseas buyers.",
    ],
  },
];
