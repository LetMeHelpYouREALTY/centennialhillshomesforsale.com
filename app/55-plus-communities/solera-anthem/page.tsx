import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";

export const metadata: Metadata = {
  title: "Solera at Anthem Homes | Guard-Gated 55+ Henderson",
  description:
    "Solera at Anthem Henderson 55+ homes. Smaller guard-gated community in 89052. Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Solera at Anthem homes for sale",
    "Solera Anthem Henderson",
    "guard-gated 55+ community Henderson",
  ],
};

const anthem = formatUsd(LISTING_MEDIANS_USD.anthem);

export default function SoleraAnthemPage() {
  return (
    <NeighborhoodGuide
      name="Solera at Anthem"
      slug="solera-anthem"
      pathPrefix="/55-plus-communities"
      badge="55+ HOPA community"
      h1="Solera at Anthem Homes in Henderson"
      intro="Solera at Anthem is a smaller guard-gated 55+ community in Henderson 89052. It is not Sun City Anthem. Occupancy rules here more often require every resident to be 55+ — confirm the current CC&Rs."
      zipCodes={["89052"]}
      city="Henderson"
      imageSrc="/images/neighborhoods/henderson.png"
      imageAlt="Henderson foothills residential setting near Solera at Anthem"
      latitude={35.965}
      longitude={-115.1}
      stats={[
        { value: "1,200+", label: "Homes" },
        { value: "Gated", label: "Access" },
        { value: "89052", label: "ZIP" },
        { value: anthem, label: "Anthem area listing median" },
      ]}
      senior={{
        numberOfHomes: 1200,
        priceRange: "Confirm with live CMA",
        hoaFees: "Confirm on resale docs",
        amenities: [
          { name: "Guard-gated entry" },
          { name: "Clubhouse" },
          { name: "Fitness center" },
          { name: "Tennis courts" },
        ],
      }}
      sections={[
        {
          heading: "Why buyers compare Solera to Sun City Anthem",
          body: "Sun City Anthem is the large Del Webb campus with Anthem Center. Solera is a smaller gated map with a different HOA and typically lower dues than the big campus. Some buyers want fewer neighbors and a gate. Some want 64,000 square feet of clubhouse. I tour both on the same Henderson loop.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `Anthem’s realtor.com listing median was ${anthem} — that is the broader Anthem sample, not Solera alone. Marketing bands of $380K–$650K are not a CMA. Confirm HOA (older $170–$210/month figures) on the resale package.`,
        },
        {
          heading: "Occupancy",
          body: "Solera’s recorded rules have required all residents to be 55+ in many periods, which is stricter than “one occupant 55+.” That matters if a spouse or adult child will occupy. I read the current CC&Rs before you write the offer. Guest stay limits are in the same packet.",
        },
      ]}
      faqs={[
        {
          question: "Is Solera the same as Sun City Anthem?",
          answer:
            "No. Same Henderson 89052 area, different HOA, different amenity campus, typically stricter occupancy.",
        },
        {
          question: "Do all residents need to be 55?",
          answer:
            "Often yes at Solera. Confirm the current CC&Rs. Do not rely on a blog.",
        },
        {
          question: "How do I tour?",
          answer: "Call 702-222-1964. Gate access is arranged in advance.",
        },
      ]}
      related={[
        { href: "/55-plus-communities", label: "All 55+ communities" },
        {
          href: "/55-plus-communities/sun-city-anthem",
          label: "Sun City Anthem",
        },
        { href: "/neighborhoods/henderson", label: "Henderson homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
