import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Siena Homes for Sale | Guard-Gated 55+ Summerlin 89135",
    description:
      "Siena 55+ homes in Summerlin South ZIP 89135. Guard-gated campus, golf club vs HOA, current listings with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "Siena Summerlin homes for sale",
      "Siena 55 plus Las Vegas",
      "Siena 89135",
    ],
  },
  {
    src: PAGE_HERO_IMAGES.fiftyFivePlus.src,
    alt: PAGE_HERO_IMAGES.fiftyFivePlus.alt,
  },
);

const summerlinSouth = formatUsd(LISTING_MEDIANS_USD.summerlinSouth);

export default function SienaPage() {
  return (
    <NeighborhoodGuide
      name="Siena"
      slug="siena"
      pathPrefix="/55-plus-communities"
      badge="55+ HOPA community"
      h1="Siena Homes in Summerlin South"
      intro="Siena is a guard-gated 55+ campus in Summerlin South ZIP 89135. Sunrise Company developed it (construction began 1999; sales completed 2006). It is not Sun City Summerlin and it is not Trilogy. Confirm occupancy, golf-club dues, and HOA on the resale packet."
      zipCodes={["89135"]}
      city="Las Vegas"
      imageSrc={PAGE_HERO_IMAGES.fiftyFivePlus.src}
      imageAlt="Summerlin 55-plus golf and rec setting used for the Siena guide until a first-party Siena street photo is on file"
      stats={[
        { value: "Confirm HOA", label: "Home count" },
        { value: "Gated", label: "Access" },
        { value: "89135", label: "ZIP" },
        {
          value: summerlinSouth,
          label: "Summerlin South listing median (not Siena alone)",
        },
      ]}
      senior={{
        priceRange: "Confirm with live CMA",
        hoaFees: "Confirm on resale docs",
        amenities: [
          { name: "Guard-gated entry" },
          { name: "Community center" },
          { name: "Fitness center" },
          { name: "Indoor pool" },
        ],
      }}
      sections={[
        {
          heading: "Who built it, and who it is not",
          body: "Sunrise Company’s own record: age-qualified master plan, construction started February 1999, sales completed 2006. Confirm current acreage on HOA or master-plan docs. That is not Del Webb’s Sun City Summerlin in 89134, and it is not Shea’s Trilogy in the same 89135 ZIP. I tour Siena vs Trilogy vs Sun City on the same week when a buyer is choosing gate, golf, and vintage.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `I will not publish a Siena-only median I cannot source. The Summerlin South listing median on this site is ${summerlinSouth} — a ZIP sample, not this HOA. Golf-front vs interior lots do not share one number. Ask for a live CMA on the floor plan.`,
        },
        {
          heading: "Golf club vs HOA",
          body: "Siena has an 18-hole golf course. Club membership and HOA are separate line items on many files. I put both on the worksheet before you bid. Do not assume the gate dues include golf.",
        },
        {
          heading: "Occupancy",
          body: "Marketing says 55+. Some older write-ups say 50+. I read the current CC&Rs. Guest stays and under-age occupants are in the same packet. HOPA is a federal floor, not a substitute for the recorded rules.",
        },
      ]}
      faqs={[
        {
          question: "Is Siena a Del Webb community?",
          answer:
            "No. Sunrise Company developed Siena. Sun City Summerlin is the large Del Webb campus in ZIP 89134.",
        },
        {
          question: "Is Siena the same as Trilogy at Summerlin?",
          answer:
            "No. Same 89135 area, different builder, different HOA, different amenity campus.",
        },
        {
          question: "How do I tour?",
          answer:
            "Call (702) 222-1964. Gate access is arranged in advance. I will not quote a home count from this page.",
        },
      ]}
      related={[
        { href: "/55-plus-communities", label: "All 55+ communities" },
        {
          href: "/55-plus-communities/trilogy-summerlin",
          label: "Trilogy at Summerlin",
        },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin",
        },
        { href: "/neighborhoods/summerlin", label: "Summerlin all-ages homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
