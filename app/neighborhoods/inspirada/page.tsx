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
    title: "Inspirada Homes for Sale | Henderson 89044 Real Estate",
    description:
      "Inspirada homes for sale in Henderson 89044 — Groves townhomes, Aventura Park, remaining new construction. Dr. Jan Duffy. Call 702-222-1964.",
    keywords: [
      "inspirada henderson",
      "homes for sale in inspirada henderson nv",
      "groves at inspirada",
      "aventura park inspirada",
    ],
  },
  {
    src: "/images/neighborhoods/inspirada.png",
    alt: "Inspirada Henderson parks and residential streets",
  },
);

const median = formatUsd(LISTING_MEDIANS_USD.inspirada);

export default function InspiradaPage() {
  return (
    <NeighborhoodGuide
      name="Inspirada"
      slug="inspirada"
      h1="Inspirada Homes for Sale in Henderson"
      intro="Inspirada is a park-based master plan in Henderson ZIP 89044. Groves is resale townhomes. Aventura Park is an amenity, not a subdivision. Remaining new construction, if any, is in other builder pods — not Groves."
      zipCodes={["89044"]}
      city="Henderson"
      imageSrc="/images/neighborhoods/inspirada.png"
      imageAlt="Inspirada Henderson parks and residential streets"
      latitude={35.956}
      longitude={-115.128}
      stats={[
        { value: median, label: "Median listing" },
        { value: "89044", label: "ZIP code" },
        { value: "Parks", label: "Amenity model" },
        { value: "Resale + finish", label: "2026 inventory" },
      ]}
      sections={[
        {
          heading: "Parks, not one giant clubhouse",
          body: "Inspirada is organized around neighborhood parks. Aventura Park (resident pool, courts, dog park) is the one buyers name most. Capriola, Potenza, and Solista parks serve other pods. HOA access rules apply to resident pools. I walk the park that matches the listing street.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE} shows an Inspirada median listing of ${median}. Townhomes in Groves, detached KB / Toll / Tri Pointe product, and any leftover new construction do not share one number. Mid-2026 reporting put Inspirada in a final new-construction window measured in tens of homes across remaining builder pods — confirm on a live pull, not a 2024 blog.`,
        },
        {
          heading: "Groves vs detached",
          body: "The Groves at Inspirada is two-story KB townhome product (about 1,430–1,921 sq ft) that is now resale only. Linea, Alterra, and similar pods are detached. If you searched “new homes in Inspirada” in 2026, say whether you need a townhome or a house so I do not send the wrong village.",
        },
        {
          heading: "Commute",
          body: "St. Rose Parkway to I-15 is the usual spine toward the airport. Green Valley and The District are a short hop north. Time the drive at your hour; midday is not 5 p.m.",
        },
      ]}
      faqs={[
        {
          question: "What is the current median home price in Inspirada?",
          answer: `Realtor.com reported ${median} as the Inspirada median listing price as of ${MARKET_SNAPSHOT_AS_OF}. Ask for a live CMA.`,
        },
        {
          question: "Are Groves townhomes still new construction?",
          answer:
            "No. Groves is resale. Remaining Inspirada new construction, if any, is in other builder pods.",
        },
        {
          question: "Is Aventura Park a neighborhood?",
          answer:
            "No. Aventura Park is a community park inside Inspirada. Groves is a townhome neighborhood that can use it under HOA rules.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/groves-at-inspirada",
          label: "Groves at Inspirada townhomes",
        },
        { href: "/neighborhoods/henderson", label: "Henderson homes" },
        { href: "/neighborhoods/green-valley", label: "Green Valley homes" },
        { href: "/new-construction", label: "Las Vegas new construction" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
