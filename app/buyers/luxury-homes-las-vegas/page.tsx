import type { Metadata } from "next";
import TopicGuide from "@/components/sections/TopicGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = {
  title: "Luxury Homes Las Vegas | The Ridges, MacDonald Highlands",
  description:
    "Las Vegas luxury homes with Dr. Jan Duffy: The Ridges, Tournament Hills, MacDonald Highlands, Southern Highlands. Private tours. Call (702) 222-1964.",
  keywords: [
    "Las Vegas luxury homes",
    "The Ridges Las Vegas",
    "MacDonald Highlands Henderson",
    "Tournament Hills",
  ],
};

export default function LuxuryHomesLasVegasPage() {
  return (
    <TopicGuide
      name="luxury buying"
      slug="luxury-homes-las-vegas"
      badge="Luxury"
      h1="Luxury Homes in Las Vegas and Henderson"
      imageSrc="/images/hero/luxury-homes.png"
      imageAlt="Luxury custom home with mountain views in The Ridges, Summerlin"
      intro="Luxury here is a lot, a gate, and a view corridor — The Ridges, Tournament Hills, Red Rock Country Club, MacDonald Highlands, Southern Highlands — not a celebrity list. Dr. Jan Duffy schedules gated access and prices from live comps."
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.southernHighlands),
          label: "S. Highlands listing median",
        },
        {
          value: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
          label: "Summerlin West listing median",
        },
        { value: "Gated", label: "Typical access" },
        { value: "CMA", label: "Every bid" },
      ]}
      sections={[
        {
          heading: "Villages, not a $1M hashtag",
          body: `A $1M listing in Summerlin North is not The Ridges. ${MARKET_SNAPSHOT_SOURCE} as of ${MARKET_SNAPSHOT_AS_OF}: Southern Highlands listing median ${formatUsd(LISTING_MEDIANS_USD.southernHighlands)}; Summerlin South ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)}; Summerlin West ${formatUsd(LISTING_MEDIANS_USD.summerlinWest)}. The Ridges and Tournament Hills are too thin for a median I will publish. MacDonald Highlands lists on a different order of magnitude than Green Valley.`,
        },
        {
          heading: "What I actually do on a luxury tour",
          body: "Gate desks, HOA architectural packets, view vs interior lots, and whether golf membership is separate from the deed. I do not publish resident names. Off-market only means a listing agent will allow a private showing — not a secret database on this website.",
        },
        {
          heading: "Discretion and representation",
          body: "Berkshire Hathaway HomeServices Nevada Properties is the brokerage. Compensation is in a written buyer agreement. For listings, marketing is negotiated before the board goes up. Call 702-222-1964.",
        },
      ]}
      faqs={[
        {
          question: "What is the median luxury home price in Las Vegas?",
          answer:
            "UNKNOWN as one number. Village listing medians differ by a factor of ten. Ask for comps in the specific gate.",
        },
        {
          question: "Can I see The Ridges this week?",
          answer:
            "Usually yes, with gate access arranged. Call or text 702-222-1964.",
        },
        {
          question: "Is MacDonald Highlands in Summerlin?",
          answer:
            "No. MacDonald Highlands is Henderson, against the McCullough Range. The Ridges is Summerlin.",
        },
      ]}
      related={[
        { href: "/luxury-homes", label: "Luxury homes overview" },
        { href: "/neighborhoods/the-ridges", label: "The Ridges" },
        {
          href: "/neighborhoods/tournament-hills",
          label: "Tournament Hills",
        },
        {
          href: "/neighborhoods/southern-highlands",
          label: "Southern Highlands",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
