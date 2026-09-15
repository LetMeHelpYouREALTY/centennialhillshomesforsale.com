import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Mail,
  Phone,
  Users,
  Home as HomeIcon,
  Dumbbell,
  Calendar,
  Shield,
  DollarSign,
  MapPin,
  HelpCircle,
  Sun,
  Palmtree,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import SchemaScript from "@/components/SchemaScript";
import { generateWebPageSchema } from "@/lib/schema";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_PHONE_E164,
  CTA_TEL,
  OFFICE_NAP,
  REALSCOUT_SEARCH_URL,
} from "@/lib/contact";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";
import { PAGE_HERO_IMAGES, getNeighborhoodImage } from "@/lib/site-images";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import Image from "next/image";

export const metadata: Metadata = withShareImage(
  {
    title:
      "55+ Active Adult Communities Las Vegas | Sun City, Del Webb, Heritage | Dr. Jan Duffy",
    description:
      "Find 55+ homes in Las Vegas. Sun City Summerlin, Siena, Sun City Aliante, Del Webb Lake Las Vegas, Heritage at Stonebridge, Solera, Trilogy. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "55+ communities Las Vegas",
      "active adult communities Las Vegas",
      "Sun City Summerlin",
      "Siena Summerlin",
      "Sun City Aliante",
      "Del Webb Lake Las Vegas",
      "Heritage at Stonebridge",
      "Solera at Anthem",
      "Trilogy Summerlin",
      "retirement communities Nevada",
      "55 plus homes Las Vegas",
    ],
    openGraph: {
      title: "55+ Communities in Las Vegas | Dr. Jan Duffy",
      description:
        "Sun City, Siena, Del Webb, Heritage at Stonebridge, and other 55+ HOPA campuses with Dr. Jan Duffy. Berkshire Hathaway HomeServices Nevada Properties.",
      type: "website",
    },
  },
  PAGE_HERO_IMAGES.fiftyFivePlus,
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the age requirements for 55+ communities in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per the Housing for Older Persons Act (HOPA), at least 80% of occupied units must have one resident 55 or older. Some campuses require every occupant to be 55+. Whether a younger spouse may occupy is in the current CC&Rs — I will not treat “most communities” as your HOA.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy in a 55+ community if I'm under 55?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally no. Some files allow a purchase if you will be 55 by close of escrow, or as an investor who will rent to 55+ occupants. Confirm the CC&Rs. Dr. Jan Duffy reads the packet with you.",
      },
    },
    {
      "@type": "Question",
      name: "What do HOA fees cover in 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HOA fees in Las Vegas 55+ communities typically cover clubhouse access, pools, fitness, landscaping, and exterior maintenance. Golf memberships are often separate. I will not publish a $150–$500/month band as if it were your HOA — request the current budget, reserve study, and resale package.",
      },
    },
    {
      "@type": "Question",
      name: "Are 55+ communities a good investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las Vegas 55+ inventory is limited relative to demand from out-of-state buyers, but that is not a return forecast. Sun City Summerlin’s realtor.com listing median as of September 14, 2026 was a snapshot, not a 5-year appreciation claim. Ask for a live CMA and a hold-period plan.",
      },
    },
    {
      "@type": "Question",
      name: "Can grandchildren visit or stay in 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guest-stay limits and under-age occupancy vary by HOA. Confirm days per year in the current CC&Rs. Dr. Jan Duffy reads the packet with you before you bid.",
      },
    },
    {
      "@type": "Question",
      name: "Why do California residents move to Las Vegas 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevada has no state income tax on wages. Purchase prices are often lower than coastal California on a like-for-like house — confirm with paired comps, not a 50% slogan. Confirm HOA, insurance, and commute before assuming total cost of living is lower.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get current 55+ listings or a CMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (702) 222-1964 or email homes@heyberkshire.com with the campus name (Sun City Summerlin, Siena, Trilogy, and so on). I send live MLS — not a campus slogan.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  description:
    "55+ HOPA communities including Sun City, Del Webb, and Henderson 55+ campuses",
  telephone: CTA_PHONE_E164,
  email: AGENT_EMAIL,
  url: "https://heyberkshire.com/55-plus-communities",
  address: {
    "@type": "PostalAddress",
    streetAddress: OFFICE_NAP.street,
    addressLocality: OFFICE_NAP.city,
    addressRegion: OFFICE_NAP.state,
    postalCode: OFFICE_NAP.zip,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
    containedIn: "Nevada",
  },
  knowsAbout: [
    "55+ Communities",
    "Active Adult Living",
    "Sun City Summerlin",
    "Sun City Aliante",
    "Del Webb",
    "Heritage at Stonebridge",
    "Siena",
    "Trilogy at Summerlin",
    "Solera at Anthem",
  ],
};

const HOA_CONFIRM = "Confirm on resale docs";
const LIVE_CMA = "Live CMA — call for comps";

const communities = [
  {
    name: "Sun City Summerlin",
    slug: "sun-city-summerlin",
    location: "Summerlin, Las Vegas",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: HOA_CONFIRM,
    priceRange: `${formatUsd(LISTING_MEDIANS_USD.sunCitySummerlin)} listing median`,
    homes: "7,700+ homes",
    amenities: [
      "3 golf courses",
      "4 rec centers",
      "HOA club calendar",
      "Pools",
    ],
    highlights: [
      "7,700+ homes",
      "3 golf courses",
      "4 recreation centers with pools",
      "Confirm clubs in the HOA packet",
      "Mountain View Hospital nearby",
    ],
    description:
      "Del Webb 55+ community in ZIP 89134 with golf and rec campuses on site. About 7,700 homes.",
    color: "amber",
  },
  {
    name: "Sun City Anthem",
    slug: "sun-city-anthem",
    location: "Henderson",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: HOA_CONFIRM,
    priceRange: `${formatUsd(LISTING_MEDIANS_USD.sunCityAnthem)} listing median`,
    homes: "7,100+ homes",
    amenities: [
      "Anthem Center",
      "Confirm golf membership",
      "HOA club calendar",
      "Pools",
    ],
    highlights: [
      "Henderson 55+ Del Webb campus",
      "Confirm golf vs HOA separately",
      "Mountain views",
      "Henderson parks, trails, and recreation centers",
    ],
    description:
      "Henderson 55+ Del Webb campus with mountain views and nearby golf clubs.",
    color: "green",
  },
  {
    name: "Sun City Aliante",
    slug: "sun-city-aliante",
    location: "North Las Vegas",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: HOA_CONFIRM,
    priceRange: `NLV city ${formatUsd(LISTING_MEDIANS_USD.northLasVegas)} is not this HOA`,
    homes: "Confirm HOA count",
    amenities: ["Golf course", "Fitness center", "Pools", "Tennis"],
    highlights: [
      "North Las Vegas Sun City campus",
      "18-hole golf course",
      "Aliante Casino nearby",
      "I-215 and US-95 access",
    ],
    description:
      "Sun City Aliante is a North Las Vegas 55+ campus. Confirm live MLS vs the city listing median.",
    color: "blue",
  },
  {
    name: "Del Webb at Lake Las Vegas",
    slug: "del-webb-lake-las-vegas",
    location: "Henderson (Lake Las Vegas)",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: HOA_CONFIRM,
    priceRange: `${formatUsd(LISTING_MEDIANS_USD.lakeLasVegas)} area listing median (not the village alone)`,
    homes: "Confirm HOA count",
    amenities: ["Lake access", "Resort pools", "Fitness", "Pickleball"],
    highlights: [
      "Lakefront and mountain views",
      "Rec campus, pools, pickleball",
      "Confirm vintage on the MLS sheet",
      "Del Webb rec programming",
    ],
    description:
      "Del Webb campus at Lake Las Vegas — confirm year built, HOA, and lake-access rules on the listing.",
    color: "blue",
  },
  {
    name: "Heritage at Stonebridge",
    slug: "heritage-stonebridge",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: HOA_CONFIRM,
    priceRange: LIVE_CMA,
    homes: "Confirm HOA count",
    amenities: ["Clubhouse", "Pool & spa", "Fitness", "Social clubs"],
    highlights: [
      "Summerlin 55+ campus",
      "Guard-gated entry",
      "Smaller campus than Sun City",
      "Near Downtown Summerlin",
    ],
    description:
      "Heritage at Stonebridge is a smaller Summerlin 55+ campus with a guard-gated entry. Confirm HOA and occupancy on resale docs.",
    color: "purple",
  },
  {
    name: "Solera at Anthem",
    slug: "solera-anthem",
    location: "Henderson",
    ageRequirement: "55+ (all residents)",
    hoaFees: HOA_CONFIRM,
    priceRange: LIVE_CMA,
    homes: "Confirm HOA count",
    amenities: ["Guard-gated", "Clubhouse", "Fitness", "Tennis"],
    highlights: [
      "Guard-gated entry",
      "Smaller campus than Sun City Anthem",
      "Confirm HOA vs larger Del Webb campuses",
      "Henderson location",
    ],
    description:
      "Smaller Henderson 55+ campus with a guard-gated entry. Confirm HOA vs Sun City Anthem before you bid.",
    color: "teal",
  },
  {
    name: "Trilogy at Summerlin",
    slug: "trilogy-summerlin",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: HOA_CONFIRM,
    priceRange: LIVE_CMA,
    homes: "Confirm HOA count",
    amenities: ["On-site restaurant", "Spa", "Fitness", "Community pool"],
    highlights: [
      "On-site dining (confirm hours)",
      "Spa and fitness campus",
      "One-story and two-story plans",
      "Summerlin 55+ occupancy rules",
    ],
    description:
      "Trilogy at Summerlin is a 55+ campus with on-site dining and a rec building. Confirm HOA, dining, and occupancy in the resale packet.",
    color: "rose",
  },
  {
    name: "Siena",
    slug: "siena",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: HOA_CONFIRM,
    priceRange: LIVE_CMA,
    homes: "Confirm HOA count",
    amenities: ["Golf course", "Pools", "Fitness", "Social clubs"],
    highlights: [
      "Summerlin South 55+ campus in ZIP 89135",
      "Guard-gated; golf club is a separate question",
      "Sunrise Company development, not Del Webb",
      "Confirm occupancy in the current CC&Rs",
    ],
    description:
      "Siena is a guard-gated 55+ campus in Summerlin South (89135). Sunrise Company built it. Confirm HOA, golf-club dues, and occupancy on resale docs — I will not invent a home count.",
    color: "slate",
  },
];

const communityBenefits = [
  {
    icon: HomeIcon,
    title: "HOA exterior items — confirm the packet",
    description:
      "Roof, paint, and landscaping are not one HOA. Confirm what the current budget actually covers before you bid.",
  },
  {
    icon: Star,
    title: "Rec campuses",
    description:
      "Golf, pools, fitness, and clubhouses vary by HOA. Confirm which are on the dues budget.",
  },
  {
    icon: Calendar,
    title: "Rec calendar",
    description:
      "Clubs and events vary by campus. Confirm the current calendar in the HOA packet before you bid.",
  },
  {
    icon: Shield,
    title: "Guard-gated entries",
    description:
      "Many communities offer guard-gated entries. Confirm access rules and guest policies in the CC&Rs.",
  },
  {
    icon: DollarSign,
    title: "Nevada wage income tax",
    description:
      "Nevada has no state income tax on wages. Federal tax still applies. Confirm property tax, HOA, and insurance on the APN — not a “tax-free retirement” slogan.",
  },
  {
    icon: Sun,
    title: "Outdoor rec most months",
    description:
      "Golf, pickleball, and pool calendars run most of the year. Confirm seasonal HOA hours on the rec campus.",
  },
];

export default function FiftyFiveCommunitiesPage() {
  return (
    <>
      <SchemaScript
        id="webpage-schema"
        schema={generateWebPageSchema({
          name: "Las Vegas 55+ Communities",
          description:
            "55+ HOPA communities in Las Vegas and Henderson including Sun City, Siena, Trilogy, Del Webb, and Henderson campuses. Dr. Jan Duffy. Call (702) 222-1964.",
          url: "/55-plus-communities",
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun className="h-4 w-4 mr-2" aria-hidden="true" />
              55+ HOPA communities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas 55+ Communities
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.fiftyFivePlus.src}
              alt={PAGE_HERO_IMAGES.fiftyFivePlus.alt}
            />
            <p className="text-xl md:text-2xl text-pretty text-slate-600 mb-8">
              Sun City, Siena, Del Webb, Heritage at Stonebridge & more—
              <br className="hidden md:block" />
              <strong>
                HOPA occupancy, HOA, and live MLS — not a campus slogan
              </strong>
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <a
                href={CTA_TEL}
                className="inline-flex min-h-11 items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                Call {CTA_PHONE}
              </a>
              <a
                href={AGENT_EMAIL_MAILTO}
                className="inline-flex min-h-11 items-center justify-center bg-slate-100 text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-200 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                {AGENT_EMAIL}
              </a>
              <a
                href={REALSCOUT_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center bg-slate-100 text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-200 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Explore Communities
                <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div className="mt-8">
              <MlsSearchForm inputId="mls-q-55-plus" />
            </div>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Las Vegas 55+ snapshot | {MARKET_SNAPSHOT_AS_OF}
            </h2>
            <p className="mb-8 text-center text-sm text-slate-300">
              {MARKET_SNAPSHOT_SOURCE}. Listing medians, not a CMA.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.sunCitySummerlin)}
                </div>
                <div className="text-slate-300 text-sm">
                  Sun City Summerlin listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.sunCityAnthem)}
                </div>
                <div className="text-slate-300 text-sm">
                  Sun City Anthem listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">HOPA</div>
                <div className="text-slate-300 text-sm">
                  80% 55+ occupancy rule
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  CMA
                </div>
                <div className="text-slate-300 text-sm">
                  HOA and age rules vary
                </div>
              </div>
            </div>
          </section>

          {/* California Relocator Section */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-8">
              <div className="flex items-start">
                <Palmtree
                  className="h-10 w-10 text-amber-600 mr-4 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Relocating from California?
                  </h3>
                  <p className="text-lg text-slate-700 mb-4">
                    Many 55+ buyers are relocating from California. Nevada has
                    no wage income tax. Pair your California sale against live
                    Las Vegas 55+ comps. Confirm HOA, insurance, and commute
                    before you assume total cost of living is lower.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        0%
                      </div>
                      <div className="text-sm text-slate-600">
                        State Income Tax
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        Pair comps
                      </div>
                      <div className="text-sm text-slate-600">
                        Not a 50–60% slogan
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        LAS
                      </div>
                      <div className="text-sm text-slate-600">
                        Flights — time your own itinerary
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">
                    Sell a California house and pair live Las Vegas 55+ comps
                    before you assume cash left over. Nevada has no state income
                    tax on wages; federal tax still applies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Rec campus amenities */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
              avoidSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
            >
              What 55+ HOPA campuses in Las Vegas actually include
            </SectionHeading>
            <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              55+ HOPA communities pair rec campuses, golf, and one-story floor
              plans with named ZIPs. Confirm occupancy rules on the resale docs
              before you bid.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Age Requirements */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Users
                  className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Understanding 55+ Age Requirements
                  </h3>
                  <div className="text-slate-700 space-y-3">
                    <p>
                      <strong>Federal HOPA Guidelines:</strong> At least 80% of
                      occupied units must have one resident 55 or older. The
                      remaining 20% can include younger residents, though
                      individual communities may be more restrictive.
                    </p>
                    <p>
                      <strong>Spouse/Partner Rules:</strong> Most communities
                      allow a spouse or partner under 55 to reside with a
                      qualifying resident. Minimum ages for non-qualifying
                      residents are in the current CC&Rs — I will not publish a
                      40–45 slogan.
                    </p>
                    <p className="text-blue-800 font-medium">
                      Each community has specific rules. Dr. Jan Duffy provides
                      detailed guidance on requirements for any community you're
                      considering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Communities Grid */}
          <section id="communities" className="mb-16 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
              avoidSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
            >
              Las Vegas 55+ Communities
            </SectionHeading>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.fiftyFivePlus.src}
              alt={PAGE_HERO_IMAGES.fiftyFivePlus.alt}
              size="section"
              className="mx-auto mb-8 max-w-4xl"
            />
            <p className="text-lg text-slate-600 text-center mb-8">
              Click "View Homes" to explore each community in detail
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {community.slug ? (
                    <div className="relative h-40">
                      <Image
                        src={getNeighborhoodImage(community.slug).src}
                        alt={getNeighborhoodImage(community.slug).alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative h-40">
                      <Image
                        src={PAGE_HERO_IMAGES.fiftyFivePlus.src}
                        alt={PAGE_HERO_IMAGES.fiftyFivePlus.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="bg-slate-900 text-white p-6">
                    <h3 className="text-xl font-bold mb-1">{community.name}</h3>
                    <div className="flex items-center text-slate-300 text-sm">
                      <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                      {community.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">
                      {community.description}
                    </p>

                    {/* Key Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {community.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Listing snapshot
                        </div>
                        <div className="font-bold text-slate-900 text-sm">
                          {community.priceRange}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          HOA Fees
                        </div>
                        <div className="font-bold text-slate-900">
                          {community.hoaFees}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Age Requirement
                        </div>
                        <div className="font-bold text-slate-900 text-sm">
                          {community.ageRequirement}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Community Size
                        </div>
                        <div className="font-bold text-slate-900">
                          {community.homes}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                        Highlights
                      </div>
                      <ul className="space-y-1 mb-4">
                        {community.highlights.slice(0, 3).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start text-sm text-slate-600"
                          >
                            <CheckCircle
                              className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {community.slug ? (
                      <Link
                        href={`/55-plus-communities/${community.slug}`}
                        className="block min-h-11 text-center bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                      >
                        View {community.name} guide
                      </Link>
                    ) : (
                      <a
                        href={CTA_TEL}
                        className="block min-h-11 text-center bg-slate-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-slate-700 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                      >
                        Call for {community.name} Info
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Amenities Overview */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
              avoidSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
            >
              What 55+ Community Amenities Include
            </SectionHeading>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell
                    className="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Fitness & Recreation
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Fitness centers (confirm equipment list)</li>
                  <li>• Indoor & outdoor pools</li>
                  <li>• Tennis & pickleball courts</li>
                  <li>• Golf — confirm on the HOA packet</li>
                  <li>• Walking/biking trails</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Social & Activities
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Club calendars — confirm in the HOA packet</li>
                  <li>• Organized travel groups</li>
                  <li>• Classes (art, dance, computers)</li>
                  <li>• Card rooms & game nights</li>
                  <li>• Community events & parties</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield
                    className="h-6 w-6 text-purple-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Guard-gated entries & HOA maintenance
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Guard-gated entries — confirm on the HOA packet</li>
                  <li>• Exterior maintenance — confirm what the HOA covers</li>
                  <li>• On-site restaurants (select campuses)</li>
                  <li>• Named hospital campuses — confirm drive time</li>
                  <li>
                    • Front desk or concierge on some campuses — confirm in HOA
                    docs
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Agent note */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Buying in a 55+ community involves HOA rules, HOPA occupancy,
                and rec-campus access — not a lifestyle slogan. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent I write
                those items into the showing plan, walk the rec campus, and
                review the HOA packet before you bid. Many clients are
                relocating from California. Call (702) 222-1964 or email
                homes@heyberkshire.com with the community name."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada
                Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
            >
              55+ Community Buying FAQs
            </SectionHeading>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle
                    className="h-5 w-5 text-blue-600 mr-2"
                    aria-hidden="true"
                  />
                  What are the age requirements for 55+ communities in Las
                  Vegas?
                </h3>
                <p className="text-slate-600">
                  Per the Housing for Older Persons Act (HOPA), at least 80% of
                  occupied units must have one resident 55 or older. Some
                  campuses require every occupant to be 55+. Whether a younger
                  spouse may occupy is in the current CC&Rs — I will not treat
                  “most communities” as your HOA.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle
                    className="h-5 w-5 text-blue-600 mr-2"
                    aria-hidden="true"
                  />
                  Can I buy in a 55+ community if I'm under 55?
                </h3>
                <p className="text-slate-600">
                  Generally no. Some files allow a purchase if you will be 55 by
                  close of escrow, or as an investor who will rent to 55+
                  occupants. Confirm the CC&Rs. Dr. Jan Duffy reads the packet
                  with you.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle
                    className="h-5 w-5 text-blue-600 mr-2"
                    aria-hidden="true"
                  />
                  What do HOA fees cover in 55+ communities?
                </h3>
                <p className="text-slate-600">
                  HOA fees typically cover clubhouse access, pools, fitness,
                  landscaping, and exterior maintenance. Golf memberships are
                  often separate. I will not publish a monthly dollar band as if
                  it were your HOA — request the current budget, reserve study,
                  and resale package.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle
                    className="h-5 w-5 text-blue-600 mr-2"
                    aria-hidden="true"
                  />
                  Why do California residents choose Las Vegas 55+ communities?
                </h3>
                <p className="text-slate-600">
                  No Nevada state income tax on wages. Purchase prices are often
                  lower than coastal California on a like-for-like house — I
                  pair comps, I do not promise a 50% discount. Confirm HOA,
                  insurance, and commute before you assume total cost of living
                  is lower.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle
                    className="h-5 w-5 text-blue-600 mr-2"
                    aria-hidden="true"
                  />
                  Can grandchildren visit or stay in 55+ communities?
                </h3>
                <p className="text-slate-600">
                  Guest-stay limits and under-age occupancy vary by HOA. Confirm
                  days per year in the current CC&Rs. Dr. Jan Duffy reads the
                  packet with you before you bid.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle
                    className="h-5 w-5 text-blue-600 mr-2"
                    aria-hidden="true"
                  />
                  How do I get current 55+ listings or a CMA?
                </h3>
                <p className="text-slate-600">
                  Call (702) 222-1964 or email homes@heyberkshire.com with the
                  campus name. I send live MLS — not a campus slogan.
                </p>
              </div>
            </div>
          </section>

          {/* Why BHHS */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-6 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.about.src}
              avoidSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
            >
              How Dr. Jan Duffy works 55+ files
            </SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <CheckCircle
                    className="h-5 w-5 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    HOPA and HOA files
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Age verification, HOA reserves, occupancy rules, and
                    rec-campus access go in the packet before you bid — not
                    after.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Relocation Support
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Many 55+ buyers relocate from out of state. BHHS referrals,
                    video tours, and the current CC&Rs go in the packet before
                    you fly.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Shield
                    className="h-5 w-5 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Written plan
                  </h3>
                  <p className="text-slate-600 text-sm">
                    BHHS Nevada Properties is a franchise. Compensation, HOA
                    occupancy, and the showing plan go in writing — not a brand
                    slogan.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <DollarSign
                    className="h-5 w-5 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Written occupancy and HOA facts
                  </h3>
                  <p className="text-slate-600 text-sm">
                    HOPA occupancy rules and HOA dues go in writing before you
                    tour. Take the time the file needs; the facts stay on paper.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <VisitOffice compact />
          <PageCTA
            headline="Match the 55+ campus to the street"
            subheadline="Sun City Summerlin, Siena, Sun City Anthem, Trilogy, Heritage, Solera, and Del Webb Lake Las Vegas are different HOAs. Call or email with the community name."
            className="rounded-2xl"
            formSource="55-plus-hub"
            formHeading="Ask about a 55+ community"
          />
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
