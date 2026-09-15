import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = withShareImage(
  {
    title: "Lone Mountain Homes for Sale | Northwest Las Vegas",
    description:
      "Lone Mountain homes for sale in northwest Las Vegas near Centennial Hills. Views, lots, and current listings with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "lone mountain las vegas homes",
      "lone mountain real estate",
      "northwest las vegas homes",
    ],
  },
  {
    src: "/images/neighborhoods/lone-mountain.png",
    alt: "Lone Mountain northwest Las Vegas homes climbing toward the named peak",
  },
);

export default function LoneMountainPage() {
  return (
    <NeighborhoodGuide
      name="Lone Mountain"
      slug="lone-mountain"
      h1="Lone Mountain Homes for Sale in Northwest Las Vegas"
      intro="Lone Mountain sits on the northwest side of the valley, next to the Centennial Hills corridor. Buyers come for larger lots and mountain views, not a single gated amenity campus."
      zipCodes={["89129", "89130", "89131"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/lone-mountain.png"
      imageAlt="Lone Mountain northwest Las Vegas homes climbing toward the named peak"
      stats={[
        { value: "NW", label: "Valley side" },
        { value: "Views", label: "Typical draw" },
        { value: "Lots", label: "Larger parcels" },
        { value: "Resale", label: "Most inventory" },
      ]}
      sections={[
        {
          heading: "How Lone Mountain relates to Centennial Hills",
          body: "People shopping Centennial Hills often cross into Lone Mountain for a bigger lot or a different view line. It is not a Howard Hughes village and it is not 89144 Summerlin. Streets climb toward the named peak; construction quality and HOA (or lack of HOA) vary block by block. I tour by elevation and flood/drainage notes, not by a lifestyle slogan.",
        },
        {
          heading: "ZIPs on this map",
          body: "Lone Mountain listings show up in 89129, 89130, and 89131. 89131 also overlaps Centennial Hills searchers. The MLS subdivision and ZIP on the record are the source of truth — not a marketing map. Skye Canyon is a separate northwest master plan with newer production product.",
        },
        {
          heading: "What to inspect before you offer",
          body: "View lots can mean wind, grading, and block-wall maintenance. Septic vs sewer still appears on some northwest parcels — confirm on the listing, do not assume. Commute uses US-95 and the 215; time it at your actual hour, not midday.",
        },
        {
          heading: "Pricing is a CMA, not a peak slogan",
          body: "I will not publish a Lone Mountain-only median I cannot source. Lot size, elevation, and whether the house is on septic change the number. Ask for a live CMA on the address. Centennial Hills listing medians on this site are a different corridor sample.",
        },
        {
          heading: "How I sequence a northwest loop",
          body: "Lone Mountain, Centennial Hills, and Skye Canyon can be one afternoon if we group by US-95. Email homes@heyberkshire.com or call (702) 222-1964 with the workplace address so I time the loop at your hour, not midday.",
        },
      ]}
      faqs={[
        {
          question: "Is Lone Mountain part of Centennial Hills?",
          answer:
            "They are adjacent northwest markets. Some mailing addresses feel interchangeable; subdivision and ZIP on the MLS record are the source of truth.",
        },
        {
          question: "Which ZIP is Lone Mountain?",
          answer:
            "Listings appear in 89129, 89130, and 89131. I filter by subdivision, not ZIP alone.",
        },
        {
          question: "Can I see Lone Mountain and Centennial Hills in one day?",
          answer:
            "Yes. Call (702) 222-1964 and I will sequence showings by drive time.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/centennial-hills",
          label: "Centennial Hills homes for sale",
        },
        { href: "/neighborhoods/skye-canyon", label: "Skye Canyon new homes" },
        {
          href: "/neighborhoods/north-las-vegas",
          label: "North Las Vegas homes",
        },
      ]}
    />
  );
}
