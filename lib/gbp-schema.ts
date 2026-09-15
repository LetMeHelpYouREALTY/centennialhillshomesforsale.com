// Google Business Profile Schema Data
// Supports GBP ranking factors: Relevance, Distance, Prominence

import { AGENT_PHOTO_PATH } from "./brand-assets";
import {
  AGENT_EMAIL,
  CTA_PHONE,
  CTA_PHONE_E164,
  OFFICE_NAP,
  OPENING_HOURS_SPEC,
} from "./contact";
import { officeInfo } from "./site-config";
import { OFFICE_PHOTO_PATH } from "./site-images";
import { getPublicSiteUrl } from "./site-url";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "./market-snapshots";

export const businessInfo = {
  // NAP - Must match GBP exactly
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    addressCountry: "US",
  },
  phone: {
    display: CTA_PHONE,
    tel: CTA_PHONE_E164,
  },
  email: AGENT_EMAIL,
  url: "https://heyberkshire.com",

  // Business Details
  license: "S.0197614.LLC",
  priceRange: "$$",

  // Hours - Match GBP exactly
  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "By Appointment",
  },

  // Geo coordinates — must match officeInfo / Google Maps pin
  geo: {
    latitude: officeInfo.coordinates.lat,
    longitude: officeInfo.coordinates.lng,
  },

  // Service areas - Start focused, expand with prominence
  serviceAreas: [
    // Primary (immediate city)
    "Las Vegas, NV",
    "Summerlin, NV",
    // Secondary (close ZIPs)
    "Henderson, NV",
    "North Las Vegas, NV",
    // Tertiary (county expansion)
    "Clark County, NV",
  ],

  // Categories - Primary + Secondary for GBP
  categories: {
    primary: "Real Estate Agent",
    secondary: ["Real Estate Agency", "Real Estate Consultant"],
  },

  // Services - Each creates searchable fields in GBP
  services: [
    // Core Services
    {
      name: "Buyer Representation",
      description: "Full-service home buying assistance",
    },
    {
      name: "Seller Representation",
      description: "List and sell with comps-based pricing and marketing",
    },
    { name: "Luxury Home Sales", description: "High-end properties $1M+" },
    // Niche Services (trigger intent phrases)
    {
      name: "California Relocation Services",
      description: "Helping CA buyers transition to Las Vegas",
    },
    {
      name: "55+ HOPA Communities",
      description: "Sun City, Anthem, Del Webb communities",
    },
    {
      name: "First-Time Home Buyer Guidance",
      description: "FHA, VA, down payment assistance",
    },
    {
      name: "Probate Real Estate Sales",
      description: "Estate and probate property transactions",
    },
    {
      name: "Divorce Real Estate Sales",
      description: "Neutral representation for marital asset division",
    },
    {
      name: "Relocation Services",
      description: "Corporate and individual relocation assistance",
    },
    {
      name: "Investment Property Consulting",
      description: "Rental properties and investment analysis",
    },
    {
      name: "New Construction Representation",
      description: "Builder negotiations and buyer protection",
    },
    {
      name: "Military/VA Home Buying",
      description:
        "VA-loan buyer representation and lender referrals. I do not originate loans.",
    },
    {
      name: "Downsizing Consultation",
      description: "Transition to smaller, maintenance-free living",
    },
    {
      name: "Luxury Condo Sales",
      description: "High-rise and resort-style condominiums",
    },
  ],

  // Attributes for GBP - Fill out ALL available
  attributes: {
    // Accessibility (important for GBP)
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible restroom",
    ],
    // Service options
    serviceOptions: ["Online appointments", "Onsite services"],
    // Identity attributes belong on the live GBP profile, not invented here.
    highlights: [] as string[],
    // Offerings
    offerings: ["CMA consult", "Written buyer and listing agreements"],
    // Amenities
    amenities: ["Free Wi-Fi", "Free parking"],
    // Planning
    planning: ["Appointment required", "Accepts new clients"],
    // Payments (if applicable)
    payments: ["Credit cards", "Checks", "Wire transfer"],
  },

  // Social profiles for sameAs schema
  socialProfiles: [
    "https://www.facebook.com/drjanduffy",
    "https://www.instagram.com/drjanduffy",
    "https://www.linkedin.com/in/drjanduffy",
  ],

  // Languages spoken
  languages: ["English"],

  // Payment methods accepted
  paymentAccepted: ["Credit Card", "Check", "Wire Transfer"],

  // Year established
  foundingDate: "2008",
};

// 750-word GBP Description (3 sections)
export const gbpDescription = {
  // Section 1: Who you are/mission (~250 words)
  whoWeAre: `Dr. Jan Duffy is a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, serving Las Vegas, Henderson, and Summerlin since 2008. License S.0197614.LLC. The office is at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Call (702) 222-1964.

I work first-time buyers, luxury tours in The Ridges and MacDonald Highlands, 55+ HOPA communities, and California-to-Nevada relocations against live comps — not a volume slogan or a “family” pitch.`,

  // Section 2: What/why - Value proposition (~250 words)
  whatWeDo: `Clients receive a CMA on the address, written compensation, and honest advice—not sales pressure. As a Berkshire Hathaway HomeServices agent, Dr. Jan offers a global referral network, marketing for sellers, and live MLS search for buyers.

Files include: buyer and seller representation, luxury home sales, 55+ HOPA communities (Sun City Summerlin, Sun City Anthem, Del Webb Lake Las Vegas), California relocation, probate and divorce real estate, investment property consulting, new construction representation, and first-time buyer programs including FHA, VA, and down payment assistance guidance.

Dr. Jan's approach is simple: put the client's written goals first, pull live comps, and keep working until the file closes.`,

  // Section 3: Where - Areas served (~250 words)
  whereWeServe: `Dr. Jan serves the Las Vegas Valley: Las Vegas, Summerlin, Henderson, North Las Vegas, and Clark County. Neighborhood files include Summerlin master-planned villages, Henderson's Green Valley and Inspirada, gated custom in The Ridges and Southern Highlands, Centennial Hills and Skye Canyon, and Mountains Edge and North Las Vegas.

55+ HOPA files cover Sun City Summerlin, Sun City Anthem in Henderson, Del Webb Lake Las Vegas, and Solera at Anthem. Investment files cover single-family rentals and multi-family purchases across the Las Vegas metro. I do not manage rentals.

Office located at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Available Monday through Friday 9am-6pm, Saturday 10am-4pm, and Sunday by appointment. Call (702) 222-1964 or visit heyberkshire.com with the address you want on a CMA.`,
};

// FAQ Schema for GBP Q&A section
export const gbpFAQs = [
  {
    question: "What areas does Dr. Jan Duffy serve in Las Vegas?",
    answer:
      "Dr. Jan serves all of Las Vegas, Summerlin, Henderson, North Las Vegas, and Clark County. Neighborhood files include Summerlin, Green Valley, The Ridges, Southern Highlands, Centennial Hills, Skye Canyon, Inspirada, and Mountains Edge.",
  },
  {
    question: "Does Dr. Jan help buyers relocating from California?",
    answer:
      "Yes. California relocation is a specialty. Nevada charges no state income tax on wages. Home-price differences are not a fixed 40–60% on every street — Dr. Jan pairs a California sale against live Las Vegas comps before anyone bids. Call (702) 222-1964.",
  },
  {
    question: "What 55+ communities does Dr. Jan specialize in?",
    answer:
      "Dr. Jan specializes in Sun City Summerlin, Sun City Anthem in Henderson, Del Webb Lake Las Vegas, and Solera at Anthem. Confirm HOA, occupancy, and listing median on the resale packet — campus size is not a price.",
  },
  {
    question:
      "Does Berkshire Hathaway HomeServices help with new construction?",
    answer:
      "Yes. Dr. Jan represents buyers on new construction from builders such as Toll Brothers, Lennar, and Century Communities. After the 2024 NAR practice changes, compensation is written into the buyer agreement and negotiated — it is not an automatic MLS offer. Call (702) 222-1964.",
  },
  {
    question:
      "How does Dr. Jan help with probate or divorce real estate sales?",
    answer:
      "Dr. Jan handles sensitive transactions with discretion and professionalism. For probate sales, she coordinates with estate attorneys and ensures court compliance. For divorce sales, she provides neutral representation and works with both parties' attorneys. Call (702) 222-1964 for a confidential consultation.",
  },
  {
    question: "What is the average home price in Las Vegas in 2026?",
    answer: `As of ${MARKET_SNAPSHOT_AS_OF}, the Las Vegas city median listing price is ${formatUsd(LISTING_MEDIANS_USD.lasVegas)} (${MARKET_SNAPSHOT_SOURCE}). Henderson listing median is ${formatUsd(LISTING_MEDIANS_USD.hendersonListing)}; sold median ${formatUsd(LISTING_MEDIANS_USD.hendersonSold)}. Centennial Hills listing median is ${formatUsd(LISTING_MEDIANS_USD.centennialHills)}. Those are not a CMA for a specific house. Call (702) 222-1964 for live comps.`,
  },
  {
    question: "Does Dr. Jan work with first-time home buyers?",
    answer:
      "Yes. Dr. Jan guides first-time buyers through pre-approval, loan programs (FHA 3.5% down, VA 0% down, conventional options), Nevada down payment assistance, and new construction registration. Call (702) 222-1964.",
  },
  {
    question: "Why choose Berkshire Hathaway HomeServices over other agencies?",
    answer:
      "Berkshire Hathaway HomeServices Nevada Properties is a franchise brokerage. You get a global referral network, listing marketing in writing, and documented ethics standards. Warren Buffett does not write your CMA.",
  },
  {
    question: "How do I schedule a consultation with Dr. Jan Duffy?",
    answer:
      "Call or text (702) 222-1964 for immediate assistance, or email homes@heyberkshire.com. Office visits available at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday by appointment.",
  },
  {
    question: "Does Dr. Jan help with investment properties in Las Vegas?",
    answer:
      "Yes! Dr. Jan provides investment property consulting including rental property analysis, cap rate calculations, short-term rental regulations, and multi-family opportunities across the Las Vegas Valley. Contact (702) 222-1964 for investment property guidance.",
  },
];

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://heyberkshire.com/#organization",
    name: businessInfo.name,
    image: [
      `${getPublicSiteUrl()}${AGENT_PHOTO_PATH}`,
      `${getPublicSiteUrl()}${OFFICE_PHOTO_PATH}`,
    ],
    url: businessInfo.url,
    telephone: businessInfo.phone.tel,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    hasMap: OFFICE_NAP.mapsUrl,
    foundingDate: businessInfo.foundingDate,
    openingHoursSpecification: OPENING_HOURS_SPEC.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...spec.dayOfWeek],
      opens: spec.opens,
      closes: spec.closes,
    })),
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    sameAs: [
      "https://www.facebook.com/drjanduffy",
      "https://www.instagram.com/drjanduffy",
      "https://www.linkedin.com/in/drjanduffy",
      OFFICE_NAP.mapsUrl,
      OFFICE_NAP.reviewsUrl,
    ],
  };
}

// Generate FAQPage Schema
export function generateFAQSchema(faqs = gbpFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
