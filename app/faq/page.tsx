import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";
import { CTA_PHONE } from "@/lib/contact";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";

export function generateMetadata(): Metadata {
  return withShareImage(
    {
      title: "FAQ | Las Vegas Real Estate with Dr. Jan Duffy",
      description:
        "Answers on buying, selling, 55+, new construction, and compensation with Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.",
      keywords: [
        "Las Vegas real estate FAQ",
        "Berkshire Hathaway HomeServices FAQ",
        "buying a home Las Vegas",
      ],
    },
    {
      src: "/images/gbp/visit-office.png",
      alt: "Interior consult desk at 9406 W Lake Mead Blvd for Las Vegas real estate questions",
    },
  );
}

export default function FaqPage() {
  return (
    <TopicGuide
      name="common questions"
      slug="faq"
      badge="FAQ"
      h1="Las Vegas Real Estate FAQ"
      imageSrc="/images/gbp/visit-office.png"
      imageAlt="Interior consult desk at 9406 W Lake Mead Blvd for Las Vegas real estate questions"
      intro="Short answers for Las Vegas, Henderson, 89138 Summerlin West, and 55+ campuses such as Siena. Live numbers live in a CMA, not in this list. Compensation is disclosed in writing. Fair Housing copy lives on /fair-housing."
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.lasVegas),
          label: "LV listing median",
        },
        { value: CTA_PHONE, label: "Client phone" },
        { value: "89134", label: "Office ZIP" },
        { value: "Written", label: "Buyer / listing agreement" },
      ]}
      sections={[
        {
          heading: "Who I am",
          imageSrc: "/images/hero/about.png",
          imageAlt:
            "Dr. Jan Duffy at the Las Vegas office answering buyer and seller questions",
          body: "Dr. Jan Duffy, REALTOR, license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Client line (702) 222-1964. Email homes@heyberkshire.com. I cover Las Vegas, Henderson, North Las Vegas, Summerlin (including 89138), Centennial Hills, and 55+ campuses such as Siena.",
        },
        {
          heading: "Buying",
          imageSrc: "/images/hero/buyers.png",
          imageAlt:
            "Las Vegas buyer touring a northwest desert-contemporary home",
          body: `Close date is on the purchase agreement — often 30-ish days with a conventional loan, longer with FHA, VA, or new construction. Get a lender pre-approval before touring. Down payment is UNKNOWN without a loan program. As of ${MARKET_SNAPSHOT_AS_OF}, Las Vegas city median listing is ${formatUsd(LISTING_MEDIANS_USD.lasVegas)} — not your bid. New construction: register me before the first builder visit. Compensation is in a written buyer agreement; the builder or seller may contribute, or you may pay.`,
        },
        {
          heading: "Selling",
          imageSrc: "/images/hero/sellers.png",
          imageAlt:
            "Staged Las Vegas listing living room opening to a backyard pool",
          body: "List price comes from a CMA, not an AVM. I will not promise a number of days on market. Fees are negotiated before the listing agreement is signed.",
        },
        {
          heading: "55+, new construction, and how to reach the office",
          imageSrc: "/images/hero/55-plus-hub.png",
          imageAlt:
            "55-plus active adult community in Summerlin with golf course and rec center",
          body: "HOPA occupancy rules differ by campus — confirm CC&Rs. Register me before the first builder visit on new construction. Email homes@heyberkshire.com or call (702) 222-1964. Hours Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment.",
        },
        {
          heading: "How I answer a live file",
          imageSrc: "/images/gbp/office-lake-mead.png",
          imageAlt:
            "Berkshire Hathaway HomeServices Nevada Properties office on West Lake Mead Boulevard",
          body: "Send the address, ZIP, and whether you are buying, selling, or both. I pull live MLS and reply during posted hours — I will not invent a two-hour SLA. Email homes@heyberkshire.com or call (702) 222-1964. Fair Housing copy lives on /fair-housing.",
        },
      ]}
      faqs={[
        {
          question: "Who is the agent of record?",
          answer:
            "Dr. Jan Duffy, license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Serving Las Vegas since 2008.",
        },
        {
          question: "Does using a Berkshire Hathaway agent cost more?",
          answer:
            "Fees are negotiated in writing and are not a hidden brand surcharge.",
        },
        {
          question: "Is now a good time to buy in Las Vegas?",
          answer:
            "UNKNOWN as a slogan. Inventory and rates change by village. I will run the numbers on the house you want.",
        },
        {
          question: "Do you help with 55+ communities?",
          answer:
            "Yes. Sun City Summerlin, Sun City Anthem, Trilogy, Heritage, Solera, Aliante, Siena, and Del Webb Lake Las Vegas. HOPA occupancy rules differ. Confirm CC&Rs on the resale packet.",
        },
        {
          question: "Do you manage rentals?",
          answer:
            "No. I refer a licensed manager. I represent buyers and sellers.",
        },
        {
          question: "What is the client phone number?",
          answer:
            "(702) 222-1964. Do not use the professional/FUB line as a consumer CTA.",
        },
        {
          question: "What is the office email?",
          answer:
            "homes@heyberkshire.com. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
        },
      ]}
      related={[
        { href: "/buyers", label: "Buying guide" },
        { href: "/sellers", label: "Selling guide" },
        { href: "/contact", label: "Contact" },
        { href: "/fair-housing", label: "Fair Housing" },
      ]}
      showListings={false}
    />
  );
}
