import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Las Vegas Market Update | September 2026",
    description:
      "Current Las Vegas and Henderson listing medians dated September 14, 2026. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
    keywords: [
      "Las Vegas real estate market update",
      "Las Vegas housing market 2026",
      "Henderson real estate market",
    ],
  },
  {
    src: "/images/hero/market-report.png",
    alt: "Las Vegas market update notes on a desk with valley views",
  },
);

export default function MarketUpdatePage() {
  return (
    <TopicGuide
      name="market update"
      slug="market-update"
      badge="Market data"
      h1="Las Vegas Real Estate Market Update"
      imageSrc="/images/hero/market-report.png"
      imageAlt="Las Vegas market update notes on a desk with valley views"
      intro={`${MARKET_SNAPSHOT_SOURCE}. This replaces the old “week of January 20, 2026” newsletter copy. I do not auto-publish weekly MLS averages on this domain.`}
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.lasVegas),
          label: "LV listing median",
        },
        {
          value: formatUsd(LISTING_MEDIANS_USD.hendersonListing),
          label: "Henderson listing median",
        },
        {
          value: formatUsd(LISTING_MEDIANS_USD.centennialHills),
          label: "Centennial Hills listing median",
        },
        {
          value: formatUsd(LISTING_MEDIANS_USD.sunCitySummerlin),
          label: "Sun City Summerlin listing median",
        },
      ]}
      sections={[
        {
          heading: `What changed vs the old January post as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `Las Vegas city listing median is ${formatUsd(LISTING_MEDIANS_USD.lasVegas)}, not a $450K January headline. Henderson listing ${formatUsd(LISTING_MEDIANS_USD.hendersonListing)}, sold ${formatUsd(LISTING_MEDIANS_USD.hendersonSold)}. Centennial Hills ${formatUsd(LISTING_MEDIANS_USD.centennialHills)}. Summerlin West ${formatUsd(LISTING_MEDIANS_USD.summerlinWest)} is a different product than Summerlin North ${formatUsd(LISTING_MEDIANS_USD.summerlinNorth)}.`,
        },
        {
          heading: "What I watch on live files",
          body: "List-to-sale ratio, seller credits, and whether new construction is still buying down rates. Those show up on the CMA, not on a blog chart. Call 702-222-1964 with the address.",
        },
        {
          heading: "How this page relates to the report and insights",
          body: "Use /market-report for the valley table. Use /market-insights for the Centennial Hills / northwest brief. This page is the short dated snapshot so an old January newsletter URL does not keep ranking. I will not invent a weekly days-on-market average.",
        },
        {
          heading: "Ask for the street, not the city median",
          body: `These listing medians are dated ${MARKET_SNAPSHOT_AS_OF}. They are not sold prices. Email homes@heyberkshire.com or call (702) 222-1964 with the address — or use /home-valuation — for a live CMA.`,
        },
      ]}
      faqs={[
        {
          question: "Is this a weekly newsletter?",
          answer:
            "No. The dated snapshot is on /market-report. This page is the short version.",
        },
        {
          question: "Do you cover Centennial Hills specifically?",
          answer:
            "Yes. See /market-insights and /neighborhoods/centennial-hills.",
        },
        {
          question: "Can I get a CMA from this page?",
          answer:
            "Not from the medians alone. Call (702) 222-1964 or send the address on /home-valuation.",
        },
        {
          question: "Can I email instead?",
          answer:
            "Yes. Email homes@heyberkshire.com with the address. City and village medians on this page are not a CMA.",
        },
      ]}
      related={[
        { href: "/market-report", label: "Full market report" },
        { href: "/market-insights", label: "Centennial Hills insights" },
        { href: "/neighborhoods", label: "Neighborhoods" },
      ]}
      lastUpdated="September 2026"
      showListings={false}
    />
  );
}
