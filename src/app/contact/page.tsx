import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import { Suspense } from "react";
import { ContactForm } from "./ContactForm";
import { PageHeader } from "@/components/PageParts";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = meta({
  title: "Contact — start a project",
  description:
    "Tell 7CODE about your website, app, store or marketing project. Send an enquiry or message us on WhatsApp for a plan, timeline and fixed quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
        title="Let's talk about your project."
        wide
      />

      <section className="wrap py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Suspense fallback={<div className="h-[640px] rounded-xl bg-card" />}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-3 md:col-span-4 md:col-start-9">
            <div className="rounded-xl bg-night p-6 text-white md:p-8">
              <p className="text-sm text-mist">Fastest reply</p>
              <p className="display-soft mt-3 text-2xl">WhatsApp</p>
              <p className="mt-2 text-white/75">{site.contact.whatsappDisplay}</p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-night transition-colors hover:bg-chalk"
              >
                Message us
              </a>
            </div>
            {site.contact.email && (
              <div className="rounded-xl bg-card p-6 md:p-8">
                <p className="text-sm text-graphite">Email</p>
                <a href={`mailto:${site.contact.email}`} className="mt-2 block text-lg font-semibold underline-offset-4 hover:underline">
                  {site.contact.email}
                </a>
              </div>
            )}
            <div className="rounded-xl bg-card p-6 md:p-8">
              <p className="text-sm text-graphite">Based in</p>
              <p className="mt-2 text-lg font-semibold">{site.location.headquarters}</p>
              <p className="mt-3 leading-relaxed text-graphite">
                We work remotely with clients in the UAE, Oman, the UK and beyond. Pakistan time (UTC+5) is one hour ahead
                of the UAE, so our working days overlap almost completely.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 md:p-8">
              <p className="text-sm text-graphite">What happens next</p>
              <ol className="mt-3 space-y-2 leading-relaxed">
                <li>1. We read your enquiry and ask anything that&apos;s unclear.</li>
                <li>2. A short call to understand the goals.</li>
                <li>3. A written plan, timeline and fixed quote.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
