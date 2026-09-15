import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export function generateMetadata(): Metadata {
  return withShareImage(
    {
      title: "Centennial Hills Homes for Sale | 89149 Las Vegas",
      description:
        "Homes for sale in Centennial Hills, Las Vegas (89149, 89131, 89143). Town Center, park, and current listings with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
      keywords: [
        "centennial hills real estate",
        "homes for sale in centennial hills nv",
        "centennial hills las vegas real estate",
        "centennial hills homes for sale",
        "centennial hills town center nv real estate",
      ],
    },
    {
      src: "/images/neighborhoods/centennial-hills.png",
      alt: "Centennial Hills Las Vegas homes and northwest desert mountain views",
    },
  );
}

const median = formatUsd(LISTING_MEDIANS_USD.centennialHills);

export default function CentennialHillsPage() {
  return (
    <NeighborhoodGuide
      name="Centennial Hills"
      slug="centennial-hills"
      h1="Centennial Hills Homes for Sale in Las Vegas"
      intro="Centennial Hills is northwest Las Vegas around Centennial Hills Park, US-95, and Centennial Town Center. Listings cluster in 89149, 89131, and 89143. ZIP 89144 is Summerlin — a different corridor."
      zipCodes={["89149", "89131", "89143"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/centennial-hills.png"
      imageAlt="Centennial Hills Las Vegas homes and northwest desert mountain views"
      badge="Primary market on this site"
      latitude={36.2755}
      longitude={-115.294}
      stats={[
        { value: median, label: "Median listing" },
        { value: "89149", label: "Core ZIP" },
        { value: "US-95", label: "Freeway access" },
        { value: "Town Center", label: "Daily retail" },
      ]}
      sections={[
        {
          heading: "This is not 89144 Summerlin",
          body: `Searchers who type “89144 zip code homes for sale” and “centennial hills real estate” in the same session are mixing two maps. Centennial Hills sits northwest of the 215 belt, against the mountains, with production and resale homes near Centennial Hills Park. 89144 is inside Howard Hughes Summerlin (The Arbors, The Trails, Queensridge). I will not send you on a 30-minute wrong-side tour. Tell me the ZIP on the listing.`,
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} shows a Centennial Hills median listing of ${median}. That is a neighborhood-wide listing median, not a sold median and not a CMA for your street. Town Center condos, view lots, and 89131 / 89143 pockets do not share one number. I price offers from current MLS comps for the same beds, lot, and HOA.`,
        },
        {
          heading: "What you actually use day to day",
          body: "Centennial Town Center covers Target, Costco, Home Depot, and the usual grocery/dining pads so many errands stay on the northwest side. Downtown Summerlin is a short hop south on the 215. MountainView Hospital sits near Sun City Summerlin, not inside Centennial Hills proper — confirm drive time from the exact street. I walk Centennial Hills Park and the trail stubs that match the listing, not a brochure campus.",
        },
        {
          heading: "Campuses on the listing, not a slogan",
          body: "Clark County School District assignment is by address. Names that commonly appear on Centennial Hills listings include Ober, Cashman, Scherkenbach, Hummel, and McMillan elementary campuses; Becker and Escobedo middle schools; and Centennial, Shadow Ridge, and Arbor View high schools. Charters such as Pinecrest and Somerset enroll separately. I confirm the campus on the MLS record. I do not rank schools.",
        },
        {
          heading: "How I tour this corridor",
          body: "I sequence Centennial Hills, Lone Mountain, and Skye Canyon in one loop when a buyer is choosing northwest vintage vs new construction. Lot orientation (mountain vs interior), HOA vs no-HOA, and SID/LID on the title report matter more than a lifestyle paragraph. Call (702) 222-1964 or email homes@heyberkshire.com.",
        },
      ]}
      faqs={[
        {
          question:
            "What is the current median home price in Centennial Hills?",
          answer: `Realtor.com reported a ${median} median listing price for Centennial Hills as of ${MARKET_SNAPSHOT_AS_OF}. Ask for a live CMA before you bid. Sold prices and listing prices are not the same.`,
        },
        {
          question: "Which ZIP codes are Centennial Hills?",
          answer:
            "Most Centennial Hills listings sit in 89149, 89131, and 89143. ZIP 89144 is Summerlin, not Centennial Hills.",
        },
        {
          question: "How far is Centennial Hills from the Las Vegas Strip?",
          answer:
            "Time the US-95 drive at the hour you actually commute. I will not publish a slogan minute count as if it were your listing.",
        },
        {
          question: "What shopping is near Centennial Hills?",
          answer:
            "Centennial Town Center includes Target, Costco, Home Depot, and surrounding restaurants. Downtown Summerlin is the next retail hop south on the 215.",
        },
      ]}
      related={[
        { href: "/neighborhoods/89144", label: "89144 Summerlin homes" },
        { href: "/neighborhoods/lone-mountain", label: "Lone Mountain homes" },
        { href: "/neighborhoods/skye-canyon", label: "Skye Canyon homes" },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin (nearby 55+)",
        },
      ]}
    >
      <section className="mb-10">
        <SectionHeading
          className="mb-4 text-2xl font-bold text-slate-900"
          neighborhoodName="Centennial Hills"
          neighborhoodSlug="centennial-hills"
          avoidSrc="/images/neighborhoods/centennial-hills.png"
          photoClassName="mb-6"
        >
          Sample drive times from Centennial Hills
        </SectionHeading>
        <div className="overflow-x-auto">
          <table className="w-full border border-slate-200 bg-white text-sm">
            <caption className="mb-2 text-left text-slate-600">
              Midday estimates. Rush hour adds time on US-95. Confirm from the
              listing address.
            </caption>
            <thead className="bg-slate-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-slate-900"
                >
                  Destination
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-slate-900"
                >
                  About
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-slate-900"
                >
                  Midday
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-normal text-slate-700"
                >
                  Downtown Summerlin
                </th>
                <td className="px-4 py-3">6 miles</td>
                <td className="px-4 py-3">12 min</td>
              </tr>
              <tr className="bg-slate-50">
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-normal text-slate-700"
                >
                  Las Vegas Strip
                </th>
                <td className="px-4 py-3">15 miles</td>
                <td className="px-4 py-3">22 min</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-normal text-slate-700"
                >
                  Harry Reid International (LAS)
                </th>
                <td className="px-4 py-3">18 miles</td>
                <td className="px-4 py-3">25 min</td>
              </tr>
              <tr className="bg-slate-50">
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-normal text-slate-700"
                >
                  Downtown Las Vegas
                </th>
                <td className="px-4 py-3">12 miles</td>
                <td className="px-4 py-3">18 min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </NeighborhoodGuide>
  );
}
