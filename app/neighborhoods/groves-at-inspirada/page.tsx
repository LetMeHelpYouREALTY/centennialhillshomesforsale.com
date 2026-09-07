import type { Metadata } from "next";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";

export const metadata: Metadata = {
  title: "Groves at Inspirada Homes | Henderson Townhomes",
  description:
    "Groves at Inspirada Henderson townhomes by KB Home (resale). Square footage, parks, and current listings with Dr. Jan Duffy. Call 702-222-1964.",
  keywords: [
    "groves at inspirada",
    "groves at inspirada henderson",
    "groves at inspirada new homes for sale",
    "inspirada townhomes",
  ],
};

export default function GrovesAtInspiradaPage() {
  return (
    <NeighborhoodGuide
      name="Groves at Inspirada"
      h1="Groves at Inspirada Townhomes in Henderson"
      intro="The Groves at Inspirada is a KB Home townhome neighborhood inside the Inspirada master plan (Henderson 89044). New construction in Groves is done; what you buy today is resale."
      zipCodes={["89044"]}
      city="Henderson"
      imageSrc="/images/neighborhoods/inspirada.png"
      imageAlt="Inspirada Henderson parks and residential streets near Groves townhomes"
      stats={[
        { value: "KB Home", label: "Original builder" },
        { value: "TH", label: "Townhome" },
        { value: "~1,430–1,921", label: "Sq ft (plans)" },
        { value: "Resale", label: "2026 status" },
      ]}
      sections={[
        {
          heading: "What Groves actually is",
          body: "Groves is two-story townhome product originally marketed from the mid $300s when KB was selling new. Plans ran about 1,430 to 1,921 square feet. That is not the same as Pardee / Tri Pointe single-family product in Linea or Alterra, and it is not Aventura Park (a 20-acre amenity, not a subdivision). Searchers mixing “groves at inspirada new homes for sale” with 2026 should know the new-home window in Groves already closed — you are shopping used townhomes inside a finished village.",
        },
        {
          heading: "Parks you actually use from Groves",
          body: "Inspirada is park-based, not one giant clubhouse. Groves sits near Aventura Park (resident pool, courts, dog park), plus other Inspirada parks such as Capriola, Potenza, and Solista depending on the exact street. HOA access rules apply to resident pools. I walk the park that matches the listing, not a generic brochure.",
        },
        {
          heading: "New construction elsewhere in Inspirada",
          body: "As of mid-2026 reporting, Inspirada as a whole was in a final new-construction window (on the order of tens of remaining homes across KB, Toll Brothers, and Tri Pointe — not Groves). If you need a brand-new detached home, say so on the call. I will not rehost another site’s builder inventory on this domain.",
        },
      ]}
      faqs={[
        {
          question: "Are there still new Groves at Inspirada homes?",
          answer:
            "No. Groves was built as KB townhomes (about 2018–2021). 2026 buyers are looking at resales. Remaining Inspirada new construction, if any, is in other builder pods.",
        },
        {
          question: "Is Groves the same as Aventura Park?",
          answer:
            "No. Aventura Park is a community park inside Inspirada. Groves is a townhome neighborhood. You can live in Groves and use Aventura Park under HOA rules.",
        },
        {
          question: "Do you manage rentals in Groves?",
          answer:
            "No. Dr. Jan Duffy represents buyers and sellers. She does not offer property management. She can refer a licensed manager if you need one.",
        },
      ]}
      related={[
        { href: "/neighborhoods/inspirada", label: "Inspirada homes for sale" },
        { href: "/new-construction", label: "Las Vegas new construction" },
        { href: "/neighborhoods/henderson", label: "Henderson real estate" },
        { href: "/neighborhoods/centennial-hills", label: "Centennial Hills homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
