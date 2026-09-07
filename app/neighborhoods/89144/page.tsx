import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = {
  title: "89144 Homes for Sale | Summerlin ZIP Code Real Estate",
  description:
    "89144 zip code homes for sale are in Summerlin (The Arbors, Trails, Queensridge) — not Centennial Hills. Dr. Jan Duffy, BHHS Nevada Properties. Call 702-222-1964.",
  keywords: [
    "89144 zip code homes for sale",
    "homes for sale in 89144",
    "89144 homes for sale",
    "real estate agent in las vegas 89144",
  ],
};

export default function Zip89144Page() {
  return (
    <NeighborhoodGuide
      name="89144 Summerlin"
      h1="89144 Homes for Sale — Summerlin, Not Centennial Hills"
      intro="ZIP 89144 is central / west-central Summerlin: The Arbors, The Trails, Queensridge, and nearby villages. It is a different market from Centennial Hills. If you searched 89144 homes for sale, this is the correct map."
      zipCodes={["89144"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/summerlin.png"
      imageAlt="Established Summerlin streetscape in ZIP 89144 Las Vegas"
      stats={[
        { value: "89144", label: "ZIP code" },
        { value: "Summerlin", label: "Master plan" },
        { value: "Varies", label: "Village pricing" },
        { value: "CMA", label: "Use live comps" },
      ]}
      sections={[
        {
          heading: "Why this ZIP is not Centennial Hills",
          body: "Google Search Console shows people typing “89144 zip code homes for sale” while also typing “centennial hills real estate.” Those are two corridors. Centennial Hills is northwest Las Vegas around US-95 and Centennial Hills Park (89149 / 89131 / 89143). 89144 sits inside the Howard Hughes Summerlin map, closer to Downtown Summerlin and the 215. Mixing them is how buyers tour the wrong side of the valley.",
        },
        {
          heading: "Pricing — do not trust one median",
          body: "Public 2026 ZIP reports for 89144 disagree with each other (some listing medians in the mid $500,000s, others much higher because Queensridge and similar product pull the average). I will not invent a single number. Tell me beds, lot, and village and I will run a CMA from current MLS.",
        },
        {
          heading: "What I send after you call",
          body: "Active 89144 listings that match your price band, plus a short note on HOA, SID/LID if present, and commute to your workplace. No third-party advertorials hosted on this domain — Google’s site reputation policy (updated August 28, 2026) is why this page is first-party copy from Dr. Jan Duffy, not a syndicated ZIP dump.",
        },
      ]}
      faqs={[
        {
          question: "Are 89144 homes in Centennial Hills?",
          answer:
            "No. 89144 is Summerlin. Centennial Hills homes for sale are listed mainly under 89149, 89131, and 89143.",
        },
        {
          question: "What neighborhoods are in 89144?",
          answer:
            "Common villages include The Arbors, The Trails, and Queensridge. Confirm the subdivision on the listing, because village names and ZIP edges do not always match marketing copy.",
        },
        {
          question: "Who should I call for 89144 showings?",
          answer: "Dr. Jan Duffy at 702-222-1964. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
        },
      ]}
      related={[
        { href: "/neighborhoods/centennial-hills", label: "Centennial Hills (89149) homes" },
        { href: "/neighborhoods/summerlin", label: "Summerlin overview" },
        { href: "/neighborhoods/89138", label: "89138 Summerlin West homes" },
        { href: "/neighborhoods/tournament-hills", label: "Tournament Hills" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
