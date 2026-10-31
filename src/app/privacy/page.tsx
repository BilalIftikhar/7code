import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = meta({
  title: "Privacy policy",
  description:
    "How 7CODE collects, uses and protects the information you share through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" crumb="Privacy" updated="31 October 2026">
      <p>
        This policy explains what information 7CODE collects through this website, why, and what you can ask us to do
        with it. 7CODE is based in {site.location.headquarters}.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Enquiries you send us.</strong> When you use the <Link href="/contact">contact form</Link>, we receive
          your name, email address and project details, plus anything optional you add, such as company, country, phone
          number, budget and timeline.
        </li>
        <li>
          <strong>Messages on WhatsApp or email.</strong> If you contact us directly, we receive what you send and your
          contact details on that service.
        </li>
        <li>
          <strong>Basic technical data.</strong> Our hosting provider records standard server logs, such as IP address,
          browser type and pages requested, to keep the site secure and working.
        </li>
      </ul>

      <h2>How we use it</h2>
      <p>
        We use your information only to reply to your enquiry, discuss and deliver a project you ask us for, and keep the
        website secure. We don&apos;t sell your information, and we don&apos;t add you to marketing lists without your
        permission.
      </p>

      <h2>Analytics and cookies</h2>
      <p>
        This website does not currently use advertising or analytics cookies. If we add analytics in future, we&apos;ll
        update this policy and ask for your consent where the law requires it.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We use trusted service providers to run this website and deliver your enquiry, such as our hosting provider and
        email delivery service. They process data only on our instructions. We may also disclose information if the law
        requires it.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiries for as long as needed to respond and, if we work together, for the length of the project and any
        period required for accounting or legal reasons. You can ask us to delete your enquiry at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to see, correct or delete the information we hold about you. Contact us on WhatsApp at{" "}
        {site.contact.whatsappDisplay}
        {site.contact.email && (
          <>
            {" "}or by email at <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </>
        )}
        .
      </p>

      <h2>Changes</h2>
      <p>We&apos;ll post any changes to this policy on this page and update the date at the top.</p>
    </LegalPage>
  );
}
