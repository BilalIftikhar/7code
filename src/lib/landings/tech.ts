import type { Landing } from "./types";

const C = [{ name: "Technologies", href: "/technologies" }];
const common = { kind: "technology" as const, crumbs: C, contact: { service: "web-development" } };

export const tech: Landing[] = [
  {
    ...common,
    path: "/technologies/laravel-development",
    name: "Laravel development",
    line: "Laravel applications, APIs and SaaS back ends, built cleanly and kept up to date.",
    seoTitle: "Laravel Development Company | Laravel Developers for Hire",
    metaDescription:
      "Laravel development services: web applications, SaaS back ends, APIs, CRMs and upgrades from older Laravel versions, by experienced Laravel developers in Pakistan serving the UAE and worldwide.",
    h1: "Laravel development",
    serviceType: "Laravel development",
    intro: [
      "Laravel is the PHP framework we reach for when a product has a lot of business logic: user roles, approvals, invoicing, reporting and admin work. It is fast to build with, mature, and easy for other developers to pick up.",
      "We build new Laravel applications, add features to existing ones, and upgrade old Laravel and plain-PHP projects to supported versions.",
    ],
    answer: {
      q: "What is Laravel used for?",
      a: "Laravel is an open-source PHP framework used to build web applications, APIs, SaaS back ends, CRMs, ERPs and admin systems. It includes routing, authentication, queues, an ORM (Eloquent) and testing tools out of the box.",
    },
    sections: [
      {
        type: "cards",
        h: "Laravel services",
        items: [
          { name: "Custom Laravel applications", body: "Portals, internal tools and business systems with roles, workflows and reporting." },
          { name: "Laravel APIs", body: "REST APIs for mobile apps, React or Next.js front ends and partner integrations, using Sanctum or Passport." },
          { name: "SaaS back ends", body: "Multi-tenant Laravel back ends with subscriptions through Cashier and Stripe." },
          { name: "Upgrades and maintenance", body: "Upgrading old Laravel versions, removing abandoned packages and fixing security issues." },
          { name: "Performance tuning", body: "Query optimisation, eager loading, caching and queues for slow Laravel apps." },
          { name: "Admin panels", body: "Back-office tools built with Filament or custom interfaces." },
        ],
      },
      {
        type: "list",
        h: "Why choose Laravel",
        items: [
          "Very productive for business applications with many rules",
          "Large ecosystem: queues, mail, scheduling, testing and payments",
          "Easy to hire PHP and Laravel developers later",
          "Runs on affordable hosting as well as the cloud",
          "Pairs well with React, Vue.js or Next.js front ends",
        ],
      },
      {
        type: "steps",
        h: "Taking over a Laravel project",
        items: [
          { name: "Code review", body: "Structure, security, dependencies, tests and performance checked." },
          { name: "Stabilise", body: "Critical bugs and security issues fixed first." },
          { name: "Upgrade", body: "Laravel and PHP brought to supported versions in safe steps." },
          { name: "Continue building", body: "New features delivered on a stable base." },
        ],
      },
    ],
    tools: ["Laravel", "PHP", "Eloquent", "MySQL", "PostgreSQL", "Redis", "Livewire", "Filament", "Inertia.js"],
    work: ["av-leads", "logistivo"],
    faqs: [
      { q: "Is Laravel still a good choice?", a: "Yes. Laravel is actively maintained, widely used and well suited to business applications and SaaS back ends." },
      { q: "Can you upgrade an old Laravel project?", a: "Yes. We upgrade step by step through major versions, updating packages and tests along the way, so the application keeps working." },
      { q: "Laravel or Node.js?", a: "Laravel suits apps heavy in business logic and admin work; Node.js suits real-time features and all-TypeScript teams. See our comparison page for detail." },
      { q: "Do you build Laravel APIs for mobile apps?", a: "Yes, with token authentication, versioning and documentation." },
    ],
    related: ["/technologies/php-development", "/compare/laravel-vs-nodejs-for-saas", "/services/saas-development", "/services/crm-development"],
  },
  {
    ...common,
    path: "/technologies/php-development",
    name: "PHP development",
    line: "Modern PHP applications, plus maintenance and rescue of legacy PHP systems.",
    seoTitle: "PHP Development Services | Custom PHP & Legacy Upgrades",
    metaDescription:
      "PHP development services: custom PHP applications, Laravel and CodeIgniter projects, legacy PHP maintenance, security fixes and upgrades to modern PHP versions. Remote team in Pakistan.",
    h1: "PHP development",
    serviceType: "PHP development",
    intro: [
      "A large share of the web still runs on PHP, from WordPress sites to custom business systems written a decade ago. We build new PHP applications using Laravel and modern PHP, and we look after older PHP systems that businesses still depend on.",
      "Legacy work is careful work: we document what the system does, secure it, and modernise it in steps rather than risking a big-bang rewrite.",
    ],
    answer: {
      q: "Is PHP still used for web development?",
      a: "Yes. PHP powers WordPress, Laravel and many custom business systems. Modern PHP versions are fast and well supported, and frameworks like Laravel make it a solid choice for new web applications.",
    },
    sections: [
      {
        type: "cards",
        h: "What we do with PHP",
        items: [
          { name: "New PHP applications", body: "Built with Laravel and current PHP versions, with tests and clean structure." },
          { name: "Legacy maintenance", body: "Bug fixes and small features for older custom PHP and CodeIgniter systems." },
          { name: "Security hardening", body: "Fixing SQL injection, XSS, weak password storage and outdated libraries." },
          { name: "PHP version upgrades", body: "Moving applications to supported PHP versions without breaking them." },
          { name: "Migration to Laravel", body: "Gradually moving legacy code into a Laravel structure, module by module." },
          { name: "WordPress development", body: "Custom themes and plugins written properly, not bolted together." },
        ],
      },
      {
        type: "list",
        h: "Signs your PHP system needs attention",
        items: [
          "It runs on a PHP version that no longer gets security updates",
          "Nobody on the team understands parts of the code",
          "Pages are slow and the server struggles at busy times",
          "Small changes break unrelated features",
          "The original developer is no longer available",
        ],
      },
      {
        type: "steps",
        h: "How we modernise legacy PHP",
        items: [
          { name: "Audit", body: "Map the code, database and dependencies, and list the risks." },
          { name: "Secure", body: "Fix critical vulnerabilities and set up backups and monitoring." },
          { name: "Test", body: "Add tests around the most important behaviour before refactoring." },
          { name: "Modernise", body: "Upgrade PHP and move code into a maintainable structure step by step." },
        ],
      },
    ],
    tools: ["PHP 8", "Laravel", "CodeIgniter", "WordPress", "MySQL", "Composer", "PHPUnit"],
    faqs: [
      { q: "Can you work on code written by someone else?", a: "Yes. Most PHP maintenance work is on inherited code. We start with an audit so you know what you're dealing with." },
      { q: "Should we rewrite our PHP system?", a: "Usually not all at once. Incremental modernisation keeps the business running and reduces risk. We recommend a rewrite only when the existing code genuinely can't be saved." },
      { q: "Do you do WordPress development?", a: "Yes, see our WordPress service page for custom themes, plugins and speed work." },
    ],
    related: ["/technologies/laravel-development", "/services/wordpress", "/technologies/mysql-development", "/services/custom-software-development"],
  },
  {
    ...common,
    path: "/technologies/react-development",
    name: "React development",
    line: "Fast, maintainable React interfaces for web apps, dashboards and SaaS products.",
    seoTitle: "React.js Development Company | Hire React Developers",
    metaDescription:
      "React.js development services: dashboards, SaaS interfaces, portals and component libraries built in React and TypeScript, connected to Laravel, Node.js or any REST API.",
    h1: "React.js development",
    serviceType: "React development",
    intro: [
      "React is the most widely used library for building interactive interfaces. We use it for dashboards, portals, SaaS products and anything where users click, filter and edit data all day.",
      "We write React in TypeScript, keep components small and tested, and pay attention to the details that make an interface feel fast: loading states, optimistic updates and accessible forms.",
    ],
    answer: {
      q: "What is React used for?",
      a: "React is a JavaScript library for building user interfaces from reusable components. It is used for single-page apps, dashboards, SaaS front ends and, with frameworks like Next.js, full websites with server rendering.",
    },
    sections: [
      {
        type: "cards",
        h: "React services",
        items: [
          { name: "Web app front ends", body: "Interfaces for SaaS products, portals and internal tools, connected to your API." },
          { name: "Dashboards and data views", body: "Tables, charts, filters and exports that stay fast with large data sets." },
          { name: "Component libraries", body: "Reusable, documented components that keep your product consistent." },
          { name: "Performance work", body: "Fixing slow renders, large bundles and unnecessary re-fetching." },
          { name: "Migration", body: "Moving jQuery or older front ends to React gradually." },
          { name: "React with Next.js", body: "Server rendering and SEO when the app also needs public pages." },
        ],
      },
      {
        type: "list",
        h: "How we write React",
        items: [
          "TypeScript throughout for fewer runtime errors",
          "Server state handled with React Query or server components",
          "Accessible forms and keyboard navigation",
          "Tailwind CSS or your existing design system",
          "Tests for critical user flows",
        ],
      },
      {
        type: "text",
        h: "React or a full framework?",
        paras: [
          "Plain React (with Vite) is ideal for apps behind a login, where search engines don't matter. When you also need fast public pages that rank in Google, we use Next.js, which is built on React and adds server rendering and routing.",
          "Either way, the components are React, so your team only learns one way of building interfaces.",
        ],
      },
    ],
    tools: ["React", "TypeScript", "Next.js", "Vite", "React Query", "Tailwind CSS", "Zustand", "Playwright"],
    work: ["av-leads", "logistivo", "igivu"],
    faqs: [
      { q: "React or Vue.js?", a: "Both are excellent. React has the larger ecosystem and hiring pool; Vue.js is very approachable. See our React vs Vue comparison for details." },
      { q: "Can you connect React to our existing back end?", a: "Yes, to any REST or GraphQL API, including Laravel, Node.js, Django or third-party services." },
      { q: "Is React good for SEO?", a: "Plain client-side React isn't ideal for SEO. For public pages we use Next.js, which renders on the server." },
    ],
    related: ["/technologies/nextjs-development", "/compare/react-vs-vuejs", "/compare/nextjs-vs-react", "/services/web-application-development"],
  },
  {
    ...common,
    path: "/technologies/nextjs-development",
    name: "Next.js development",
    line: "Fast, search-friendly websites and web apps built on Next.js.",
    seoTitle: "Next.js Development Company | Fast, SEO-Ready Next.js Sites",
    metaDescription:
      "Next.js development services: fast business websites, SaaS products and web apps with server rendering, strong Core Web Vitals and built-in SEO. Our own site, 7code.digital, runs on Next.js.",
    h1: "Next.js development",
    serviceType: "Next.js development",
    intro: [
      "Next.js is the React framework we build most of our websites and products with, including 7code.digital. It renders pages on the server, so they load fast and search engines can read them, while still giving users a smooth app-like experience.",
      "We use it for marketing websites that need to rank, SaaS products, dashboards and eCommerce front ends.",
    ],
    answer: {
      q: "Why use Next.js for a website?",
      a: "Next.js renders pages on the server or at build time, which makes them fast and easy for Google and AI search tools to index. It combines that with React components, image optimisation, routing and API routes in one framework.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build with Next.js",
        items: [
          { name: "Business websites", body: "Fast, SEO-ready sites with structured data, sitemaps and clean metadata built in." },
          { name: "SaaS products", body: "Marketing site and app in one codebase, with authentication and dashboards." },
          { name: "Headless eCommerce", body: "Custom storefronts on Shopify or other commerce back ends." },
          { name: "Content platforms", body: "Blogs, knowledge bases and documentation with a headless CMS." },
          { name: "Migrations", body: "Moving slow WordPress or older React sites to Next.js without losing rankings." },
          { name: "Performance audits", body: "Core Web Vitals improvements on existing Next.js sites." },
        ],
      },
      {
        type: "list",
        h: "What you get from a Next.js build",
        items: [
          "Server rendering and static generation for fast first loads",
          "Automatic image optimisation and font loading",
          "Clean URLs, metadata and sitemaps for SEO",
          "Structured data for rich results and AI answers",
          "Hosting on Vercel or your own cloud",
        ],
      },
      {
        type: "steps",
        h: "Migrating to Next.js safely",
        items: [
          { name: "URL inventory", body: "Every existing URL and its ranking data listed before anything changes." },
          { name: "Rebuild", body: "Pages rebuilt in Next.js, keeping the same URLs where possible." },
          { name: "Redirects", body: "301 redirects for anything that must move, tested before launch." },
          { name: "Monitor", body: "Search Console checked after launch to catch indexing issues early." },
        ],
      },
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Sanity", "Prisma", "PostgreSQL"],
    work: ["seven-lift", "maxtgc", "ferry-global", "muhseeq"],
    faqs: [
      { q: "Is Next.js better than WordPress?", a: "For speed, security and custom functionality, usually yes. WordPress is easier for non-technical editors out of the box, though a headless CMS closes that gap. See our article on WordPress vs Next.js." },
      { q: "Will moving to Next.js hurt my rankings?", a: "Not if the migration is done properly, with URLs preserved or redirected and metadata carried over. Many sites improve because pages get faster." },
      { q: "Where is a Next.js site hosted?", a: "Usually on Vercel, or on AWS or another cloud if you prefer. We set it up on your account." },
    ],
    related: ["/technologies/react-development", "/compare/nextjs-vs-react", "/services/web-development", "/services/seo-aeo-geo"],
  },
  {
    ...common,
    path: "/technologies/nodejs-development",
    name: "Node.js development",
    line: "Node.js back ends, APIs and real-time features in TypeScript.",
    seoTitle: "Node.js Development Company | APIs & Real-Time Apps",
    metaDescription:
      "Node.js development services: REST APIs, real-time features, microservices and SaaS back ends written in TypeScript with Express or NestJS, deployed on the cloud of your choice.",
    h1: "Node.js development",
    serviceType: "Node.js development",
    intro: [
      "Node.js lets teams use JavaScript and TypeScript on the server as well as in the browser. It's a strong choice for APIs, real-time features like chat and live tracking, and products where one language across the stack makes hiring simpler.",
      "We build Node.js back ends in TypeScript, usually with NestJS or Express, and connect them to PostgreSQL, MySQL or Redis.",
    ],
    answer: {
      q: "What is Node.js good for?",
      a: "Node.js is a JavaScript runtime for servers. It handles many simultaneous connections efficiently, which makes it well suited to APIs, real-time apps (chat, notifications, live dashboards), streaming and microservices.",
    },
    sections: [
      {
        type: "cards",
        h: "Node.js services",
        items: [
          { name: "REST and GraphQL APIs", body: "Typed, documented APIs for web and mobile clients." },
          { name: "Real-time features", body: "WebSockets for chat, notifications, live tracking and collaborative editing." },
          { name: "Background jobs", body: "Queues for emails, imports, reports and integrations that run outside the request." },
          { name: "Microservices", body: "Splitting a large system into services where it genuinely helps." },
          { name: "Serverless functions", body: "Event-driven functions on Vercel, AWS Lambda or similar." },
          { name: "Automation scripts", body: "Integrations and data pipelines between your tools." },
        ],
      },
      {
        type: "list",
        h: "Our Node.js standards",
        items: [
          "TypeScript with strict settings",
          "Validated input and consistent error handling",
          "Prisma or TypeORM with migrations",
          "Automated tests and CI",
          "Structured logging and monitoring",
        ],
      },
      {
        type: "text",
        h: "Node.js or Laravel?",
        paras: [
          "We use both. Node.js shines for real-time features and teams standardising on TypeScript; Laravel is often quicker for admin-heavy business systems. We recommend based on your product, not habit.",
        ],
      },
    ],
    tools: ["Node.js", "TypeScript", "NestJS", "Express", "Prisma", "PostgreSQL", "Redis", "Socket.IO", "Docker"],
    work: ["av-leads"],
    faqs: [
      { q: "Is Node.js fast?", a: "Yes, for I/O-heavy work like APIs and real-time apps. CPU-heavy tasks are better handled by background workers or another language such as Python." },
      { q: "Express or NestJS?", a: "Express is minimal and flexible; NestJS adds structure that helps larger teams and codebases. We usually choose NestJS for larger products." },
      { q: "Can you maintain an existing Node.js app?", a: "Yes. We start with a code review, then fix, upgrade and extend it." },
    ],
    related: ["/technologies/nestjs-development", "/compare/laravel-vs-nodejs-for-saas", "/services/api-development", "/technologies/javascript-development"],
  },
  {
    ...common,
    path: "/technologies/nestjs-development",
    name: "NestJS development",
    line: "Structured, scalable NestJS back ends for growing products.",
    seoTitle: "NestJS Development Services | Scalable TypeScript Back Ends",
    metaDescription:
      "NestJS development services: structured TypeScript back ends, REST and GraphQL APIs, microservices and SaaS platforms built for teams and codebases that need to grow.",
    h1: "NestJS development",
    serviceType: "NestJS development",
    intro: [
      "NestJS brings structure to Node.js: modules, dependency injection, guards and a consistent way of organising code. That structure pays off as a product and its team grow, because everyone builds features the same way.",
      "We use NestJS for SaaS back ends, APIs with complex permissions, and systems that may later be split into services.",
    ],
    answer: {
      q: "What is NestJS?",
      a: "NestJS is a TypeScript framework for building server-side applications on Node.js. It organises code into modules, controllers and services, and includes tools for validation, authentication, GraphQL, WebSockets and microservices.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build with NestJS",
        items: [
          { name: "SaaS back ends", body: "Multi-tenant APIs with roles, billing hooks and background jobs." },
          { name: "GraphQL APIs", body: "Schema-first or code-first GraphQL with efficient data loading." },
          { name: "Permission-heavy systems", body: "Guards and policies for complex role and ownership rules." },
          { name: "Event-driven services", body: "Queues and message brokers for work that happens asynchronously." },
          { name: "Real-time gateways", body: "WebSocket gateways for live updates and messaging." },
          { name: "Express migrations", body: "Moving a growing Express app into NestJS structure." },
        ],
      },
      {
        type: "list",
        h: "Why teams choose NestJS",
        items: [
          "A clear, consistent architecture new developers learn quickly",
          "First-class TypeScript and validation",
          "Built-in testing utilities",
          "Easy path from a monolith to microservices if needed",
          "Familiar to developers with Angular or Java backgrounds",
        ],
      },
      {
        type: "steps",
        h: "Typical build",
        items: [
          { name: "Domain modules", body: "The product split into modules that match the business." },
          { name: "Data and auth", body: "Database schema, authentication and permissions set up first." },
          { name: "Features", body: "Endpoints, jobs and integrations built and tested module by module." },
          { name: "Deploy", body: "Containerised deployment with CI and monitoring." },
        ],
      },
    ],
    tools: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "TypeORM", "GraphQL", "BullMQ", "Docker"],
    faqs: [
      { q: "Is NestJS overkill for a small project?", a: "For a very small API, plain Express may be enough. NestJS earns its keep once a product has several modules, a team, or a long roadmap." },
      { q: "Can NestJS work with Next.js?", a: "Yes. A common setup is a Next.js front end with a NestJS API, both in TypeScript." },
      { q: "Do you write tests for NestJS apps?", a: "Yes, unit and end-to-end tests using NestJS's testing tools and Jest." },
    ],
    related: ["/technologies/nodejs-development", "/services/saas-development", "/technologies/nextjs-development", "/services/api-development"],
  },
  {
    ...common,
    path: "/technologies/vuejs-development",
    name: "Vue.js development",
    line: "Vue.js interfaces and Nuxt sites, plus support for existing Vue projects.",
    seoTitle: "Vue.js Development Services | Vue & Nuxt Developers",
    metaDescription:
      "Vue.js development services: interactive front ends, dashboards and Nuxt websites, Laravel + Vue applications, and upgrades from Vue 2 to Vue 3 for existing projects.",
    h1: "Vue.js development",
    serviceType: "Vue.js development",
    intro: [
      "Vue.js is a friendly, flexible framework that many Laravel teams use for their front ends. We build new Vue.js interfaces, maintain existing ones, and upgrade Vue 2 projects to Vue 3.",
      "For public websites that need SEO, we use Nuxt, the Vue framework for server rendering.",
    ],
    answer: {
      q: "What is Vue.js used for?",
      a: "Vue.js is a JavaScript framework for building user interfaces. It is used for interactive parts of websites, single-page applications, dashboards and, with Nuxt, full server-rendered websites.",
    },
    sections: [
      {
        type: "cards",
        h: "Vue.js services",
        items: [
          { name: "Vue front ends", body: "Interactive interfaces and dashboards connected to your API." },
          { name: "Laravel + Vue apps", body: "Full applications with Laravel back ends and Vue front ends, including Inertia.js." },
          { name: "Nuxt websites", body: "Server-rendered, SEO-friendly sites built with Nuxt." },
          { name: "Vue 2 to Vue 3 upgrades", body: "Moving off the end-of-life Vue 2 to the Composition API and current tooling." },
          { name: "Component libraries", body: "Shared Vue components for consistent interfaces." },
          { name: "Maintenance", body: "Bug fixes and features for existing Vue projects." },
        ],
      },
      {
        type: "list",
        h: "When Vue.js is a good fit",
        items: [
          "Your team already uses Laravel and likes Vue's conventions",
          "You're adding interactivity to an existing server-rendered site",
          "You have an existing Vue 2 project to modernise",
          "You prefer a gentle learning curve for new developers",
        ],
      },
      {
        type: "text",
        h: "Vue or React for a new project?",
        paras: [
          "Both are mature and capable. We generally recommend React for new products because of its larger ecosystem and hiring pool, and Vue when your team or codebase already leans that way. Our React vs Vue comparison sets out the trade-offs.",
        ],
      },
    ],
    tools: ["Vue.js", "Nuxt", "Pinia", "TypeScript", "Vite", "Inertia.js", "Laravel", "Tailwind CSS"],
    faqs: [
      { q: "Is Vue 2 still supported?", a: "Vue 2 reached end of life at the end of 2023, so it no longer receives updates. Upgrading to Vue 3 is recommended for security and compatibility." },
      { q: "Can Vue.js be used with Laravel?", a: "Yes, it's one of the most common pairings, either as a separate SPA or through Inertia.js." },
      { q: "Is Nuxt good for SEO?", a: "Yes. Nuxt renders pages on the server, which helps search engines index them." },
    ],
    related: ["/compare/react-vs-vuejs", "/technologies/laravel-development", "/technologies/react-development", "/technologies/javascript-development"],
  },
  {
    ...common,
    path: "/technologies/python-development",
    name: "Python development",
    line: "Python back ends, automation scripts, data processing and AI integrations.",
    seoTitle: "Python Development Services | Automation, APIs & AI",
    metaDescription:
      "Python development services: automation scripts, data processing, FastAPI and Django back ends, web scraping for permitted sources, and AI and LLM integrations for businesses.",
    h1: "Python development",
    serviceType: "Python development",
    intro: [
      "Python is the language of automation, data and AI. We use it for scripts that save hours of manual work, data pipelines and reports, APIs with FastAPI or Django, and integrations with AI models.",
      "If a task involves moving, cleaning or analysing data, or connecting to an AI service, Python is usually the fastest way to do it well.",
    ],
    answer: {
      q: "What is Python used for in business?",
      a: "Businesses use Python to automate repetitive tasks, process and analyse data, generate reports, build APIs and web back ends, and integrate machine-learning and large language models into their products and workflows.",
    },
    sections: [
      {
        type: "cards",
        h: "Python services",
        items: [
          { name: "Automation scripts", body: "Scheduled jobs that pull data, fill in forms, rename files or send reports." },
          { name: "Data processing", body: "Cleaning, merging and transforming spreadsheets and databases with pandas." },
          { name: "APIs and back ends", body: "FastAPI and Django back ends for web and mobile apps." },
          { name: "AI and LLM integration", body: "Connecting OpenAI, Anthropic and open models to your documents and workflows." },
          { name: "Document processing", body: "Extracting data from PDFs, invoices and forms into structured records." },
          { name: "Reporting", body: "Automatically generated Excel, PDF and dashboard reports." },
        ],
      },
      {
        type: "list",
        h: "Tasks worth automating with Python",
        items: [
          "Copying data between systems every day",
          "Building the same Excel report every week",
          "Reading invoices or forms and typing them into another system",
          "Checking many websites or feeds you're permitted to access",
          "Sending reminders and follow-ups on a schedule",
        ],
      },
      {
        type: "steps",
        h: "How we deliver automation",
        items: [
          { name: "Map the task", body: "Inputs, outputs, rules and exceptions written down." },
          { name: "Build", body: "A script or service with logging and error alerts." },
          { name: "Run safely", body: "Scheduled on a server or cloud function with credentials stored securely." },
          { name: "Hand over", body: "Documentation and a simple way to see what ran and what failed." },
        ],
      },
    ],
    tools: ["Python", "FastAPI", "Django", "pandas", "Celery", "Playwright", "OpenAI API", "LangChain", "PostgreSQL"],
    faqs: [
      { q: "Python automation or n8n?", a: "n8n is quicker for connecting common apps visually; Python is better for custom logic, heavy data processing or anything n8n can't do. We often combine them." },
      { q: "Can Python read our PDFs and invoices?", a: "Yes. Using text extraction and, where needed, AI models, we can pull structured data from documents and check it before saving." },
      { q: "Where do the scripts run?", a: "On a small cloud server, a serverless function or your own machine, depending on the task and your security requirements." },
    ],
    related: ["/ai-solutions/python-automation", "/ai-solutions/ai-document-processing", "/ai-solutions/n8n-automation", "/services/ai-automation"],
  },
  {
    ...common,
    path: "/technologies/mysql-development",
    name: "MySQL & database development",
    line: "Database design, optimisation and migrations for MySQL and PostgreSQL.",
    seoTitle: "MySQL Database Development & Optimisation Services",
    metaDescription:
      "Database development services: MySQL and PostgreSQL schema design, query optimisation, indexing, migrations, backups and data cleanup for web applications and business systems.",
    h1: "MySQL and database development",
    serviceType: "Database development",
    intro: [
      "Most slow applications are slow because of the database: missing indexes, inefficient queries or a schema that no longer fits the business. We design databases properly from the start and fix the ones that have grown into a problem.",
      "We work mainly with MySQL and PostgreSQL, the databases behind most Laravel, Node.js and WordPress systems.",
    ],
    answer: {
      q: "Why is my database slow?",
      a: "The most common causes are missing or wrong indexes, queries that load far more data than needed, the N+1 query problem in application code, and tables that have grown without archiving. Each can be measured and fixed.",
    },
    sections: [
      {
        type: "cards",
        h: "Database services",
        items: [
          { name: "Schema design", body: "Tables, relationships and constraints designed for your data and reporting needs." },
          { name: "Query optimisation", body: "Slow queries found with profiling and fixed with indexes and rewrites." },
          { name: "Migrations", body: "Moving data between systems or from MySQL to PostgreSQL safely." },
          { name: "Data cleanup", body: "Removing duplicates, fixing broken relationships and standardising formats." },
          { name: "Backups and recovery", body: "Automated backups and a tested restore process." },
          { name: "Reporting databases", body: "Views and summary tables that make dashboards fast." },
        ],
      },
      {
        type: "steps",
        h: "Performance review process",
        items: [
          { name: "Measure", body: "Slow-query logs and application profiling to find the real bottlenecks." },
          { name: "Prioritise", body: "Fix the queries that affect users most first." },
          { name: "Fix", body: "Indexes, query rewrites and code changes, tested against real data." },
          { name: "Verify", body: "Before-and-after timings so you can see the difference." },
        ],
      },
      {
        type: "list",
        h: "MySQL or PostgreSQL?",
        items: [
          "MySQL: widely hosted, simple, ideal for WordPress and many Laravel apps",
          "PostgreSQL: richer features, strong for complex queries, JSON and analytics",
          "Both: reliable, free and well supported",
          "We'll recommend one based on your application and hosting",
        ],
      },
    ],
    tools: ["MySQL", "PostgreSQL", "MariaDB", "Redis", "Prisma", "Eloquent", "pgAdmin", "Percona Toolkit"],
    faqs: [
      { q: "Can you speed up our database without changing the app?", a: "Often a lot can be gained from indexes and configuration alone. Bigger gains usually need some query changes in the application too." },
      { q: "Can you migrate our data from spreadsheets?", a: "Yes. We clean and import spreadsheet data into a proper database, with checks to confirm nothing was lost." },
      { q: "Do you set up backups?", a: "Yes, automated backups with retention rules and a tested restore procedure." },
    ],
    related: ["/technologies/laravel-development", "/technologies/php-development", "/services/custom-software-development", "/services/erp-development"],
  },
  {
    ...common,
    path: "/technologies/javascript-development",
    name: "JavaScript development",
    line: "JavaScript and TypeScript across the browser and the server.",
    seoTitle: "JavaScript & TypeScript Development Services",
    metaDescription:
      "JavaScript and TypeScript development: interactive front ends, Node.js back ends, browser extensions, widgets and performance fixes for websites and web applications.",
    h1: "JavaScript and TypeScript development",
    serviceType: "JavaScript development",
    intro: [
      "JavaScript runs every interactive website, and with Node.js it runs servers too. We write modern JavaScript and, for anything that will be maintained, TypeScript, which catches mistakes before users see them.",
      "Beyond full applications, we build smaller pieces too: embeddable widgets, calculators, browser extensions and fixes for slow, script-heavy pages.",
    ],
    answer: {
      q: "What is the difference between JavaScript and TypeScript?",
      a: "TypeScript is JavaScript with types added. The types are checked while the code is written, catching many errors early, and the result compiles to normal JavaScript that runs anywhere JavaScript does.",
    },
    sections: [
      {
        type: "cards",
        h: "What we build",
        items: [
          { name: "Interactive features", body: "Calculators, configurators, booking widgets and forms for existing sites." },
          { name: "Embeddable widgets", body: "Scripts your partners or customers can drop into their own websites." },
          { name: "Browser extensions", body: "Chrome and Edge extensions for internal tools or products." },
          { name: "jQuery modernisation", body: "Replacing legacy jQuery with modern, lighter code." },
          { name: "Script performance", body: "Cutting heavy third-party scripts that slow your site down." },
          { name: "TypeScript migration", body: "Adding types to an existing JavaScript codebase gradually." },
        ],
      },
      {
        type: "list",
        h: "Why we default to TypeScript",
        items: [
          "Errors caught while coding instead of in production",
          "Better editor help and safer refactoring",
          "Self-documenting function inputs and outputs",
          "Easier onboarding for new developers",
        ],
      },
      {
        type: "text",
        h: "Performance matters",
        paras: [
          "JavaScript is often the main reason a page feels slow on a phone. We measure what each script costs, remove what isn't needed, load the rest only when required, and keep Core Web Vitals, especially Interaction to Next Paint, in the green.",
        ],
      },
    ],
    tools: ["JavaScript", "TypeScript", "React", "Vue.js", "Node.js", "Vite", "Web Components"],
    faqs: [
      { q: "Can you fix a slow website caused by scripts?", a: "Yes. We audit the scripts on your pages, remove or defer the heavy ones and measure the improvement." },
      { q: "Do you build Chrome extensions?", a: "Yes, for internal tools and products, following the current Manifest V3 requirements." },
      { q: "Can you convert our JavaScript to TypeScript?", a: "Yes, gradually, file by file, without stopping feature work." },
    ],
    related: ["/technologies/react-development", "/technologies/nodejs-development", "/technologies/vuejs-development", "/services/web-development"],
  },
  {
    ...common,
    path: "/technologies/rest-api-development",
    name: "REST API development",
    line: "Well-designed, documented REST APIs for apps and partners.",
    seoTitle: "REST API Development Services | Design, Build & Document",
    metaDescription:
      "REST API development: API design, authentication, versioning, OpenAPI documentation and testing for mobile apps, web front ends and partner integrations, built in Laravel, Node.js or Python.",
    h1: "REST API development",
    serviceType: "REST API development",
    intro: [
      "A good REST API is predictable: consistent URLs, clear errors, sensible pagination and documentation a developer can follow without asking questions. We design and build APIs like that for mobile apps, web front ends and partners.",
      "We build in Laravel, Node.js/NestJS or Python/FastAPI, depending on your existing systems.",
    ],
    answer: {
      q: "What is a REST API?",
      a: "A REST API is a web interface that lets applications read and change data over HTTP using standard methods such as GET, POST, PUT and DELETE, usually exchanging JSON. It is the most common way web and mobile apps talk to servers.",
    },
    sections: [
      {
        type: "table",
        h: "What goes into a production API",
        head: ["Area", "What we do"],
        rows: [
          ["Design", "Resource naming, consistent responses, filtering and pagination"],
          ["Security", "OAuth 2.0 or token auth, scopes, rate limiting, input validation"],
          ["Reliability", "Idempotent writes, retries for webhooks, clear error codes"],
          ["Versioning", "Changes released without breaking existing clients"],
          ["Documentation", "OpenAPI spec, examples and a sandbox"],
          ["Monitoring", "Logs, metrics and alerts on errors and slow endpoints"],
        ],
      },
      {
        type: "cards",
        h: "Typical API projects",
        items: [
          { name: "Mobile app back ends", body: "APIs for iOS and Android apps with authentication and push notifications." },
          { name: "Partner APIs", body: "Let customers or partners integrate with your platform securely." },
          { name: "Internal service APIs", body: "Connect your own systems so data is entered once." },
        ],
      },
      {
        type: "steps",
        h: "Process",
        items: [
          { name: "Design first", body: "We write the OpenAPI spec and agree it before coding." },
          { name: "Build", body: "Endpoints implemented with validation and tests." },
          { name: "Document", body: "Interactive documentation published for developers." },
          { name: "Operate", body: "Monitoring, rate limits and version management in production." },
        ],
      },
    ],
    tools: ["OpenAPI", "Laravel", "NestJS", "FastAPI", "Postman", "OAuth 2.0", "JWT", "Redis"],
    faqs: [
      { q: "How do you secure an API?", a: "Authentication with tokens or OAuth, scoped permissions, validated input, rate limiting, HTTPS only, and logging of sensitive actions." },
      { q: "Can you document our existing API?", a: "Yes. We can write an OpenAPI specification for an existing API and fix inconsistencies we find along the way." },
      { q: "What is API versioning?", a: "Versioning lets you change an API without breaking apps that use the old version, usually through a version number in the URL or a header." },
    ],
    related: ["/services/api-development", "/technologies/nodejs-development", "/technologies/laravel-development", "/technologies/python-development"],
  },
];
