import type { Landing } from "./types";

const C = [{ name: "Industries", href: "/industries" }];
const common = { kind: "industry" as const, crumbs: C, contact: { service: "web-development" } };
const deliver = {
  type: "steps" as const,
  h: "How we deliver",
  items: [
    { name: "Discovery", body: "We learn how your business runs, who the users are and what must integrate." },
    { name: "Plan and quote", body: "A phased scope with a fixed, itemised quote for the first release." },
    { name: "Build in releases", body: "A staging link early and regular releases your team can test." },
    { name: "Launch and support", body: "Deployment on your accounts, training and ongoing support." },
  ],
};

export const industries: Landing[] = [
  {
    ...common,
    path: "/industries/real-estate-software",
    name: "Real estate",
    line: "Property portals, CRMs and lead systems for agencies and developers.",
    seoTitle: "Real Estate Software & Website Development | Agencies & Developers",
    metaDescription:
      "Real estate software and websites for agencies, brokers and developers in the UAE, Oman and Pakistan: property listings, lead CRMs, WhatsApp integration and project launch sites.",
    h1: "Software and websites for real estate",
    serviceType: "Real estate software development",
    intro: [
      "Real estate runs on speed: the agent who replies first to a portal or WhatsApp lead usually gets the viewing. Most agencies lose leads between portals, spreadsheets and personal phones.",
      "We build property websites, listing systems and real estate CRMs that bring every enquiry into one place, route it to the right agent and track it through to the deal.",
    ],
    answer: {
      q: "What software does a real estate agency need?",
      a: "Most agencies need a fast listings website, a CRM that captures leads from portals, the website and WhatsApp, tools to assign and follow up leads, and reporting on lead sources and agent performance. Developers also need launch pages and unit-availability tools.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Listings websites", body: "Search by area, type, price and bedrooms, with fast pages that rank for local searches." },
          { name: "Real estate CRM", body: "Leads from portals, website and WhatsApp in one pipeline with auto-assignment." },
          { name: "Off-plan launch sites", body: "Project pages with floor plans, payment plans and registration forms." },
          { name: "Unit availability tools", body: "Live inventory of units for sales teams and brokers." },
          { name: "Owner and tenant portals", body: "Rent, maintenance requests and documents for property management." },
          { name: "Listing feeds", body: "Export listings to portals in their required XML formats." },
        ],
      },
      {
        type: "list",
        h: "Problems we solve",
        items: [
          "Leads lost between portals, inboxes and phones",
          "No idea which listings or campaigns produce deals",
          "Agents keeping clients in personal WhatsApp",
          "Slow, outdated agency websites",
          "Manual updates of the same listing on several sites",
        ],
      },
      deliver,
    ],
    tools: ["Next.js", "Laravel", "PostgreSQL", "Google Maps API", "WhatsApp Business Platform", "n8n"],
    faqs: [
      { q: "Can listings sync with property portals?", a: "Many portals accept XML feeds or offer APIs. We build exports in the format each portal requires, subject to their terms." },
      { q: "Can you build an Arabic version?", a: "Yes, with proper right-to-left layouts and translated content." },
      { q: "Do you do social media for real estate?", a: "Yes, including listing Reels and launch campaigns through our social media service." },
    ],
    related: ["/services/crm-development", "/locations/dubai", "/social-media-management/instagram", "/services/web-development"],
  },
  {
    ...common,
    path: "/industries/healthcare-software",
    name: "Healthcare",
    line: "Clinic websites, booking systems and patient portals built with privacy in mind.",
    seoTitle: "Healthcare Software & Clinic Website Development",
    metaDescription:
      "Healthcare software and websites for clinics, labs and healthcare providers: appointment booking, patient portals, internal systems and SEO, built with privacy and security in mind.",
    h1: "Software and websites for healthcare",
    serviceType: "Healthcare software development",
    intro: [
      "Patients now choose clinics online: they search, compare reviews and book. At the same time, clinics carry real obligations to protect patient data. Healthcare software has to be easy for patients and careful with information.",
      "We build clinic websites, booking systems, patient portals and internal tools for clinics, labs, pharmacies and wellness providers.",
    ],
    answer: {
      q: "What should a clinic website include?",
      a: "A clinic website should clearly list services and doctors, show location and opening hours, let patients book or request appointments online, load quickly on phones, and handle any personal information securely and in line with local health-data rules.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Clinic websites", body: "Service and doctor pages, local SEO, and clear calls to book or call." },
          { name: "Online booking", body: "Appointment scheduling with reminders by SMS, email or WhatsApp." },
          { name: "Patient portals", body: "Secure access to appointments, reports and invoices." },
          { name: "Internal systems", body: "Queue management, inventory and staff scheduling tools." },
          { name: "Lab and report delivery", body: "Secure result delivery with access controls." },
          { name: "Integrations", body: "Connections to existing practice-management systems where APIs allow." },
        ],
      },
      {
        type: "list",
        h: "How we treat health data",
        items: [
          "Collect only the information you need",
          "Encryption in transit and at rest",
          "Role-based access and audit logs",
          "Hosting chosen with your data-residency requirements in mind",
          "No patient data in analytics or marketing tools",
        ],
      },
      deliver,
    ],
    tools: ["Next.js", "Laravel", "PostgreSQL", "WhatsApp Business Platform", "Google Business Profile"],
    faqs: [
      { q: "Do you build telemedicine platforms?", a: "We can build video consultation and booking flows using established video providers, scoped to your regulatory requirements." },
      { q: "Can you help with clinic SEO?", a: "Yes. Local SEO, Google Business Profile and service pages help patients nearby find you." },
      { q: "Where will patient data be hosted?", a: "We agree hosting with you, considering local regulations and any data-residency requirements for your market." },
    ],
    related: ["/services/web-application-development", "/services/seo-aeo-geo", "/ai-solutions/ai-chatbot-development", "/services/custom-software-development"],
  },
  {
    ...common,
    path: "/industries/ecommerce-software",
    name: "eCommerce",
    line: "Online stores, B2B catalogues and the systems behind them.",
    seoTitle: "eCommerce Development | Shopify, Custom Stores & B2B Catalogues",
    metaDescription:
      "eCommerce development for retailers, brands and manufacturers: Shopify and WooCommerce stores, custom storefronts, B2B catalogues with quote requests, and inventory and order integrations.",
    h1: "eCommerce software and stores",
    serviceType: "eCommerce development",
    work: ["poolstore", "muhseeq"],
    intro: [
      "Selling online takes more than a theme. Stores need fast product pages, clear checkout, reliable stock levels and integrations with payments, couriers and accounting.",
      "We build Shopify and WooCommerce stores, custom storefronts, and B2B catalogues for manufacturers who sell by quotation rather than checkout.",
    ],
    answer: {
      q: "Shopify or a custom eCommerce site?",
      a: "Shopify suits most retail stores because it's quick to launch and reliable. A custom or headless build makes sense for unusual product rules, B2B pricing and quotations, very large catalogues, or when you need a unique front-end experience.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Shopify stores", body: "Theme setup or custom themes, apps configured and products imported." },
          { name: "WooCommerce", body: "WordPress stores built properly and kept fast." },
          { name: "Headless storefronts", body: "Next.js front ends on Shopify or other commerce back ends." },
          { name: "B2B catalogues", body: "Product catalogues with quote requests for wholesale and export buyers." },
          { name: "Integrations", body: "Payments, couriers, ERP, inventory and accounting connected." },
          { name: "Product SEO", body: "Structured data, collections and content that help products rank." },
        ],
      },
      {
        type: "list",
        h: "What we focus on",
        items: [
          "Fast product and collection pages on mobile",
          "Simple checkout with local payment options",
          "Accurate stock across channels",
          "Product data that search engines can read",
          "Clear shipping and returns information",
        ],
      },
      deliver,
    ],
    tools: ["Shopify", "WooCommerce", "Next.js", "Stripe", "Laravel", "Google Merchant Center"],
    faqs: [
      { q: "Can you migrate our store to Shopify?", a: "Yes, including products, customers and order history where possible, with redirects to protect search rankings." },
      { q: "Do you build B2B ordering portals?", a: "Yes, with customer-specific pricing, quote requests and account approvals." },
      { q: "Can you connect our store to our ERP?", a: "If both systems have APIs, yes. We sync products, stock and orders." },
    ],
    related: ["/services/ecommerce", "/industries/retail-software", "/services/seo-aeo-geo", "/social-media-management/content-creation"],
  },
  {
    ...common,
    path: "/industries/education-software",
    name: "Education",
    line: "School and institute websites, admissions portals and learning tools.",
    seoTitle: "Education Software & School Website Development",
    metaDescription:
      "Education software and websites for schools, academies, training institutes and edtech startups: admissions portals, course platforms, student and parent portals, and local SEO.",
    h1: "Software and websites for education",
    serviceType: "Education software development",
    intro: [
      "Parents and students research schools and courses online, and they expect to apply online too. Behind the scenes, schools juggle admissions, fees, attendance and communication across disconnected tools.",
      "We build education websites, admissions and fee portals, course platforms and student information tools for schools, academies, training institutes and edtech startups.",
    ],
    answer: {
      q: "What software does a school or training institute need?",
      a: "Typically a clear website with programmes and admissions information, an online application and fee-payment process, a student information system for records and attendance, and a channel for communicating with parents or students.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "School and institute websites", body: "Programmes, fees, staff and admissions information that ranks locally." },
          { name: "Admissions portals", body: "Online applications, document uploads and status tracking." },
          { name: "Fee management", body: "Invoices, online payments and reminders." },
          { name: "Course platforms", body: "Video lessons, quizzes and certificates for training businesses." },
          { name: "Student and parent portals", body: "Timetables, results, attendance and announcements." },
          { name: "Edtech MVPs", body: "First versions of learning products for founders." },
        ],
      },
      {
        type: "list",
        h: "Common problems we fix",
        items: [
          "Admissions handled through paper forms and phone calls",
          "Fee tracking in spreadsheets",
          "Parents asking for information that should be online",
          "Course content spread across WhatsApp and drives",
        ],
      },
      deliver,
    ],
    tools: ["Next.js", "Laravel", "PostgreSQL", "Stripe", "Mux", "WhatsApp Business Platform"],
    faqs: [
      { q: "Can you build a course platform like an LMS?", a: "Yes, either a custom platform or a configured existing LMS, depending on your needs and budget." },
      { q: "Can parents pay fees online?", a: "Yes, through supported payment gateways in your country." },
      { q: "Do you support Arabic and Urdu?", a: "Yes. We build multilingual sites, including right-to-left Arabic layouts." },
    ],
    related: ["/services/web-application-development", "/services/mvp-development", "/services/seo-aeo-geo", "/social-media-management/social-media-strategy"],
  },
  {
    ...common,
    path: "/industries/logistics-software",
    name: "Logistics",
    line: "Websites, tracking and dashboards for freight, transport and warehousing.",
    seoTitle: "Logistics Software & Website Development | Freight & Transport",
    metaDescription:
      "Logistics software and websites for freight forwarders, transport and warehousing companies: service websites, quotation systems, shipment tracking, dispatch tools and operations dashboards.",
    h1: "Software and websites for logistics",
    serviceType: "Logistics software development",
    work: ["ferry-global", "logistivo", "seven-lift"],
    intro: [
      "Logistics companies offer many services from few locations, and procurement teams need to find the right one quickly. Inside the business, jobs, trucks and documents move fast and errors are expensive.",
      "We've built logistics websites like Ferry Global and platforms like Logistivo, and we build quotation, tracking and dispatch systems for freight and transport operators.",
    ],
    answer: {
      q: "What software do logistics companies use?",
      a: "Logistics companies typically use a transport or warehouse management system, shipment tracking, quotation and booking tools, a CRM for customers, and dashboards that show jobs, vehicles and performance in real time.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Service websites", body: "Clear service structure for freight, customs, warehousing and transport, with quote forms." },
          { name: "Quotation systems", body: "Rate calculation and quotation workflows that reply to enquiries faster." },
          { name: "Shipment tracking", body: "Customer-facing tracking pages and notifications." },
          { name: "Dispatch and fleet tools", body: "Assign jobs, track vehicles and record proof of delivery." },
          { name: "Operations dashboards", body: "Live views of jobs, delays and revenue." },
          { name: "Document automation", body: "Extract data from bills of lading, invoices and delivery notes." },
        ],
      },
      {
        type: "list",
        h: "Why logistics sites underperform",
        items: [
          "All services crammed onto one page",
          "No quote form or WhatsApp on mobile",
          "Location pages missing for the areas you serve",
          "Slow pages on site and on the road",
        ],
      },
      deliver,
    ],
    tools: ["Next.js", "Laravel", "Node.js", "PostgreSQL", "Google Maps API", "WhatsApp Business Platform"],
    faqs: [
      { q: "Have you worked with logistics companies?", a: "Yes. Our case studies include Ferry Global Logistics in Abu Dhabi and the Logistivo platform." },
      { q: "Can you integrate GPS tracking?", a: "Yes, where your tracking provider offers an API." },
      { q: "Can customers get a quote online?", a: "Yes, from simple forms to instant quotes based on your rate rules." },
    ],
    related: ["/work/ferry-global", "/work/logistivo", "/ai-solutions/ai-document-processing", "/locations/abu-dhabi"],
  },
  {
    ...common,
    path: "/industries/hospitality-software",
    name: "Hospitality",
    line: "Restaurant, café and hotel websites, ordering, bookings and social media.",
    seoTitle: "Restaurant & Hospitality Websites, Ordering and Bookings",
    metaDescription:
      "Websites and software for restaurants, cafés, hotels and hospitality brands: menus, online ordering, table and room bookings, loyalty tools, local SEO and social media management.",
    h1: "Software and websites for hospitality",
    serviceType: "Hospitality software development",
    intro: [
      "Hospitality customers decide on their phones in minutes: they look at photos, check the menu and book or order. A slow site, a PDF menu or an inactive Instagram sends them to the next option.",
      "We build restaurant and hotel websites, ordering and booking flows, and run the social media that keeps you busy.",
    ],
    answer: {
      q: "Does a restaurant need its own website?",
      a: "Yes. Delivery apps and social media help, but your own website is where you control the menu, take direct orders and bookings without commission, and appear in local search results with accurate information.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Restaurant websites", body: "Fast menus, photos, location and opening hours that rank in local search." },
          { name: "Direct ordering", body: "Online ordering for pickup and delivery without marketplace commission." },
          { name: "Table and room bookings", body: "Booking forms or integrations with your reservation system." },
          { name: "Loyalty and offers", body: "Simple loyalty programmes and offer campaigns." },
          { name: "Google Business Profile", body: "Accurate listings, photos and review management." },
          { name: "Social media", body: "Instagram, TikTok and Reels that show the experience." },
        ],
      },
      {
        type: "list",
        h: "What brings guests in",
        items: [
          "Mouth-watering photos and video",
          "A menu that loads instantly on a phone",
          "One-tap call, WhatsApp, directions and booking",
          "Recent reviews and an active social feed",
        ],
      },
      deliver,
    ],
    tools: ["Next.js", "Shopify", "Stripe", "Google Business Profile", "Instagram", "TikTok"],
    faqs: [
      { q: "Can you connect to our POS?", a: "If your POS offers an API or integration, yes. Many popular systems do." },
      { q: "Do you do food photography?", a: "We direct shoots and edit content; for professional photography we can work with your photographer." },
      { q: "Can you manage our social media?", a: "Yes, it's one of the most common services we provide for hospitality clients." },
    ],
    related: ["/social-media-management/instagram", "/social-media-management/tiktok", "/services/seo-aeo-geo", "/industries/retail-software"],
  },
  {
    ...common,
    path: "/industries/finance-software",
    name: "Finance & fintech",
    line: "Fintech MVPs, dashboards, client portals and secure financial workflows.",
    seoTitle: "Fintech & Financial Software Development",
    metaDescription:
      "Fintech and financial software development: MVPs, client portals, payment integrations, dashboards and internal tools for financial services, built with security, audit trails and compliance in mind.",
    h1: "Software for finance and fintech",
    serviceType: "Fintech software development",
    intro: [
      "Financial software has no room for sloppy engineering. Every transaction must be traceable, every permission deliberate and every number exactly right.",
      "We build fintech MVPs, client portals, payment integrations and internal tools for financial services firms, working with your compliance requirements from the start.",
    ],
    answer: {
      q: "What matters most when building fintech software?",
      a: "Security, accuracy and traceability: strong authentication, encrypted data, precise money handling, complete audit trails, and an architecture that supports the licensing and data-protection requirements of each market you operate in.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Fintech MVPs", body: "First versions of payment, lending, savings or investment products." },
          { name: "Client portals", body: "Secure access to statements, documents and requests." },
          { name: "Payment integrations", body: "Payment gateways, payouts, reconciliation and webhooks." },
          { name: "Dashboards", body: "Portfolio, transaction and risk dashboards." },
          { name: "Onboarding flows", body: "Customer onboarding with identity checks through specialist providers." },
          { name: "Back-office tools", body: "Approvals, reconciliation and reporting for operations teams." },
        ],
      },
      {
        type: "list",
        h: "Engineering standards",
        items: [
          "Money stored and calculated with exact decimal types",
          "Every change recorded in an immutable audit log",
          "Multi-factor authentication and least-privilege roles",
          "Encryption in transit and at rest",
          "Third-party providers used for regulated functions",
        ],
      },
      {
        type: "text",
        h: "Working with compliance, not around it",
        paras: [
          "Financial products live inside rules: licensing, KYC and AML checks, record-keeping and data-residency requirements that differ by market. We treat those as design inputs from day one — your compliance advisor tells us what must be true, and we build the system so it can prove it: who saw what, who approved what, and when.",
          "That's also why we integrate specialist providers for regulated functions like identity verification and payments rather than rebuilding them. Your product gets audited components where auditors expect them, and your budget goes into the experience that differentiates you.",
        ],
      },
      deliver,
    ],
    tools: ["Next.js", "NestJS", "Laravel", "PostgreSQL", "Stripe", "AWS", "Redis"],
    faqs: [
      { q: "Can you build a dashboard on top of our existing core system?", a: "Yes. Many finance projects are a modern portal or dashboard over an established back office, connected through its API or database views, which delivers visible improvement without touching the regulated core." },
      { q: "Can you build a licensed financial product?", a: "We build the software. Licensing and regulatory approval remain with you and your advisors; we design the system to support those requirements." },
      { q: "How do you handle identity verification?", a: "Through established KYC providers integrated into your onboarding flow." },
      { q: "Do you sign NDAs?", a: "Yes." },
    ],
    related: ["/services/saas-development", "/services/api-development", "/technologies/nestjs-development", "/services/mvp-development"],
  },
  {
    ...common,
    path: "/industries/construction-software",
    name: "Construction & heavy equipment",
    line: "Websites and systems for contractors, equipment hire and industrial services.",
    seoTitle: "Construction & Equipment Hire Websites and Software",
    metaDescription:
      "Websites and software for contractors, crane and heavy-equipment hire, and industrial services: fleet pages, location SEO, quotation systems, job tracking and equipment management.",
    h1: "Software and websites for construction and heavy equipment",
    serviceType: "Construction software development",
    work: ["seven-lift", "maxtgc", "masood-lifts"],
    intro: [
      "In equipment hire and contracting, the job goes to whoever answers first. Customers search on their phones from site, compare quickly and call. We've built sites for crane and heavy-equipment hire companies across the UAE and Oman, including Seven Lift, Maxtgc and Masood Lifts.",
      "We build fast websites with call and WhatsApp on every screen, fleet and location pages, and internal tools for quotations, jobs and equipment.",
    ],
    answer: {
      q: "How can an equipment hire company get more enquiries online?",
      a: "By having a fast mobile website with one-tap call and WhatsApp, a page for each machine type and service, pages for the areas and industrial zones you serve, a complete Google Business Profile, and quick replies to every enquiry.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Fleet websites", body: "Pages for each crane, truck and machine with capacities and uses." },
          { name: "Location SEO", body: "Pages for cities, ports and industrial areas where jobs happen." },
          { name: "Quotation systems", body: "Quote templates and tracking from enquiry to booking." },
          { name: "Job and equipment tracking", body: "Which machine is where, maintenance due and operator assignments." },
          { name: "Safety and documents", body: "Certificates, inspections and documents stored and shared." },
          { name: "Contractor portals", body: "Clients request jobs and view documents online." },
        ],
      },
      {
        type: "list",
        h: "What works in this industry",
        items: [
          "Call and WhatsApp buttons always visible on mobile",
          "Real fleet photos, not stock images",
          "Clear capacities and specifications",
          "Location pages for each area you serve",
          "Answering within minutes, not hours",
        ],
      },
      deliver,
    ],
    tools: ["Next.js", "Laravel", "Google Business Profile", "Google Search Console", "WhatsApp Business"],
    faqs: [
      { q: "Have you worked with crane hire companies?", a: "Yes, including Seven Lift and Maxtgc in the UAE and Masood Lifts in Oman. See our case studies." },
      { q: "Can you do Arabic pages?", a: "Yes, with right-to-left layouts where your market needs them." },
      { q: "Do you track results?", a: "Yes, through Google Search Console and call and WhatsApp click tracking." },
    ],
    related: ["/work/seven-lift", "/work/maxtgc", "/work/masood-lifts", "/services/seo-aeo-geo"],
  },
  {
    ...common,
    path: "/industries/retail-software",
    name: "Retail",
    line: "Retail websites, stock systems, loyalty and omnichannel tools.",
    seoTitle: "Retail Software Development | Stock, POS Integration & Online Sales",
    metaDescription:
      "Retail software and websites: online stores, inventory and stock systems, POS integrations, loyalty programmes and reporting for single shops and multi-branch retailers.",
    h1: "Software for retail businesses",
    serviceType: "Retail software development",
    intro: [
      "Retailers now sell in the shop, online and on social media at the same time. Keeping stock, prices and customers consistent across those channels is where most of the effort goes.",
      "We build online stores, stock systems, POS integrations and loyalty tools for independent retailers and multi-branch chains.",
    ],
    answer: {
      q: "What is omnichannel retail software?",
      a: "Omnichannel retail software connects in-store sales, online stores and marketplaces so stock levels, prices, customer records and orders stay consistent across every channel a retailer sells through.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Online stores", body: "Shopify or custom stores connected to your shop stock." },
          { name: "Inventory systems", body: "Stock across branches and warehouses, with transfers and alerts." },
          { name: "POS integrations", body: "Sales from the till synced to stock and accounting." },
          { name: "Loyalty programmes", body: "Points, offers and customer profiles." },
          { name: "Supplier ordering", body: "Purchase orders and reorder suggestions." },
          { name: "Sales reporting", body: "Branch, product and staff performance in one place." },
        ],
      },
      {
        type: "list",
        h: "Signs it's time to upgrade",
        items: [
          "Stock counts that never match the system",
          "Selling online items that are out of stock in reality",
          "No view of which products make money",
          "Separate customer lists for shop and online",
        ],
      },
      deliver,
    ],
    tools: ["Shopify", "Laravel", "Next.js", "PostgreSQL", "REST APIs"],
    faqs: [
      { q: "Can you work with our existing POS?", a: "If it has an API or export, yes. We'll check before quoting." },
      { q: "Do you build for multi-branch retailers?", a: "Yes, with stock and reporting by branch." },
      { q: "Can you help with retail social media?", a: "Yes, through our social media management service." },
    ],
    related: ["/industries/ecommerce-software", "/services/erp-development", "/services/ecommerce", "/social-media-management/instagram"],
  },
  {
    ...common,
    path: "/industries/professional-services-software",
    name: "Professional services",
    line: "Client portals, CRMs and websites for consultancies, law and accounting firms.",
    seoTitle: "Software for Professional Services Firms | Portals & CRMs",
    metaDescription:
      "Software and websites for consultancies, law firms, accountants and agencies: client portals, document workflows, CRMs, time tracking and authority-building websites and content.",
    h1: "Software for professional services firms",
    serviceType: "Professional services software development",
    intro: [
      "Consultancies, law firms, accountants and agencies sell expertise and trust. Their websites must show both, and their systems must make client work smooth: documents, deadlines, approvals and billing.",
      "We build authority-building websites, client portals, CRMs and workflow tools for professional services firms.",
    ],
    answer: {
      q: "What is a client portal?",
      a: "A client portal is a secure website area where clients log in to share and sign documents, see progress, view invoices and send requests, replacing scattered email threads with one organised place.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Authority websites", body: "Clear service pages, team profiles and articles that build trust and rank." },
          { name: "Client portals", body: "Secure document exchange, status updates and requests." },
          { name: "CRM and pipeline", body: "Track prospects, proposals and referrals." },
          { name: "Workflow tools", body: "Checklists, deadlines and approvals for recurring client work." },
          { name: "Time and billing", body: "Time tracking linked to invoicing." },
          { name: "Document automation", body: "Generate letters, proposals and reports from templates." },
        ],
      },
      {
        type: "list",
        h: "Benefits",
        items: [
          "Less time chasing documents by email",
          "Clients see progress without calling",
          "Consistent processes across the team",
          "A website that reflects your expertise",
        ],
      },
      {
        type: "text",
        h: "Why firms outgrow generic tools",
        paras: [
          "Most firms start with email, folders and a spreadsheet of clients, then add a generic project tool. It works until the practice grows: versions of documents multiply, deadlines live in individual inboxes, and partners can't see which engagements are profitable without a week of assembly.",
          "The fix isn't a heavyweight practice suite — it's a system shaped like your engagements. A recurring compliance job has a checklist and a calendar; an advisory project has phases and approvals; both feed one view of workload and billing. That's a smaller, cheaper build than it sounds, because it only covers what your firm actually does.",
        ],
      },
      deliver,
    ],
    tools: ["Next.js", "Laravel", "PostgreSQL", "n8n", "Google Workspace", "Microsoft 365"],
    faqs: [
      { q: "How do you handle confidentiality for a professional firm?", a: "We sign NDAs, build role-based access so staff see only their engagements, encrypt data in transit and at rest, and keep audit logs of document access — the same controls your clients would expect from you." },
      { q: "Is a client portal secure?", a: "Yes, with encrypted connections, access controls and logs of who viewed or downloaded what." },
      { q: "Can it integrate with Microsoft 365 or Google Workspace?", a: "Yes, for sign-in, calendars and document storage." },
      { q: "Do you write content for our website?", a: "We can, based on interviews with your team, so it reflects your real expertise." },
    ],
    related: ["/services/crm-development", "/social-media-management/linkedin", "/services/seo-aeo-geo", "/ai-solutions/business-process-automation"],
  },
];
