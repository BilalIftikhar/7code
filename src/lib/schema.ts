// Site-wide structured data. Every page links back to these @ids, so search
// engines and AI assistants see one consistent entity for 7CODE.
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export const ids = {
  org: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  founder: `${site.url}/about#founder`,
  logo: `${site.url}/#logo`,
};

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ids.org,
    name: site.name,
    alternateName: "7CODE Agency",
    url: site.url,
    slogan: site.tagline,
    description: site.description,
    logo: { "@type": "ImageObject", "@id": ids.logo, url: `${site.url}/icon.svg`, caption: site.name },
    image: `${site.url}/opengraph-image`,
    founder: { "@type": "Person", "@id": ids.founder, name: site.founder.name, jobTitle: site.founder.role },
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
    areaServed: site.location.markets.map((name) => ({ "@type": "Country", name })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.contact.whatsapp,
        availableLanguage: ["English", "Urdu"],
        areaServed: ["AE", "OM", "PK", "GB", "SA", "US"],
        ...(site.contact.email ? { email: site.contact.email } : {}),
      },
    ],
    knowsAbout: [
      "Web development",
      "Next.js",
      "Laravel",
      "Shopify",
      "WordPress",
      "Mobile app development",
      "Search engine optimisation",
      "Answer engine optimisation",
      "Generative engine optimisation",
      "UI/UX design",
      "AI automation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/services/${s.slug}` },
      })),
    },
    sameAs: [site.social.linkedin, site.social.github, site.founder.upwork],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ids.website,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ids.org },
  };
}
