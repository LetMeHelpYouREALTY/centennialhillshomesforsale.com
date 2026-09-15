import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { MapPin, Home, Clock } from "lucide-react";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";
import { PAGE_HERO_IMAGES, getNeighborhoodImage } from "@/lib/site-images";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import SchemaScript, { FAQSchema } from "@/components/SchemaScript";
import Image from "next/image";
import { generateWebPageSchema } from "@/lib/schema";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import { GuideLeadForm } from "@/components/forms/GuideLeadForm";
import { HubConversionLinks } from "@/components/shared/HubConversionLinks";

export function generateMetadata(): Metadata {
  return withShareImage(
    {
      title: "Las Vegas Neighborhoods | Centennial Hills, Summerlin",
      description:
        "Centennial Hills, Inspirada, Tournament Hills, 89144, 89138, and Siena 55+ guides from Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
      keywords: [
        "centennial hills real estate",
        "inspirada henderson",
        "tournament hills real estate",
        "89144 homes for sale",
        "89138 homes for sale",
        "Siena Summerlin",
      ],
    },
    PAGE_HERO_IMAGES.homepage,
  );
}

const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    medianPrice: `${formatUsd(LISTING_MEDIANS_USD.summerlinNorth)} North`,
    priceNote: "Listing median · realtor.com",
    description:
      "Howard Hughes master plan — villages and ZIPs are not interchangeable",
    highlights: [
      "Trail network",
      "Red Rock access",
      "Downtown Summerlin",
      "Village ZIPs",
    ],
    bestFor: "Parks, trails, and Downtown Summerlin access",
  },
  {
    name: "Henderson",
    slug: "henderson",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.hendersonListing),
    priceNote: "City listing median · realtor.com",
    description:
      "Nevada's second-largest city — Green Valley, Inspirada, Anthem, Lake Las Vegas",
    highlights: [
      "City parks",
      "Lake Las Vegas",
      "Green Valley",
      "Master plans",
    ],
    bestFor: "Henderson parks, trails, and lake access",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.greenValleySouth),
    priceNote: "GV South listing median · realtor.com",
    description:
      "1980s–90s Henderson streets, mature trees, The District at Green Valley Ranch",
    highlights: [
      "Finished streets",
      "Walking trails",
      "The District",
      "Mature trees",
    ],
    bestFor: "The District, trails, and 1980s–90s Henderson streets",
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    medianPrice: "Ask CMA",
    priceNote: "Custom · thin inventory",
    description:
      "Guard-gated Summerlin custom villages — price from live comps, not a headline",
    highlights: [
      "Guard-gated",
      "Custom estates",
      "Architectural controls",
      "View lots",
    ],
    bestFor: "Summerlin custom and estate buyers",
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.southernHighlands),
    priceNote: "Listing median · realtor.com",
    description:
      "Southwest Las Vegas golf community with open and guard-gated sections",
    highlights: [
      "Golf community",
      "Guard-gated sections",
      "Mountain views",
      "89141",
    ],
    bestFor: "Golf, mountain views, and gated access",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.northLasVegas),
    priceNote: "City listing median · realtor.com",
    description:
      "Separate city — Aliante, Tule Springs, Valley Vista, plus in-fill resale",
    highlights: ["New construction", "Aliante", "Tule Springs", "I-15 access"],
    bestFor: "New construction and I-15 commute",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    medianPrice: "Ask CMA",
    priceNote: "Newer NW production",
    description:
      "Newer northwest master plan around Skye Center, near Floyd Lamb Park",
    highlights: ["Newer homes", "Skye Center", "89166", "NW trail access"],
    bestFor: "Northwest Las Vegas newer inventory",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.centennialHills),
    priceNote: "Listing median · realtor.com",
    description:
      "Northwest Las Vegas community near Centennial Hills Park and Town Center",
    highlights: ["89149", "Park", "Town Center", "US-95"],
    bestFor: "Northwest Las Vegas, park and Town Center access",
  },
  {
    name: "Lone Mountain",
    slug: "lone-mountain",
    medianPrice: "Ask CMA",
    priceNote: "Views/lots",
    description:
      "Northwest lots and view streets next to the Centennial Hills corridor",
    highlights: ["Mountain views", "Larger lots", "US-95 access", "Resale mix"],
    bestFor: "Buyers comparing northwest Las Vegas lot size",
  },
  {
    name: "Tournament Hills",
    slug: "tournament-hills",
    medianPrice: "Ask CMA",
    priceNote: "Thin inventory",
    description:
      "Guard-gated Summerlin custom homes near TPC (89134) — not Centennial Hills",
    highlights: ["89134", "TPC Summerlin", "Custom lots", "Gated"],
    bestFor: "Summerlin luxury buyers",
  },
  {
    name: "Summerlin West",
    slug: "summerlin-west",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
    priceNote: "Listing median · realtor.com",
    description:
      "Later Howard Hughes villages including Reverence in ZIP 89138",
    highlights: ["89138", "Reverence", "Newer plans", "Foothill views"],
    bestFor: "Summerlin West / 89138 searchers",
  },
  {
    name: "89138 Summerlin West",
    slug: "89138",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
    priceNote: "Summerlin West listing median · realtor.com",
    description:
      "ZIP page for Summerlin West and Reverence — not Centennial Hills 89149",
    highlights: ["89138", "Reverence", "Summerlin West", "Newer vintage"],
    bestFor: "Homes for sale in 89138",
  },
  {
    name: "89144 Summerlin",
    slug: "89144",
    medianPrice: "Ask CMA",
    priceNote: "Not Centennial Hills",
    description:
      "The Arbors, Trails, and Queensridge — Summerlin ZIP, not Centennial Hills",
    highlights: ["89144", "Summerlin", "Arbors/Trails", "Queensridge"],
    bestFor: "89144 zip code homes for sale",
  },
  {
    name: "Groves at Inspirada",
    slug: "groves-at-inspirada",
    medianPrice: "Townhomes",
    priceNote: "Resale only",
    description:
      "KB Home townhomes inside Inspirada Henderson — new construction closed",
    highlights: ["89044", "KB Home", "Townhomes", "Aventura Park nearby"],
    bestFor: "Groves at Inspirada searchers",
  },
  {
    name: "Red Rock Country Club",
    slug: "red-rock-country-club",
    medianPrice: "Ask CMA",
    priceNote: "Golf community",
    description: "Two-course Summerlin golf community in 89135",
    highlights: ["89135", "Two courses", "Gated", "Mixed product"],
    bestFor: "Golf-community buyers",
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.inspirada),
    priceNote: "Listing median · realtor.com",
    description:
      "Henderson 89044 master plan — Groves townhomes, Aventura Park, final new-construction pods",
    highlights: [
      "89044",
      "Parks",
      "Groves townhomes",
      "Tri Pointe / KB / Toll",
    ],
    bestFor: "Henderson new construction and resale",
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.mountainsEdge),
    priceNote: "Listing median · realtor.com",
    description: "Southwest Las Vegas master plan around Exploration Peak Park",
    highlights: ["Exploration Peak", "Parks", "I-215", "89178 / 89179"],
    bestFor: "Southwest Las Vegas commuters",
  },
];

const neighborhoodFaqs = [
  {
    question: "Is 89144 the same as Centennial Hills?",
    answer:
      "No. 89144 is Summerlin (The Arbors, Trails, Queensridge). Centennial Hills is 89149, 89131, and 89143. Call (702) 222-1964 or email homes@heyberkshire.com before you tour the wrong ZIP.",
  },
  {
    question: "Where should I start if I am relocating?",
    answer:
      "Start with commute, HOA, and a live CMA on the address — not a city slogan. The neighborhood guides list square footage, amenities, and drive times.",
  },
  {
    question: "Do these pages include live MLS?",
    answer:
      "Each neighborhood guide can load live RealScout inventory. You can also search from /listings, email homes@heyberkshire.com, or call (702) 222-1964 with the village name.",
  },
  {
    question: "How do I get a CMA for a specific street?",
    answer:
      "Email homes@heyberkshire.com or call (702) 222-1964 with the address. City and village listing medians on these pages are not a CMA.",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <SchemaScript
        id="webpage-schema"
        schema={generateWebPageSchema({
          name: "Las Vegas Neighborhoods",
          description:
            "Centennial Hills, Inspirada, Tournament Hills, 89138, Siena 55+, Summerlin, and Henderson guides from Dr. Jan Duffy.",
          url: "/neighborhoods",
        })}
      />
      <FAQSchema faqs={neighborhoodFaqs} />
      <div className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
              Las Vegas & Henderson Neighborhoods
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.homepage.src}
              alt="Las Vegas and Henderson neighborhood street with desert mountain views"
            />
            <p className="text-pretty text-xl text-slate-600">
              Centennial Hills, Inspirada, Tournament Hills, 89144, 89138, and
              Siena 55+ are different maps. Listing medians below are from
              realtor.com as of {MARKET_SNAPSHOT_AS_OF} — not a CMA. Pick the
              guide that matches the street.
            </p>
            <section
              className="mt-8"
              aria-labelledby="neighborhoods-mls-heading"
            >
              <SectionHeading
                id="neighborhoods-mls-heading"
                className="mb-3 text-2xl font-bold text-slate-900"
                fallbackSrc={PAGE_HERO_IMAGES.listings.src}
                avoidSrc={PAGE_HERO_IMAGES.homepage.src}
              >
                Search live MLS
              </SectionHeading>
              <p className="mb-4 text-pretty text-slate-600">
                ZIP, street, or community. Submits to current listings — not a
                scraped sample.
              </p>
              <MlsSearchForm inputId="mls-q-neighborhoods" />
            </section>
            <div className="mx-auto mt-8 max-w-3xl text-left">
              <GuideLeadForm
                source="neighborhoods-hub-mid"
                heading="Ask about a neighborhood"
                className="mb-0"
              />
            </div>
            <HubConversionLinks />
          </div>

          {/* Neighborhood Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionHeading
              className="mb-8 text-center text-3xl font-bold text-slate-900"
              fallbackSrc={PAGE_HERO_IMAGES.homepage.src}
              avoidSrc={PAGE_HERO_IMAGES.homepage.src}
            >
              Las Vegas and Henderson neighborhood guides
            </SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white no-underline transition-shadow hover:border-blue-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-11"
                >
                  {(() => {
                    const photo = getNeighborhoodImage(neighborhood.slug);
                    return (
                      <div className="relative h-40">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    );
                  })()}
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                          {neighborhood.name}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {neighborhood.bestFor}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">
                          {neighborhood.medianPrice}
                        </div>
                        <div className="text-xs text-slate-600">
                          {neighborhood.priceNote}
                        </div>
                      </div>
                    </div>
                    <p className="mb-4 text-pretty text-sm text-slate-600">
                      {neighborhood.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {neighborhood.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto text-center">
            <SectionHeading
              className="mb-4 text-2xl font-bold text-slate-900"
              fallbackSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
            >
              55+ HOPA campuses are a different map
            </SectionHeading>
            <p className="mb-6 text-pretty text-slate-600">
              Sun City, Trilogy, Heritage, Solera, Siena, and Del Webb Lake Las
              Vegas have occupancy rules that all-ages neighborhood guides do
              not. Open the 55+ hub, or email homes@heyberkshire.com with the
              campus name.
            </p>
            <Link
              href="/55-plus-communities"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Las Vegas 55+ communities
            </Link>
          </section>

          {/* Neighborhood quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Every Las Vegas ZIP has a different commute and HOA stack. I
                will not send you to 89144 when you asked for Centennial Hills,
                or to Groves when you asked for a detached Inspirada lot. That
                is the job."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Neighborhood Services */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              How I actually tour villages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin
                  className="h-12 w-12 text-blue-400 mx-auto mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-bold mb-2">Village tours</h3>
                <p className="text-slate-300 text-sm">
                  I sequence named villages in one loop. Confirm HOA, commute,
                  and lot before you bid.
                </p>
              </div>
              <div className="text-center">
                <Clock
                  className="h-12 w-12 text-blue-400 mx-auto mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-bold mb-2">Campus maps</h3>
                <p className="text-slate-300 text-sm">
                  Named campuses, enrollment boundaries, and drive-time to the
                  streets you are touring—not a slogan.
                </p>
              </div>
              <div className="text-center">
                <Home
                  className="h-12 w-12 text-blue-400 mx-auto mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-bold mb-2">ZIP matching</h3>
                <p className="text-slate-300 text-sm">
                  Match beds, ZIP, commute, and budget in the villages you are
                  actually touring
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.homepage.src}
              avoidSrc={PAGE_HERO_IMAGES.homepage.src}
            >
              Frequently asked questions
            </SectionHeading>
            <div className="space-y-4">
              {neighborhoodFaqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-slate-50 p-6">
                  <h3 className="mb-2 font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-pretty text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <GoogleReviewsCta className="mb-16 rounded-2xl bg-white" />
          <VisitOffice compact />
          <PageCTA
            headline="Need help matching a street to a ZIP?"
            subheadline="Call or email with the village name. I will not send you to 89144 when you asked for Centennial Hills."
            className="rounded-2xl"
            formSource="neighborhoods-hub"
            formHeading="Ask about a neighborhood"
          />
        </div>
      </div>
      <RealScoutListings />
    </>
  );
}
