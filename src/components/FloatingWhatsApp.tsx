"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/site";

/** Persistent WhatsApp button — the contact route most UAE buyers prefer. */
export function FloatingWhatsApp() {
  const [shown, setShown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with 7CODE on WhatsApp"
      className={`fixed bottom-4 right-4 z-40 flex items-center gap-2.5 rounded-full bg-night py-3 pl-3.5 pr-5 font-semibold text-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] transition-[opacity,transform] duration-500 ease-[var(--ease-out-quart)] hover:bg-night-2 md:bottom-6 md:right-6 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366]">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-40 motion-reduce:hidden" />
        <svg viewBox="0 0 24 24" className="relative h-4 w-4" aria-hidden="true">
          <path
            d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 1.8a7.2 7.2 0 1 1-3.7 13.4l-.3-.2-2.7.7.7-2.6-.2-.3A7.2 7.2 0 0 1 12 4.8Zm-3 3.5c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.3-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6 6 0 0 1-3-2.6c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4H9Z"
            fill="#fff"
          />
        </svg>
      </span>
      WhatsApp
    </a>
  );
}
