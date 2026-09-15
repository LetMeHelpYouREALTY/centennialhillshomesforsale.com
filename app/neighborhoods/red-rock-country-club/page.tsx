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
    title: "Red Rock Country Club Homes | Summerlin Golf Community",
    description:
      "Red Rock Country Club homes for sale in Summerlin — two-course golf community. Private tours with Dr. Jan Duffy. Call 702-222-1964.",
    keywords: [
      "red rock country club homes",
      "red rock country club summerlin",
      "summerlin golf homes",
    ],
  },
  {
    src: "/images/neighborhoods/red-rock-country-club.png",
    alt: "Red Rock Country Club golf community in Summerlin 89135",
  },
);

export default function RedRockCountryClubPage() {
  return (
    <NeighborhoodGuide
      name="Red Rock Country Club"
      slug="red-rock-country-club"
      h1="Red Rock Country Club Homes in Summerlin"
      intro="Red Rock Country Club is a golf community in Summerlin (89135), with two courses and a mix of attached and detached product. It is not Centennial Hills and it is not Red Rock Canyon itself."
      zipCodes={["89135"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/red-rock-country-club.png"
      imageAlt="Red Rock Country Club golf community in Summerlin 89135"
      stats={[
        { value: "89135", label: "Primary ZIP" },
        { value: "2", label: "Golf courses" },
        { value: "Gated", label: "Access" },
        {
          value: formatUsd(LISTING_MEDIANS_USD.summerlinSouth),
          label: "Summerlin South listing median (not RRCC alone)",
        },
      ]}
      sections={[
        {
          heading: "What you are buying",
          body: "Red Rock Country Club is a membership-optional golf setting with guard-gated entries and a wide price spread: attached product on the low end of the community, custom golf-frontage on the high end. A village sample is not a promise for every floor plan. Ask for a live CMA. Membership is a separate contract from the deed.",
        },
        {
          heading: "How it compares to Tournament Hills and The Ridges",
          body: "Tournament Hills (89134) is custom lots near TPC Summerlin. The Ridges is a separate guard-gated Summerlin village. Red Rock Country Club is the golf-membership setting with attached and detached product. I match lot, dues, and the actual house — not a status ranking.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `I will not publish a Red Rock Country Club-only median I cannot source. The Summerlin South listing median on this site is ${formatUsd(LISTING_MEDIANS_USD.summerlinSouth)} — a 89135 ZIP sample, not this HOA. Golf-front custom and attached product do not share one number. Ask for a live CMA on the floor plan.`,
        },
        {
          heading: "Commute and daily errands",
          body: "Most buyers use the 215 and Downtown Summerlin for groceries, medical, and retail. Time the drive at your actual hour. Red Rock Canyon National Conservation Area is west of this map — public land, a separate drive, not the golf community.",
        },
      ]}
      faqs={[
        {
          question: "Do I have to join the golf club if I buy here?",
          answer:
            "Club membership is separate from homeownership. Confirm current dues and waitlists with the club; I will get the listing’s HOA package.",
        },
        {
          question: "Is this the same as Red Rock Canyon?",
          answer:
            "No. Red Rock Canyon National Conservation Area is the public park west of Summerlin. Red Rock Country Club is a residential golf community.",
        },
        {
          question: "Is every 89135 listing in Red Rock Country Club?",
          answer:
            "No. 89135 also includes The Ridges, Trilogy, Siena, and other Summerlin South product. I filter by subdivision on MLS.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/tournament-hills",
          label: "Tournament Hills real estate",
        },
        { href: "/neighborhoods/the-ridges", label: "The Ridges Summerlin" },
        { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
