import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import { MARKET_SNAPSHOT_AS_OF } from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Skye Canyon Homes for Sale | Northwest Las Vegas",
    description:
      "Skye Canyon Las Vegas homes for sale — Skye Center amenities, Floyd Lamb Park adjacency, current listings with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "Skye Canyon homes for sale",
      "Skye Canyon Las Vegas",
      "northwest Las Vegas homes",
      "new construction Skye Canyon",
    ],
  },
  {
    src: "/images/neighborhoods/skye-canyon.png",
    alt: "Northwest Las Vegas desert foothills near Skye Canyon",
  },
);

export default function SkyeCanyonPage() {
  return (
    <NeighborhoodGuide
      name="Skye Canyon"
      slug="skye-canyon"
      h1="Skye Canyon Homes for Sale"
      intro="Skye Canyon is a newer northwest Las Vegas master plan around Skye Center, with trail access toward Floyd Lamb Park. It is not Centennial Hills and it is not Summerlin."
      zipCodes={["89166"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/skye-canyon.png"
      imageAlt="Northwest Las Vegas desert foothills near Skye Canyon"
      latitude={36.313}
      longitude={-115.318}
      stats={[
        { value: "89166", label: "Primary ZIP" },
        { value: "Skye Center", label: "Amenity campus" },
        { value: "Newer", label: "Housing stock" },
        { value: "CMA", label: "Price any bid" },
      ]}
      sections={[
        {
          heading: "Skye Center vs the house",
          body: "Skye Center is the amenity campus (pools, fitness, courts, event space) — confirm size and access in the HOA packet. HOA dues buy access — they do not describe the floor plan on a specific street. Builder pods inside Skye Canyon have different elevations and lot premiums. I tour the house, then the center, not the reverse.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: "Public January 2026 blogs that cited a $550K Skye Canyon median should not be treated as a current CMA. Newer northwest production moves with incentives, rate buydowns, and remaining inventory. I send live MLS results after a call. Compare Centennial Hills resale (older lots, Town Center retail) against Skye Canyon (newer plans, Skye Center) on the same afternoon if you are choosing northwest vintage.",
        },
        {
          heading: "Floyd Lamb and the northern 215",
          body: "Floyd Lamb Park at Tule Springs is adjacent public parkland — ponds, trails, historic ranch buildings — not an HOA pool. Commute uses the northern 215 and US-95. Time it at your hour; this is farther from the Strip than Centennial Town Center.",
        },
        {
          heading: "Builder incentives vs a resale CMA",
          body: "Remaining new-construction pods can still run rate buydowns and option credits that a 2021 resale does not have. I register as your agent before the model office, then CMA resale against the builder worksheet in the same week. Email homes@heyberkshire.com or call (702) 222-1964 before you sign the kiosk iPad.",
        },
        {
          heading: "How I send Skye Canyon matches",
          body: "Say new construction vs resale, beds, and whether Skye Center access from the lot matters. I filter 89166 by builder pod, then email the set. Email homes@heyberkshire.com or call (702) 222-1964 before the model office iPad.",
        },
      ]}
      faqs={[
        {
          question: "What is the median home price in Skye Canyon?",
          answer:
            "UNKNOWN as a single current median I will stand behind without a live pull. Older $550K headlines are not a 2026 CMA. Call (702) 222-1964 for current listings.",
        },
        {
          question: "Is Skye Canyon part of Centennial Hills?",
          answer:
            "No. Skye Canyon is a separate newer master plan, primarily ZIP 89166. Centennial Hills listings are mainly 89149, 89131, and 89143.",
        },
        {
          question: "What is Skye Center?",
          answer:
            "Skye Center is the community amenity campus. Confirm current HOA access rules in the resale package.",
        },
        {
          question: "How do I get current 89166 listings?",
          answer:
            "Call (702) 222-1964 or email homes@heyberkshire.com with beds and whether you want new construction or resale. I send live MLS.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/centennial-hills",
          label: "Centennial Hills homes",
        },
        { href: "/neighborhoods/lone-mountain", label: "Lone Mountain homes" },
        {
          href: "/neighborhoods/north-las-vegas",
          label: "North Las Vegas homes",
        },
        { href: "/new-construction", label: "New construction" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
