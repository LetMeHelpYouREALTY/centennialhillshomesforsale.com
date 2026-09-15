import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import { MARKET_SNAPSHOT_AS_OF } from "@/lib/market-snapshots";

export const metadata: Metadata = {
  title: "The Ridges Homes for Sale | Guard-Gated Summerlin Luxury",
  description:
    "The Ridges Summerlin luxury homes with Dr. Jan Duffy, BHHS Nevada Properties. Guard-gated villages, view lots, private tours. Call (702) 222-1964.",
  keywords: [
    "The Ridges homes for sale",
    "The Ridges Summerlin",
    "luxury homes Las Vegas",
    "guard gated Summerlin",
  ],
};

export default function TheRidgesPage() {
  return (
    <NeighborhoodGuide
      name="The Ridges"
      slug="the-ridges"
      h1="The Ridges Luxury Homes in Summerlin"
      intro="The Ridges is a guard-gated custom-home village in Summerlin with multiple enclaves, architectural controls, and a wide price spread. It is not Tournament Hills, not Red Rock Country Club, and not Centennial Hills."
      zipCodes={["89135"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/the-ridges.png"
      imageAlt="The Ridges Summerlin luxury homes against desert mountain views"
      latitude={36.144}
      longitude={-115.351}
      stats={[
        { value: "Gated", label: "Access" },
        { value: "Custom", label: "Typical product" },
        { value: "89135", label: "Primary ZIP" },
        { value: "CMA", label: "Price any bid" },
      ]}
      sections={[
        {
          heading: "What you are actually buying",
          body: "The Ridges is a collection of villages inside a guard-gated Summerlin map, with strict architectural guidelines and a small number of home sites relative to production tracts. Product runs from smaller custom resales to estate lots with Red Rock or Strip views. A single “median” is not useful here — one closing can swing the sample. I price from live comps, lot orientation, and the actual house.",
        },
        {
          heading: "How it compares to nearby Summerlin luxury",
          body: "Tournament Hills (89134) is custom lots near TPC Summerlin. Red Rock Country Club is a golf-membership setting with attached and detached product. The Ridges usually wins on estate scale and view corridors, not on golf-club access. I will not rank them as better. I will match gate, dues, and the lot.",
        },
        {
          heading: `Privacy as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: "I do not publish resident names. Access is gated; I schedule with the listing desk. HOA and architectural packages are part of due diligence, not an afterthought. Call 702-222-1964 for current inventory. I do not scrape off-market gossip onto this domain.",
        },
      ]}
      faqs={[
        {
          question: "What is the median home price in The Ridges?",
          answer:
            "UNKNOWN as a single reliable median — inventory is thin and product is custom. Public January 2026 roundups that cited $2.5 million should not be treated as a 2026 CMA. Ask for live comps.",
        },
        {
          question: "Is The Ridges the same as Tournament Hills?",
          answer:
            "No. Tournament Hills is a different Summerlin village in 89134 near TPC Summerlin. The Ridges is a separate guard-gated map, primarily 89135.",
        },
        {
          question: "Can I see homes this week?",
          answer:
            "Usually yes, with gate access arranged in advance. Call or text Dr. Jan Duffy at 702-222-1964.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/tournament-hills",
          label: "Tournament Hills real estate",
        },
        {
          href: "/neighborhoods/red-rock-country-club",
          label: "Red Rock Country Club",
        },
        { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
        { href: "/luxury-homes", label: "Las Vegas luxury homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
