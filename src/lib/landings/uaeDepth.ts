import type { Faq, Section } from "./types";

/**
 * Extra depth for the UAE pages, which are the priority market.
 *
 * Each entry is written for its own page: there is no shared boilerplate here,
 * because nine near-identical "local" sections would be exactly the thin,
 * duplicated content these pages are meant to avoid.
 *
 * The e-invoicing dates below come from the Ministry of Finance's phased
 * rollout as published in 2026: a pilot from 1 July 2026, Phase 1 mandatory
 * from 1 January 2027 for businesses with revenue of AED 50 million or more,
 * and Phase 2 from 1 July 2027 for everyone else. It covers B2B and B2G
 * invoices, runs on the PEPPOL five-corner model through accredited service
 * providers, and requires invoice data to be stored inside the UAE.
 * Check current obligations with your tax adviser before relying on them.
 */

type Depth = { sections: Section[]; faqs: Faq[] };

export const uaeDepth: Record<string, Depth> = {
  "/locations/dubai/software-development": {
    sections: [
      {
        type: "text",
        h: "The e-invoicing deadline is a software deadline",
        paras: [
          "The UAE is moving to mandatory electronic invoicing in phases. A pilot runs from July 2026, businesses with revenue of AED 50 million or more must comply from January 2027, and everyone else follows in July 2027. It applies to business-to-business and business-to-government invoices, runs on the PEPPOL five-corner model through an accredited service provider, and requires invoice data to be stored inside the UAE.",
          "In practice that means any system issuing invoices needs to produce structured invoice data, not a PDF, and needs somewhere to send it. If your invoicing currently lives in Excel, in a template in Word, or inside an older system nobody can modify, that is a software project with a date attached to it.",
          "We build invoicing into custom systems so the data is structured from the start and can be passed to an accredited provider, rather than bolted on in a hurry later. We are not tax advisers, so your accountant confirms the treatment and which phase applies to you.",
        ],
      },
      {
        type: "table",
        h: "What Dubai companies usually ask us to build",
        note: "Roughly what each one involves. Every quote is itemised after a discovery call.",
        head: ["System", "What it replaces", "Typical first phase"],
        rows: [
          ["Operations portal", "Shared spreadsheets and WhatsApp groups", "Jobs, status, assignment and a customer view"],
          ["Quotation and invoicing", "Word templates and manual numbering", "Branded quotes, approvals, VAT handling, structured invoice data"],
          ["Customer portal", "Email threads for every request", "Login, documents, requests and history"],
          ["Inventory and dispatch", "A spreadsheet per branch", "Stock by location, movements and reorder alerts"],
          ["Integrations", "Re-typing between systems", "Accounting, payment gateway and WhatsApp connected"],
        ],
      },
      {
        type: "text",
        h: "Working with a remote team from Dubai",
        paras: [
          "Lahore is one hour behind Dubai, so our working day overlaps with yours almost completely. Calls happen in your hours, not at the edges of ours, and a message sent at 9am in Dubai is answered that morning.",
          "The practical difference from a Dubai-based agency is cost and transparency. You get a fixed, itemised quote rather than a day rate, the code sits in your own repository, and hosting and domains are on your accounts from the first day. If you later move the work in-house or to another firm, nothing is locked to us.",
          "What you do not get is someone who can sit in your office on Tuesday. For projects where that matters more than the price, say so early and we will tell you honestly whether we are the right fit.",
        ],
      },
    ],
    faqs: [
      { q: "Will our system be ready for UAE e-invoicing?", a: "We build invoicing so the data is structured and can be sent to an accredited service provider, and we store records in line with the requirement to keep data in the UAE. Which phase applies to you depends on your revenue, so confirm the date with your tax adviser." },
      { q: "Can you work with our existing accounting software?", a: "Usually yes. Zoho Books, QuickBooks, Xero and Tally all have APIs or import routes. We would rather connect to what your accountant already uses than replace it." },
      { q: "Who owns the code?", a: "You do, from the first commit. The repository is on your GitHub account and we are collaborators on it, not owners." },
      { q: "What happens after launch?", a: "A support period is included. After that most clients keep a small monthly retainer for fixes, hosting checks and small changes, which you can stop at any time." },
    ],
  },

  "/locations/dubai/saas-development": {
    sections: [
      {
        type: "table",
        h: "What a first SaaS release usually includes",
        note: "Enough to sign up a paying customer and learn from them. Not everything you will eventually want.",
        head: ["Area", "In the first release", "Usually deferred"],
        rows: [
          ["Accounts", "Sign-up, login, password reset, one team per account", "SSO, granular role permissions"],
          ["Billing", "Monthly and annual plans, card payment, invoices", "Usage-based pricing, dunning flows"],
          ["The product", "The one job the customer is paying you to do", "The adjacent features you can describe but nobody asked for"],
          ["Admin", "A back office to see accounts and fix data", "Full analytics suite"],
          ["Support", "A contact route and basic logging", "In-app chat, help centre"],
        ],
      },
      {
        type: "text",
        h: "Taking payments from GCC customers",
        paras: [
          "Stripe operates in the UAE and handles subscriptions well, which makes it the usual starting point for a Dubai SaaS selling in AED or USD. It is the fastest route to a working billing flow.",
          "It stops being enough when your customers are elsewhere in the Gulf or buying on behalf of larger organisations. Saudi and Egyptian customers often expect local cards or bank transfer, and enterprise buyers across the region frequently want an invoice and a purchase order rather than a card payment at all.",
          "We design billing so manual invoicing sits alongside card subscriptions from the start. Retrofitting that after you win your first large customer is painful, and you will win that customer sooner than you expect.",
        ],
      },
      {
        type: "text",
        h: "Free zone, licensing and what that means for the build",
        paras: [
          "Company setup is not our work, and we will not pretend otherwise. Whether you register in a free zone such as DMCC, Dubai Internet City or IFZA, or on the mainland, is a question for a corporate services firm.",
          "It does reach the build in two places. Your licence determines what you can legally sell and therefore what the product can charge for, and it determines who issues the invoice, which decides how billing and VAT are configured. Tell us the structure early and the billing is set up once, correctly.",
        ],
      },
    ],
    faqs: [
      { q: "How long to a first paying customer?", a: "For a focused MVP, usually three to five months from the first call, depending on how clear the scope is. The biggest delay is almost always deciding what to leave out." },
      { q: "Do you take equity instead of fees?", a: "No. We work on fixed, itemised quotes. It keeps the relationship simple and means we are not competing with your other priorities." },
      { q: "Can you take over a half-built product?", a: "Often yes. We start with a short paid review of the existing code and tell you plainly whether continuing or restarting is cheaper. Sometimes the honest answer is restart, and we would rather say so." },
      { q: "What about hosting in the region?", a: "AWS and Microsoft Azure both have UAE regions, and we can deploy there where customers or sector rules require data to stay in-country. For most early products Vercel plus a managed database is simpler and cheaper." },
    ],
  },

  "/locations/dubai/ai-automation": {
    sections: [
      {
        type: "table",
        h: "Where automation pays for itself fastest",
        note: "Based on the jobs Dubai clients hand us most often. Savings depend entirely on your volumes.",
        head: ["Task", "What automation does", "What stays human"],
        rows: [
          ["First reply to a WhatsApp enquiry", "Answers instantly, in Arabic or English, from your approved information", "Anything about price negotiation or a complaint"],
          ["Qualifying leads", "Asks the three questions your sales team always asks and routes the result", "The actual sales conversation"],
            ["Reading supplier invoices", "Pulls out supplier, date, line items and totals into your system", "Approving payment"],
          ["Daily reporting", "Pulls numbers from several systems into one morning summary", "Deciding what to do about them"],
          ["Following up quotes", "Sends the reminder nobody remembered to send", "The call when they reply"],
        ],
      },
      {
        type: "text",
        h: "Arabic, English, and the gap between them",
        paras: [
          "Most Dubai businesses serve customers in both languages, often in the same thread. Modern language models handle Modern Standard Arabic well and Gulf dialect reasonably, but not perfectly, and the failure mode matters: a confident wrong answer in Arabic is worse than no answer at all.",
          "We handle that by keeping assistants narrow. They answer from your own documented information rather than from general knowledge, they say they do not know when the answer is not in that material, and they hand over to a person with the full conversation attached. The assistant is not trying to be clever, it is trying to be useful between 9pm and 8am.",
        ],
      },
      {
        type: "text",
        h: "Data handling and the UAE Personal Data Protection Law",
        paras: [
          "Federal Decree-Law No. 45 of 2021 sets out how personal data must be handled in the UAE, including the lawful basis for processing it and the rights people have over it. Automation that reads customer messages or documents is processing personal data, so it falls inside that.",
          "Our default is to send a task only the data it needs, keep the full record on infrastructure you control, and log what was sent and when. Where a workload is sensitive enough, we can run smaller models in your own environment instead of calling an external service. We are engineers rather than lawyers, so your legal adviser confirms your obligations.",
        ],
      },
    ],
    faqs: [
      { q: "Will the chatbot make things up?", a: "It answers from your own material and is instructed to say when it does not know. We test it against the questions you actually get before it goes live, and you see the transcripts afterwards." },
      { q: "Can it hand over to a human?", a: "Yes, and it should. Handover with the full conversation history is part of every assistant we build, because the last thing a customer wants is to repeat themselves." },
      { q: "What does it cost to run each month?", a: "Two parts: the AI provider's usage, which for most small businesses is modest, and hosting for the workflows. We estimate both before you commit and show the actual numbers in the first month." },
      { q: "Can you automate WhatsApp properly?", a: "Yes, through the official WhatsApp Business Platform. We do not use unofficial automation tools, which get numbers banned." },
    ],
  },

  "/locations/dubai/social-media-management": {
    sections: [
      {
        type: "text",
        h: "Dubai is a crowded, bilingual, high-production market",
        paras: [
          "Dubai has an unusually high density of businesses competing for the same attention, and the production standard is high: customers scroll past a great deal of polished content before they reach yours. Posting occasionally in that environment is the same as not posting.",
          "The audience is also mixed in a way few markets are. A single café in Jumeirah may serve Emirati, Indian, British, Filipino and Russian customers in one morning. Content that tries to speak to everyone in one post usually speaks to no one, so we plan a mix instead: some posts in English, some in Arabic, and visual content that works without either.",
          "Seasons matter more here than in most markets. Trade slows through the summer, picks up sharply in October, and changes shape entirely during Ramadan, when posting times, tone and offers all need to shift. We plan the calendar around that rather than posting the same rhythm all year.",
        ],
      },
      {
        type: "table",
        h: "What we post for different Dubai businesses",
        head: ["Business type", "What earns attention", "What converts"],
        rows: [
          ["Restaurants and cafés", "Food in motion, short and close", "Location, hours and a booking link in Stories"],
          ["Real estate", "Property walk-throughs and honest area guides", "Listing links and WhatsApp enquiries"],
          ["Clinics and salons", "Before and after, staff faces, process explained", "Booking link and clear pricing"],
          ["Retail and eCommerce", "New arrivals and product detail", "Shoppable posts and offer Stories"],
          ["Professional services", "Short explainers answering client questions", "LinkedIn posts and a contact route"],
        ],
      },
      {
        type: "text",
        h: "What we need from you, and what we don't",
        paras: [
          "We need about an hour of your time a month: a short conversation about what is coming up, and approval of the content in one batch. For businesses with a physical location we also need raw footage, which is usually a phone and a fifteen-minute walk around with a brief we send in advance.",
          "We do not need you to think of post ideas, write captions, remember to publish, or answer comments in the evening. That is the job you are paying us to take away.",
        ],
      },
    ],
    faqs: [
      { q: "Can you post in Arabic?", a: "Yes. Arabic captions are written or reviewed by a native speaker rather than machine-translated, because translated marketing copy reads as translated and customers notice." },
      { q: "Do you handle Ramadan and seasonal campaigns?", a: "Yes, and they are planned a month ahead. Posting times, tone and offers all change during Ramadan, and a calendar built in January will not survive it." },
      { q: "Can you film in Dubai?", a: "Our team is in Lahore, so for a dedicated shoot we would work with a local videographer you or we arrange. Most clients are better served by phone footage filmed by their own team to our brief, which we then edit." },
      { q: "How quickly do you reply to comments and DMs?", a: "Within working hours on working days. Sales enquiries are passed to you the same day with the full conversation rather than being answered on your behalf." },
    ],
  },

  "/locations/dubai/crm-development": {
    sections: [
      {
        type: "text",
        h: "Why Dubai businesses outgrow off-the-shelf CRMs",
        paras: [
          "Most CRMs are built around a sales process that starts with an email address and moves through neat stages. A great deal of Dubai business does not work that way. The first contact is a WhatsApp message, often from a number that is not in any system, sometimes forwarded from a colleague, frequently in a mix of two languages.",
          "By the time that lead is typed into a CRM, if it ever is, the useful context is gone. The salesperson remembers the conversation; the system shows a name and a phone number. Reporting built on that data tells you very little.",
          "A custom CRM fixes it at the source: the WhatsApp conversation is the record, not a summary of it. That single change usually does more for pipeline visibility than any amount of process training.",
        ],
      },
      {
        type: "table",
        h: "Custom CRM against the usual alternatives",
        note: "An honest comparison. For many businesses the right answer is a subscription, not a build.",
        head: ["", "Off-the-shelf CRM", "Custom CRM"],
        rows: [
          ["Cost shape", "Per user, every month, forever", "Build cost once, then hosting and support"],
          ["Setup time", "Days to weeks", "Weeks to months"],
          ["Fits your process", "You adapt to the tool", "The tool is shaped to how you sell"],
          ["WhatsApp as the record", "Usually an add-on with limits", "Built in from the start"],
          ["Arabic interface", "Varies by vendor", "Yes, with right-to-left layout"],
          ["Best when", "Your process is standard and your team is small", "Your process is the business, or per-user fees have outgrown a build"],
        ],
      },
      {
        type: "text",
        h: "Quotations are usually the real reason",
        paras: [
          "Most CRM projects we are asked about in Dubai are not really about pipelines. They are about quotations: how long they take to produce, how often the pricing is wrong, and how nobody can tell which ones are still live.",
          "So that is where we usually start. Quote templates with your branding, pricing rules that stop the common mistakes, approval for anything outside them, version history, and a status that updates when the customer opens it. Pipeline reporting then comes almost free, because the quotes carry the data.",
        ],
      },
    ],
    faqs: [
      { q: "Can it log WhatsApp conversations automatically?", a: "Yes, through the official WhatsApp Business Platform. Messages attach to the right customer record, so the history survives a salesperson leaving." },
      { q: "Should we just use HubSpot or Zoho?", a: "Often, yes, and we will say so. A build makes sense when your process is genuinely unusual, when per-user fees have grown past the cost of owning something, or when WhatsApp and quotations are the core of how you sell." },
      { q: "Can it generate VAT-compliant invoices?", a: "Yes, with VAT handling and structured invoice data that can be passed to an accredited e-invoicing provider ahead of the UAE's phased deadlines. Your accountant confirms the treatment." },
      { q: "How long does a first version take?", a: "Usually six to twelve weeks for a working first version covering leads, pipeline and quotations, then additions in phases once your team is using it daily." },
    ],
  },

  "/locations/abu-dhabi/software-development": {
    sections: [
      {
        type: "text",
        h: "Abu Dhabi runs on contracts and compliance",
        paras: [
          "Abu Dhabi's economy leans towards energy, government, construction, logistics and healthcare, and a great deal of the private-sector work around them is contract-driven. That shapes the software differently from Dubai's trading and retail businesses.",
          "The systems companies ask us for here tend to be about proving things: which pre-qualification documents are current, which certificates expire next month, who approved a variation, what was delivered against what the contract said. The reporting matters as much as the workflow, because somebody downstream will audit it.",
          "We build for that with proper audit trails, document version history, expiry tracking with reminders, and exports in whatever format the client's own reporting demands. It is less glamorous than a customer-facing app and considerably more valuable to the business.",
        ],
      },
      {
        type: "table",
        h: "Systems we're asked for in Abu Dhabi",
        head: ["System", "The problem it solves", "Who asks for it"],
        rows: [
          ["Document and certificate tracking", "Expired documents found at the worst moment", "Contractors, equipment hire, logistics"],
          ["Job and dispatch management", "Phone-and-spreadsheet scheduling", "Transport, equipment, field services"],
          ["Approval workflows", "Variations approved in WhatsApp and lost", "Construction and projects"],
          ["Supplier and subcontractor portals", "Email threads as a filing system", "Main contractors"],
          ["Compliance reporting", "A week of manual work each month", "Anyone reporting to a larger client"],
        ],
      },
      {
        type: "text",
        h: "Mainland, free zone and where data sits",
        paras: [
          "Abu Dhabi has its own free zones, including KIZAD and the financial centre at ADGM, and some sectors carry data-residency expectations that a generic hosting setup will not satisfy. Both AWS and Microsoft Azure operate UAE regions, so hosting inside the country is straightforward when it is required.",
          "We ask about this at the quoting stage rather than after the build, because moving a live system between regions is far more expensive than choosing correctly at the start. If you are not sure what applies to you, your compliance adviser will know, and we will build to whatever they say.",
        ],
      },
    ],
    faqs: [
      { q: "Can the data be hosted inside the UAE?", a: "Yes. AWS and Azure both have UAE regions, and we deploy there when your sector or your client requires it. It costs a little more than a general-purpose host, so we price it in from the start." },
      { q: "Do you work with Abu Dhabi government suppliers?", a: "We work with private companies that supply them, which usually means meeting the documentation and audit standards their clients impose. We have not tendered directly for government work." },
      { q: "Can you integrate with our existing ERP?", a: "Usually. If it has an API or a database we can read, we can connect to it rather than replacing it. Replacing a working ERP is rarely the cheapest answer." },
      { q: "Is Abu Dhabi work priced differently from Dubai?", a: "No. The quote depends on the scope, not the emirate." },
    ],
  },

  "/locations/abu-dhabi/ai-automation": {
    sections: [
      {
        type: "text",
        h: "Automation where the paperwork is the work",
        paras: [
          "In Abu Dhabi's contracting, logistics and equipment businesses, an enormous share of staff time goes on documents: reading them, checking them, chasing them, and re-typing what they contain into another system. That is precisely the work current AI tools are good at, and it is where the return is easiest to see.",
          "A single example makes the point. A transport company receiving fifty supplier invoices a week spends several hours re-keying them. Extraction turns that into a review queue where a person confirms what was read and corrects the exceptions. The time does not disappear entirely, but most of it does, and the error rate falls because people check rather than copy.",
        ],
      },
      {
        type: "table",
        h: "Document work worth automating first",
        head: ["Document", "What gets extracted", "Who checks it"],
        rows: [
          ["Supplier invoices", "Supplier, dates, line items, VAT, totals", "Accounts, before payment"],
          ["Delivery notes", "Reference, items, quantities, signature present", "Operations, on exception only"],
          ["Certificates and permits", "Type, holder, issue and expiry dates", "Nobody, until an expiry alert fires"],
          ["Purchase orders", "Line items matched against the quote", "Sales, on mismatch"],
          ["Timesheets", "Hours by person, job and date", "Supervisor, weekly"],
        ],
      },
      {
        type: "text",
        h: "Start with one process, not a strategy",
        paras: [
          "The automation projects that fail are the ones that begin with a plan to transform everything. The ones that work begin with a single irritating process, prove the saving in a month, and expand from there because the team asks for it.",
          "So we scope the first piece deliberately small: one document type, or one enquiry route, with a human checkpoint and an honest measurement of time saved. If it does not pay for itself, you have spent very little finding that out.",
        ],
      },
    ],
    faqs: [
      { q: "How accurate is document extraction?", a: "On clean, consistent documents it is high; on poor scans and handwriting it is not. That is why we build a review queue rather than letting extraction write straight into your systems, and why we measure accuracy on your actual documents before you commit." },
      { q: "Can it read Arabic documents?", a: "Yes, including Arabic invoices and bilingual forms, though accuracy varies with scan quality. We test on your own documents first." },
      { q: "Where does our data go?", a: "Only what a task needs is sent to the AI provider, the full record stays on infrastructure you control, and everything sent is logged. For sensitive workloads we can run models inside your own environment instead." },
      { q: "What is a realistic first project?", a: "One document type or one enquiry route, live in four to six weeks, with the time saving measured rather than claimed." },
    ],
  },

  "/locations/abu-dhabi/social-media-management": {
    sections: [
      {
        type: "text",
        h: "Abu Dhabi is a different audience from Dubai",
        paras: [
          "Abu Dhabi's audience skews more towards Emirati nationals, government and corporate employees, and long-settled residents than Dubai's. It is a smaller, steadier market where reputation travels by word of mouth and where businesses are judged over years rather than seasons.",
          "That changes what works. Loud, trend-chasing content lands less well than content that shows competence, longevity and proper service. Arabic matters more than it does across much of Dubai. And LinkedIn carries real weight here, because so much of the economy is corporate and government-adjacent.",
          "For B2B companies in Abu Dhabi we often recommend putting the budget into LinkedIn and a well-maintained Google Business Profile before Instagram, which is the opposite of our usual advice for Dubai. The right answer follows your customers, not the platform rankings.",
        ],
      },
      {
        type: "list",
        h: "What we see working in Abu Dhabi",
        items: [
          "Arabic-first or genuinely bilingual content, not translated captions",
          "Proof of work: completed projects, certifications, real sites and real teams",
          "LinkedIn content from named people rather than the company page alone",
          "Google Business Profile kept current, since a lot of discovery starts in Maps",
          "Consistency over volume, because reputation here is built slowly",
          "Content that respects local norms in imagery and tone without being stiff",
        ],
      },
      {
        type: "text",
        h: "A realistic first ninety days",
        paras: [
          "Month one is foundations: the profile rewritten and completed, a content system built, and the first month published. You will see the page look like a serious business before you see any change in enquiries.",
          "Month two is calibration. Some formats reach further than others, usually not the ones anybody predicted, and the calendar shifts towards what the numbers show. Month three is when a pattern becomes visible and we can say something useful about what social media is actually worth to you.",
          "Anyone promising enquiries in week two is selling you something. The honest version is that this compounds, and the first quarter is the price of entry.",
        ],
      },
    ],
    faqs: [
      { q: "Should we be on LinkedIn or Instagram?", a: "In Abu Dhabi, if you sell to businesses or to government suppliers, usually LinkedIn first. If you sell to consumers, Instagram. The free profile review will tell you which, based on your customers rather than a general rule." },
      { q: "Do you write in Arabic?", a: "Yes, written or reviewed by a native speaker. For an Abu Dhabi audience this matters more than it does in parts of Dubai." },
      { q: "Can you manage our Google Business Profile too?", a: "Yes. For Abu Dhabi businesses it often brings more enquiries than social media does, so we usually suggest fixing it first. It sits in our local SEO work." },
      { q: "What if we have nothing to post?", a: "Most businesses believe this and most are wrong. Your completed work, your team, the questions customers ask and the things you know that they do not are usually several months of content. Finding it is part of the first month." },
    ],
  },

  "/locations/sharjah/software-development": {
    sections: [
      {
        type: "text",
        h: "Sharjah's economy is built differently",
        paras: [
          "Sharjah is the UAE's manufacturing and industrial centre in a way Dubai and Abu Dhabi are not. Factories, warehousing, building materials, furniture, food production and the trading companies around them make up a large part of the business base, alongside education and a growing creative sector.",
          "Those businesses tend to be older, family-run, and operating on margins that do not tolerate waste. They are also, in our experience, running on systems that have been patched for fifteen years: an accounting package from the 2000s, a spreadsheet nobody fully understands, and a great deal of institutional knowledge held by one person.",
          "The software that helps is rarely glamorous. Production tracking, stock across more than one location, delivery scheduling, and getting the accounting system to talk to the warehouse. It pays back quickly because the waste it removes is measurable.",
        ],
      },
      {
        type: "table",
        h: "Common first projects in Sharjah",
        head: ["Project", "What usually triggers it", "Typical payback"],
        rows: [
          ["Stock across multiple locations", "Selling something that is not actually there", "Fewer stockouts and less dead inventory"],
          ["Production tracking", "Nobody can answer where an order is", "Fewer chase calls, clearer delivery dates"],
          ["Delivery scheduling", "A whiteboard and three phone calls", "More deliveries per vehicle per day"],
          ["Quote and order entry", "Re-typing the same order three times", "Fewer errors, faster turnaround"],
          ["Accounting integration", "Month-end taking a week", "Days back every month"],
        ],
      },
      {
        type: "text",
        h: "Cost, and being honest about it",
        paras: [
          "Sharjah businesses are more price-sensitive than their Dubai counterparts, and quite reasonably so. We quote fixed and itemised, and we are willing to say when a project is not worth doing.",
          "Often the right first step is much smaller than what was originally described. If a spreadsheet plus a single well-built form solves eighty per cent of the problem for a fraction of the cost, we will propose that, and we will tell you what the remaining twenty per cent would cost if you decide later that you want it.",
          "We would rather build something small that you actually use than something large that becomes another system nobody opens.",
        ],
      },
    ],
    faqs: [
      { q: "Is custom software affordable for a small factory?", a: "It depends entirely on scope. A focused first system solving one expensive problem is often far cheaper than people expect, and we quote it fixed so there is no open-ended bill. We will also tell you when the honest answer is an off-the-shelf package." },
      { q: "Can it work with our existing accounting software?", a: "Usually. Tally, Zoho Books, QuickBooks and most of the packages common in Sharjah can be connected or imported from. We prefer to connect rather than replace." },
      { q: "Our staff aren't very technical. Will they use it?", a: "They will if it is simpler than what they do now. We design for the person doing the job, test with them before launch, and train in their own language where needed. A system people avoid is a failed project, regardless of how well it is built." },
      { q: "Do you work with Hamriyah and SAIF Zone companies?", a: "Yes, as with mainland Sharjah companies. The free zone affects your licensing and invoicing setup rather than how the software is built." },
    ],
  },
};
