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
    title: "Relocating from California to Las Vegas | Dr. Jan Duffy",
    description:
      "Moving from California to Las Vegas? Nevada has no wage income tax. Pair your sale against live Las Vegas comps with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "California to Las Vegas relocation",
      "moving from California to Nevada",
      "California relocator Las Vegas",
      "no state income tax Nevada",
    ],
  },
  {
    src: "/images/hero/california-relocator.png",
    alt: "California relocators arriving at a Las Vegas desert-contemporary house",
  },
);

const lv = formatUsd(LISTING_MEDIANS_USD.lasVegas);
const hen = formatUsd(LISTING_MEDIANS_USD.hendersonListing);

export default function CaliforniaRelocatorPage() {
  return (
    <TopicGuide
      name="California relocation"
      slug="california-relocator"
      badge="Out-of-state buyers"
      h1="Relocating from California to Las Vegas"
      imageSrc="/images/hero/california-relocator.png"
      imageAlt="California relocators arriving at a Las Vegas desert-contemporary house"
      intro="Nevada charges no state income tax on wages. That is a statute, not a slogan. Home-price “savings” are not 40–60% on every street — I pair your California sale against live Las Vegas comps in 89138 Summerlin West, Centennial Hills, or a 55+ campus such as Siena before you bid."
      stats={[
        { value: "0%", label: "NV wage income tax" },
        { value: lv, label: "LV listing median" },
        { value: hen, label: "Henderson listing median" },
        { value: "LAS", label: "Time your own itinerary" },
      ]}
      sections={[
        {
          heading: "Tax is not a CMA, and I am not your CPA",
          body: "No Nevada wage income tax is real. Whether you owe California on a partial-year move, stock, or a home sale is a CPA question. I will not invent a $150K five-year savings figure. Bring last year’s return to your tax pro; bring your target beds and commute to me.",
        },
        {
          heading: `What the valley actually lists as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE}: Las Vegas city median listing ${lv}; Henderson ${hen}; Summerlin West ${formatUsd(LISTING_MEDIANS_USD.summerlinWest)}; Centennial Hills ${formatUsd(LISTING_MEDIANS_USD.centennialHills)}. A $1.2M California sale does not automatically buy a “similar” $600K Las Vegas house — lot, HOA, and vintage differ. I run both sides.`,
        },
        {
          heading: "Which map, not which California suburb nickname",
          body: "Summerlin is the Howard Hughes west-side master plan (parks, trails, Downtown Summerlin). Henderson is a separate city (Green Valley, Inspirada, Anthem). Centennial Hills is northwest Las Vegas around Town Center and US-95. I will not steer you with “like Irvine” or “like San Diego.” Tell me commute, one-story vs two, and HOA budget.",
        },
        {
          heading: "Flights and residency paperwork",
          body: "Harry Reid International has frequent flights to LAX, SAN, SFO, and other California airports; block 1–1.5 hours in the air plus ground time. Nevada residency for a driver’s license, vehicle, and voter registration is a DMV process. Timing for tax residency is not something I certify.",
        },
        {
          heading: "What to send before you fly",
          body: "Email homes@heyberkshire.com or call (702) 222-1964 with origin city, destination ZIP, and whether you are selling in California first. I build a drive-time matrix to the workplace or hospital — not a suburb nickname.",
        },
      ]}
      faqs={[
        {
          question: "How much will I save moving from California?",
          answer:
            "UNKNOWN as a single number. Nevada has no wage income tax. House-price gaps depend on the two addresses. Ask for paired comps and a CPA.",
        },
        {
          question: "Can I buy in Las Vegas before I sell in California?",
          answer:
            "Sometimes, with a bridge, a HELOC, or a contingent offer. I sequence the two contracts. Call (702) 222-1964 or email homes@heyberkshire.com.",
        },
        {
          question: "Do you tour remotely?",
          answer:
            "Yes. Video walkthroughs, then an in-person week when you fly in. I will not write an offer on a listing I have not seen or had a licensed colleague walk.",
        },
      ]}
      related={[
        { href: "/relocation", label: "Las Vegas relocation hub" },
        { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
        { href: "/neighborhoods/henderson", label: "Henderson homes" },
        {
          href: "/neighborhoods/centennial-hills",
          label: "Centennial Hills homes",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
