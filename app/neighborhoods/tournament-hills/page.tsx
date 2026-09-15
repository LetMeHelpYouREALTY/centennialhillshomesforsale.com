import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = withShareImage(
  {
    title: "Tournament Hills Real Estate | Summerlin Luxury Homes",
    description:
      "Tournament Hills real estate in Summerlin (89134): custom estates near TPC Summerlin. Current listings and private tours with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "tournament hills real estate",
      "tournament hills summerlin real estate",
      "tournament hills homes for sale",
    ],
  },
  {
    src: "/images/neighborhoods/tournament-hills.png",
    alt: "Tournament Hills custom homes near TPC Summerlin in ZIP 89134",
  },
);

export default function TournamentHillsPage() {
  return (
    <NeighborhoodGuide
      name="Tournament Hills"
      slug="tournament-hills"
      h1="Tournament Hills Real Estate in Summerlin"
      intro="Tournament Hills is a guard-gated custom-home village in Summerlin, not Centennial Hills. Searchers looking for Tournament Hills Summerlin real estate are shopping large lots near TPC Summerlin in ZIP 89134."
      zipCodes={["89134"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/tournament-hills.png"
      imageAlt="Tournament Hills custom homes near TPC Summerlin in ZIP 89134"
      stats={[
        { value: "89134", label: "Primary ZIP" },
        { value: "Custom", label: "Home type" },
        { value: "TPC", label: "Golf adjacency" },
        { value: "Thin", label: "Inventory" },
      ]}
      sections={[
        {
          heading: "What buyers actually get in Tournament Hills",
          body: "Listing addresses such as Greensboro Lane, Trophy Hills Drive, and Pine Island Court confirm this village sits in 89134, in The Hills South area of Summerlin. Homes here are custom and semi-custom, typically on larger lots than production tract product in northwest Las Vegas. Inventory is thin; I will not publish a sold range without live MLS comps. Ask for a CMA.",
        },
        {
          heading: "How this differs from Centennial Hills and 89138",
          body: "Centennial Hills (this site’s primary market) is northwest Las Vegas around 89149 / 89131 / 89143, with production homes and Centennial Hills Park. Tournament Hills is Summerlin luxury. 89138 is Summerlin West (Reverence and later villages), newer construction, different price band. If Google sent you here from a Tournament Hills query, you are in the right village guide — use the Centennial Hills page only if you actually want northwest Las Vegas resale.",
        },
        {
          heading: "How I work a Tournament Hills showing",
          body: "Access is gated. I schedule with the listing desk, pull HOA and architectural docs, and walk lot orientation (golf, mountain, or interior). Membership at TPC Summerlin is separate from residency. Call (702) 222-1964 for current inventory; I do not scrape third-party listing blogs onto this domain.",
        },
        {
          heading: "Why there is no published village median",
          body: "Tournament Hills inventory is thin custom and semi-custom. I will not reuse a Sun City Summerlin listing median from the same 89134 ZIP — that is a different HOA and a different product. Email homes@heyberkshire.com or call (702) 222-1964 with the address for a live CMA.",
        },
        {
          heading: "How I send Tournament Hills matches",
          body: "Tell me lot orientation (golf, mountain, interior) and a price band. I schedule the gate with the listing desk and send live MLS — not a 89134 ZIP dump that includes Sun City Summerlin. Email homes@heyberkshire.com or call (702) 222-1964.",
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
            "UNKNOWN as a single reliable median — inventory is thin and product is custom. Ask for a live CMA.",
        },
        {
          question: "Can I see homes this week?",
          answer:
            "Usually yes, with gate access arranged in advance. Call or text Dr. Jan Duffy at (702) 222-1964 or email homes@heyberkshire.com.",
        },
        {
          question: "Is TPC Summerlin membership included with the deed?",
          answer:
            "No. Club membership is a separate contract. Confirm current terms with the club. Email homes@heyberkshire.com if you want the HOA packet reviewed before you tour.",
        },
      ]}
      related={[
        { href: "/neighborhoods/summerlin", label: "Summerlin homes for sale" },
        {
          href: "/neighborhoods/summerlin-west",
          label: "Summerlin West / 89138 homes",
        },
        { href: "/neighborhoods/the-ridges", label: "The Ridges luxury homes" },
        {
          href: "/neighborhoods/centennial-hills",
          label: "Centennial Hills homes for sale",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
