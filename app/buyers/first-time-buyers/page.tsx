import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "First-Time Home Buyers Las Vegas | Dr. Jan Duffy",
    description:
      "First-time Las Vegas home buyers: written buyer agreement, FHA/VA, inspections, and live comps with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "first time home buyer Las Vegas",
      "FHA Las Vegas",
      "first time buyer Nevada",
    ],
  },
  {
    src: "/images/hero/first-time-buyers.png",
    alt: "First-time buyers on the porch of a single-story Las Vegas home",
  },
);

export default function FirstTimeBuyersPage() {
  return (
    <TopicGuide
      name="first-time buying"
      slug="first-time-buyers"
      badge="First-time buyers"
      h1="First-Time Home Buyers in Las Vegas"
      imageSrc="/images/hero/first-time-buyers.png"
      imageAlt="First-time buyers on the porch of a single-story Las Vegas home"
      intro="A first purchase in Clark County is a written buyer agreement, a lender pre-approval, and a house that survives inspection — not a “free agent” slogan. Dr. Jan Duffy walks the contract dates with you, including 89138 Summerlin West. I will not send a first-time file to Siena unless HOPA occupancy actually fits."
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.lasVegas),
          label: "LV listing median",
        },
        {
          value: formatUsd(LISTING_MEDIANS_USD.northLasVegas),
          label: "NLV listing median",
        },
        { value: "Contract dates", label: "Set with lender" },
        { value: "Written", label: "Buyer agreement" },
      ]}
      sections={[
        {
          heading: "Compensation after the 2024 NAR changes",
          body: "Buyer-broker pay is not an automatic MLS offer. We sign a written buyer agreement that states how I am paid. The seller may contribute, you may pay, or both. I will not tell you representation is free because “the seller always pays.”",
        },
        {
          heading: `Price bands as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `Las Vegas city median listing is ${formatUsd(LISTING_MEDIANS_USD.lasVegas)}; North Las Vegas ${formatUsd(LISTING_MEDIANS_USD.northLasVegas)}; Centennial Hills ${formatUsd(LISTING_MEDIANS_USD.centennialHills)}. Those are listing medians, not starter-home promises. Condos, townhomes, and 3-bed resales need their own CMA.`,
        },
        {
          heading: "Loan types I coordinate — I do not originate",
          body: "FHA, VA, conventional, and Nevada Housing Division down-payment programs exist. Eligibility changes. I introduce local lenders; I do not quote rates from memory. Ask the lender about MI, residual income, and gift funds before we tour.",
        },
        {
          heading: "Inspection is not optional because the house is “cute”",
          body: "Las Vegas sun, stucco, HVAC tonnage, and tile roofs show up on first-time inspections. I keep the inspection period on the calendar and help you decide repair vs credit vs walk. New construction still needs a walkthrough punch list.",
        },
        {
          heading: "How to start without a starter-ZIP slogan",
          body: "Get a lender pre-approval, then email homes@heyberkshire.com or call (702) 222-1964 with commute and bed count. I will not send you to “the affordable side of town.” We match HOA, square footage, and the actual drive.",
        },
      ]}
      faqs={[
        {
          question: "Do I pay Dr. Jan as a buyer?",
          answer:
            "We put compensation in a written buyer agreement before touring. It may be paid by the seller, you, or both.",
        },
        {
          question: "How much do I need down?",
          answer:
            "UNKNOWN without a lender worksheet. FHA, VA, and conventional down-payment rules differ. Get pre-approved first.",
        },
        {
          question: "Which ZIP should a first-time buyer start in?",
          answer:
            "Match commute and HOA, not a “starter neighborhood” label. Centennial Hills, North Las Vegas, and Mountains Edge are common first tours. Call (702) 222-1964 or email homes@heyberkshire.com.",
        },
      ]}
      related={[
        { href: "/buyers", label: "Home buying guide" },
        {
          href: "/neighborhoods/north-las-vegas",
          label: "North Las Vegas homes",
        },
        {
          href: "/neighborhoods/centennial-hills",
          label: "Centennial Hills homes",
        },
        { href: "/new-construction", label: "New construction" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
