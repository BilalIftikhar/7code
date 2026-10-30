// The nine service categories. Individual service pages are built in chunk 3.

export type ServiceCategory = {
  slug: string;
  name: string;
  line: string;
  includes: string[];
  tools: string[];
};

export const services: ServiceCategory[] = [
  {
    slug: "web-development",
    name: "Web & software development",
    line: "Custom websites, web applications, SaaS platforms and APIs, built to be fast and easy to maintain.",
    includes: ["Custom websites", "Web applications", "SaaS development", "APIs & integrations", "CRM & ERP", "Maintenance"],
    tools: ["Next.js", "React", "Laravel", "Node.js", "PostgreSQL"],
  },
  {
    slug: "mobile-apps",
    name: "Mobile apps",
    line: "iOS and Android apps from a single codebase, designed for how people actually use their phones.",
    includes: ["iOS & Android", "React Native", "Flutter", "App UI/UX", "App maintenance"],
    tools: ["React Native", "Flutter", "Expo"],
  },
  {
    slug: "ecommerce",
    name: "eCommerce & Shopify",
    line: "Shopify and WooCommerce stores, custom themes and headless storefronts that turn visitors into orders.",
    includes: ["Shopify & Shopify Plus", "Theme development", "Headless Shopify", "WooCommerce", "Conversion optimisation"],
    tools: ["Shopify Liquid", "Hydrogen", "WooCommerce"],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    line: "Custom themes and plugins, speed work and dependable maintenance for WordPress sites.",
    includes: ["Custom themes", "Plugin development", "Elementor & Gutenberg", "Speed optimisation", "Maintenance"],
    tools: ["PHP", "WordPress", "ACF"],
  },
  {
    slug: "seo-aeo-geo",
    name: "SEO, AEO & GEO",
    line: "Search visibility on Google and in AI assistants, from technical fixes to local pages written for real areas.",
    includes: ["Technical SEO", "Local SEO", "International SEO", "Answer engine optimisation", "Generative engine optimisation", "SEO audits"],
    tools: ["Semrush", "Search Console", "Schema.org"],
  },
  {
    slug: "social-media",
    name: "Social media marketing",
    line: "Strategy, content and community management across the platforms your customers use.",
    includes: ["Instagram & Facebook", "LinkedIn", "TikTok", "YouTube", "Content planning"],
    tools: ["Meta Business Suite", "LinkedIn", "TikTok"],
  },
  {
    slug: "branding-ui-ux",
    name: "Branding & UI/UX",
    line: "Brand identities, design systems and product interfaces, designed in Figma and built to the pixel.",
    includes: ["Brand identity", "Logo design", "UI/UX design", "Design systems", "Figma to code", "Website redesign"],
    tools: ["Figma", "Framer"],
  },
  {
    slug: "performance-marketing",
    name: "Performance marketing",
    line: "Google, Meta and LinkedIn campaigns measured against leads and sales, not impressions.",
    includes: ["Google Ads", "Meta Ads", "LinkedIn Ads", "PPC management", "Conversion tracking"],
    tools: ["Google Ads", "Meta Ads", "GA4", "Tag Manager"],
  },
  {
    slug: "ai-automation",
    name: "AI & automation",
    line: "AI features, chatbots and workflow automation that remove repetitive work from your team.",
    includes: ["AI integration", "AI chatbots", "Workflow automation", "CRM automation", "AI-powered apps"],
    tools: ["OpenAI & Claude APIs", "n8n", "Zapier"],
  },
];
