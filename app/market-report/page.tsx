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
    title: "Las Vegas Real Estate Market Report | September 2026",
    description:
      "Las Vegas and Henderson housing snapshot from realtor.com listing medians dated September 14, 2026. Analysis from Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "Las Vegas real estate market",
      "Las Vegas home prices 2026",
      "Henderson real estate market",
    ],
  },
  {
    src: "/images/hero/market-report.png",
    alt: "Market packet on a desk overlooking the Las Vegas valley",
  },
);

const lv = formatUsd(LISTING_MEDIANS_USD.lasVegas);
const henList = formatUsd(LISTING_MEDIANS_USD.hendersonListing);
const henSold = formatUsd(LISTING_MEDIANS_USD.hendersonSold);
const nlv = formatUsd(LISTING_MEDIANS_USD.northLasVegas);
const ch = formatUsd(LISTING_MEDIANS_USD.centennialHills);

export default function MarketReportPage() {
  return (
    <TopicGuide
      name="market report"
      slug="market-report"
      badge="Market data"
      h1="Las Vegas Real Estate Market Report"
      imageSrc="/images/hero/market-report.png"
      imageAlt="Market packet on a desk overlooking the Las Vegas valley"
      intro={`${MARKET_SNAPSHOT_SOURCE}. These are listing medians (and one Henderson sold median), not a CMA for 89138 Summerlin West or a 55+ campus such as Siena. I will not recycle a January 2026 $450K Las Vegas headline.`}
      stats={[
        { value: lv, label: "Las Vegas listing median" },
        { value: henList, label: "Henderson listing median" },
        { value: henSold, label: "Henderson sold median" },
        { value: nlv, label: "North Las Vegas listing median" },
      ]}
      sections={[
        {
          heading: `Valley snapshot as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `Las Vegas city median listing ${lv}. Henderson listing ${henList}, sold ${henSold}. Days on market and active count are UNKNOWN on this page until a new sourced pull. North Las Vegas listing ${nlv}. Centennial Hills listing ${ch}. Summerlin is not one number: North ${formatUsd(LISTING_MEDIANS_USD.summerlinNorth)}, West ${formatUsd(LISTING_MEDIANS_USD.summerlinWest)} (89138 sample), South ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)}. Siena 55+ is a live CMA, not a campus median.`,
        },
        {
          heading: "How to use this page",
          body: "Use it to see that villages diverge. Do not bid $20K under a city median and call it a strategy. I run a CMA from the MLS for the beds, HOA, and vintage you actually have — or want.",
        },
        {
          heading: "Inventory is not a slogan",
          body: "More actives than 2021 does not mean every listing sits. Priced-to-comp houses still move. Overpriced luxury and leftover new construction are different files. Call (702) 222-1964 for the street you care about.",
        },
        {
          heading: "Use this with a CMA, not instead of one",
          body: `City and village listing medians on this page are dated ${MARKET_SNAPSHOT_AS_OF}. They are not sold prices and they are not your house. Email homes@heyberkshire.com or call (702) 222-1964 with the address for a live CMA.`,
        },
        {
          heading: "How I turn this table into a CMA",
          body: "The valley table shows villages diverge. I still need beds, HOA, and the address. Email homes@heyberkshire.com or call (702) 222-1964 — I will not bid $20K under a city median and call it a strategy.",
        },
      ]}
      faqs={[
        {
          question: "What is the median home price in Las Vegas right now?",
          answer: `Realtor.com showed a ${lv} median listing price for Las Vegas as of ${MARKET_SNAPSHOT_AS_OF}. Sold medians differ. Ask for a CMA.`,
        },
        {
          question: "Is it a buyer’s market?",
          answer:
            "UNKNOWN as a single label. Days on market and list-to-sale ratios vary by village. I will not call the whole valley a buyer’s or seller’s market from one median.",
        },
        {
          question: "How often do you update this report?",
          answer:
            "When I pull a new public source. The date is on the page. I do not auto-scrape MLS averages onto this domain.",
        },
        {
          question: "Can I get a street-level number?",
          answer:
            "Yes. Email homes@heyberkshire.com or call (702) 222-1964 with the address. This page is a snapshot, not a CMA.",
        },
      ]}
      related={[
        { href: "/market-update", label: "Market update" },
        { href: "/market-insights", label: "Market insights" },
        { href: "/neighborhoods", label: "Neighborhood guides" },
        { href: "/home-valuation", label: "Home valuation" },
      ]}
      lastUpdated="September 2026"
      showListings={false}
    />
  );
}
