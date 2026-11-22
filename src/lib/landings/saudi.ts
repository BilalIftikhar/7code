import type { Faq, Item, Landing } from "./types";
import { SVC } from "./cityServices";

/**
 * Saudi Arabia (KSA) coverage, built on the same model as the UAE area set: one hub
 * page per real city with its own true profile, service pages for the main markets,
 * and district pages for Riyadh and Jeddah. Every page says plainly that 7CODE has no
 * office in the Kingdom and serves it remotely from Lahore.
 *
 * Thin combinations are deprioritised the same way as the UAE set: district-service
 * pages carry noindex unless their district is in KEEP_DISTRICT_SERVICE, so Google's
 * crawl budget concentrates on the city hubs and the strong city-service pages.
 */

const SOFT = "software-development", WEB = "web-development", SAAS = "saas-development", AI = "ai-automation", SOCIAL = "social-media-management", CRM = "crm-development";

const REMOTE =
  "7CODE has no office in Saudi Arabia. Our team works from Lahore and serves the Kingdom remotely, with a WhatsApp line and calls in your working hours. Pakistan is two hours ahead of Saudi Arabia, so our working days overlap closely.";

type Character = "financial" | "commercial" | "industrial" | "tech" | "tourism" | "trade" | "city";

type CityDef = {
  slug: string;
  name: string;
  region: string;
  character: Character;
  profile: string[];
  sectors: string[];
  services: (keyof typeof SVC)[];
  nearby: string[];
  /** Generate /{city}/{service} pages. */
  tier1?: boolean;
};

type DistrictDef = {
  slug: string;
  city: string; // parent city slug, used in the path
  cityName: string;
  name: string;
  region: string;
  character: Character;
  profile: string[];
  sectors: string[];
  services: (keyof typeof SVC)[];
  nearby: string[];
};

const serviceNoun: Record<string, string> = {
  [SOFT]: "Software Development", [WEB]: "Web Design & Development", [SAAS]: "SaaS Development",
  [AI]: "AI Automation", [SOCIAL]: "Social Media Management", [CRM]: "CRM Development",
};
const serviceLabel: Record<string, string> = {
  [SOFT]: "Custom software", [WEB]: "Websites & web apps", [SAAS]: "SaaS development",
  [AI]: "AI & automation", [SOCIAL]: "Social media management", [CRM]: "CRM development",
};

const fit = (base: string, suffix: string) => (base.length + suffix.length <= 70 ? base + suffix : base);

/** Concrete systems we would build, by city character. */
function buildExamples(ch: Character): Item[] {
  const byType: Record<Character, Item[]> = {
    financial: [
      { name: "Client & investor portal", body: "A secure login where clients see documents, reporting and history, built to a standard that stands up to scrutiny." },
      { name: "Reporting & compliance tooling", body: "Dashboards and reports that pull from your systems, with the audit trail regulated firms need." },
      { name: "Workflow automation", body: "Approvals, onboarding and document checks automated, so the team spends time on decisions, not data entry." },
      { name: "ZATCA e-invoicing data", body: "Invoicing built so the data is structured for ZATCA (Fatoora) Phase 2 integration, ready for your accredited provider." },
    ],
    commercial: [
      { name: "CRM with WhatsApp", body: "Leads from your website, WhatsApp and walk-ins in one pipeline, so follow-ups survive a salesperson leaving." },
      { name: "Client portal", body: "A login where clients track documents, requests and history instead of a thread per enquiry." },
      { name: "Quotation & proposal system", body: "Branded quotes in SAR with approvals and version history, sent in minutes, structured for ZATCA invoicing." },
      { name: "Reporting dashboard", body: "Your numbers in one morning view, so decisions don't wait on a spreadsheet." },
    ],
    industrial: [
      { name: "Job & dispatch tracking", body: "Every job, its status, who it's assigned to and when it ships, off the whiteboard and into one screen." },
      { name: "Stock across sites", body: "Live inventory by plant or warehouse, with movements and reorder alerts, so you stop selling what isn't there." },
      { name: "Certificate & document control", body: "Compliance certificates, permits and supplier documents tracked with expiry alerts, not lost in email." },
      { name: "ZATCA invoice automation", body: "Invoices generated with correct 15% VAT and structured for ZATCA Fatoora integration." },
    ],
    tech: [
      { name: "SaaS MVP", body: "A focused first release — accounts, billing and the one job customers pay for — fast enough to learn from." },
      { name: "API & integrations", body: "Your product connected to payment, messaging and the tools your customers already run." },
      { name: "Admin & analytics", body: "A back office to manage accounts and data, with the metrics that drive decisions." },
      { name: "Subscriptions & billing", body: "Card subscriptions in SAR or USD alongside manual invoicing for enterprise buyers." },
    ],
    tourism: [
      { name: "Booking-ready website", body: "A fast, bilingual, mobile-first site where pilgrims and visitors book or enquire in a couple of taps." },
      { name: "Reels & social content", body: "Short video and an active feed that reach a young, phone-first Saudi audience." },
      { name: "Offers & loyalty", body: "Campaign pages and simple loyalty or offer flows that bring guests back." },
      { name: "Channel & reservation tools", body: "Reservation handling and the integrations hospitality businesses rely on, set up properly." },
    ],
    trade: [
      { name: "Catalogue or online store", body: "A product catalogue or shop with the Saudi payment (mada, Apple Pay) and delivery options customers expect." },
      { name: "Inventory & orders", body: "Stock and orders in one system, so online and in-store trade don't drift apart." },
      { name: "Supplier & order portal", body: "A login where buyers and suppliers handle orders and documents, off long WhatsApp threads." },
      { name: "ZATCA invoice automation", body: "Invoices generated with 15% VAT and structured for ZATCA Fatoora compliance." },
    ],
    city: [
      { name: "Bilingual website", body: "A fast English-and-Arabic site that reads naturally in both, with proper right-to-left layout." },
      { name: "Local SEO", body: "Content and setup tuned to how people here search, so nearby customers find you." },
      { name: "Simple operations system", body: "A lightweight system for jobs, stock or bookings that fits how a smaller team works." },
      { name: "Social media", body: "A consistent presence that keeps the business visible to the community it serves." },
    ],
  };
  return byType[ch];
}

// ------------------------------------------------------------------ Cities
const CITIES: CityDef[] = [
  { slug: "riyadh", name: "Riyadh", region: "Riyadh Province", character: "financial", tier1: true,
    profile: [
      "Riyadh is Saudi Arabia's capital and largest economy, the seat of government, the headquarters of most national companies, and the centre of the Vision 2030 push — from the King Abdullah Financial District (KAFD) to the regional-HQ programme pulling multinationals into the city.",
      "It is where the Kingdom's most serious software, data and platform work sits, so businesses here look for a build partner who can deliver client portals, custom systems and SaaS products to a real standard, in Arabic and English.",
    ],
    sectors: ["Banks and financial firms", "Government and semi-government", "Real estate and contracting", "Consultancies and professional services", "Retail and e-commerce groups"],
    services: [SOFT, SAAS, WEB, AI, CRM, SOCIAL], nearby: ["jeddah", "dammam", "al-khobar"] },
  { slug: "jeddah", name: "Jeddah", region: "Makkah Province", character: "commercial", tier1: true,
    profile: [
      "Jeddah is Saudi Arabia's commercial gateway on the Red Sea, home to the Kingdom's busiest port, a deep merchant and trading tradition, and the logistics, import and family-business economy that grew around them.",
      "It is a deal-driven city where a lot of trade still runs on relationships and WhatsApp, which is exactly where a sharp website, a CRM and an online store earn their keep for the wholesalers, retailers and service firms based here.",
    ],
    sectors: ["Trading and import-export", "Wholesale and retail", "Logistics and shipping", "Family businesses and groups", "Hospitality and services"],
    services: [WEB, SOFT, CRM, SOCIAL, SAAS, AI], nearby: ["makkah", "madinah", "riyadh"] },
  { slug: "dammam", name: "Dammam", region: "Eastern Province", character: "industrial", tier1: true,
    profile: [
      "Dammam is the capital of the Eastern Province and the heart of Saudi Arabia's oil and industrial economy, with the port, heavy industry, contracting and oilfield-services companies that supply the energy sector.",
      "This is operations-and-compliance territory, where the biggest wins are job and dispatch systems, inventory and certificate tracking, and the automation that reads a mountain of supplier and project paperwork.",
    ],
    sectors: ["Oil and gas services", "Heavy industry and contracting", "Logistics and port services", "Manufacturing", "Trading and suppliers"],
    services: [SOFT, AI, WEB, CRM, SOCIAL], nearby: ["al-khobar", "dhahran", "jubail"] },
  { slug: "al-khobar", name: "Al Khobar", region: "Eastern Province", character: "commercial", tier1: true,
    profile: [
      "Al Khobar is the Eastern Province's commercial and retail hub, a modern waterfront city popular with corporates, consultancies, retail and the professional community that serves Aramco and the wider energy sector in nearby Dhahran.",
      "The business base is corporate and consumer-facing, well matched to credible bilingual websites, CRM and booking systems, with strong social media for the retail, dining and clinic businesses along the corniche.",
    ],
    sectors: ["Corporate and professional services", "Retail and dining", "Clinics and wellness", "Real estate", "Consultancies"],
    services: [WEB, SOFT, SOCIAL, CRM, AI], nearby: ["dammam", "dhahran", "jubail"] },
  { slug: "dhahran", name: "Dhahran", region: "Eastern Province", character: "tech",
    profile: [
      "Dhahran is the home of Saudi Aramco and the Kingdom's longest-established corporate and technology community, with the research, energy-tech and knowledge businesses that orbit the world's largest oil company and KFUPM.",
      "The base here is technical and corporate, a natural fit for SaaS products, data and integration work, AI automation and the serious web applications these organisations rely on.",
    ],
    sectors: ["Energy and technology", "Research and education", "Corporate services", "Engineering firms", "Startups"],
    services: [SAAS, SOFT, AI, WEB], nearby: ["al-khobar", "dammam", "jubail"] },
  { slug: "jubail", name: "Jubail", region: "Eastern Province", character: "industrial",
    profile: [
      "Jubail is one of the world's largest industrial cities, built around petrochemicals, refining and heavy manufacturing, with the contracting, services and supply companies that keep the complex running.",
      "Scale and compliance define the work: operations and inventory systems, certificate and document control, and automation across high volumes of shipments, permits and supplier paperwork.",
    ],
    sectors: ["Petrochemicals and refining", "Heavy manufacturing", "Industrial contracting", "Logistics and supply", "Engineering services"],
    services: [SOFT, AI, WEB, CRM], nearby: ["dammam", "al-khobar", "dhahran"] },
  { slug: "yanbu", name: "Yanbu", region: "Madinah Province", character: "industrial",
    profile: [
      "Yanbu is the Red Sea industrial port city, a petrochemical and refining hub on the Kingdom's west coast with a major commercial port and a growing residential and services community.",
      "Industrial and logistics needs lead here: shipment and operations systems, document and certificate tracking, and websites and systems for the contracting and services firms around the complex.",
    ],
    sectors: ["Petrochemicals and refining", "Port and logistics", "Industrial contracting", "Manufacturing", "Services"],
    services: [SOFT, WEB, AI], nearby: ["madinah", "jeddah", "jubail"] },
  { slug: "makkah", name: "Makkah", region: "Makkah Province", character: "tourism",
    profile: [
      "Makkah is the holiest city in Islam and the destination for millions of Hajj and Umrah pilgrims each year, with an economy built around hospitality, transport, retail and the services that support the pilgrimage.",
      "Pilgrim-facing businesses live on bookings and reach, so booking-ready bilingual websites, Umrah and hospitality platforms, and strong Arabic social content are the tools that fill rooms and sell packages.",
    ],
    sectors: ["Hospitality and hotels", "Hajj and Umrah operators", "Retail and F&B", "Transport services", "Real estate"],
    services: [WEB, SOCIAL, SOFT, CRM], nearby: ["jeddah", "madinah", "taif"] },
  { slug: "madinah", name: "Madinah", region: "Madinah Province", character: "tourism",
    profile: [
      "Madinah, the Prophet's city and the second holiest in Islam, draws year-round pilgrims and a growing tourism trade, with a hospitality, retail and services economy centred on the visitors to the Prophet's Mosque.",
      "The audience is visitors and pilgrims, so bilingual booking sites, hospitality and tour platforms, and Arabic-first social content are what convert here.",
    ],
    sectors: ["Hotels and hospitality", "Umrah and tour operators", "Retail and F&B", "Transport", "Dates and local trade"],
    services: [WEB, SOCIAL, SOFT, CRM], nearby: ["makkah", "yanbu", "jeddah"] },
  { slug: "tabuk", name: "Tabuk", region: "Tabuk Province", character: "city",
    profile: [
      "Tabuk, in the Kingdom's north-west, is the nearest established city to NEOM and a regional centre for agriculture, logistics and government, now drawing new investment on the back of the giga-project next door.",
      "Businesses here are practical and locally focused, well served by bilingual websites, local SEO and straightforward systems for the trading, agriculture and services firms serving the region.",
    ],
    sectors: ["Agriculture and agritech", "Logistics and transport", "Government services", "Trading and retail", "Construction"],
    services: [WEB, SOFT, SOCIAL], nearby: ["neom", "madinah", "hail"] },
  { slug: "neom", name: "NEOM", region: "Tabuk Province", character: "tech",
    profile: [
      "NEOM is Saudi Arabia's flagship giga-project on the Red Sea coast, a planned region built around technology, clean energy, advanced manufacturing and tourism, and the contractors, startups and service companies mobilising around it.",
      "As a greenfield, technology-first region it is the ideal place to build systems and products properly from the start — SaaS platforms, data and IoT tooling, AI and the web presence new ventures need.",
    ],
    sectors: ["Technology and innovation", "Clean energy", "Construction and contracting", "Tourism and hospitality", "Startups and ventures"],
    services: [SAAS, SOFT, AI, WEB], nearby: ["tabuk", "madinah", "yanbu"] },
  { slug: "abha", name: "Abha", region: "Asir Province", character: "tourism",
    profile: [
      "Abha, high in the Asir mountains, is Saudi Arabia's cool-climate tourism capital, a fast-growing destination for domestic travel with hospitality, events and the retail and service businesses that follow the visitors.",
      "Tourism and a young local market make social content, booking-ready websites and local SEO the most effective tools for the hotels, cafés, tour and event businesses here.",
    ],
    sectors: ["Tourism and hospitality", "Events and experiences", "Cafés and retail", "Real estate", "Local services"],
    services: [SOCIAL, WEB, SOFT], nearby: ["khamis-mushait", "jeddah", "taif"] },
  { slug: "buraidah", name: "Buraidah", region: "Qassim Province", character: "trade",
    profile: [
      "Buraidah is the capital of Qassim, the Kingdom's agricultural heartland, known for dates, farming and a strong local trading and family-business economy in the centre of the country.",
      "Trade and agriculture lead, so catalogue and order sites, inventory and the practical systems that farming, dates and trading businesses need give the clearest return, alongside bilingual websites and local SEO.",
    ],
    sectors: ["Agriculture and dates", "Trading and wholesale", "Food processing", "Retail", "Logistics"],
    services: [WEB, SOFT, SOCIAL], nearby: ["hail", "riyadh", "taif"] },
  { slug: "taif", name: "Taif", region: "Makkah Province", character: "tourism",
    profile: [
      "Taif, in the mountains above Makkah, is a summer-resort and agricultural city known for its roses, fruit and cooler climate, with a tourism, farming and local-trade economy and growing seasonal visitor numbers.",
      "Seasonal tourism and local trade shape the work: booking-ready websites, social content that showcases the area, and practical systems for the agriculture and retail businesses based here.",
    ],
    sectors: ["Tourism and resorts", "Agriculture and roses", "Retail and local trade", "Hospitality", "Services"],
    services: [SOCIAL, WEB, SOFT], nearby: ["makkah", "jeddah", "abha"] },
  { slug: "hail", name: "Hail", region: "Hail Province", character: "city",
    profile: [
      "Hail, in the north of the Kingdom, is an agricultural and logistics centre with a strong farming economy, a growing tourism trade around its heritage and landscapes, and the local trading businesses that serve the region.",
      "Practical, locally focused businesses here are best served by bilingual websites, local SEO and straightforward systems for agriculture, trading and services firms.",
    ],
    sectors: ["Agriculture", "Logistics and transport", "Trading and retail", "Tourism and heritage", "Services"],
    services: [WEB, SOFT, SOCIAL], nearby: ["buraidah", "tabuk", "riyadh"] },
  { slug: "khamis-mushait", name: "Khamis Mushait", region: "Asir Province", character: "city",
    profile: [
      "Khamis Mushait, the largest city in the Asir region and twin to Abha, is a commercial and services centre with a large resident population, local markets, and the retail, clinics and trade that serve the south-west.",
      "Local trade dominates, so affordable bilingual websites, local SEO and consistent social media reaching nearby residents bring the clearest enquiries.",
    ],
    sectors: ["Retail and markets", "Clinics and services", "Trading", "Restaurants", "Local businesses"],
    services: [WEB, SOCIAL, SOFT], nearby: ["abha", "jeddah", "taif"] },
];

// ------------------------------------------------------------------ Districts (Riyadh & Jeddah)
const DISTRICTS: DistrictDef[] = [
  { slug: "olaya", city: "riyadh", cityName: "Riyadh", name: "Olaya", region: "Riyadh Province", character: "financial",
    profile: ["Olaya is Riyadh's central business district, a dense spine of towers along Olaya Street and King Fahd Road packed with banks, corporate head offices, consultancies and the retail and hospitality that serve them.", "It is a fast, corporate environment where credible systems matter: client portals, CRMs, reporting tools and the serious web applications a head-office economy runs on."],
    sectors: ["Banks and finance", "Corporate head offices", "Consultancies", "Retail and hospitality", "Professional services"], services: [SOFT, SAAS, WEB, CRM], nearby: ["kafd", "al-malaz", "diplomatic-quarter"] },
  { slug: "kafd", city: "riyadh", cityName: "Riyadh", name: "King Abdullah Financial District", region: "Riyadh Province", character: "financial",
    profile: ["The King Abdullah Financial District (KAFD) is Riyadh's purpose-built financial centre, home to banks, asset managers, fintech firms and the regulators and professional-services companies around them.", "The bar on security, data and documentation is high here, so the work tends to be rigorous: secure client portals, reporting and compliance tooling, and systems built to be audited."],
    sectors: ["Banks and asset managers", "Fintech firms", "Regulators and advisory", "Law and audit", "Professional services"], services: [SOFT, SAAS, WEB, AI], nearby: ["olaya", "diplomatic-quarter", "al-malaz"] },
  { slug: "al-malaz", city: "riyadh", cityName: "Riyadh", name: "Al Malaz", region: "Riyadh Province", character: "commercial",
    profile: ["Al Malaz is one of Riyadh's established central districts, mixing government offices, long-standing trading companies, clinics and institutes with a dense resident community.", "The base of trading and services firms suits custom systems, bilingual websites and CRM, with practical operations tools for the established businesses here."],
    sectors: ["Trading companies", "Government-adjacent services", "Clinics and institutes", "Retail", "SMEs"], services: [WEB, SOFT, CRM], nearby: ["olaya", "kafd", "diplomatic-quarter"] },
  { slug: "diplomatic-quarter", city: "riyadh", cityName: "Riyadh", name: "Diplomatic Quarter", region: "Riyadh Province", character: "commercial",
    profile: ["The Diplomatic Quarter (DQ) is Riyadh's district of embassies, international organisations and the professional and services businesses that work with them, a settled, high-trust environment.", "The companies here are credibility-led and often international, well matched to polished bilingual websites, CRM and the careful systems a diplomatic and professional community expects."],
    sectors: ["Embassies and organisations", "Professional services", "Consultancies", "Hospitality", "NGOs"], services: [WEB, SOFT, CRM, SOCIAL], nearby: ["olaya", "kafd", "al-malaz"] },
  { slug: "al-balad", city: "jeddah", cityName: "Jeddah", name: "Al Balad", region: "Makkah Province", character: "trade",
    profile: ["Al Balad is historic Jeddah, the old town and its souks, where generations of textile, gold, spice and wholesale traders still work on tight margins and long relationships, now alongside a UNESCO-listed heritage revival.", "Many of these businesses still run on paper and WhatsApp, so the practical wins are catalogue sites, inventory and invoicing systems, and the automation that cuts the daily re-typing."],
    sectors: ["Wholesale and trading", "Gold and textiles", "Spices and foodstuff", "Heritage tourism", "Retail"], services: [SOFT, WEB, CRM], nearby: ["al-hamra-jeddah", "al-rawdah-jeddah"] },
  { slug: "al-hamra-jeddah", city: "jeddah", cityName: "Jeddah", name: "Al Hamra", region: "Makkah Province", character: "commercial",
    profile: ["Al Hamra is a prime Jeddah waterfront district along the Corniche, home to corporate offices, banks, consulates and the upmarket retail and dining that line the sea front.", "The business base is corporate and consumer-facing, well served by credible bilingual websites, CRM and booking systems, with brand-grade social for the retail and hospitality side."],
    sectors: ["Corporate offices", "Banking and finance", "Consulates", "Retail and dining", "Professional services"], services: [WEB, SOFT, CRM, SOCIAL], nearby: ["al-balad", "al-rawdah-jeddah"] },
  { slug: "al-rawdah-jeddah", city: "jeddah", cityName: "Jeddah", name: "Al Rawdah", region: "Makkah Province", character: "commercial",
    profile: ["Al Rawdah is a busy central Jeddah district mixing commercial towers, clinics, showrooms and a large resident base, one of the city's main modern business and shopping areas.", "A blend of services and consumer businesses suits bilingual websites, CRM and booking tools, with local SEO and social for the clinics, showrooms and retail here."],
    sectors: ["Clinics and medical", "Showrooms and retail", "Professional services", "Restaurants", "Real estate"], services: [WEB, SOCIAL, SOFT, CRM], nearby: ["al-hamra-jeddah", "al-balad"] },
];

const cityBySlug = new Map(CITIES.map((c) => [c.slug, c]));
const cityName = (slug: string) => cityBySlug.get(slug)?.name ?? slug;

// Districts strong enough to keep their /{city}/{district}/{service} pages indexed.
const KEEP_DISTRICT_SERVICE = new Set(["olaya", "kafd"]);

// ------------------------------------------------------------------ Generators
function cityCards(services: (keyof typeof SVC)[]): Item[] {
  const cards: Item[] = [];
  for (const svc of services) {
    const s = SVC[svc];
    for (const c of s.cards.slice(0, 2)) cards.push(c);
    if (cards.length >= 6) break;
  }
  return cards.slice(0, 6);
}

function cityFaqs(c: CityDef): Faq[] {
  const base: Faq[] = [
    { q: `Do you have an office in ${c.name}?`, a: `No. Our team is in Lahore and we serve ${c.name} and the rest of ${c.region} remotely, with a WhatsApp line and calls in your working hours. Pakistan is two hours ahead of Saudi Arabia, so our days overlap closely.` },
    { q: `How do you work with a business in ${c.name} without being there?`, a: `A discovery call in your hours, a fixed written quote, progress on a staging link you can watch, and launch on your own domains, hosting and accounts. Most of our Gulf clients never need an in-person meeting; where one genuinely matters, we say so early.` },
    { q: `Can you work in Arabic for a ${c.name} audience?`, a: `Yes. Arabic websites are built with proper right-to-left layouts, and Arabic content is written or reviewed by a native speaker rather than machine-translated.` },
  ];
  if (c.services.includes(SOFT) || c.services.includes(CRM)) base.push({ q: `Can the systems handle Saudi VAT and ZATCA e-invoicing?`, a: `Yes. We build invoicing so the data is structured for ZATCA's Fatoora e-invoicing and 15% VAT, ready to pass to an accredited provider. Your accountant confirms the treatment.` });
  return base.slice(0, 5);
}

function cityHub(c: CityDef): Landing {
  const nearbyNames = c.nearby.map(cityName);
  return {
    path: `/locations/${c.slug}`,
    kind: "city",
    name: c.name,
    line: `Websites, software, AI automation and social media for ${c.name} businesses, delivered remotely.`,
    crumbs: [{ name: "Locations", href: "/locations" }, { name: "Saudi Arabia", href: "/locations/saudi-arabia" }],
    seoTitle: fit(`Web & Software Development Company in ${c.name}`, ""),
    metaDescription:
      `Web design, custom software, AI automation and social media for ${c.name}, Saudi Arabia businesses: ${c.sectors.slice(0, 3).join(", ").toLowerCase()} and more. Fixed quotes, delivered remotely by 7CODE.`.slice(0, 200),
    h1: `Software, web and digital services for ${c.name} businesses`,
    serviceType: "Software development and digital services",
    areaServed: [c.name, c.region, "Saudi Arabia"],
    presence: REMOTE,
    contact: { topic: `a project in ${c.name}` },
    intro: [
      `${c.profile[0]} 7CODE builds and runs the digital side for businesses here — websites, custom software, AI automation and social media — remotely from Lahore.`,
      c.profile[1] ?? `We work with a fixed, itemised quote and leave the code, hosting and accounts in your own name.`,
    ],
    answer: {
      q: `Can 7CODE help a business in ${c.name}?`,
      a: `Yes. 7CODE serves ${c.name} and the rest of ${c.region} remotely from Lahore, building websites, custom software, SaaS products and AI automation and managing social media, with a WhatsApp line, fixed quotes in SAR or USD, and work delivered on your own accounts.`,
    },
    sections: [
      { type: "cards", h: `What we build for ${c.name} businesses`, note: `The mix most ${c.name} businesses ask us for first.`, items: cityCards(c.services) },
      { type: "text", h: `${c.name} at a glance`, paras: c.profile },
      { type: "cards", h: `Systems we'd build for a ${c.name} business`, note: "Concrete examples, shaped by how businesses here actually operate.", items: buildExamples(c.character) },
      { type: "list", h: `Who we help in ${c.name}`, items: c.sectors },
      {
        type: "text",
        h: `Serving ${c.name} and nearby`,
        paras: [
          `Because we work remotely, there is no difference to us whether you are in ${c.name} or a city nearby such as ${nearbyNames.slice(0, 2).join(" or ")}. The work, the quote and the support are the same.`,
          REMOTE,
        ],
      },
      {
        type: "steps",
        h: "How a project runs",
        items: [
          { name: "Discovery call", body: `A video call in Saudi working hours to understand the business, goals and timeline.` },
          { name: "Fixed quote", body: "A written scope and an itemised, fixed price, in SAR or USD." },
          { name: "Build and review", body: "Visible progress on a staging link, with regular check-ins." },
          { name: "Launch and support", body: "Go-live on your own accounts, with documentation and ongoing support." },
        ],
      },
    ],
    tools: [...new Set(c.services.flatMap((s) => SVC[s].tools))].slice(0, 8),
    faqs: cityFaqs(c),
    related: [
      "/locations/saudi-arabia",
      ...(c.tier1 ? [`/locations/${c.slug}/${c.services[0]}`] : []),
      ...c.nearby.filter((n) => cityBySlug.has(n)).slice(0, 3).map((n) => `/locations/${n}`),
    ].filter((p, i, arr) => arr.indexOf(p) === i),
  };
}

function cityServiceLanding(c: CityDef, svc: keyof typeof SVC): Landing {
  const s = SVC[svc];
  return {
    path: `/locations/${c.slug}/${svc}`,
    kind: "city-service",
    name: `${s.name} in ${c.name}`,
    line: `${s.name} for ${c.name} businesses, built and run remotely.`,
    crumbs: [{ name: "Locations", href: "/locations" }, { name: "Saudi Arabia", href: "/locations/saudi-arabia" }, { name: c.name, href: `/locations/${c.slug}` }],
    seoTitle: fit(`${s.name} in ${c.name}`, ", Saudi Arabia"),
    metaDescription:
      `${s.name} for businesses in ${c.name}, Saudi Arabia: built for ${c.sectors.slice(0, 2).join(" and ").toLowerCase()} and more, with fixed quotes in SAR and code you own. Delivered remotely by 7CODE.`.slice(0, 200),
    h1: `${s.name} for ${c.name} businesses`,
    serviceType: s.serviceType,
    areaServed: [c.name, c.region, "Saudi Arabia"],
    presence: REMOTE,
    contact: { service: s.contact, topic: `${s.name.toLowerCase()} in ${c.name}` },
    intro: [
      `${c.profile[0]}`,
      `For businesses like these, 7CODE delivers ${s.name.toLowerCase()} remotely from Lahore: a fixed, itemised quote in SAR or USD, work you can watch on a staging link, and the result on your own accounts. There is no 7CODE office in ${c.name}; our day overlaps yours closely.`,
    ],
    answer: {
      q: `How much does ${s.name.toLowerCase()} cost in ${c.name}?`,
      a: `It depends on scope — features, integrations and scale. A remote team usually costs considerably less than a Riyadh- or Jeddah-based agency for the same work. 7CODE quotes a fixed, itemised price after a discovery call, so you can phase it to fit your budget.`,
    },
    sections: [
      { type: "cards", h: "What's included", items: s.cards },
      {
        type: "text",
        h: `Built for ${c.name}`,
        paras: [
          c.profile[1] ?? c.profile[0],
          `That shapes the ${s.name.toLowerCase()} we build here: fit to how ${c.name} businesses actually operate, bilingual where it helps, and set up so you own and control everything from day one.`,
        ],
      },
      { type: "list", h: `Who we work with in ${c.name}`, items: c.sectors },
      {
        type: "steps",
        h: "How a project runs",
        items: [
          { name: "Discovery call", body: `A call in Saudi working hours to understand your goals.` },
          { name: "Fixed quote", body: "A written scope and an itemised, fixed price in SAR or USD." },
          { name: "Build and review", body: "Regular progress on a staging link or content preview." },
          { name: "Launch and support", body: "Go-live on your accounts with ongoing support." },
        ],
      },
    ],
    tools: s.tools,
    faqs: [
      { q: `Do you have an office in ${c.name}?`, a: `No. Our team is in Lahore and we serve ${c.name} remotely, with a WhatsApp line and calls in your working hours.` },
      { q: `Can you quote in SAR?`, a: `Yes, in SAR or USD. Payment terms are agreed in the contract.` },
      ...s.contact === "social-media"
        ? [{ q: `Can you work in Arabic?`, a: `Yes, with Arabic content written or reviewed by a native speaker.` }]
        : [{ q: `Who owns the code and accounts?`, a: `You do, from day one. Everything is built on your own repository, hosting and domains.` }],
      { q: `How do we start?`, a: `Send us a message on WhatsApp or through the contact form with a little about your ${c.name} business, and we'll set up a discovery call and a fixed quote.` },
    ],
    related: [`/locations/${c.slug}`, "/locations/saudi-arabia", ...s.links.filter((l) => l.startsWith("/services") || l.startsWith("/technologies") || l.startsWith("/compare") || l.startsWith("/industries") || l.startsWith("/social-media-management") || l.startsWith("/ai-solutions"))].filter((p, i, arr) => arr.indexOf(p) === i).slice(0, 5),
  };
}

function districtHub(d: DistrictDef): Landing {
  const nearbyNames = d.nearby.map((n) => DISTRICTS.find((x) => x.slug === n)?.name ?? n);
  return {
    path: `/locations/${d.city}/${d.slug}`,
    kind: "area",
    name: d.name,
    line: `Websites, software, AI automation and social media for ${d.name} businesses, delivered remotely.`,
    crumbs: [{ name: "Locations", href: "/locations" }, { name: d.cityName, href: `/locations/${d.city}` }],
    seoTitle: fit(`${serviceNoun[d.services[0]]} Company in ${d.name}`, ""),
    metaDescription:
      `${serviceNoun[d.services[0]]} for businesses in ${d.name}, ${d.cityName}: ${d.sectors.slice(0, 3).join(", ").toLowerCase()} and more, with fixed quotes and work you own. Delivered remotely by 7CODE.`.slice(0, 200),
    h1: `${serviceNoun[d.services[0]]} for ${d.name} businesses`,
    serviceType: "Software development and digital services",
    areaServed: [d.name, d.cityName, "Saudi Arabia"],
    presence: REMOTE,
    contact: { topic: `a project in ${d.name}, ${d.cityName}` },
    intro: [
      `${d.profile[0]} 7CODE builds and runs the digital side for businesses here — websites, custom software, AI automation and social media — remotely from Lahore.`,
      d.profile[1] ?? `We work with a fixed, itemised quote and leave the code, hosting and accounts in your own name.`,
    ],
    answer: {
      q: `Can 7CODE help a business in ${d.name}?`,
      a: `Yes. 7CODE serves ${d.name} in ${d.cityName} remotely from Lahore, building websites, custom software, SaaS products and AI automation and managing social media, with fixed quotes in SAR or USD and work delivered on your own accounts.`,
    },
    sections: [
      { type: "cards", h: `What we build for ${d.name} businesses`, note: `The mix most ${d.name} businesses ask us for first.`, items: cityCards(d.services) },
      { type: "text", h: `${d.name} at a glance`, paras: d.profile },
      { type: "cards", h: `Systems we'd build for a ${d.name} business`, note: "Concrete examples, shaped by how businesses here actually operate.", items: buildExamples(d.character) },
      { type: "list", h: `Who we help in ${d.name}`, items: d.sectors },
      {
        type: "text",
        h: `Serving ${d.name} and nearby`,
        paras: [
          `Because we work remotely, there is no difference to us whether you are in ${d.name} or a district nearby such as ${nearbyNames.slice(0, 2).join(" or ")}. The work, the quote and the support are the same.`,
          REMOTE,
        ],
      },
      {
        type: "steps",
        h: "How a project runs",
        items: [
          { name: "Discovery call", body: `A video call in Saudi working hours to understand the business, goals and timeline.` },
          { name: "Fixed quote", body: "A written scope and an itemised, fixed price, in SAR or USD." },
          { name: "Build and review", body: "Visible progress on a staging link, with regular check-ins." },
          { name: "Launch and support", body: "Go-live on your own accounts, with documentation and ongoing support." },
        ],
      },
    ],
    tools: [...new Set(d.services.flatMap((s) => SVC[s].tools))].slice(0, 8),
    faqs: [
      { q: `Do you have an office in ${d.name}?`, a: `No. Our team is in Lahore and we serve ${d.name} and the rest of ${d.cityName} remotely, with a WhatsApp line and calls in your working hours. Pakistan is two hours ahead of Saudi Arabia, so our days overlap closely.` },
      { q: `How do you work with a ${d.name} business without being there?`, a: `A discovery call in your hours, a fixed written quote, progress on a staging link, and launch on your own domains, hosting and accounts.` },
      { q: `Can you work in Arabic?`, a: `Yes. Arabic websites use proper right-to-left layouts, and Arabic content is written or reviewed by a native speaker.` },
      { q: `Can the systems handle Saudi VAT and ZATCA e-invoicing?`, a: `Yes. Invoicing is built so the data is structured for ZATCA Fatoora e-invoicing and 15% VAT, ready for your accredited provider.` },
    ],
    related: [
      `/locations/${d.city}`,
      ...(KEEP_DISTRICT_SERVICE.has(d.slug) ? [`/locations/${d.city}/${d.slug}/${d.services[0]}`] : []),
      ...d.nearby.filter((n) => DISTRICTS.some((x) => x.slug === n)).slice(0, 2).map((n) => `/locations/${d.city}/${n}`),
    ].filter((p, i, arr) => arr.indexOf(p) === i),
  };
}

function districtServiceLanding(d: DistrictDef, svc: keyof typeof SVC): Landing {
  const s = SVC[svc];
  return {
    path: `/locations/${d.city}/${d.slug}/${svc}`,
    kind: "area-service",
    noindex: !KEEP_DISTRICT_SERVICE.has(d.slug),
    name: `${s.name} in ${d.name}`,
    line: `${s.name} for ${d.name} businesses, built and run remotely.`,
    crumbs: [{ name: "Locations", href: "/locations" }, { name: d.cityName, href: `/locations/${d.city}` }, { name: d.name, href: `/locations/${d.city}/${d.slug}` }],
    seoTitle: fit(`${s.name} in ${d.name}`, `, ${d.cityName}`),
    metaDescription:
      `${s.name} for businesses in ${d.name}, ${d.cityName}: built for ${d.sectors.slice(0, 2).join(" and ").toLowerCase()} and more, with fixed quotes in SAR and code you own. Delivered remotely by 7CODE.`.slice(0, 200),
    h1: `${s.name} for ${d.name} businesses`,
    serviceType: s.serviceType,
    areaServed: [d.name, d.cityName, "Saudi Arabia"],
    presence: REMOTE,
    contact: { service: s.contact, topic: `${s.name.toLowerCase()} in ${d.name}` },
    intro: [
      `${d.profile[0]}`,
      `For businesses like these, 7CODE delivers ${s.name.toLowerCase()} remotely from Lahore: a fixed, itemised quote in SAR or USD, work you can watch on a staging link, and the result on your own accounts. There is no 7CODE office in ${d.name}; our day overlaps yours closely.`,
    ],
    answer: {
      q: `How much does ${s.name.toLowerCase()} cost in ${d.name}?`,
      a: `It depends on scope — features, integrations and scale. A remote team usually costs considerably less than a ${d.cityName}-based agency for the same work. 7CODE quotes a fixed, itemised price after a discovery call.`,
    },
    sections: [
      { type: "cards", h: "What's included", items: s.cards },
      {
        type: "text",
        h: `Built for ${d.name}`,
        paras: [
          d.profile[1] ?? d.profile[0],
          `That shapes the ${s.name.toLowerCase()} we build here: fit to how ${d.name} businesses actually operate, bilingual where it helps, and set up so you own and control everything from day one.`,
        ],
      },
      { type: "list", h: `Who we work with in ${d.name}`, items: d.sectors },
      {
        type: "steps",
        h: "How a project runs",
        items: [
          { name: "Discovery call", body: `A call in Saudi working hours to understand your goals.` },
          { name: "Fixed quote", body: "A written scope and an itemised, fixed price in SAR or USD." },
          { name: "Build and review", body: "Regular progress on a staging link or content preview." },
          { name: "Launch and support", body: "Go-live on your accounts with ongoing support." },
        ],
      },
    ],
    tools: s.tools,
    faqs: [
      { q: `Do you have an office in ${d.name}?`, a: `No. Our team is in Lahore and we serve ${d.name} remotely, with a WhatsApp line and calls in your working hours.` },
      { q: `Can you quote in SAR?`, a: `Yes, in SAR or USD. Payment terms are agreed in the contract.` },
      ...s.contact === "social-media"
        ? [{ q: `Can you work in Arabic?`, a: `Yes, with Arabic content written or reviewed by a native speaker.` }]
        : [{ q: `Who owns the code and accounts?`, a: `You do, from day one. Everything is built on your own repository, hosting and domains.` }],
      { q: `How do we start?`, a: `Send us a message on WhatsApp or through the contact form with a little about your ${d.name} business, and we'll set up a discovery call and a fixed quote.` },
    ],
    related: [`/locations/${d.city}/${d.slug}`, `/locations/${d.city}`, ...s.links.filter((l) => l.startsWith("/services") || l.startsWith("/technologies") || l.startsWith("/social-media-management") || l.startsWith("/ai-solutions")).slice(0, 3)].filter((p, i, arr) => arr.indexOf(p) === i).slice(0, 5),
  };
}

// ------------------------------------------------------------------ Country hub
function countryHub(): Landing {
  const regions = [...new Set(CITIES.map((c) => c.region))];
  return {
    path: "/locations/saudi-arabia",
    kind: "country",
    name: "Saudi Arabia",
    line: "Websites, software, AI automation and social media for Saudi businesses, delivered remotely.",
    crumbs: [{ name: "Locations", href: "/locations" }],
    seoTitle: "Web & Software Development Company in Saudi Arabia",
    metaDescription:
      "Websites, custom software, AI automation, SEO and social media for businesses across Saudi Arabia — Riyadh, Jeddah, Dammam and beyond. Fixed quotes in SAR, delivered remotely by 7CODE.",
    h1: "Software, web and digital services for Saudi Arabia businesses",
    serviceType: "Software development and digital services",
    areaServed: ["Saudi Arabia", "Riyadh", "Jeddah", "Dammam", "Al Khobar"],
    presence: REMOTE,
    contact: { topic: "a project in Saudi Arabia" },
    intro: [
      "Saudi Arabia is the Gulf's largest economy and, under Vision 2030, its fastest-changing — a wave of new companies, giga-projects and digital-first businesses that need software, websites and automation built properly. 7CODE builds and runs that digital side remotely from Lahore.",
      "Pakistan is two hours ahead of Saudi Arabia, so our working days overlap closely. We quote fixed and itemised in SAR or USD, build with Arabic and English where it helps, and leave the code, hosting and accounts in your name.",
    ],
    answer: {
      q: "Does 7CODE serve Saudi Arabia?",
      a: "Yes. 7CODE serves businesses across Saudi Arabia remotely from Lahore — Riyadh, Jeddah, Dammam, Al Khobar and beyond — building websites, custom software, SaaS products and AI automation and managing social media, with fixed quotes in SAR and a WhatsApp line.",
    },
    sections: [
      {
        type: "cards",
        h: "Services for Saudi businesses",
        items: [
          { name: "Software and SaaS", body: "Custom systems, CRMs, ERPs and SaaS products in Next.js, Laravel and Node.js." },
          { name: "Websites in Arabic and English", body: "Fast, bilingual websites with proper right-to-left layouts." },
          { name: "AI and n8n automation", body: "AI assistants, document processing and workflow automation." },
          { name: "Social media management", body: "Instagram, TikTok, Snapchat, X and LinkedIn content for Saudi audiences." },
          { name: "SEO for Saudi searches", body: "Local SEO, city pages and content written for Saudi buyers." },
          { name: "eCommerce", body: "Stores with mada, Apple Pay and the delivery options Saudi customers expect." },
        ],
      },
      { type: "list", h: "Cities we cover in Saudi Arabia", note: "Each has its own page.", items: CITIES.map((c) => c.name) },
      {
        type: "text",
        h: "Built for Vision 2030 and ZATCA",
        paras: [
          "The Kingdom's digital shift is real and regulated: ZATCA's Fatoora e-invoicing is rolling out in waves, VAT is 15%, and buyers increasingly expect Arabic-first, mobile-first experiences. We build systems with that in mind — invoicing structured for ZATCA, bilingual interfaces, and the Saudi payment rails customers actually use.",
          REMOTE,
        ],
      },
      {
        type: "steps",
        h: "How we work with you remotely",
        items: [
          { name: "Discovery call", body: "A video call in Saudi working hours." },
          { name: "Fixed quote", body: "A written scope and itemised, fixed price in SAR or USD." },
          { name: "Visible progress", body: "A staging link from the first weeks and regular check-ins." },
          { name: "Launch on your accounts", body: "Domains, hosting and code under your ownership." },
        ],
      },
    ],
    faqs: [
      { q: "Do you have an office in Saudi Arabia?", a: "No. Our team is in Lahore and we serve the Kingdom remotely, with a WhatsApp line and calls in your working hours. Pakistan is two hours ahead of Saudi Arabia, so our days overlap closely." },
      { q: "Can you invoice in SAR?", a: "We can quote in SAR or USD. Payment details are agreed in the contract." },
      { q: "Do you build Arabic websites?", a: "Yes, with right-to-left layouts and Arabic content prepared by native speakers or provided by you." },
      { q: "Can your systems handle ZATCA e-invoicing?", a: "Yes. We build invoicing so the data is structured for ZATCA's Fatoora e-invoicing and 15% VAT, ready to pass to an accredited provider." },
      { q: "Which Saudi cities do you cover?", a: "All of them. Because we work remotely, every city is served the same way; the pages above cover the main markets from Riyadh and Jeddah to the Eastern Province, the holy cities and NEOM." },
    ],
    related: ["/locations/uae", ...CITIES.filter((c) => c.tier1).map((c) => `/locations/${c.slug}`)],
  };
}

// ------------------------------------------------------------------ Export
const cityHubs = CITIES.map(cityHub);
const cityServicePages = CITIES.filter((c) => c.tier1).flatMap((c) => c.services.slice(0, 5).map((svc) => cityServiceLanding(c, svc)));
const districtHubs = DISTRICTS.map(districtHub);
const districtServicePages = DISTRICTS.flatMap((d) => d.services.slice(0, 4).map((svc) => districtServiceLanding(d, svc)));

// The Saudi Arabia country hub itself lives in ./places.ts; these are its city, service
// and district pages. (countryHub is kept for reference but not exported, to avoid a path
// collision with the places.ts entry.)
void countryHub;
export const saudiLandings: Landing[] = [...cityHubs, ...cityServicePages, ...districtHubs, ...districtServicePages];
