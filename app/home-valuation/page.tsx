import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";

export const metadata: Metadata = withShareImage(
  {
    title: "Las Vegas Home Valuation | CMA with Dr. Jan Duffy",
    description:
      "Request a Las Vegas or Henderson CMA from Dr. Jan Duffy. Not an online AVM. Call (702) 222-1964.",
    keywords: [
      "Las Vegas home valuation",
      "CMA Las Vegas",
      "what is my home worth Las Vegas",
    ],
  },
  {
    src: "/images/hero/home-valuation.png",
    alt: "CMA comps and tablet on a kitchen table for a Las Vegas home valuation",
  },
);

export default function HomeValuationPage() {
  return (
    <TopicGuide
      name="home valuation"
      slug="home-valuation"
      badge="Sellers"
      h1="Las Vegas Home Valuation"
      imageSrc="/images/hero/home-valuation.png"
      imageAlt="CMA comps and tablet on a kitchen table for a Las Vegas home valuation"
      intro="A CMA is sold comps, active competition, and your house — not a Zestimate. Call or email the address for Centennial Hills, 89138 Summerlin West, Henderson, or a 55+ campus such as Siena. I will not email a price without walking the file (and usually the house)."
      stats={[
        { value: "CMA", label: "Not an AVM" },
        { value: "Sold + active", label: "Comps" },
        { value: "HOA / SID", label: "On the worksheet" },
        { value: "CMA first", label: "List only if you choose" },
      ]}
      sections={[
        {
          heading: "What I send you",
          imageSrc: "/images/hero/home-valuation.png",
          imageAlt:
            "CMA comps and tablet on a kitchen table for a Las Vegas home valuation",
          body: "Three to six sold comps, current actives that a buyer will also see, days on market, and a list-price range. If the house needs paint, roof, or a tenant out, that is in the range — not a surprise on listing day.",
        },
        {
          heading: "What I will not do",
          imageSrc: "/images/hero/sellers-listing.png",
          imageAlt:
            "Las Vegas home prepared for listing with professional staging",
          body: "I will not scrape an AVM onto this page and call it a valuation. I will not inflate the number to win the listing. If you want that, call someone else.",
        },
        {
          heading: "How to start",
          imageSrc: "/images/gbp/office-lake-mead.png",
          imageAlt:
            "Berkshire Hathaway HomeServices Nevada Properties office on West Lake Mead Boulevard",
          body: "Call or text (702) 222-1964 with the address, or use the form on this page. Occupied vs vacant vs tenant matters. Photos help if you are out of state.",
        },
        {
          heading: "What belongs on the worksheet",
          imageSrc: "/images/neighborhoods/centennial-hills.png",
          imageAlt: "Northwest Las Vegas homes used as live CMA comps",
          body: "HOA, SID/LID, tenant status, and recent same-street sales. I will not email a list price from an AVM. Email homes@heyberkshire.com if the form is inconvenient — still include the address and occupancy.",
        },
        {
          heading: "How I walk the house after the form",
          imageSrc: "/images/hero/sellers-listing.png",
          imageAlt:
            "Las Vegas home prepared for listing with professional staging",
          body: "A preliminary range can come during posted hours when the file is straightforward. A number I will list at comes after I see the house — occupied, vacant, or tenant. Email homes@heyberkshire.com or call (702) 222-1964 with the address if the form is inconvenient.",
        },
      ]}
      faqs={[
        {
          question: "Is there a charge for a CMA?",
          answer: "The CMA is a consult. Listing is a separate agreement.",
        },
        {
          question: "How fast can I get a number?",
          answer:
            "A preliminary range during posted office hours when the file is straightforward. A number I will list at comes after I see the house.",
        },
        {
          question: "Do you value condos and townhomes?",
          answer:
            "Yes. HOA and rental cap rules go on the worksheet. Groves at Inspirada is a common example.",
        },
        {
          question: "Can I email the address instead of the form?",
          answer:
            "Yes. Email homes@heyberkshire.com or call (702) 222-1964. Occupied vs vacant vs tenant still matters.",
        },
      ]}
      related={[
        { href: "/sellers", label: "Selling guide" },
        { href: "/contact", label: "Contact form" },
        { href: "/market-report", label: "Market report" },
        { href: "/sellers/relocation", label: "Selling from out of state" },
      ]}
      lastUpdated="September 2026"
      showListings={false}
      leadFormType="home-valuation"
    />
  );
}
