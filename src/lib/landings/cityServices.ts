import type { Faq, Item, Landing } from "./types";
import { uaeDepth } from "./uaeDepth";

// City × service pages. Each one has its own local copy (intro, answer, local section,
// FAQs). The "what's included" cards come from the service template below.

export type Svc = { name: string; serviceType: string; contact: string; cards: Item[]; tools: string[]; links: string[] };

export const SVC: Record<string, Svc> = {
  "software-development": {
    name: "Software development",
    serviceType: "Custom software development",
    contact: "web-development",
    cards: [
      { name: "Custom business systems", body: "Operations tools, portals and workflows built around how your team works." },
      { name: "Web applications", body: "Dashboards, booking systems and customer portals in Next.js and Laravel." },
      { name: "CRM and ERP", body: "Sales, inventory, orders and invoicing in one system you own." },
      { name: "APIs and integrations", body: "Payment gateways, accounting, WhatsApp and other tools connected." },
    ],
    tools: ["Next.js", "React", "Laravel", "Node.js", "Python", "PostgreSQL", "MySQL"],
    links: ["/services/custom-software-development", "/services/crm-development", "/services/erp-development"],
  },
  "saas-development": {
    name: "SaaS development",
    serviceType: "SaaS development",
    contact: "web-development",
    cards: [
      { name: "MVP builds", body: "The smallest product that proves demand, built to grow." },
      { name: "Subscriptions and billing", body: "Plans, trials and invoicing with Stripe or regional gateways." },
      { name: "Multi-tenant architecture", body: "Each customer's data separated and secure." },
      { name: "Admin and analytics", body: "Support tools and usage and revenue reporting." },
    ],
    tools: ["Next.js", "TypeScript", "Laravel", "NestJS", "PostgreSQL", "Stripe", "Vercel"],
    links: ["/services/saas-development", "/services/mvp-development", "/compare/laravel-vs-nodejs-for-saas"],
  },
  "ai-automation": {
    name: "AI automation",
    serviceType: "AI automation",
    contact: "ai-automation",
    cards: [
      { name: "AI chatbots", body: "Website and WhatsApp assistants that answer from your own information." },
      { name: "Document processing", body: "Invoices, forms and contracts turned into structured data." },
      { name: "n8n workflows", body: "Apps connected so leads, orders and reports move automatically." },
      { name: "AI agents", body: "Multi-step research and admin tasks prepared for human approval." },
    ],
    tools: ["n8n", "Python", "OpenAI API", "Anthropic Claude", "WhatsApp Business Platform"],
    links: ["/services/ai-automation", "/ai-solutions/n8n-automation", "/ai-solutions/ai-chatbot-development"],
  },
  "social-media-management": {
    name: "Social media management",
    serviceType: "Social media management",
    contact: "social-media",
    cards: [
      { name: "Content calendar", body: "A month of posts planned around your offers and audience." },
      { name: "Design and Reels", body: "On-brand posts, carousels and short videos." },
      { name: "Publishing and replies", body: "Scheduled posting and quick responses to comments and DMs." },
      { name: "Monthly reporting", body: "What worked, what didn't and next month's plan." },
    ],
    tools: ["Instagram", "Facebook", "LinkedIn", "TikTok", "Meta Business Suite", "Adobe Premiere Pro"],
    links: ["/services/social-media", "/social-media-management/instagram", "/social-media-management/reels-production"],
  },
  "crm-development": {
    name: "CRM development",
    serviceType: "CRM development",
    contact: "web-development",
    cards: [
      { name: "Lead capture", body: "Website, portal and WhatsApp leads in one pipeline." },
      { name: "Pipelines and follow-ups", body: "Stages and reminders that match how you sell." },
      { name: "Quotations", body: "Branded quotes generated and tracked from the CRM." },
      { name: "Reports", body: "Conversion by source, salesperson and month." },
    ],
    tools: ["Laravel", "Next.js", "PostgreSQL", "WhatsApp Business Platform", "n8n"],
    links: ["/services/crm-development", "/compare/custom-crm-vs-ready-made-crm", "/industries/real-estate-software"],
  },
  "web-development": {
    name: "Web development",
    serviceType: "Web development",
    contact: "web-development",
    cards: [
      { name: "Business websites", body: "Fast, mobile-first sites with WhatsApp and call on every page." },
      { name: "Web applications", body: "Portals, dashboards and booking systems." },
      { name: "eCommerce", body: "Shopify and custom stores with local payments." },
      { name: "SEO built in", body: "Structured data, metadata and clean URLs from day one." },
    ],
    tools: ["Next.js", "React", "Laravel", "Shopify", "WordPress"],
    links: ["/services/web-development", "/technologies/nextjs-development", "/services/seo-aeo-geo"],
  },
};

type City = { name: string; href: string; country: { name: string; href: string }; presence: string; area: string[] };
const UAE = { name: "UAE", href: "/locations/uae" };
const OMAN = { name: "Oman", href: "/locations/oman" };
const PK = { name: "Pakistan", href: "/locations/pakistan" };
const REMOTE_UAE = "Our team works from Lahore and serves the UAE remotely, with a UAE WhatsApp line and calls in your working hours.";
const CITY: Record<string, City> = {
  dubai: { name: "Dubai", href: "/locations/dubai", country: UAE, presence: REMOTE_UAE, area: ["Dubai", "United Arab Emirates"] },
  "abu-dhabi": { name: "Abu Dhabi", href: "/locations/abu-dhabi", country: UAE, presence: REMOTE_UAE, area: ["Abu Dhabi", "United Arab Emirates"] },
  sharjah: { name: "Sharjah", href: "/locations/sharjah", country: UAE, presence: REMOTE_UAE, area: ["Sharjah", "United Arab Emirates"] },
  muscat: { name: "Muscat", href: "/locations/muscat", country: OMAN, presence: "Our team works from Lahore, one hour ahead of Muscat, and serves Oman remotely.", area: ["Muscat", "Oman"] },
  lahore: { name: "Lahore", href: "/locations/lahore", country: PK, presence: "Lahore is our headquarters. In-person meetings can be arranged.", area: ["Lahore", "Pakistan"] },
  faisalabad: { name: "Faisalabad", href: "/locations/faisalabad", country: PK, presence: "Our team is in Lahore, close to Faisalabad. Meetings can be arranged for larger projects.", area: ["Faisalabad", "Pakistan"] },
  karachi: { name: "Karachi", href: "/locations/karachi", country: PK, presence: "Our team is in Lahore and serves Karachi by call, video and WhatsApp.", area: ["Karachi", "Pakistan"] },
  islamabad: { name: "Islamabad", href: "/locations/islamabad", country: PK, presence: "Our team is in Lahore and serves Islamabad and Rawalpindi by call, video and WhatsApp.", area: ["Islamabad", "Rawalpindi", "Pakistan"] },
};

type Combo = {
  city: string;
  svc: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  answer: { q: string; a: string };
  local: { h: string; paras: string[] };
  forWho: string[];
  faqs: Faq[];
  work?: string[];
};

const combos: Combo[] = [
  {
    city: "dubai",
    svc: "software-development",
    seoTitle: "Software Development Company in Dubai | Custom Software",
    metaDescription:
      "Custom software development for Dubai businesses: web apps, CRMs, ERPs, portals and integrations built in Next.js and Laravel, with fixed quotes and code you own. Served remotely.",
    h1: "Software development company for Dubai businesses",
    intro: [
      "Dubai companies move fast, and the tools they start with rarely keep up. When work is spread across spreadsheets, WhatsApp groups and several subscriptions, custom software brings it into one system built around how your team operates.",
      "We build custom software for Dubai businesses remotely from Lahore, one hour ahead, with a fixed, itemised quote and the code, hosting and data on your own accounts.",
    ],
    answer: {
      q: "How much does custom software cost in Dubai?",
      a: "Costs vary with the number of features, user roles and integrations. Remote teams usually cost considerably less than Dubai-based agencies for the same scope. 7CODE quotes a fixed, itemised price after a discovery call, so you can phase features to fit your budget.",
    },
    local: {
      h: "Built for how Dubai businesses work",
      paras: [
        "Dubai businesses sell through WhatsApp, deal with customers in several languages and often trade across the GCC. We design systems that log WhatsApp conversations, support Arabic where needed, handle AED and other currencies, and take UAE VAT into account in invoicing.",
        "We work with mainland and free-zone companies, from trading and logistics firms in Jebel Ali and Al Quoz to startups in Dubai Internet City and DIFC-area service businesses.",
      ],
    },
    forWho: ["Trading and distribution companies", "Real estate agencies and developers", "Logistics and freight forwarders", "Startups building their first product", "Service businesses replacing spreadsheets"],
    faqs: [
      { q: "Do you have an office in Dubai?", a: "No. Our team is in Lahore and we serve Dubai clients remotely, with a UAE WhatsApp line and calls in Dubai working hours." },
      { q: "Can the software handle UAE VAT?", a: "Yes. We build invoicing with VAT settings appropriate to your business; your accountant should confirm the treatment." },
      { q: "Can you work with our Dubai-based team?", a: "Yes. We join your calls and tools, and Pakistan is only one hour ahead of Dubai." },
    ],
    work: ["seven-lift", "maxtgc"],
  },
  {
    city: "dubai",
    svc: "saas-development",
    seoTitle: "SaaS Development Company in Dubai | Build Your SaaS Product",
    metaDescription:
      "SaaS development for Dubai founders and companies: MVPs, multi-tenant platforms, subscriptions and billing, Arabic support and GCC payment options, built in Next.js, Laravel and Node.js.",
    h1: "SaaS development for Dubai founders",
    intro: [
      "Dubai's startup ecosystem, from Dubai Internet City to the many accelerators across the emirate, produces a steady stream of SaaS ideas. Turning one into a product that signs up and bills customers reliably takes more than a prototype.",
      "We build SaaS MVPs and platforms for Dubai founders with the foundations in place from day one: tenancy, authentication, billing and analytics.",
    ],
    answer: {
      q: "How do I build a SaaS startup in Dubai?",
      a: "Validate the problem with target customers, scope a focused MVP, choose a stack that can scale, set up subscription billing that works for GCC customers, and launch to a small group before expanding. Company setup and licensing are handled separately through a free zone or mainland authority.",
    },
    local: {
      h: "SaaS for GCC customers",
      paras: [
        "SaaS products sold in the Gulf often need Arabic and English interfaces, pricing in AED or USD, and payment options beyond international cards. We plan those requirements into the first release so you don't rebuild later.",
        "Many Dubai founders also sell to Saudi Arabia, where data-hosting requirements can apply. We design the architecture so data can be hosted in the region if needed.",
      ],
    },
    forWho: ["First-time founders with a validated idea", "Companies turning internal tools into products", "Startups in Dubai free zones", "Teams replacing a no-code prototype"],
    faqs: [
      { q: "Can my SaaS support Arabic?", a: "Yes, with right-to-left layouts and translated interfaces." },
      { q: "Which payment gateway should I use in the UAE?", a: "Stripe is available in the UAE and works well for subscriptions; we also integrate regional gateways where your customers need them." },
      { q: "Will you sign an NDA?", a: "Yes, before you share product details." },
    ],
    work: ["av-leads", "igivu"],
  },
  {
    city: "dubai",
    svc: "ai-automation",
    seoTitle: "AI Automation Agency in Dubai | Chatbots, Agents & n8n",
    metaDescription:
      "AI automation for Dubai businesses: Arabic and English chatbots, WhatsApp assistants, document processing, AI agents and n8n workflows that save staff time, with data handled carefully.",
    h1: "AI automation for Dubai businesses",
    intro: [
      "Dubai businesses handle huge volumes of enquiries, documents and follow-ups, much of it in two languages. AI automation answers routine questions instantly, reads documents and moves data between systems so your team can focus on customers.",
      "We build AI chatbots, agents and n8n workflows for Dubai companies, with clear limits on what the AI does and human review where it matters.",
    ],
    answer: {
      q: "What can AI automate for a Dubai business?",
      a: "Common uses include answering customer questions on the website and WhatsApp in Arabic and English, qualifying and routing leads, extracting data from invoices and documents, drafting quotations and follow-ups, and producing reports from several systems.",
    },
    local: {
      h: "AI for a bilingual, WhatsApp-first market",
      paras: [
        "In Dubai, customers expect quick answers on WhatsApp, often in Arabic. We build assistants that reply in the customer's language, answer only from your approved information and hand over to a person with the conversation history.",
        "We design data handling with the UAE Personal Data Protection Law in mind, sending only what a task needs to the AI service and keeping records on infrastructure you control.",
      ],
    },
    forWho: ["Real estate agencies handling high lead volumes", "Clinics and service businesses with repetitive questions", "Trading companies processing many documents", "Customer support teams"],
    faqs: [
      { q: "Can the chatbot answer in Arabic?", a: "Yes, and we test it with real Arabic questions before launch." },
      { q: "Does it work on WhatsApp?", a: "Yes, through the WhatsApp Business Platform." },
      { q: "Is our data safe?", a: "We use business-tier AI APIs, minimise what's sent and log every interaction. We explain exactly where data goes before we start." },
    ],
  },
  {
    city: "dubai",
    svc: "social-media-management",
    seoTitle: "Social Media Management in Dubai | Instagram, TikTok & LinkedIn",
    metaDescription:
      "Social media management for Dubai businesses: content calendars, post design, Reels, captions, publishing, community replies and reporting on Instagram, TikTok, LinkedIn and Facebook.",
    h1: "Social media management for Dubai businesses",
    intro: [
      "In Dubai, customers check your Instagram before they message you. A feed that's active, polished and consistent signals a business worth trusting in one of the most competitive markets in the world.",
      "We manage social media for Dubai businesses: planning, design, Reels, captions, publishing, replies and monthly reporting.",
    ],
    answer: {
      q: "What does social media management cost in Dubai?",
      a: "Prices depend on the number of platforms, posts and videos per month and whether community management is included. Remote agencies are generally more affordable than Dubai-based ones. We offer fixed monthly packages after understanding your goals.",
    },
    local: {
      h: "Content for Dubai audiences",
      paras: [
        "Dubai audiences are international, mobile-first and used to high production standards. We plan content around the city's calendar, including Ramadan, Eid, the winter tourist season and major events, and adapt tone for English and Arabic speakers.",
        "For B2B companies we focus on LinkedIn; for hospitality, beauty, real estate and retail, Instagram and TikTok lead.",
      ],
    },
    forWho: ["Restaurants, cafés and hospitality", "Real estate agents and developers", "Beauty, fashion and lifestyle brands", "B2B companies building trust on LinkedIn"],
    faqs: [
      { q: "Can you post in Arabic?", a: "Yes, with Arabic captions and designs prepared or reviewed by native speakers." },
      { q: "Do you plan Ramadan campaigns?", a: "Yes, we plan seasonal content and offers well ahead of key dates." },
      { q: "Do you run ads too?", a: "Yes, through our performance marketing service." },
    ],
  },
  {
    city: "dubai",
    svc: "crm-development",
    seoTitle: "Custom CRM Development in Dubai | CRM for Your Sales Team",
    metaDescription:
      "Custom CRM development for Dubai sales teams: leads from portals, website and WhatsApp in one pipeline, quotations, follow-ups and reporting, without per-user subscription fees.",
    h1: "Custom CRM development for Dubai businesses",
    intro: [
      "Dubai sales teams juggle leads from portals, websites, Instagram and WhatsApp, and too many fall through the gaps. A custom CRM brings every lead into one pipeline, assigns it instantly and reminds your team to follow up.",
      "We build CRMs for Dubai businesses that match their sales process exactly, without paying per seat for features nobody uses.",
    ],
    answer: {
      q: "Should a Dubai business build a custom CRM or use HubSpot or Zoho?",
      a: "Use a ready-made CRM if your process is standard and the team is small. A custom CRM makes sense when most sales happen on WhatsApp, when you need quotations, inventory or jobs in the same system, or when per-user subscription costs have become significant.",
    },
    local: {
      h: "CRMs for Dubai sales teams",
      paras: [
        "Real estate agencies need portal leads routed within minutes; trading companies need quotations and repeat-order tracking; service businesses need jobs scheduled after the sale. We build the CRM around whichever of these drives your revenue.",
        "WhatsApp is central in Dubai, so we connect it through the WhatsApp Business Platform so conversations stay with the company, not on agents' personal phones.",
      ],
    },
    forWho: ["Real estate brokerages", "Trading and distribution companies", "Car rental and service businesses", "B2B service providers"],
    faqs: [
      { q: "Can portal leads go straight into the CRM?", a: "Where portals provide lead emails, webhooks or APIs, yes, they can be captured and assigned automatically." },
      { q: "Can we keep using WhatsApp?", a: "Yes. The CRM connects to the WhatsApp Business Platform so conversations are logged." },
      { q: "How long does it take?", a: "A focused pipeline-and-quotation CRM can be live in weeks." },
    ],
  },
  {
    city: "abu-dhabi",
    svc: "software-development",
    seoTitle: "Software Development Company in Abu Dhabi | Custom Systems",
    metaDescription:
      "Custom software development for Abu Dhabi businesses: operations systems, portals, CRMs and integrations for logistics, industrial and service companies. Remote team, fixed quotes.",
    h1: "Software development for Abu Dhabi businesses",
    intro: [
      "Abu Dhabi's economy leans on logistics, industry, energy services and companies that supply larger organisations. These businesses need systems that handle documentation, approvals and reporting properly.",
      "We build custom software for Abu Dhabi companies remotely from Lahore. Our Abu Dhabi work includes the Ferry Global Logistics website in Mohamed Bin Zayed City.",
    ],
    answer: {
      q: "What custom software do Abu Dhabi logistics and industrial companies need?",
      a: "Typically job and dispatch tracking, quotation and approval workflows, document management for certificates and permits, equipment and maintenance records, and dashboards that summarise operations for management.",
    },
    local: {
      h: "Built for Abu Dhabi's operating companies",
      paras: [
        "Many Abu Dhabi businesses serve larger contractors and must provide documentation, certificates and reports on request. We build systems that store and produce those documents quickly, with clear audit trails.",
        "We work with companies in Mussafah, ICAD, KEZAD, Khalifa Port and Mohamed Bin Zayed City, as well as service businesses across the city.",
      ],
    },
    forWho: ["Logistics and freight companies", "Industrial and equipment-hire firms", "Contractors and subcontractors", "Service companies supplying larger organisations"],
    faqs: [
      { q: "Have you worked with Abu Dhabi companies?", a: "Yes, including Ferry Global Logistics in Mohamed Bin Zayed City." },
      { q: "Do you have an office in Abu Dhabi?", a: "No, we serve Abu Dhabi remotely from Lahore." },
      { q: "Can the system produce compliance documents?", a: "Yes, we can generate reports and documents from your data in required formats." },
    ],
    work: ["ferry-global", "logistivo"],
  },
  {
    city: "abu-dhabi",
    svc: "ai-automation",
    seoTitle: "AI Development & Automation in Abu Dhabi",
    metaDescription:
      "AI development and automation for Abu Dhabi businesses: document processing, AI assistants, agents and n8n workflows for logistics, industrial and service companies, with careful data handling.",
    h1: "AI development and automation for Abu Dhabi",
    intro: [
      "Abu Dhabi has made AI a national priority, and businesses of every size are looking for practical ways to use it. The fastest returns usually come from automating document-heavy and repetitive work.",
      "We build AI assistants, document processing and automated workflows for Abu Dhabi companies, starting with a measured prototype on your own data.",
    ],
    answer: {
      q: "Where should an Abu Dhabi business start with AI?",
      a: "Start with a frequent, time-consuming task that has clear inputs, such as processing invoices, answering repetitive enquiries or compiling weekly reports. Prototype it on real data, measure accuracy and time saved, then expand.",
    },
    local: {
      h: "Practical AI for operating businesses",
      paras: [
        "For logistics and industrial companies, document processing often pays back fastest: delivery notes, invoices, certificates and permits read automatically and checked before entering your systems.",
        "For service businesses, AI assistants answering in Arabic and English reduce response times without adding staff. Every project includes logging and human review for important decisions.",
      ],
    },
    forWho: ["Logistics and freight forwarders", "Industrial and equipment companies", "Professional services firms", "Customer-facing service businesses"],
    faqs: [
      { q: "Can AI read our delivery notes and invoices?", a: "Yes. We test accuracy on a sample of your documents before building the full workflow." },
      { q: "Can AI data stay in the UAE?", a: "Options include UAE cloud regions and self-hosted models for sensitive data. We'll compare them with you." },
      { q: "How quickly can we see results?", a: "A prototype on your data usually takes days to a few weeks." },
    ],
  },
  {
    city: "abu-dhabi",
    svc: "social-media-management",
    seoTitle: "Social Media Management in Abu Dhabi | Content & Reels",
    metaDescription:
      "Social media management for Abu Dhabi businesses: LinkedIn for B2B, Instagram and TikTok for consumer brands, with content calendars, design, Reels, publishing and monthly reports.",
    h1: "Social media management for Abu Dhabi businesses",
    intro: [
      "Abu Dhabi businesses range from B2B suppliers who need credibility on LinkedIn to restaurants and retailers competing for attention on Instagram. Each needs a different approach.",
      "We plan, create and publish social media content for Abu Dhabi companies, and report on what's working every month.",
    ],
    answer: {
      q: "Which social media platforms matter for Abu Dhabi businesses?",
      a: "LinkedIn matters most for B2B, industrial and professional services companies. Instagram and TikTok lead for hospitality, retail, beauty and real estate. Facebook remains useful for community reach and advertising.",
    },
    local: {
      h: "Content for Abu Dhabi audiences",
      paras: [
        "Abu Dhabi audiences tend to value professionalism and cultural awareness. We plan content around national days, Ramadan and local events, and adapt tone for Arabic and English speakers.",
        "For B2B clients, we turn projects, certifications and team expertise into LinkedIn content that procurement teams notice.",
      ],
    },
    forWho: ["B2B and industrial companies", "Restaurants and hospitality", "Retail and lifestyle brands", "Real estate"],
    faqs: [
      { q: "Can you create LinkedIn content for our company?", a: "Yes, including case studies, project updates and founder posts." },
      { q: "Do you post in Arabic?", a: "Yes, when your audience needs it." },
      { q: "How do we approve content?", a: "We send each month's content in one batch for approval." },
    ],
  },
  {
    city: "sharjah",
    svc: "software-development",
    seoTitle: "Software Development Company for Sharjah Businesses",
    metaDescription:
      "Custom software for Sharjah manufacturers, traders and schools: inventory, orders, production tracking, admissions portals and integrations, built remotely by 7CODE with fixed quotes.",
    h1: "Software development for Sharjah businesses",
    intro: [
      "Sharjah's manufacturers, traders and education providers often run on long-established processes held together by spreadsheets. Custom software can keep what works and remove the manual effort.",
      "We build inventory, order, production and portal systems for Sharjah companies, delivered remotely with a fixed, itemised quote.",
    ],
    answer: {
      q: "What software do Sharjah manufacturers need?",
      a: "Most need inventory and raw-material tracking, production planning, sales orders and invoicing, and reporting. Many also benefit from a B2B catalogue where GCC buyers can request quotes.",
    },
    local: {
      h: "Systems for Sharjah's industrial and trading base",
      paras: [
        "Companies in Sharjah Industrial Area and SAIF Zone often trade across the GCC and beyond. We build systems that handle multiple currencies, export documentation and repeat B2B orders.",
        "For Sharjah's many schools and education providers, we build admissions and fee portals that reduce paperwork for staff and parents.",
      ],
    },
    forWho: ["Manufacturers and factories", "Trading and distribution companies", "Schools and education providers", "Family businesses modernising their operations"],
    faqs: [
      { q: "Can you work with our existing accounting software?", a: "If it has an API, we can integrate with it; otherwise we can include finance features in the system." },
      { q: "Do you build school portals?", a: "Yes, for admissions, fees and parent communication." },
      { q: "Is there an office in Sharjah?", a: "No, we work remotely from Lahore." },
    ],
  },
  {
    city: "muscat",
    svc: "software-development",
    seoTitle: "Software Development Company in Muscat, Oman",
    metaDescription:
      "Custom software development for Muscat businesses: CRMs, ERPs, portals and web applications for Omani companies, with Arabic support and fixed quotes. Served remotely from Lahore.",
    h1: "Software development for Muscat businesses",
    intro: [
      "Many Muscat companies are moving from paper and spreadsheets to proper systems as Oman's digital economy grows. The best results come from software designed around local ways of working rather than imported templates.",
      "We build CRMs, ERPs, portals and web applications for Muscat businesses, remotely from Lahore, one hour ahead.",
    ],
    answer: {
      q: "How can a Muscat business digitise its operations?",
      a: "Start by mapping the processes that take the most time, such as sales follow-up, stock or approvals. Replace them with one well-designed system, migrate existing data carefully, train staff, and add further modules once the first is working.",
    },
    local: {
      h: "Software for Omani companies",
      paras: [
        "Omani businesses often need Arabic and English interfaces, OMR pricing and workflows that reflect how decisions are made locally. We design those in from the start.",
        "Customer data handling should follow Oman's Personal Data Protection Law, so we build role-based access, logging and careful data storage into every system.",
      ],
    },
    forWho: ["Trading and distribution companies", "Government suppliers and contractors", "Retail and hospitality groups", "Startups at Knowledge Oasis Muscat"],
    faqs: [
      { q: "Can the system be in Arabic?", a: "Yes, with right-to-left support." },
      { q: "Do you invoice in OMR?", a: "We can quote in OMR or USD." },
      { q: "Have you worked in Oman before?", a: "Yes, including SEO work for Masood Lifts in Sohar." },
    ],
    work: ["masood-lifts"],
  },
  {
    city: "muscat",
    svc: "ai-automation",
    seoTitle: "AI Automation Company in Muscat, Oman | Chatbots & n8n",
    metaDescription:
      "AI automation for Muscat businesses: Arabic and English chatbots, WhatsApp assistants, document processing and n8n workflows that reduce manual work for Omani companies.",
    h1: "AI automation for Muscat businesses",
    intro: [
      "AI is no longer just for large corporates. Muscat businesses can use it today to answer customer questions in Arabic and English, process documents and connect systems so data flows automatically.",
      "We build practical AI automations for Omani companies, starting small and measuring results.",
    ],
    answer: {
      q: "Is AI automation affordable for small businesses in Oman?",
      a: "Yes, when it targets one specific task. A focused chatbot or document workflow costs far less than a large system and often saves many staff hours each month. AI usage is billed per request, so costs scale with use.",
    },
    local: {
      h: "AI in Arabic and English",
      paras: [
        "Omani customers often prefer Arabic, especially on WhatsApp. We build assistants that respond in the customer's language and hand over to staff when needed.",
        "For B2B companies, n8n workflows connect email, WhatsApp, spreadsheets and CRMs so enquiries and orders move without retyping.",
      ],
    },
    forWho: ["Customer-facing service businesses", "Trading companies with heavy paperwork", "Hospitality and tourism operators", "Professional services firms"],
    faqs: [
      { q: "Can the chatbot use Omani Arabic?", a: "It can understand and respond in Arabic, including common Gulf expressions. We test with real customer messages." },
      { q: "Where does our data go?", a: "We explain the data flow before building and minimise what's sent to AI services." },
      { q: "Can you automate WhatsApp replies?", a: "Yes, within WhatsApp Business Platform rules." },
    ],
  },
  {
    city: "muscat",
    svc: "social-media-management",
    seoTitle: "Social Media Management in Muscat, Oman",
    metaDescription:
      "Social media management for Muscat businesses: Instagram, TikTok, Snapchat and LinkedIn content, Reels, captions in Arabic and English, publishing, replies and monthly reporting.",
    h1: "Social media management for Muscat businesses",
    intro: [
      "Omani consumers spend a lot of time on Instagram, Snapchat and TikTok, and they discover new restaurants, shops and services there. Businesses that post consistently stay top of mind.",
      "We manage social media for Muscat businesses with content planned for Omani audiences, in Arabic and English.",
    ],
    answer: {
      q: "Which social platforms are popular in Oman?",
      a: "Instagram, Snapchat, TikTok and WhatsApp are widely used by consumers in Oman, while LinkedIn matters for B2B and professional audiences. The right mix depends on who your customers are.",
    },
    local: {
      h: "Content with an Omani voice",
      paras: [
        "We plan content around Omani occasions such as National Day, Ramadan, Eid and Khareef, and keep the tone respectful and local.",
        "For hospitality and retail, we focus on Reels and Stories; for B2B companies, LinkedIn case studies and team content.",
      ],
    },
    forWho: ["Restaurants and cafés", "Retail and fashion", "Hotels and tourism", "B2B and professional services"],
    faqs: [
      { q: "Can you write captions in Arabic?", a: "Yes, prepared or reviewed by native speakers." },
      { q: "Do you manage Snapchat?", a: "Yes, as part of a package where it fits your audience." },
      { q: "How do you report results?", a: "A monthly report covering reach, engagement, messages and next month's plan." },
    ],
  },
  {
    city: "lahore",
    svc: "social-media-management",
    seoTitle: "Social Media Management Agency in Lahore",
    metaDescription:
      "Social media management agency in Lahore: content calendars, post design, Reels, captions in English and Urdu, publishing, community management and reporting for Lahore businesses.",
    h1: "Social media management agency in Lahore",
    intro: [
      "Lahore's restaurants, fashion brands, clinics, schools and startups all compete for attention on Instagram, Facebook and TikTok. Posting occasionally isn't enough; consistent, well-made content is what builds a following that buys.",
      "We're a Lahore-based team, so we can meet you, visit for shoots and understand the audience first-hand.",
    ],
    answer: {
      q: "What does a social media agency in Lahore do?",
      a: "A social media agency plans content, designs posts, edits Reels, writes captions, schedules and publishes, replies to comments and messages, and reports on results, so the business doesn't have to manage it day to day.",
    },
    local: {
      h: "Content for Lahore audiences",
      paras: [
        "Lahore audiences respond to content that feels local: Urdu and Roman Urdu captions, local humour, food and culture. We mix that with clean, professional design so your brand looks premium.",
        "Because we're in Lahore, we can direct shoots at your location and turn real footage into Reels, which consistently outperform stock content.",
      ],
    },
    forWho: ["Restaurants and cafés", "Fashion and clothing brands", "Clinics and salons", "Schools and academies", "Startups and tech companies"],
    faqs: [
      { q: "Can you come to our location for shoots?", a: "Yes, for Lahore clients we can arrange on-site shoots." },
      { q: "Do you write in Urdu?", a: "Yes, in Urdu, Roman Urdu and English." },
      { q: "Do you manage Facebook and Instagram together?", a: "Yes, usually through Meta Business Suite." },
    ],
  },
  {
    city: "lahore",
    svc: "ai-automation",
    seoTitle: "AI Automation Company in Lahore | Chatbots, n8n & Python",
    metaDescription:
      "AI automation company in Lahore: WhatsApp and website chatbots, Python and n8n automation, document processing and AI agents for Pakistani businesses and exporters.",
    h1: "AI automation company in Lahore",
    intro: [
      "Lahore businesses are adopting AI to answer customers faster, reduce data entry and keep up with larger competitors. The key is choosing tasks where automation clearly saves time.",
      "We build chatbots, Python and n8n automations and AI document processing from our office in Lahore.",
    ],
    answer: {
      q: "How can Pakistani businesses use AI?",
      a: "Pakistani businesses use AI for WhatsApp customer service in Urdu and English, processing orders and invoices, generating reports, drafting marketing content and supporting export sales with faster, more professional communication.",
    },
    local: {
      h: "AI for Pakistani businesses",
      paras: [
        "Many Pakistani customers write in Roman Urdu on WhatsApp. We test chatbots with real messages in English, Urdu and Roman Urdu so they understand how people actually type.",
        "For exporters, AI can draft professional replies to international buyers and keep follow-ups consistent, while staff stay in control of what's sent.",
      ],
    },
    forWho: ["eCommerce and D2C brands", "Exporters and manufacturers", "Clinics and service businesses", "Schools and training institutes"],
    faqs: [
      { q: "Can the chatbot understand Roman Urdu?", a: "Modern AI models handle Roman Urdu reasonably well; we test with your real customer messages." },
      { q: "Is AI expensive to run?", a: "Usage is billed per request and is usually modest for small businesses. We estimate costs before launch." },
      { q: "Can we meet in Lahore?", a: "Yes, we're based in Lahore." },
    ],
  },
  {
    city: "faisalabad",
    svc: "software-development",
    seoTitle: "Software Company for Faisalabad Textile & Apparel Businesses",
    metaDescription:
      "Software development for Faisalabad textile, apparel and manufacturing businesses: ERP, production tracking, B2B export catalogues and buyer portals, from a team in nearby Lahore.",
    h1: "Software development for Faisalabad manufacturers",
    intro: [
      "Faisalabad's mills and garment factories manage complex operations: yarn and fabric stock, production stages, quality checks and export shipments. Many still track it all in spreadsheets.",
      "We build ERP and production systems for Faisalabad manufacturers, along with export websites like the one we built for MUHSEEQ.",
    ],
    answer: {
      q: "What ERP features does a textile factory need?",
      a: "Key features include raw-material and fabric inventory, purchase orders, production stages and costing, quality records, buyer orders and shipments, invoicing in multiple currencies, and reporting on orders and margins.",
    },
    local: {
      h: "Built for textile and apparel workflows",
      paras: [
        "Textile workflows have specific needs: lots and batches, shade and size breakdowns, production stages from cutting to packing, and buyer-specific requirements. We model these properly instead of forcing a generic ERP to fit.",
        "Export orders bring foreign currencies and documentation. We include multi-currency invoicing and document generation for shipments.",
      ],
    },
    forWho: ["Garment and apparel exporters", "Textile mills", "Home textile manufacturers", "Buying houses"],
    faqs: [
      { q: "Can you visit our factory?", a: "Yes, Faisalabad is close to our Lahore base, and a site visit helps us understand the workflow." },
      { q: "Can buyers see order status?", a: "Yes, through a buyer portal with production and shipment updates." },
      { q: "Do you build in phases?", a: "Yes, usually starting with inventory and orders." },
    ],
    work: ["muhseeq"],
  },
  {
    city: "karachi",
    svc: "software-development",
    seoTitle: "Software Development Company for Karachi Businesses",
    metaDescription:
      "Custom software development for Karachi businesses: trading and inventory systems, eCommerce back ends, logistics tools, portals and integrations, from 7CODE's team in Lahore.",
    h1: "Software development for Karachi businesses",
    intro: [
      "Karachi's traders, importers and logistics companies handle high volumes of orders, stock and documents. Off-the-shelf tools often can't keep up with how they actually operate.",
      "We build custom systems for Karachi businesses: inventory and orders, logistics tracking, eCommerce back ends and integrations.",
    ],
    answer: {
      q: "Why do Karachi trading companies choose custom software?",
      a: "Because their pricing, credit terms, multi-warehouse stock and import costing rarely fit generic tools. Custom software follows their exact process, handles PKR and foreign currencies and connects to the couriers and banks they use.",
    },
    local: {
      h: "Systems for Karachi's commercial pace",
      paras: [
        "In wholesale and import businesses, the details matter: landed cost, customer-specific pricing and credit limits, and stock across godowns. We design systems around those realities.",
        "For eCommerce brands, we build order management connected to couriers, with confirmation flows that reduce failed cash-on-delivery orders.",
      ],
    },
    forWho: ["Importers and wholesalers", "eCommerce and D2C brands", "Logistics and freight companies", "Retail chains"],
    faqs: [
      { q: "Can the system calculate landed cost?", a: "Yes, including duties, freight and other charges allocated to products." },
      { q: "Can you integrate with couriers?", a: "Yes, with couriers that provide APIs." },
      { q: "Do you meet in Karachi?", a: "We work by video call and WhatsApp, with visits for larger projects." },
    ],
  },
  {
    city: "karachi",
    svc: "ai-automation",
    seoTitle: "AI Automation Services in Karachi | Chatbots & Workflows",
    metaDescription:
      "AI automation services for Karachi businesses: WhatsApp chatbots, order and document processing, n8n workflows and AI agents for eCommerce, trading and logistics companies.",
    h1: "AI automation for Karachi businesses",
    intro: [
      "Karachi's eCommerce brands and trading companies handle thousands of messages, orders and documents. AI automation answers routine questions, confirms orders and extracts data so teams can scale without hiring at the same pace.",
      "We build AI chatbots, document processing and n8n workflows for Karachi companies.",
    ],
    answer: {
      q: "How can AI help eCommerce brands in Pakistan?",
      a: "AI can answer product and delivery questions on WhatsApp instantly, confirm cash-on-delivery orders, categorise complaints, draft replies, and summarise sales and returns data, which reduces workload and failed orders.",
    },
    local: {
      h: "Automation for high-volume businesses",
      paras: [
        "For eCommerce, the biggest wins are usually WhatsApp order confirmation and customer-service automation. For trading companies, it's processing purchase orders and invoices automatically.",
        "We design workflows with human review for exceptions, so automation reduces work without creating new errors.",
      ],
    },
    forWho: ["eCommerce and D2C brands", "Importers and traders", "Logistics companies", "Customer support teams"],
    faqs: [
      { q: "Can AI confirm COD orders on WhatsApp?", a: "Yes, through the WhatsApp Business Platform with approved message templates." },
      { q: "Will it understand Urdu?", a: "Yes, including Roman Urdu, tested on your real messages." },
      { q: "What does it cost to run?", a: "Usage-based AI costs plus WhatsApp conversation fees; we estimate both before launch." },
    ],
  },
  {
    city: "islamabad",
    svc: "software-development",
    seoTitle: "Software Development Company for Islamabad & Rawalpindi",
    metaDescription:
      "Custom software development for Islamabad and Rawalpindi: startup MVPs, NGO portals, education platforms and business systems, built by 7CODE's team in Lahore.",
    h1: "Software development for Islamabad and Rawalpindi",
    intro: [
      "Islamabad's startups, NGOs, consultancies and education providers need software partners who can build reliable products and portals, not just websites.",
      "We build MVPs, portals and business systems for twin-city organisations from our team in Lahore.",
    ],
    answer: {
      q: "What software do NGOs and development projects need?",
      a: "Typically beneficiary and project data management, field data collection, reporting dashboards for donors, document storage and role-based access, all with strong data protection.",
    },
    local: {
      h: "Projects common in the twin cities",
      paras: [
        "Startups need MVPs that can scale; NGOs need data portals and donor reporting; education providers need admissions and learning platforms. Each has different requirements for security and reporting, which we plan from the start.",
        "We're used to working with organisations that have formal procurement, documentation and approval processes — written proposals, milestone-based delivery and acceptance criteria agreed before work begins.",
        "For startups the rhythm is different: a tight MVP scope, weekly releases on a staging link and honest advice about what to defer. Several twin-city products run on stacks we maintain remotely from Lahore, with calls in your hours and code in your repositories.",
      ],
    },
    forWho: ["Tech startups", "NGOs and development projects", "Education providers", "Consultancies"],
    faqs: [
      { q: "Can you provide documentation for procurement?", a: "Yes, including proposals, technical specifications and project documentation." },
      { q: "Do you build data-collection apps?", a: "Yes, web and mobile-friendly forms with offline-friendly options where needed." },
      { q: "Can we meet in person?", a: "For larger projects we can arrange meetings in Islamabad." },
    ],
  },
];

export const cityServices: Landing[] = combos.map((c) => {
  const s = SVC[c.svc];
  const city = CITY[c.city];
  const path = `${city.href}/${c.svc}`;
  // The UAE is the priority market, so those pages carry extra, page-specific depth.
  const depth = uaeDepth[path];
  return {
    path,
    kind: "city-service",
    name: `${s.name} in ${city.name}`,
    line: c.intro[0].split(". ")[0] + ".",
    crumbs: [{ name: "Locations", href: "/locations" }, city.country, { name: city.name, href: city.href }],
    seoTitle: c.seoTitle,
    metaDescription: c.metaDescription,
    h1: c.h1,
    serviceType: s.serviceType,
    areaServed: city.area,
    presence: city.presence,
    contact: { service: s.contact, topic: `${s.name.toLowerCase()} in ${city.name}` },
    intro: c.intro,
    answer: c.answer,
    sections: [
      { type: "cards", h: "What's included", items: s.cards },
      { type: "text", h: c.local.h, paras: c.local.paras },
      { type: "list", h: `Who we work with in ${city.name}`, items: c.forWho },
      ...(depth?.sections ?? []),
      {
        type: "steps",
        h: "How a project runs",
        items: [
          { name: "Discovery call", body: `A call in ${city.name} working hours to understand your goals.` },
          { name: "Fixed quote", body: "A written scope and itemised, fixed price." },
          { name: "Build and review", body: "Regular progress on a staging link or content preview." },
          { name: "Launch and support", body: "Go-live on your accounts with ongoing support." },
        ],
      },
    ],
    tools: s.tools,
    work: c.work,
    faqs: [...c.faqs, ...(depth?.faqs ?? [])],
    related: [city.href, ...s.links],
  } satisfies Landing;
});
