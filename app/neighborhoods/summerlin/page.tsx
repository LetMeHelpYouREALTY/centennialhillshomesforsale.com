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
    title: "Summerlin Homes for Sale | Las Vegas Master-Planned Real Estate",
    description:
      "Summerlin homes for sale with Dr. Jan Duffy, BHHS Nevada Properties. Villages, ZIP codes, and current listings. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "Summerlin homes for sale",
      "Summerlin real estate agent",
      "Summerlin Las Vegas",
      "Berkshire Hathaway HomeServices Summerlin",
    ],
  },
  {
    src: "/images/neighborhoods/summerlin.png",
    alt: "Summerlin Las Vegas streetscape with desert mountain backdrop",
  },
);

const north = formatUsd(LISTING_MEDIANS_USD.summerlinNorth);
const west = formatUsd(LISTING_MEDIANS_USD.summerlinWest);
const south = formatUsd(LISTING_MEDIANS_USD.summerlinSouth);

export default function SummerlinPage() {
  return (
    <NeighborhoodGuide
      name="Summerlin"
      slug="summerlin"
      h1="Summerlin Homes for Sale in Las Vegas"
      intro="Summerlin is the Howard Hughes master plan on the west side of the valley — distinct villages, distinct ZIPs, and a price spread that a single “Summerlin median” cannot describe. Dr. Jan Duffy tours by village, not by a brand slogan."
      zipCodes={["89134", "89135", "89138", "89144"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/summerlin.png"
      imageAlt="Summerlin Las Vegas streetscape with desert mountain backdrop"
      latitude={36.1672}
      longitude={-115.331}
      stats={[
        { value: north, label: "North listing median" },
        { value: west, label: "West listing median" },
        { value: south, label: "South listing median" },
        { value: "HH", label: "Master plan" },
      ]}
      sections={[
        {
          heading: "Villages are not interchangeable",
          body: "Tournament Hills and The Ridges are guard-gated custom product. 89144 covers The Arbors, The Trails, and Queensridge. 89138 is Summerlin West (Reverence and later villages). 89134 includes older central product and Sun City Summerlin. Downtown Summerlin is the retail/office core, not a housing village. If a listing says “Summerlin” and nothing else, ask which village and which ZIP.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} splits Summerlin: Summerlin North listing median ${north}, Summerlin West ${west}, Summerlin South ${south}. Those are listing medians for different geographies. I will not quote one $625K figure for the whole master plan. Call for a CMA on the village you are actually bidding.`,
        },
        {
          heading: "Parks, trails, and Red Rock access",
          body: "Howard Hughes planned Summerlin around a trail network and city parks. Red Rock Canyon National Conservation Area is west of the master plan — public land, not a HOA amenity. Drive time to the scenic loop depends on the village: Summerlin West is closer than 89144. I match trailheads and Downtown Summerlin errands to the street, not a 1990s brochure.",
        },
        {
          heading: "First-party representation",
          body: "This page is written for heyberkshire.com readers. I do not rehost another brokerage’s Summerlin guide. Builder incentives, if any lot is still selling new, are negotiated with your own agent. Client line: (702) 222-1964.",
        },
        {
          heading: "How I send Summerlin matches",
          body: "89134, 89135, 89138, and 89144 are different villages. Email homes@heyberkshire.com or call (702) 222-1964 with ZIP and whether you want gated custom, production, or 55+. I will not mix Tournament Hills with Reverence.",
        },
      ]}
      faqs={[
        {
          question: "What is the median home price in Summerlin?",
          answer: `There is no single reliable Summerlin median. As of ${MARKET_SNAPSHOT_AS_OF}, realtor.com listing medians were ${north} (North), ${west} (West), and ${south} (South). Ask for a live CMA.`,
        },
        {
          question: "Is Summerlin the same as Centennial Hills?",
          answer:
            "No. Summerlin is the Howard Hughes master plan (89134 / 89135 / 89138 / 89144). Centennial Hills is northwest Las Vegas in 89149 / 89131 / 89143.",
        },
        {
          question: "Which Summerlin village should I tour first?",
          answer:
            "Start with ZIP and product type: production vs custom, gated vs open, 55+ vs all-ages. I sequence showings after a 10-minute call.",
        },
      ]}
      related={[
        { href: "/neighborhoods/89144", label: "89144 Summerlin homes" },
        {
          href: "/neighborhoods/summerlin-west",
          label: "Summerlin West / 89138",
        },
        { href: "/neighborhoods/tournament-hills", label: "Tournament Hills" },
        { href: "/neighborhoods/the-ridges", label: "The Ridges" },
        { href: "/neighborhoods/centennial-hills", label: "Centennial Hills" },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin",
        },
      ]}
    />
  );
}
