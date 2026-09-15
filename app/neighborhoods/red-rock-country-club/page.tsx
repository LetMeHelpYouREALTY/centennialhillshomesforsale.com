import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = withShareImage(
  {
    title: "Red Rock Country Club Homes | Summerlin Golf Community",
    description:
      "Red Rock Country Club homes for sale in Summerlin — two-course golf community. Private tours with Dr. Jan Duffy. Call 702-222-1964.",
    keywords: [
      "red rock country club homes",
      "red rock country club summerlin",
      "summerlin golf homes",
    ],
  },
  {
    src: "/images/neighborhoods/red-rock-country-club.png",
    alt: "Red Rock Country Club golf community in Summerlin 89135",
  },
);

export default function RedRockCountryClubPage() {
  return (
    <NeighborhoodGuide
      name="Red Rock Country Club"
      slug="red-rock-country-club"
      h1="Red Rock Country Club Homes in Summerlin"
      intro="Red Rock Country Club is a golf community in Summerlin (89135), with two courses and a mix of attached and detached product. It is not Centennial Hills and it is not Red Rock Canyon itself."
      zipCodes={["89135"]}
      city="Las Vegas"
      imageSrc="/images/neighborhoods/red-rock-country-club.png"
      imageAlt="Red Rock Country Club golf community in Summerlin 89135"
      stats={[
        { value: "89135", label: "Primary ZIP" },
        { value: "2", label: "Golf courses" },
        { value: "Gated", label: "Access" },
        { value: "Mix", label: "Housing types" },
      ]}
      sections={[
        {
          heading: "What you are buying",
          body: "Red Rock Country Club is a membership-optional golf setting with guard-gated entries and a wide price spread: attached product on the low end of the community, custom golf-frontage on the high end. A village sample is not a promise for every floor plan. Ask for a live CMA. Membership is a separate contract from the deed.",
        },
        {
          heading: "How it compares to Tournament Hills and The Ridges",
          body: "Tournament Hills (89134) is custom lots near TPC Summerlin. The Ridges is a separate guard-gated Summerlin village. Red Rock Country Club is the golf-membership setting with attached and detached product. I match lot, dues, and the actual house — not a status ranking.",
        },
      ]}
      faqs={[
        {
          question: "Do I have to join the golf club if I buy here?",
          answer:
            "Club membership is separate from homeownership. Confirm current dues and waitlists with the club; I will get the listing’s HOA package.",
        },
        {
          question: "Is this the same as Red Rock Canyon?",
          answer:
            "No. Red Rock Canyon National Conservation Area is the public park west of Summerlin. Red Rock Country Club is a residential golf community.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/tournament-hills",
          label: "Tournament Hills real estate",
        },
        { href: "/neighborhoods/the-ridges", label: "The Ridges Summerlin" },
        { href: "/neighborhoods/summerlin", label: "Summerlin homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
