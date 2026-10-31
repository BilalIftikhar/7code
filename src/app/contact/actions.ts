"use server";

import { services } from "@/lib/services";

export type ContactState = {
  status: "idle" | "sent" | "fallback" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
  whatsappText?: string;
};

type Field = "name" | "email" | "company" | "country" | "phone" | "service" | "budget" | "timeline" | "details";

const MIN_FILL_MS = 3000;

const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();

/**
 * Validates the enquiry and emails it via Resend when configured
 * (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).
 * Without email configured it returns a prefilled WhatsApp hand-off instead of
 * pretending the message was delivered.
 */
export async function submitEnquiry(_prev: ContactState, fd: FormData): Promise<ContactState> {
  const values: Partial<Record<Field, string>> = {
    name: str(fd, "name"),
    email: str(fd, "email"),
    company: str(fd, "company"),
    country: str(fd, "country"),
    phone: str(fd, "phone"),
    service: str(fd, "service"),
    budget: str(fd, "budget"),
    timeline: str(fd, "timeline"),
    details: str(fd, "details"),
  };

  // Spam checks: hidden honeypot field and a minimum time on the form
  const startedAt = Number(fd.get("startedAt") ?? 0);
  if (str(fd, "website") || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "error", message: "Your message couldn't be sent. Please try again in a few seconds." , values };
  }

  const errors: ContactState["errors"] = {};
  if (values.name!.length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email!)) errors.email = "Enter an email address like name@company.com.";
  if (values.details!.length < 20) errors.details = "Tell us a little more about the project, at least a sentence or two.";
  if (values.service && !services.some((s) => s.slug === values.service) && values.service !== "other")
    errors.service = "Choose a service from the list.";
  for (const [k, v] of Object.entries(values)) if (v && v.length > 4000) errors[k as Field] = "This is too long.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const serviceName = services.find((s) => s.slug === values.service)?.name ?? (values.service ? "Something else" : "Not specified");
  const lines = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company && `Company: ${values.company}`,
    values.country && `Country: ${values.country}`,
    values.phone && `Phone / WhatsApp: ${values.phone}`,
    `Service: ${serviceName}`,
    values.budget && `Budget: ${values.budget}`,
    values.timeline && `Timeline: ${values.timeline}`,
    "",
    values.details,
  ].filter((l): l is string => typeof l === "string");
  const text = lines.join("\n");

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!key || !to || !from) {
    return {
      status: "fallback",
      message: "Online sending isn't switched on yet. Send these details to us on WhatsApp instead — they're filled in for you.",
      whatsappText: `Hi 7CODE, I'd like to start a project.\n\n${text}`,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `New enquiry: ${serviceName} — ${values.name}${values.company ? ` (${values.company})` : ""}`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}`);
  } catch (err) {
    console.error("Contact form delivery failed", err);
    return {
      status: "fallback",
      message: "We couldn't send your message by email just now. Send it on WhatsApp instead — the details are filled in for you.",
      whatsappText: `Hi 7CODE, I'd like to start a project.\n\n${text}`,
    };
  }

  return { status: "sent", message: "Thanks — your enquiry has been sent. We'll read it and get back to you by email." };
}
