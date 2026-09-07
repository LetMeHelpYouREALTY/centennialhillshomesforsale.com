import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = {
  title: "89138 Homes for Sale | Summerlin West ZIP Code",
  description:
    "Homes for sale in 89138 — Summerlin West and Reverence. Current Las Vegas listings with Dr. Jan Duffy. Call 702-222-1964.",
  keywords: [
    "homes for sale in 89138",
    "houses for sale in 89138",
    "real estate in 89138",
    "homes for sale 89138",
  ],
};

export default function Zip89138Page() {
  return (
    <NeighborhoodGuide
      name="89138"
      h1="Homes for Sale in 89138 (Summerlin West)"
      intro="89138 is the Summerlin West ZIP. Searchers asking for homes, houses, or real estate in 89138 are not searching Centennial Hills."
      zipCodes={["89138"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/summerlin.png"
      imageAlt="Newer Summerlin West homes in ZIP 89138 Las Vegas"
      stats={[
        { value: "89138", label: "ZIP code" },
        { value: "West", label: "Summerlin side" },
        { value: "Newer", label: "Typical vintage" },
        { value: "Views", label: "Foothill lots" },
      ]}
      sections={[
        {
          heading: "How 89138 sits on the map",
          body: "89138 covers later Summerlin villages on the far west edge of the master plan, including Reverence. 89144 is a different Summerlin ZIP (Arbors / Trails / Queensridge). 89134 covers older central Summerlin product including Sun City Summerlin and Tournament Hills. 89149 is Centennial Hills / northwest Las Vegas.",
        },
        {
          heading: "Buying in 89138",
          body: "Expect newer construction, active HOAs, and view premiums on elevated lots. Days on market in 2026 luxury samples for Reverence have been shorter than Tournament Hills, which tells you this ZIP still turns when priced to the village — not that every 89138 listing is a Reverence home. I filter by subdivision, not ZIP alone.",
        },
      ]}
      faqs={[
        {
          question: "Is 89138 in Henderson?",
          answer: "No. 89138 is Las Vegas / Summerlin West. Henderson Inspirada is 89044.",
        },
        {
          question: "Do you have 89138 listings right now?",
          answer:
            "Inventory changes daily. Call 702-222-1964 and I will send the current MLS set for your price and bed count.",
        },
      ]}
      related={[
        { href: "/neighborhoods/summerlin-west", label: "Summerlin West guide" },
        { href: "/neighborhoods/89144", label: "89144 homes for sale" },
        { href: "/neighborhoods/centennial-hills", label: "Centennial Hills homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
