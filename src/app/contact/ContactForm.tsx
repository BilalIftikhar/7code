"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitEnquiry, type ContactState } from "./actions";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

const budgets = [
  "Under AED 4,000 (≈ $1,000)",
  "AED 4,000–18,000",
  "AED 18,000–55,000",
  "AED 55,000+",
  "Not sure yet",
];
const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "Flexible",
];

const input =
  "w-full rounded-xl border border-rule bg-card px-4 py-3 text-base outline-none transition-[border-color,box-shadow] placeholder:text-mist hover:border-mist focus:border-night focus:shadow-[0_0_0_4px_rgba(34,34,34,0.08)] aria-[invalid=true]:border-[#c0392b]";

/**
 * Single-choice pills (styled radio buttons): on-brand on every OS, one tap on
 * phones, and the whole set of options is visible at once.
 */
function Choices({
  name,
  legend,
  options,
  defaultValue,
  optional,
  error,
}: {
  name: string;
  legend: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  optional?: boolean;
  error?: string;
}) {
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="mb-3 flex w-full justify-between text-sm font-semibold">
        {legend}
        {optional && (
          <span className="font-normal text-graphite">Optional</span>
        )}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.value} className="relative cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o.value}
              defaultChecked={defaultValue === o.value}
              className="peer absolute inset-0 cursor-pointer opacity-0"
            />
            <span className="flex items-center gap-2 rounded-full border border-rule bg-card px-4 py-2.5 text-[0.95rem] transition-colors hover:border-night peer-checked:border-night peer-checked:bg-night peer-checked:text-on-signal peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-night [&>i]:hidden peer-checked:[&>i]:block">
              <i
                aria-hidden="true"
                className="h-[3px] w-2.5 rounded-sm bg-cursor not-italic"
              />
              {o.label}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-[#b42318]">
          {error}
        </p>
      )}
    </fieldset>
  );
}

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
      <label
        htmlFor={id}
        className="mb-2 flex justify-between text-sm font-semibold"
      >
        {label}
        {optional && (
          <span className="font-normal text-graphite">Optional</span>
        )}
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
  const [state, action, pending] = useActionState<ContactState, FormData>(
    submitEnquiry,
    { status: "idle" },
  );
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
      <div
        ref={status}
        tabIndex={-1}
        role="status"
        className="rounded-xl bg-card p-8 outline-none md:p-12"
      >
        <p className="display-soft text-3xl">Enquiry sent</p>
        <p className="mt-4 max-w-[48ch] leading-relaxed text-graphite">
          {state.message}
        </p>
      </div>
    );
  }

  if (state.status === "fallback") {
    return (
      <div
        ref={status}
        tabIndex={-1}
        role="status"
        className="rounded-xl bg-card p-8 outline-none md:p-12"
      >
        <p className="display-soft text-3xl">Send it on WhatsApp</p>
        <p className="mt-4 max-w-[52ch] leading-relaxed text-graphite">
          {state.message}
        </p>
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
    <form action={action} noValidate className="space-y-8">
      {state.status === "error" && state.message && (
        <div
          ref={status}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-[#f3c5c0] bg-[#fdf1ef] px-4 py-3 text-sm text-[#7a1d14] outline-none"
        >
          {state.message}
        </div>
      )}

      {/* Spam protection: humans never see or fill this */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="grid gap-6 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Field id="name" label="Your name" error={e.name}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              defaultValue={v.name}
              className={input}
              {...err("name")}
            />
          </Field>
        </div>
        <div className="sm:col-span-3">
          <Field id="email" label="Business email" error={e.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue={v.email}
              className={input}
              {...err("email")}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="company" label="Company" optional>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              defaultValue={v.company}
              className={input}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="country" label="Country" optional>
            <input
              id="country"
              name="country"
              autoComplete="country-name"
              defaultValue={v.country}
              className={input}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="phone" label="Phone or WhatsApp" optional>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              defaultValue={v.phone}
              className={input}
              placeholder="+971 …"
            />
          </Field>
        </div>
      </div>

      <Choices
        name="service"
        legend="What do you need?"
        defaultValue={v.service ?? preset}
        error={e.service}
        options={[
          ...services.map((s) => ({ value: s.slug, label: s.name })),
          { value: "other", label: "Something else" },
        ]}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Choices
          name="budget"
          legend="Budget"
          optional
          defaultValue={v.budget}
          options={budgets.map((b) => ({ value: b, label: b }))}
        />
        <Choices
          name="timeline"
          legend="Timeline"
          optional
          defaultValue={v.timeline}
          options={timelines.map((t) => ({ value: t, label: t }))}
        />
      </div>

      <Field id="details" label="About the project" error={e.details}>
        <textarea
          id="details"
          name="details"
          rows={5}
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
          className="rounded-full bg-signal px-8 py-4 font-semibold transition-transform active:scale-[0.98] text-on-signal transition-colors hover:bg-signal-hover disabled:cursor-not-allowed disabled:opacity-60"
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
