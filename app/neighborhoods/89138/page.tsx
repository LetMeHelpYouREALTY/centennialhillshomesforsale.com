import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import { formatUsd, LISTING_MEDIANS_USD } from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "89138 Homes for Sale | Summerlin West ZIP Code",
    description:
      "Homes for sale in 89138 — Summerlin West and Reverence. Current Las Vegas listings with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "homes for sale in 89138",
      "houses for sale in 89138",
      "real estate in 89138",
      "homes for sale 89138",
    ],
  },
  {
    src: "/images/neighborhoods/89138.png",
    alt: "Newer Summerlin West homes in ZIP 89138 Las Vegas",
  },
);

export default function Zip89138Page() {
  return (
    <NeighborhoodGuide
      name="89138"
      slug="89138"
      h1="Homes for Sale in 89138 (Summerlin West)"
      intro="89138 is the Summerlin West ZIP. Searchers asking for homes, houses, or real estate in 89138 are not searching Centennial Hills."
      zipCodes={["89138"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/89138.png"
      imageAlt="Newer Summerlin West homes in ZIP 89138 Las Vegas"
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
          label: "Summerlin West listing median",
        },
        { value: "89138", label: "ZIP code" },
        { value: "West", label: "Summerlin side" },
        { value: "Newer", label: "Typical vintage" },
      ]}
      sections={[
        {
          heading: "How 89138 sits on the map",
          body: "89138 covers later Summerlin villages on the far west edge of the master plan, including Reverence. 89144 is a different Summerlin ZIP (Arbors / Trails / Queensridge). 89134 covers older central Summerlin product including Sun City Summerlin and Tournament Hills. 89149 is Centennial Hills / northwest Las Vegas.",
        },
        {
          heading: "Buying in 89138",
          body: "Expect newer construction, active HOAs, and view premiums on elevated lots. Days on market vary by village and week — I pull live MLS, not a blog sample. Not every 89138 listing is a Reverence home. I filter by subdivision, not ZIP alone.",
        },
        {
          heading: "Commute and daily errands",
          body: "Most 89138 buyers use the 215 and Downtown Summerlin for groceries, medical, and retail. Time the drive at your actual hour — midday is not rush hour. Red Rock Canyon trailheads sit west of the ZIP; that is recreation access, not a listing amenity in the deed.",
        },
        {
          heading: "HOA, SID, and the CMA",
          body: `The Summerlin West listing median on this site is ${formatUsd(LISTING_MEDIANS_USD.summerlinWest)} — a ZIP sample, not a Reverence sold price and not your lot. HOA plus any SID/LID belong on the worksheet before you bid. I will not invent a days-on-market average for the ZIP.`,
        },
        {
          heading: "How I send 89138 matches",
          body: "Tell me beds, a price band, and whether you want Reverence or another 89138 village. I filter MLS by subdivision, then email the set. Call (702) 222-1964 or email homes@heyberkshire.com — I will not dump the whole ZIP.",
        },
      ]}
      faqs={[
        {
          question: "Is 89138 in Henderson?",
          answer:
            "No. 89138 is Las Vegas / Summerlin West. Henderson Inspirada is 89044.",
        },
        {
          question: "Is every 89138 listing in Reverence?",
          answer:
            "No. Reverence is one village inside 89138. I filter by subdivision on MLS, not ZIP alone.",
        },
        {
          question: "Do you have 89138 listings right now?",
          answer:
            "Inventory changes daily. Call (702) 222-1964 and I will send the current MLS set for your price and bed count.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/summerlin-west",
          label: "Summerlin West guide",
        },
        { href: "/neighborhoods/89144", label: "89144 homes for sale" },
        {
          href: "/neighborhoods/centennial-hills",
          label: "Centennial Hills homes",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
