import type { Faq, Item, Landing, Section } from "./types";
import { SVC } from "./cityServices";

/**
 * UAE area coverage. One hub page per genuinely-named business district or city, and
 * service pages for the main commercial districts.
 *
 * Every area carries its own `profile` — a specific, true description of what that
 * district actually is and who trades there. That is deliberate: the one thing that
 * sinks location pages is 200 near-identical "best {service} in {place}" doorways, so
 * the real local detail is the content, not decoration. Anything that still comes out
 * thin is caught by the quality gate in ./types.ts and ./index.ts, which adds noindex
 * and keeps it out of the sitemap, so a weak combination never reaches Google.
 *
 * 7CODE has no UAE office. Every page says plainly that the work is delivered remotely
 * from Lahore, one hour behind the UAE, with a UAE WhatsApp line — never an "office in
 * {area}" claim.
 */

type EmirateKey = "dubai" | "abu-dhabi" | "sharjah" | "ajman" | "ras-al-khaimah" | "fujairah" | "umm-al-quwain" | "al-ain";

const EMIRATE: Record<EmirateKey, { name: string; hub: string }> = {
  dubai: { name: "Dubai", hub: "/locations/dubai" },
  "abu-dhabi": { name: "Abu Dhabi", hub: "/locations/abu-dhabi" },
  sharjah: { name: "Sharjah", hub: "/locations/sharjah" },
  ajman: { name: "Ajman", hub: "/locations/ajman" },
  "ras-al-khaimah": { name: "Ras Al Khaimah", hub: "/locations/ras-al-khaimah" },
  fujairah: { name: "Fujairah", hub: "/locations/fujairah" },
  "umm-al-quwain": { name: "Umm Al Quwain", hub: "/locations/umm-al-quwain" },
  "al-ain": { name: "Al Ain", hub: "/locations/al-ain" },
};

type AreaType = "freezone" | "business" | "industrial" | "tech" | "waterfront" | "retail" | "residential" | "city" | "port";

type AreaDef = {
  slug: string;
  name: string;
  emirate: EmirateKey;
  type: AreaType;
  /** The unique, true description of the district. Two to three specific sentences. */
  profile: string[];
  sectors: string[];
  /** Service slugs relevant here; the first is the primary one. */
  services: (keyof typeof SVC)[];
  nearby: string[];
  /** Generate the deeper /{area}/{service} pages for this district. */
  tier1?: boolean;
};

const SOFT = "software-development", WEB = "web-development", SAAS = "saas-development", AI = "ai-automation", SOCIAL = "social-media-management", CRM = "crm-development";

// ---------------------------------------------------------------- Dubai
const dubai: AreaDef[] = [
  { slug: "business-bay", name: "Business Bay", emirate: "dubai", type: "business", tier1: true,
    profile: [
      "Business Bay is Dubai's central business district: a dense cluster of towers along the Dubai Water Canal packed with real estate brokerages, financial firms, marketing agencies, consultancies and the regional offices of larger companies.",
      "It is a fast, deal-driven place where most first contact happens on WhatsApp and most work is won on speed of reply, which is exactly where a well-built CRM and a sharp website earn their keep.",
    ],
    sectors: ["Real estate brokerages", "Marketing and media agencies", "Financial and advisory firms", "Consultancies", "Regional HQs of trading companies"],
    services: [CRM, WEB, SOFT, SOCIAL], nearby: ["downtown-dubai", "difc", "al-quoz"] },
  { slug: "difc", name: "DIFC", emirate: "dubai", type: "business", tier1: true,
    profile: [
      "The Dubai International Financial Centre is the region's leading financial free zone, home to banks, asset managers, fintech startups, law firms and professional-services companies operating under its own common-law framework.",
      "Businesses here are held to a high bar on security, data handling and documentation, so the software and web work tends to be serious: client portals, reporting tools and systems that stand up to scrutiny.",
    ],
    sectors: ["Banks and asset managers", "Fintech startups", "Law and audit firms", "Family offices", "Insurance and reinsurance"],
    services: [SOFT, SAAS, WEB, AI], nearby: ["business-bay", "downtown-dubai", "al-maryah-island"] },
  { slug: "downtown-dubai", name: "Downtown Dubai", emirate: "dubai", type: "business", tier1: true,
    profile: [
      "Downtown Dubai, around the Burj Khalifa and Dubai Mall, mixes flagship retail, hospitality and premium real estate with the head offices of some of the emirate's best-known brands.",
      "Presentation matters more here than almost anywhere: the businesses are consumer-facing and image-conscious, so websites, brand-grade social content and polished customer journeys do the heavy lifting.",
    ],
    sectors: ["Hospitality and F&B", "Luxury retail", "Premium real estate", "Brand head offices", "Events and experiences"],
    services: [WEB, SOCIAL, SOFT, CRM], nearby: ["business-bay", "difc", "dubai-design-district"] },
  { slug: "dubai-marina", name: "Dubai Marina", emirate: "dubai", type: "waterfront", tier1: true,
    profile: [
      "Dubai Marina is a high-density waterfront community of residential towers, hotels, restaurants and the yacht and leisure businesses that serve them, with heavy foot traffic and a young, international, phone-first audience.",
      "The businesses that thrive here live or die on social media and quick online booking, so Reels, an active Instagram presence and a fast mobile site matter more than a big corporate system.",
    ],
    sectors: ["Restaurants and cafés", "Hotels and short-stay operators", "Yacht and leisure services", "Clinics and salons", "Real estate agencies"],
    services: [SOCIAL, WEB, CRM], nearby: ["jlt", "dubai-media-city", "jbr"] },
  { slug: "jlt", name: "Jumeirah Lake Towers", emirate: "dubai", type: "business", tier1: true,
    profile: [
      "Jumeirah Lake Towers (JLT) is a free-zone cluster of mid-rise towers popular with SMEs, startups, trading companies and solo founders, sitting right across Sheikh Zayed Road from the Marina.",
      "It is one of Dubai's densest concentrations of small businesses, which makes it a natural home for affordable websites, lightweight custom systems and the automation that lets a small team punch above its weight.",
    ],
    sectors: ["Trading and import-export SMEs", "Startups and freelancers", "IT and consulting firms", "Recruitment agencies", "eCommerce sellers"],
    services: [WEB, SOFT, AI, SOCIAL], nearby: ["dubai-marina", "dubai-media-city", "al-quoz"] },
  { slug: "deira", name: "Deira", emirate: "dubai", type: "retail", tier1: true,
    profile: [
      "Deira is old-trading Dubai: the gold and spice souks, the Naif and Murshid markets, and thousands of established wholesale, electronics, textile and foodstuff traders working on tight margins and long relationships.",
      "Many of these businesses still run on paper, WhatsApp and memory, so the biggest wins here are practical: inventory and invoicing systems, a simple catalogue website, and automation that cuts the daily re-typing.",
    ],
    sectors: ["Wholesale and trading", "Gold and jewellery", "Electronics and mobile", "Textiles and garments", "Foodstuff and spices"],
    services: [SOFT, WEB, CRM, AI], nearby: ["bur-dubai", "al-garhoud", "international-city"] },
  { slug: "bur-dubai", name: "Bur Dubai", emirate: "dubai", type: "retail",
    profile: [
      "Bur Dubai, across the Creek from Deira, blends the old textile and electronics trade of Meena Bazaar with clinics, travel agencies, exchange houses and small professional firms serving a large resident community.",
      "The common thread is high-volume, repeat-customer businesses that benefit from online booking, bilingual websites and systems that handle a steady flow of walk-in and WhatsApp enquiries.",
    ],
    sectors: ["Textile and retail trading", "Clinics and pharmacies", "Travel and visa services", "Exchange and remittance", "Small professional firms"],
    services: [WEB, SOFT, CRM], nearby: ["deira", "oud-metha", "al-karama"] },
  { slug: "al-quoz", name: "Al Quoz", emirate: "dubai", type: "industrial", tier1: true,
    profile: [
      "Al Quoz is Dubai's working district: warehouses, fit-out and joinery workshops, car garages, print houses and light manufacturing, increasingly mixed with art galleries, studios and warehouse-conversion offices.",
      "These are operations businesses, so they get the most from job-tracking and dispatch systems, inventory, and quotation tools, rather than from a flashy brand site they rarely update.",
    ],
    sectors: ["Fit-out and joinery", "Warehousing and logistics", "Automotive workshops", "Printing and signage", "Light manufacturing"],
    services: [SOFT, AI, WEB, CRM], nearby: ["al-barsha", "business-bay", "jebel-ali"] },
  { slug: "jebel-ali", name: "Jebel Ali", emirate: "dubai", type: "freezone", tier1: true,
    profile: [
      "Jebel Ali is home to JAFZA, one of the world's largest free zones, and the region's busiest port, making it the logistics and re-export engine of Dubai with thousands of trading, shipping and manufacturing companies.",
      "Work here is about moving goods and documents: shipment tracking, warehouse and inventory systems, customs and supplier portals, and automation that reads the endless invoices, bills of lading and delivery notes.",
    ],
    sectors: ["Freight and shipping", "Import-export and re-export", "Warehousing and 3PL", "Manufacturing", "Commodities trading"],
    services: [SOFT, AI, WEB, CRM], nearby: ["dubai-south", "al-quoz", "dubai-investment-park"] },
  { slug: "dubai-internet-city", name: "Dubai Internet City", emirate: "dubai", type: "tech", tier1: true,
    profile: [
      "Dubai Internet City (DIC) is the technology free zone that anchors the emirate's tech sector, hosting global software vendors, telecoms, and a dense startup and scale-up community alongside the accelerators around it.",
      "The companies here are themselves technical, so they come to a build partner for extra engineering capacity, MVPs, integrations and the kind of SaaS work that needs doing properly the first time.",
    ],
    sectors: ["Software and SaaS companies", "Startups and scale-ups", "Telecoms and IT services", "Digital agencies", "Tech-enabled services"],
    services: [SAAS, SOFT, AI, WEB], nearby: ["dubai-media-city", "tecom", "jlt"] },
  { slug: "dubai-media-city", name: "Dubai Media City", emirate: "dubai", type: "tech", tier1: true,
    profile: [
      "Dubai Media City (DMC) is the free zone for broadcasters, publishers, production houses, advertising and PR agencies, and the growing content and influencer economy around them.",
      "It is a natural fit for web, content and social work: campaign microsites, portfolios, booking and production-management tools, and the short-form video that this industry both makes and needs.",
    ],
    sectors: ["Advertising and PR agencies", "Production and media houses", "Publishers and broadcasters", "Content creators", "Events and marketing"],
    services: [SOCIAL, WEB, SOFT, SAAS], nearby: ["dubai-internet-city", "tecom", "dubai-production-city"] },
  { slug: "dubai-silicon-oasis", name: "Dubai Silicon Oasis", emirate: "dubai", type: "tech", tier1: true,
    profile: [
      "Dubai Silicon Oasis (DSO) is a technology park and free zone combining an integrated residential community with electronics, hardware, software and engineering companies, plus a strong base of startups and SMEs.",
      "The mix of hardware, software and light manufacturing makes it fertile ground for custom systems, IoT and automation integrations, and the SaaS products that startups here are building.",
    ],
    sectors: ["Electronics and hardware", "Software and engineering firms", "Startups and SMEs", "IoT and automation", "Education and research"],
    services: [SOFT, SAAS, AI, WEB], nearby: ["dubai-academic-city", "nad-al-sheba", "international-city"] },
  { slug: "al-barsha", name: "Al Barsha", emirate: "dubai", type: "business",
    profile: [
      "Al Barsha is a mixed commercial-residential district around Mall of the Emirates, home to a broad base of SMEs, clinics, schools, hotels and service businesses serving a large resident population.",
      "The businesses here are mostly local and service-led, so a fast bilingual website, Google-ready local SEO and an active social presence tend to bring the clearest return.",
    ],
    sectors: ["Clinics and medical centres", "Schools and training", "Hotels and hospitality", "Retail and services", "SMEs"],
    services: [WEB, SOCIAL, SOFT], nearby: ["al-quoz", "tecom", "jumeirah"] },
  { slug: "jumeirah", name: "Jumeirah", emirate: "dubai", type: "residential",
    profile: [
      "Jumeirah is an established, affluent coastal district of villas, boutique clinics, salons, cafés and high-end service businesses catering to a settled, high-spending clientele.",
      "Reputation and referral drive trade here, so these businesses benefit most from a polished brand presence, strong Instagram content and smooth online booking rather than heavy back-office software.",
    ],
    sectors: ["Aesthetic and dental clinics", "Salons and spas", "Boutique F&B", "Interior and design studios", "Private tutoring and coaching"],
    services: [SOCIAL, WEB, CRM], nearby: ["al-barsha", "downtown-dubai", "jbr"] },
  { slug: "dubai-investment-park", name: "Dubai Investment Park", emirate: "dubai", type: "industrial",
    profile: [
      "Dubai Investment Park (DIP) is a large mixed-use zone combining manufacturing, warehousing and logistics with commercial and residential pockets, popular with industrial SMEs and distributors.",
      "Operations run the show here, so job scheduling, inventory, fleet and dispatch systems and document automation deliver the most, often replacing a tangle of spreadsheets.",
    ],
    sectors: ["Manufacturing", "Warehousing and distribution", "Building materials", "Food processing", "Logistics"],
    services: [SOFT, AI, WEB], nearby: ["jebel-ali", "dubai-south", "al-quoz"] },
  { slug: "dubai-south", name: "Dubai South", emirate: "dubai", type: "freezone",
    profile: [
      "Dubai South is the master-planned district around Al Maktoum International Airport and the Expo legacy site, built around aviation, logistics, exhibitions and a fast-growing business and residential community.",
      "As a newer zone it attracts companies setting up fresh systems, which is the ideal moment to build logistics tooling, portals and automation properly rather than inheriting legacy software.",
    ],
    sectors: ["Aviation and aerospace", "Logistics and e-commerce fulfilment", "Exhibitions and events", "Contracting", "New free-zone startups"],
    services: [SOFT, WEB, AI, SAAS], nearby: ["jebel-ali", "dubai-investment-park", "expo-city"] },
  { slug: "motor-city", name: "Motor City", emirate: "dubai", type: "residential",
    profile: [
      "Motor City is a self-contained community around the Dubai Autodrome, blending residential blocks with automotive businesses, clinics, cafés, nurseries and neighbourhood retail.",
      "Trade here is local and community-driven, so a clean website, local SEO and consistent social media that reaches nearby residents usually matter more than large systems.",
    ],
    sectors: ["Automotive services", "Clinics and nurseries", "Cafés and retail", "Fitness and wellness", "Community services"],
    services: [WEB, SOCIAL, SOFT], nearby: ["dubai-production-city", "dubai-sports-city", "al-barsha"] },
  { slug: "dubai-hills", name: "Dubai Hills", emirate: "dubai", type: "residential",
    profile: [
      "Dubai Hills Estate is a newer upscale community around a golf course and a major mall, with a growing cluster of clinics, dining, fitness and family-focused service businesses serving affluent residents.",
      "These are consumer brands courting a specific, well-off catchment, so brand-grade social content, booking-ready websites and local SEO are the tools that convert.",
    ],
    sectors: ["Dental and aesthetic clinics", "Fitness and wellness", "Family and education services", "Dining", "Real estate"],
    services: [SOCIAL, WEB, CRM], nearby: ["al-barsha", "motor-city", "business-bay"] },
  { slug: "international-city", name: "International City", emirate: "dubai", type: "retail",
    profile: [
      "International City is a high-density, affordable district of themed clusters packed with small traders, wholesale and online-retail operators, restaurants and the China-trade businesses it is known for.",
      "Thin margins and high volume make practical tools the priority: a product catalogue site, order and inventory handling, and automation that trims the manual work out of a busy day.",
    ],
    sectors: ["Wholesale and small trading", "eCommerce sellers", "Restaurants and grocery", "Import from Asia", "Logistics and last-mile"],
    services: [WEB, SOFT, AI], nearby: ["deira", "nad-al-sheba", "dubai-silicon-oasis"] },
  { slug: "nad-al-sheba", name: "Nad Al Sheba", emirate: "dubai", type: "business",
    profile: [
      "Nad Al Sheba is a central district mixing established villas with a growing business park, light industrial units and SMEs that value being close to both Downtown and the airport.",
      "The companies here tend to be practical operators, well served by custom systems, inventory and quotation tools and the automation that keeps a lean team efficient.",
    ],
    sectors: ["Trading SMEs", "Light industrial", "Services and contracting", "Education", "Logistics"],
    services: [SOFT, WEB, AI], nearby: ["international-city", "dubai-silicon-oasis", "business-bay"] },
  { slug: "dubai-production-city", name: "Dubai Production City", emirate: "dubai", type: "tech",
    profile: [
      "Dubai Production City (IMPZ) is a free zone built around printing, publishing and media production, now home to a wide range of SMEs, media businesses and a sizeable residential community.",
      "It suits web, catalogue and production-management work, along with the social content that media and publishing businesses need to stay visible.",
    ],
    sectors: ["Printing and publishing", "Media production", "SMEs and agencies", "eCommerce", "Light manufacturing"],
    services: [WEB, SOCIAL, SOFT], nearby: ["dubai-media-city", "motor-city", "jebel-ali"] },
  { slug: "jvc", name: "Jumeirah Village Circle", emirate: "dubai", type: "residential",
    profile: [
      "Jumeirah Village Circle (JVC) is one of Dubai's fastest-growing residential communities, with a dense and rising base of clinics, cafés, salons, nurseries and home-grown service businesses.",
      "The opportunity here is reaching nearby residents, which makes local SEO, Google Business Profile and steady social media the most direct route to enquiries.",
    ],
    sectors: ["Clinics and pharmacies", "Cafés and restaurants", "Salons and fitness", "Nurseries and tutoring", "Home services"],
    services: [SOCIAL, WEB, SOFT], nearby: ["dubai-hills", "motor-city", "al-barsha"] },
  { slug: "al-garhoud", name: "Al Garhoud", emirate: "dubai", type: "business",
    profile: [
      "Al Garhoud sits beside Dubai International Airport, a settled district of hotels, travel and cargo businesses, clinics and established SMEs that trade on proximity to the terminals.",
      "Travel, logistics and hospitality dominate, so booking systems, bilingual websites and automation around bookings and documents give the clearest return.",
    ],
    sectors: ["Travel and cargo", "Hotels and hospitality", "Clinics", "Automotive", "Professional services"],
    services: [WEB, SOFT, CRM], nearby: ["deira", "oud-metha", "bur-dubai"] },
  { slug: "oud-metha", name: "Oud Metha", emirate: "dubai", type: "business",
    profile: [
      "Oud Metha is an established central district known for healthcare, education and professional services, with hospitals, schools, clinics and consultancies serving a wide resident base.",
      "These are appointment-and-enrolment businesses, so booking systems, patient and student portals and clear bilingual websites do the real work.",
    ],
    sectors: ["Hospitals and clinics", "Schools and institutes", "Consultancies", "Government-adjacent services", "Retail"],
    services: [SOFT, WEB, CRM], nearby: ["bur-dubai", "al-garhoud", "dubai-healthcare-city"] },
  { slug: "dubai-healthcare-city", name: "Dubai Healthcare City", emirate: "dubai", type: "business",
    profile: [
      "Dubai Healthcare City (DHCC) is the medical free zone, a concentrated cluster of hospitals, specialist clinics, diagnostic centres and wellness businesses operating under its own healthcare regulator.",
      "Patient-facing systems rule here: booking and patient portals, bilingual sites that meet medical-advertising rules, and automation that handles appointments and records carefully.",
    ],
    sectors: ["Hospitals and specialist clinics", "Diagnostics and labs", "Dental and aesthetic", "Wellness and rehab", "Medical suppliers"],
    services: [SOFT, WEB, AI, CRM], nearby: ["oud-metha", "bur-dubai", "business-bay"] },
  { slug: "tecom", name: "TECOM / Barsha Heights", emirate: "dubai", type: "tech",
    profile: [
      "TECOM, around Barsha Heights, is a mixed free-zone district of media, tech and knowledge companies alongside hotels and residential towers, bridging Internet City, Media City and Al Barsha.",
      "The business base is tech- and media-led, which makes it a strong fit for web apps, SaaS work and the content and social output those companies rely on.",
    ],
    sectors: ["Tech and media SMEs", "Agencies and consultancies", "Hospitality", "IT services", "Startups"],
    services: [SAAS, WEB, SOFT, SOCIAL], nearby: ["dubai-internet-city", "dubai-media-city", "al-barsha"] },
  { slug: "dubai-design-district", name: "Dubai Design District", emirate: "dubai", type: "tech",
    profile: [
      "Dubai Design District (d3) is the creative free zone for fashion, design, art and architecture studios, with showrooms, galleries and the agencies and events that orbit them.",
      "Image is everything here, so the work is portfolio sites, lookbooks, brand-grade social content and the booking and commerce tools design businesses need.",
    ],
    sectors: ["Fashion and design studios", "Architecture and interiors", "Art galleries", "Creative agencies", "Events"],
    services: [SOCIAL, WEB, SOFT], nearby: ["downtown-dubai", "business-bay", "dubai-media-city"] },
];

// ---------------------------------------------------------------- Abu Dhabi
const abuDhabi: AreaDef[] = [
  { slug: "al-reem-island", name: "Al Reem Island", emirate: "abu-dhabi", type: "business", tier1: true,
    profile: [
      "Al Reem Island is Abu Dhabi's emerging business and residential hub, a cluster of towers housing financial firms, tech companies, consultancies and the fast-growing community of SMEs choosing it over the older downtown.",
      "It is where a lot of Abu Dhabi's newer, more digital businesses sit, which makes it strong ground for custom systems, SaaS builds and web applications set up right from the start.",
    ],
    sectors: ["Financial and advisory firms", "Tech companies and startups", "Consultancies", "Real estate", "Professional services"],
    services: [SOFT, SAAS, WEB, CRM], nearby: ["al-maryah-island", "al-khalidiyah", "al-danah"] },
  { slug: "al-maryah-island", name: "Al Maryah Island", emirate: "abu-dhabi", type: "business", tier1: true,
    profile: [
      "Al Maryah Island is Abu Dhabi's financial centre, home to ADGM — the emirate's common-law financial free zone — along with banks, the stock exchange, fintech firms and professional-services companies.",
      "ADGM's regulatory bar is high, so the work tends to be rigorous: secure client portals, reporting and compliance tooling, and systems built to be audited.",
    ],
    sectors: ["Banks and financial institutions", "Fintech firms", "Law and audit", "Asset management", "Insurance"],
    services: [SOFT, SAAS, WEB, AI], nearby: ["al-reem-island", "al-danah", "al-khalidiyah"] },
  { slug: "mussafah", name: "Mussafah", emirate: "abu-dhabi", type: "industrial", tier1: true,
    profile: [
      "Mussafah is Abu Dhabi's main industrial district: workshops, warehouses, oilfield-services suppliers, heavy-equipment yards, garages and contracting firms that keep the capital's economy running.",
      "This is contract-and-compliance territory, where the big wins are job and dispatch systems, document and certificate tracking, inventory, and the automation that reads a mountain of supplier paperwork.",
    ],
    sectors: ["Oilfield services and suppliers", "Heavy equipment and transport", "Contracting and fit-out", "Automotive workshops", "Warehousing"],
    services: [SOFT, AI, WEB, CRM], nearby: ["mohammed-bin-zayed-city", "khalifa-city", "kizad"] },
  { slug: "khalifa-city", name: "Khalifa City", emirate: "abu-dhabi", type: "residential", tier1: true,
    profile: [
      "Khalifa City is a large residential district between the city and the airport, with a growing base of clinics, schools, nurseries, cafés and neighbourhood service businesses serving settled families.",
      "Trade here is local and relationship-driven, so Google Business Profile, local SEO, booking systems and steady social media bring the most reliable enquiries.",
    ],
    sectors: ["Clinics and pharmacies", "Schools and nurseries", "Cafés and retail", "Home and auto services", "Fitness"],
    services: [WEB, SOCIAL, SOFT], nearby: ["mohammed-bin-zayed-city", "mussafah", "yas-island"] },
  { slug: "yas-island", name: "Yas Island", emirate: "abu-dhabi", type: "waterfront", tier1: true,
    profile: [
      "Yas Island is Abu Dhabi's leisure and entertainment hub — theme parks, the F1 circuit, hotels, malls and a dense cluster of hospitality, events and tourism businesses.",
      "The audience is visitors and a young local crowd, so social media, booking-ready websites and campaign microsites are the tools that fill tables and sell tickets.",
    ],
    sectors: ["Hotels and hospitality", "Attractions and events", "Restaurants and F&B", "Tourism services", "Retail"],
    services: [SOCIAL, WEB, CRM], nearby: ["saadiyat-island", "khalifa-city", "al-reem-island"] },
  { slug: "mohammed-bin-zayed-city", name: "Mohammed Bin Zayed City", emirate: "abu-dhabi", type: "residential", tier1: true,
    profile: [
      "Mohammed Bin Zayed City (MBZ) is one of Abu Dhabi's largest residential and small-business districts, a mix of villas, local commercial strips, workshops and SMEs serving the surrounding community and nearby Mussafah.",
      "The businesses are practical and local, well served by affordable websites, local SEO, and custom systems or automation for the trading and services firms based here.",
    ],
    sectors: ["Trading and services SMEs", "Workshops and contracting", "Clinics and retail", "Restaurants", "Logistics"],
    services: [WEB, SOFT, SOCIAL, AI], nearby: ["mussafah", "khalifa-city", "al-reem-island"] },
  { slug: "kizad", name: "KIZAD", emirate: "abu-dhabi", type: "freezone",
    profile: [
      "KIZAD, the industrial zone around Khalifa Port, is one of the region's largest integrated manufacturing, logistics and trade zones, home to heavy industry, processing and distribution operations.",
      "Scale and compliance define the work: warehouse and inventory systems, logistics and supplier portals, and document automation across high volumes of shipments.",
    ],
    sectors: ["Manufacturing and processing", "Logistics and distribution", "Petrochemicals", "Metals and materials", "Trade"],
    services: [SOFT, AI, WEB], nearby: ["mussafah", "khalifa-city", "ruwais"] },
  { slug: "saadiyat-island", name: "Saadiyat Island", emirate: "abu-dhabi", type: "waterfront",
    profile: [
      "Saadiyat Island is Abu Dhabi's cultural and upscale-leisure district — the Louvre and museum quarter, luxury resorts, beach clubs and premium residential developments.",
      "The businesses here are image-led and premium, so brand-grade websites, strong social content and polished booking journeys matter far more than back-office systems.",
    ],
    sectors: ["Cultural institutions", "Luxury resorts and beach clubs", "Premium real estate", "Fine dining", "Events"],
    services: [SOCIAL, WEB, CRM], nearby: ["yas-island", "al-maryah-island", "al-danah"] },
  { slug: "masdar-city", name: "Masdar City", emirate: "abu-dhabi", type: "tech",
    profile: [
      "Masdar City is Abu Dhabi's sustainability and innovation cluster, home to clean-tech companies, research institutes, startups and the corporate innovation arms drawn to its free zone.",
      "The base is technical and research-led, a natural fit for SaaS products, data and IoT systems, AI work and the web presence innovation companies need.",
    ],
    sectors: ["Clean-tech and energy", "Research and institutes", "Startups and scale-ups", "Mobility and IoT", "Sustainability consulting"],
    services: [SAAS, SOFT, AI, WEB], nearby: ["khalifa-city", "al-reem-island", "yas-island"] },
  { slug: "al-khalidiyah", name: "Al Khalidiyah", emirate: "abu-dhabi", type: "business",
    profile: [
      "Al Khalidiyah is an established central Abu Dhabi district of offices, clinics, retail and professional firms, popular with corporates and services businesses that want a city-centre address.",
      "The companies here are settled and relationship-led, well matched to clean bilingual websites, CRM and booking tools, and LinkedIn-led social for the B2B firms.",
    ],
    sectors: ["Corporate offices", "Clinics and medical centres", "Professional services", "Retail", "Government-adjacent firms"],
    services: [WEB, SOFT, SOCIAL, CRM], nearby: ["al-danah", "al-mushrif", "al-reem-island"] },
  { slug: "al-danah", name: "Al Danah", emirate: "abu-dhabi", type: "business",
    profile: [
      "Al Danah is part of Abu Dhabi's downtown core, dense with corporate head offices, banks, travel and government-related businesses close to the Corniche.",
      "This is corporate and B2B territory, where credible websites, LinkedIn presence, CRM and reporting systems carry the most weight.",
    ],
    sectors: ["Corporate HQs", "Banking and finance", "Travel and aviation", "Government-related", "Professional services"],
    services: [WEB, SOFT, CRM, SOCIAL], nearby: ["al-khalidiyah", "al-maryah-island", "al-mushrif"] },
  { slug: "al-mushrif", name: "Al Mushrif", emirate: "abu-dhabi", type: "residential",
    profile: [
      "Al Mushrif is a settled, affluent residential district known for villas, embassies, schools and the clinics and family-service businesses that serve a long-established community.",
      "Reputation and locality drive trade, so local SEO, Google Business Profile, booking systems and considered social content are the natural tools.",
    ],
    sectors: ["Schools and nurseries", "Clinics and dental", "Family services", "Boutique retail", "Tutoring"],
    services: [WEB, SOCIAL, SOFT], nearby: ["al-khalidiyah", "al-danah", "khalifa-city"] },
  { slug: "ruwais", name: "Ruwais", emirate: "abu-dhabi", type: "industrial",
    profile: [
      "Ruwais, in Abu Dhabi's Al Dhafra region, is a major industrial and energy town built around one of the world's largest refining complexes, with the contracting, services and supply companies that support it.",
      "Industrial and compliance needs dominate: document and certificate tracking, workforce and job systems, and automation that handles heavy operational paperwork.",
    ],
    sectors: ["Energy and refining", "Industrial contracting", "Oilfield services", "Logistics", "Workforce services"],
    services: [SOFT, AI, WEB], nearby: ["kizad", "mussafah", "madinat-zayed"] },
  { slug: "madinat-zayed", name: "Madinat Zayed", emirate: "abu-dhabi", type: "city",
    profile: [
      "Madinat Zayed is the main town of Abu Dhabi's Al Dhafra (Western Region), a government, agriculture and services centre serving a wide rural and industrial hinterland.",
      "Businesses here are practical and locally focused, best served by clear bilingual websites, local SEO and straightforward systems for services and trading firms.",
    ],
    sectors: ["Government services", "Agriculture and trading", "Retail and services", "Contracting", "Logistics"],
    services: [WEB, SOFT], nearby: ["ruwais", "mussafah", "al-ain-city"] },
];

// ---------------------------------------------------------------- Sharjah
const sharjah: AreaDef[] = [
  { slug: "sharjah-industrial-area", name: "Sharjah Industrial Area", emirate: "sharjah", type: "industrial", tier1: true,
    profile: [
      "Sharjah Industrial Area is one of the UAE's largest concentrations of factories, workshops and warehouses — furniture, building materials, food processing, metal and plastics — much of it family-run and decades established.",
      "These are production businesses on tight margins, where stock-across-locations, production tracking, dispatch and quotation systems and document automation pay back fast.",
    ],
    sectors: ["Manufacturing", "Building materials", "Furniture and joinery", "Food processing", "Warehousing"],
    services: [SOFT, AI, WEB, CRM], nearby: ["al-qasimia", "saif-zone", "hamriyah-free-zone"] },
  { slug: "saif-zone", name: "SAIF Zone", emirate: "sharjah", type: "freezone", tier1: true,
    profile: [
      "Sharjah Airport International Free Zone (SAIF Zone) is a large, affordable free zone beside Sharjah Airport, popular with trading, logistics, light-manufacturing and e-commerce companies across the Northern Emirates.",
      "Trade and logistics dominate, so catalogue and order sites, inventory and shipment systems, supplier portals and invoice automation deliver the most.",
    ],
    sectors: ["Trading and re-export", "Logistics and freight", "Light manufacturing", "eCommerce", "Electronics"],
    services: [SOFT, WEB, AI, CRM], nearby: ["sharjah-industrial-area", "hamriyah-free-zone", "muwaileh"] },
  { slug: "hamriyah-free-zone", name: "Hamriyah Free Zone", emirate: "sharjah", type: "freezone", tier1: true,
    profile: [
      "Hamriyah Free Zone, around Sharjah's second port, is a heavy-industry and maritime free zone covering oil and gas services, steel, petrochemicals, and marine and manufacturing businesses.",
      "The work is industrial and document-heavy: operations and inventory systems, compliance and certificate tracking, and automation across shipments and supplier paperwork.",
    ],
    sectors: ["Oil and gas services", "Steel and metals", "Petrochemicals", "Maritime and marine", "Manufacturing"],
    services: [SOFT, AI, WEB], nearby: ["saif-zone", "sharjah-industrial-area", "al-khan"] },
  { slug: "al-majaz", name: "Al Majaz", emirate: "sharjah", type: "business", tier1: true,
    profile: [
      "Al Majaz is one of Sharjah's main commercial and waterfront districts, around Khalid Lagoon, mixing corporate offices, clinics, restaurants and retail with a busy leisure frontage.",
      "The business base is services and consumer-facing, well served by bilingual websites, booking systems, local SEO and active social media.",
    ],
    sectors: ["Corporate offices", "Clinics and medical", "Restaurants and leisure", "Retail", "Professional services"],
    services: [WEB, SOCIAL, SOFT, CRM], nearby: ["al-qasimia", "al-khan", "al-nahda-sharjah"] },
  { slug: "al-nahda-sharjah", name: "Al Nahda (Sharjah)", emirate: "sharjah", type: "residential",
    profile: [
      "Al Nahda is a dense residential and commercial district on the Sharjah-Dubai border, packed with clinics, salons, restaurants, groceries and small service businesses serving a large commuter population.",
      "Reaching nearby residents is the game, so local SEO, Google Business Profile and consistent social media produce the clearest enquiries.",
    ],
    sectors: ["Clinics and pharmacies", "Salons and fitness", "Restaurants and grocery", "Small retail", "Home services"],
    services: [SOCIAL, WEB, SOFT], nearby: ["al-qasimia", "al-majaz", "muwaileh"] },
  { slug: "al-qasimia", name: "Al Qasimia", emirate: "sharjah", type: "business",
    profile: [
      "Al Qasimia is a central Sharjah district of offices, trading companies, clinics and institutes, long established as a commercial core of the emirate.",
      "The mix of trading and services firms suits custom systems, bilingual websites and CRM, with social media for the consumer-facing businesses.",
    ],
    sectors: ["Trading companies", "Clinics and institutes", "Professional services", "Retail", "SMEs"],
    services: [WEB, SOFT, CRM], nearby: ["al-majaz", "al-nahda-sharjah", "sharjah-industrial-area"] },
  { slug: "muwaileh", name: "Muwaileh", emirate: "sharjah", type: "residential",
    profile: [
      "Muwaileh, around University City, is a fast-growing Sharjah district combining a large student and family population with retail, dining and the service businesses that serve them.",
      "A young, connected audience makes social media, local SEO and booking-ready websites the most effective tools here.",
    ],
    sectors: ["Education-adjacent services", "Cafés and dining", "Retail", "Clinics", "Fitness and tutoring"],
    services: [SOCIAL, WEB, SOFT], nearby: ["al-nahda-sharjah", "al-qasimia", "saif-zone"] },
  { slug: "al-khan", name: "Al Khan", emirate: "sharjah", type: "waterfront",
    profile: [
      "Al Khan is a coastal Sharjah district blending residential towers with hotels, restaurants, clinics and leisure businesses along the lagoon and beachfront.",
      "Consumer-facing trade dominates, so social content, booking systems and fast mobile websites carry the most weight.",
    ],
    sectors: ["Hotels and leisure", "Restaurants and cafés", "Clinics", "Retail", "Real estate"],
    services: [SOCIAL, WEB, CRM], nearby: ["al-majaz", "al-qasimia", "hamriyah-free-zone"] },
  { slug: "khor-fakkan", name: "Khor Fakkan", emirate: "sharjah", type: "port",
    profile: [
      "Khor Fakkan is Sharjah's east-coast port city on the Gulf of Oman, built around a major container terminal, with shipping, logistics, tourism and local trading businesses.",
      "Port logistics and a growing tourism trade shape the work: shipment and operations systems for logistics firms, and websites and social for the hospitality side.",
    ],
    sectors: ["Port and shipping", "Logistics", "Tourism and hospitality", "Local trading", "Fishing and marine"],
    services: [SOFT, WEB, SOCIAL], nearby: ["kalba", "fujairah-city", "hamriyah-free-zone"] },
  { slug: "kalba", name: "Kalba", emirate: "sharjah", type: "city",
    profile: [
      "Kalba is a Sharjah east-coast town known for its mangrove reserve and eco-tourism, with fishing, local trading, services and a growing tourism sector.",
      "Local and tourism businesses here are best served by clear websites, local SEO and social content that showcases the area's draw.",
    ],
    sectors: ["Eco-tourism", "Fishing and marine", "Local trading and retail", "Services", "Hospitality"],
    services: [WEB, SOCIAL], nearby: ["khor-fakkan", "fujairah-city", "al-khan"] },
];

// ---------------------------------------------------------------- Ajman
const ajman: AreaDef[] = [
  { slug: "ajman-free-zone", name: "Ajman Free Zone", emirate: "ajman", type: "freezone", tier1: true,
    profile: [
      "Ajman Free Zone is one of the UAE's most affordable free zones, a magnet for small traders, startups, light manufacturers and e-commerce businesses pricing themselves keenly against Dubai and Sharjah.",
      "Cost-conscious SMEs need practical tools: a catalogue or order site, lightweight inventory and invoicing, and automation that lets a small team run lean.",
    ],
    sectors: ["Small trading and re-export", "Startups and SMEs", "Light manufacturing", "eCommerce", "Services"],
    services: [WEB, SOFT, AI, SOCIAL], nearby: ["al-nuaimiya", "al-jurf", "sharjah-industrial-area"] },
  { slug: "al-nuaimiya", name: "Al Nuaimiya", emirate: "ajman", type: "residential", tier1: true,
    profile: [
      "Al Nuaimiya is a central Ajman district of residential towers, clinics, retail and small service businesses serving a dense, mixed community.",
      "Local trade dominates, so affordable websites, local SEO and consistent social media are the most direct path to enquiries.",
    ],
    sectors: ["Clinics and pharmacies", "Retail and grocery", "Salons and services", "Restaurants", "SMEs"],
    services: [WEB, SOCIAL, SOFT], nearby: ["ajman-free-zone", "al-rashidiya-ajman", "al-jurf"] },
  { slug: "al-jurf", name: "Al Jurf", emirate: "ajman", type: "industrial",
    profile: [
      "Al Jurf is Ajman's main industrial and commercial district, home to workshops, warehouses, building-materials traders and the light manufacturing that supplies the Northern Emirates.",
      "Operations-led businesses here benefit from inventory, job and quotation systems and the automation that removes manual re-typing.",
    ],
    sectors: ["Light manufacturing", "Building materials", "Warehousing", "Automotive", "Trading"],
    services: [SOFT, WEB, AI], nearby: ["ajman-free-zone", "al-nuaimiya", "al-rashidiya-ajman"] },
  { slug: "al-rashidiya-ajman", name: "Al Rashidiya (Ajman)", emirate: "ajman", type: "residential",
    profile: [
      "Al Rashidiya is an established Ajman district blending residential blocks with retail, clinics and small professional firms along the corniche and inland.",
      "Consumer and services businesses here are best served by local SEO, booking-ready websites and steady social media.",
    ],
    sectors: ["Retail and services", "Clinics", "Professional firms", "Restaurants", "Real estate"],
    services: [WEB, SOCIAL, SOFT], nearby: ["al-nuaimiya", "ajman-free-zone", "al-jurf"] },
];

// ---------------------------------------------------------------- Ras Al Khaimah
const rak: AreaDef[] = [
  { slug: "rakez", name: "RAKEZ", emirate: "ras-al-khaimah", type: "freezone", tier1: true,
    profile: [
      "Ras Al Khaimah Economic Zone (RAKEZ) is one of the UAE's largest and most cost-effective free zones, home to thousands of industrial, trading, media and service companies from across the world.",
      "The spread from heavy industry to media SMEs means varied work: operations and inventory systems for industrial firms, and websites, SaaS and social for the services and media side.",
    ],
    sectors: ["Manufacturing and industry", "Trading and logistics", "Media and services", "SMEs and startups", "eCommerce"],
    services: [SOFT, WEB, AI, SOCIAL], nearby: ["al-nakheel", "al-hamra", "al-dhait"] },
  { slug: "al-nakheel", name: "Al Nakheel", emirate: "ras-al-khaimah", type: "business", tier1: true,
    profile: [
      "Al Nakheel is Ras Al Khaimah's central business district, the commercial heart of the city with offices, banks, clinics, retail and the professional firms serving the emirate.",
      "The business base is services and trading, well matched to bilingual websites, CRM and custom systems, with social for consumer-facing firms.",
    ],
    sectors: ["Corporate and professional services", "Banking", "Clinics and retail", "Trading", "Government-related"],
    services: [WEB, SOFT, CRM, SOCIAL], nearby: ["rakez", "al-dhait", "al-hamra"] },
  { slug: "al-hamra", name: "Al Hamra", emirate: "ras-al-khaimah", type: "waterfront",
    profile: [
      "Al Hamra is RAK's upscale waterfront and leisure district — a marina, golf course, resorts and residential communities, with the hospitality and tourism businesses around them.",
      "Tourism and leisure define the trade, so social content, booking-ready websites and campaign microsites are the tools that convert.",
    ],
    sectors: ["Resorts and hospitality", "Tourism and leisure", "Real estate", "Restaurants", "Retail"],
    services: [SOCIAL, WEB, CRM], nearby: ["al-nakheel", "rakez", "al-dhait"] },
  { slug: "al-dhait", name: "Al Dhait", emirate: "ras-al-khaimah", type: "residential",
    profile: [
      "Al Dhait is a large residential district of Ras Al Khaimah, with the clinics, schools, retail and service businesses that serve a settled local community.",
      "Local trade is the focus, best served by local SEO, Google Business Profile, booking systems and consistent social media.",
    ],
    sectors: ["Clinics and pharmacies", "Schools and nurseries", "Retail and services", "Restaurants", "Home services"],
    services: [WEB, SOCIAL, SOFT], nearby: ["al-nakheel", "al-hamra", "rakez"] },
];

// ---------------------------------------------------------------- Fujairah
const fujairah: AreaDef[] = [
  { slug: "fujairah-free-zone", name: "Fujairah Free Zone", emirate: "fujairah", type: "freezone", tier1: true,
    profile: [
      "Fujairah Free Zone, beside the Port of Fujairah on the Gulf of Oman, is built around bunkering, shipping, oil storage and trading — one of the world's largest bunkering hubs.",
      "Maritime trade and logistics shape the work: shipment and operations systems, supplier and customs portals, and automation across heavy shipping paperwork.",
    ],
    sectors: ["Bunkering and oil storage", "Shipping and maritime", "Trading and logistics", "Light manufacturing", "Port services"],
    services: [SOFT, WEB, AI, CRM], nearby: ["fujairah-city", "dibba-al-fujairah", "khor-fakkan"] },
  { slug: "fujairah-city", name: "Fujairah City", emirate: "fujairah", type: "city", tier1: true,
    profile: [
      "Fujairah City is the east-coast emirate's commercial centre, a compact mix of trading firms, government offices, clinics, retail and a growing tourism trade along the coast.",
      "Local and tourism businesses here are well served by bilingual websites, local SEO, and systems for the trading and port-services firms.",
    ],
    sectors: ["Trading and services", "Government-related", "Clinics and retail", "Tourism and hospitality", "Port and logistics"],
    services: [WEB, SOFT, SOCIAL], nearby: ["fujairah-free-zone", "dibba-al-fujairah", "khor-fakkan"] },
  { slug: "dibba-al-fujairah", name: "Dibba Al Fujairah", emirate: "fujairah", type: "city",
    profile: [
      "Dibba is a northern east-coast town known for diving, beaches and mountains, with a tourism, hospitality and fishing economy alongside local trading.",
      "Tourism and local trade lead, so websites, social content and local SEO that showcase the area's draw are the natural fit.",
    ],
    sectors: ["Diving and tourism", "Hospitality", "Fishing and marine", "Local retail", "Services"],
    services: [SOCIAL, WEB], nearby: ["fujairah-city", "khor-fakkan", "fujairah-free-zone"] },
];

// ---------------------------------------------------------------- Umm Al Quwain
const uaq: AreaDef[] = [
  { slug: "uaq-free-trade-zone", name: "UAQ Free Trade Zone", emirate: "umm-al-quwain", type: "freezone", tier1: true,
    profile: [
      "Umm Al Quwain Free Trade Zone is a small, low-cost free zone popular with startups, consultants, e-commerce sellers and micro-businesses that want a cheap UAE licence.",
      "Lean budgets call for lean tools: a simple website, straightforward online store or booking, and automation that keeps a one- or two-person business running.",
    ],
    sectors: ["Startups and consultants", "eCommerce and micro-businesses", "Trading", "Services", "Freelancers"],
    services: [WEB, SOFT, AI, SOCIAL], nearby: ["umm-al-quwain-city", "ajman-free-zone", "rakez"] },
  { slug: "umm-al-quwain-city", name: "Umm Al Quwain City", emirate: "umm-al-quwain", type: "city",
    profile: [
      "Umm Al Quwain City is the quiet centre of the UAE's least-populous emirate, with local trading, fishing, tourism and the services that support a small, settled community.",
      "Local businesses here are best served by clear websites, local SEO and social content, kept simple and affordable.",
    ],
    sectors: ["Local trading and retail", "Fishing and marine", "Tourism and leisure", "Services", "SMEs"],
    services: [WEB, SOCIAL], nearby: ["uaq-free-trade-zone", "ajman-free-zone", "al-nakheel"] },
];

// ---------------------------------------------------------------- Al Ain (Abu Dhabi emirate, own hub)
const alAin: AreaDef[] = [
  { slug: "al-ain-city", name: "Al Ain City", emirate: "al-ain", type: "city", tier1: true,
    profile: [
      "Al Ain, the UAE's Garden City inland near the Oman border, is a university town and agricultural, government and trading centre with a strong local-family business base.",
      "Trade is settled and relationship-led, well served by bilingual websites, local SEO and custom systems for the trading, agriculture and services firms.",
    ],
    sectors: ["Government and education", "Agriculture and trading", "Clinics and retail", "Tourism", "Services"],
    services: [WEB, SOFT, SOCIAL, CRM], nearby: ["al-jimi", "al-foah", "madinat-zayed"] },
  { slug: "al-jimi", name: "Al Jimi", emirate: "al-ain", type: "retail",
    profile: [
      "Al Jimi is a busy Al Ain district around one of the city's main malls, with retail, clinics, dining and the service businesses that serve surrounding residential neighbourhoods.",
      "Consumer trade leads, so local SEO, Google Business Profile, booking systems and social media bring the clearest enquiries.",
    ],
    sectors: ["Retail and malls", "Clinics and pharmacies", "Restaurants", "Services", "Education-adjacent"],
    services: [WEB, SOCIAL, SOFT], nearby: ["al-ain-city", "al-foah", "al-mutawaa"] },
  { slug: "al-foah", name: "Al Foah", emirate: "al-ain", type: "residential",
    profile: [
      "Al Foah is a residential and agricultural district of Al Ain known for its date farms and settled local community, with neighbourhood retail and services.",
      "Local and agricultural businesses here are best served by clear websites, local SEO and simple, practical systems.",
    ],
    sectors: ["Agriculture and dates", "Local retail", "Services", "Clinics", "Trading"],
    services: [WEB, SOFT, SOCIAL], nearby: ["al-ain-city", "al-jimi", "al-mutawaa"] },
  { slug: "al-mutawaa", name: "Al Mutawaa", emirate: "al-ain", type: "residential",
    profile: [
      "Al Mutawaa is a central Al Ain residential district with local retail strips, clinics and small service businesses serving nearby neighbourhoods.",
      "Reaching local residents is the goal, so local SEO, social media and booking-ready websites are the right tools.",
    ],
    sectors: ["Retail and services", "Clinics", "Restaurants", "Home services", "SMEs"],
    services: [WEB, SOCIAL, SOFT], nearby: ["al-jimi", "al-ain-city", "al-foah"] },
];

export const AREAS: AreaDef[] = [...dubai, ...abuDhabi, ...sharjah, ...ajman, ...rak, ...fujairah, ...uaq, ...alAin];

const areaBySlug = new Map(AREAS.map((a) => [a.slug, a]));
const areaName = (slug: string) => areaBySlug.get(slug)?.name ?? slug;
const REMOTE = "7CODE has no office in the UAE. Our team works from Lahore, one hour behind the UAE, and serves this area remotely, with a UAE WhatsApp line and calls in your working hours.";

// Service descriptions for the "what we do here" cards, reused from the city-service set.
const serviceLabel: Record<string, string> = {
  [SOFT]: "Custom software", [WEB]: "Websites & web apps", [SAAS]: "SaaS development",
  [AI]: "AI & automation", [SOCIAL]: "Social media management", [CRM]: "CRM development",
};

function hubCards(a: AreaDef): Item[] {
  // Two cards drawn from each of the area's top services, so the card set reflects what
  // that district actually needs rather than a fixed list.
  const cards: Item[] = [];
  for (const svc of a.services) {
    const s = SVC[svc];
    for (const c of s.cards.slice(0, 2)) cards.push(c);
    if (cards.length >= 6) break;
  }
  return cards.slice(0, 6);
}

function hubFaqs(a: AreaDef): Faq[] {
  const em = EMIRATE[a.emirate];
  const base: Faq[] = [
    { q: `Do you have an office in ${a.name}?`, a: `No. Our team is in Lahore and we serve ${a.name} and the rest of ${em.name} remotely, with a UAE WhatsApp line and calls in your working hours. Pakistan is one hour behind the UAE, so our days overlap almost entirely.` },
    { q: `How do you work with a business in ${a.name} without being there?`, a: `A discovery call in your hours, a fixed written quote, progress on a staging link you can watch, and launch on your own domains, hosting and accounts. Most of our UAE clients never need an in-person meeting; where one genuinely matters, we say so early.` },
  ];
  if (a.type === "freezone") base.push({ q: `Do you work with ${a.name} free-zone companies?`, a: `Yes. The free-zone licence affects your invoicing and company setup rather than how we build. We work with both free-zone and mainland companies across ${em.name}.` });
  if (a.services.includes(SOCIAL)) base.push({ q: `Can you post in Arabic for a ${a.name} audience?`, a: `Yes. Arabic captions are written or reviewed by a native speaker rather than machine-translated, because translated marketing copy reads as translated and customers notice.` });
  if (a.services.includes(SOFT) || a.services.includes(CRM)) base.push({ q: `Can the systems handle UAE VAT and e-invoicing?`, a: `Yes. We build invoicing so the data is structured and can be passed to an accredited e-invoicing provider ahead of the UAE's phased deadlines. Your accountant confirms the treatment.` });
  return base.slice(0, 5);
}

function hubLanding(a: AreaDef): Landing {
  const em = EMIRATE[a.emirate];
  const primary = serviceLabel[a.services[0]];
  const nearbyNames = a.nearby.map(areaName);
  return {
    path: `${em.hub}/${a.slug}`,
    kind: "area",
    name: a.name,
    line: `Websites, software, AI automation and social media for ${a.name} businesses, delivered remotely.`,
    crumbs: [{ name: "Locations", href: "/locations" }, { name: em.name, href: em.hub }],
    seoTitle: `Web & Software Development in ${a.name}, ${em.name}`.slice(0, 70),
    metaDescription:
      `Websites, custom software, AI automation and social media management for businesses in ${a.name}, ${em.name}: ${a.sectors.slice(0, 3).join(", ").toLowerCase()} and more. Fixed quotes, served remotely by 7CODE.`.slice(0, 200),
    h1: `Digital, web and software services for ${a.name} businesses`,
    serviceType: "Software development and digital services",
    areaServed: [a.name, em.name, "United Arab Emirates"],
    presence: REMOTE,
    contact: { topic: `a project in ${a.name}` },
    intro: [
      `${a.profile[0]} 7CODE builds and runs the digital side for businesses here — websites, custom software, AI automation and social media — remotely from Lahore, one hour behind the UAE.`,
      a.profile[1] ?? `We work with a fixed, itemised quote and leave the code, hosting and accounts in your own name.`,
    ],
    answer: {
      q: `Can 7CODE help a business in ${a.name}?`,
      a: `Yes. 7CODE serves ${a.name} and the rest of ${em.name} remotely from Lahore, building websites, custom software, SaaS products and AI automation and managing social media, with a UAE WhatsApp line, fixed quotes and work delivered on your own accounts.`,
    },
    sections: [
      { type: "cards", h: `What we build for ${a.name} businesses`, note: `The mix most ${a.name} businesses ask us for first.`, items: hubCards(a) },
      { type: "text", h: `${a.name} at a glance`, paras: a.profile },
      { type: "list", h: `Who we help in ${a.name}`, items: a.sectors },
      {
        type: "text",
        h: `Serving ${a.name} and nearby`,
        paras: [
          `Because we work remotely, there is no difference to us whether you are in ${a.name} or one of the districts around it such as ${nearbyNames.slice(0, 2).join(" or ")}. The work, the quote and the support are the same.`,
          REMOTE,
        ],
      },
      {
        type: "steps",
        h: "How a project runs",
        items: [
          { name: "Discovery call", body: `A video call in ${em.name} working hours to understand the business, goals and timeline.` },
          { name: "Fixed quote", body: "A written scope and an itemised, fixed price, in AED or USD." },
          { name: "Build and review", body: "Visible progress on a staging link, with regular check-ins." },
          { name: "Launch and support", body: "Go-live on your own accounts, with documentation and ongoing support." },
        ],
      },
    ],
    tools: [...new Set(a.services.flatMap((s) => SVC[s].tools))].slice(0, 8),
    faqs: hubFaqs(a),
    related: [
      em.hub,
      a.tier1 ? `${em.hub}/${a.slug}/${a.services[0]}` : em.hub,
      ...a.nearby.filter((n) => areaBySlug.has(n)).slice(0, 3).map((n) => { const na = areaBySlug.get(n)!; return `${EMIRATE[na.emirate].hub}/${na.slug}`; }),
    ].filter((p, i, arr) => arr.indexOf(p) === i),
  };
}

function serviceLanding(a: AreaDef, svc: keyof typeof SVC): Landing {
  const em = EMIRATE[a.emirate];
  const s = SVC[svc];
  const primary = s.name;
  return {
    path: `${em.hub}/${a.slug}/${svc}`,
    kind: "area-service",
    name: `${s.name} in ${a.name}`,
    line: `${s.name} for ${a.name} businesses, built and run remotely.`,
    crumbs: [{ name: "Locations", href: "/locations" }, { name: em.name, href: em.hub }, { name: a.name, href: `${em.hub}/${a.slug}` }],
    seoTitle: `${s.name} in ${a.name}, ${em.name} | 7CODE`.slice(0, 70),
    metaDescription:
      `${s.name} for businesses in ${a.name}, ${em.name}: built for ${a.sectors.slice(0, 2).join(" and ").toLowerCase()} and more, with fixed quotes and code you own. Delivered remotely by 7CODE.`.slice(0, 200),
    h1: `${s.name} for ${a.name} businesses`,
    serviceType: s.serviceType,
    areaServed: [a.name, em.name, "United Arab Emirates"],
    presence: REMOTE,
    contact: { service: s.contact, topic: `${s.name.toLowerCase()} in ${a.name}` },
    intro: [
      `${a.profile[0]}`,
      `For businesses like these, 7CODE delivers ${s.name.toLowerCase()} remotely from Lahore: a fixed, itemised quote, work you can watch on a staging link, and the result on your own accounts. There is no 7CODE office in ${a.name}; our day overlaps yours almost entirely.`,
    ],
    answer: {
      q: `How much does ${s.name.toLowerCase()} cost in ${a.name}?`,
      a: `It depends on scope — features, integrations and scale. A remote team usually costs considerably less than a ${em.name}-based agency for the same work. 7CODE quotes a fixed, itemised price after a discovery call, so you can phase it to fit your budget.`,
    },
    sections: [
      { type: "cards", h: "What's included", items: s.cards },
      {
        type: "text",
        h: `Built for ${a.name}`,
        paras: [
          a.profile[1] ?? a.profile[0],
          `That shapes the ${s.name.toLowerCase()} we build here: fit to how ${a.name} businesses actually operate, bilingual where it helps, and set up so you own and control everything from day one.`,
        ],
      },
      { type: "list", h: `Who we work with in ${a.name}`, items: a.sectors },
      {
        type: "steps",
        h: "How a project runs",
        items: [
          { name: "Discovery call", body: `A call in ${em.name} working hours to understand your goals.` },
          { name: "Fixed quote", body: "A written scope and an itemised, fixed price." },
          { name: "Build and review", body: "Regular progress on a staging link or content preview." },
          { name: "Launch and support", body: "Go-live on your accounts with ongoing support." },
        ],
      },
    ],
    tools: s.tools,
    faqs: [
      { q: `Do you have an office in ${a.name}?`, a: `No. Our team is in Lahore and we serve ${a.name} remotely, with a UAE WhatsApp line and calls in your working hours.` },
      { q: `Can you quote in AED?`, a: `Yes, in AED or USD. Payment terms are agreed in the contract.` },
      ...s.contact === "social-media"
        ? [{ q: `Can you work in Arabic?`, a: `Yes, with Arabic content written or reviewed by a native speaker.` }]
        : [{ q: `Who owns the code and accounts?`, a: `You do, from day one. Everything is built on your own repository, hosting and domains.` }],
      { q: `How do we start?`, a: `Send us a message on WhatsApp or through the contact form with a little about your ${a.name} business, and we'll set up a discovery call and a fixed quote.` },
    ],
    related: [`${em.hub}/${a.slug}`, em.hub, ...s.links.filter((l) => l.startsWith("/services") || l.startsWith("/technologies") || l.startsWith("/compare") || l.startsWith("/industries") || l.startsWith("/social-media-management") || l.startsWith("/ai-solutions"))].filter((p, i, arr) => arr.indexOf(p) === i).slice(0, 5),
  };
}

const hubs = AREAS.map(hubLanding);
const servicePages = AREAS.filter((a) => a.tier1).flatMap((a) => a.services.slice(0, 4).map((svc) => serviceLanding(a, svc)));

export const areaLandings: Landing[] = [...hubs, ...servicePages];

// ---- Emirate hubs for the three UAE emirates/cities not already covered elsewhere.
// Dubai and Abu Dhabi come from src/lib/locations.ts; Sharjah, Ajman and Ras Al Khaimah
// from src/lib/landings/places.ts. These three are generated from their own districts.
function emirateHub(key: EmirateKey, blurb: string, answer: string): Landing {
  const em = EMIRATE[key];
  const districts = AREAS.filter((a) => a.emirate === key);
  const sectors = [...new Set(districts.flatMap((d) => d.sectors))].slice(0, 8);
  return {
    path: em.hub,
    kind: "city",
    name: em.name,
    line: `Websites, software, AI automation and social media for ${em.name} businesses, delivered remotely.`,
    crumbs: [{ name: "Locations", href: "/locations" }],
    seoTitle: `Web & Software Development Company in ${em.name} | 7CODE`.slice(0, 70),
    metaDescription:
      `Websites, custom software, AI automation, SEO and social media management for businesses across ${em.name}, delivered remotely by 7CODE with fixed quotes and a UAE WhatsApp line.`.slice(0, 200),
    h1: `Software, web and digital services for ${em.name} businesses`,
    serviceType: "Software development and digital services",
    areaServed: [em.name, "United Arab Emirates"],
    presence: REMOTE,
    contact: { topic: `a project in ${em.name}` },
    intro: [
      `${blurb} 7CODE builds websites, custom software, SaaS products and AI automation for ${em.name} businesses and manages their social media, remotely from our team in Lahore.`,
      `Pakistan is one hour behind the UAE, so our working days overlap almost completely. We quote fixed and itemised, and leave the code, hosting and accounts in your name.`,
    ],
    answer: { q: `Does 7CODE serve ${em.name}?`, a: answer },
    sections: [
      {
        type: "cards",
        h: `Services for ${em.name} businesses`,
        items: [
          { name: "Software and SaaS", body: "Custom systems, CRMs, ERPs and SaaS products in Next.js, Laravel and Node.js." },
          { name: "Websites in English and Arabic", body: "Fast, bilingual websites with proper right-to-left layouts." },
          { name: "AI and n8n automation", body: "AI assistants, document processing and workflow automation." },
          { name: "Social media management", body: "Instagram, LinkedIn, TikTok and Facebook content for UAE audiences." },
          { name: "SEO for UAE searches", body: "Local SEO, area pages and content written for UAE buyers." },
          { name: "eCommerce", body: "Shopify and custom stores with UAE payment and delivery options." },
        ],
      },
      { type: "list", h: `Business districts and cities we cover in ${em.name}`, note: "Each has its own page.", items: districts.map((d) => d.name) },
      { type: "list", h: `Who we help in ${em.name}`, items: sectors },
      {
        type: "steps",
        h: "How we work with you remotely",
        items: [
          { name: "Discovery call", body: `A video call in ${em.name} working hours.` },
          { name: "Fixed quote", body: "A written scope and itemised, fixed price in AED or USD." },
          { name: "Visible progress", body: "A staging link from the first weeks and regular check-ins." },
          { name: "Launch on your accounts", body: "Domains, hosting and code under your ownership." },
        ],
      },
    ],
    faqs: [
      { q: `Do you have an office in ${em.name}?`, a: `No. Our team is in Lahore and we serve ${em.name} remotely, with a UAE WhatsApp number and calls in your working hours.` },
      { q: "Can you invoice in AED?", a: "We can quote in AED or USD. Payment details are agreed in the contract." },
      { q: "Do you build Arabic websites?", a: "Yes, with right-to-left layouts and Arabic content prepared by native speakers or provided by you." },
      { q: `Which ${em.name} areas do you cover?`, a: `All of them. Because we work remotely, every district and town in ${em.name} is served the same way; the pages above cover the main business areas.` },
    ],
    related: ["/locations/uae", ...districts.filter((d) => d.tier1).slice(0, 4).map((d) => `${em.hub}/${d.slug}`)],
  };
}

export const uaeEmirateHubs: Landing[] = [
  emirateHub("fujairah", "Fujairah, on the UAE's east coast, is built around one of the world's largest bunkering ports alongside a growing tourism trade.", "Yes. 7CODE serves Fujairah remotely from Lahore, building websites, software and automation for its port, trading, tourism and services businesses, with fixed quotes and a UAE WhatsApp line."),
  emirateHub("umm-al-quwain", "Umm Al Quwain is the UAE's smallest emirate, with a low-cost free zone popular among startups, consultants and e-commerce sellers.", "Yes. 7CODE serves Umm Al Quwain remotely from Lahore, building affordable websites, software and automation for its startups, free-zone companies and local businesses, with fixed quotes and a UAE WhatsApp line."),
  emirateHub("al-ain", "Al Ain, the UAE's inland Garden City, is a university, government and agricultural centre with a strong local-family business base.", "Yes. 7CODE serves Al Ain remotely from Lahore, building websites, software and automation for its trading, agriculture, education and services businesses, with fixed quotes and a UAE WhatsApp line."),
];
