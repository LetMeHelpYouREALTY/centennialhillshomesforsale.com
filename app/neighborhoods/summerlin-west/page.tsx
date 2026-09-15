import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import { formatUsd, LISTING_MEDIANS_USD } from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Summerlin West Homes for Sale | 89138 Real Estate",
    description:
      "Summerlin West homes for sale in ZIP 89138 — Reverence and later Howard Hughes villages. Search listings with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "summerlin west homes for sale",
      "summerlin west real estate",
      "89138 homes for sale",
      "west summerlin homes for sale",
    ],
  },
  {
    src: "/images/neighborhoods/summerlin-west.png",
    alt: "Newer Summerlin West homes in ZIP 89138 with Red Rock Canyon backdrop",
  },
);

export default function SummerlinWestPage() {
  return (
    <NeighborhoodGuide
      name="Summerlin West"
      slug="summerlin-west"
      h1="Summerlin West Homes for Sale (89138)"
      intro="Summerlin West is the later Howard Hughes build-out on the far west side of the master plan, primarily ZIP 89138. It is not Centennial Hills and it is not Tournament Hills."
      zipCodes={["89138"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/summerlin-west.png"
      imageAlt="Newer Summerlin West homes in ZIP 89138 with Red Rock Canyon backdrop"
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
          label: "Median listing",
        },
        { value: "89138", label: "Primary ZIP" },
        { value: "Newer", label: "Housing stock" },
        { value: "Red Rock", label: "Trail access" },
      ]}
      sections={[
        {
          heading: "What 89138 buyers are shopping",
          body: "Queries for Summerlin West homes, west Summerlin, and homes for sale in 89138 point at villages such as Reverence and other Village 26-era product: newer floor plans, foothill views, and a different commute than 89149 Centennial Hills. The sourced ZIP listing median on this page is not a Reverence sold price. Days on market vs Tournament Hills are UNKNOWN until I pull live MLS. Call for current 89138 listings.",
        },
        {
          heading: "Commute and daily errands",
          body: "Summerlin West sits farther west than Downtown Summerlin. Drive times to the office corridor along 215 and to Red Rock Canyon Scenic Drive are the usual tradeoff. Grocery and services have filled in with the villages; confirm the exact parcel against current retail pads rather than a 2018 map.",
        },
        {
          heading: "First-party representation",
          body: "This page is written for this website’s readers, not copied from another brokerage’s Summerlin guide. Builder incentives on remaining new construction (if any lot is still open) are negotiated with your own agent, not the seller’s kiosk. Call (702) 222-1964 or email homes@heyberkshire.com.",
        },
        {
          heading: "HOA, SID, and the 89138 sample",
          body: `The Summerlin West listing median on this site is ${formatUsd(LISTING_MEDIANS_USD.summerlinWest)} — a ZIP sample, not a Reverence sold price. HOA plus any SID/LID belong on the worksheet before you bid. Email homes@heyberkshire.com or call (702) 222-1964 with the village name.`,
        },
        {
          heading: "How I send Summerlin West matches",
          body: "Name Reverence or another 89138 village, beds, and a price band. I filter by subdivision, then email the set. I will not mix Tournament Hills 89134 custom lots into this pull. Email homes@heyberkshire.com or call (702) 222-1964.",
        },
      ]}
      faqs={[
        {
          question: "Is 89138 the same as Centennial Hills?",
          answer:
            "No. 89138 is Summerlin West. Centennial Hills listings are mainly 89149, 89131, and 89143 in northwest Las Vegas.",
        },
        {
          question: "Where is Reverence?",
          answer:
            "Reverence is a Summerlin West village in 89138. It is newer production and view-oriented product, not the 1990s custom stock in Tournament Hills.",
        },
        {
          question: "How do I get current 89138 listings?",
          answer:
            "Call or text Dr. Jan Duffy at (702) 222-1964 or email homes@heyberkshire.com. I will send matching MLS results rather than a scraped feed.",
        },
        {
          question: "Can I email a CMA request?",
          answer:
            "Yes. Email homes@heyberkshire.com with beds, lot, and the village (Reverence or otherwise). I filter by subdivision, not ZIP alone.",
        },
      ]}
      related={[
        { href: "/neighborhoods/89138", label: "89138 ZIP homes for sale" },
        {
          href: "/neighborhoods/tournament-hills",
          label: "Tournament Hills Summerlin",
        },
        { href: "/neighborhoods/89144", label: "89144 Summerlin homes" },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin homes",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
