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
    title: "New Construction Homes Las Vegas | Buyer Representation",
    description:
      "New construction in Las Vegas and Henderson: register your agent before the first visit. Dr. Jan Duffy reviews builder contracts. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "new construction Las Vegas",
      "new homes Henderson",
      "Lennar Las Vegas",
      "KB Home Las Vegas",
    ],
  },
  {
    src: "/images/hero/new-construction.png",
    alt: "New construction homes under desert sky in Las Vegas",
  },
);

export default function NewConstructionPage() {
  return (
    <TopicGuide
      name="new construction"
      slug="new-construction"
      badge="Buyers"
      h1="New Construction Homes in Las Vegas"
      imageSrc="/images/hero/new-construction.png"
      imageAlt="New construction homes under desert sky in Las Vegas"
      intro="Builder sales offices work for the builder. Register Dr. Jan Duffy as your agent before you walk in — including 89138 Summerlin West pods and 55+ campuses such as Siena — or the file may not pay a cooperating broker. Compensation is still in a written buyer agreement — it is not “always free.”"
      stats={[
        { value: "Register first", label: "Before the model" },
        { value: "Contract", label: "50+ pages typical" },
        { value: "Incentives", label: "Rate / options / close" },
        { value: "Punch list", label: "Before you fund" },
      ]}
      sections={[
        {
          heading: "Registration is the whole game on day one",
          imageSrc: "/images/hero/new-construction.png",
          imageAlt: "New construction homes under desert sky in Las Vegas",
          body: "Most Las Vegas and Henderson builders will only recognize the agent who is with you (or registered) on the first visit. If you tour alone, you may forfeit representation on that community. Text (702) 222-1964 or email homes@heyberkshire.com before you put your name on the kiosk iPad.",
        },
        {
          heading: "Where new construction still exists in 2026",
          imageSrc: "/images/neighborhoods/skye-canyon.png",
          imageAlt: "Skye Canyon Northwest Las Vegas new-construction streets",
          body: `Inspirada (89044) was in a final-phase window — Groves townhomes are resale only. Skye Canyon and North Las Vegas pods (Lennar, KB, Richmond, Century, and others) rotate incentives. As of ${MARKET_SNAPSHOT_AS_OF}, North Las Vegas listing median is ${formatUsd(LISTING_MEDIANS_USD.northLasVegas)} and Inspirada ${formatUsd(LISTING_MEDIANS_USD.inspirada)} — those are not the builder’s current base price. I pull the community worksheet the week you tour.`,
        },
        {
          heading: "What I negotiate besides “the price”",
          imageSrc: "/images/hero/buyers.png",
          imageAlt:
            "Las Vegas buyer touring a northwest desert-contemporary home",
          body: "Options, lot premiums, rate buydowns, closing-cost credits, and whether the solar lease is assumable. I also calendar construction draws and a pre-drywall walk when the builder allows it. I do not originate the mortgage.",
        },
        {
          heading: "Compensation",
          imageSrc: "/images/hero/office-lake-mead.png",
          imageAlt:
            "Berkshire Hathaway HomeServices Nevada Properties office on West Lake Mead Boulevard",
          body: "Builders often budget a cooperating broker fee. After the 2024 NAR practice changes, that is not something I will call automatic or “100% free.” We write it down. If the builder will not pay, we decide whether you pay or we walk.",
        },
        {
          heading: "Register before the kiosk iPad",
          imageSrc: "/images/neighborhoods/inspirada.png",
          imageAlt:
            "Inspirada Henderson streets typical of remaining new-construction pods",
          body: "Text or email homes@heyberkshire.com the community name before you walk in. I will not recover representation after you have already signed the builder’s first-visit card.",
        },
      ]}
      faqs={[
        {
          question: "Is buyer representation free on new construction?",
          answer:
            "Not automatically. Register me first. We disclose compensation in a written buyer agreement. The builder may pay a cooperating fee.",
        },
        {
          question: "Do I still need an inspection on a new house?",
          answer:
            "Yes. Independent inspection plus a punch-list walk. Builder warranty is not the same as an inspection.",
        },
        {
          question: "Are Groves at Inspirada new homes still for sale?",
          answer:
            "No. Groves is resale townhomes. Remaining Inspirada new construction, if any, is in other builder pods.",
        },
      ]}
      related={[
        { href: "/neighborhoods/inspirada", label: "Inspirada" },
        { href: "/neighborhoods/skye-canyon", label: "Skye Canyon" },
        {
          href: "/neighborhoods/north-las-vegas",
          label: "North Las Vegas",
        },
        { href: "/buyers", label: "Buying guide" },
      ]}
      lastUpdated="September 2026"
      showListings={false}
    />
  );
}
