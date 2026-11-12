import type { Landing } from "./types";

const C = [
  { name: "Services", href: "/services" },
  { name: "Social media management", href: "/services/social-media" },
];
const common = { kind: "social" as const, crumbs: C, contact: { service: "social-media" } };

const process = {
  type: "steps" as const,
  h: "How a month works",
  items: [
    { name: "Plan", body: "A monthly content calendar agreed with you, built around your offers, seasons and audience." },
    { name: "Create", body: "Designs, Reels and captions produced in your brand style, sent for approval in one batch." },
    { name: "Publish and engage", body: "Posts scheduled at the right times, comments and messages answered or passed to you." },
    { name: "Report", body: "A clear monthly report: what was posted, what worked and what we'll change next month." },
  ],
};

export const social: Landing[] = [
  {
    ...common,
    path: "/social-media-management/instagram",
    name: "Instagram management",
    line: "Planned, designed and published Instagram content: posts, carousels, Reels and Stories.",
    seoTitle: "Instagram Management Services | Posts, Reels & Growth",
    metaDescription:
      "Instagram management for businesses in the UAE, Oman and Pakistan: content calendar, post and carousel design, Reels, Stories, captions, hashtags, community replies and monthly reporting.",
    h1: "Instagram management",
    serviceType: "Instagram management",
    intro: [
      "Instagram is often the first place a customer checks before they message you. A grid that's active, consistent and clearly on-brand tells them you're open for business and worth trusting.",
      "We run Instagram accounts end to end: strategy, content, Reels, captions, publishing, replies and reporting, so you don't have to think about what to post today.",
    ],
    answer: {
      q: "What does Instagram management include?",
      a: "Instagram management usually includes a content strategy and calendar, design of posts and carousels, Reels and Stories production, caption and hashtag writing, scheduling, replying to comments and messages, and monthly performance reporting.",
    },
    sections: [
      {
        type: "cards",
        h: "What we handle",
        items: [
          { name: "Content calendar", body: "A month of posts planned around your products, offers and audience." },
          { name: "Post and carousel design", body: "On-brand designs that stop the scroll and explain one idea clearly." },
          { name: "Reels", body: "Short videos edited with hooks, captions and music, built for the first two seconds." },
          { name: "Stories", body: "Daily or weekly Stories with polls, questions and links to drive replies." },
          { name: "Captions and hashtags", body: "Captions in your brand voice with a clear call to action and relevant hashtags." },
          { name: "Community management", body: "Comments and DMs answered quickly, with sales enquiries passed to you." },
        ],
      },
      process,
      {
        type: "list",
        h: "Good fit for",
        items: [
          "Restaurants, cafés and food brands",
          "Fashion, beauty and lifestyle brands",
          "Real estate agents and developers",
          "Clinics, salons and wellness businesses",
          "Coaches, consultants and personal brands",
          "B2B companies building trust with visual proof",
        ],
      },
      {
        type: "text",
        h: "What we won't do",
        paras: [
          "We don't buy followers, use engagement pods or promise viral results. Those tactics damage reach and trust. We focus on consistent, useful content and on turning profile visits into enquiries.",
        ],
      },
    ],
    tools: ["Instagram", "Meta Business Suite", "Figma", "Adobe Premiere Pro", "CapCut", "Canva"],
    faqs: [
      { q: "How many posts per month?", a: "It depends on your package and goals. Most businesses do well with a steady weekly rhythm of posts and Reels plus regular Stories. Consistency matters more than volume." },
      { q: "Do I need to approve everything?", a: "We send each month's content for approval in one batch, so you review it once rather than every day." },
      { q: "Will you reply to DMs?", a: "Yes, we answer general questions and pass sales enquiries to your team with the details." },
      { q: "Can you run Instagram ads too?", a: "Yes, through our performance marketing service, so organic content and ads work together." },
    ],
    related: ["/social-media-management/reels-production", "/social-media-management/content-creation", "/social-media-management/facebook", "/services/performance-marketing"],
  },
  {
    ...common,
    path: "/social-media-management/facebook",
    name: "Facebook management",
    line: "Facebook pages that look active, answer customers and support local trust.",
    seoTitle: "Facebook Page Management Services for Businesses",
    metaDescription:
      "Facebook page management for local and growing businesses: regular posts, video, community replies, reviews, events and reporting, so customers find an active, trustworthy page.",
    h1: "Facebook page management",
    serviceType: "Facebook management",
    intro: [
      "For many local customers, Facebook is still where they check opening hours, reviews and whether a business is active. A quiet page with posts from last year quietly loses you calls.",
      "We keep your Facebook page active and useful: regular posts and video, quick replies, review management and content shared alongside your Instagram for one consistent presence.",
    ],
    answer: {
      q: "Is Facebook still useful for businesses?",
      a: "Yes, especially for local businesses and older audiences. Customers use Facebook pages to check reviews, opening hours and recent activity, and Facebook remains a major channel for community groups and paid advertising.",
    },
    sections: [
      {
        type: "cards",
        h: "What's included",
        items: [
          { name: "Regular posts", body: "Offers, updates, behind-the-scenes and helpful tips on a set schedule." },
          { name: "Video and Reels", body: "Short videos repurposed and adapted for Facebook audiences." },
          { name: "Page optimisation", body: "Complete page info, buttons, services and contact details." },
          { name: "Reviews and messages", body: "Replies to reviews and Messenger enquiries, with leads passed to you." },
          { name: "Events and promotions", body: "Event pages and offer posts for openings, launches and seasonal sales." },
          { name: "Reporting", body: "Reach, engagement and messages tracked monthly." },
        ],
      },
      process,
      {
        type: "list",
        h: "Who benefits most",
        items: [
          "Restaurants, retail and local services",
          "Clinics, schools and community organisations",
          "Real estate and property services",
          "Businesses targeting families and older customers",
        ],
      },
    ],
    tools: ["Facebook", "Meta Business Suite", "Messenger", "Canva", "Adobe Premiere Pro"],
    faqs: [
      { q: "Can you manage Facebook and Instagram together?", a: "Yes. Most clients have us manage both through Meta Business Suite, with content adapted for each platform." },
      { q: "Do you handle negative reviews?", a: "We draft professional responses for your approval and flag issues that need your attention." },
      { q: "Do you post in groups?", a: "We can share content in relevant groups where the rules allow business posts." },
    ],
    related: ["/social-media-management/instagram", "/social-media-management/content-creation", "/services/performance-marketing", "/social-media-management/social-media-strategy"],
  },
  {
    ...common,
    path: "/social-media-management/linkedin",
    name: "LinkedIn management",
    line: "Company page and founder content that builds B2B trust and enquiries.",
    seoTitle: "LinkedIn Management Services | Company Pages & Founders",
    metaDescription:
      "LinkedIn management for B2B companies and founders: company page content, founder thought-leadership posts, carousels, video and engagement that build trust with decision-makers.",
    h1: "LinkedIn management",
    serviceType: "LinkedIn management",
    intro: [
      "On LinkedIn, buyers judge a B2B company by two things: its company page and the people behind it. Regular, useful posts from both show expertise long before a sales call.",
      "We manage LinkedIn company pages and write and design content for founders and leaders, in their voice, based on their real experience.",
    ],
    answer: {
      q: "Why is LinkedIn important for B2B companies?",
      a: "LinkedIn is where business decision-makers research companies and people. Consistent, expert content on a company page and from its leaders builds credibility, keeps the business top of mind and creates inbound enquiries.",
    },
    sections: [
      {
        type: "cards",
        h: "What we do",
        items: [
          { name: "Company page content", body: "Case studies, insights, team news and service posts on a regular schedule." },
          { name: "Founder ghostwriting", body: "Posts written from interviews with you, in your voice, about what you actually know." },
          { name: "Carousels and documents", body: "Designed PDF carousels that explain ideas and earn saves." },
          { name: "Video", body: "Short clips and edited talking-head videos for the feed." },
          { name: "Page optimisation", body: "About, services, banner and featured sections set up properly." },
          { name: "Engagement", body: "Thoughtful comments on relevant posts to grow reach in your industry." },
        ],
      },
      process,
      {
        type: "list",
        h: "Built for",
        items: [
          "Software, SaaS and technology companies",
          "Consultancies and professional services",
          "Logistics, construction and industrial firms",
          "Founders building a personal brand to win clients",
        ],
      },
    ],
    tools: ["LinkedIn", "LinkedIn Page analytics", "Figma", "Canva", "Adobe Premiere Pro"],
    faqs: [
      { q: "Do you post from my personal profile?", a: "We write and design the posts; you or we publish them depending on your preference. We never post in your name without your approval." },
      { q: "How do you know what to write?", a: "We interview you regularly to capture your experience and opinions, so the content is genuinely yours." },
      { q: "Can LinkedIn bring in leads?", a: "Yes, over time. Consistent posting builds trust that turns into messages and referrals, especially when combined with a clear offer and follow-up." },
    ],
    related: ["/social-media-management/content-creation", "/social-media-management/social-media-strategy", "/services/branding-ui-ux", "/social-media-management/instagram"],
  },
  {
    ...common,
    path: "/social-media-management/tiktok",
    name: "TikTok management",
    line: "Native, trend-aware short videos that introduce your brand to new audiences.",
    seoTitle: "TikTok Management Services | Short-Form Video for Brands",
    metaDescription:
      "TikTok management for brands: content ideas, filming guidance, editing, captions, posting and community replies, built for TikTok's style and audience rather than recycled ads.",
    h1: "TikTok management",
    serviceType: "TikTok management",
    intro: [
      "TikTok rewards content that feels native: quick hooks, real people and a clear point. It's one of the best places to reach new audiences, but polished adverts usually fall flat.",
      "We plan TikTok content around trends and your expertise, guide filming or edit footage you provide, and publish and engage consistently.",
    ],
    answer: {
      q: "Is TikTok good for business?",
      a: "TikTok can be very effective for reaching new audiences, especially for consumer brands, food, fashion, beauty and education. It works best with authentic, entertaining or useful short videos rather than traditional ads.",
    },
    sections: [
      {
        type: "cards",
        h: "What's included",
        items: [
          { name: "Content ideas", body: "Monthly ideas list based on trends, questions and your products." },
          { name: "Filming guidance", body: "Simple shot lists so your team can film on a phone in minutes." },
          { name: "Editing", body: "Fast cuts, captions, sounds and hooks edited for TikTok." },
          { name: "Posting", body: "Consistent posting with captions and relevant hashtags." },
          { name: "Engagement", body: "Comment replies, including video replies that often reach more people." },
          { name: "Reporting", body: "Views, watch time and profile visits tracked monthly." },
        ],
      },
      process,
      {
        type: "list",
        h: "Formats that work",
        items: ["Behind the scenes", "Before-and-after", "Quick tips and how-tos", "Answering customer questions", "Day in the life", "Product demos with a twist"],
      },
    ],
    tools: ["TikTok", "TikTok Business Center", "CapCut", "Adobe Premiere Pro"],
    faqs: [
      { q: "Do we have to appear on camera?", a: "Not necessarily, but faces build trust. We can plan formats with hands-only, voiceover or product-focused footage." },
      { q: "Can you reuse our Instagram Reels?", a: "Some can be adapted, but we edit them for TikTok's style rather than posting identical videos." },
      { q: "How quickly will we grow?", a: "Growth varies a lot by niche and content. We focus on consistent posting and improving based on what the data shows, without promising viral results." },
    ],
    related: ["/social-media-management/reels-production", "/social-media-management/instagram", "/social-media-management/content-creation", "/social-media-management/social-media-strategy"],
  },
  {
    ...common,
    path: "/social-media-management/content-creation",
    name: "Social media content creation",
    line: "Designs, carousels, videos and copy produced in your brand style.",
    seoTitle: "Social Media Content Creation | Design, Video & Copy",
    metaDescription:
      "Social media content creation for brands: post and carousel design, short-form video editing, copywriting and brand templates, produced monthly for Instagram, Facebook, LinkedIn and TikTok.",
    h1: "Social media content creation",
    serviceType: "Social media content creation",
    intro: [
      "Some businesses have someone to post but no one to create. Our content creation service produces the designs, videos and captions each month, in your brand style, ready for your team to publish.",
      "Everything is made from your products, your expertise and your customers' real questions, not generic stock content.",
    ],
    answer: {
      q: "What is social media content creation?",
      a: "Social media content creation is the planning and production of posts for social platforms, including graphic design, carousels, photography direction, short-form video editing and caption writing, in a consistent brand style.",
    },
    sections: [
      {
        type: "cards",
        h: "What we create",
        items: [
          { name: "Branded templates", body: "A set of on-brand templates so every post looks like it belongs to you." },
          { name: "Single posts", body: "Offers, announcements, quotes and tips designed for each platform." },
          { name: "Carousels", body: "Multi-slide posts that teach, compare or tell a story, and get saved." },
          { name: "Short-form video", body: "Reels, TikToks and Shorts edited from your footage or motion graphics." },
          { name: "Copywriting", body: "Captions, hooks and calls to action in your brand voice." },
          { name: "Story sets", body: "Stories with polls, questions and links for weekly engagement." },
        ],
      },
      process,
      {
        type: "list",
        h: "Our content principles",
        items: [
          "One clear idea per post",
          "Mobile-first: readable on a small screen in two seconds",
          "Real proof over stock imagery",
          "A clear next step in every caption",
          "Consistent fonts, colours and layout",
        ],
      },
    ],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "After Effects", "Canva"],
    faqs: [
      { q: "Can you create content without us filming anything?", a: "Yes, using design, motion graphics and your existing photos. Real footage from your business usually performs better, so we'll suggest easy ways to capture it." },
      { q: "Do you use AI-generated images?", a: "Only where appropriate and clearly not misleading. We never present AI images as real products, places or customers." },
      { q: "Can we get editable files?", a: "Yes, we can provide templates and source files so your team can make quick edits." },
    ],
    related: ["/social-media-management/reels-production", "/services/branding-ui-ux", "/social-media-management/instagram", "/social-media-management/linkedin"],
  },
  {
    ...common,
    path: "/social-media-management/reels-production",
    name: "Reels production & video editing",
    line: "Short-form video edited for Reels, TikTok and Shorts, hook first.",
    seoTitle: "Reels Production & Video Editing for Social Media",
    metaDescription:
      "Reels production and short-form video editing for brands: hooks, captions, music, motion graphics and platform-ready exports for Instagram Reels, TikTok, YouTube Shorts and LinkedIn.",
    h1: "Reels production and video editing",
    serviceType: "Video editing",
    intro: [
      "Short-form video is the main way new people discover brands on social media. The first two seconds decide whether anyone watches the rest, so editing matters as much as filming.",
      "We edit Reels, TikToks and Shorts from your footage, or produce motion-graphic videos when there's nothing to film, with captions, music and the right format for every platform.",
    ],
    answer: {
      q: "What makes a good Reel?",
      a: "A good Reel hooks viewers in the first one to two seconds, delivers one clear idea, uses on-screen captions so it works without sound, keeps a fast pace and ends with a clear next step for the viewer.",
    },
    sections: [
      {
        type: "cards",
        h: "Video services",
        items: [
          { name: "Reel editing", body: "Your raw clips cut into tight, captioned Reels with music and hooks." },
          { name: "Motion graphics", body: "Animated explainers and product videos without filming." },
          { name: "Talking-head edits", body: "Founder and expert videos with captions, B-roll and graphics." },
          { name: "Product videos", body: "Short demos and launches for eCommerce and SaaS." },
          { name: "Repurposing", body: "Long videos and webinars cut into many short clips." },
          { name: "Platform exports", body: "9:16, 4:5 and 1:1 versions, each with the right cover." },
        ],
      },
      {
        type: "list",
        h: "Our editing checklist",
        items: [
          "Hook in the first two seconds",
          "Burned-in captions for silent viewing",
          "Licensed or platform-library music only",
          "Brand fonts, colours and end card",
          "Text kept inside each platform's safe zone",
          "A clear call to action",
        ],
      },
      process,
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve", "Figma"],
    faqs: [
      { q: "How should we send footage?", a: "Through a shared folder. We give you a simple guide on filming vertically, lighting and sound." },
      { q: "Can you add music?", a: "Yes, using licensed tracks or each platform's own music library, so your video isn't muted or blocked." },
      { q: "How many revisions do we get?", a: "Each video includes a revision round. We keep changes quick by agreeing the style at the start." },
    ],
    related: ["/social-media-management/tiktok", "/social-media-management/instagram", "/social-media-management/content-creation", "/services/performance-marketing"],
  },
  {
    ...common,
    path: "/social-media-management/social-media-strategy",
    name: "Social media strategy",
    line: "A clear plan for which platforms, what content and how social brings in business.",
    seoTitle: "Social Media Strategy Services | Plan That Drives Enquiries",
    metaDescription:
      "Social media strategy for businesses: audience and competitor research, platform choice, content pillars, posting plan, lead capture and KPIs, so social media supports real sales goals.",
    h1: "Social media strategy",
    serviceType: "Social media strategy",
    intro: [
      "Posting without a plan wastes time. A social media strategy decides which platforms deserve your effort, what you'll talk about, how often, and how a follower becomes an enquiry.",
      "We build practical strategies you can run yourself, or that we then execute through our management service.",
    ],
    answer: {
      q: "What should a social media strategy include?",
      a: "A social media strategy should define goals, target audiences, chosen platforms, content pillars and formats, a posting schedule, how leads are captured and followed up, and the metrics used to judge success.",
    },
    sections: [
      {
        type: "steps",
        h: "What we deliver",
        items: [
          { name: "Research", body: "Your audience, competitors and current accounts reviewed." },
          { name: "Positioning", body: "What you want to be known for and the tone to say it in." },
          { name: "Content plan", body: "Content pillars, formats and a 90-day calendar." },
          { name: "Lead path", body: "How viewers become enquiries: DMs, links, offers and follow-up." },
        ],
      },
      {
        type: "list",
        h: "Questions the strategy answers",
        items: [
          "Which platforms our customers actually use",
          "What to post every week, and why",
          "How much to post without burning out",
          "How to turn followers into enquiries",
          "Which numbers to track and which to ignore",
          "When to use paid ads alongside organic content",
        ],
      },
      {
        type: "cards",
        h: "Formats",
        items: [
          { name: "Strategy document", body: "A clear, written plan with examples you can hand to anyone." },
          { name: "Workshop", body: "A working session with your team to agree the plan together." },
          { name: "Strategy + management", body: "We build the plan and run it month to month." },
        ],
      },
    ],
    tools: ["Meta Business Suite", "LinkedIn analytics", "TikTok analytics", "Google Analytics 4", "Notion"],
    faqs: [
      { q: "Do we need to be on every platform?", a: "No. Most businesses do better focusing on one or two platforms where their customers are, and doing them well." },
      { q: "How long until we see results?", a: "Consistency over months matters most. We set measurable goals for the first 90 days so progress is visible." },
      { q: "Can you train our team to run it?", a: "Yes. The strategy includes guidelines, templates and a workshop if you want to run it in-house." },
    ],
    related: ["/services/social-media", "/social-media-management/instagram", "/social-media-management/linkedin", "/services/performance-marketing"],
  },
];
