"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { services } from "@/lib/services";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-night text-chalk">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <Link href="/" aria-label="7CODE home" className="shrink-0">
          <Logo tone="chalk" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-panel"
              onClick={() => setServicesOpen((o) => !o)}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] text-chalk/85 transition-colors hover:text-white"
            >
              Services
              <svg
                viewBox="0 0 12 12"
                className={`h-3 w-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>

            <div
              id="services-panel"
              ref={panelRef}
              className={`fixed inset-x-0 top-[4.5rem] origin-top border-t border-white/10 bg-night transition-[opacity,transform] duration-300 ease-[var(--ease-out-quart)] ${
                servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="wrap grid grid-cols-12 gap-8 py-10">
                <div className="col-span-3">
                  <p className="display-soft text-2xl text-white">Everything a growing business needs online.</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    One team for the build and the growth that follows.
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-block text-sm font-semibold text-signal-soft underline-offset-4 hover:underline"
                  >
                    See all services
                  </Link>
                </div>
                <ul className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group block rounded-lg px-3 py-3 transition-colors hover:bg-white/5"
                      >
                        <span className="block font-semibold text-white">{s.name}</span>
                        <span className="mt-1 block text-[0.8rem] leading-snug text-mist">
                          {s.includes.slice(0, 3).join(", ")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className="rounded-full px-4 py-2 text-[0.95rem] text-chalk/85 transition-colors hover:text-white aria-[current=page]:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-signal px-5 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#5a48ff]"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-night transition-opacity duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex min-h-full flex-col pb-10 pt-6">
          <ul className="space-y-1">
            {[{ href: "/services", label: "Services" }, ...nav, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="display block py-2 text-[2.6rem] text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-mist">Services</p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 xs:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-chalk/90">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-auto block rounded-full bg-signal px-6 py-4 text-center font-semibold text-white"
          >
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
