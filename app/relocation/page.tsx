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
    title: "Las Vegas Relocation Real Estate | Dr. Jan Duffy",
    description:
      "Relocating to or from Las Vegas? Remote tours, dual-state sequencing, and live comps with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "Las Vegas relocation realtor",
      "moving to Las Vegas",
      "moving from Las Vegas",
    ],
  },
  {
    src: "/images/hero/relocation.png",
    alt: "Relocation day at a Las Vegas desert-contemporary home",
  },
);

export default function RelocationPage() {
  return (
    <TopicGuide
      name="relocation"
      slug="relocation"
      badge="Buyers and sellers"
      h1="Relocating To or From Las Vegas"
      imageSrc="/images/hero/relocation.png"
      imageAlt="Relocation day at a Las Vegas desert-contemporary home"
      intro="Inbound and outbound moves are two calendars. I tour by video, then in person. I will not send you to 89144 when you asked for Centennial Hills, and I will not use a “safe neighborhood” slogan instead of parks, trails, and drive times."
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.lasVegas),
          label: "LV listing median",
        },
        {
          value: formatUsd(LISTING_MEDIANS_USD.hendersonListing),
          label: "Henderson listing median",
        },
        { value: "Video + in person", label: "Tour method" },
        { value: "Two clocks", label: "Sale and purchase" },
      ]}
      sections={[
        {
          heading: "Inbound: pick a map, not a nickname",
          body: `As of ${MARKET_SNAPSHOT_AS_OF}, Las Vegas city median listing is ${formatUsd(LISTING_MEDIANS_USD.lasVegas)} and Henderson ${formatUsd(LISTING_MEDIANS_USD.hendersonListing)}. Summerlin, Henderson, and Centennial Hills are different freeways. I build a drive-time matrix to your workplace or hospital, then tour. Henderson has city parks and recreation centers. Summerlin is built around a trail network and Downtown Summerlin. Ask for that matrix — do not rely on a “safe neighborhood” slogan.`,
        },
        {
          heading: "Outbound: list here, buy there",
          body: "I list the Clark County house and introduce a Berkshire Hathaway HomeServices agent in the destination city when you want a referral. Your Nevada listing agreement stays with me. Their buyer agreement is theirs.",
        },
        {
          heading: "California is a common pair, not the only pair",
          body: "CA inbound has its own page because tax and flight patterns repeat. I also work Arizona, Utah, Washington, and military PCS. Same rule: live comps, written agreements, no invented savings.",
        },
        {
          heading: "Two clocks on paper",
          body: "The Nevada listing close and the destination purchase (or the inbound purchase and the origin sale) are two calendars. I will not stack two unpriced wishes. Email homes@heyberkshire.com or call (702) 222-1964 with both addresses and the commute that actually matters.",
        },
        {
          heading: "How I start an inbound vs outbound file",
          body: "Inbound: origin city, destination ZIP, and the workplace or hospital you actually drive to. Outbound: Clark County address plus occupancy (vacant, occupied, tenant). I sequence the two clocks after a CMA, not before. Email homes@heyberkshire.com or call (702) 222-1964.",
        },
      ]}
      faqs={[
        {
          question: "Can I buy in Las Vegas without flying in?",
          answer:
            "You can shortlist by video. I still want an in-person walk or a licensed colleague walk before you waive inspection.",
        },
        {
          question: "Which area is “best” for relocators?",
          answer:
            "There is no best. There is a commute, a HOA, and a house. I will not rank Summerlin vs Henderson as safer.",
        },
        {
          question: "Do you coordinate temporary housing?",
          answer:
            "I can refer corporate housing and hotels near the streets we are touring. I do not operate a hotel.",
        },
        {
          question: "How do I start a relocation file?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964 with origin city, destination ZIP, and whether you are selling, buying, or both.",
        },
      ]}
      related={[
        {
          href: "/buyers/california-relocator",
          label: "California to Las Vegas",
        },
        { href: "/sellers/relocation", label: "Selling while moving" },
        { href: "/neighborhoods", label: "Neighborhood guides" },
        { href: "/buyers", label: "Buying guide" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
