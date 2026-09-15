import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "The Ridges Homes for Sale | Guard-Gated Summerlin Luxury",
    description:
      "The Ridges Summerlin luxury homes with Dr. Jan Duffy, BHHS Nevada Properties. Guard-gated villages, view lots, private tours. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "The Ridges homes for sale",
      "The Ridges Summerlin",
      "luxury homes Las Vegas",
      "guard gated Summerlin",
    ],
  },
  {
    src: "/images/neighborhoods/the-ridges.png",
    alt: "The Ridges Summerlin luxury homes against desert mountain views",
  },
);

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
        {
          value: formatUsd(LISTING_MEDIANS_USD.summerlinSouth),
          label: "Summerlin South listing median (not The Ridges alone)",
        },
      ]}
      sections={[
        {
          heading: "What you are actually buying",
          body: "The Ridges is a collection of villages inside a guard-gated Summerlin map, with strict architectural guidelines and a small number of home sites relative to production tracts. Product runs from smaller custom resales to estate lots with Red Rock or Strip views. A single “median” is not useful here — one closing can swing the sample. I price from live comps, lot orientation, and the actual house.",
        },
        {
          heading: "How it compares to nearby Summerlin luxury",
          body: "Tournament Hills (89134) is custom lots near TPC Summerlin. Red Rock Country Club is a golf-membership setting with attached and detached product. The Ridges is a guard-gated custom map. I match gate, dues, and the lot — not a ranking slogan.",
        },
        {
          heading: `Privacy and pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `I do not publish resident names. Access is gated; I schedule with the listing desk. HOA and architectural packages are part of due diligence, not an afterthought. The Summerlin South listing median on this site is ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)} — a 89135 ZIP sample, not a Ridges-only CMA. Call (702) 222-1964 for current inventory. I do not scrape off-market gossip onto this domain.`,
        },
        {
          heading: "Architectural packet before you bid",
          body: "View lots and casita plans live or die in the HOA architectural guidelines. I pull that packet with the listing, then CMA same-gate sales — not a ZIP median. Email homes@heyberkshire.com or call (702) 222-1964 with the enclave name so I can schedule the guard.",
        },
        {
          heading: "How I schedule Ridges tours",
          body: "Name the enclave if you know it. I schedule the guard with the listing desk and send same-gate comps — not a 89135 ZIP dump that includes Siena and Trilogy. Email homes@heyberkshire.com or call (702) 222-1964.",
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
            "Usually yes, with gate access arranged in advance. Call or text Dr. Jan Duffy at (702) 222-1964 or email homes@heyberkshire.com.",
        },
        {
          question: "How do I request a Ridges CMA?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964 with the address. I will not price a bid from the Summerlin South ZIP sample.",
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
    />
  );
}
