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
    title: "Las Vegas Investment Properties | Dr. Jan Duffy",
    description:
      "Las Vegas rental and investment homes with Dr. Jan Duffy. Live rent comps, 1031 coordination, no property management. Call (702) 222-1964.",
    keywords: [
      "Las Vegas investment property",
      "Las Vegas rental property",
      "1031 exchange Las Vegas",
    ],
  },
  {
    src: "/images/hero/investment.png",
    alt: "Single-family Las Vegas rental house with desert xeriscape",
  },
);

export default function InvestmentPropertiesPage() {
  return (
    <TopicGuide
      name="investment property"
      slug="investment-properties"
      badge="Investors"
      h1="Las Vegas Investment Properties"
      imageSrc="/images/hero/investment.png"
      imageAlt="Single-family Las Vegas rental house with desert xeriscape"
      intro="I represent buyers and sellers of rental houses in Clark County. I do not manage rentals and I will not publish a fake cap rate for a ZIP. Bring the address; I run rent comps and expenses."
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.lasVegas),
          label: "LV listing median",
        },
        {
          value: formatUsd(LISTING_MEDIANS_USD.northLasVegas),
          label: "NLV listing median",
        },
        { value: "No PM", label: "I do not manage" },
        { value: "1031", label: "With your QI / CPA" },
      ]}
      sections={[
        {
          heading: "Cap rate is an address, not a city",
          imageSrc: "/images/hero/investment.png",
          imageAlt:
            "Single-family Las Vegas rental house with desert xeriscape",
          body: `${MARKET_SNAPSHOT_SOURCE} as of ${MARKET_SNAPSHOT_AS_OF}: Las Vegas median listing ${formatUsd(LISTING_MEDIANS_USD.lasVegas)}, North Las Vegas ${formatUsd(LISTING_MEDIANS_USD.northLasVegas)}, Henderson ${formatUsd(LISTING_MEDIANS_USD.hendersonListing)}. Citywide rents are UNKNOWN without a rent roll on the address. Subtract vacancy, HOA, tax, insurance, and management before you chant “5% cap.” I will not invent +3.2% appreciation.`,
        },
        {
          heading: "What I will and will not do",
          imageSrc: "/images/neighborhoods/north-las-vegas.png",
          imageAlt:
            "North Las Vegas residential street of single-family rentals",
          body: "I will tour, negotiate, and refer a licensed property manager. I will not place tenants, collect rent, or quote a turnkey yield on a listing I have not seen. Nevada has no wage income tax; that does not make every rental a good deal.",
        },
        {
          heading: "1031 exchanges",
          imageSrc: "/images/hero/office-lake-mead.png",
          imageAlt:
            "Berkshire Hathaway HomeServices Nevada Properties office on West Lake Mead Boulevard",
          body: "A qualified intermediary and your CPA run the exchange. I identify replacement property inside the 45-day window and write the contract with the exchange language they provide. Deadlines are statutory. I do not extend them.",
        },
        {
          heading: "Rent comps on the address",
          imageSrc: "/images/neighborhoods/centennial-hills.png",
          imageAlt:
            "Northwest Las Vegas single-family street typical of investor tours",
          body: "I will not publish a ZIP cap rate. Send the address, current rent (or vacancy), HOA, and whether you need a manager referral. Email homes@heyberkshire.com or call (702) 222-1964. I represent the purchase or sale — I do not place tenants.",
        },
        {
          heading: "How I send investor matches",
          imageSrc: "/images/neighborhoods/north-las-vegas.png",
          imageAlt:
            "North Las Vegas residential street of single-family rentals",
          body: "Name occupancy vs rental, ZIP, and whether you need a manager referral. I tour the house and run rent comps on that address — not a city cap-rate slogan. Email homes@heyberkshire.com or call (702) 222-1964.",
        },
      ]}
      faqs={[
        {
          question: "What is a typical cap rate in Las Vegas?",
          answer:
            "UNKNOWN without the address, rent roll, and expenses. Citywide medians are not a cap rate.",
        },
        {
          question: "Do you manage rentals?",
          answer:
            "No. Dr. Jan Duffy represents buyers and sellers. She refers licensed managers.",
        },
        {
          question: "Is North Las Vegas better for cash flow?",
          answer:
            "Sometimes on paper, sometimes not after repairs. I compare specific houses, not city slogans.",
        },
        {
          question: "How do I send a rent roll?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964 with the address and expenses. Citywide medians are not a cap rate.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/north-las-vegas",
          label: "North Las Vegas homes",
        },
        { href: "/neighborhoods/henderson", label: "Henderson homes" },
        { href: "/sellers", label: "Selling a rental" },
        { href: "/contact", label: "Contact" },
      ]}
      lastUpdated="September 2026"
      showListings={false}
    />
  );
}
