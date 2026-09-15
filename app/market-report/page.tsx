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
      intro={`${MARKET_SNAPSHOT_SOURCE}. These are listing medians (and one Henderson sold median), not a CMA for your street. I will not recycle a January 2026 $450K Las Vegas headline.`}
      stats={[
        { value: lv, label: "Las Vegas listing median" },
        { value: henList, label: "Henderson listing median" },
        { value: henSold, label: "Henderson sold median" },
        { value: nlv, label: "North Las Vegas listing median" },
      ]}
      sections={[
        {
          heading: `Valley snapshot as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `Las Vegas city median listing ${lv}. Henderson listing ${henList}, sold ${henSold}, about 55 median days on market and roughly 3,000 active listings on that pull. North Las Vegas listing ${nlv}. Centennial Hills listing ${ch}. Summerlin is not one number: North ${formatUsd(LISTING_MEDIANS_USD.summerlinNorth)}, West ${formatUsd(LISTING_MEDIANS_USD.summerlinWest)}, South ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)}.`,
        },
        {
          heading: "How to use this page",
          body: "Use it to see that villages diverge. Do not bid $20K under a city median and call it a strategy. I run a CMA from the MLS for the beds, HOA, and vintage you actually have — or want.",
        },
        {
          heading: "Inventory is not a slogan",
          body: "More actives than 2021 does not mean every listing sits. Priced-to-comp houses still move. Overpriced luxury and leftover new construction are different files. Call 702-222-1964 for the street you care about.",
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
