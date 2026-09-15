// GBP Posts - Weekly posts for freshness signal
// Posts are a modest but real ranking factor (a few percent)

export interface GBPPost {
  id: string;
  type: "update" | "offer" | "event" | "product";
  title: string;
  content: string;
  cta?: {
    text: string;
    url: string;
  };
  publishDate: string;
  expiresDate?: string;
  keywords: string[]; // Natural keyword inclusion
}

// Template posts - Rotate these weekly
export const gbpPostTemplates: GBPPost[] = [
  {
    id: "market-update-sep-2026",
    type: "update",
    title: "Las Vegas Real Estate Market Update - September 2026",
    content: `Las Vegas listing snapshot from realtor.com local market pages retrieved 2026-09-14 (listing medians, not a CMA):

📊 Las Vegas city median listing: $479,000
🏠 Henderson listing median: $534,950 (sold median $485,000)
📍 Centennial Hills listing median: $514,500
🧭 North Las Vegas listing median: $439,990

Days on market and inventory move weekly — ask for a live pull before you bid or list.

Call Dr. Jan Duffy at (702) 222-1964 for comps on a specific street.`,
    cta: {
      text: "Request a CMA",
      url: "https://heyberkshire.com/home-valuation",
    },
    publishDate: "2026-09-14",
    keywords: [
      "Las Vegas real estate",
      "Henderson homes",
      "Summerlin",
      "55+ communities",
      "market update",
    ],
  },
  {
    id: "california-relocation",
    type: "update",
    title: "California Buyers: Your Home Equity Goes Further in Las Vegas",
    content: `Thinking about relocating from California to Las Vegas?

✅ 0% state income tax on wages (Nevada statute)
✅ Pair your California sale against live Las Vegas comps — not a 40–60% slogan
✅ Named campuses and commute times instead of school slogans
✅ I-15 drive or a LAS flight — time your own itinerary

I will not invent a buyer-origin percentage or a California-sale-buys-luxury promise. Call with your California sale range and I will pull live Summerlin, Henderson, and Centennial Hills comps.

Call (702) 222-1964 for a California equity comparison.`,
    cta: {
      text: "California Relocation Guide",
      url: "https://heyberkshire.com/buyers/california-relocator",
    },
    publishDate: "2026-01-13",
    keywords: [
      "California relocation",
      "Las Vegas",
      "no state income tax",
      "Summerlin",
      "The Ridges",
    ],
  },
  {
    id: "55-plus-spotlight",
    type: "update",
    title: "55+ Active Adult Communities in Las Vegas - Your Options",
    content: `Looking for 55+ living in the Las Vegas Valley? Here are the top communities:

🏌️ Sun City Summerlin - Del Webb 55+ in ZIP 89134 (7,700+ homes, 3 golf courses)
🌄 Sun City Anthem - Henderson location with mountain views
🌊 Del Webb Lake Las Vegas - Resort-style lakefront living
⛳ Solera at Anthem - Smaller Henderson 55+ campus with a guard-gated entry

Each community has different rec campuses, HOA rules, and listing medians. Dr. Jan Duffy works 55+ HOPA files and can tour by ZIP and floor plan.

Schedule a community tour: (702) 222-1964`,
    cta: {
      text: "Explore 55+ Communities",
      url: "https://heyberkshire.com/55-plus-communities",
    },
    publishDate: "2026-01-06",
    keywords: [
      "55+ communities",
      "Sun City Summerlin",
      "Sun City Anthem",
      "Del Webb",
      "active adult",
    ],
  },
  {
    id: "first-time-buyer",
    type: "offer",
    title: "First-Time Home Buyer? Down Payment Assistance Available",
    content: `Nevada offers several programs to help first-time buyers:

💰 FHA loans: Only 3.5% down required
🎖️ VA loans: 0% down for veterans
🏠 Nevada Housing Division: Down payment assistance up to 5%
🏗️ Builder incentives: Many offering closing cost credits

Dr. Jan Duffy guides first-time buyers through pre-approval, loan programs, and a written buyer agreement. Call (702) 222-1964.

Popular first-time buyer neighborhoods (realtor.com listing medians as of 2026-09-14, not a CMA):
- North Las Vegas ($439,990)
- Mountains Edge ($499,900)
- Centennial Hills ($514,500)

Call (702) 222-1964 to start your homeownership journey.`,
    cta: {
      text: "First-Time Buyer Guide",
      url: "https://heyberkshire.com/buyers/first-time-buyers",
    },
    publishDate: "2025-12-30",
    keywords: [
      "first-time buyer",
      "down payment assistance",
      "FHA",
      "VA loan",
      "Las Vegas",
    ],
  },
  {
    id: "seller-tips",
    type: "update",
    title: "Selling Your Las Vegas Home? Five Listing Prep Tips",
    content: `Thinking about selling? Prep that actually moves a listing:

1️⃣ Price from live comps on your street (overpriced homes sit)
2️⃣ Professional photography is non-negotiable
3️⃣ Declutter and depersonalize
4️⃣ Address minor repairs before listing
5️⃣ Work with an agent who walks that ZIP every week

I will not publish a fake YoY appreciation, average days-on-market, or list-to-sale ratio as if it were your house. Ask for a live CMA.

Get a listing consult from Dr. Jan Duffy: (702) 222-1964`,
    cta: {
      text: "Request a CMA",
      url: "https://heyberkshire.com/home-valuation",
    },
    publishDate: "2025-12-23",
    keywords: [
      "sell home Las Vegas",
      "home valuation",
      "listing agent",
      "Summerlin",
      "Henderson",
    ],
  },
  {
    id: "luxury-homes",
    type: "update",
    title:
      "The Ridges, MacDonald Highlands, and other Las Vegas luxury listings",
    content: `Las Vegas luxury real estate is priced on live comps, not a slogan:

🏔️ The Ridges, Summerlin — guard-gated custom estates (live CMA, not a $2M slogan)
⛰️ MacDonald Highlands — Henderson hillside luxury with Strip views
🌆 Strip high-rises — confirm the tower, HOA, and current inventory
🌳 Southern Highlands — golf-course listings; realtor.com area median $1,024,950 as of 2026-09-14 (not a CMA)

What luxury buyers actually compare:
✅ No state income tax on wages
✅ Guard-gated entries and HOA rules on the docs
✅ Dining, entertainment, and golf access you can drive
✅ Live comps — do not assume a 40–60% discount vs CA/NY

Confidential luxury home search: (702) 222-1964`,
    cta: {
      text: "Luxury Home Search",
      url: "https://heyberkshire.com/buyers/luxury-homes-las-vegas",
    },
    publishDate: "2025-12-16",
    keywords: [
      "luxury homes Las Vegas",
      "The Ridges",
      "MacDonald Highlands",
      "high-rise condos",
    ],
  },
];

// Review Response Templates
// Respond promptly and in depth using who/what/when/where/why
export const reviewResponseTemplates = {
  fiveStarBuyer: (
    clientName: string,
    neighborhood: string,
    details: string,
  ) => `
Thank you so much, ${clientName}! It was truly a pleasure helping you find your perfect home in ${neighborhood}. ${details}

Working with buyers who know what they want makes my job a joy. I'm always here if you have questions about your new home or need recommendations for local services.

Welcome to the neighborhood! 🏠

- Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
`,

  fiveStarSeller: (
    clientName: string,
    neighborhood: string,
    details: string,
  ) => `
Thank you for the kind words, ${clientName}! Selling your ${neighborhood} home was a great experience, and I'm thrilled we were able to ${details}.

The Las Vegas market is competitive, but with the right pricing strategy and marketing, we got you excellent results. Wishing you all the best in your next chapter!

- Dr. Jan Duffy, BHHS Nevada Properties
`,

  fourStar: (clientName: string, details: string) => `
Thank you for your review, ${clientName}! I appreciate your feedback about ${details}. Your satisfaction is my priority, and I'm always looking for ways to improve.

If there's anything I can help with going forward, please don't hesitate to reach out. I value your trust in choosing Berkshire Hathaway HomeServices.

- Dr. Jan Duffy
`,

  constructive: (clientName: string, issue: string, resolution: string) => `
${clientName}, thank you for sharing your experience. I take all feedback seriously, and I apologize that ${issue}.

${resolution}

Real estate transactions can be complex, and I'm committed to learning from every experience. If you'd like to discuss this further, please call me directly at (702) 222-1964.

- Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
`,
};

// Citation Sources for NAP consistency
export const citationSources = {
  // Tier 1: Major aggregators
  tier1: [
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      priority: "critical",
    },
    {
      name: "Bing Places",
      url: "https://www.bingplaces.com",
      priority: "high",
    },
    {
      name: "Apple Maps",
      url: "https://mapsconnect.apple.com",
      priority: "high",
    },
    { name: "Yelp", url: "https://biz.yelp.com", priority: "high" },
  ],
  // Tier 2: Real estate specific
  tier2: [
    {
      name: "Realtor.com",
      url: "https://www.realtor.com/realestateagents",
      priority: "critical",
    },
    {
      name: "Zillow",
      url: "https://www.zillow.com/agent-finder",
      priority: "critical",
    },
    { name: "Homes.com", url: "https://www.homes.com", priority: "high" },
    { name: "Trulia", url: "https://www.trulia.com", priority: "high" },
    { name: "Redfin", url: "https://www.redfin.com", priority: "medium" },
  ],
  // Tier 3: Local Nevada/Las Vegas directories
  tier3: [
    {
      name: "Nevada Real Estate Division",
      url: "https://red.nv.gov",
      priority: "high",
    },
    {
      name: "Las Vegas Chamber of Commerce",
      url: "https://www.lvchamber.com",
      priority: "medium",
    },
    {
      name: "Henderson Chamber of Commerce",
      url: "https://www.hendersonchamber.com",
      priority: "medium",
    },
    {
      name: "Vegas.com Business Directory",
      url: "https://www.vegas.com",
      priority: "low",
    },
  ],
  // Tier 4: General business directories
  tier4: [
    {
      name: "Facebook Business",
      url: "https://www.facebook.com/business",
      priority: "high",
    },
    { name: "LinkedIn", url: "https://www.linkedin.com", priority: "high" },
    { name: "BBB", url: "https://www.bbb.org", priority: "medium" },
    {
      name: "Yellow Pages",
      url: "https://www.yellowpages.com",
      priority: "low",
    },
  ],
};

// Photo categories for GBP
export const photoCategories = [
  {
    category: "Office & Team",
    description: "Exterior office, interior, team photos",
    examples: [
      "Office exterior",
      "Reception area",
      "Dr. Jan headshot",
      "Team photo",
    ],
    count: "5-10 photos",
  },
  {
    category: "Neighborhoods",
    description: "Local area photos showing geography expertise",
    examples: [
      "Summerlin views",
      "Henderson parks",
      "Las Vegas Strip",
      "Red Rock Canyon",
    ],
    count: "10-15 photos",
  },
  {
    category: "Listings & Closings",
    description: "Active listings, sold properties, closing day photos",
    examples: [
      "Featured listings",
      "Sold signs",
      "Key handoff photos",
      "Happy clients",
    ],
    count: "15-20 photos",
  },
  {
    category: "55+ Communities",
    description: "Community amenities, clubhouses, golf courses",
    examples: [
      "Sun City clubhouse",
      "Golf courses",
      "Recreation centers",
      "Community pools",
    ],
    count: "10-15 photos",
  },
  {
    category: "Luxury Properties",
    description: "High-end listings and neighborhoods",
    examples: [
      "The Ridges homes",
      "Custom estates",
      "Strip views",
      "Pool/backyard features",
    ],
    count: "10-15 photos",
  },
];
