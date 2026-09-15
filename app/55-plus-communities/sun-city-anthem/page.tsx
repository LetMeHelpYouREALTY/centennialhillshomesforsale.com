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
    title: "Sun City Anthem Homes for Sale | 55+ Henderson",
    description:
      "Sun City Anthem Henderson 55+ homes. Anthem Center, golf, and current listings with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "Sun City Anthem homes for sale",
      "Sun City Anthem Henderson",
      "55 plus communities Henderson",
    ],
  },
  {
    src: "/images/neighborhoods/sun-city-anthem.png",
    alt: "Sun City Anthem Henderson 55-plus single-story homes near the rec campus",
  },
);

const median = formatUsd(LISTING_MEDIANS_USD.sunCityAnthem);

export default function SunCityAnthemPage() {
  return (
    <NeighborhoodGuide
      name="Sun City Anthem"
      slug="sun-city-anthem"
      pathPrefix="/55-plus-communities"
      badge="55+ HOPA community"
      h1="Sun City Anthem Homes for Sale"
      intro="Sun City Anthem is the large Del Webb 55+ community in Henderson, with Anthem Center as the amenity core and about 7,100 homes. It is not Solera at Anthem and it is not Sun City Summerlin."
      zipCodes={["89052"]}
      city="Henderson"
      imageSrc="/images/neighborhoods/sun-city-anthem.png"
      imageAlt="Sun City Anthem Henderson 55-plus single-story homes near the rec campus"
      latitude={35.961}
      longitude={-115.087}
      stats={[
        { value: median, label: "Median listing" },
        { value: "7,100+", label: "Homes" },
        { value: "Confirm HOA", label: "Anthem Center size" },
        { value: "89052", label: "Primary ZIP" },
      ]}
      senior={{
        numberOfHomes: 7100,
        priceRange: `${median} listing median (realtor.com, Sept 2026)`,
        hoaFees: "Confirm on resale docs",
        amenities: [
          { name: "Anthem Center clubhouse" },
          { name: "Indoor swimming pool" },
          { name: "Outdoor swimming pool" },
          { name: "Fitness center" },
          { name: "Tennis courts" },
          { name: "Pickleball courts" },
        ],
      }}
      sections={[
        {
          heading: "Anthem Center vs golf membership",
          body: "Anthem Center is the community clubhouse with indoor and outdoor pools, fitness, and dining. Confirm current square footage on the HOA packet. Golf at Anthem Country Club or Revere is a separate membership question — do not assume the HOA includes golf. I separate club dues from HOA in every offer worksheet.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} shows a Sun City Anthem median listing of ${median}. Henderson city listing median on the same pull was ${formatUsd(LISTING_MEDIANS_USD.hendersonListing)}. Golf-course and view lots list above the Sun City sample. Confirm HOA on the resale docs.`,
        },
        {
          heading: "How this differs from Solera",
          body: "Solera at Anthem is a smaller guard-gated 55+ community, also in Henderson 89052, with a different HOA and a rule set that more often requires all occupants 55+. Sun City Anthem is the large campus. I tour both when a buyer wants Henderson 55+ without assuming they want 7,000 neighbors.",
        },
        {
          heading: "Commute from 89052",
          body: "St. Rose Parkway and I-215 are the usual spines. Green Valley retail is closer than Downtown Summerlin. Time the drive if you still use Summerlin medical weekly. Email homes@heyberkshire.com or call (702) 222-1964 with the workplace or hospital address — I will not rank Henderson vs Summerlin as a slogan.",
        },
        {
          heading: "How I send Sun City Anthem matches",
          body: "Tell me one-story vs two-story, golf-course vs interior, and occupancy. I filter MLS to this campus, not Solera and not the broader Anthem sample. Email homes@heyberkshire.com or call (702) 222-1964.",
        },
      ]}
      faqs={[
        {
          question: "What is the age requirement for Sun City Anthem?",
          answer:
            "It is a 55+ HOPA community. At least one resident in each home must typically be 55+, and occupancy under 19 is restricted. Confirm current CC&Rs.",
        },
        {
          question: "What is the median home price?",
          answer: `Realtor.com reported ${median} as the Sun City Anthem median listing price as of ${MARKET_SNAPSHOT_AS_OF}. Ask for a live CMA.`,
        },
        {
          question: "Is golf included in the HOA?",
          answer:
            "Usually no. Confirm whether the listing includes any golf privilege. Club membership is a separate contract.",
        },
        {
          question: "How do I get current Sun City Anthem listings?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964. I send live MLS filtered to this campus, not the broader Anthem sample.",
        },
      ]}
      related={[
        { href: "/55-plus-communities", label: "All 55+ communities" },
        {
          href: "/55-plus-communities/solera-anthem",
          label: "Solera at Anthem",
        },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin",
        },
        { href: "/neighborhoods/henderson", label: "Henderson all-ages homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
