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
    title: "Trilogy at Summerlin Homes | Luxury 55+ Shea Community",
    description:
      "Trilogy at Summerlin 55+ homes in 89135. Shea Homes, spa, dining, current listings with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "Trilogy at Summerlin homes for sale",
      "Trilogy Summerlin Las Vegas",
      "Shea Homes Trilogy",
    ],
  },
  {
    src: "/images/neighborhoods/trilogy-summerlin.png",
    alt: "Trilogy at Summerlin 55-plus contemporary homes in ZIP 89135",
  },
);

export default function TrilogySummerlinPage() {
  return (
    <NeighborhoodGuide
      name="Trilogy at Summerlin"
      slug="trilogy-summerlin"
      pathPrefix="/55-plus-communities"
      badge="55+ HOPA community"
      h1="Trilogy at Summerlin Homes"
      intro="Trilogy at Summerlin is a smaller Shea Homes 55+ community in ZIP 89135 with newer contemporary plans, an on-site restaurant, and a spa — not the 7,700-home Del Webb campus in 89134."
      zipCodes={["89135"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/trilogy-summerlin.png"
      imageAlt="Trilogy at Summerlin 55-plus contemporary homes in ZIP 89135"
      latitude={36.1523}
      longitude={-115.3456}
      stats={[
        { value: "Confirm HOA", label: "Home count" },
        { value: "Shea", label: "Builder" },
        { value: "89135", label: "ZIP" },
        { value: "CMA", label: "Price any bid" },
      ]}
      senior={{
        priceRange: "Confirm with live CMA",
        hoaFees: "Confirm on resale docs",
        amenities: [
          { name: "On-site restaurant" },
          { name: "Spa" },
          { name: "Fitness center" },
          { name: "Community pool" },
        ],
      }}
      sections={[
        {
          heading: "What the HOA is paying for",
          body: "Trilogy’s dues are typically higher than Sun City Summerlin because the amenity set includes dining and spa operations, not only rec centers. Confirm the current budget on the resale package. I put HOA next to the PITI number before you bid.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `Marketing price bands are not a CMA. As of ${MARKET_SNAPSHOT_AS_OF}, Summerlin South listing median is ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)}. Trilogy is 89135 product and should be compared to 89135 comps, not to Sun City Summerlin 89134. I pull Trilogy-only sales.`,
        },
        {
          heading: "Geography",
          body: "Farther west than Heritage at Stonebridge and Downtown Summerlin. Red Rock access is closer; errands to Downtown Summerlin take longer. I time both when a buyer is choosing Trilogy vs Heritage vs Sun City.",
        },
        {
          heading: "89135 comps, not 89134",
          body: `Trilogy is Summerlin South / 89135 product. I will not price a bid from Sun City Summerlin’s 89134 listing median. As of ${MARKET_SNAPSHOT_AS_OF}, the Summerlin South listing sample is ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)} — still not a Trilogy sold price. Email homes@heyberkshire.com or call (702) 222-1964 with the plan name.`,
        },
        {
          heading: "How I send Trilogy matches",
          body: "Name the Shea plan if you know it, plus occupancy rules that matter. I pull Trilogy-only sales in 89135 — not Siena, not Sun City Summerlin. Email homes@heyberkshire.com or call (702) 222-1964 so I can schedule the listing desk.",
        },
      ]}
      faqs={[
        {
          question: "Is Trilogy at Summerlin 55+?",
          answer:
            "Yes. HOPA rules apply. Confirm occupancy in the current CC&Rs.",
        },
        {
          question: "Is the restaurant open to the public?",
          answer:
            "Access rules change. Confirm current resident vs guest dining policy in the HOA documents.",
        },
        {
          question: "How do I tour?",
          answer: "Call (702) 222-1964. I schedule with the listing desk.",
        },
        {
          question: "Can I email for a Trilogy CMA?",
          answer:
            "Yes. Email homes@heyberkshire.com with the address or plan. I pull Trilogy-only sales, not a ZIP dump.",
        },
      ]}
      related={[
        { href: "/55-plus-communities", label: "All 55+ communities" },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin",
        },
        {
          href: "/55-plus-communities/heritage-stonebridge",
          label: "Heritage at Stonebridge",
        },
        { href: "/55-plus-communities/siena", label: "Siena Summerlin South" },
        {
          href: "/neighborhoods/summerlin-west",
          label: "Summerlin West all-ages",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
