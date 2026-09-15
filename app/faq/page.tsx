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
    title: "FAQ | Las Vegas Real Estate with Dr. Jan Duffy",
    description:
      "Answers on buying, selling, 55+, new construction, and compensation with Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
    keywords: [
      "Las Vegas real estate FAQ",
      "Berkshire Hathaway HomeServices FAQ",
      "buying a home Las Vegas",
    ],
  },
  {
    src: "/images/hero/google-business.png",
    alt: "Lake Mead Boulevard office for in-person Las Vegas real estate questions",
  },
);

export default function FaqPage() {
  return (
    <TopicGuide
      name="common questions"
      slug="faq"
      badge="FAQ"
      h1="Las Vegas Real Estate FAQ"
      imageSrc="/images/hero/google-business.png"
      imageAlt="Lake Mead Boulevard office for in-person Las Vegas real estate questions"
      intro="Short answers. Live numbers live in a CMA, not in this list. Compensation is disclosed in writing. Fair Housing copy lives on /fair-housing."
      stats={[
        {
          value: formatUsd(LISTING_MEDIANS_USD.lasVegas),
          label: "LV listing median",
        },
        { value: "222-1964", label: "Client phone" },
        { value: "89134", label: "Office ZIP" },
        { value: "Written", label: "Buyer / listing agreement" },
      ]}
      sections={[
        {
          heading: "Who I am",
          body: "Dr. Jan Duffy, REALTOR, license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Client line (702) 222-1964. I cover Las Vegas, Henderson, North Las Vegas, Summerlin, and Centennial Hills.",
        },
        {
          heading: "Buying",
          body: `Typical close is 30–45 days after acceptance. Get a lender pre-approval before touring. Down payment is UNKNOWN without a loan program. As of ${MARKET_SNAPSHOT_AS_OF}, Las Vegas city median listing is ${formatUsd(LISTING_MEDIANS_USD.lasVegas)} — not your bid. New construction: register me before the first builder visit. Compensation is in a written buyer agreement; the builder or seller may contribute, or you may pay.`,
        },
        {
          heading: "Selling",
          body: "List price comes from a CMA, not an AVM. I will not promise a number of days on market. Fees are negotiated before the listing agreement is signed.",
        },
      ]}
      faqs={[
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
            "Yes. Sun City Summerlin, Sun City Anthem, Trilogy, Heritage, Solera, Aliante, and Del Webb Lake Las Vegas. HOPA occupancy rules differ.",
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
      ]}
      related={[
        { href: "/buyers", label: "Buying guide" },
        { href: "/sellers", label: "Selling guide" },
        { href: "/contact", label: "Contact" },
        { href: "/fair-housing", label: "Fair Housing" },
      ]}
      lastUpdated="September 2026"
      showListings={false}
    />
  );
}
