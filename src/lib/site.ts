// Single source of truth for company facts.
// Only verified details belong here. Anything marked TODO must be
// confirmed by the founder before launch — never invent contact details.

export const site = {
  name: "7CODE",
  // Final domain: set NEXT_PUBLIC_SITE_URL in Vercel (no trailing slash). Sitemap, canonicals,
  // share images, schema and llms.txt all follow it.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://7code.digital").replace(/\/$/, ""),
  tagline: "We build. We grow. We transform.",
  description:
    "Web development, SEO and digital marketing agency for Dubai, Abu Dhabi and Lahore: custom websites, web apps, Shopify stores, mobile apps and AI-search SEO.",
  founder: {
    name: "Muhammad Bilal Iftikhar",
    role: "Co-Founder & technical lead",
    yearsExperience: "6+", // documented in CV
    upwork: "https://www.upwork.com/freelancers/~012e9b9487fa4f8fce",
    linkedin: "https://www.linkedin.com/in/mbilaliftikhar/",
    portfolio: "https://mbilaliftikhar.vercel.app/",
  },
  // 7CODE was founded by Abdul and Muhammad Bilal Iftikhar (in that order).
  cofounder: {
    name: "Abdul",
    role: "Co-Founder",
  },
  foundedBy: "Abdul and Muhammad Bilal Iftikhar",
  contact: {
    whatsapp: "+971566390908",
    whatsappDisplay: "+971 56 639 0908",
    email: "", // TODO: add the 7CODE inbox before launch
  },
  location: {
    headquarters: "Lahore, Punjab, Pakistan",
    markets: ["Pakistan", "United Arab Emirates", "Oman", "Saudi Arabia", "United Kingdom", "United States"],
  },
  social: {
    // 7CODE company page; the founder's own profile is site.founder.linkedin
    linkedin: "https://www.linkedin.com/company/7code-digital/",
    github: "https://github.com/BilalIftikhar",
  },
} as const;

export const whatsappLink = (text = "Hi 7CODE, I'd like to discuss a project.") =>
  `https://wa.me/${site.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(text)}`;
