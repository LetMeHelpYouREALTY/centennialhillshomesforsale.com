import type { Metadata } from "next";
import TopicGuide from "@/components/sections/TopicGuide";

export const metadata: Metadata = {
  title: "Las Vegas Home Valuation | CMA with Dr. Jan Duffy",
  description:
    "Request a Las Vegas or Henderson CMA from Dr. Jan Duffy. Not an online AVM. Call (702) 222-1964.",
  keywords: [
    "Las Vegas home valuation",
    "CMA Las Vegas",
    "what is my home worth Las Vegas",
  ],
};

export default function HomeValuationPage() {
  return (
    <TopicGuide
      name="home valuation"
      slug="home-valuation"
      badge="Sellers"
      h1="Las Vegas Home Valuation"
      imageSrc="/images/hero/home-valuation.png"
      imageAlt="CMA comps and tablet on a kitchen table for a Las Vegas home valuation"
      intro="A CMA is sold comps, active competition, and your house — not a Zestimate. Call or send the address. I will not email a price without walking the file (and usually the house)."
      stats={[
        { value: "CMA", label: "Not an AVM" },
        { value: "Sold + active", label: "Comps" },
        { value: "HOA / SID", label: "On the worksheet" },
        { value: "No obligation", label: "To list" },
      ]}
      sections={[
        {
          heading: "What I send you",
          body: "Three to six sold comps, current actives that a buyer will also see, days on market, and a list-price range. If the house needs paint, roof, or a tenant out, that is in the range — not a surprise on listing day.",
        },
        {
          heading: "What I will not do",
          body: "I will not scrape an AVM onto this page and call it a valuation. I will not inflate the number to win the listing. If you want that, call someone else.",
        },
        {
          heading: "How to start",
          body: "Call or text 702-222-1964 with the address, or use the contact form. Occupied vs vacant vs tenant matters. Photos help if you are out of state.",
        },
      ]}
      faqs={[
        {
          question: "Is the valuation free?",
          answer:
            "The CMA consult is no-obligation. Listing is a separate agreement.",
        },
        {
          question: "How fast can I get a number?",
          answer:
            "Often same day for a preliminary range; after I see the house for a number I will list at.",
        },
        {
          question: "Do you value condos and townhomes?",
          answer:
            "Yes. HOA and rental cap rules go on the worksheet. Groves at Inspirada is a common example.",
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
    />
  );
}
