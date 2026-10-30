// The nine service categories and the content for each service page.
// Copy is written per service — no shared templates — so no two pages are near-duplicates.
// Prices and timelines are deliberately not quoted as fixed numbers.

export type ServiceCategory = {
  slug: string;
  name: string;
  /** One-line summary used in lists and menus */
  line: string;
  /** Short list used in menus and previews */
  includes: string[];
  tools: string[];
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  details: { name: string; body: string }[];
  forWho: string[];
  approach: { name: string; body: string }[];
  /** Case-study slugs that show this service in practice */
  related: string[];
  /** Archive types that also show this service */
  archiveKinds?: string[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceCategory[] = [
  {
    slug: "web-development",
    name: "Web & software development",
    line: "Custom websites, web applications, SaaS platforms and APIs, built to be fast and easy to maintain.",
    includes: ["Custom websites", "Web applications", "SaaS development", "APIs & integrations", "CRM & ERP", "Maintenance"],
    tools: ["Next.js", "React", "Laravel", "Node.js", "PostgreSQL", "MySQL", "TypeScript", "Vercel"],
    seoTitle: "Web & software development — custom websites, web apps and SaaS",
    metaDescription:
      "7CODE builds custom websites, web applications, SaaS platforms and APIs in Next.js, React and Laravel for businesses in the UAE, UK and worldwide.",
    h1: "Web and software development",
    intro: [
      "We build the software your business runs on: marketing sites that bring in enquiries, web applications your team works in every day, and platforms your customers pay for.",
      "Most of our work is in Next.js and React on the front end and Laravel or Node.js behind it, with PostgreSQL or MySQL underneath. We pick the stack for the job, not the other way round, and we write code your next developer can pick up without a rewrite.",
    ],
    details: [
      { name: "Custom websites", body: "Fast, search-friendly business websites built from your content and your sales process, not a theme with your logo on it." },
      { name: "Web applications", body: "Dashboards, portals, booking systems and internal tools, with proper user roles, validation and audit trails." },
      { name: "SaaS and marketplaces", body: "Multi-tenant products with subscriptions, onboarding, matching and payments, designed to grow without slowing down." },
      { name: "APIs and integrations", body: "REST APIs, OAuth logins, payment gateways and webhooks, including the edge cases real payment flows produce." },
      { name: "CRM and ERP", body: "Custom CRMs and back-office systems shaped around how your team actually works, or integrations into the tools you already use." },
      { name: "Performance and maintenance", body: "Query tuning, server-side rendering, code-splitting and ongoing updates so the site stays fast and secure after launch." },
    ],
    forWho: [
      "Founders turning an idea into a first version they can sell",
      "Businesses replacing spreadsheets or an outgrown off-the-shelf tool",
      "Companies whose current site is slow, hard to edit or not bringing in leads",
      "Product teams who need an extra senior full-stack engineer",
    ],
    approach: [
      { name: "Data model first", body: "We design the database and the API before the screens, because that's what decides whether the product stays fast as usage grows." },
      { name: "Ship early, ship often", body: "You get a working staging link in the first weeks and new releases regularly, rather than one big reveal at the end." },
      { name: "Built for speed", body: "Server-side and static rendering where it helps, indexed queries and lean front-end code, measured against real pages." },
      { name: "Handover you can use", body: "Clean repositories, environment documentation and deployment set up on your accounts, so you're never locked in." },
    ],
    related: ["av-leads", "maxtgc", "logistivo", "muhseeq"],
    archiveKinds: ["Website"],
    faqs: [
      { q: "Which technologies do you build with?", a: "Mostly Next.js, React and TypeScript on the front end, and Laravel (PHP) or Node.js on the back end, with PostgreSQL or MySQL. We also work with Vue.js and CodeIgniter on existing projects." },
      { q: "How much does a custom website or web application cost?", a: "It depends on the number of pages or features, integrations and how much content we write. We send a fixed quote after a short discovery call, broken down by feature so you can see where the cost sits and drop what you don't need yet." },
      { q: "Can you take over an existing project?", a: "Yes. We start with a code review covering structure, security, performance and dependencies, then tell you plainly what to keep, what to fix and what to rebuild before we change anything." },
      { q: "Do I own the code?", a: "Yes. Code lives in a repository on your account and is deployed to hosting you control. You own everything we build for you once the project is paid." },
      { q: "Do you offer support after launch?", a: "Yes, on a monthly maintenance plan or as needed. That covers updates, security patches, monitoring and small improvements." },
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile apps",
    line: "iOS and Android apps from a single codebase, designed for how people actually use their phones.",
    includes: ["iOS & Android", "React Native", "Flutter", "App UI/UX", "App maintenance"],
    tools: ["React Native", "Expo", "Flutter", "TypeScript", "Firebase", "Laravel APIs"],
    seoTitle: "Mobile app development — iOS and Android apps with React Native and Flutter",
    metaDescription:
      "Cross-platform iOS and Android app development with React Native and Flutter, from UX design and APIs to App Store and Google Play release.",
    h1: "Mobile app development",
    intro: [
      "We build iOS and Android apps from one codebase with React Native or Flutter, so you launch on both stores without paying for two separate apps.",
      "Because we also build the web platforms and APIs behind apps, the app, your website and your admin panel share one backend and stay in sync.",
    ],
    details: [
      { name: "Cross-platform apps", body: "One React Native or Flutter codebase for iPhone and Android, with native modules where the platform needs them." },
      { name: "App UI/UX", body: "Thumb-friendly layouts, clear onboarding and offline states, designed in Figma and tested on real devices." },
      { name: "Backend and APIs", body: "Authentication, push notifications, payments and an admin panel, built in Laravel or Node.js." },
      { name: "Store release", body: "App Store and Google Play listings, review submission, and the fixes reviewers ask for." },
      { name: "Maintenance", body: "OS updates, crash monitoring and new features after launch." },
    ],
    forWho: [
      "Businesses whose customers already reach them mostly on mobile",
      "Platforms that need a companion app for an existing web product",
      "Startups validating an app idea before investing in native builds",
    ],
    approach: [
      { name: "Decide if you need an app", body: "Sometimes a fast mobile website does the job. We tell you honestly before you spend on an app." },
      { name: "Design the core loop", body: "We map the one or two things users will do every day and design those first." },
      { name: "Shared backend", body: "One API serves the app, the website and the admin panel, so data never drifts between them." },
      { name: "Release and iterate", body: "Staged roll-outs and crash reporting so issues are caught before most users see them." },
    ],
    related: [],
    faqs: [
      { q: "Should I build with React Native or Flutter?", a: "Both build iOS and Android apps from one codebase. We usually recommend React Native when you already have a React or Next.js website, because code and developers can be shared. Flutter suits apps with heavy custom animation." },
      { q: "Is a cross-platform app as good as a native app?", a: "For most business apps, yes. Users can't tell the difference. Native builds make sense for apps that rely heavily on device hardware, such as advanced camera or AR features." },
      { q: "What should I decide before building an app?", a: "Who will use it, the one task they'll come back for, how they'll log in, and whether you need an admin panel. Those four answers shape most of the cost and timeline." },
      { q: "Do you publish the app to the stores?", a: "Yes. We prepare the listings, submit to the App Store and Google Play under your developer accounts, and handle any changes the reviewers request." },
    ],
  },
  {
    slug: "ecommerce",
    name: "eCommerce & Shopify",
    line: "Shopify and WooCommerce stores, custom themes and headless storefronts that turn visitors into orders.",
    includes: ["Shopify & Shopify Plus", "Theme development", "Headless Shopify", "WooCommerce", "Conversion optimisation"],
    tools: ["Shopify", "Liquid", "Hydrogen", "Next.js", "WooCommerce", "PHP"],
    seoTitle: "eCommerce & Shopify development — stores, themes and headless storefronts",
    metaDescription:
      "Shopify, Shopify Plus, WooCommerce and headless eCommerce development: custom themes, store speed and conversion work for online retailers.",
    h1: "eCommerce and Shopify development",
    intro: [
      "We build and improve online stores on Shopify, WooCommerce and custom platforms, with one goal: more of your visitors finishing checkout.",
      "We've built storefronts for UK retail and B2B catalogue sites for manufacturers, and we know the work that moves revenue is usually product page speed, clear filtering and a checkout with no surprises.",
    ],
    details: [
      { name: "Shopify store builds", body: "New Shopify and Shopify Plus stores set up properly: catalogue structure, collections, shipping, taxes and payments." },
      { name: "Custom Shopify themes", body: "Themes written in Liquid for your brand and your products, fast by default and editable in the theme editor." },
      { name: "Headless storefronts", body: "Next.js or Hydrogen front ends on top of Shopify for brands that need custom experiences and top-tier speed." },
      { name: "WooCommerce", body: "WooCommerce stores and custom plugins when WordPress is already the centre of your business." },
      { name: "Speed and conversion", body: "Product page speed, image handling, filters and checkout friction, fixed on the pages that carry the most revenue." },
      { name: "B2B catalogues", body: "Wholesale catalogues with quote requests instead of checkout, sent straight to WhatsApp or email." },
    ],
    forWho: [
      "Retailers moving from marketplaces to their own store",
      "Stores with good traffic but too few completed orders",
      "Manufacturers and wholesalers who sell on quotes, not carts",
      "Brands outgrowing a theme they can't customise any further",
    ],
    approach: [
      { name: "Start from your best sellers", body: "We look at which products and pages earn the most and design around those first." },
      { name: "Speed is a feature", body: "Every theme is measured against real product pages on a mid-range phone before launch." },
      { name: "Clean catalogue data", body: "Variants, collections and filters structured so customers find products and search engines index them." },
      { name: "Measure the checkout", body: "Analytics on every step so you can see where buyers drop off and what we fixed." },
    ],
    related: ["poolstore", "muhseeq"],
    archiveKinds: ["eCommerce"],
    faqs: [
      { q: "Shopify or WooCommerce — which is better?", a: "Shopify is the better default for most stores: hosting, security and checkout are handled for you. WooCommerce makes sense if your business already runs on WordPress or needs deep customisation of how orders are processed." },
      { q: "How much does a Shopify store cost?", a: "It depends mainly on whether you use an existing theme or a custom one, how many products and variants you have, and which apps and integrations you need. We quote a fixed price after reviewing your catalogue." },
      { q: "What is headless Shopify?", a: "Shopify keeps running products, inventory and checkout, while the storefront customers see is a separate, custom-built site, usually in Next.js. It allows faster pages and more unusual designs, at a higher build cost." },
      { q: "Can you speed up my existing store?", a: "Usually, yes. Most slow stores are held back by unused apps, oversized images and heavy theme code. We audit first and fix the pages that carry the most revenue." },
      { q: "Can my store take quote requests instead of payments?", a: "Yes. For wholesale and B2B, we build catalogues where buyers select products and send a quote request by WhatsApp, email or form." },
    ],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    line: "Custom themes and plugins, speed work and dependable maintenance for WordPress sites.",
    includes: ["Custom themes", "Plugin development", "Elementor & Gutenberg", "Speed optimisation", "Maintenance"],
    tools: ["WordPress", "PHP", "Gutenberg", "Elementor", "ACF", "WooCommerce"],
    seoTitle: "WordPress development — custom themes, plugins, speed and maintenance",
    metaDescription:
      "Custom WordPress themes and plugins, Elementor and Gutenberg builds, speed optimisation, maintenance and migrations from WordPress to Next.js.",
    h1: "WordPress development",
    intro: [
      "WordPress runs a large share of the web, and when it's built well it's a fine choice. We build custom themes and plugins, fix slow and fragile sites, and keep them updated.",
      "We'll also tell you when WordPress is holding you back. We've moved businesses from WordPress to Next.js when speed and search visibility needed a fresh start.",
    ],
    details: [
      { name: "Custom themes", body: "Lightweight themes built for your content, with blocks your team can edit without breaking the layout." },
      { name: "Plugin development", body: "Custom plugins for booking, listings, integrations and admin workflows, written to WordPress coding standards." },
      { name: "Elementor and Gutenberg", body: "Page-builder sites made clean and consistent, with reusable templates instead of one-off pages." },
      { name: "Speed optimisation", body: "Caching, image handling, plugin clean-up and database tuning for faster load times." },
      { name: "Maintenance and security", body: "Core, theme and plugin updates, backups, uptime monitoring and malware clean-up." },
      { name: "Migrations", body: "Moving to new hosting, or off WordPress entirely to Next.js, with redirects that keep your rankings." },
    ],
    forWho: [
      "Businesses already invested in WordPress who need it faster and more reliable",
      "Marketing teams who want to edit pages without calling a developer",
      "Sites that were hacked, broken by an update or abandoned by a previous developer",
    ],
    approach: [
      { name: "Audit before changes", body: "We list every plugin, theme customisation and hosting setting before touching anything." },
      { name: "Fewer plugins", body: "Most slow WordPress sites run too many plugins. We replace what we can with lean custom code." },
      { name: "Editing that can't break", body: "Content blocks with sensible limits, so pages stay on-brand whoever edits them." },
      { name: "Redirects done right", body: "Every URL change is mapped, so migrations don't cost you search traffic." },
    ],
    related: ["maxtgc"],
    faqs: [
      { q: "Should I stay on WordPress or move to Next.js?", a: "Stay on WordPress if your team edits content often and the site is working. Consider Next.js if speed, security or search performance are suffering and you're mostly publishing marketing pages. We recommend based on your site, not on preference." },
      { q: "Why is my WordPress site slow?", a: "Usually too many plugins, unoptimised images, a heavy page builder or cheap shared hosting. An audit shows which of these matter most on your site." },
      { q: "Can you fix a hacked WordPress site?", a: "Yes. We clean the infection, close how it got in, update everything, restore from a clean backup where needed and put monitoring in place." },
      { q: "Do you offer WordPress maintenance plans?", a: "Yes. Monthly plans cover updates, backups, uptime monitoring, security checks and a set amount of small changes." },
    ],
  },
  {
    slug: "seo-aeo-geo",
    name: "SEO, AEO & GEO",
    line: "Search visibility on Google and in AI assistants, from technical fixes to local pages written for real areas.",
    includes: ["Technical SEO", "Local SEO", "International SEO", "Answer engine optimisation", "Generative engine optimisation", "SEO audits"],
    tools: ["Semrush", "Google Search Console", "Google Analytics 4", "Schema.org", "Next.js"],
    seoTitle: "SEO, AEO & GEO services — rank on Google and get cited by AI assistants",
    metaDescription:
      "Technical, local and international SEO plus answer engine (AEO) and generative engine optimisation (GEO) for businesses in the UAE, Oman and worldwide.",
    h1: "SEO, AEO and GEO",
    intro: [
      "People now find businesses in two ways: on Google, and by asking AI assistants like ChatGPT and Gemini. We optimise for both.",
      "SEO gets your pages ranking. AEO (answer engine optimisation) structures your content so search engines can lift direct answers from it. GEO (generative engine optimisation) makes your business clear and consistent enough that AI tools describe and cite you correctly. We can't promise placements in AI answers — nobody honestly can — but we can make you the easiest source to use.",
    ],
    details: [
      { name: "Technical SEO", body: "Crawlability, Core Web Vitals, canonical tags, sitemaps, redirects and structured data, fixed at the code level." },
      { name: "Local SEO", body: "Location pages written for the real districts your customers search — Al Reem, Sohar Port, Dubai Marina — not copy-pasted city pages." },
      { name: "International SEO", body: "Market and language targeting with hreflang and country-specific content when you sell across borders." },
      { name: "AEO", body: "Question-led content with concise, answer-first paragraphs and FAQ markup that search engines can quote." },
      { name: "GEO", body: "Clear entity information, consistent business details across profiles and well-sourced content that AI assistants can rely on." },
      { name: "Audits and keyword research", body: "Competitor and keyword research with Semrush, and a prioritised list of fixes rather than a 90-page PDF." },
    ],
    forWho: [
      "Service businesses that win work from local searches",
      "Companies in the UAE and Gulf competing for high-value B2B leads",
      "Sites with good content that isn't ranking",
      "Businesses that want to be recommended when customers ask an AI assistant",
    ],
    approach: [
      { name: "Research against real competitors", body: "We study who already ranks for your best keywords and what their pages do better." },
      { name: "Fix the foundations", body: "Technical issues first, because content can't rank on a site search engines struggle to read." },
      { name: "One page, one purpose", body: "Each location and service page gets its own title, description, heading, content, FAQs and schema. No duplicate pages." },
      { name: "Report what matters", body: "Rankings, calls and enquiries from organic search, tracked in Search Console and analytics." },
    ],
    related: ["seven-lift", "masood-lifts", "maxtgc", "ferry-global"],
    faqs: [
      { q: "What is the difference between SEO and AEO?", a: "SEO aims to rank your pages in search results. AEO (answer engine optimisation) aims to have your content used as the direct answer — in featured snippets, voice search and AI summaries — by writing clear, answer-first content with the right structured data." },
      { q: "How does GEO work?", a: "Generative engine optimisation makes your business easy for AI assistants to understand and cite: consistent name, location and service details everywhere, clear descriptive pages, original information and trustworthy sources. It improves your chances of being mentioned; no one can guarantee it." },
      { q: "How long does SEO take to show results?", a: "Technical fixes can show within weeks. Rankings for competitive terms usually take months of steady work, depending on your competition and your site's starting point." },
      { q: "Do you guarantee first-page rankings?", a: "No. Search engines and AI assistants decide rankings, and anyone guaranteeing positions is overpromising. We commit to the work, the reporting and clear priorities." },
      { q: "Can you do SEO for specific areas of the UAE or Oman?", a: "Yes. We write location pages for specific districts and industrial zones, such as Al Reem Island in Abu Dhabi or Sohar Port in Oman, each with genuinely local content." },
    ],
  },
  {
    slug: "social-media",
    name: "Social media marketing",
    line: "Strategy, content and community management across the platforms your customers use.",
    includes: ["Instagram & Facebook", "LinkedIn", "TikTok", "YouTube", "Content planning"],
    tools: ["Meta Business Suite", "LinkedIn", "TikTok", "YouTube Studio", "Figma", "Canva"],
    seoTitle: "Social media marketing — strategy, content and management",
    metaDescription:
      "Social media strategy, content creation and account management for Instagram, Facebook, LinkedIn, TikTok and YouTube, tied to your website and leads.",
    h1: "Social media marketing",
    intro: [
      "We plan, create and manage social content that sends people somewhere useful: your website, your WhatsApp or your sales team.",
      "Because we also build the websites and landing pages, the post, the link and the page it lands on are designed together, and you can see which posts actually bring in enquiries.",
    ],
    details: [
      { name: "Strategy", body: "Which platforms matter for your buyers, what to post, how often, and how you'll measure it." },
      { name: "Content creation", body: "Posts, carousels, short videos and captions in your brand style, planned a month ahead." },
      { name: "Account management", body: "Scheduling, replies, comments and community management." },
      { name: "LinkedIn for B2B", body: "Founder and company page content for businesses that sell to other businesses." },
      { name: "Reporting", body: "Monthly reports on reach, engagement and, most importantly, clicks and enquiries." },
    ],
    forWho: [
      "Businesses posting irregularly with no clear plan",
      "B2B companies that need a credible LinkedIn presence",
      "Brands launching a new product or entering a new market",
    ],
    approach: [
      { name: "Platforms by audience", body: "We focus on the two or three platforms where your buyers are, rather than spreading thin." },
      { name: "Monthly content plan", body: "You approve a calendar in advance, so there are no last-minute surprises." },
      { name: "Linked to your site", body: "Posts point to pages built to convert, with tracking so results are visible." },
      { name: "Review and adjust", body: "Each month we keep what worked and drop what didn't." },
    ],
    related: [],
    faqs: [
      { q: "Which social media platforms should my business use?", a: "The ones your buyers use. For B2B services, LinkedIn usually comes first. For consumer brands, Instagram and TikTok. We recommend two or three platforms done well over five done badly." },
      { q: "How often should a business post?", a: "Consistency matters more than volume. A few strong posts a week on one or two platforms beats daily low-effort posting." },
      { q: "Do you create the content or just schedule it?", a: "Both. We plan, design, write and schedule content, and you approve it before it goes live." },
      { q: "How do you measure social media results?", a: "Beyond likes and reach, we track clicks to your site, WhatsApp messages and form enquiries that come from social, so you can see what it's worth." },
    ],
  },
  {
    slug: "branding-ui-ux",
    name: "Branding & UI/UX",
    line: "Brand identities, design systems and product interfaces, designed in Figma and built to the pixel.",
    includes: ["Brand identity", "Logo design", "UI/UX design", "Design systems", "Figma to code", "Website redesign"],
    tools: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Framer"],
    seoTitle: "Branding & UI/UX design — brand identity, product design and Figma to code",
    metaDescription:
      "Brand identity, logo design, UI/UX design, design systems and Figma-to-code development for websites, SaaS products and mobile apps.",
    h1: "Branding and UI/UX design",
    intro: [
      "We design brands, websites and product interfaces, and because the same team builds them, what you approve in Figma is what ships.",
      "Our UI/UX work covers sports, security, logistics, hospitality and technology businesses, and we've turned many Figma files from other designers into production interfaces without losing the detail.",
    ],
    details: [
      { name: "Brand identity", body: "Logo, colour, type and usage rules that work on a website, a social profile and a truck door." },
      { name: "UI/UX design", body: "User flows, wireframes and high-fidelity designs for websites, dashboards and apps." },
      { name: "Design systems", body: "Reusable components and tokens in Figma and in code, so new pages stay consistent." },
      { name: "Figma to code", body: "Pixel-accurate, responsive front ends built from your designer's Figma files." },
      { name: "Website redesign", body: "A fresh look for an existing site, keeping the content and URLs that already earn traffic." },
      { name: "Prototyping", body: "Clickable prototypes to test ideas with real users before development starts." },
    ],
    forWho: [
      "New businesses that need an identity and a website together",
      "SaaS products whose interface has grown messy over time",
      "Teams with designs ready in Figma who need them built faithfully",
    ],
    approach: [
      { name: "Content before decoration", body: "We design with your real words, products and data, so layouts hold up when they go live." },
      { name: "Mobile from the start", body: "Every screen is designed for phones as deliberately as for desktops." },
      { name: "Designed to be built", body: "Designs follow a grid and component system the developers use directly." },
      { name: "Accessible by default", body: "Readable contrast, clear focus states and sensible type sizes, checked before handover." },
    ],
    related: ["logistivo"],
    archiveKinds: ["UI/UX"],
    faqs: [
      { q: "What's included in a brand identity?", a: "Typically a logo with variations, colour palette, typography, icon style and a short guide on how to use them, delivered as design files and web-ready assets." },
      { q: "Can you build designs made by another designer?", a: "Yes. We regularly turn Figma designs into responsive, production-ready interfaces and flag anything that won't work on real screen sizes before building it." },
      { q: "What is a design system and do I need one?", a: "A shared library of colours, type and components used in both design and code. It's worth it once you have more than a handful of pages or screens, because it keeps everything consistent and speeds up new work." },
      { q: "Do you redesign existing websites?", a: "Yes. We keep the URLs and content that already rank, redesign the rest, and set up redirects for anything that moves." },
    ],
  },
  {
    slug: "performance-marketing",
    name: "Performance marketing",
    line: "Google, Meta and LinkedIn campaigns measured against leads and sales, not impressions.",
    includes: ["Google Ads", "Meta Ads", "LinkedIn Ads", "PPC management", "Conversion tracking"],
    tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Analytics 4", "Google Tag Manager"],
    seoTitle: "Performance marketing — Google Ads, Meta Ads and PPC management",
    metaDescription:
      "Google Ads, Meta Ads and LinkedIn Ads campaigns with proper conversion tracking and landing pages, managed against leads and sales.",
    h1: "Performance marketing",
    intro: [
      "Paid ads only make sense if you can see which clicks turned into customers. We set up the tracking first, then run Google, Meta and LinkedIn campaigns against that.",
      "We also build the landing pages, so the ad, the page and the form are designed as one journey instead of three separate jobs.",
    ],
    details: [
      { name: "Google Ads", body: "Search campaigns for high-intent keywords, plus Performance Max and remarketing where they fit." },
      { name: "Meta Ads", body: "Facebook and Instagram campaigns for awareness, leads and online sales." },
      { name: "LinkedIn Ads", body: "Targeted B2B campaigns by job title, industry and company size." },
      { name: "Conversion tracking", body: "GA4, Tag Manager and platform pixels set up so calls, WhatsApp clicks and forms are counted." },
      { name: "Landing pages", body: "Fast, focused pages built for each campaign and tested against each other." },
    ],
    forWho: [
      "Businesses that need leads now while SEO builds up",
      "Companies spending on ads without knowing what they get back",
      "Product launches and seasonal campaigns",
    ],
    approach: [
      { name: "Tracking before spending", body: "No campaign goes live until every conversion is measured." },
      { name: "Start narrow", body: "We begin with the highest-intent audiences and keywords, then widen what works." },
      { name: "Pages built for the ad", body: "Each campaign sends people to a page that matches its promise." },
      { name: "Weekly optimisation", body: "Budgets move to what's producing leads; underperformers are cut quickly." },
    ],
    related: [],
    faqs: [
      { q: "How much should I spend on Google Ads?", a: "Enough to collect meaningful data in your market, which depends on keyword costs and how competitive your industry is. We recommend a starting budget after keyword research rather than a fixed figure." },
      { q: "Google Ads or Meta Ads — which is better?", a: "Google Ads catches people already searching for what you sell, so it suits urgent, high-intent services. Meta Ads creates demand and suits visual products and audiences you can describe by interest." },
      { q: "Do you need access to my ad accounts?", a: "Yes, as a manager on your accounts. The accounts and their data stay yours." },
      { q: "How do you report on results?", a: "Cost per lead, leads by campaign and, where we can track it, revenue — not just clicks and impressions." },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI & automation",
    line: "AI features, chatbots and workflow automation that remove repetitive work from your team.",
    includes: ["AI integration", "AI chatbots", "Workflow automation", "CRM automation", "AI-powered apps"],
    tools: ["OpenAI API", "Claude API", "n8n", "Zapier", "Laravel", "Next.js"],
    seoTitle: "AI & automation — AI integration, chatbots and workflow automation",
    metaDescription:
      "AI integration, chatbots, CRM automation and workflow automation for businesses, built into your existing website, apps and tools.",
    h1: "AI and automation",
    intro: [
      "We add AI where it saves real time: answering common customer questions, drafting quotes, sorting enquiries and moving data between the tools your team already uses.",
      "We start with the boring question — which task takes your team the most hours each week — and automate that first.",
    ],
    details: [
      { name: "AI integration", body: "Language-model features inside your website, app or admin panel, such as summaries, drafting, search and classification." },
      { name: "AI chatbots", body: "Website and WhatsApp assistants trained on your services and policies, with hand-off to a person when needed." },
      { name: "Workflow automation", body: "Connect forms, CRMs, spreadsheets, email and WhatsApp so data moves without copy-and-paste." },
      { name: "CRM automation", body: "Lead routing, follow-up reminders and pipeline updates triggered automatically." },
      { name: "AI-powered apps", body: "New products built around AI features, with the guardrails and logging they need." },
    ],
    forWho: [
      "Teams answering the same customer questions every day",
      "Businesses re-typing data between forms, spreadsheets and CRMs",
      "Products that want to add AI features responsibly",
    ],
    approach: [
      { name: "Find the hours", body: "We map where your team's time goes and pick the most repetitive task first." },
      { name: "Small, measurable wins", body: "Each automation has a clear before-and-after, such as hours saved or response time." },
      { name: "Humans stay in the loop", body: "AI drafts and sorts; people approve anything that matters." },
      { name: "Privacy and logging", body: "We keep customer data handling clear and log what automated steps do." },
    ],
    related: [],
    faqs: [
      { q: "What can AI automate for a small business?", a: "Common examples are answering repeat customer questions, sorting and routing enquiries, drafting quotes and emails, summarising documents and moving data between tools." },
      { q: "Will an AI chatbot give customers wrong answers?", a: "It can, which is why we limit it to your approved information, make it hand over to a person when unsure, and review conversations after launch." },
      { q: "Can AI connect to WhatsApp?", a: "Yes, through the WhatsApp Business API. A chatbot can answer common questions and pass conversations to your team." },
      { q: "Do you build with OpenAI or other models?", a: "We work with several providers, including OpenAI and Anthropic's Claude, and choose based on the task, cost and data requirements." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
