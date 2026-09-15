import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = {
  title: "Green Valley Homes for Sale | Henderson Nevada Real Estate",
  description:
    "Green Valley Henderson homes for sale — established streets, The District, and current listings with Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Green Valley homes for sale",
    "Green Valley Henderson",
    "Green Valley real estate",
    "Green Valley Ranch",
  ],
};

const north = formatUsd(LISTING_MEDIANS_USD.greenValleyNorth);
const south = formatUsd(LISTING_MEDIANS_USD.greenValleySouth);
const ranch = formatUsd(LISTING_MEDIANS_USD.greenValleyRanch);

export default function GreenValleyPage() {
  return (
    <NeighborhoodGuide
      name="Green Valley"
      slug="green-valley"
      h1="Green Valley Homes for Sale in Henderson"
      intro="Green Valley is Henderson’s established 1980s–90s master plan: mature trees, finished streets, and The District at Green Valley Ranch. It is not Inspirada and it is not brand-new production in 89044."
      zipCodes={["89012", "89014", "89074"]}
      city="Henderson"
      imageSrc="/images/neighborhoods/green-valley.png"
      imageAlt="Established Henderson residential streets near Green Valley"
      latitude={36.055}
      longitude={-115.081}
      stats={[
        { value: north, label: "GV North listing" },
        { value: south, label: "GV South listing" },
        { value: ranch, label: "GV Ranch listing" },
        { value: "1988+", label: "Typical vintage" },
      ]}
      sections={[
        {
          heading: "What “established” actually means here",
          body: "Green Valley started selling in the late 1980s. Lots and tree canopy are often larger than later Henderson pods. That also means original HVAC, roofs, and plumbing need a real inspection — mature landscaping is not a substitute for a home inspection. HOA rules vary by sub-association; I pull the resale package before you waive due diligence.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} splits Green Valley: North ${north}, South ${south}, Green Valley Ranch ${ranch}. Those are listing medians for different pockets. The District at Green Valley Ranch (retail/dining/Green Valley Ranch Resort adjacency) can pull Ranch pricing without describing a North Green Valley ranch house. I CMA the subdivision, not the regional name.`,
        },
        {
          heading: "Daily geography",
          body: "The District and Green Valley Ranch Resort sit on the west-central edge of this map. I-215 and Stephanie / Green Valley Parkway are the usual spines. St. Rose Parkway connects you south toward Inspirada if you are comparing finished Green Valley to newer 89044 product in the same afternoon.",
        },
      ]}
      faqs={[
        {
          question: "What is the median home price in Green Valley?",
          answer: `As of ${MARKET_SNAPSHOT_AS_OF}, realtor.com listing medians were ${north} (North), ${south} (South), and ${ranch} (Ranch). Ask for a live CMA.`,
        },
        {
          question: "Is Green Valley the same as Inspirada?",
          answer:
            "No. Green Valley is older Henderson product around 89012 / 89014 / 89074. Inspirada is a newer master plan in 89044.",
        },
        {
          question: "What is The District?",
          answer:
            "The District at Green Valley Ranch is an outdoor retail and dining center next to Green Valley Ranch Resort. It is not a housing subdivision.",
        },
      ]}
      related={[
        { href: "/neighborhoods/henderson", label: "Henderson overview" },
        { href: "/neighborhoods/inspirada", label: "Inspirada homes" },
        {
          href: "/55-plus-communities/sun-city-anthem",
          label: "Sun City Anthem",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
