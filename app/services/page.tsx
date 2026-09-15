import type { Metadata } from "next";
import TopicGuide from "@/components/sections/TopicGuide";

export const metadata: Metadata = {
  title: "Real Estate Services Las Vegas | Dr. Jan Duffy",
  description:
    "Buying, selling, luxury, 55+, new construction, investment, and relocation with Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
  keywords: [
    "Las Vegas real estate services",
    "home buying Las Vegas",
    "home selling Henderson",
  ],
};

export default function ServicesPage() {
  return (
    <TopicGuide
      name="services"
      slug="services"
      badge="Services"
      h1="Las Vegas Real Estate Services"
      imageSrc="/images/hero/office-lake-mead.png"
      imageAlt="Las Vegas office where Dr. Jan Duffy handles buyer and seller files"
      intro="One agent of record for Clark County residential work. Pick the page that matches the file — buyer, seller, 55+, new construction, luxury, investment, or relocation."
      stats={[
        { value: "Buy", label: "Written buyer agreement" },
        { value: "Sell", label: "CMA then list" },
        { value: "55+", label: "HOPA communities" },
        { value: "New", label: "Register before models" },
      ]}
      sections={[
        {
          heading: "Buyer representation",
          body: "MLS search, tours, offers, inspections. Compensation is disclosed in a written buyer agreement and may be paid by the seller, the buyer, or both. Start on /buyers, /buyers/first-time-buyers, or /buyers/california-relocator.",
        },
        {
          heading: "Seller representation",
          body: "CMA, photos, MLS, negotiation. Fees in writing before you list. Move-up, downsizing, divorce/probate, and out-of-state listings each have their own page under /sellers.",
        },
        {
          heading: "Specialized files",
          body: "Luxury (gated custom), 55+ HOPA, new construction (register first), investment (no property management), relocation inbound and outbound. I do not duplicate RealScout or Follow Up Boss features those platforms already provide.",
        },
      ]}
      faqs={[
        {
          question: "Can you handle a buy and a sell at once?",
          answer:
            "Yes, as two files. Move-up and downsizing pages explain sequencing.",
        },
        {
          question: "Do you work Henderson and North Las Vegas?",
          answer:
            "Yes. Henderson, Summerlin, Centennial Hills, and North Las Vegas are all in the practice area.",
        },
        {
          question: "How do I start?",
          answer: "Call (702) 222-1964 or use /contact.",
        },
      ]}
      related={[
        { href: "/buyers", label: "Buyers" },
        { href: "/sellers", label: "Sellers" },
        { href: "/55-plus-communities", label: "55+ communities" },
        { href: "/new-construction", label: "New construction" },
        { href: "/luxury-homes", label: "Luxury homes" },
        { href: "/investment-properties", label: "Investment properties" },
        { href: "/relocation", label: "Relocation" },
        { href: "/home-valuation", label: "Home valuation" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
