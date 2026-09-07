import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = {
  title: "Summerlin West Homes for Sale | 89138 Real Estate",
  description:
    "Summerlin West homes for sale in ZIP 89138 — Reverence and later Howard Hughes villages. Search listings with Dr. Jan Duffy. Call 702-222-1964.",
  keywords: [
    "summerlin west homes for sale",
    "summerlin west real estate",
    "89138 homes for sale",
    "west summerlin homes for sale",
  ],
};

export default function SummerlinWestPage() {
  return (
    <NeighborhoodGuide
      name="Summerlin West"
      h1="Summerlin West Homes for Sale (89138)"
      intro="Summerlin West is the later Howard Hughes build-out on the far west side of the master plan, primarily ZIP 89138. It is not Centennial Hills and it is not Tournament Hills."
      zipCodes={["89138"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/summerlin.png"
      imageAlt="West Summerlin desert foothills and newer residential streets in ZIP 89138"
      stats={[
        { value: "89138", label: "Primary ZIP" },
        { value: "Newer", label: "Housing stock" },
        { value: "HH", label: "Master plan" },
        { value: "Red Rock", label: "Trail access" },
      ]}
      sections={[
        {
          heading: "What 89138 buyers are shopping",
          body: "Queries for Summerlin West homes, west Summerlin, and homes for sale in 89138 point at villages such as Reverence and other Village 26-era product: newer floor plans, foothill views, and a different commute than 89149 Centennial Hills. July 2026 luxury-village roundups put Reverence’s median sold near the low $800,000s with shorter days on market than Tournament Hills. Treat that as a village sample, not a ZIP-wide promise — I send live 89138 listings after a call.",
        },
        {
          heading: "Commute and daily errands",
          body: "Summerlin West sits farther west than Downtown Summerlin. Drive times to the office corridor along 215 and to Red Rock Canyon Scenic Drive are the usual tradeoff. Grocery and services have filled in with the villages; confirm the exact parcel against current retail pads rather than a 2018 map.",
        },
        {
          heading: "First-party representation",
          body: "This page is written for this website’s readers, not copied from another brokerage’s Summerlin guide. Builder incentives on remaining new construction (if any lot is still open) are negotiated with your own agent, not the seller’s kiosk. Call 702-222-1964.",
        },
      ]}
      faqs={[
        {
          question: "Is 89138 the same as Centennial Hills?",
          answer:
            "No. 89138 is Summerlin West. Centennial Hills listings are mainly 89149, 89131, and 89143 in northwest Las Vegas.",
        },
        {
          question: "Where is Reverence?",
          answer:
            "Reverence is a Summerlin West village in 89138. It is newer production and view-oriented product, not the 1990s custom stock in Tournament Hills.",
        },
        {
          question: "How do I get current 89138 listings?",
          answer:
            "Call or text Dr. Jan Duffy at 702-222-1964. I will send matching MLS results rather than a scraped feed.",
        },
      ]}
      related={[
        { href: "/neighborhoods/89138", label: "89138 ZIP homes for sale" },
        { href: "/neighborhoods/tournament-hills", label: "Tournament Hills Summerlin" },
        { href: "/neighborhoods/89144", label: "89144 Summerlin homes" },
        { href: "/55-plus-communities/sun-city-summerlin", label: "Sun City Summerlin homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
