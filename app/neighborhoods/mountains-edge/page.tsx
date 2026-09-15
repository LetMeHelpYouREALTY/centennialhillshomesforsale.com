import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Mountains Edge Homes for Sale | Southwest Las Vegas",
    description:
      "Mountains Edge Las Vegas homes for sale near Exploration Peak Park. Current listings with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "Mountains Edge homes for sale",
      "Mountains Edge Las Vegas",
      "southwest Las Vegas homes",
      "Exploration Peak Park",
    ],
  },
  {
    src: "/images/neighborhoods/mountains-edge.png",
    alt: "Southwest Las Vegas desert mountain setting near Mountains Edge",
  },
);

const median = formatUsd(LISTING_MEDIANS_USD.mountainsEdge);

export default function MountainsEdgePage() {
  return (
    <NeighborhoodGuide
      name="Mountains Edge"
      slug="mountains-edge"
      h1="Mountains Edge Homes for Sale"
      intro="Mountains Edge is a southwest Las Vegas master plan organized around Exploration Peak Park. It is not Summerlin, not Henderson, and not Southern Highlands Golf Club."
      zipCodes={["89178", "89179"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/mountains-edge.png"
      imageAlt="Southwest Las Vegas desert mountain setting near Mountains Edge"
      latitude={36.0005}
      longitude={-115.262}
      stats={[
        { value: median, label: "Median listing" },
        { value: "Public park", label: "Exploration Peak" },
        { value: "SW", label: "Valley side" },
        { value: "I-215", label: "Beltway access" },
      ]}
      sections={[
        {
          heading: "The park is the point",
          body: "Exploration Peak Park is a large public park with trails and a peak trail — city parkland, not a private clubhouse. That is the amenity buyers name. HOA pools and pocket parks vary by village inside the master plan. I walk the park access from the listing, not from a map pin a mile away.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} shows a Mountains Edge (listed as Mountain Edge) median listing of ${median}. Older $475K headlines are stale. View lots and larger floor plans list above the median. I CMA the village inside the master plan.`,
        },
        {
          heading: "Commute",
          body: "I-215 and I-15 connect southwest Las Vegas to the airport and the Strip. Henderson via the 215 is a different direction than a Summerlin commute. Time both if you work opposite sides of the valley.",
        },
        {
          heading: "HOA villages inside the master plan",
          body: "Mountains Edge is not one dues line. Pocket parks and pools sit in villages with their own HOA packets. I walk park access from the listing address and CMA that village, not the regional name. Email homes@heyberkshire.com or call (702) 222-1964 with the street.",
        },
        {
          heading: "How I send Mountains Edge matches",
          body: "Give me 89178 vs 89179, beds, and whether Exploration Peak access from the lot matters. I filter MLS by village inside the master plan, then email the set. Email homes@heyberkshire.com or call (702) 222-1964.",
        },
      ]}
      faqs={[
        {
          question: "What is the median home price in Mountains Edge?",
          answer: `Realtor.com reported ${median} as the Mountains Edge median listing price as of ${MARKET_SNAPSHOT_AS_OF}. Ask for a live CMA.`,
        },
        {
          question: "Is Mountains Edge in Henderson?",
          answer:
            "No. Mountains Edge is southwest Las Vegas (89178 / 89179). Henderson starts farther east.",
        },
        {
          question: "What is Exploration Peak Park?",
          answer:
            "A large public park inside the Mountains Edge area with trails and a peak hike. Confirm park access from the listing address.",
        },
        {
          question: "How do I get a Mountains Edge CMA?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964 with the address. I will not price a bid from the ZIP median alone.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/southern-highlands",
          label: "Southern Highlands homes",
        },
        { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
        { href: "/neighborhoods/henderson", label: "Henderson homes" },
      ]}
    />
  );
}
