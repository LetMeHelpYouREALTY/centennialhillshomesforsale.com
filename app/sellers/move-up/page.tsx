import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";

export const metadata: Metadata = withShareImage(
  {
    title: "Move-Up Sellers Las Vegas | Sell and Buy with Dr. Jan Duffy",
    description:
      "Las Vegas move-up sellers: sequence the sale and the next purchase with Dr. Jan Duffy. Live CMA, not an equity slogan. Call (702) 222-1964.",
    keywords: [
      "move up buyer Las Vegas",
      "sell and buy Las Vegas",
      "home equity Las Vegas",
    ],
  },
  {
    src: "/images/hero/sellers.png",
    alt: "Staged Las Vegas listing living room opening to a backyard pool",
  },
);

export default function MoveUpSellerPage() {
  return (
    <TopicGuide
      name="move-up selling"
      slug="move-up"
      badge="Sellers"
      h1="Move-Up Sellers in Las Vegas"
      imageSrc="/images/hero/sellers.png"
      imageAlt="Staged Las Vegas listing living room opening to a backyard pool"
      intro="A move-up is two contracts, not a vibe. I price the home you have with a live CMA, then write the next offer with the contingency — or cash-from-sale plan — that actually closes."
      stats={[
        { value: "CMA", label: "Current house" },
        { value: "Two files", label: "Sell + buy" },
        { value: "Contingency", label: "Or bridge / HELOC" },
        { value: "Dates", label: "Inspection + close" },
      ]}
      sections={[
        {
          heading: "Do not treat equity as a round number from a blog",
          body: "Public “$100K–$250K typical equity” charts are not your payoff statement. I pull the mortgage balance, HOA, SID/LID, and same-street sales. Then we know whether the next house is a stretch, a lateral, or a downsize in disguise.",
        },
        {
          heading: "Sequence: sell first is usually cleaner",
          body: "The cleanest path is often: list, go under contract, then write on the next house with a sale contingency or a close-on-or-after date. Bridge loans and HELOCs exist when you must buy first. “Safest” here means fewer broken contracts, not a neighborhood slogan. I will not stack two unpriced wishes.",
        },
        {
          heading: "Where move-up buyers actually go in this valley",
          body: "Centennial Hills resale → Skye Canyon new. Green Valley → Inspirada. Summerlin production → Tournament Hills or The Ridges. Those are maps, not a ranking. Tell me beds, commute, and whether you need a one-story.",
        },
      ]}
      faqs={[
        {
          question: "How much equity do I have?",
          answer:
            "UNKNOWN until a CMA and a payoff. Call 702-222-1964 with the address.",
        },
        {
          question: "Can I buy before I sell?",
          answer:
            "Sometimes. Bridge, HELOC, or a large down payment. Most Clark County sellers still sequence sale first.",
        },
        {
          question: "Will you handle both sides?",
          answer:
            "Yes, as two files with two disclosure packets. If a conflict appears, we name it in writing.",
        },
      ]}
      related={[
        { href: "/sellers", label: "Selling guide" },
        { href: "/home-valuation", label: "Home valuation" },
        { href: "/buyers", label: "Buying guide" },
        { href: "/sellers/downsizing", label: "Downsizing" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
