import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";

export function generateMetadata(): Metadata {
  return withShareImage(
    {
      title: "Las Vegas Luxury Homes for Sale | Dr. Jan Duffy",
      description:
        "Las Vegas and Henderson luxury listings: The Ridges, Tournament Hills, MacDonald Highlands, Southern Highlands. Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
      keywords: [
        "Las Vegas luxury homes",
        "The Ridges Las Vegas",
        "Summerlin luxury real estate",
        "MacDonald Highlands Henderson",
      ],
    },
    {
      src: "/images/hero/luxury-ridges.png",
      alt: "Gated custom estate architecture in The Ridges, Las Vegas",
    },
  );
}

export default function LuxuryHomesPage() {
  return (
    <TopicGuide
      name="luxury listings"
      slug="luxury-homes"
      badge="Luxury"
      h1="Las Vegas Luxury Homes for Sale"
      imageSrc="/images/hero/luxury-ridges.png"
      imageAlt="Gated custom estate architecture in The Ridges, Las Vegas"
      intro="This is the listing-side companion to the luxury buyer guide: how I price, photograph, and gate a $1M+ Clark County home in The Ridges, Tournament Hills, or 89138 Summerlin West — without celebrity marketing. 55+ HOPA files such as Siena are a separate occupancy packet."
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
          imageSrc: "/images/hero/luxury-homes.png",
          imageAlt:
            "Luxury custom home with mountain views in The Ridges, Summerlin",
          body: `As of ${MARKET_SNAPSHOT_AS_OF}, Summerlin South listing median is ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)} and Southern Highlands ${formatUsd(LISTING_MEDIANS_USD.southernHighlands)}. Those samples mix gated and open product. I will not list your Ridges lot at a Southern Highlands median. Bring the address; I pull same-gate sales.`,
        },
        {
          heading: "What luxury marketing actually is here",
          imageSrc: "/images/hero/sellers-listing.png",
          imageAlt:
            "Las Vegas home prepared for listing with professional staging",
          body: "Professional stills, a floor plan, and a showing window the gate can staff. Berkshire Hathaway HomeServices syndication is the distribution layer. I do not promise magazine covers or named buyers. Architectural review can add weeks before you go live — budget that.",
        },
        {
          heading: "Seller privacy",
          imageSrc: "/images/neighborhoods/the-ridges.png",
          imageAlt: "Gated custom homes in The Ridges, Summerlin",
          body: "Signage, broker tours, and Coming Soon rules are your call. Occupied luxury listings often use appointment-only and a lockbox that the gate will honor. I write that into the listing agreement.",
        },
        {
          heading: "Architectural review before you go live",
          imageSrc: "/images/hero/office-lake-mead.png",
          imageAlt:
            "Berkshire Hathaway HomeServices Nevada Properties office on West Lake Mead Boulevard",
          body: "HOA architectural packets can add weeks. I calendar that before we pick a list date. Email homes@heyberkshire.com or call (702) 222-1964 with the address — I CMA the gate you actually live in, not a Southern Highlands median on a Ridges lot.",
        },
        {
          heading: "How I start a luxury listing",
          imageSrc: "/images/neighborhoods/the-ridges.png",
          imageAlt: "Gated custom homes in The Ridges, Summerlin",
          body: "Send the address, occupancy, and whether the gate has a listing desk. I pull same-gate sales and calendar architectural review before photos. Email homes@heyberkshire.com or call (702) 222-1964 — I do not list a Ridges lot at a Southern Highlands median.",
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
            "I schedule with the listing desk and the guard. Call (702) 222-1964 or email homes@heyberkshire.com.",
        },
        {
          question: "How do I start a luxury listing CMA?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964 with the address and whether the house is occupied. I pull same-gate sales.",
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
        { href: "/new-construction", label: "New construction buyers" },
        { href: "/investment-properties", label: "Investment properties" },
      ]}
      showListings={false}
    />
  );
}
