import RealScoutListings from "@/components/realscout/RealScoutListings";
import SearchCentralFeed from "@/components/sections/SearchCentralFeed";
import Link from "next/link";
import {
  Phone,
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
import { CTA_PHONE, CTA_TEL } from "@/lib/contact";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { getSearchCentralPosts } from "@/lib/search-central-feed";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionHeading, SectionPhoto } from "@/components/shared/SectionPhoto";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";

export const revalidate = 3600;

export const metadata: Metadata = withShareImage(
  {
    title: "Centennial Hills Market Insights 2026 | Northwest Las Vegas",
    description:
      "First-party Centennial Hills market insights: 89149 vs 89144, Inspirada new-construction wind-down, and how northwest Las Vegas listings are trading. Dr. Jan Duffy. Call 702-222-1964.",
    keywords: [
      "centennial hills real estate",
      "centennial hills las vegas real estate",
      "las vegas market insights 2026",
    ],
  },
  PAGE_HERO_IMAGES.market,
);

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "Centennial Hills Market Insights 2026",
  author: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy",
    worksFor: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  datePublished: "2026-09-07",
  about: {
    "@type": "Place",
    name: "Centennial Hills, Las Vegas, Nevada",
  },
};

export default async function MarketInsightsPage() {
  const searchCentralPosts = await getSearchCentralPosts(6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              2026 Economic & Real Estate Analysis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Centennial Hills Market Insights
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.homepage.src}
              alt="Centennial Hills Las Vegas homes used for this market insights brief"
            />
            <p className="text-xl text-slate-600">
              First-party notes for this website — 89149 vs 89144, Inspirada’s
              remaining new homes, and why a cloned valley-wide report will not
              rank here. Updated September 2026.
            </p>
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
              <Link href="/market-report">market report</Link> keeps valley-wide
              stats. The <Link href="/market-update">market update</Link> is the
              weekly cadence. Each URL self-canonicalizes to this domain.
            </p>
            <p className="text-slate-700 mb-4">
              {MARKET_SNAPSHOT_SOURCE} listed a Centennial Hills neighborhood
              median of {formatUsd(LISTING_MEDIANS_USD.centennialHills)}. That
              is not 89144 Summerlin and it is not Tournament Hills.{" "}
              <Link href="/neighborhoods/centennial-hills">
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
            <p className="mt-6 text-center text-sm text-slate-400">
              {MARKET_SNAPSHOT_SOURCE} as of {MARKET_SNAPSHOT_AS_OF}. Listing
              medians, not a CMA. I will not invent a CA-buyer share,
              data-center investment total, job-growth rate, or visitor count.
            </p>
          </section>

          {/* Tech Transformation */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                Las Vegas Tech Transformation
              </h2>
            </div>
            <SectionPhoto
              heading="Las Vegas Tech Transformation"
              fallbackSrc={PAGE_HERO_IMAGES.market.src}
              avoidSrc={PAGE_HERO_IMAGES.market.src}
            />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  Las Vegas is rapidly becoming a legitimate tech hub. What
                  started with data centers attracted by cheap power and land
                  has evolved into a broader technology ecosystem. The
                  implications for real estate are significant.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                  Data Center Corridor
                </h3>
                <p>
                  Henderson's data center corridor now hosts Google, Amazon Web
                  Services, Switch, and other major operators. These facilities
                  bring high-paying jobs and attract supporting technology
                  companies.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  Tech Impact on Real Estate
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Henderson demand:</strong> Data-center and
                      medical-corridor jobs keep Henderson on relocation
                      shortlists. I will not invent a year-over-year
                      appreciation figure — ask for a live CMA on the village
                      you want.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Remote worker influx:</strong> Tech workers
                      keeping CA salaries while enjoying NV tax advantages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Infrastructure investment:</strong> Fiber networks
                      and power infrastructure improving for all residents
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* California Migration Deep Dive */}
          <section className="mb-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 mr-3" />
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
                    <div className="text-blue-200 text-sm">
                      Frequent origin — confirm the latest GLVAR report
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">Your equity</div>
                    <div className="text-blue-200 text-sm">
                      Depends on your California sale, not a slogan
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">Bay Area & LA</div>
                    <div className="text-blue-200 text-sm">
                      Common source markets I tour against
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">
                  Why Californians Choose Las Vegas
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">1.</span>
                    <span>
                      <strong>Tax savings:</strong> 9.3%-13.3% state income tax
                      eliminated
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
                      <strong>Proximity:</strong> 4-hour drive, 1-hour flight to
                      most of CA
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">4.</span>
                    <span>
                      <strong>Similar climate:</strong> Same sunshine, less
                      humidity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">5.</span>
                    <span>
                      <strong>Entertainment:</strong> World-class dining, shows,
                      sports
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

          {/* Economic Diversification */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                Economic Diversification
              </h2>
            </div>
            <SectionPhoto
              heading="Economic Diversification"
              fallbackSrc={PAGE_HERO_IMAGES.investment.src}
              avoidSrc={PAGE_HERO_IMAGES.market.src}
            />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">
                  Raiders & Sports
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Allegiant Stadium anchors a new entertainment district. NHL
                  Golden Knights, WNBA Aces, and potential MLB/NBA expansion
                  diversify the economy.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Impact: West Las Vegas jobs and event-calendar demand
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">
                  Healthcare Growth
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  New hospitals, medical schools, and healthcare facilities
                  address historic shortages while creating high-paying jobs.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Impact: Henderson, Summerlin medical corridors
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">
                  Film & Production
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Nevada film incentives attracting production companies. New
                  studios and post-production facilities creating entertainment
                  industry jobs.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Impact: Creative industry employment growth
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhood Forecasts */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                2026 Neighborhood Outlook
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
                <p className="text-slate-600 text-sm mb-3">
                  Tech corridor, parks, trails, and rec campuses keep inbound
                  demand. I will not use a “safety ranking” slogan or an
                  appreciation forecast. Ask for a live CMA on Inspirada, Green
                  Valley Ranch, or MacDonald Highlands.
                </p>
                <div className="text-sm text-slate-500">
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
                <p className="text-slate-600 text-sm mb-3">
                  Red Rock views, Downtown Summerlin, and a finished trail
                  network. 89144, 89138, and The Ridges are different maps —
                  confirm village comps, not a “strong buy” label.
                </p>
                <div className="text-sm text-slate-500">
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
                <p className="text-slate-600 text-sm mb-3">
                  City listing median is not Aliante or Skye Canyon. New retail
                  and freeway access matter for commute math — not a “value
                  play” slogan.
                </p>
                <div className="text-sm text-slate-500">
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
                <p className="text-slate-600 text-sm mb-3">
                  Tract homes near Exploration Peak Park. New construction
                  competes with resales. I will not invent “solid appreciation.”
                </p>
                <div className="text-sm text-slate-500">
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
                  <Users className="h-6 w-6 mr-2" />
                  For Buyers
                </h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Act strategically:</strong> More inventory than
                      2021-2023, but well-priced homes still move fast
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Consider tech corridors:</strong> Henderson and
                      west Summerlin positioned for continued job growth
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Builder incentives:</strong> Rate buydowns and
                      credits make new construction competitive
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 text-xl mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 mr-2" />
                  For Sellers
                </h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Price correctly:</strong> Overpriced homes sit;
                      correctly priced homes sell in under 30 days
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Target CA buyers:</strong> Marketing to California
                      relocators expands buyer pool significantly
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Highlight tech access:</strong> Proximity to data
                      centers and tech jobs adds value
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Understanding market forces—not just current prices—separates
                informed decisions from reactive ones. Las Vegas is no longer
                just a gaming and tourism economy. Tech investment, California
                migration, and economic diversification are reshaping which
                neighborhoods will outperform. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent, I help
                clients position themselves for where the market is going, not
                just where it's been."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada
                Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-purple-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Personalized Market Analysis
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Wondering what these trends mean for your specific situation? Dr.
              Jan Duffy provides free consultations with customized market
              analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CTA_TEL}
                className="inline-flex min-h-11 items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-purple-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {CTA_PHONE}
              </a>
              <Link
                href="/market-report"
                className="inline-flex min-h-11 items-center justify-center bg-purple-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-purple-400 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-600"
              >
                View Market Report →
              </Link>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: September 2026
        </div>
      </main>
      <VisitOffice compact />
      <PageCTA
        headline="Need the live comps, not a valley average?"
        subheadline="Call Dr. Jan Duffy. She will pull MLS for your ZIP, not a recycled headline."
      />
      <RealScoutListings />
    </>
  );
}
