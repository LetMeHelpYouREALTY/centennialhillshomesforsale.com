import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = {
  title: "Lone Mountain Homes for Sale | Northwest Las Vegas",
  description:
    "Lone Mountain homes for sale in northwest Las Vegas near Centennial Hills. Views, lots, and current listings with Dr. Jan Duffy. Call 702-222-1964.",
  keywords: ["lone mountain las vegas homes", "lone mountain real estate", "northwest las vegas homes"],
};

export default function LoneMountainPage() {
  return (
    <NeighborhoodGuide
      name="Lone Mountain"
      h1="Lone Mountain Homes for Sale in Northwest Las Vegas"
      intro="Lone Mountain sits on the northwest side of the valley, next to the Centennial Hills corridor. Buyers come for larger lots and mountain views, not a single gated amenity campus."
      zipCodes={["89129", "89130", "89131"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/centennial-hills.png"
      imageAlt="Northwest Las Vegas desert mountain backdrop near Lone Mountain"
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
          heading: "What to inspect before you offer",
          body: "View lots can mean wind, grading, and block-wall maintenance. Septic vs sewer still appears on some northwest parcels — confirm on the listing, do not assume. Commute uses US-95 and the 215; time it at your actual hour, not midday.",
        },
      ]}
      faqs={[
        {
          question: "Is Lone Mountain part of Centennial Hills?",
          answer:
            "They are adjacent northwest markets. Some mailing addresses feel interchangeable; subdivision and ZIP on the MLS record are the source of truth.",
        },
        {
          question: "Can I see Lone Mountain and Centennial Hills in one day?",
          answer: "Yes. Call 702-222-1964 and I will sequence showings by drive time.",
        },
      ]}
      related={[
        { href: "/neighborhoods/centennial-hills", label: "Centennial Hills homes for sale" },
        { href: "/neighborhoods/skye-canyon", label: "Skye Canyon new homes" },
        { href: "/neighborhoods/north-las-vegas", label: "North Las Vegas homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
