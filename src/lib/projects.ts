// Portfolio data.
//
// Sources: the founder's CV (Oct 2026) and the founder's own client work.
// `role` states plainly what the founder/7CODE did, so contributions to larger
// products are never presented as owning the whole thing.
// Outcomes are left out until real, client-approved numbers exist.

export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  region: string;
  url?: string;
  kind: string;
  summary: string;
  role: string;
  scope: string[];
  stack: string[];
  challenge: string;
  approach: string[];
  focusAreas?: string[];
};

export const projects: Project[] = [
  {
    slug: "av-leads",
    name: "AV Leads",
    client: "AV Leads",
    industry: "Live events marketplace",
    region: "Remote engagement",
    url: "https://avleads.com",
    kind: "Web platform",
    summary:
      "A marketplace that connects live-event organisers with vetted AV engineers and technicians, built on Next.js and Laravel from API design to production.",
    role: "Full-stack development of the whole platform, working directly with the founders and design team (contract via Vocuit, September 2025 to present).",
    scope: ["Platform development", "API design", "Data modelling", "Performance"],
    stack: ["Next.js", "Laravel", "MySQL", "PostgreSQL"],
    challenge:
      "Event organisers need the right AV crew quickly, and the platform has to match and book them reliably while usage keeps growing. New features arrive straight from founder conversations, not a long backlog.",
    approach: [
      "Designed the booking and matching data model and built the REST APIs behind it, with validation and indexing to keep it fast as usage grew.",
      "Ship releases from a rough product spec to a finished, responsive interface, usually a few times a month.",
      "Rebuilt several of the highest-traffic pages with server-side and static rendering plus code-splitting, which brought load times down noticeably.",
    ],
  },
  {
    slug: "seven-lift",
    name: "Seven Lift",
    client: "Seven Lift General Transport",
    industry: "Crane & equipment hire",
    region: "Abu Dhabi, UAE",
    url: "https://sevenlift.net",
    kind: "Website & SEO",
    summary:
      "A lead-focused website and local search programme for a crane and heavy equipment hire company covering Abu Dhabi and its surrounding areas.",
    role: "Website build and ongoing SEO, AEO and GEO.",
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
    industry: "Heavy equipment rental & haulage",
    region: "UAE",
    url: "https://www.maxtgc.com",
    kind: "Website & SEO",
    summary:
      "The customer-facing Next.js site for a UAE heavy equipment rental and haulage company, with service pages, fleet listings and lead-generation forms.",
    role: "Design, build and launch of the new site, plus the move of all search visibility onto one domain.",
    scope: ["Website rebuild", "Fleet listings", "Lead forms", "Technical SEO"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    challenge:
      "The company's search presence was split between an old WordPress site and a new domain, with duplicated area pages competing against each other.",
    approach: [
      "Built the new site on Next.js with service pages, fleet listings and lead-generation forms, and moved all SEO focus to maxtgc.com.",
      "Stripped the duplicate area pages from the old WordPress site so the two domains stopped competing.",
      "Wrote every location page with its own title, description, H1, content, FAQs, internal links and schema, with no mass-generated city pages.",
    ],
  },
  {
    slug: "poolstore",
    name: "PoolStore",
    client: "PoolStore",
    industry: "eCommerce — pool & spa supplies",
    region: "United Kingdom",
    url: "https://poolstore.co.uk",
    kind: "eCommerce",
    summary:
      "Storefront development and optimisation for one of the UK's leading online retailers of pool and spa supplies.",
    role: "Built and optimised the storefront, focusing on page speed and conversion on key product pages.",
    scope: ["Storefront development", "Speed optimisation", "Conversion work"],
    stack: ["PHP", "CodeIgniter", "jQuery"],
    challenge:
      "A large catalogue of technical products, bought by customers who compare carefully. Slow or confusing product pages cost sales directly.",
    approach: [
      "Built and refined the storefront on the existing CodeIgniter platform.",
      "Optimised the key product pages for load speed and a clearer path to checkout.",
    ],
  },
  {
    slug: "ferry-global",
    name: "Ferry Global Logistics",
    client: "Ferry Global Logistics and General Transport LLC",
    industry: "Logistics & general transport",
    region: "Abu Dhabi, serving all 7 emirates",
    url: "https://ferryglobaluae.com",
    kind: "Website & SEO",
    summary:
      "A new website for an Abu Dhabi logistics company running land, sea and air freight, warehousing, customs clearance and equipment rental from MBZ City.",
    role: "Website design and build, UAE-wide SEO structure and deployment.",
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
    slug: "igivu",
    name: "IGIVU",
    client: "IGIVU",
    industry: "Enterprise XR (VR/AR/MR)",
    region: "International",
    url: "https://igivu.com",
    kind: "Web platform",
    summary:
      "An enterprise XR platform serving more than 3,000 organisations, including Stanford University.",
    role: "Contributed frontend and integration work supporting the platform's core delivery.",
    scope: ["Frontend development", "Integrations"],
    stack: [], // not stated in CV — add once confirmed
    challenge:
      "An enterprise product used by thousands of organisations needs frontend work that slots into an established codebase without disrupting delivery.",
    approach: [
      "Built frontend features and integration work for the platform's core delivery.",
      "Worked within the existing product team's release process.",
    ],
  },
  {
    slug: "masood-lifts",
    name: "Masood Lifts",
    client: "Abdul Masood Trading",
    industry: "Lifting & equipment",
    region: "Sohar, Oman",
    url: "https://masoodlifts.com",
    kind: "SEO, AEO & GEO",
    summary:
      "SEO, AEO and GEO work that targets the industrial areas around Sohar where lifting work is actually commissioned.",
    role: "Keyword and competitor research, local content and AI-search optimisation.",
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
    slug: "logistivo",
    name: "Logistivo",
    client: "Logistivo",
    industry: "Logistics platform",
    region: "International",
    url: "https://logistivo.com",
    kind: "Web platform",
    summary: "A logistics platform whose Figma designs were turned into a fully responsive, production-ready web interface.",
    role: "Converted the Figma designs into the production frontend.",
    scope: ["Figma to code", "Responsive frontend", "State & data fetching"],
    stack: ["React", "TanStack Query", "Zustand", "Tailwind CSS", "MySQL"],
    challenge:
      "Logistics dashboards are dense with data. The design had to survive real content and real screen sizes, not just look right in Figma.",
    approach: [
      "Built the interface in React with Tailwind CSS, matching the Figma designs across breakpoints.",
      "Used TanStack Query and Zustand for predictable data fetching and state.",
    ],
  },
  {
    slug: "muhseeq",
    name: "MUHSEEQ",
    client: "MUHSEEQ Apparel Manufacturing",
    industry: "Apparel manufacturing (B2B)",
    region: "Faisalabad, Pakistan",
    url: "https://www.muhseeqapparel.com",
    kind: "Website",
    summary:
      "A B2B product catalogue and quotation website for an apparel manufacturer selling to international buyers.",
    role: "Design, build and deployment.",
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

// Archive: earlier work with too little detail for a full case study.
// Listed without pages so the site has no thin content.
// TODO before launch: confirm each brand-name entry (e.g. Lahore Qalandars,
// Mövenpick) was a real client commission and that it can be shown publicly.
export type ArchiveItem = { name: string; kind: string; tools: string[]; note?: string };

export const archive: ArchiveItem[] = [
  { name: "Odyssey", kind: "Website", tools: ["Laravel", "MySQL", "jQuery", "Google Cloud"] },
  { name: "The Little Mate", kind: "eCommerce", tools: ["Shopify"], note: "eCommerce shopping platform" },
  { name: "TradeIn", kind: "Website", tools: ["Next.js", "Tailwind CSS"] },
  { name: "WordsCounter", kind: "Website", tools: ["Next.js", "Tailwind CSS"] },
  { name: "Lahore Qalandars", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Photoshop"], note: "PSL cricket team" },
  { name: "LORRYZ", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Illustrator"], note: "Digital freight platform" },
  { name: "PACHEM Global", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Photoshop"] },
  { name: "UkWild", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Illustrator"] },
  { name: "Harris Security Services", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Photoshop"], note: "United Kingdom" },
  { name: "Shura Bridge", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Illustrator"] },
  { name: "Bislar", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Photoshop"] },
  { name: "Tech Stuff", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Illustrator"] },
  { name: "Mövenpick", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Photoshop"] },
  { name: "Smart Workforce", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Illustrator"] },
  { name: "Eagna Technologies", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Photoshop"] },
  { name: "KingWood Services", kind: "UI/UX", tools: ["Figma", "Adobe XD", "Illustrator"] },
];
