import Link from "next/link";
import {
  MapPin,
  DollarSign,
  TrendingUp,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import { FAQSchema } from "@/components/SchemaScript";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import {
  CTA_PHONE,
  CTA_TEL,
  REALSCOUT_SEARCH_URL,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title:
      "Las Vegas Homes for Sale | MLS Property Search | Berkshire Hathaway HomeServices",
    description:
      "Browse all Las Vegas and Henderson homes for sale with live MLS listings. Search by neighborhood, price, and features. Dr. Jan Duffy, Berkshire Hathaway HomeServices. Call (702) 222-1964.",
    keywords: [
      "Las Vegas homes for sale",
      "Henderson real estate",
      "MLS listings Las Vegas",
      "Summerlin homes",
      "houses for sale Las Vegas",
      "Berkshire Hathaway listings",
    ],
  },
  PAGE_HERO_IMAGES.listings,
);

const listingsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Las Vegas MLS Property Listings",
  description:
    "Live MLS property search for Las Vegas, Henderson, and Summerlin homes for sale",
  url: "https://heyberkshire.com/listings",
  about: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17022221964",
  },
  areaServed: [
    { "@type": "City", name: "Las Vegas, NV" },
    { "@type": "City", name: "Henderson, NV" },
    { "@type": "Place", name: "Summerlin, NV" },
  ],
};

const listingFaqs = [
  {
    question: "How competitive is the Las Vegas housing market in 2026?",
    answer:
      "The Las Vegas market moves by village and by week. I will not invent a months-of-inventory figure. Well-priced houses in Summerlin and Henderson can still draw multiple offers. Get a pre-approval and a live MLS pull before you tour.",
  },
  {
    question: "What's the best time of year to buy a home in Las Vegas?",
    answer:
      "Las Vegas has a year-round real estate market, but inventory typically peaks in spring (March-May) while competition is lowest in winter (November-January). The best time depends on your priorities: more selection in spring, potentially better deals in winter.",
  },
  {
    question: "How much do I need for a down payment in Las Vegas?",
    answer:
      "Down payment requirements vary by loan type: FHA loans require 3.5%, conventional loans typically 3-20%, VA loans 0% for eligible veterans. Nevada also offers down payment assistance programs. Dr. Jan can introduce Clark County lenders. Rates are UNKNOWN until the lender quotes them.",
  },
  {
    question: "Are Las Vegas HOA fees expensive?",
    answer:
      "HOA dues are on the resale packet, not a sitewide band. I will not publish a valley-wide monthly range as if it were your community. Ask for the current budget, reserves, and any special assessment before you write the offer.",
  },
];

const popularSearches = [
  {
    name: "Summerlin Homes",
    href: "/neighborhoods/summerlin",
    note: "Open the Summerlin guide",
  },
  {
    name: "Henderson Properties",
    href: "/neighborhoods/henderson",
    note: "Open the Henderson guide",
  },
  {
    name: "Green Valley",
    href: "/neighborhoods/green-valley",
    note: "Open the Green Valley guide",
  },
  {
    name: "The Ridges Luxury",
    href: "/neighborhoods/the-ridges",
    note: "Open The Ridges guide",
  },
  { name: "55+ Communities", href: "/55-plus-communities", note: "55+ hub" },
  {
    name: "New Construction",
    href: "/new-construction",
    note: "Builder pages",
  },
];

const priceRanges = [
  {
    range: "Under $400K",
    description: "Condos, townhomes, and some detached resale",
  },
  {
    range: "$400K - $600K",
    description: "Detached resale and townhomes in current MLS bands",
  },
  {
    range: "$600K - $1M",
    description: "Larger homes and later-phase master-plan product",
  },
  {
    range: "$1M - $2M",
    description: "Luxury homes and guard-gated communities",
  },
  {
    range: "$2M+",
    description: "Custom estates — confirm with a live CMA",
  },
];

const neighborhoods = [
  {
    name: "Summerlin North",
    href: "/neighborhoods/summerlin",
    description:
      "Master-planned streets with Red Rock views, parks, and Downtown Summerlin",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.summerlinNorth),
    medianNote: "Listing median",
  },
  {
    name: "Henderson",
    href: "/neighborhoods/henderson",
    description:
      "Nevada's second-largest city — parks, trails, and multiple master plans",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.hendersonListing),
    medianNote: "Listing median",
  },
  {
    name: "Green Valley South",
    href: "/neighborhoods/green-valley",
    description:
      "Henderson landscaping, golf-course streets, and master-plan villages",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.greenValleySouth),
    medianNote: "Listing median",
  },
  {
    name: "Southern Highlands",
    href: "/neighborhoods/southern-highlands",
    description: "Guard-gated luxury community with golf and mountain views",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.southernHighlands),
    medianNote: "Listing median",
  },
  {
    name: "North Las Vegas",
    href: "/neighborhoods/north-las-vegas",
    description: "Newer production inventory and growing infrastructure",
    medianPrice: formatUsd(LISTING_MEDIANS_USD.northLasVegas),
    medianNote: "Listing median",
  },
  {
    name: "Skye Canyon",
    href: "/neighborhoods/skye-canyon",
    description:
      "Northwest master-plan with modern amenities — price any bid with a live CMA",
    medianPrice: "Live CMA",
    medianNote: "No sourced ZIP median",
  },
];

export default function ListingsPage({
  searchParams,
}: {
  searchParams: { q?: string | string[] };
}) {
  const rawQuery = searchParams.q;
  const query =
    (Array.isArray(rawQuery) ? rawQuery[0] : rawQuery)?.trim() ?? "";

  return (
    <>
      <FAQSchema faqs={listingFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingsSchema) }}
      />
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Homes for Sale
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.listings.src}
              alt={PAGE_HERO_IMAGES.listings.alt}
            />
            <p className="text-xl text-slate-600 mb-8">
              Search live Las Vegas, Henderson, and Summerlin MLS inventory
              through RealScout. Counts change by the hour — I will not invent a
              5,000-listing headline. Call Dr. Jan Duffy at{" "}
              <strong>Berkshire Hathaway HomeServices</strong>.
            </p>
            {query ? (
              <p className="mx-auto mb-8 max-w-2xl rounded-lg border border-blue-200 bg-blue-50 p-4 text-left text-slate-800">
                You searched for “{query}”. Live MLS is in the widget below. If
                that phrase does not match a street or ZIP,{" "}
                <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
                  call {CTA_PHONE}
                </a>{" "}
                or{" "}
                <a
                  href={REALSCOUT_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={TEXT_LINK_CLASS}
                >
                  open RealScout
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                .
              </p>
            ) : null}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Live MLS
                via RealScout
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Call{" "}
                {CTA_PHONE}
              </span>
            </div>
          </div>
        </div>

        <RealScoutListings />

        <div className="container mx-auto px-4">
          {/* Popular Searches Section */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.listings.src}
              avoidSrc={PAGE_HERO_IMAGES.listings.src}
            >
              Popular Property Searches in Las Vegas
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Search live MLS across named Las Vegas, Henderson, and Summerlin
              communities by ZIP, square footage, commute, and amenities. Luxury
              estates in guard-gated communities, homes near parks and trails,
              and new construction are all in RealScout. Browse the searches
              below or open a neighborhood guide.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {popularSearches.map((search) => (
                <Link
                  key={search.name}
                  href={search.href}
                  className="flex min-h-11 items-center bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-shadow group justify-between no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600">
                      {search.name}
                    </h3>
                    <span className="text-sm text-slate-500">
                      {search.note}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </section>

          {/* Price Range Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.listings.src}
              avoidSrc={PAGE_HERO_IMAGES.listings.src}
            >
              Las Vegas Home Price Guide
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Nevada charges no state income tax on wages. Home-price
              differences versus coastal cities are not a fixed 40–60% on every
              street — I pair live comps. Here's what you can expect at
              different price points in the current {MARKET_SNAPSHOT_AS_OF}{" "}
              market. Search live MLS for current counts.
            </p>
            <div className="space-y-4">
              {priceRanges.map((price) => (
                <div
                  key={price.range}
                  className="bg-white rounded-lg p-4 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between"
                >
                  <div className="flex items-center mb-2 md:mb-0">
                    <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {price.range}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {price.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-semibold">
                    Search live MLS
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Neighborhood Overview */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.listings.src}
              avoidSrc={PAGE_HERO_IMAGES.listings.src}
            >
              Las Vegas Neighborhoods & Communities
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Summerlin, Henderson, Centennial Hills, and North Las Vegas differ
              by ZIP, commute, HOA, and square footage. As a Berkshire Hathaway
              HomeServices agent serving Las Vegas since 2008, Dr. Jan Duffy
              matches those facts — not school slogans or a “family-friendly”
              pitch.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.name}
                  href={neighborhood.href}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-11"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {neighborhood.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {neighborhood.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      {neighborhood.medianNote}:{" "}
                      <strong className="tabular-nums text-slate-900">
                        {neighborhood.medianPrice}
                      </strong>
                    </span>
                    <span className="text-blue-700 font-semibold">
                      Open guide
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/neighborhoods"
                className="inline-flex min-h-11 items-center text-blue-600 hover:text-blue-700 font-semibold no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Explore All Neighborhoods{" "}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Why Use an Agent Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Work With a Berkshire Hathaway HomeServices Agent
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              In today's Las Vegas market, representation is a written buyer
              agreement and a live MLS pull. Dr. Jan Duffy brings Berkshire
              Hathaway HomeServices marketing and referral tools plus street-
              level knowledge from serving Las Vegas since 2008.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">MLS + referral network</h3>
                <p className="text-slate-400 text-sm">
                  See listings through RealScout MLS search and the BHHS
                  referral network — not a 50,000-agent slogan
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Written offer strategy</h3>
                <p className="text-slate-400 text-sm">
                  Street-level CMA math and written offer strategy — not a
                  career-volume slogan
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Street-level files</h3>
                <p className="text-slate-400 text-sm">
                  Commute times, named campuses, and HOA documents on the
                  worksheet — not an insider slogan
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Written buyer agreement</h3>
                <p className="text-slate-400 text-sm">
                  Compensation is disclosed in writing. It may be paid by the
                  seller, the buyer, or both — never assumed.
                </p>
              </div>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.market.src}
              avoidSrc={PAGE_HERO_IMAGES.listings.src}
            >
              Las Vegas Real Estate Market Statistics
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              {MARKET_SNAPSHOT_SOURCE}. Listing medians are not days-on-market
              and are not a CMA. Ask for a live pull before you bid.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.lasVegas)}
                </div>
                <div className="text-sm text-slate-600">LV listing median</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.hendersonListing)}
                </div>
                <div className="text-sm text-slate-600">
                  Henderson listing median
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.centennialHills)}
                </div>
                <div className="text-sm text-slate-600">
                  Centennial Hills listing median
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {MARKET_SNAPSHOT_AS_OF}
                </div>
                <div className="text-sm text-slate-600">As of date</div>
              </div>
            </div>
          </section>

          {/* Home Buying Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.buyers.src}
              avoidSrc={PAGE_HERO_IMAGES.listings.src}
            >
              The Home Buying Process in Las Vegas
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Buying a home is one of the most significant financial decisions
              you'll make. Understanding the process helps reduce stress and
              ensures you're prepared at each step. Here's what to expect when
              purchasing a home in Las Vegas with Dr. Jan Duffy and Berkshire
              Hathaway HomeServices.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Get Pre-Approved for Financing
                  </h3>
                  <p className="text-slate-600 text-sm">
                    A pre-approval letter shows sellers you can close and gives
                    you a clear budget. Dr. Jan can introduce Clark County
                    lenders. Rates and fees are UNKNOWN until that lender quotes
                    your file. Timeline is UNKNOWN until the lender has your
                    documents.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Define Your Priorities & Search
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Location, size, features, and budget all factor into your
                    search. Dr. Jan helps you match ZIP, commute, square
                    footage, and amenities, then sets up MLS alerts so new
                    matches land in your inbox.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Tour Properties & Make an Offer
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Visit homes that meet the worksheet, in person or virtually.
                    When a house matches, Dr. Jan writes an offer with price,
                    contingencies, and dates from the comps — not a ranking
                    slogan.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Due Diligence & Inspections
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Once under contract, you'll have time for home inspections,
                    appraisals, and final financing approval. Dr. Jan
                    coordinates with all parties and helps you negotiate repairs
                    or credits if issues arise.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Close & Get Your Keys
                  </h3>
                  <p className="text-slate-600 text-sm">
                    The closing process typically takes 30-45 days from offer
                    acceptance. You'll sign final documents, transfer funds, and
                    receive the keys to your new Las Vegas home. Dr. Jan remains
                    available for any questions even after closing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.listings.src}
            >
              Frequently Asked Questions About Las Vegas Real Estate
            </SectionHeading>
            <div className="space-y-4">
              {listingFaqs.map((faq) => (
                <div key={faq.question} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <VisitOffice compact />
          <PageCTA
            headline="Ready to filter live MLS results?"
            subheadline="Call Dr. Jan Duffy with beds, ZIP, and budget. She will send matching listings — not a scraped dump."
            className="rounded-2xl"
            formSource="listings-hub"
            formHeading="Tell me the ZIP and beds"
            formType="property-search"
          />
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Last updated: September 2026
        </p>
      </main>
    </>
  );
}
