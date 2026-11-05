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
  /** Who the client is, in plain facts. */
  about: string;
  /** Service pages this project used (slugs from services.ts). */
  services: string[];
  /** Location pages this project relates to (slugs from locations.ts). */
  locations?: string[];
  /** What other businesses can learn from it: our view, not a client claim. */
  takeaway: string;
  /** Only real, measured figures. */
  results?: { value: string; label: string }[];
  resultsNote?: string;
};

export const projects: Project[] = [
  {
    slug: "av-leads",
    name: "AV Leads",
    client: "AV Leads",
    industry: "Live events marketplace",
    region: "Remote engagement",
    url: "https://www.avleads.com",
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
    about: "AV Leads is a live-events marketplace. Event organisers post jobs and are matched with vetted audio-visual engineers and technicians, then book them through the platform.",
    services: ["web-development"],
    takeaway: "A marketplace lives or dies on how quickly it can match and book. Designing the data model, indexes and APIs before the screens is what keeps that fast as usage grows, so it is the first thing we plan on any platform build.",
  },
  {
    slug: "seven-lift",
    name: "Seven Lift",
    client: "Seven Lift General Transport",
    industry: "Crane & equipment hire",
    region: "Abu Dhabi, UAE",
    url: "https://www.sevenlift.net",
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
    about: "Seven Lift General Transport hires out mobile cranes, articulated forklifts, boom trucks (Hiab), low-bed and flatbed heavy transport and generators to contractors across Abu Dhabi.",
    services: ["web-development", "seo-aeo-geo"],
    locations: ["abu-dhabi"],
    takeaway: "In equipment hire, the page that wins the call is the one written for the exact district the job is in, with a phone and WhatsApp button within thumb reach. City-level pages alone leave most of the demand on the table.",
    results: [
      { value: "357", label: "Organic clicks from Google" },
      { value: "23K", label: "Search impressions" },
      { value: "19.4", label: "Average position" },
      { value: "1.6%", label: "Click-through rate" },
    ],
    resultsNote: "Google Search Console, web search, 9 August to 1 November 2026. Daily clicks rose from 0 to 4 a day in August to peaks of 11 to 16 a day by late October.",
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
    about: "Maxhaul Transport & General Contracting (Maxtgc) rents heavy equipment, including lorry loaders and boom trucks, and runs haulage for contractors across the UAE.",
    services: ["web-development", "seo-aeo-geo"],
    locations: ["dubai", "abu-dhabi"],
    takeaway: "Two sites competing for the same searches usually means neither ranks well. Choosing one domain, removing the duplicates and writing each location page by hand gives search engines one clear answer to show.",
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
    about: "PoolStore is a UK online retailer of pool and spa supplies, with a large catalogue of technical pool and spa products.",
    services: ["ecommerce", "web-development"],
    takeaway: "On a technical catalogue, customers compare before they buy. Fast product pages and a short, clear route to checkout matter more than a redesign, and they are the cheapest place to win back lost sales.",
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
    about: "Ferry Global Logistics and General Transport LLC is an Abu Dhabi company, established in 2023 and based in Mohamed Bin Zayed City. It is licensed for land, sea and air freight, warehousing, customs clearance, heavy equipment rental, crane work and towing, and serves all seven emirates.",
    services: ["web-development", "seo-aeo-geo"],
    locations: ["abu-dhabi", "dubai"],
    takeaway: "A company with many licensed services needs structure before content. Grouping services the way a buyer thinks, and being honest about one office serving the whole country, builds more trust than a long list of keywords.",
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
    about: "IGIVU builds XR (virtual, augmented and mixed reality) solutions for events, training and enterprise, used by more than 3,000 organisations including Stanford University.",
    services: ["web-development"],
    takeaway: "Joining a mature product means fitting its codebase and release process, not rewriting them. We work inside a client's existing team the same way, which is often the fastest route to shipping features.",
  },
  {
    slug: "masood-lifts",
    name: "Masood Lifts",
    client: "Abdul Masood Trading",
    industry: "Lifting & equipment",
    region: "Sohar, Oman",
    url: "https://www.masoodlifts.com",
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
    about: "Abdul Masood Trading (Masood Lifts) rents construction and lifting equipment in Oman, including scissor lifts, boom lifts (man lifts), bulldozers and motor graders, from its base in Sohar.",
    services: ["seo-aeo-geo"],
    takeaway: "Industrial buyers search by site, not by country. Content written for the port, the freezone and each industrial area reaches the people who actually commission lifting work, and gives AI assistants specific facts to cite.",
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
    about: "Logistivo is an AI-assisted logistics operating system, with data-heavy dashboards at its core.",
    services: ["web-development", "branding-ui-ux"],
    takeaway: "Dashboards are judged on real data, not on mock-ups. Building against real content and every screen size early catches the layout problems that a static design hides.",
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
    about: "MUHSEEQ Apparel Manufacturing is a custom apparel manufacturer and exporter in Faisalabad, Pakistan, selling to wholesale buyers overseas.",
    services: ["web-development", "ecommerce"],
    locations: ["lahore"],
    takeaway: "Not every B2B business needs online checkout. A fast catalogue that sends a buyer's selection straight to WhatsApp or email is cheaper to run and matches how wholesale prices are actually agreed.",
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
