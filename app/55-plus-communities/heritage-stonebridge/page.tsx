import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import { MARKET_SNAPSHOT_AS_OF } from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Heritage at Stonebridge Homes | Guard-Gated 55+ Summerlin",
    description:
      "Heritage at Stonebridge Summerlin 55+ homes. Guard-gated pocket near Downtown Summerlin. Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "Heritage at Stonebridge homes for sale",
      "Heritage Stonebridge Summerlin",
      "guard-gated 55+ community Las Vegas",
    ],
  },
  {
    src: "/images/neighborhoods/heritage-stonebridge.png",
    alt: "Summerlin residential setting near Heritage at Stonebridge",
  },
);

export default function HeritageStonebridgePage() {
  return (
    <NeighborhoodGuide
      name="Heritage at Stonebridge"
      slug="heritage-stonebridge"
      pathPrefix="/55-plus-communities"
      badge="55+ HOPA community"
      h1="Heritage at Stonebridge Homes in Summerlin"
      intro="Heritage at Stonebridge is a smaller guard-gated 55+ community in Summerlin ZIP 89134 — smaller than Sun City Summerlin, closer to Downtown Summerlin retail than Trilogy’s west-edge setting."
      zipCodes={["89134"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/heritage-stonebridge.png"
      imageAlt="Summerlin residential setting near Heritage at Stonebridge"
      latitude={36.195}
      longitude={-115.292}
      stats={[
        { value: "Confirm HOA", label: "Home count" },
        { value: "Gated", label: "Access" },
        { value: "89134", label: "ZIP" },
        { value: "CMA", label: "Price any bid" },
      ]}
      senior={{
        priceRange: "Confirm with live CMA",
        hoaFees: "Confirm on resale docs",
        amenities: [
          { name: "Guard-gated entry" },
          { name: "Clubhouse" },
          { name: "Pool and spa" },
          { name: "Fitness center" },
        ],
      }}
      sections={[
        {
          heading: "Smaller gated campus vs Sun City Summerlin",
          body: "Sun City Summerlin is the large Del Webb map in the same ZIP. Heritage is a smaller, guard-gated pocket with its own HOA. Buyers who want a gate and a shorter hop to Downtown Summerlin often land here. Buyers who want the large Del Webb rec campus stay at Sun City. Confirm golf membership on the club packet. I will not call either “better.”",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: "Public range headlines are marketing bands, not a CMA. Sun City Summerlin’s realtor.com listing median is a nearby sample, not this HOA. I pull Heritage comps only. Confirm HOA on the resale package.",
        },
        {
          heading: "Red Rock and Downtown Summerlin",
          body: "Downtown Summerlin retail and the 215 are the daily geography. Red Rock Canyon is west — public land, a drive, not a community trail. Gate access is scheduled with the listing desk.",
        },
        {
          heading: "HOA packet before the gate",
          body: "Heritage is a smaller guard-gated HOPA pocket. I pull occupancy, guest-stay, and dues from the current resale package — not a Sun City Summerlin listing median from the same ZIP. Email homes@heyberkshire.com or call (702) 222-1964 so I can schedule the guard with the listing desk.",
        },
      ]}
      faqs={[
        {
          question: "Is Heritage at Stonebridge 55+?",
          answer:
            "Yes. HOPA rules apply. Confirm occupancy and guest limits in the current CC&Rs.",
        },
        {
          question: "Is it the same as Sun City Summerlin?",
          answer:
            "No. Same ZIP, different HOA, different amenity set, guard-gated pocket vs large campus.",
        },
        {
          question: "How do I tour?",
          answer: "Call 702-222-1964. Gate access is arranged in advance.",
        },
        {
          question: "Can I email the HOA packet for a review?",
          answer:
            "Yes. Email homes@heyberkshire.com with the listing address. I review occupancy and dues before you write.",
        },
      ]}
      related={[
        { href: "/55-plus-communities", label: "All 55+ communities" },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin",
        },
        {
          href: "/55-plus-communities/trilogy-summerlin",
          label: "Trilogy at Summerlin",
        },
        { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
