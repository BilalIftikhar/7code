import Link from "next/link";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";
import { Mark } from "./Logo";
import { EditorPanel } from "./footer/EditorPanel";
import { FooterReveal } from "./footer/FooterReveal";

const company = [
  { href: "/about", label: "About" },
  { href: "/process", label: "How we work" },
  { href: "/work", label: "Work" },
  { href: "/technologies", label: "Technologies" },
  { href: "/industries", label: "Industries" },
  { href: "/compare", label: "Comparisons" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/locations/uae", label: "UAE" },
  { href: "/locations/oman", label: "Oman" },
  { href: "/locations/lahore", label: "Lahore" },
  { href: "/locations/dubai", label: "Dubai" },
  { href: "/locations/abu-dhabi", label: "Abu Dhabi" },
];

async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

const Sparkle = () => (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
    <path d="M8 1.5l1.6 4.9L14.5 8l-4.9 1.6L8 14.5 6.4 9.6 1.5 8l4.9-1.6z" fill="currentColor" />
  </svg>
);

const socials = [
  {
    name: "LinkedIn",
    href: site.social.linkedin,
    path: "M4.5 9.5v10M4.5 5.5v.01M9 19.5v-6a3 3 0 016 0v6M9 9.5v10M3 3h18v18H3z",
  },
  {
    name: "Instagram",
    href: site.social.instagram,
    path: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5.5-1.5v.01",
  },
  {
    name: "GitHub",
    href: site.social.github,
    path: "M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.5a3 3 0 00-.9-2.4c3-.3 6-1.4 6-6.5a5 5 0 00-1.4-3.5 4.7 4.7 0 00-.1-3.5s-1.1-.3-3.6 1.4a12.4 12.4 0 00-6.5 0C6.1 2.3 5 2.6 5 2.6a4.7 4.7 0 00-.1 3.5A5 5 0 003.5 9.6c0 5.1 3 6.2 6 6.5a3 3 0 00-.9 2.3V22",
  },
];

export function Footer() {
  return (
    <footer className="ft">
      <FooterReveal className="ft-in">
        {/* Closing call to action */}
        <section aria-labelledby="ft-cta" className="wrap ft-cta">
          <div className="ft-cta-copy">
            <p className="ft-pill" data-a style={{ ["--d" as string]: "0s" }}>
              <Sparkle />
              Start your project
            </p>
            <h2 id="ft-cta" className="ft-h">
              <span className="ft-line">
                <span data-a style={{ ["--d" as string]: ".12s" }}>Your next website</span>
              </span>
              <span className="ft-line">
                <span data-a className="ft-dim" style={{ ["--d" as string]: ".22s" }}>
                  starts now.
                </span>
              </span>
            </h2>
            <p className="ft-p" data-a style={{ ["--d" as string]: ".36s" }}>
              Tell us what you need, watch it take shape on a staging link, then launch it on your own accounts. Fixed,
              itemised quote. No lock-in.
            </p>
            <div className="ft-ctas" data-a style={{ ["--d" as string]: ".46s" }}>
              <Link href="/contact" className="ft-btn">
                Get a free quote
                <span aria-hidden="true">→</span>
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="ft-link">
                or WhatsApp {site.contact.whatsappDisplay}
              </a>
            </div>
          </div>
          <div className="ft-editor-slot" data-a data-editor style={{ ["--d" as string]: ".3s" }}>
            <EditorPanel />
          </div>
        </section>

        {/* Four-part footer */}
        <div className="wrap ft-grid">
          <div className="ft-brand" data-a style={{ ["--d" as string]: ".55s" }}>
            <Link href="/" className="ft-logo" aria-label="7CODE home">
              <Mark className="h-7 w-7" invert />
              <span>7code.digital</span>
            </Link>
            <p>
              One team for your website, app and search,
              <br />
              so you never rebuild from scratch.
            </p>
            <ul className="ft-social">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`7CODE on ${s.name}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={s.path} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Services" className="ft-col" data-a style={{ ["--d" as string]: ".62s" }}>
            <h2>Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/social-media-management">Social media packages</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company" className="ft-col" data-a style={{ ["--d" as string]: ".68s" }}>
            <h2>Company</h2>
            <ul>
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Selected work" className="ft-col" data-a style={{ ["--d" as string]: ".74s" }}>
            <h2>Work</h2>
            <ul>
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ft-talk" data-a style={{ ["--d" as string]: ".8s" }}>
            <h2>Talk to us today</h2>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="ft-field">
              <span>Message us on WhatsApp</span>
              <span className="ft-key" aria-hidden="true">
                →
              </span>
            </a>
            <p>
              {site.contact.whatsappDisplay}
              {site.contact.email ? (
                <>
                  {" · "}
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </>
              ) : null}
            </p>
            <p>{site.location.headquarters} · Dubai · Abu Dhabi · Worldwide</p>
          </div>
        </div>

        {/* Bottom: 3D mark over the credit line, giant wordmark sinking off the edge */}
        <div className="ft-bottom">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/seven-3d.webp" alt="" aria-hidden="true" width={640} height={640} loading="lazy" decoding="async" className="ft-seven" />
          <p className="ft-credit">
            ©<Year /> <s>/</s> 7CODE <s>/</s> Built in Lahore for clients worldwide.
          </p>
          <ul className="ft-legal">
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
          <p className="ft-word" aria-hidden="true">
            7CODE
          </p>
        </div>
      </FooterReveal>
    </footer>
  );
}
