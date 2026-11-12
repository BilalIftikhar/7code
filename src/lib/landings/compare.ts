import type { Landing } from "./types";

const C = [{ name: "Comparisons", href: "/compare" }];
const common = { kind: "compare" as const, crumbs: C, updated: "2026-11-13" };

export const compare: Landing[] = [
  {
    ...common,
    path: "/compare/custom-vs-off-the-shelf-software",
    name: "Custom vs off-the-shelf software",
    line: "When to buy a ready-made tool and when to build your own.",
    seoTitle: "Custom Software vs Off-the-Shelf Software: Which Is Right?",
    metaDescription:
      "Custom software vs off-the-shelf software compared: cost, fit, speed, ownership, integrations and risk, with a simple way to decide which is right for your business.",
    h1: "Custom software vs off-the-shelf software",
    contact: { service: "web-development", topic: "custom vs off-the-shelf software" },
    intro: [
      "Every growing business reaches this question. Off-the-shelf software is quick and cheap to start; custom software fits exactly but costs more upfront. The right answer depends on how standard your process is and how much it matters to your competitive edge.",
      "We build custom software for a living, and we still recommend off-the-shelf tools when they fit. Here's how we think about it.",
    ],
    answer: {
      q: "Should I buy or build software?",
      a: "Buy off-the-shelf software when your process is standard and a popular tool covers most of it. Build custom software when the process is a competitive advantage, when you need integrations no product offers, or when per-user subscription costs outgrow the cost of building your own.",
    },
    sections: [
      {
        type: "table",
        h: "Side by side",
        head: ["Factor", "Off-the-shelf", "Custom"],
        rows: [
          ["Upfront cost", "Low: subscription or licence", "Higher: design and development"],
          ["Ongoing cost", "Per user or per feature, rising with growth", "Hosting and support"],
          ["Time to start", "Days", "Weeks to months"],
          ["Fit to your process", "You adapt to the tool", "Built around your process"],
          ["Integrations", "Limited to what's supported", "Anything with an API"],
          ["Ownership", "Vendor owns the product and roadmap", "You own the code"],
          ["Risk", "Vendor price changes or shutdown", "Depends on the quality of the build"],
        ],
      },
      {
        type: "list",
        h: "Choose off-the-shelf when",
        items: [
          "The process is standard, like accounting, email or payroll",
          "A popular tool covers at least most of your needs",
          "You need something working this week",
          "Your team is small and the subscription is cheap",
        ],
      },
      {
        type: "list",
        h: "Choose custom when",
        items: [
          "Your workflow is how you beat competitors",
          "You're stitching several tools together with manual work",
          "Subscription costs keep rising as you hire",
          "You need data and integrations under your control",
          "You plan to sell the software to others",
        ],
      },
      {
        type: "text",
        h: "The hybrid option",
        paras: [
          "Many businesses get the best of both: off-the-shelf tools for standard functions, connected by automation, plus a small custom application for the part that's unique. That keeps costs down while removing the manual work between tools.",
        ],
      },
    ],
    faqs: [
      { q: "Is custom software always more expensive?", a: "Upfront, yes. Over several years it can cost less than subscriptions for a growing team, especially if it removes manual work." },
      { q: "Can we start off-the-shelf and switch later?", a: "Yes. Many businesses do. Choose tools that let you export your data so a later move is easier." },
      { q: "How long does custom software take?", a: "A focused first release often takes weeks, not months, when the scope is kept tight." },
    ],
    related: ["/services/custom-software-development", "/compare/custom-crm-vs-ready-made-crm", "/compare/custom-development-vs-no-code", "/ai-solutions/workflow-automation"],
  },
  {
    ...common,
    path: "/compare/laravel-vs-nodejs-for-saas",
    name: "Laravel vs Node.js for SaaS",
    line: "Which back end suits your SaaS product, team and roadmap.",
    seoTitle: "Laravel vs Node.js for SaaS: Which Back End to Choose?",
    metaDescription:
      "Laravel vs Node.js for SaaS products compared: development speed, performance, real-time features, ecosystem, hiring and cost, with clear recommendations for different kinds of SaaS.",
    h1: "Laravel vs Node.js for SaaS",
    contact: { service: "web-development", topic: "Laravel vs Node.js for a SaaS product" },
    intro: [
      "Both Laravel and Node.js power successful SaaS products. The better choice depends on what your product does most: complex business rules and admin work, or real-time interaction and a single TypeScript codebase.",
      "We build with both, so here is an honest comparison.",
    ],
    answer: {
      q: "Is Laravel or Node.js better for SaaS?",
      a: "Laravel is usually faster to build business-heavy SaaS with lots of forms, roles, billing and admin screens. Node.js (often with NestJS) is better for real-time features and teams that want TypeScript across front end and back end. Both scale well when designed properly.",
    },
    sections: [
      {
        type: "table",
        h: "Comparison",
        head: ["Factor", "Laravel (PHP)", "Node.js / NestJS"],
        rows: [
          ["Development speed", "Very fast for CRUD, auth, billing and admin", "Fast, more setup for structure"],
          ["Real-time features", "Possible with Reverb or Pusher", "Natural strength with WebSockets"],
          ["Language", "PHP on the server, JS in the browser", "TypeScript everywhere"],
          ["Built-in features", "Auth, queues, mail, scheduling, billing", "Chosen from libraries or NestJS modules"],
          ["Hosting", "Cheap shared hosting to cloud", "Cloud, containers or serverless"],
          ["Hiring", "Large PHP/Laravel pool", "Large JavaScript/TypeScript pool"],
        ],
      },
      {
        type: "cards",
        h: "Our recommendation",
        items: [
          { name: "Choose Laravel", body: "B2B SaaS, CRMs, ERPs, booking and admin-heavy products where business rules dominate." },
          { name: "Choose Node.js", body: "Chat, collaboration, live tracking and products where one TypeScript stack simplifies the team." },
          { name: "Either works", body: "Most standard SaaS products. Pick the one your team will maintain." },
        ],
      },
      {
        type: "text",
        h: "Performance and scaling",
        paras: [
          "For most SaaS products, performance is decided by database design, caching and queries rather than the language. Both Laravel and Node.js handle large numbers of users when the data model and infrastructure are designed properly.",
        ],
      },
    ],
    faqs: [
      { q: "Can we use Laravel with a React or Next.js front end?", a: "Yes, it's a common and productive setup, with Laravel as the API." },
      { q: "Which is cheaper to build?", a: "For admin-heavy products, Laravel often takes less time because so much is built in. For real-time products, Node.js may be quicker." },
      { q: "Can we switch later?", a: "It's possible but expensive. It's worth choosing carefully at the start." },
    ],
    related: ["/technologies/laravel-development", "/technologies/nodejs-development", "/technologies/nestjs-development", "/services/saas-development"],
  },
  {
    ...common,
    path: "/compare/react-vs-vuejs",
    name: "React vs Vue.js",
    line: "Two leading front-end frameworks compared for business projects.",
    seoTitle: "React vs Vue.js: Which Front-End Framework to Choose?",
    metaDescription:
      "React vs Vue.js compared for business projects: learning curve, ecosystem, performance, hiring, SEO frameworks (Next.js and Nuxt) and long-term maintenance, with clear recommendations.",
    h1: "React vs Vue.js",
    contact: { service: "web-development", topic: "React vs Vue.js" },
    intro: [
      "React and Vue.js are both mature, fast and widely used. For most projects either will work. The real differences are ecosystem size, hiring and how your existing team likes to work.",
    ],
    answer: {
      q: "Should I choose React or Vue.js?",
      a: "Choose React if you want the largest ecosystem, the biggest hiring pool and Next.js for SEO. Choose Vue.js if your team already uses it or Laravel, or prefers its gentler learning curve and single-file components. Both perform well.",
    },
    sections: [
      {
        type: "table",
        h: "Comparison",
        head: ["Factor", "React", "Vue.js"],
        rows: [
          ["Learning curve", "Moderate: JSX and hooks", "Gentle: templates and single-file components"],
          ["Ecosystem", "Largest of any front-end library", "Large and well curated"],
          ["SEO framework", "Next.js", "Nuxt"],
          ["Hiring", "Easiest to hire for", "Good pool, smaller than React"],
          ["Mobile", "React Native shares concepts", "Options exist but less common"],
          ["Laravel pairing", "Works well via API or Inertia", "Traditional favourite, also via Inertia"],
        ],
      },
      {
        type: "list",
        h: "React is the better fit when",
        items: [
          "You expect to hire several front-end developers",
          "You may build a mobile app with React Native",
          "You want Next.js for SEO and server rendering",
          "You need niche libraries for charts, editors or maps",
        ],
      },
      {
        type: "list",
        h: "Vue.js is the better fit when",
        items: [
          "Your team already knows Vue",
          "You're extending an existing Vue or Laravel project",
          "You value simple, readable templates",
          "You're adding interactivity to server-rendered pages",
        ],
      },
      {
        type: "text",
        h: "Switching between them",
        paras: [
          "Moving an existing product from one framework to the other is rarely worth it on its own: both are capable, and a rewrite costs months that could go into features. The sensible moments to switch are when a codebase is already being rebuilt for other reasons, when hiring has become a real constraint, or when a legacy Vue 2 or class-component React app needs modernising anyway.",
          "If you do switch, we migrate screen by screen behind a router, so the product keeps shipping while the old framework shrinks. Shared design tokens and a common API layer make the two frameworks look identical to users during the transition.",
        ],
      },
    ],
    faqs: [
      { q: "Can React and Vue coexist in one product?", a: "Temporarily, yes — usually during a gradual migration, with each framework owning whole routes. As a permanent setup it doubles maintenance, so we treat it as a bridge, not a destination." },
      { q: "Which is faster?", a: "In real applications the difference is negligible. How the app is built matters far more." },
      { q: "Is Vue dying?", a: "No. Vue 3 is actively developed and widely used, though React has the larger market share." },
      { q: "What does 7CODE use?", a: "React and Next.js for most new projects, and Vue.js for existing Vue codebases and some Laravel projects." },
    ],
    related: ["/technologies/react-development", "/technologies/vuejs-development", "/compare/nextjs-vs-react", "/technologies/javascript-development"],
  },
  {
    ...common,
    path: "/compare/nextjs-vs-react",
    name: "Next.js vs React",
    line: "What Next.js adds to React and when you need it.",
    seoTitle: "Next.js vs React: What's the Difference and Which to Use?",
    metaDescription:
      "Next.js vs React explained: React is a UI library, Next.js is a framework built on it that adds routing, server rendering and SEO. Here's when each makes sense for your project.",
    h1: "Next.js vs React",
    contact: { service: "web-development", topic: "Next.js vs React" },
    intro: [
      "This is a common question, but it compares two different things. React is a library for building interfaces. Next.js is a framework built on React that adds routing, server rendering and performance features.",
    ],
    answer: {
      q: "What is the difference between Next.js and React?",
      a: "React is a JavaScript library for building user interface components. Next.js is a framework that uses React and adds file-based routing, server-side rendering, static generation, image optimisation and API routes, which make websites faster and easier for search engines to index.",
    },
    sections: [
      {
        type: "table",
        h: "Comparison",
        head: ["Feature", "React (with Vite)", "Next.js"],
        rows: [
          ["Rendering", "In the browser", "Server, static or browser, per page"],
          ["SEO", "Weaker without extra work", "Strong out of the box"],
          ["Routing", "Add a router library", "Built in"],
          ["Back-end code", "Separate server needed", "API routes and server actions included"],
          ["Best for", "Apps behind a login", "Websites, SaaS, eCommerce, content"],
        ],
      },
      {
        type: "list",
        h: "Use plain React when",
        items: ["The whole app is behind a login", "SEO doesn't matter", "You already have a separate API", "You want the simplest build setup"],
      },
      {
        type: "list",
        h: "Use Next.js when",
        items: [
          "Public pages need to rank in Google and AI search",
          "First-load speed matters on mobile",
          "You want marketing site and app in one codebase",
          "You need server-side logic close to the UI",
        ],
      },
      {
        type: "text",
        h: "What this means for costs",
        paras: [
          "A plain React app needs a separate back end for anything dynamic, which means two deployments, two repositories to maintain and often two sets of hosting bills. Next.js folds the server work into the same project, which is why small teams ship faster with it: one codebase, one deploy, one place to look when something breaks.",
          "The trade-off is that Next.js hosting is more involved than static file hosting. On Vercel that's invisible; on your own servers it means running Node.js. For a site that is genuinely static — no forms, no personalisation — a plain React build, or even plain HTML, can still be the cheaper choice.",
        ],
      },
    ],
    faqs: [
      { q: "Does Next.js cost more to host than plain React?", a: "A static React build can sit on any file host. Next.js needs a Node.js server or a platform like Vercel, which has a free tier that covers many business sites. For most projects the difference is small compared with the development time it saves." },
      { q: "Is Next.js harder than React?", a: "It adds concepts like server components and rendering modes, but removes setup work. Developers who know React adapt quickly." },
      { q: "Can we move a React app to Next.js?", a: "Yes, usually incrementally, page by page." },
      { q: "What does 7code.digital run on?", a: "Next.js." },
    ],
    related: ["/technologies/nextjs-development", "/technologies/react-development", "/compare/react-vs-vuejs", "/services/web-development"],
  },
  {
    ...common,
    path: "/compare/custom-crm-vs-ready-made-crm",
    name: "Custom CRM vs ready-made CRM",
    line: "HubSpot, Zoho and Salesforce versus a CRM built for your process.",
    seoTitle: "Custom CRM vs Ready-Made CRM: Cost, Fit and Control",
    metaDescription:
      "Custom CRM vs ready-made CRMs like HubSpot, Zoho and Salesforce: setup time, per-user costs, customisation, WhatsApp integration, data ownership and when each makes sense.",
    h1: "Custom CRM vs ready-made CRM",
    contact: { service: "web-development", topic: "a CRM" },
    intro: [
      "Ready-made CRMs like HubSpot, Zoho and Salesforce are powerful and quick to start. A custom CRM costs more upfront but follows your sales process exactly and has no per-user fees. Which is right depends on your team size, process and integrations.",
    ],
    answer: {
      q: "Is a custom CRM worth it?",
      a: "A custom CRM is worth it when your sales process doesn't fit standard pipelines, when you rely on channels like WhatsApp that ready-made tools handle poorly, when per-user subscription costs are high, or when you want full control of customer data. Otherwise, a ready-made CRM is usually the faster, cheaper choice.",
    },
    sections: [
      {
        type: "table",
        h: "Comparison",
        head: ["Factor", "Ready-made CRM", "Custom CRM"],
        rows: [
          ["Setup", "Days to weeks", "Weeks to months"],
          ["Cost model", "Per user, per month", "Build cost, then hosting and support"],
          ["Customisation", "Within the vendor's limits", "Unlimited"],
          ["WhatsApp and local tools", "Via add-ons, if available", "Built in as needed"],
          ["Data", "Stored by the vendor", "On infrastructure you control"],
          ["Upgrades", "Automatic, on vendor's schedule", "Planned with you"],
        ],
      },
      {
        type: "list",
        h: "Ready-made is right when",
        items: ["Your sales process is standard", "The team is small", "You need it running this month", "You want marketing automation built in"],
      },
      {
        type: "list",
        h: "Custom is right when",
        items: [
          "Sales happen mostly on WhatsApp and phone",
          "You need quotations, jobs or inventory in the same system",
          "Per-user costs have become significant",
          "You've already outgrown customisation limits",
        ],
      },
      {
        type: "text",
        h: "The middle path: customise, then outgrow",
        paras: [
          "Many businesses get years of value from a ready-made CRM plus light automation: n8n moving leads in from the website and WhatsApp, a few custom fields, a weekly export for reporting. That setup costs little and tells you exactly what a custom CRM would need to do, because every workaround you build is a requirement written down.",
          "When the workarounds start outnumbering the features — a spreadsheet beside the CRM, deals tracked in chat, reports assembled by hand — that's the moment the custom build pays for itself. By then you also know your process well enough to specify it precisely, which keeps the build short.",
        ],
      },
    ],
    faqs: [
      { q: "Can we keep our ready-made CRM for marketing and add a custom system for operations?", a: "Yes, and it's a common pattern: the marketing CRM keeps its email and campaign tools, while a custom system handles quotations, jobs or inventory, with the two synced through their APIs." },
      { q: "Can a custom CRM integrate with HubSpot?", a: "Yes. Some businesses keep HubSpot for marketing and use a custom system for operations, synced through APIs." },
      { q: "How long does a custom CRM take?", a: "A focused pipeline-and-quotation CRM can go live in weeks; more modules take longer." },
      { q: "Can you migrate us off our current CRM?", a: "Yes, with contacts, companies and deal history exported and imported." },
    ],
    related: ["/services/crm-development", "/compare/custom-vs-off-the-shelf-software", "/ai-solutions/ai-lead-generation", "/industries/real-estate-software"],
  },
  {
    ...common,
    path: "/compare/ai-agents-vs-traditional-automation",
    name: "AI agents vs traditional automation",
    line: "Rules-based workflows versus AI that reasons about each case.",
    seoTitle: "AI Agents vs Traditional Automation: Which Do You Need?",
    metaDescription:
      "AI agents vs traditional rules-based automation compared: reliability, flexibility, cost, risk and best use cases, with guidance on combining both in business workflows.",
    h1: "AI agents vs traditional automation",
    contact: { service: "ai-automation", topic: "AI agents and automation" },
    intro: [
      "Traditional automation follows fixed rules: if this happens, do that. AI agents use language models to handle situations that vary, deciding the next step based on what they find. Each is better at different jobs, and the best systems use both.",
    ],
    answer: {
      q: "What is the difference between an AI agent and automation?",
      a: "Traditional automation executes predefined rules and steps exactly the same way every time. An AI agent uses a language model to interpret inputs, plan steps and choose tools, so it can handle varied and unstructured situations, though with less predictability.",
    },
    sections: [
      {
        type: "table",
        h: "Comparison",
        head: ["Factor", "Traditional automation", "AI agents"],
        rows: [
          ["Best for", "Structured, repeatable steps", "Varied, unstructured tasks"],
          ["Reliability", "Very high and predictable", "High but needs checks"],
          ["Handling exceptions", "Fails or needs a new rule", "Can reason about new cases"],
          ["Running cost", "Very low", "Per AI request"],
          ["Setup", "Map every rule", "Define the goal, tools and limits"],
          ["Auditability", "Easy", "Needs step logging"],
        ],
      },
      {
        type: "cards",
        h: "Examples",
        items: [
          { name: "Traditional automation", body: "New form submission creates a CRM contact and sends a welcome email." },
          { name: "AI agent", body: "Reads a free-text enquiry, works out what's needed, checks stock and drafts a quote." },
          { name: "Combined", body: "A workflow handles the fixed steps and calls an AI agent only for the judgement step." },
        ],
      },
      {
        type: "list",
        h: "How we decide",
        items: [
          "If clear rules can describe it, use traditional automation",
          "If inputs are messy text or documents, add an AI step",
          "If mistakes are costly, keep a person in the loop",
          "Measure accuracy before removing human review",
        ],
      },
    ],
    faqs: [
      { q: "Are AI agents reliable enough for business?", a: "For well-defined tasks with checks and human approval for important actions, yes. We measure accuracy on real examples before going live." },
      { q: "Are AI agents expensive to run?", a: "They cost more per task than rules-based automation, but often far less than the staff time they save." },
      { q: "Can n8n run AI agents?", a: "Yes. n8n has AI agent nodes and can combine them with regular workflow steps." },
    ],
    related: ["/ai-solutions/ai-agent-development", "/ai-solutions/workflow-automation", "/ai-solutions/n8n-automation", "/ai-solutions/business-process-automation"],
  },
  {
    ...common,
    path: "/compare/n8n-vs-zapier",
    name: "n8n vs Zapier",
    line: "Self-hostable flexibility versus the simplest app connector.",
    seoTitle: "n8n vs Zapier: Which Automation Tool Is Right for You?",
    metaDescription:
      "n8n vs Zapier compared: pricing model, self-hosting, flexibility, AI features, ease of use and integrations, with recommendations for small teams and growing businesses.",
    h1: "n8n vs Zapier",
    contact: { service: "ai-automation", topic: "n8n or Zapier automation" },
    intro: [
      "Zapier is the best-known automation tool and the easiest to start with. n8n is more flexible, can be self-hosted and handles complex logic and high volumes more economically. We build with both and choose per project.",
    ],
    answer: {
      q: "Is n8n better than Zapier?",
      a: "n8n is better for complex, high-volume or data-sensitive workflows because it can be self-hosted, supports code and branching logic, and isn't priced per task. Zapier is better for simple automations between popular apps when ease of use matters most.",
    },
    sections: [
      {
        type: "table",
        h: "Comparison",
        head: ["Factor", "n8n", "Zapier"],
        rows: [
          ["Hosting", "Cloud or self-hosted", "Cloud only"],
          ["Pricing model", "By executions on cloud; server cost if self-hosted", "By tasks per month"],
          ["Ease of use", "Moderate, more technical", "Very easy"],
          ["Complex logic", "Branching, loops, code nodes", "Paths and filters, limited code"],
          ["App integrations", "Hundreds, plus any HTTP API", "Thousands"],
          ["AI features", "AI agent and LLM nodes", "AI steps and agents"],
          ["Data control", "Full when self-hosted", "Stored with Zapier"],
        ],
      },
      {
        type: "list",
        h: "Pick Zapier when",
        items: ["You need a quick, simple automation", "Non-technical staff will build workflows", "Volumes are low", "You use niche apps only Zapier supports"],
      },
      {
        type: "list",
        h: "Pick n8n when",
        items: ["Workflows have complex logic", "Volumes would make per-task pricing expensive", "Data must stay on your own server", "You need custom code or AI agents in the flow"],
      },
      {
        type: "text",
        h: "Cost at real volumes",
        paras: [
          "The pricing models only look similar at low volume. Zapier counts every step of every run as a task, so a five-step workflow that fires two hundred times a day consumes about thirty thousand tasks a month — a mid-tier plan on its own. Self-hosted n8n runs the same load on a small cloud server whose price doesn't change whether the workflow fires once or ten thousand times.",
          "That's why our usual advice is volume-based: prototype in whatever tool is fastest, but once an automation becomes part of daily operations, move it somewhere its cost is flat and its data is yours.",
        ],
      },
    ],
    faqs: [
      { q: "How hard is it to move from Zapier to n8n?", a: "Most Zaps map one-to-one onto n8n nodes, so a typical account migrates in days, not weeks. The work is mostly re-entering credentials and testing each workflow against real data before switching off the original." },
      { q: "Can you migrate our Zaps to n8n?", a: "Yes. We rebuild them in n8n, usually simplifying them along the way, and run both in parallel until the new ones are proven." },
      { q: "Is self-hosted n8n secure?", a: "Yes, when set up properly with HTTPS, authentication, backups and regular updates." },
      { q: "Is n8n free?", a: "n8n has a self-hostable edition under its fair-code licence, plus paid cloud and enterprise plans. Check its current licence terms for your use case." },
    ],
    related: ["/ai-solutions/n8n-automation", "/compare/n8n-vs-make", "/ai-solutions/workflow-automation", "/ai-solutions/python-automation"],
  },
  {
    ...common,
    path: "/compare/n8n-vs-make",
    name: "n8n vs Make",
    line: "Two visual automation platforms compared on cost, control and power.",
    seoTitle: "n8n vs Make (Integromat): Automation Platforms Compared",
    metaDescription:
      "n8n vs Make compared: visual builders, pricing by operations vs executions, self-hosting, error handling, code and AI features, and which suits your business workflows.",
    h1: "n8n vs Make",
    contact: { service: "ai-automation", topic: "n8n or Make automation" },
    intro: [
      "Make (formerly Integromat) and n8n are both visual automation platforms that go further than simple app connectors. The biggest differences are hosting, pricing model and how much custom code you need.",
    ],
    answer: {
      q: "Should I use n8n or Make?",
      a: "Make is a polished cloud platform that's great for visual, moderately complex automations. n8n is better if you want to self-host, keep data on your own servers, avoid per-operation pricing at high volumes or write custom code inside workflows.",
    },
    sections: [
      {
        type: "table",
        h: "Comparison",
        head: ["Factor", "n8n", "Make"],
        rows: [
          ["Hosting", "Cloud or self-hosted", "Cloud only"],
          ["Pricing model", "Executions (cloud) or server cost", "Operations / credits per month"],
          ["Visual builder", "Node-based canvas", "Scenario-based canvas"],
          ["Custom code", "JavaScript and Python nodes", "Limited"],
          ["Error handling", "Error workflows and retries", "Error handlers and retries"],
          ["Best for", "Technical teams, high volume, data control", "Visual builders, moderate volume"],
        ],
      },
      {
        type: "list",
        h: "Choose Make when",
        items: ["You want a polished cloud tool with no maintenance", "Your team prefers a visual approach", "Volumes are moderate"],
      },
      {
        type: "list",
        h: "Choose n8n when",
        items: ["You need self-hosting for data or cost reasons", "You want code inside workflows", "You're building AI agents into automations", "Volumes are high"],
      },
      {
        type: "text",
        h: "How the builders feel in practice",
        paras: [
          "Make's canvas is the friendliest of any automation tool: modules snap together, data mapping is visual, and errors are easy to spot. Non-technical staff genuinely can maintain scenarios. n8n's canvas is close, but it exposes more of what's really happening — JSON in, JSON out — which technical users prefer and beginners find busier.",
          "Where n8n pulls ahead is the escape hatch: when a step needs logic the visual tools can't express, you drop in a code node and write it, instead of chaining six workaround modules. On long-lived automations that difference compounds; the n8n version stays readable while the no-code workaround grows brittle.",
        ],
      },
    ],
    faqs: [
      { q: "Can Make handle AI steps like n8n?", a: "Make has AI modules and connects to OpenAI and similar services. n8n goes further with dedicated agent nodes and custom code around the AI call, which matters once prompts need pre- and post-processing." },
      { q: "Can n8n and Make work together?", a: "Yes, through webhooks, though most businesses standardise on one to keep things simple." },
      { q: "Which is cheaper?", a: "For high volumes, self-hosted n8n is usually cheaper. For small volumes, both can be inexpensive." },
      { q: "Do you build Make scenarios?", a: "Yes, though we recommend n8n for most new projects for the reasons above." },
    ],
    related: ["/ai-solutions/n8n-automation", "/compare/n8n-vs-zapier", "/ai-solutions/workflow-automation", "/ai-solutions/business-process-automation"],
  },
  {
    ...common,
    path: "/compare/custom-development-vs-no-code",
    name: "Custom development vs no-code",
    line: "When Bubble, Webflow and similar tools are enough, and when they aren't.",
    seoTitle: "Custom Development vs No-Code Platforms: Pros and Cons",
    metaDescription:
      "Custom development vs no-code platforms like Bubble and Webflow: speed, cost, scalability, performance, ownership and vendor lock-in, with advice on when to switch from no-code to code.",
    h1: "Custom development vs no-code",
    contact: { service: "web-development", topic: "custom development vs no-code" },
    intro: [
      "No-code platforms let non-developers build websites and apps quickly. They're excellent for prototypes and simple products. Custom code takes longer at first but removes limits on performance, logic and ownership.",
    ],
    answer: {
      q: "Is no-code good enough for a startup?",
      a: "No-code is often good enough to validate an idea or run a simple product. Startups usually move to custom code when they hit limits in performance, complex logic, integrations, costs at scale, or investor concerns about owning the core technology.",
    },
    sections: [
      {
        type: "table",
        h: "Comparison",
        head: ["Factor", "No-code", "Custom development"],
        rows: [
          ["Speed to first version", "Very fast", "Fast with tight scope"],
          ["Upfront cost", "Low", "Higher"],
          ["Complex logic", "Possible but awkward", "No limits"],
          ["Performance at scale", "Can degrade", "Designed for it"],
          ["Ownership", "Platform-dependent", "You own the code"],
          ["Lock-in", "High: hard to export", "Low"],
        ],
      },
      {
        type: "list",
        h: "Signs you've outgrown no-code",
        items: [
          "Pages slow down as data grows",
          "Workarounds pile up for simple features",
          "Platform costs rise faster than revenue",
          "Integrations you need aren't possible",
          "Investors ask who owns the technology",
        ],
      },
      {
        type: "steps",
        h: "Moving from no-code to code",
        items: [
          { name: "Document", body: "Record every feature and rule in the current app." },
          { name: "Design", body: "Data model and architecture for the code version." },
          { name: "Rebuild", body: "Core features rebuilt, often simplified." },
          { name: "Migrate", body: "Users and data moved, old platform retired." },
        ],
      },
      {
        type: "text",
        h: "What no-code is genuinely good at",
        paras: [
          "We recommend no-code more often than you might expect from a development agency. A landing page in Webflow, an internal request tracker in Airtable, a prototype in Bubble to show investors — these are the right tool for the moment, because the thing being tested is the idea, not the engineering.",
          "The mistake we see is not starting with no-code; it's staying past the point where the platform fights the product. The monthly bill creeps up, every new feature is a workaround, and the data you need is locked behind an export button. Budget for the rebuild the day the product proves itself, and the transition is calm instead of forced.",
        ],
      },
    ],
    faqs: [
      { q: "How much does it cost to rebuild a no-code app properly?", a: "Usually less than the original guesswork suggests, because the no-code version has already answered the hard product questions. We quote fixed after reviewing the existing app, and the rebuild often simplifies features that usage data shows nobody touches." },
      { q: "Should I start with no-code?", a: "If the idea is unproven and simple, it can be smart. If the product depends on custom logic or performance, starting with code avoids a rebuild." },
      { q: "Can you rebuild our Bubble app?", a: "Yes. We document the existing app, rebuild it properly and migrate your users and data." },
      { q: "What about low-code tools for internal apps?", a: "They're useful for simple internal tools. For customer-facing products, custom code usually wins long term." },
    ],
    related: ["/services/mvp-development", "/compare/custom-vs-off-the-shelf-software", "/services/saas-development", "/technologies/nextjs-development"],
  },
];
