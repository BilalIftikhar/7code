// Single source of truth for company facts.
// Only verified details belong here. Anything marked TODO must be
// confirmed by the founder before launch — never invent contact details.

export const site = {
  name: "7CODE",
  url: "https://7code.agency", // TODO: confirm final domain
  tagline: "We build. We grow. We transform.",
  description:
    "7CODE is a founder-led digital agency in Lahore building websites, web apps, mobile apps and eCommerce, and growing them with SEO, AEO and GEO for clients in the UAE and worldwide.",
  founder: {
    name: "Muhammad Bilal Iftikhar",
    role: "Founder & technical lead",
    yearsExperience: "6+", // documented in CV
    upwork: "https://www.upwork.com/freelancers/~012e9b9487fa4f8fce",
    linkedin: "https://www.linkedin.com/in/mbilaliftikhar/",
    portfolio: "https://mbilaliftikhar.vercel.app/",
  },
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
    linkedin: "https://www.linkedin.com/in/mbilaliftikhar/",
    github: "https://github.com/BilalIftikhar",
  },
} as const;

export const whatsappLink = (text = "Hi 7CODE, I'd like to discuss a project.") =>
  `https://wa.me/${site.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(text)}`;
