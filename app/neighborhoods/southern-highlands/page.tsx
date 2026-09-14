import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = {
  title: "Southern Highlands Homes for Sale | Las Vegas Golf Community",
  description:
    "Southern Highlands Las Vegas homes for sale — Robert Trent Jones Jr. golf, gated sections, current listings with Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Southern Highlands homes for sale",
    "Southern Highlands golf",
    "Las Vegas golf community",
    "guard gated Las Vegas",
  ],
};

const median = formatUsd(LISTING_MEDIANS_USD.southernHighlands);

export default function SouthernHighlandsPage() {
  return (
    <NeighborhoodGuide
      name="Southern Highlands"
      slug="southern-highlands"
      h1="Southern Highlands Homes for Sale"
      intro="Southern Highlands is a southwest Las Vegas golf community with both open and guard-gated sections around a Robert Trent Jones Jr. course. It is not Summerlin and it is not Henderson."
      zipCodes={["89141"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/the-ridges.png"
      imageAlt="Southwest Las Vegas golf community setting near Southern Highlands"
      latitude={35.995}
      longitude={-115.206}
      stats={[
        { value: median, label: "Median listing" },
        { value: "89141", label: "Primary ZIP" },
        { value: "RTJ Jr.", label: "Golf design" },
        { value: "Mixed", label: "Gated and open" },
      ]}
      sections={[
        {
          heading: "Golf club vs the deed",
          body: "Southern Highlands Golf Club is a private membership. Living in the master plan does not automatically include a membership. Confirm current dues, waitlists, and whether the listing is inside a guard-gated enclave or an open section. I get the HOA package and the club’s current rules separately.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} shows a Southern Highlands median listing of ${median}. That listing median is pulled up by gated estate inventory. Non-gated sections trade lower. Do not use a $750K headline from an older blog as a 2026 bid. I CMA the section you are actually writing an offer on.`,
        },
        {
          heading: "Commute",
          body: "I-15 and the 215 are the spines. Harry Reid International is closer than from Summerlin. The Strip run is typically shorter than from Centennial Hills, longer than from inner-southwest tracts. Time it at your hour.",
        },
      ]}
      faqs={[
        {
          question: "What is the median home price in Southern Highlands?",
          answer: `Realtor.com reported ${median} as the Southern Highlands median listing price as of ${MARKET_SNAPSHOT_AS_OF}. Gated and open sections differ. Ask for a live CMA.`,
        },
        {
          question: "Do I have to join the golf club?",
          answer:
            "No. Club membership is a separate contract from the deed. Confirm current terms with the club.",
        },
        {
          question: "How does Southern Highlands compare to Summerlin?",
          answer:
            "Different geography. Summerlin is the west-side Howard Hughes master plan. Southern Highlands is southwest Las Vegas around 89141 with a golf-club core. Compare commute, dues, and the house.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/mountains-edge",
          label: "Mountains Edge homes",
        },
        { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
        { href: "/luxury-homes", label: "Las Vegas luxury homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
