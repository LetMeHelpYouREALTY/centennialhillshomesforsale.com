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
    "Expert real estate services in Las Vegas and Henderson, NV. Buy, sell, or invest with Dr. Jan Duffy, your trusted Berkshire Hathaway HomeServices Nevada Properties agent.",
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

// Agent Stats
export const agentStats = {
  servingSince: 2008,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
  averageRating: 4.9,
  reviewCount: 200,
};

// Value Propositions
export const valuePropositions = {
  main: "When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name synonymous with trust, ethical standards, and financial strength—the same principles that built Warren Buffett's empire.",
  trust:
    "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents.",
  expertise:
    "Serving Las Vegas since 2008 with $127M+ in closed transactions, Dr. Jan Duffy combines deep local market knowledge with the resources of a global brand.",
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
      "150+ parks",
      "Trail network",
      "Golf courses",
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
    description: "Established Henderson community with mature landscaping",
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
    description: "Master-planned luxury community with championship golf",
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
      "Expert guidance through every step of the home buying process",
    icon: "Home",
  },
  {
    name: "Home Selling",
    slug: "sellers",
    description:
      "Maximize your home's value with professional marketing and negotiation",
    icon: "TrendingUp",
  },
  {
    name: "Luxury Homes",
    slug: "luxury-homes",
    description: "Specialized expertise in Las Vegas luxury real estate",
    icon: "Star",
  },
  {
    name: "New Construction",
    slug: "new-construction",
    description: "Free buyer representation for new home purchases",
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
    description: "Free property valuations using current market data",
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
  market: `"The Las Vegas market remains strong heading into 2026. We're seeing continued demand from California relocators and remote workers, but the days of 20 offers on every listing are behind us. Buyers finally have some negotiating power."`,
  buyers: `"My job isn't just to show you houses—it's to make sure you don't overpay, that you understand what you're buying, and that you're protected through every step of the transaction."`,
  sellers: `"Pricing your home correctly from day one is the single most important factor in getting top dollar. Overpriced homes sit, and every day on market costs you money."`,
  luxury: `"Luxury buyers expect discretion, market expertise, and flawless execution. In this price range, one wrong move can cost hundreds of thousands of dollars."`,
  investment: `"Las Vegas rental yields are among the best in the country right now. But you need to know which neighborhoods are appreciating and which have peaked."`,
  relocation: `"Moving to a new city is stressful enough. I handle everything from neighborhood tours to school research to contractor referrals so you can focus on your new beginning."`,
  newConstruction: `"Builders have sales agents who work for them, not you. Having your own representation costs you nothing but can save you tens of thousands in upgrades and negotiations."`,
  valueProposition: `"When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I tell them: you're not just getting me—you're getting a global network of 50,000 agents, world-class marketing, and a brand that's synonymous with trust."`,
};

// Common FAQs
export const commonFAQs = {
  general: [
    {
      question: "Why should I choose a Berkshire Hathaway HomeServices agent?",
      answer:
        "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents. When you're making the biggest purchase of your life, that trust matters.",
    },
    {
      question:
        "What areas does Berkshire Hathaway HomeServices Nevada Properties cover?",
      answer:
        "BHHS Nevada Properties serves all of Las Vegas, Henderson, North Las Vegas, and surrounding areas, with specialized expertise in Summerlin, The Ridges, Skye Canyon, Southern Highlands, Green Valley, and Henderson's master-planned communities.",
    },
    {
      question: "How do Berkshire Hathaway HomeServices agents get paid?",
      answer:
        "Commission structures are negotiable. Dr. Jan Duffy offers transparent pricing and will walk you through all costs before you sign anything. For buyers, our services are typically free as commissions are paid by the seller.",
    },
    {
      question: "What is Dr. Jan Duffy's experience in Las Vegas real estate?",
      answer:
        "Dr. Jan Duffy has been serving Las Vegas since 2008, with $127M+ in closed transactions and 500+ satisfied clients. Her expertise spans residential, luxury, investment, and new construction properties throughout Southern Nevada.",
    },
  ],
  buying: [
    {
      question: "How long does the home buying process take in Las Vegas?",
      answer:
        "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days. The timeline depends on financing, inspections, and other contingencies.",
    },
    {
      question: "Do I need a pre-approval before looking at homes?",
      answer:
        "Yes, a pre-approval letter is essential. It shows sellers you're serious and gives you a clear budget. Dr. Jan can connect you with trusted local lenders who offer competitive rates.",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "Down payment requirements vary: FHA loans require 3.5%, conventional loans typically 3-20%, and VA/USDA loans may require 0% down. Dr. Jan can connect you with lenders who specialize in various loan programs.",
    },
  ],
  selling: [
    {
      question: "What is my home worth in today's Las Vegas market?",
      answer:
        "Home values depend on location, condition, size, and recent comparable sales. Dr. Jan provides free, comprehensive home valuations using current MLS data and her expertise serving Las Vegas since 2008.",
    },
    {
      question: "How long will it take to sell my home?",
      answer:
        "Currently, well-priced homes in Las Vegas are selling in an average of 28 days. Luxury homes may take longer (45+ days). Pricing strategy is crucial—overpriced homes can sit for months.",
    },
    {
      question: "What do I need to do to prepare my home for sale?",
      answer:
        "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional photography are the highest-ROI improvements.",
    },
  ],
};
