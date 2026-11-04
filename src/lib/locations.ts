// Location pages. Each one is written for its own market — no shared template copy.
// Only Lahore is a physical base; UAE pages state clearly that service is remote.

export type Location = {
  slug: string;
  city: string;
  country: string;
  presence: "headquarters" | "remote";
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  presenceNote: string;
  areas: { label: string; items: string[] };
  needs: { name: string; body: string }[];
  services: string[]; // service slugs, most relevant first
  /** Service-in-city sections, each written for this market */
  cityServices: { service: string; h: string; body: string }[];
  industries: string[];
  work: string[]; // project slugs
  faqs: { q: string; a: string }[];
};

export const locations: Location[] = [
  {
    slug: "lahore",
    city: "Lahore",
    country: "Pakistan",
    presence: "headquarters",
    seoTitle: "Software House & Web Development Company in Lahore | 7CODE",
    metaDescription:
      "Lahore-based web development, software and SEO agency building websites, web apps, Shopify stores and search programmes for Pakistani businesses and exporters.",
    h1: "Software house and web development company in Lahore",
    intro: [
      "Lahore is home. 7CODE's team works from here, building websites, software and stores for businesses across Punjab and for clients abroad.",
      "For Lahore businesses that means working with a team in your own city and time zone, with the same senior engineering we deliver to clients in the UAE and UK.",
    ],
    presenceNote: "Our headquarters. In-person meetings in Lahore can be arranged.",
    areas: {
      label: "Serving businesses across Lahore",
      items: ["Gulberg", "DHA", "Johar Town", "Model Town", "Bahria Town", "Arfa Software Technology Park", "Township", "Lahore Cantt"],
    },
    needs: [
      { name: "Exporters selling abroad", body: "Textile, apparel and sports-goods manufacturers in Lahore, Faisalabad and Sialkot need B2B sites that overseas buyers trust, with catalogues and quote requests rather than local-only checkout." },
      { name: "Local businesses moving online", body: "Clinics, schools, restaurants and retailers that still rely on Facebook pages need a proper website, Google Business presence and enquiries that land on WhatsApp." },
      { name: "Startups building products", body: "Founders in Lahore's tech scene need a first version built properly — data model, APIs and interface — by someone who can carry it through to scale." },
      { name: "Search in Urdu and English", body: "Customers search in both languages and in Roman Urdu. Local SEO here means writing for how people actually type, not just translated keywords." },
    ],
    services: ["web-development", "ecommerce", "seo-aeo-geo", "branding-ui-ux", "mobile-apps"],
    cityServices: [
      { service: "web-development", h: "Software development company in Lahore", body: "Custom web applications, SaaS platforms and APIs in Laravel, Next.js and Node.js, led by a senior engineer with 6+ years of production experience." },
      { service: "web-development", h: "Website design and development in Lahore", body: "Fast, mobile-first business websites for Lahore companies, built to bring enquiries straight to WhatsApp and your inbox." },
      { service: "seo-aeo-geo", h: "SEO services in Lahore", body: "Google Business Profile optimisation, local pages and content written for how Lahore customers search — in English, Urdu and Roman Urdu." },
      { service: "ecommerce", h: "eCommerce and Shopify development in Lahore", body: "Shopify and WooCommerce stores for local brands, and B2B catalogues with quote requests for exporters selling abroad." },
    ],
    industries: ["Textile & apparel exporters", "Education", "Healthcare & clinics", "Real estate", "Retail", "Startups & SaaS"],
    work: ["muhseeq", "av-leads", "logistivo"],
    faqs: [
      { q: "Is 7CODE based in Lahore?", a: "Yes. Lahore is our headquarters, and our team works from here." },
      { q: "Can we meet in person in Lahore?", a: "Yes. For Lahore clients we can arrange in-person meetings, alongside calls and WhatsApp." },
      { q: "Do you build websites for Pakistani exporters?", a: "Yes. We've built a B2B catalogue and quotation site for an apparel manufacturer in Faisalabad, designed for international buyers." },
      { q: "Do you do local SEO for Lahore businesses?", a: "Yes, including Google Business Profile optimisation, location pages and content written for how Lahore customers search, in English, Urdu and Roman Urdu." },
    ],
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    presence: "remote",
    seoTitle: "Web Development Company in Dubai | Web Design, SEO & Apps — 7CODE",
    metaDescription:
      "Websites, web apps, Shopify stores, SEO and digital marketing for Dubai businesses, delivered remotely by 7CODE with a UAE WhatsApp line and Gulf-hours availability.",
    h1: "Web development company for Dubai businesses",
    intro: [
      "Dubai businesses compete with international brands from day one. Your website has to be fast, bilingual-ready and convincing to buyers who compare five suppliers before calling one.",
      "7CODE builds and grows websites, platforms and stores for UAE companies remotely from Lahore. We have no Dubai office; we work in your hours on a UAE WhatsApp number, one hour behind Gulf time.",
    ],
    presenceNote: "Served remotely from Lahore. UAE WhatsApp line; Pakistan time is one hour ahead of the UAE.",
    areas: {
      label: "Search targeting for Dubai districts and free zones",
      items: ["Business Bay", "Downtown Dubai", "DIFC", "JLT", "Dubai Marina", "Deira", "Al Quoz", "Jebel Ali", "Dubai South", "Dubai Silicon Oasis"],
    },
    needs: [
      { name: "Free zone and mainland companies", body: "New companies need a credible website quickly, with the right services, licence-appropriate claims and contact routes that work on WhatsApp first." },
      { name: "eCommerce for the UAE", body: "Shopify and custom stores with UAE delivery, AED pricing, VAT-ready setup and the speed buyers expect on mobile." },
      { name: "English and Arabic", body: "Layouts that work in both directions, so adding Arabic later doesn't mean rebuilding the site." },
      { name: "Competitive search", body: "Dubai keywords are expensive. Ranking takes district-level pages and content worth reading, plus Google Ads while SEO builds." },
    ],
    services: ["web-development", "ecommerce", "seo-aeo-geo", "performance-marketing", "social-media", "ai-automation"],
    cityServices: [
      { service: "web-development", h: "Web design and development in Dubai", body: "Custom Next.js and Laravel websites and web apps for Dubai companies — mobile-first, ready for English and Arabic, with WhatsApp-first contact." },
      { service: "seo-aeo-geo", h: "SEO services in Dubai", body: "Technical SEO, district-level pages for areas like Business Bay, JLT and Al Quoz, and AI-search optimisation so Google's AI Overviews and ChatGPT describe you correctly." },
      { service: "ecommerce", h: "Shopify and eCommerce development in Dubai", body: "Shopify and custom stores with AED pricing, VAT-ready setup, UAE delivery options and product pages tuned for mobile speed." },
      { service: "mobile-apps", h: "Mobile app development in Dubai", body: "iOS and Android apps from one React Native or Flutter codebase, sharing one backend with your website and admin panel." },
      { service: "performance-marketing", h: "Google Ads and digital marketing in Dubai", body: "Google and Meta campaigns with conversion tracking set up first, sending traffic to landing pages built for each campaign." },
    ],
    industries: ["Logistics & freight", "Real estate", "eCommerce & retail", "Construction & contracting", "Hospitality", "Professional services"],
    work: ["ferry-global", "maxtgc", "seven-lift"],
    faqs: [
      { q: "Do you have an office in Dubai?", a: "No. We serve Dubai clients remotely from Lahore, Pakistan. You reach us on a UAE WhatsApp number, and our working day overlaps almost entirely with yours." },
      { q: "Have you worked with UAE companies?", a: "Yes. Our UAE work includes Seven Lift and Ferry Global Logistics in Abu Dhabi and Maxtgc, a UAE heavy equipment company. Ferry Global's site targets all seven emirates, including Dubai." },
      { q: "Can you build Arabic websites?", a: "Yes. We build layouts that support right-to-left Arabic alongside English, so both languages look right." },
      { q: "Can you help my Dubai business rank on Google?", a: "Yes. We research what your competitors rank for, fix technical issues and build pages for the districts and services your customers search. Results take time in a competitive market, and we report on them clearly." },
    ],
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    presence: "remote",
    seoTitle: "Web Design & Development Company in Abu Dhabi | SEO — 7CODE",
    metaDescription:
      "Websites and local SEO for Abu Dhabi companies in heavy equipment, logistics and contracting — from Mussafah and MBZ City to KIZAD — delivered remotely by 7CODE.",
    h1: "Web design and development company for Abu Dhabi",
    intro: [
      "Much of our UAE work is in Abu Dhabi. We've built websites and local search programmes for a crane hire company and a logistics firm based in the capital, so we know how industrial buyers here find suppliers.",
      "We work remotely from Lahore, with no Abu Dhabi office. You get a UAE WhatsApp line, working hours that match yours and the same senior team throughout.",
    ],
    presenceNote: "Served remotely from Lahore. UAE WhatsApp line; Pakistan time is one hour ahead of the UAE.",
    areas: {
      label: "Abu Dhabi districts and zones we target in search",
      items: ["Mussafah", "Mohamed Bin Zayed City", "KIZAD", "ICAD", "Khalifa City", "Al Reem Island", "Yas Island", "Saadiyat Island", "Al Ain", "Ruwais"],
    },
    needs: [
      { name: "Industrial and equipment suppliers", body: "Crane hire, equipment rental and transport companies win work from fast searches by site managers. They need call and WhatsApp on every screen and pages for each industrial zone." },
      { name: "Logistics across the emirates", body: "Firms run from one Abu Dhabi base but serve all seven emirates. Their sites need emirate-level coverage without claiming branches that don't exist." },
      { name: "Island and new-district projects", body: "Construction on Al Reem, Yas and Saadiyat creates searches tied to those islands. Generic 'Abu Dhabi' pages miss them." },
      { name: "Tender-ready credibility", body: "Procurement teams check licences, fleets and service lists. Clear, accurate company information wins trust before the first call." },
    ],
    services: ["seo-aeo-geo", "web-development", "performance-marketing", "branding-ui-ux", "ai-automation"],
    cityServices: [
      { service: "web-development", h: "Web design and development in Abu Dhabi", body: "Lead-focused websites for industrial, logistics and contracting companies, with call and WhatsApp on every screen, fleet and service pages, and company details procurement teams can verify." },
      { service: "seo-aeo-geo", h: "SEO services in Abu Dhabi", body: "Separate, genuinely local pages for areas like Mussafah, MBZ City, KIZAD, Al Reem, Yas and Saadiyat — the approach behind our Seven Lift work." },
      { service: "web-development", h: "Websites for logistics and equipment companies", body: "Service structures that present freight, warehousing, customs and equipment hire clearly, with emirate-wide search coverage from a single Abu Dhabi base." },
      { service: "performance-marketing", h: "Google Ads in Abu Dhabi", body: "Search campaigns for urgent, high-intent searches like equipment hire and transport, running while organic rankings build." },
    ],
    industries: ["Heavy equipment & cranes", "Logistics & freight", "Construction & contracting", "Oil & gas services", "Industrial supply", "Real estate"],
    work: ["seven-lift", "ferry-global", "maxtgc"],
    faqs: [
      { q: "Have you worked with Abu Dhabi companies?", a: "Yes. We built the website and local SEO for Seven Lift, a crane and equipment hire company in Abu Dhabi, and the website for Ferry Global Logistics, based in MBZ City." },
      { q: "Do you have an office in Abu Dhabi?", a: "No. We work remotely from Lahore, Pakistan, with a UAE WhatsApp number and hours that overlap with yours." },
      { q: "Can you target areas like Mussafah, KIZAD or Al Reem Island?", a: "Yes. We write separate, genuinely local pages for the districts and industrial zones your customers search, each with its own content, FAQs and schema." },
      { q: "How do you avoid duplicate location pages?", a: "Every location page gets its own title, description, heading, content, FAQs, internal links and structured data. We never mass-generate near-identical city pages." },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
