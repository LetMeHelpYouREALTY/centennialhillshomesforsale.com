import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import { MARKET_SNAPSHOT_AS_OF } from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Skye Canyon Homes for Sale | Northwest Las Vegas",
    description:
      "Skye Canyon Las Vegas homes for sale — Skye Center amenities, Floyd Lamb Park adjacency, current listings with Dr. Jan Duffy. Call (702) 222-1964.",
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
      ]}
      faqs={[
        {
          question: "What is the median home price in Skye Canyon?",
          answer:
            "UNKNOWN as a single current median I will stand behind without a live pull. Older $550K headlines are not a 2026 CMA. Call 702-222-1964 for current listings.",
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
