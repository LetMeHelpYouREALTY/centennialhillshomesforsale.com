import type { Metadata } from "next";
import TopicGuide from "@/components/sections/TopicGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";

export const metadata: Metadata = {
  title: "Las Vegas Luxury Homes for Sale | Dr. Jan Duffy",
  description:
    "Las Vegas and Henderson luxury listings: The Ridges, Tournament Hills, MacDonald Highlands, Southern Highlands. Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Las Vegas luxury homes",
    "The Ridges Las Vegas",
    "Summerlin luxury real estate",
    "MacDonald Highlands Henderson",
  ],
};

export default function LuxuryHomesPage() {
  return (
    <TopicGuide
      name="luxury listings"
      slug="luxury-homes"
      badge="Luxury"
      h1="Las Vegas Luxury Homes for Sale"
      imageSrc="/images/hero/luxury-ridges.png"
      imageAlt="Gated custom estate architecture in The Ridges, Las Vegas"
      intro="This is the listing-side companion to the luxury buyer guide: how Dr. Jan Duffy prices, photographs, and gates a $1M+ Clark County home — without celebrity marketing."
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.summerlinSouth),
          label: "Summerlin South listing median",
        },
        {
          value: formatUsd(LISTING_MEDIANS_USD.southernHighlands),
          label: "S. Highlands listing median",
        },
        { value: "HOA + arch", label: "Docs before live" },
        { value: "MLS + BHHS", label: "Distribution" },
      ]}
      sections={[
        {
          heading: "Pricing is a CMA, not a round number",
          body: `As of ${MARKET_SNAPSHOT_AS_OF}, Summerlin South listing median is ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)} and Southern Highlands ${formatUsd(LISTING_MEDIANS_USD.southernHighlands)}. Those samples mix gated and open product. I will not list your Ridges lot at a Southern Highlands median. Bring the address; I pull same-gate sales.`,
        },
        {
          heading: "What luxury marketing actually is here",
          body: "Professional stills, a floor plan, and a showing window the gate can staff. Berkshire Hathaway HomeServices syndication is the distribution layer. I do not promise magazine covers or named buyers. Architectural review can add weeks before you go live — budget that.",
        },
        {
          heading: "Seller privacy",
          body: "Signage, broker tours, and Coming Soon rules are your call. Occupied luxury listings often use appointment-only and a lockbox that the gate will honor. I write that into the listing agreement.",
        },
      ]}
      faqs={[
        {
          question: "Will you list a home under $1M as luxury?",
          answer:
            "I market the house you have. “Luxury” on this site means gated custom, view, and estate product. A well-finished $700K Summerlin resale is still a resale.",
        },
        {
          question: "Do I need staging?",
          answer:
            "Occupied homes often need less furniture, not more. I decide after I walk the rooms.",
        },
        {
          question: "How do buyers get through the gate?",
          answer:
            "I schedule with the listing desk and the guard. Call 702-222-1964.",
        },
      ]}
      related={[
        {
          href: "/buyers/luxury-homes-las-vegas",
          label: "Luxury buyer guide",
        },
        { href: "/neighborhoods/the-ridges", label: "The Ridges" },
        {
          href: "/neighborhoods/red-rock-country-club",
          label: "Red Rock Country Club",
        },
        { href: "/sellers", label: "Selling guide" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
