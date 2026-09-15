import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Solera at Anthem Homes | Guard-Gated 55+ Henderson",
    description:
      "Solera at Anthem Henderson 55+ homes. Smaller guard-gated community in 89052. Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "Solera at Anthem homes for sale",
      "Solera Anthem Henderson",
      "guard-gated 55+ community Henderson",
    ],
  },
  {
    src: "/images/neighborhoods/solera-anthem.png",
    alt: "Solera at Anthem Henderson 55-plus single-story homes and rec courts",
  },
);

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
      imageSrc="/images/neighborhoods/solera-anthem.png"
      imageAlt="Solera at Anthem Henderson 55-plus single-story homes and rec courts"
      latitude={35.965}
      longitude={-115.1}
      stats={[
        { value: "Confirm HOA", label: "Home count" },
        { value: "Gated", label: "Access" },
        { value: "89052", label: "ZIP" },
        { value: anthem, label: "Anthem area listing median" },
      ]}
      senior={{
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
          body: "Sun City Anthem is the large Del Webb campus with Anthem Center. Solera is a smaller gated map with a different HOA and typically lower dues than the big campus. Some buyers want fewer neighbors and a gate. Some want the full Anthem Center amenity campus — confirm size and dues on the HOA packet. I tour both on the same Henderson loop.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `Anthem’s realtor.com listing median was ${anthem} — that is the broader Anthem sample, not Solera alone. Marketing price bands are not a CMA. Confirm HOA on the resale package.`,
        },
        {
          heading: "Occupancy",
          body: "Solera’s recorded rules have required all residents to be 55+ in many periods, which is stricter than “one occupant 55+.” That matters if a spouse or adult child will occupy. I read the current CC&Rs before you write the offer. Guest stay limits are in the same packet.",
        },
        {
          heading: "Gate access and the CMA",
          body: `The Anthem area listing median (${anthem}) is a broader sample, not Solera-only. I CMA this HOA, then schedule the guard with the listing desk. Email homes@heyberkshire.com or call (702) 222-1964 with the address — do not bid from a Sun City Anthem campus number.`,
        },
        {
          heading: "How I send Solera matches",
          body: "Say beds, a price band, and whether every occupant must be 55+. I filter MLS to this HOA, then schedule the gate. Email homes@heyberkshire.com or call (702) 222-1964 — I will not mix Sun City Anthem campus listings into this set.",
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
          answer:
            "Call (702) 222-1964 or email homes@heyberkshire.com. Gate access is arranged in advance.",
        },
        {
          question: "Can I email the CC&Rs before I tour?",
          answer:
            "Yes. Email homes@heyberkshire.com with the listing. Occupancy rules here are often stricter than Sun City Anthem — I read the current packet, not a blog.",
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
    />
  );
}
