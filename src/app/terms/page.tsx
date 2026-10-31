import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = meta({
  title: "Terms and conditions",
  description:
    "The terms that apply to using the 7CODE website and to project enquiries.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms and conditions" crumb="Terms" updated="31 October 2026">
      <p>
        These terms apply to your use of this website. Work we carry out for clients is covered by a separate written
        agreement or proposal for each project, which takes priority over these terms.
      </p>

      <h2>Using this website</h2>
      <p>
        You may browse and share pages from this website for your own information. Please don&apos;t copy our content,
        designs or code for commercial use without our written permission, or try to disrupt or gain unauthorised access to
        the site.
      </p>

      <h2>Information on this site</h2>
      <p>
        We work to keep the information here accurate and current, but it is general information, not a quote or a
        binding offer. Prices, timelines and scope are confirmed only in a written proposal.
      </p>

      <h2>Case studies and trademarks</h2>
      <p>
        Client names, logos and links shown in our work belong to their owners and are shown to describe projects we have
        worked on. Where we contributed to part of a larger product, the case study says so.
      </p>

      <h2>Links to other websites</h2>
      <p>We link to client sites and other services for reference. We aren&apos;t responsible for their content or policies.</p>

      <h2>Liability</h2>
      <p>
        To the extent the law allows, 7CODE is not liable for losses arising from use of this website or reliance on its
        general information. Nothing in these terms limits liability that cannot be limited by law.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms from time to time; the date at the top shows the latest version. Questions? Message us on
        WhatsApp at {site.contact.whatsappDisplay}.
      </p>
    </LegalPage>
  );
}
