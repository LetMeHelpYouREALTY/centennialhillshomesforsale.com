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
    title: "Sun City Aliante Homes for Sale | 55+ North Las Vegas",
    description:
      "Sun City Aliante 55+ homes in North Las Vegas 89084. Golf, rec center, current listings with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "Sun City Aliante homes for sale",
      "Sun City Aliante Las Vegas",
      "55 plus communities North Las Vegas",
    ],
  },
  {
    src: "/images/neighborhoods/sun-city-aliante.png",
    alt: "Sun City Aliante North Las Vegas 55-plus homes and rec pavilion",
  },
);

const nlv = formatUsd(LISTING_MEDIANS_USD.northLasVegas);

export default function SunCityAliantePage() {
  return (
    <NeighborhoodGuide
      name="Sun City Aliante"
      slug="sun-city-aliante"
      pathPrefix="/55-plus-communities"
      badge="55+ HOPA community"
      h1="Sun City Aliante Homes for Sale"
      intro="Sun City Aliante is the Del Webb 55+ village inside Aliante in North Las Vegas ZIP 89084 — smaller and typically lower-priced than Sun City Summerlin, with its own golf course and rec campus."
      zipCodes={["89084"]}
      city="North Las Vegas"
      imageSrc="/images/neighborhoods/sun-city-aliante.png"
      imageAlt="Sun City Aliante North Las Vegas 55-plus homes and rec pavilion"
      latitude={36.322}
      longitude={-115.06}
      stats={[
        { value: nlv, label: "NLV city listing median" },
        { value: "2,800+", label: "Homes" },
        { value: "18-hole", label: "Golf" },
        { value: "89084", label: "ZIP" },
      ]}
      senior={{
        numberOfHomes: 2800,
        priceRange: `North Las Vegas city listing median ${nlv} is not this HOA`,
        hoaFees: "Confirm on resale docs",
        amenities: [
          { name: "18-hole golf course" },
          { name: "Recreation center" },
          { name: "Swimming pools" },
          { name: "Fitness center" },
        ],
      }}
      sections={[
        {
          heading: "Aliante the master plan vs Sun City the village",
          body: "Aliante includes all-ages housing. Sun City Aliante is the age-restricted village with its own HOA and golf. Listings that say “Aliante” without “Sun City” may not be 55+. I confirm the subdivision on the MLS record.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} shows a North Las Vegas city median listing of ${nlv}. That is citywide, not Sun City Aliante. Older marketing bands of $280K–$550K must be checked against live MLS. Sun City Summerlin’s listing median is a different ZIP and a different campus — do not copy it here.`,
        },
        {
          heading: "Commute",
          body: "I-15 and the northern 215 are the spines. This is farther from Downtown Summerlin than Sun City Summerlin. Time the drive if you still use Summerlin medical or retail weekly.",
        },
      ]}
      faqs={[
        {
          question: "Is Sun City Aliante 55+?",
          answer:
            "Yes. HOPA rules apply. Confirm occupancy in the current CC&Rs.",
        },
        {
          question: "Is it cheaper than Sun City Summerlin?",
          answer:
            "Often on a like-for-like floor plan, but that is not a rule. Ask for paired comps. Location and golf-course lots swing the number.",
        },
        {
          question: "Do you manage rentals here?",
          answer:
            "No. Dr. Jan Duffy represents buyers and sellers. She can refer a licensed manager.",
        },
      ]}
      related={[
        { href: "/55-plus-communities", label: "All 55+ communities" },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin",
        },
        {
          href: "/neighborhoods/north-las-vegas",
          label: "North Las Vegas homes",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
