import type { Landing } from "./types";

const C = [
  { name: "Services", href: "/services" },
  { name: "AI & automation", href: "/services/ai-automation" },
];
const common = { kind: "ai" as const, crumbs: C, contact: { service: "ai-automation" } };

export const ai: Landing[] = [
  {
    ...common,
    path: "/ai-solutions/ai-development",
    name: "AI development",
    line: "Practical AI features built into your products and operations.",
    seoTitle: "AI Development Company | Custom AI Solutions for Business",
    metaDescription:
      "AI development for businesses in the UAE, Oman, Pakistan and worldwide: AI features, assistants, document processing and automation built on leading language models, with your data kept under control.",
    h1: "AI development for business",
    serviceType: "AI development",
    intro: [
      "Most businesses don't need to train their own AI model. They need existing models connected safely to their own data and workflows, so a task that took a person an hour takes a few minutes. That's the AI development we do.",
      "We build AI features into web apps and internal tools, with clear limits on what the AI can do, human review where it matters, and costs you can predict.",
    ],
    answer: {
      q: "What does an AI development company do?",
      a: "An AI development company designs and builds software that uses artificial intelligence, typically large language models, machine learning or computer vision, to automate tasks, answer questions, extract information or make recommendations inside a business's own systems.",
    },
    sections: [
      {
        type: "cards",
        h: "AI solutions we build",
        items: [
          { name: "AI assistants on your data", body: "Answer staff or customer questions from your documents, policies and product data, with sources shown." },
          { name: "AI agents", body: "Systems that complete multi-step tasks, like researching a lead or preparing a quotation, with checks along the way." },
          { name: "Document processing", body: "Read invoices, contracts and forms and turn them into structured data." },
          { name: "Content and classification", body: "Draft replies, tag enquiries, summarise calls and route tickets automatically." },
          { name: "AI features in your product", body: "Search, recommendations and writing assistance built into your SaaS or app." },
          { name: "Automation with AI steps", body: "n8n and Python workflows where an AI model handles the judgement step." },
        ],
      },
      {
        type: "steps",
        h: "How we deliver AI projects",
        items: [
          { name: "Find the use case", body: "We look for tasks that are frequent, rule-based enough and costly in staff time." },
          { name: "Prototype", body: "A quick proof of concept on your real data to measure accuracy before investing more." },
          { name: "Build properly", body: "Production system with logging, human review, access controls and cost limits." },
          { name: "Monitor and improve", body: "Track accuracy and usage, and refine prompts and data over time." },
        ],
      },
      {
        type: "list",
        h: "How we handle data and risk",
        items: [
          "Only the data a task needs is sent to the AI model",
          "Business-tier APIs that don't train on your data, where available",
          "Human approval for actions that affect customers or money",
          "Every AI output logged so it can be reviewed",
          "Clear fallbacks when the AI isn't confident",
        ],
      },
    ],
    tools: ["OpenAI API", "Anthropic Claude", "Google Gemini", "LangChain", "Python", "n8n", "pgvector", "Next.js"],
    faqs: [
      { q: "Do we need lots of data to use AI?", a: "Usually not. Modern language models work well with your existing documents and examples. We test on your real data in a prototype before committing to a full build." },
      { q: "Is our data safe?", a: "We use providers' business APIs, send only what's needed, and can keep sensitive data on your own infrastructure. We'll explain exactly where data goes before we start." },
      { q: "How accurate is AI?", a: "It depends on the task. We measure accuracy on your data during the prototype, and design human review for cases where mistakes would be costly." },
      { q: "What does AI cost to run?", a: "Model usage is usually charged per request. We estimate monthly running costs during the prototype and add limits so there are no surprises." },
    ],
    related: ["/ai-solutions/ai-agent-development", "/ai-solutions/ai-integration", "/ai-solutions/ai-chatbot-development", "/compare/ai-agents-vs-traditional-automation"],
  },
  {
    ...common,
    path: "/ai-solutions/ai-agent-development",
    name: "AI agent development",
    line: "AI agents that complete multi-step tasks with tools, data and human checks.",
    seoTitle: "AI Agent Development | Custom AI Agents for Business Tasks",
    metaDescription:
      "AI agent development: agents that research, draft, look up data and act in your tools, with guardrails, human approval and logging. For sales, operations and support teams.",
    h1: "AI agent development",
    serviceType: "AI agent development",
    intro: [
      "An AI agent doesn't just answer a question. It works through a task: looks something up, decides the next step, uses a tool, checks the result and reports back. Done well, agents take the repetitive research and admin off your team.",
      "We build agents with narrow, well-defined jobs, the right tools and data, and human approval before anything important happens.",
    ],
    answer: {
      q: "What is an AI agent?",
      a: "An AI agent is software that uses a language model to plan and carry out a multi-step task, calling tools such as search, databases, email or APIs along the way, and adjusting its next step based on what it finds.",
    },
    sections: [
      {
        type: "cards",
        h: "Agents that earn their keep",
        items: [
          { name: "Lead research agent", body: "Researches a company from public sources, summarises it and drafts a tailored first message for review." },
          { name: "Quotation agent", body: "Reads an enquiry, checks prices and availability, and prepares a draft quotation." },
          { name: "Support triage agent", body: "Reads tickets, finds the answer in your knowledge base and drafts a reply or escalates." },
          { name: "Operations agent", body: "Checks orders or jobs against rules each morning and flags exceptions." },
          { name: "Data entry agent", body: "Takes emails or documents and fills in your CRM or ERP, with a review queue." },
          { name: "Reporting agent", body: "Pulls numbers from several systems and writes a plain-English weekly summary." },
        ],
      },
      {
        type: "list",
        h: "Guardrails we build in",
        items: [
          "A narrow job description and a fixed set of tools",
          "Read-only access unless writing is essential",
          "Human approval before sending, paying or deleting",
          "Step-by-step logs of what the agent did and why",
          "Limits on cost, time and number of steps",
        ],
      },
      {
        type: "steps",
        h: "Build process",
        items: [
          { name: "Define the task", body: "Inputs, tools, the good-result definition and what must never happen." },
          { name: "Prototype", body: "Run the agent on real past examples and measure how often it gets it right." },
          { name: "Integrate", body: "Connect to your systems through APIs or n8n, with approval steps." },
          { name: "Supervise", body: "Monitor results and improve prompts and tools over time." },
        ],
      },
    ],
    tools: ["OpenAI API", "Anthropic Claude", "LangGraph", "n8n", "Python", "Model Context Protocol", "PostgreSQL"],
    faqs: [
      { q: "Can an AI agent replace an employee?", a: "Agents are best at taking repetitive steps off people, not replacing judgement. Most of our agents prepare work for a person to approve." },
      { q: "What's the difference between an agent and automation?", a: "Traditional automation follows fixed rules. An agent can handle variation by reasoning about each case. See our comparison of AI agents and traditional automation." },
      { q: "Which AI model do you use?", a: "We choose per task based on accuracy, speed and cost, and can switch models later because the agent isn't tied to one provider." },
    ],
    related: ["/ai-solutions/ai-development", "/compare/ai-agents-vs-traditional-automation", "/ai-solutions/ai-lead-generation", "/ai-solutions/n8n-automation"],
  },
  {
    ...common,
    path: "/ai-solutions/ai-chatbot-development",
    name: "AI chatbot development",
    line: "Website and WhatsApp chatbots that answer from your own information.",
    seoTitle: "AI Chatbot Development | Website & WhatsApp Chatbots",
    metaDescription:
      "AI chatbot development for websites and WhatsApp: answer customer questions from your own content, capture leads and hand over to your team, in English and Arabic.",
    h1: "AI chatbot development",
    serviceType: "AI chatbot development",
    intro: [
      "Old chatbots followed scripts and frustrated customers. AI chatbots understand the question and answer from your own website, price lists and policies, then hand over to a person when they should.",
      "We build chatbots for websites and WhatsApp that answer common questions, capture lead details and book calls, in English and Arabic.",
    ],
    answer: {
      q: "How is an AI chatbot different from a normal chatbot?",
      a: "A traditional chatbot follows fixed menus and keywords. An AI chatbot uses a language model to understand free-text questions and answer from a defined set of your own information, so it handles varied wording and follow-up questions.",
    },
    sections: [
      {
        type: "cards",
        h: "What your chatbot can do",
        items: [
          { name: "Answer from your content", body: "Services, prices, opening hours and policies, with links to the right page." },
          { name: "Capture leads", body: "Collect name, phone and requirements, and send them to your CRM or WhatsApp." },
          { name: "Book appointments", body: "Offer available slots and confirm bookings." },
          { name: "Hand over to a human", body: "Pass the conversation to your team with full context when needed." },
          { name: "Work on WhatsApp", body: "Run on the WhatsApp Business Platform where your customers already are." },
          { name: "Speak Arabic and English", body: "Answer in the customer's language." },
        ],
      },
      {
        type: "list",
        h: "Keeping answers accurate",
        items: [
          "Answers limited to your approved information",
          "\"I don't know\" and hand-over instead of guessing",
          "No prices or promises outside what you've approved",
          "Conversation logs you can review",
          "Content updated when your website changes",
        ],
      },
      {
        type: "steps",
        h: "Setup",
        items: [
          { name: "Collect knowledge", body: "Website pages, FAQs, price lists and policies gathered and cleaned." },
          { name: "Configure", body: "Tone, rules, hand-over triggers and lead fields agreed." },
          { name: "Test", body: "Tested with real customer questions before launch." },
          { name: "Launch and review", body: "Live on your site or WhatsApp, with weekly review at first." },
        ],
      },
    ],
    tools: ["OpenAI API", "Anthropic Claude", "WhatsApp Business Platform", "n8n", "Next.js", "pgvector"],
    faqs: [
      { q: "Can the chatbot work on WhatsApp?", a: "Yes, through the WhatsApp Business Platform, within Meta's messaging policies." },
      { q: "Will it make things up?", a: "We restrict answers to your approved content and instruct it to hand over when unsure, which greatly reduces wrong answers. Logs let you check its replies." },
      { q: "Can it speak Arabic?", a: "Yes. Modern models handle Arabic well, and we test with Arabic questions before launch." },
    ],
    related: ["/ai-solutions/ai-customer-support", "/ai-solutions/ai-integration", "/ai-solutions/ai-development", "/services/ai-automation"],
  },
  {
    ...common,
    path: "/ai-solutions/ai-integration",
    name: "AI integration",
    line: "Add AI features to the software and tools you already use.",
    seoTitle: "AI Integration Services | Add AI to Your Software & Workflows",
    metaDescription:
      "AI integration services: connect OpenAI, Claude and Gemini to your CRM, ERP, website and internal tools for summarising, classifying, drafting and searching, with security and cost controls.",
    h1: "AI integration services",
    serviceType: "AI integration",
    intro: [
      "You don't need a new AI product to benefit from AI. Often the best result comes from adding one AI step to software you already use: summarising a call in the CRM, classifying incoming emails, or drafting a reply from your templates.",
      "We integrate language models into existing systems through their APIs, Python services or n8n workflows.",
    ],
    answer: {
      q: "What is AI integration?",
      a: "AI integration is connecting AI models to existing software and processes so they can perform tasks like summarising, classifying, extracting data, searching or drafting text inside the tools a business already uses.",
    },
    sections: [
      {
        type: "cards",
        h: "Common integrations",
        items: [
          { name: "CRM", body: "Summarise conversations, score leads and draft follow-ups inside your CRM." },
          { name: "Email and support", body: "Classify and route incoming messages, and draft replies for review." },
          { name: "Website search", body: "Search that understands questions rather than just matching keywords." },
          { name: "ERP and finance", body: "Read invoices and purchase orders into structured records." },
          { name: "Content tools", body: "Product descriptions and translations from your data, reviewed before publishing." },
          { name: "Internal knowledge", body: "Ask questions across policies, manuals and past projects." },
        ],
      },
      {
        type: "steps",
        h: "Integration process",
        items: [
          { name: "Pick one workflow", body: "Start where the time saving is clearest and easiest to measure." },
          { name: "Prototype", body: "Test the AI step on real examples and check accuracy." },
          { name: "Connect", body: "Integrate through APIs with logging, retries and permissions." },
          { name: "Measure", body: "Track time saved and accuracy, then expand." },
        ],
      },
      {
        type: "list",
        h: "Controls included",
        items: [
          "Spending limits and usage monitoring",
          "Redaction of sensitive data where needed",
          "Provider choice: OpenAI, Anthropic, Google or open models",
          "Fallback when the AI service is unavailable",
        ],
      },
    ],
    tools: ["OpenAI API", "Anthropic Claude", "Google Gemini", "Python", "Node.js", "n8n", "REST APIs"],
    faqs: [
      { q: "Can you add AI to our existing CRM?", a: "If your CRM has an API or webhooks, usually yes, either directly or through an n8n workflow." },
      { q: "Which AI provider is best?", a: "It depends on the task, language and budget. We test options on your data and design the integration so the provider can be changed later." },
      { q: "Can AI run on our own servers?", a: "Yes, open models can be self-hosted for sensitive data, though they need suitable hardware. We'll compare options with you." },
    ],
    related: ["/ai-solutions/ai-development", "/services/api-development", "/ai-solutions/workflow-automation", "/services/crm-development"],
  },
  {
    ...common,
    path: "/ai-solutions/python-automation",
    name: "Python automation",
    line: "Scripts and services that do repetitive computer work for you.",
    seoTitle: "Python Automation Services | Automate Repetitive Tasks",
    metaDescription:
      "Python automation services: scripts and scheduled jobs that move data, generate reports, process files and update systems automatically, with logging and alerts built in.",
    h1: "Python automation services",
    serviceType: "Python automation",
    intro: [
      "If someone on your team does the same computer task every day, such as downloading a report, cleaning it in Excel and emailing it, a Python script can probably do it in seconds. We build those scripts, schedule them and make sure you know when something goes wrong.",
      "Python is ideal when the task involves data, files or custom rules that no-code tools struggle with.",
    ],
    answer: {
      q: "What can Python automate?",
      a: "Python can automate data entry, report generation, file processing, data transfer between systems, web form filling, email sending, spreadsheet cleanup and document extraction, essentially any repeatable task done on a computer with clear rules.",
    },
    sections: [
      {
        type: "cards",
        h: "Automation examples",
        items: [
          { name: "Daily reports", body: "Pull sales or operations data, build the Excel or PDF report and email it at 8am." },
          { name: "Data sync", body: "Keep two systems in step when they don't integrate natively." },
          { name: "File processing", body: "Rename, convert, merge or split files by rules." },
          { name: "Invoice extraction", body: "Read supplier invoices and enter them into your system for approval." },
          { name: "Price and stock updates", body: "Update product feeds and stock levels from supplier files." },
          { name: "Monitoring", body: "Check sites, orders or inboxes and alert the right person." },
        ],
      },
      {
        type: "steps",
        h: "How we work",
        items: [
          { name: "Watch the task", body: "We see how it's done today, including the exceptions." },
          { name: "Script it", body: "Python code with clear logging and error handling." },
          { name: "Schedule it", body: "Running on a cloud server or function, with secure credentials." },
          { name: "Hand over", body: "Documentation and a simple log of what ran." },
        ],
      },
      {
        type: "text",
        h: "Measuring the saving",
        paras: [
          "Before building, we estimate how many hours a month the task takes and how long the automation will take to build. If the payback isn't clear, we'll tell you, and sometimes the answer is a simpler n8n workflow or a small change in process instead.",
        ],
      },
    ],
    tools: ["Python", "pandas", "openpyxl", "Playwright", "Celery", "FastAPI", "cron", "AWS Lambda"],
    faqs: [
      { q: "Is Python automation secure?", a: "Credentials are stored in secure secrets storage, scripts run with only the permissions they need, and activity is logged." },
      { q: "What if the website or system changes?", a: "Automations that depend on other systems can break when those systems change. We add alerts so failures are noticed quickly, and offer maintenance plans." },
      { q: "Python or n8n?", a: "n8n for connecting common apps quickly; Python for custom logic and heavy data. Many projects use both." },
    ],
    related: ["/technologies/python-development", "/ai-solutions/n8n-automation", "/ai-solutions/business-process-automation", "/compare/n8n-vs-zapier"],
  },
  {
    ...common,
    path: "/ai-solutions/n8n-automation",
    name: "n8n automation",
    line: "n8n workflows that connect your apps, with AI where it helps.",
    seoTitle: "n8n Automation Agency | n8n Workflow Development",
    metaDescription:
      "n8n automation services: workflow design, self-hosted n8n setup, integrations with CRMs, WhatsApp, Google Workspace and AI models, plus maintenance. For businesses in the UAE, Oman and worldwide.",
    h1: "n8n workflow automation",
    serviceType: "n8n automation",
    intro: [
      "n8n is a workflow automation platform that connects hundreds of apps and lets you add custom code and AI steps. Because it can be self-hosted, your data can stay on your own server and you avoid per-task pricing.",
      "We design, build and maintain n8n workflows, and set up and secure self-hosted n8n instances.",
    ],
    answer: {
      q: "What is n8n?",
      a: "n8n is a workflow automation tool that connects applications and services through a visual editor, with the option to add JavaScript or Python code and AI steps. It can be used as a cloud service or self-hosted on your own server.",
    },
    sections: [
      {
        type: "cards",
        h: "n8n workflows we build",
        items: [
          { name: "Lead routing", body: "Website, Meta and WhatsApp leads captured, enriched and sent to the right salesperson instantly." },
          { name: "CRM updates", body: "Deals, contacts and notes kept in sync across tools." },
          { name: "AI processing", body: "Emails and documents summarised, classified or extracted with an AI step." },
          { name: "Reporting", body: "Data pulled from several tools into a Google Sheet or dashboard on a schedule." },
          { name: "Customer notifications", body: "Order, booking and payment updates sent by email or WhatsApp." },
          { name: "Back-office tasks", body: "Invoices, approvals and onboarding steps automated end to end." },
        ],
      },
      {
        type: "steps",
        h: "Our n8n service",
        items: [
          { name: "Map processes", body: "List the manual steps and choose the ones worth automating first." },
          { name: "Set up n8n", body: "Self-hosted with HTTPS, backups and access control, or n8n Cloud." },
          { name: "Build workflows", body: "Workflows with error handling, retries and alerts." },
          { name: "Maintain", body: "Monitoring and updates as your tools change." },
        ],
      },
      {
        type: "table",
        h: "Self-hosted n8n or n8n Cloud?",
        head: ["", "Self-hosted", "n8n Cloud"],
        rows: [
          ["Data location", "Your own server", "n8n's hosting"],
          ["Running cost", "Server cost only", "Subscription by plan"],
          ["Maintenance", "You (or we) handle updates", "Handled by n8n"],
          ["Best for", "Sensitive data, high volumes", "Quick start, low maintenance"],
        ],
      },
    ],
    tools: ["n8n", "Docker", "PostgreSQL", "OpenAI API", "WhatsApp Business Platform", "Google Workspace", "HubSpot", "Webhooks"],
    faqs: [
      { q: "Is n8n better than Zapier?", a: "n8n is more flexible and can be self-hosted, which suits complex or high-volume workflows. Zapier is simpler for quick, small automations. See our n8n vs Zapier comparison." },
      { q: "Can you host n8n for us?", a: "We set it up on your own cloud server so you own it, with backups and security configured." },
      { q: "Can n8n use AI?", a: "Yes. n8n has built-in AI nodes and can call any AI API, so workflows can summarise, classify or draft text." },
      { q: "What happens if a workflow fails?", a: "We add error workflows that retry or alert someone, so failures don't go unnoticed." },
    ],
    related: ["/compare/n8n-vs-zapier", "/compare/n8n-vs-make", "/ai-solutions/workflow-automation", "/ai-solutions/python-automation"],
  },
  {
    ...common,
    path: "/ai-solutions/workflow-automation",
    name: "Workflow automation",
    line: "Connect your apps so data moves itself and nothing falls through the cracks.",
    seoTitle: "Workflow Automation Services | Connect Your Apps & Data",
    metaDescription:
      "Workflow automation services: connect CRM, email, WhatsApp, accounting and spreadsheets so data moves automatically, using n8n, Make, Zapier or custom code. Scoped by time saved.",
    h1: "Workflow automation",
    serviceType: "Workflow automation",
    intro: [
      "Every business has the same hidden cost: people copying information from one tool to another. Workflow automation removes those steps by connecting your apps, so a new lead, order or invoice flows through automatically.",
      "We use n8n, Make or Zapier where they fit, and custom code where they don't.",
    ],
    answer: {
      q: "What is workflow automation?",
      a: "Workflow automation is using software to carry out a sequence of business steps automatically, such as moving data between apps, sending notifications or creating records, based on triggers and rules instead of manual work.",
    },
    sections: [
      {
        type: "list",
        h: "Workflows worth automating first",
        items: [
          "New website or social-media leads into the CRM and to WhatsApp",
          "Paid invoices updating order status and notifying the customer",
          "New employees getting accounts and onboarding emails",
          "Weekly reports compiled from several tools",
          "Form submissions turned into tasks for the right team",
          "Reminders for renewals, follow-ups and overdue payments",
        ],
      },
      {
        type: "cards",
        h: "Choosing the tool",
        items: [
          { name: "n8n", body: "Flexible, self-hostable and cost-effective at volume. Our default for serious workflows." },
          { name: "Make and Zapier", body: "Quick to set up for simple automations between popular apps." },
          { name: "Custom code", body: "Python or Node.js when logic, volume or security needs go beyond no-code tools." },
        ],
      },
      {
        type: "steps",
        h: "Process",
        items: [
          { name: "Audit", body: "List manual steps and estimate the hours each one costs." },
          { name: "Prioritise", body: "Start with the highest saving and lowest risk." },
          { name: "Build", body: "Automations with error handling and alerts." },
          { name: "Document", body: "A simple map of what runs, when and why." },
        ],
      },
    ],
    tools: ["n8n", "Make", "Zapier", "Python", "Node.js", "Google Workspace", "Microsoft 365", "WhatsApp"],
    faqs: [
      { q: "How much time can automation save?", a: "It depends on the process. We estimate hours saved per month for each workflow before building, so you can judge the return." },
      { q: "Do we need to change our tools?", a: "Usually not. Most popular tools have APIs that automation platforms can connect to." },
      { q: "Who maintains the automations?", a: "We can maintain them on a monthly plan, or train your team with documentation." },
    ],
    related: ["/ai-solutions/n8n-automation", "/ai-solutions/business-process-automation", "/compare/n8n-vs-make", "/ai-solutions/ai-integration"],
  },
  {
    ...common,
    path: "/ai-solutions/business-process-automation",
    name: "Business process automation",
    line: "Redesign and automate whole processes, from request to reporting.",
    seoTitle: "Business Process Automation Services | BPA for SMEs",
    metaDescription:
      "Business process automation for SMEs: map and simplify processes like sales, onboarding, invoicing and approvals, then automate them with custom software, n8n and AI, with clear time savings.",
    h1: "Business process automation",
    serviceType: "Business process automation",
    intro: [
      "Automating a messy process just makes the mess faster. Business process automation starts by mapping how work really flows, removing unnecessary steps, then automating what remains with the right mix of software, workflows and AI.",
      "We work with SMEs on processes like sales and quotations, customer onboarding, approvals, invoicing and reporting.",
    ],
    answer: {
      q: "What is business process automation?",
      a: "Business process automation (BPA) is the use of technology to carry out complete business processes, such as order handling, approvals or onboarding, with minimal manual work, after the process itself has been mapped and simplified.",
    },
    sections: [
      {
        type: "steps",
        h: "Our approach",
        items: [
          { name: "Map", body: "Interview the people involved and draw the process as it actually runs." },
          { name: "Simplify", body: "Remove duplicate steps, unclear hand-offs and unnecessary approvals." },
          { name: "Automate", body: "Build with custom software, n8n workflows and AI where each fits best." },
          { name: "Measure", body: "Track cycle time, errors and hours saved against the starting point." },
        ],
      },
      {
        type: "cards",
        h: "Processes we automate",
        items: [
          { name: "Lead to quotation", body: "Enquiries captured, qualified and turned into quotations without retyping." },
          { name: "Order to invoice", body: "Orders, delivery and invoicing linked so nothing is missed." },
          { name: "Approvals", body: "Purchase, leave and expense approvals with clear rules and reminders." },
          { name: "Client onboarding", body: "Documents collected, accounts created and welcome steps sent automatically." },
          { name: "Collections", body: "Overdue invoice reminders sent on schedule, escalating politely." },
          { name: "Management reporting", body: "Weekly figures compiled from all systems without manual work." },
        ],
      },
      {
        type: "list",
        h: "Results to look for",
        note: "We agree measures before we start, so the outcome is visible.",
        items: [
          "Hours of manual work removed each month",
          "Faster response to new enquiries",
          "Fewer errors from retyping data",
          "Clear visibility of where each job stands",
        ],
      },
    ],
    tools: ["n8n", "Laravel", "Python", "OpenAI API", "Google Workspace", "Microsoft 365", "WhatsApp Business Platform"],
    faqs: [
      { q: "Where should we start?", a: "With one process that's frequent, painful and well understood. Quick wins build confidence for bigger changes." },
      { q: "Do we need new software?", a: "Not always. Many processes can be automated by connecting existing tools. Custom software is used when the tools can't support the process." },
      { q: "Will staff lose their jobs?", a: "In our experience, automation mostly removes repetitive tasks so people can focus on customers and decisions." },
    ],
    related: ["/ai-solutions/workflow-automation", "/services/custom-software-development", "/ai-solutions/ai-agent-development", "/services/erp-development"],
  },
  {
    ...common,
    path: "/ai-solutions/ai-lead-generation",
    name: "AI lead generation",
    line: "AI-assisted prospect research, enrichment and outreach drafting.",
    seoTitle: "AI Lead Generation Automation | Research, Enrich & Follow Up",
    metaDescription:
      "AI lead generation automation for B2B teams: find and research target companies from permitted sources, enrich records, score leads and draft personalised outreach for review. GCC and global.",
    h1: "AI lead generation automation",
    serviceType: "AI lead generation",
    intro: [
      "Good B2B prospecting is slow: find companies that fit, research each one, find the right contact and write a message worth replying to. AI can do most of the research and drafting so your team spends its time on conversations.",
      "We build lead-generation workflows that use permitted data sources, respect email and privacy rules, and keep a person in charge of what gets sent.",
    ],
    answer: {
      q: "How does AI help with lead generation?",
      a: "AI helps lead generation by researching companies from public information, summarising what they do, scoring how well they fit your ideal customer, and drafting personalised outreach, while follow-ups and CRM updates are automated.",
    },
    sections: [
      {
        type: "cards",
        h: "What the system does",
        items: [
          { name: "Target list building", body: "Find companies matching your industry, size and location criteria from permitted sources." },
          { name: "Research summaries", body: "A short brief on each company: what they do, recent news and likely needs." },
          { name: "Lead scoring", body: "Rank prospects by fit so the best go to the top." },
          { name: "Personalised drafts", body: "First messages that reference something real about the company, ready for review." },
          { name: "Follow-up automation", body: "Polite follow-ups scheduled and stopped as soon as someone replies." },
          { name: "CRM sync", body: "Every lead, message and reply logged in your CRM." },
        ],
      },
      {
        type: "list",
        h: "Doing it responsibly",
        items: [
          "Only data sources whose terms allow this use",
          "Compliance with anti-spam and privacy laws in each market",
          "Clear opt-out in every message",
          "Low daily volumes to protect your domain reputation",
          "A person approves messages before they're sent",
        ],
      },
      {
        type: "steps",
        h: "Setup",
        items: [
          { name: "Define your ideal customer", body: "Industries, regions, company size and the problems you solve." },
          { name: "Connect sources and CRM", body: "Data sources, email and CRM wired together." },
          { name: "Tune the AI", body: "Research and message prompts refined on real examples." },
          { name: "Run and review", body: "Weekly results reviewed and the targeting adjusted." },
        ],
      },
    ],
    tools: ["n8n", "Python", "OpenAI API", "Anthropic Claude", "HubSpot", "Google Workspace", "PostgreSQL"],
    faqs: [
      { q: "Is automated outreach legal?", a: "B2B outreach is allowed in many markets with conditions, such as identifying yourself, offering an opt-out and respecting privacy laws. Rules differ by country, so we configure each campaign for its target market." },
      { q: "Will AI messages sound robotic?", a: "Not if they're grounded in real research and reviewed. We tune the drafting on your best past messages." },
      { q: "Can it work for UAE and GCC markets?", a: "Yes. We configure targeting, language and timing for GCC markets as well as the UK, US and Europe." },
    ],
    related: ["/ai-solutions/ai-agent-development", "/services/crm-development", "/ai-solutions/n8n-automation", "/services/performance-marketing"],
  },
  {
    ...common,
    path: "/ai-solutions/ai-document-processing",
    name: "AI document processing",
    line: "Turn invoices, forms and contracts into structured data automatically.",
    seoTitle: "AI Document Processing | Invoice, Form & Contract Extraction",
    metaDescription:
      "AI document processing: extract data from invoices, purchase orders, forms, IDs and contracts into your systems, with validation and human review. English and Arabic documents supported.",
    h1: "AI document processing",
    serviceType: "AI document processing",
    intro: [
      "Typing figures from PDFs into another system is slow and error-prone. AI document processing reads invoices, forms and contracts, extracts the fields you need and checks them before they reach your system.",
      "We combine text extraction, AI models and validation rules, with a review screen for anything the system isn't sure about.",
    ],
    answer: {
      q: "What is AI document processing?",
      a: "AI document processing (also called intelligent document processing) uses OCR and AI models to read documents such as invoices, forms and contracts, extract specific information, validate it and pass it to other systems automatically.",
    },
    sections: [
      {
        type: "cards",
        h: "Documents we process",
        items: [
          { name: "Supplier invoices", body: "Supplier, dates, line items, VAT and totals checked against purchase orders." },
          { name: "Purchase orders", body: "Customer POs turned into sales orders in your ERP." },
          { name: "Application forms", body: "Handwritten or scanned forms converted into records." },
          { name: "Contracts", body: "Key dates, parties and clauses summarised for review." },
          { name: "Delivery notes and receipts", body: "Matched to orders for faster reconciliation." },
          { name: "Bank statements", body: "Transactions extracted for categorisation and reconciliation." },
        ],
      },
      {
        type: "steps",
        h: "How it works",
        items: [
          { name: "Capture", body: "Documents arrive by email, upload or scanner." },
          { name: "Extract", body: "OCR and AI pull out the fields you need." },
          { name: "Validate", body: "Totals, formats and lookups checked; doubtful items flagged." },
          { name: "Deliver", body: "Approved data sent to your ERP, accounting or CRM." },
        ],
      },
      {
        type: "list",
        h: "Why validation matters",
        items: [
          "AI reads most documents correctly, but not all",
          "Rules catch totals that don't add up",
          "Low-confidence fields go to a person",
          "Every change is logged for audit",
        ],
      },
    ],
    tools: ["Python", "OpenAI API", "Anthropic Claude", "Google Document AI", "Tesseract OCR", "n8n", "PostgreSQL"],
    faqs: [
      { q: "Can it read Arabic documents?", a: "Yes. Current AI models handle Arabic text well; we test accuracy on your own documents first." },
      { q: "How accurate is it?", a: "Accuracy depends on document quality and layout. We measure it on a sample of your documents during the prototype and set review thresholds accordingly." },
      { q: "Where are documents stored?", a: "On your own storage or cloud account, with access controls. We only send what's needed to the AI service." },
    ],
    related: ["/technologies/python-development", "/ai-solutions/ai-integration", "/services/erp-development", "/ai-solutions/python-automation"],
  },
  {
    ...common,
    path: "/ai-solutions/ai-customer-support",
    name: "AI customer support automation",
    line: "Faster first responses with AI triage, answers and hand-over.",
    seoTitle: "AI Customer Support Automation | Faster Replies, Happier Teams",
    metaDescription:
      "AI customer support automation: triage incoming emails, chats and WhatsApp messages, answer common questions from your knowledge base and draft replies for agents, in English and Arabic.",
    h1: "AI customer support automation",
    serviceType: "AI customer support automation",
    intro: [
      "Most support queues are full of the same questions. AI can answer those instantly from your help content, sort the rest by urgency and topic, and draft replies so your agents spend their time on the cases that need a person.",
      "We set up AI support across email, website chat and WhatsApp, connected to the help desk you already use where possible.",
    ],
    answer: {
      q: "Can AI handle customer support?",
      a: "AI can reliably handle repetitive questions, triage and routing, and draft replies for agents. Complex, sensitive or high-value cases should still go to a person, and good systems hand over with full context.",
    },
    sections: [
      {
        type: "cards",
        h: "What we automate",
        items: [
          { name: "Instant answers", body: "Common questions answered from your knowledge base, any time of day." },
          { name: "Triage and routing", body: "Messages tagged by topic, urgency and language and sent to the right team." },
          { name: "Draft replies", body: "Suggested answers for agents to edit and send." },
          { name: "Order and booking lookups", body: "Status checks pulled from your systems automatically." },
          { name: "Summaries", body: "Long threads summarised before an agent picks them up." },
          { name: "Insights", body: "Weekly reports on what customers ask about most." },
        ],
      },
      {
        type: "steps",
        h: "Rollout",
        items: [
          { name: "Review tickets", body: "Analyse past messages to find the most common questions." },
          { name: "Prepare knowledge", body: "Clean up help content so answers are accurate." },
          { name: "Assist first", body: "Start with drafts for agents before any automatic replies." },
          { name: "Automate safely", body: "Enable automatic answers for proven question types." },
        ],
      },
      {
        type: "list",
        h: "Channels",
        items: ["Website chat", "WhatsApp Business", "Email and help desks", "Instagram and Facebook messages"],
      },
    ],
    tools: ["OpenAI API", "Anthropic Claude", "WhatsApp Business Platform", "n8n", "Zendesk", "Freshdesk", "HubSpot"],
    faqs: [
      { q: "Will customers know they're talking to AI?", a: "We recommend being transparent, and it's required in some contexts. The bot introduces itself and offers a person whenever needed." },
      { q: "Does it work with our help desk?", a: "Most help desks have APIs we can connect to. If not, we can work through email or n8n." },
      { q: "What about angry or sensitive messages?", a: "These are detected and routed straight to a person." },
    ],
    related: ["/ai-solutions/ai-chatbot-development", "/ai-solutions/ai-integration", "/ai-solutions/n8n-automation", "/services/ai-automation"],
  },
];
