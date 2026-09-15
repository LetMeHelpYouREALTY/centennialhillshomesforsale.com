// Site Configuration - HeyBerkshire.com
// Berkshire Hathaway HomeServices Nevada Properties

import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "./market-snapshots";

export const siteConfig = {
  name: "HeyBerkshire",
  fullName: "Berkshire Hathaway HomeServices Nevada Properties",
  tagline: "Private Client Real Estate Advisory",
  /** Full brand line for titles and OG: Berkshire Hathaway HomeServices Nevada Properties | Private Client Real Estate Advisory */
  brandLine:
    "Berkshire Hathaway HomeServices Nevada Properties | Private Client Real Estate Advisory",
  brandName: "Berkshire Hathaway HomeServices",
  shortName: "BHHS",
  url: "https://heyberkshire.com",
  description:
    "Las Vegas and Henderson real estate with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Buy, sell, or request a CMA. Call (702) 222-1964 or email homes@heyberkshire.com.",
};

export const agentInfo = {
  name: "Dr. Jan Duffy",
  title: "REALTOR®",
  license: "S.0197614.LLC",
  phone: "(702) 222-1964",
  phoneFormatted: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
  email: "homes@heyberkshire.com",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
};

export const officeInfo = {
  name: "Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    street: "9406 W Lake Mead Blvd, Suite 100",
    city: "Las Vegas",
    state: "NV",
    zip: "89134",
    full: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
  },
  coordinates: {
    lat: 36.1893,
    lng: -115.2821,
  },
  phone: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
};

// Market Statistics (listing medians, not a CMA)
export const marketStats = {
  lastUpdated: MARKET_SNAPSHOT_AS_OF,
  lasVegas: {
    medianPrice: LISTING_MEDIANS_USD.lasVegas,
    medianPriceFormatted: formatUsd(LISTING_MEDIANS_USD.lasVegas),
    yearOverYearChange: "UNKNOWN — ask for a live pull",
    daysOnMarket: "UNKNOWN — ask for a live pull",
    activeListings: "UNKNOWN — ask for a live pull",
    closedSales: "UNKNOWN — ask for a live pull",
    inventoryMonths: "UNKNOWN — ask for a live pull",
  },
  henderson: {
    medianPrice: LISTING_MEDIANS_USD.hendersonListing,
    medianPriceFormatted: formatUsd(LISTING_MEDIANS_USD.hendersonListing),
    soldMedian: LISTING_MEDIANS_USD.hendersonSold,
    soldMedianFormatted: formatUsd(LISTING_MEDIANS_USD.hendersonSold),
    yearOverYearChange: "UNKNOWN — ask for a live pull",
    daysOnMarket: "UNKNOWN — ask for a live pull",
    activeListings: "UNKNOWN — ask for a live pull",
  },
  summerlin: {
    medianPrice: LISTING_MEDIANS_USD.summerlinNorth,
    medianPriceFormatted: formatUsd(LISTING_MEDIANS_USD.summerlinNorth),
    yearOverYearChange: "UNKNOWN — ask for a live pull",
    daysOnMarket: "UNKNOWN — ask for a live pull",
    luxuryMedian: LISTING_MEDIANS_USD.summerlinWest,
    luxuryMedianFormatted: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
  },
  luxury: {
    medianPrice: LISTING_MEDIANS_USD.southernHighlands,
    medianPriceFormatted: formatUsd(LISTING_MEDIANS_USD.southernHighlands),
    activeListings: "UNKNOWN — ask for a live pull",
    daysOnMarket: "UNKNOWN — ask for a live pull",
    pricePerSqFt: "UNKNOWN — ask for a live pull",
  },
};

// Public years of practice only. Do not publish volume, rating, or review
// counts without a live GBP or brokerage pull.
export const agentStats = {
  servingSince: 2008,
};

// Value Propositions
export const valuePropositions = {
  main: "Berkshire Hathaway HomeServices Nevada Properties is a franchise brokerage. You get a written plan, a global referral network, and one agent of record — Dr. Jan Duffy — not a Buffett slogan.",
  trust:
    "Berkshire Hathaway HomeServices is backed by Berkshire Hathaway Inc. You get a global referral network, listing marketing in writing, and documented ethics standards.",
  expertise:
    "Serving Las Vegas since 2008. One agent of record, live MLS, and a written plan — not a brand slogan.",
};

// Neighborhoods served
export const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Master-planned community with parks, trails, and Red Rock Canyon access",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.summerlinNorth),
    highlights: [
      "Red Rock views",
      "Trail network",
      "Downtown Summerlin",
      "Village ZIPs",
    ],
  },
  {
    name: "Henderson",
    slug: "henderson",
    description:
      "Nevada's second-largest city with parks, trails, and master-planned villages",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.hendersonListing),
    highlights: [
      "Parks and trails",
      "Lake Las Vegas",
      "Green Valley",
      "Master-planned villages",
    ],
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description: "1980s–90s Henderson streets with mature landscaping",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.greenValleySouth),
    highlights: ["Golf courses", "Walking trails", "Shopping", "Parks"],
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    description: "Guard-gated custom community in Summerlin",
    medianPrice: "Ask CMA",
    highlights: [
      "Custom estates",
      "Architectural controls",
      "View lots",
      "Gated access",
    ],
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    description: "Master-planned luxury community with golf-course lots",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.southernHighlands),
    highlights: [
      "Golf community",
      "Guard-gated",
      "Mountain views",
      "Luxury amenities",
    ],
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description: "Rapidly growing area with affordable new construction",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.northLasVegas),
    highlights: [
      "New construction",
      "Entry-level pricing",
      "Growing employment centers",
      "Parks and recreation",
    ],
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    description: "Newer master-planned community in northwest Las Vegas",
    medianPrice: "Ask CMA",
    highlights: [
      "New homes",
      "Mountain views",
      "Modern amenities",
      "Skye Center recreation",
    ],
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description: "Northwest Las Vegas community with mountain proximity",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.centennialHills),
    highlights: ["Mountain access", "Parks", "Shopping", "Town Center"],
  },
  {
    name: "89138 Summerlin West",
    slug: "89138",
    description:
      "Summerlin West ZIP — Reverence and later Howard Hughes villages",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
    highlights: ["89138", "Reverence", "Newer vintage", "Red Rock access"],
  },
  {
    name: "Siena",
    slug: "siena",
    description:
      "Guard-gated 55+ HOPA campus in Summerlin South. Confirm HOA and occupancy on resale docs",
    medianPrice: "Ask CMA",
    highlights: ["55+ HOPA", "Summerlin South", "Guard-gated", "Live CMA"],
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    description: "Henderson master-planned community with resort-style living",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.inspirada),
    highlights: [
      "Resort pools",
      "Walking trails",
      "New construction",
      "Aventura Park",
    ],
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    description: "Southwest Las Vegas master-planned community",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.mountainsEdge),
    highlights: ["Mountain views", "Parks", "Growing area", "I-215 access"],
  },
];

// Services offered
export const services = [
  {
    name: "Home Buying",
    slug: "buyers",
    description:
      "Written buyer-broker agreement, MLS search, and a closing timeline",
    icon: "Home",
  },
  {
    name: "Home Selling",
    slug: "sellers",
    description:
      "Comps-based pricing, listing marketing, and a written listing agreement",
    icon: "TrendingUp",
  },
  {
    name: "Luxury Homes",
    slug: "luxury-homes",
    description:
      "Listed homes from $1.5M+ in Summerlin, The Ridges, and MacDonald Highlands",
    icon: "Star",
  },
  {
    name: "New Construction",
    slug: "new-construction",
    description:
      "Buyer-broker agreement for new-home purchases. Builder credits go on the contract",
    icon: "Building",
  },
  {
    name: "Investment Properties",
    slug: "investment-properties",
    description: "Strategic consulting for rental and investment opportunities",
    icon: "DollarSign",
  },
  {
    name: "Relocation",
    slug: "relocation",
    description: "Comprehensive relocation assistance for moves to Las Vegas",
    icon: "Truck",
  },
  {
    name: "Home Valuation",
    slug: "home-valuation",
    description: "CMA from recent GLVAR comps. Request one at /home-valuation",
    icon: "Calculator",
  },
  {
    name: "Market Analysis",
    slug: "market-report",
    description: "In-depth Las Vegas real estate market insights",
    icon: "BarChart",
  },
];

// Expert quotes from Dr. Jan Duffy
export const expertQuotes = {
  market: `"The Las Vegas market moves by village and by week. I will not invent a 20-offer headline. Buyers get a live CMA and a written offer plan."`,
  buyers: `"My job isn't just to show you houses—it's to make sure you don't overpay, that you understand what you're buying, and that you're protected through every step of the transaction."`,
  sellers: `"Pricing your home to the comps from day one is the single most important listing decision. Overpriced homes sit, and every extra day on market costs carrying cost and buyer leverage."`,
  luxury: `"Luxury here means listed homes from $1.5M+ in Summerlin, The Ridges, and MacDonald Highlands. I write a buyer-broker or listing agreement and pull recent GLVAR comps. Call (702) 222-1964 or email homes@heyberkshire.com."`,
  investment: `"Cap rate, HOA, and insurance are on the worksheet. I will not rank Las Vegas rental yields against the country from this page."`,
  relocation: `"Moving to a new city is stressful enough. I handle neighborhood tours, commute timing, contractor referrals, and a written buy-sell calendar so you can focus on the move."`,
  newConstruction: `"Builders have sales agents who work for them, not you. Register me before the first model-home visit. Compensation is in the written buyer agreement — it is not 'free' as a slogan."`,
  valueProposition: `"When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I tell them: you're not just getting me—you're getting the BHHS referral network, listing marketing in writing, and a brand with documented ethics standards."`,
};

// Common FAQs
export const commonFAQs = {
  general: [
    {
      question: "Why should I choose a Berkshire Hathaway HomeServices agent?",
      answer:
        "Berkshire Hathaway HomeServices is backed by Berkshire Hathaway Inc. You get a global referral network, listing marketing in writing, and documented ethics standards. Compensation is disclosed before you sign.",
    },
    {
      question:
        "What areas does Berkshire Hathaway HomeServices Nevada Properties cover?",
      answer:
        "BHHS Nevada Properties serves Las Vegas, Henderson, North Las Vegas, and Clark County, including Centennial Hills, Summerlin (89138 and 89144), The Ridges, Skye Canyon, Southern Highlands, Green Valley, and 55+ campuses such as Siena and Trilogy.",
    },
    {
      question: "How do Berkshire Hathaway HomeServices agents get paid?",
      answer:
        "Commission structures are negotiable and written before work starts. After the 2024 NAR practice changes, buyer-broker compensation is no longer an automatic MLS offer. Dr. Jan Duffy will walk through how she is paid before you sign a buyer agreement.",
    },
    {
      question: "What is Dr. Jan Duffy's experience in Las Vegas real estate?",
      answer:
        "Dr. Jan Duffy has been serving Las Vegas since 2008. Her practice spans residential, luxury, investment, and new construction properties throughout Southern Nevada.",
    },
  ],
  buying: [
    {
      question: "How long does the home buying process take in Las Vegas?",
      answer:
        "Escrow length is set in the purchase contract, often 30–45 days for financed purchases. Cash and new construction can close on a different timeline. I put the dates in writing; I do not promise a 7-day close.",
    },
    {
      question: "Do I need a pre-approval before looking at homes?",
      answer:
        "Yes. A pre-approval letter shows sellers a budget range. Dr. Jan can introduce Clark County lenders. Rates and programs are UNKNOWN until the lender quotes them.",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "Down payments vary by loan type: FHA 3.5%, conventional typically 3–20%, VA 0% when eligible. Nevada down-payment assistance exists for some first-time buyers. Dr. Jan can introduce Clark County lenders. Rates and USDA eligibility are UNKNOWN until the lender quotes them.",
    },
  ],
  selling: [
    {
      question: "What is my home worth in today's Las Vegas market?",
      answer:
        "Home values depend on location, condition, size, and recent comparable sales. Dr. Jan provides a CMA from current MLS comps. Listing is a separate agreement. Serving Las Vegas since 2008.",
    },
    {
      question: "How long will it take to sell my home?",
      answer:
        "Days on market move weekly by ZIP and price band. I will not quote a valley-wide average as if it were your street. Ask for a live MLS pull before you price or bid.",
    },
    {
      question: "What do I need to do to prepare my home for sale?",
      answer:
        "Dr. Jan walks the house and writes a preparation checklist. Decluttering, minor repairs, fresh paint, and professional photography are the usual first items — not a guaranteed return.",
    },
  ],
};
