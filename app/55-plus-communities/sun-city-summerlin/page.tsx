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
    title: "Sun City Summerlin Homes for Sale | 55+ Las Vegas",
    description:
      "Sun City Summerlin 55+ homes in ZIP 89134. Golf, rec centers, and current listings with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "Sun City Summerlin homes for sale",
      "Sun City Summerlin Las Vegas",
      "55 plus communities Summerlin",
    ],
  },
  {
    src: "/images/neighborhoods/sun-city-summerlin.png",
    alt: "Sun City Summerlin streets in west Las Vegas ZIP 89134",
  },
);

const median = formatUsd(LISTING_MEDIANS_USD.sunCitySummerlin);

export default function SunCitySummerlinPage() {
  return (
    <NeighborhoodGuide
      name="Sun City Summerlin"
      slug="sun-city-summerlin"
      pathPrefix="/55-plus-communities"
      badge="55+ HOPA community"
      h1="Sun City Summerlin Homes for Sale"
      intro="Sun City Summerlin is a Del Webb 55+ community: 1989, 7,700+ homes in ZIP 89134. Age restriction is Housing for Older Persons Act (HOPA), not a lifestyle slogan."
      zipCodes={["89134"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/sun-city-summerlin.png"
      imageAlt="Sun City Summerlin streets in west Las Vegas ZIP 89134"
      latitude={36.2048}
      longitude={-115.2954}
      stats={[
        { value: median, label: "Median listing" },
        { value: "7,700+", label: "Homes" },
        { value: "3", label: "Golf courses" },
        { value: "4", label: "Rec centers" },
      ]}
      senior={{
        numberOfHomes: 7700,
        priceRange: `${median} listing median (realtor.com, Sept 2026)`,
        hoaFees: "Confirm on resale docs",
        amenities: [
          { name: "Highland Falls Golf Course" },
          { name: "Palm Valley Golf Course" },
          { name: "Eagle Crest Golf Course" },
          { name: "Mountain Shadows Recreation Center" },
          { name: "Sun Shadows Recreation Center" },
          { name: "Pinnacle Recreation Center" },
          { name: "Desert Vista Recreation Center" },
        ],
      }}
      sections={[
        {
          heading: "What HOPA means on the ground",
          body: "At least 80% of occupied units must have one resident 55 or older. Sun City Summerlin’s recorded rules are stricter in practice — confirm occupancy, guests, and under-19 limits in the current CC&Rs. I do not guess occupancy exceptions on a blog.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} shows a Sun City Summerlin median listing of ${median}. Golf-course lots, casitas, and interior product do not share one number. Confirm current HOA on the resale package. I CMA the floor plan, not the community name.`,
        },
        {
          heading: "Golf and rec centers by name",
          body: "Courses: Highland Falls (executive), Palm Valley, and Eagle Crest. Recreation centers: Mountain Shadows, Sun Shadows, Pinnacle, and Desert Vista. Confirm the current club list in the rec packet. MountainView Hospital is nearby — drive time depends on the exact street, not “adjacent” marketing.",
        },
        {
          heading: "How this differs from Trilogy and Heritage",
          body: "Trilogy at Summerlin is smaller, newer Shea product in 89135. Heritage at Stonebridge is a smaller guard-gated 55+ pocket. Sun City Summerlin is the large, 1990s Del Webb campus in 89134. I tour two in one morning when a buyer is choosing scale vs newer finishes.",
        },
        {
          heading: "How I send Sun City Summerlin matches",
          body: "Tell me one-story vs two, golf-course vs interior, and whether you need a casita. Email homes@heyberkshire.com or call (702) 222-1964. I CMA the floor plan — I will not reuse a Trilogy 89135 number on this campus.",
        },
      ]}
      faqs={[
        {
          question: "What is the age requirement for Sun City Summerlin?",
          answer:
            "It is a 55+ HOPA community. At least one occupant typically must be 55+. Confirm current CC&Rs for occupants under 19 and guest stay limits.",
        },
        {
          question: "What is the median home price?",
          answer: `Realtor.com reported ${median} as the Sun City Summerlin median listing price as of ${MARKET_SNAPSHOT_AS_OF}. Ask for a live CMA.`,
        },
        {
          question: "Can I see homes this week?",
          answer: "Yes. Call or text Dr. Jan Duffy at (702) 222-1964.",
        },
      ]}
      related={[
        {
          href: "/55-plus-communities",
          label: "All Las Vegas 55+ communities",
        },
        {
          href: "/55-plus-communities/trilogy-summerlin",
          label: "Trilogy at Summerlin",
        },
        {
          href: "/55-plus-communities/heritage-stonebridge",
          label: "Heritage at Stonebridge",
        },
        { href: "/55-plus-communities/siena", label: "Siena Summerlin South" },
        { href: "/neighborhoods/summerlin", label: "Summerlin all-ages homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
