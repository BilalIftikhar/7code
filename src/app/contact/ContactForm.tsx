"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitEnquiry, type ContactState } from "./actions";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

const budgets = ["Under AED 4,000 (≈ $1,000)", "AED 4,000 – 18,000", "AED 18,000 – 55,000", "AED 55,000+", "Not sure yet"];
const timelines = ["As soon as possible", "Within 1 month", "1 – 3 months", "Flexible"];

const input =
  "w-full rounded-lg border border-rule bg-card px-4 py-3.5 text-base outline-none transition-colors placeholder:text-mist focus:border-night aria-[invalid=true]:border-[#c0392b]";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex justify-between text-sm font-semibold">
        {label}
        {optional && <span className="font-normal text-graphite">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("service") ?? "";
  const [state, action, pending] = useActionState<ContactState, FormData>(submitEnquiry, { status: "idle" });
  const [startedAt] = useState(() => Date.now());
  const status = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "idle") return;
    status.current?.focus();
    // Analytics event, picked up by Tag Manager once installed
    window.dataLayer?.push({ event: "contact_form", status: state.status });
  }, [state]);

  const v = state.values ?? {};
  const e = state.errors ?? {};

  if (state.status === "sent") {
    return (
      <div ref={status} tabIndex={-1} role="status" className="rounded-xl bg-card p-8 outline-none md:p-12">
        <p className="display-soft text-3xl">Enquiry sent</p>
        <p className="mt-4 max-w-[48ch] leading-relaxed text-graphite">{state.message}</p>
      </div>
    );
  }

  if (state.status === "fallback") {
    return (
      <div ref={status} tabIndex={-1} role="status" className="rounded-xl bg-card p-8 outline-none md:p-12">
        <p className="display-soft text-3xl">Send it on WhatsApp</p>
        <p className="mt-4 max-w-[52ch] leading-relaxed text-graphite">{state.message}</p>
        <a
          href={whatsappLink(state.whatsappText)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-signal px-7 py-4 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
        >
          Open WhatsApp with my details
        </a>
      </div>
    );
  }

  const err = (k: keyof NonNullable<ContactState["errors"]>) =>
    e[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {};

  return (
    <form action={action} noValidate className="space-y-6">
      {state.status === "error" && state.message && (
        <div ref={status} tabIndex={-1} role="alert" className="rounded-lg border border-[#f3c5c0] bg-[#fdf1ef] px-4 py-3 text-sm text-[#7a1d14] outline-none">
          {state.message}
        </div>
      )}

      {/* Spam protection: humans never see or fill this */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Your name" error={e.name}>
          <input id="name" name="name" autoComplete="name" required defaultValue={v.name} className={input} {...err("name")} />
        </Field>
        <Field id="email" label="Business email" error={e.email}>
          <input id="email" name="email" type="email" autoComplete="email" required defaultValue={v.email} className={input} {...err("email")} />
        </Field>
        <Field id="company" label="Company" optional>
          <input id="company" name="company" autoComplete="organization" defaultValue={v.company} className={input} />
        </Field>
        <Field id="country" label="Country" optional>
          <input id="country" name="country" autoComplete="country-name" defaultValue={v.country} className={input} />
        </Field>
        <Field id="phone" label="Phone or WhatsApp" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone} className={input} placeholder="+971 …" />
        </Field>
        <Field id="service" label="What do you need?" error={e.service}>
          <select id="service" name="service" defaultValue={v.service ?? preset} className={input} {...err("service")}>
            <option value="">Choose a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </Field>
        <Field id="budget" label="Budget" optional>
          <select id="budget" name="budget" defaultValue={v.budget ?? ""} className={input}>
            <option value="">Choose a range</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field id="timeline" label="Timeline" optional>
          <select id="timeline" name="timeline" defaultValue={v.timeline ?? ""} className={input}>
            <option value="">Choose a timeline</option>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="details" label="About the project" error={e.details}>
        <textarea
          id="details"
          name="details"
          rows={6}
          required
          defaultValue={v.details}
          className={input}
          placeholder="What are you building, who is it for, and what does success look like?"
          {...err("details")}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-signal px-8 py-4 font-semibold text-on-signal transition-colors hover:bg-signal-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-sm text-graphite">
          By sending, you agree to our{" "}
          <a href="/privacy" className="underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
