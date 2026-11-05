import Link from "next/link";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";
import { Mark } from "./Logo";

const company = [
  { href: "/about", label: "About" },
  { href: "/process", label: "How we work" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const locations = [
  { href: "/locations/lahore", label: "Lahore" },
  { href: "/locations/dubai", label: "Dubai" },
  { href: "/locations/abu-dhabi", label: "Abu Dhabi" },
];

async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="bg-night text-chalk">
      <div className="wrap pt-20 md:pt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="display-soft max-w-sm text-3xl text-white">
              Have a project in mind? Tell us what you want to build.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-night transition-colors hover:bg-chalk"
              >
                Start a project
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-white/50"
              >
                WhatsApp us
              </a>
            </div>
            <dl className="mt-10 space-y-3 text-sm">
              <div>
                <dt className="text-mist">Headquarters</dt>
                <dd>{site.location.headquarters}</dd>
              </div>
              <div>
                <dt className="text-mist">WhatsApp</dt>
                <dd>
                  <a href={whatsappLink()} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                    {site.contact.whatsappDisplay}
                  </a>
                </dd>
              </div>
              {site.contact.email && (
                <div>
                  <dt className="text-mist">Email</dt>
                  <dd>
                    <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <nav aria-label="Services" className="md:col-span-3 md:col-start-6">
            <h2 className="text-sm text-mist">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-chalk/85 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2">
            <h2 className="text-sm text-mist">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-chalk/85 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-sm text-mist">Locations</h2>
            <ul className="mt-4 space-y-2.5">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-chalk/85 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Selected work" className="md:col-span-2">
            <h2 className="text-sm text-mist">Selected work</h2>
            <ul className="mt-4 space-y-2.5">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className="text-chalk/85 hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-sm text-mist">Follow</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-chalk/85 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-chalk/85 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="text-chalk/85 hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="wrap mt-20 overflow-hidden md:mt-28" aria-hidden="true">
        <p className="display select-none whitespace-nowrap text-[23.5vw] leading-[0.78] text-white xl:text-[19.5rem]">
          7CODE
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-4 py-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <Mark className="h-5 w-5" invert />© <Year /> 7CODE. Built in Lahore for clients worldwide.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
