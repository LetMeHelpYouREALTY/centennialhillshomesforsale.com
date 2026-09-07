import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = {
  title: "Tournament Hills Real Estate | Summerlin Luxury Homes",
  description:
    "Tournament Hills real estate in Summerlin (89134): custom estates near TPC Summerlin. Current listings and private tours with Dr. Jan Duffy. Call 702-222-1964.",
  keywords: [
    "tournament hills real estate",
    "tournament hills summerlin real estate",
    "tournament hills homes for sale",
  ],
};

export default function TournamentHillsPage() {
  return (
    <NeighborhoodGuide
      name="Tournament Hills"
      h1="Tournament Hills Real Estate in Summerlin"
      intro="Tournament Hills is a guard-gated custom-home village in Summerlin, not Centennial Hills. Searchers looking for Tournament Hills Summerlin real estate are shopping large lots near TPC Summerlin in ZIP 89134."
      zipCodes={["89134"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/summerlin.png"
      imageAlt="Summerlin golf-course and mountain setting near Tournament Hills Las Vegas"
      stats={[
        { value: "89134", label: "Primary ZIP" },
        { value: "Custom", label: "Home type" },
        { value: "TPC", label: "Golf adjacency" },
        { value: "Thin", label: "Inventory" },
      ]}
      sections={[
        {
          heading: "What buyers actually get in Tournament Hills",
          body: "Listing addresses such as Greensboro Lane, Trophy Hills Drive, and Pine Island Court confirm this village sits in 89134, in The Hills South area of Summerlin. Homes here are custom and semi-custom, typically on larger lots than production tract product in northwest Las Vegas. 2026 closed-sale reports for this village have ranged from under $1 million on smaller resales to several million on estate inventory. Inventory is thin, so a single closing can swing a “median.” I price offers from live comps, not a headline number.",
        },
        {
          heading: "How this differs from Centennial Hills and 89138",
          body: "Centennial Hills (this site’s primary market) is northwest Las Vegas around 89149 / 89131 / 89143, with production homes and Centennial Hills Park. Tournament Hills is Summerlin luxury. 89138 is Summerlin West (Reverence and later villages), newer construction, different price band. If Google sent you here from a Tournament Hills query, you are in the right village guide — use the Centennial Hills page only if you actually want northwest Las Vegas resale.",
        },
        {
          heading: "How I work a Tournament Hills showing",
          body: "Access is gated. I schedule with the listing desk, pull HOA and architectural docs, and walk lot orientation (golf, mountain, or interior). Membership at TPC Summerlin is separate from residency. Call 702-222-1964 for current inventory; I do not scrape third-party listing blogs onto this domain.",
        },
      ]}
      faqs={[
        {
          question: "Is Tournament Hills in Centennial Hills?",
          answer:
            "No. Tournament Hills is in Summerlin ZIP 89134 near TPC Summerlin. Centennial Hills is a separate northwest Las Vegas market.",
        },
        {
          question: "What is the median home price in Tournament Hills?",
          answer:
            "UNKNOWN as a single reliable median — 2026 reports disagree because few homes trade. Recent asking prices on active luxury listings have been in the multi-million range. Ask for a live CMA.",
        },
        {
          question: "Can I see homes this week?",
          answer:
            "Usually yes, with gate access arranged in advance. Call or text Dr. Jan Duffy at 702-222-1964.",
        },
      ]}
      related={[
        { href: "/neighborhoods/summerlin", label: "Summerlin homes for sale" },
        { href: "/neighborhoods/summerlin-west", label: "Summerlin West / 89138 homes" },
        { href: "/neighborhoods/the-ridges", label: "The Ridges luxury homes" },
        { href: "/neighborhoods/centennial-hills", label: "Centennial Hills homes for sale" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
