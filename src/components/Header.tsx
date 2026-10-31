"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Logo, Mark } from "./Logo";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";
import { Magnetic } from "@/components/motion/Magnetic";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const places = [
  { city: "Lahore", tz: "Asia/Karachi", href: "/locations/lahore" },
  { city: "Dubai", tz: "Asia/Dubai", href: "/locations/dubai" },
  { city: "Abu Dhabi", tz: "Asia/Dubai", href: "/locations/abu-dhabi" },
];

/* ---------- Live studio clock (client-only, minute precision) ---------- */
const fmt = (tz: string) =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(new Date());
const clockStore = {
  subscribe(cb: () => void) {
    const id = window.setInterval(cb, 15_000);
    return () => window.clearInterval(id);
  },
};
function useClock(tz: string) {
  return useSyncExternalStore(clockStore.subscribe, () => fmt(tz), () => null);
}

/* ---------- Text roll: label slides up to reveal a copy of itself ---------- */
export function Roll({ children }: { children: string }) {
  return (
    <span className="roll" data-text={children}>
      <span>{children}</span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const lahore = useClock("Asia/Karachi");
  const featured = projects[0];

  // Close menus on route change
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  // Smart bar: pill once scrolled, hides on scroll down, returns on scroll up; progress hairline
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 320);
        lastY = y;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setServicesOpen(false);
      setMenuOpen((open) => {
        if (open) menuButton.current?.focus();
        return false;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const pill = scrolled && !menuOpen;

  return (
    <>
    <header
      className={`sticky top-0 z-[60] transition-transform duration-500 ease-[var(--ease-out-quart)] ${
        hidden && !menuOpen && !servicesOpen ? "-translate-y-[120%]" : ""
      }`}
    >
      <div className={`transition-[padding] duration-500 ease-[var(--ease-out-quart)] ${pill ? "px-3 pt-3 md:px-6" : "px-0 pt-0"}`}>
        <div
          className={`relative mx-auto flex items-center justify-between gap-4 transition-all duration-500 ease-[var(--ease-out-quart)] ${
            pill
              ? "h-14 max-w-[76rem] rounded-full border border-night/[0.08] bg-paper/80 pl-5 pr-2 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "wrap h-16 md:h-20"
          }`}
        >
          <Link href="/" aria-label="7CODE home" className="relative shrink-0">
            <Logo tone={menuOpen ? "chalk" : "night"} />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className={`hidden items-center gap-1 lg:flex ${menuOpen ? "invisible" : ""}`}>
            <div
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-panel"
                onClick={() => setServicesOpen((o) => !o)}
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] font-medium text-night/75 transition-colors hover:text-night aria-expanded:text-night"
              >
                <Roll>Services</Roll>
                <svg
                  viewBox="0 0 12 12"
                  className={`h-3 w-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>

              {/* Services mega panel */}
              <div
                id="services-panel"
                className={`absolute left-1/2 top-full w-[min(64rem,calc(100vw-3rem))] -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-300 ease-[var(--ease-out-quart)] ${
                  servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="grid grid-cols-12 gap-2 rounded-3xl border border-night/[0.08] bg-card p-2 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.35)]">
                  <ul className="col-span-8 grid grid-cols-2 gap-1 p-2">
                    {services.map((s, i) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex gap-4 rounded-2xl p-3.5 transition-colors hover:bg-paper"
                        >
                          <span className="mt-0.5 text-xs tabular-nums text-graphite">{String(i + 1).padStart(2, "0")}</span>
                          <span>
                            <span className="block font-semibold text-night">{s.name}</span>
                            <span className="mt-1 block text-[0.82rem] leading-snug text-graphite">{s.includes.slice(0, 3).join(", ")}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="col-span-4 flex flex-col gap-2">
                    <Link
                      href={`/work/${featured.slug}`}
                      className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-night p-6 text-white"
                    >
                      <svg viewBox="0 0 100 120" className="absolute -bottom-8 -right-6 h-48 w-auto text-white/[0.07] transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-[-4deg]" aria-hidden="true">
                        <path d="M0 0H100V17L51 120H29L76 19H0Z" fill="currentColor" />
                      </svg>
                      <span className="relative text-xs text-white/70">Featured work</span>
                      <span className="relative">
                        <span className="display block text-4xl">{featured.name}</span>
                        <span className="mt-2 block text-sm text-white/70">{featured.industry}</span>
                        <span className="mt-5 inline-block text-sm font-semibold underline-offset-4 group-hover:underline">
                          View case study
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="/services"
                      className="flex items-center justify-between rounded-2xl bg-paper px-5 py-4 text-sm font-semibold transition-colors hover:bg-chalk"
                    >
                      All services
                      <span className="text-graphite">{services.length}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="relative rounded-full px-4 py-2 text-[0.95rem] font-medium text-night/75 transition-colors hover:text-night aria-[current=page]:text-night"
                >
                  <Roll>{item.label}</Roll>
                  {active && <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-night" aria-hidden="true" />}
                </Link>
              );
            })}
          </nav>

          <div className="relative flex items-center gap-2">
            <p
              className={`hidden items-center gap-2 text-sm tabular-nums xl:flex ${menuOpen ? "text-white/70" : "text-graphite"}`}
              aria-label={lahore ? `Studio time in Lahore: ${lahore}` : "Studio in Lahore"}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25d366] opacity-50 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25d366]" />
              </span>
              Lahore {lahore ?? "--:--"} <span className={menuOpen ? "text-white/60" : "text-graphite/90"}>GMT+5</span>
            </p>
            <div className={`hidden md:block ${menuOpen ? "invisible" : ""}`}>
              <Magnetic>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-full bg-signal py-2.5 pl-5 pr-2.5 text-[0.95rem] font-semibold text-on-signal transition-colors hover:bg-signal-hover"
                >
                  <Roll>Let&apos;s talk</Roll>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:rotate-45" aria-hidden="true">
                    <svg viewBox="0 0 12 12" className="h-3 w-3">
                      <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                </Link>
              </Magnetic>
            </div>
            <button
              ref={menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((o) => !o)}
              className={`group flex h-11 items-center gap-3 rounded-full pl-1.5 pr-1.5 text-[0.95rem] font-semibold transition-colors sm:pl-4 ${
                menuOpen ? "bg-white text-night" : "bg-night text-white hover:bg-night-2"
              }`}
            >
              <span className="hidden sm:inline">{menuOpen ? "Close" : "Menu"}</span>
              <span className="sr-only sm:hidden">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span className={`relative flex h-8 w-8 items-center justify-center rounded-full ${menuOpen ? "bg-night/10" : "bg-white/15"}`} aria-hidden="true">
                <span className={`absolute h-[1.5px] w-3.5 bg-current transition-transform duration-500 ease-[var(--ease-out-quart)] ${menuOpen ? "rotate-45" : "-translate-y-[3px]"}`} />
                <span className={`absolute h-[1.5px] w-3.5 bg-current transition-transform duration-500 ease-[var(--ease-out-quart)] ${menuOpen ? "-rotate-45" : "translate-y-[3px]"}`} />
              </span>
            </button>
          </div>

          {/* Reading-progress hairline */}
          <div
            className={`pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left overflow-hidden transition-opacity duration-500 ${pill ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          >
            <div ref={progress} className="h-full origin-left bg-night/60" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>

    </header>

      {/* Full-screen menu — outside the header so its transform can't trap position: fixed */}
      <div
        id="site-menu"
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`site-menu fixed inset-0 z-[55] overflow-y-auto bg-night text-white ${menuOpen ? "is-open" : ""}`}
        inert={!menuOpen}
      >
        <div className="wrap grid min-h-full gap-12 pb-10 pt-28 md:pt-32 lg:grid-cols-12">
          <nav aria-label="Menu" className="lg:col-span-7">
            <ol>
              {menuLinks.map((l, i) => {
                const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <li key={l.href} className="menu-item overflow-hidden" style={{ ["--i" as string]: i }}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-baseline gap-4 py-1 md:gap-6"
                    >
                      <span className="w-7 text-sm tabular-nums text-white/60">{String(i + 1).padStart(2, "0")}</span>
                      <span className="display text-[clamp(2.4rem,min(6vw,8.6vh),5.5rem)] leading-[0.98] text-white/90 transition-[color,transform] duration-500 ease-[var(--ease-out-quart)] group-hover:translate-x-3 group-hover:text-white group-aria-[current=page]:text-white">
                        {l.label}
                      </span>
                      {l.href === "/work" && <span className="text-sm text-white/60">{projects.length}</span>}
                      {l.href === "/services" && <span className="text-sm text-white/60">{services.length}</span>}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="menu-aside flex flex-col justify-end gap-10 lg:col-span-4 lg:col-start-9">
            <div>
              <p className="text-sm text-white/60">Start a project</p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="display-soft mt-3 block text-2xl underline-offset-4 hover:underline"
              >
                WhatsApp {site.contact.whatsappDisplay}
              </a>
              {site.contact.email && (
                <a href={`mailto:${site.contact.email}`} className="mt-2 block text-lg text-white/80 hover:text-white">
                  {site.contact.email}
                </a>
              )}
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-night transition-colors hover:bg-chalk"
              >
                Get a free quote
              </Link>
            </div>
            <div>
              <p className="text-sm text-white/60">Where we work</p>
              <ul className="mt-3 divide-y divide-white/10 border-y border-white/10">
                {places.map((p) => (
                  <PlaceRow key={p.city} {...p} />
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between gap-4 text-sm">
              <ul className="flex gap-5">
                <li>
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={site.founder.upwork} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                    Upwork
                  </a>
                </li>
                <li>
                  <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                    GitHub
                  </a>
                </li>
              </ul>
              <Mark className="h-6 w-6" invert />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PlaceRow({ city, tz, href }: { city: string; tz: string; href: string }) {
  const time = useClock(tz);
  return (
    <li>
      <Link href={href} className="flex items-center justify-between py-3 text-white/80 transition-colors hover:text-white">
        <span className="font-semibold">{city}</span>
        <span className="tabular-nums text-white/60">{time ?? "--:--"}</span>
      </Link>
    </li>
  );
}
