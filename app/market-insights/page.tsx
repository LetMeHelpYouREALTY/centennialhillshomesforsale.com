import RealScoutListings from "@/components/realscout/RealScoutListings";
import SearchCentralFeed from "@/components/sections/SearchCentralFeed";
import Link from "next/link";
import {
  Phone,
  Mail,
  TrendingUp,
  Building2,
  Cpu,
  Globe,
  BarChart3,
  Users,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_PHONE_E164,
  CTA_TEL,
  OFFICE_POSTAL_ADDRESS,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";
import { getSearchCentralPosts } from "@/lib/search-central-feed";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_ISO,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionHeading, SectionPhoto } from "@/components/shared/SectionPhoto";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import SchemaScript, { FAQSchema } from "@/components/SchemaScript";
import { generateWebPageSchema } from "@/lib/schema";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import { GuideLeadForm } from "@/components/forms/GuideLeadForm";

export const revalidate = 3600;

export const metadata: Metadata = withShareImage(
  {
    title: "Centennial Hills Market Insights 2026 | Northwest Las Vegas",
    description:
      "First-party Centennial Hills market insights: 89149 vs 89144, Inspirada new-construction wind-down, and how northwest Las Vegas listings are trading. Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "centennial hills real estate",
      "centennial hills las vegas real estate",
      "las vegas market insights 2026",
    ],
  },
  PAGE_HERO_IMAGES.market,
);

const marketPageSchema = generateWebPageSchema({
  name: "Centennial Hills Market Insights 2026",
  description:
    "First-party Centennial Hills market insights: 89149 vs 89144, Inspirada new-construction wind-down, and northwest Las Vegas listing medians. Call (702) 222-1964 or email homes@heyberkshire.com.",
  url: "/market-insights",
});

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "Centennial Hills Market Insights 2026",
  author: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy",
    telephone: CTA_PHONE_E164,
    email: AGENT_EMAIL,
    address: OFFICE_POSTAL_ADDRESS,
    worksFor: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  datePublished: MARKET_SNAPSHOT_ISO,
  dateModified: MARKET_SNAPSHOT_ISO,
  about: {
    "@type": "Place",
    name: "Centennial Hills, Las Vegas, Nevada",
  },
};

const marketFaqs = [
  {
    question: "Are these numbers a CMA for my house?",
    answer:
      "No. Listing medians are city or ZIP samples. A CMA uses sold comps, active competition, and the specific address. Call (702) 222-1964 or email homes@heyberkshire.com.",
  },
  {
    question: "How current is this page?",
    answer: `Figures are sourced from ${MARKET_SNAPSHOT_SOURCE} as of ${MARKET_SNAPSHOT_AS_OF} unless a section says otherwise.`,
  },
  {
    question: "Will you forecast which neighborhoods will outperform?",
    answer:
      "No. I will not pick winners. Bring the address and I will run live comps.",
  },
  {
    question: "How do I get a live CMA from this page?",
    answer:
      "Call (702) 222-1964 or email homes@heyberkshire.com with the address. I send live MLS — not a citywide slogan. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
  },
];

export default async function MarketInsightsPage() {
  const searchCentralPosts = await getSearchCentralPosts(6);

  return (
    <>
      <SchemaScript id="webpage-schema" schema={marketPageSchema} />
      <FAQSchema faqs={marketFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <div className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4 mr-2" aria-hidden="true" />
              2026 Economic & Real Estate Analysis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Centennial Hills Market Insights
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.market.src}
              alt={PAGE_HERO_IMAGES.market.alt}
            />
            <p className="text-pretty text-xl text-slate-600">
              First-party notes for this website — 89149 vs 89144, Inspirada’s
              remaining new homes, and why a cloned valley-wide report will not
              rank here. Updated {MARKET_SNAPSHOT_AS_OF}.
            </p>
            <div className="mt-8">
              <MlsSearchForm inputId="mls-q-market-insights" />
            </div>
            <div className="mx-auto mt-8 max-w-3xl text-left">
              <GuideLeadForm
                source="market-insights-mid"
                heading="Ask for a live MLS pull"
                formType="property-search"
                className="mb-0"
              />
            </div>
          </div>

          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4"
              fallbackSrc={PAGE_HERO_IMAGES.market.src}
              avoidSrc={PAGE_HERO_IMAGES.market.src}
            >
              What this page is (and is not)
            </SectionHeading>
            <p className="text-slate-700 mb-4">
              Google Search Console listed this URL as a duplicate without a
              user-selected canonical. This page is now a Centennial Hills /
              northwest Las Vegas brief. The{" "}
              <Link href="/market-report" className={TEXT_LINK_CLASS}>
                market report
              </Link>{" "}
              keeps valley-wide stats. The{" "}
              <Link href="/market-update" className={TEXT_LINK_CLASS}>
                market update
              </Link>{" "}
              is the weekly cadence. Each URL self-canonicalizes to this domain.
            </p>
            <p className="text-slate-700 mb-4">
              {MARKET_SNAPSHOT_SOURCE} listed a Centennial Hills neighborhood
              median of {formatUsd(LISTING_MEDIANS_USD.centennialHills)}. That
              is not 89144 Summerlin and it is not Tournament Hills.{" "}
              <Link
                href="/neighborhoods/centennial-hills"
                className={TEXT_LINK_CLASS}
              >
                Centennial Hills homes for sale
              </Link>{" "}
              is the listing page.
            </p>
            <p className="text-slate-700">
              Inspirada (Henderson 89044) was in a final new-construction window
              in mid-2026, with Groves townhomes already on resale. Casino and
              property-management queries that hit this site are not services we
              sell.
            </p>
          </section>

          <SearchCentralFeed items={searchCentralPosts} />

          {/* Key Drivers */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What we can actually cite in 2026
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">
                  {formatUsd(LISTING_MEDIANS_USD.centennialHills)}
                </div>
                <div className="text-slate-300 text-sm">
                  Centennial Hills listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">0%</div>
                <div className="text-slate-300 text-sm">
                  Nevada wage income tax
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  {formatUsd(LISTING_MEDIANS_USD.hendersonListing)}
                </div>
                <div className="text-slate-300 text-sm">
                  Henderson listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  CMA
                </div>
                <div className="text-slate-300 text-sm">
                  Days-on-market is a live pull
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">
                  {formatUsd(LISTING_MEDIANS_USD.lasVegas)}
                </div>
                <div className="text-slate-300 text-sm">
                  Las Vegas city listing median
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              {MARKET_SNAPSHOT_SOURCE} as of {MARKET_SNAPSHOT_AS_OF}. Listing
              medians, not a CMA. I will not invent a CA-buyer share,
              data-center investment total, job-growth rate, or visitor count.
            </p>
          </section>

          {/* Tech Transformation */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Cpu
                className="h-8 w-8 text-purple-600 mr-3"
                aria-hidden="true"
              />
              <h2 className="text-3xl font-bold text-slate-900">
                Henderson data-center corridor
              </h2>
            </div>
            <SectionPhoto
              heading="Henderson data-center corridor"
              fallbackSrc={PAGE_HERO_IMAGES.market.src}
              avoidSrc={PAGE_HERO_IMAGES.market.src}
            />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  Henderson&apos;s data-center corridor hosts operators
                  including Google, Amazon Web Services, and Switch. Confirm
                  current employers and commute on a CMA — I will not invent a
                  job-growth rate or call the valley a tech-hub slogan.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                  Confirm the employer, not the corridor
                </h3>
                <p>
                  A data-center campus is not a listing amenity. Drive time,
                  shift hours, and whether the buyer actually works there belong
                  on the CMA. I will not copy a tech-hub headline onto a
                  Henderson ZIP.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  What I will confirm on a CMA
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">
                      <strong>Henderson demand:</strong> Data-center and
                      medical-corridor jobs keep Henderson on relocation
                      shortlists. I will not invent a year-over-year
                      appreciation figure — ask for a live CMA on the village
                      you want.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">
                      <strong>Remote W-2 files:</strong> Nevada charges no state
                      income tax on wages. Whether a California remote paycheck
                      stays CA-sourced is a CPA question. I will not invent an
                      inbound tech-worker count.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">
                      <strong>Infrastructure on the listing:</strong> Fiber and
                      power vary by street. Confirm what the address has — not a
                      corridor slogan.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* California Migration Deep Dive */}
          <section className="mb-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 mr-3" aria-hidden="true" />
              <h2 className="text-3xl font-bold">
                California Migration Analysis
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-100 mb-6">
                  California is a frequent inbound origin for Las Vegas buyers.
                  I pair your California sale against live comps — I will not
                  invent a buyer-origin share or a typical-equity figure.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">CA inbound</div>
                    <div className="text-blue-50 text-sm">
                      Frequent origin — confirm the latest GLVAR report
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">Your equity</div>
                    <div className="text-blue-50 text-sm">
                      Depends on your California sale, not a slogan
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">Bay Area & LA</div>
                    <div className="text-blue-50 text-sm">
                      Common source markets I tour against
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">
                  What California buyers compare on paper
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">1.</span>
                    <span>
                      <strong>Tax:</strong> Nevada has no wage income tax.
                      California rates are UNKNOWN until your CPA quotes your
                      file.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">2.</span>
                    <span>
                      <strong>Housing costs:</strong> Compare live Las Vegas
                      comps to your California sale — not a 40–60% slogan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">3.</span>
                    <span>
                      <strong>Proximity:</strong> I-15 drive or a LAS flight —
                      time your own itinerary. I will not publish a four-hour /
                      one-hour slogan.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">4.</span>
                    <span>
                      <strong>Climate:</strong> Desert sun and monsoon season —
                      confirm the calendar, not a slogan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">5.</span>
                    <span>
                      <strong>Entertainment:</strong> Dining, shows, and sports
                      you can drive to — confirm the calendar, not a slogan
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/buyers/california-relocator"
                    className="inline-flex min-h-11 items-center bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    California Relocation Guide →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Named employers and venues */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Building2
                className="h-8 w-8 text-green-600 mr-3"
                aria-hidden="true"
              />
              <h2 className="text-3xl font-bold text-slate-900">
                Named employers and venues — not a growth slogan
              </h2>
            </div>
            <SectionPhoto
              heading="Named employers and venues — not a growth slogan"
              fallbackSrc={PAGE_HERO_IMAGES.investment.src}
              avoidSrc={PAGE_HERO_IMAGES.market.src}
            />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">
                  Raiders & Sports
                </h3>
                <p className="text-pretty text-slate-600 text-sm mb-3">
                  Allegiant Stadium hosts Raiders games and events. Golden
                  Knights and Aces play in the valley. Expansion rumors are
                  UNKNOWN until a league announces. Drive time to the venue
                  depends on the street.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Confirm commute to the venue you actually use
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">
                  Healthcare Growth
                </h3>
                <p className="text-pretty text-slate-600 text-sm mb-3">
                  Henderson and Summerlin have named hospital campuses. Confirm
                  commute to the campus you actually use — I will not invent a
                  job-growth rate.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Henderson and Summerlin medical corridors
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">
                  Film & Production
                </h3>
                <p className="text-pretty text-slate-600 text-sm mb-3">
                  Nevada publishes film-incentive rules. Current productions and
                  studio jobs are UNKNOWN on this page until a sourced count
                  exists.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Confirm the current incentive, not a slogan
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhood Forecasts */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <BarChart3
                className="h-8 w-8 text-blue-600 mr-3"
                aria-hidden="true"
              />
              <h2 className="text-3xl font-bold text-slate-900">
                How these villages actually differ
              </h2>
            </div>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.homepage.src}
              alt="Centennial Hills and northwest Las Vegas homes used for this 2026 outlook"
              size="section"
              className="mb-8"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Henderson</h3>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-semibold">
                    {formatUsd(LISTING_MEDIANS_USD.hendersonListing)} listing
                    median
                  </span>
                </div>
                <p className="text-pretty text-slate-600 text-sm mb-3">
                  Tech corridor, parks, trails, and rec campuses keep inbound
                  demand. I will not use a “safety ranking” slogan or an
                  appreciation forecast. Ask for a live CMA on Inspirada, Green
                  Valley Ranch, or MacDonald Highlands.
                </p>
                <div className="text-sm text-slate-600">
                  Tour: Inspirada, MacDonald Highlands, Green Valley Ranch
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Summerlin</h3>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-semibold">
                    {formatUsd(LISTING_MEDIANS_USD.summerlinNorth)} north
                    listing median
                  </span>
                </div>
                <p className="text-pretty text-slate-600 text-sm mb-3">
                  Red Rock views, Downtown Summerlin, and a finished trail
                  network. 89144, 89138, The Ridges, and Siena 55+ are different
                  maps — confirm village or campus comps, not a “strong buy”
                  label.
                </p>
                <div className="text-sm text-slate-600">
                  Tour: The Ridges, 89138, Paseos
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">North Las Vegas</h3>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-semibold">
                    {formatUsd(LISTING_MEDIANS_USD.northLasVegas)} listing
                    median
                  </span>
                </div>
                <p className="text-pretty text-slate-600 text-sm mb-3">
                  City listing median is not Aliante or Skye Canyon. New retail
                  and freeway access matter for commute math — not a “value
                  play” slogan.
                </p>
                <div className="text-sm text-slate-600">
                  Tour: Aliante, Elkhorn, Skye Canyon
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">
                    Southwest (Mountains Edge)
                  </h3>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-semibold">
                    {formatUsd(LISTING_MEDIANS_USD.mountainsEdge)} listing
                    median
                  </span>
                </div>
                <p className="text-pretty text-slate-600 text-sm mb-3">
                  Tract homes near Exploration Peak Park. New construction
                  competes with resales. I will not invent “solid appreciation.”
                </p>
                <div className="text-sm text-slate-600">
                  Tour: Exploration Peak, Southern Highlands adjacent
                </div>
              </div>
            </div>
          </section>

          {/* What This Means */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.buyers.src}
              avoidSrc={PAGE_HERO_IMAGES.market.src}
            >
              What This Means for You
            </SectionHeading>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 text-xl mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2" aria-hidden="true" />
                  For Buyers
                </h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      <strong>Price to the comps:</strong> More inventory than
                      2021–2023 does not mean every listing sits. Priced-to-comp
                      houses still move.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      <strong>Ask for a commute map:</strong> Henderson and
                      Summerlin west are different freeways from Centennial
                      Hills. I will not forecast job growth.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      <strong>Builder incentives:</strong> Rate buydowns and
                      credits make new construction competitive
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 text-xl mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 mr-2" aria-hidden="true" />
                  For Sellers
                </h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      <strong>Price to the comps:</strong> Overpriced homes sit.
                      Days on market is a live MLS pull by ZIP and price band —
                      not a 30-day slogan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      <strong>Pair the California sale:</strong> MLS, BHHS
                      syndication, and a CMA they can match against their sale.
                      I will not invent an inbound-buyer share.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      <strong>Write the commute:</strong> If a named employer
                      matters, put drive time on the remarks from a timed
                      itinerary — not a corridor slogan.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Agent note */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Listing medians and commute maps beat a forecast. Tech
                employers, California inbound buyers, and village-level
                inventory show up on the CMA. I will not pick which
                neighborhoods will outperform. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent, I pull
                the live file for the ZIP you named — not a recycled headline."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada
                Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.market.src}
              avoidSrc={PAGE_HERO_IMAGES.homepage.src}
            >
              Frequently asked questions
            </SectionHeading>
            <div className="space-y-4">
              {marketFaqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-slate-50 p-6">
                  <h3 className="mb-2 font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-pretty text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-4xl rounded-2xl bg-blue-600 p-8 text-center text-white md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ask for a CMA on this house
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Wondering what these trends mean for a specific house? Call or
              email with the address. I will run a CMA — not a citywide slogan.
            </p>
            <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
              <a
                href={CTA_TEL}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call {CTA_PHONE}
              </a>
              <a
                href={AGENT_EMAIL_MAILTO}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-8 py-4 text-lg font-bold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
              >
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                {AGENT_EMAIL}
              </a>
              <Link
                href="/market-report"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-700 px-8 py-4 text-lg font-bold text-white no-underline hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
              >
                View Market Report →
              </Link>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-600 mt-8">
          Last updated: {MARKET_SNAPSHOT_AS_OF}
        </div>
      </div>
      <GoogleReviewsCta className="bg-white" />
      <VisitOffice compact />
      <PageCTA
        headline="Need the live comps, not a valley average?"
        subheadline="Call or email with the ZIP. I pull MLS for that ZIP, not a recycled headline."
        formSource="market-insights"
        formHeading="Ask for a live MLS pull"
      />
      <RealScoutListings />
    </>
  );
}
