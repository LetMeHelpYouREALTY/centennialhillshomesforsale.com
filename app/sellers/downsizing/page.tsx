import type { Metadata } from "next";
import TopicGuide from "@/components/sections/TopicGuide";

export const metadata: Metadata = {
  title: "Downsizing in Las Vegas | One-Story and 55+ Options",
  description:
    "Downsizing in Las Vegas or Henderson: one-story resale, townhomes, 55+ HOPA communities. Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "downsizing Las Vegas",
    "one story homes Las Vegas",
    "55 plus downsizing",
  ],
};

export default function DownsizingPage() {
  return (
    <TopicGuide
      name="downsizing"
      slug="downsizing"
      badge="Sellers"
      h1="Downsizing in Las Vegas and Henderson"
      imageSrc="/images/hero/55-plus-hub.png"
      imageAlt="One-story 55-plus community homes in Summerlin Las Vegas"
      intro="Downsizing is square footage, stairs, and HOA — then a sale that funds the next door. I list the house you have and match one-story, townhome, or 55+ HOPA product without a lifestyle slogan."
      stats={[
        { value: "One-story", label: "Common request" },
        { value: "55+", label: "HOPA option" },
        { value: "HOA", label: "Read before you bid" },
        { value: "Two files", label: "Sell then buy" },
      ]}
      sections={[
        {
          heading: "What people actually give up",
          body: "A two-story 2,400 sq ft Centennial Hills house with a three-car garage is a different daily life than a 1,600 sq ft Sun City Summerlin casita. Stairs, yard, and HOA landscaping are the trade. I measure the furniture and the lot, not a “simpler life” paragraph.",
        },
        {
          heading: "55+ vs all-ages one-story",
          body: "Sun City Summerlin, Sun City Anthem, Heritage at Stonebridge, Trilogy, Solera, and Del Webb Lake Las Vegas are HOPA communities with occupancy rules. All-ages one-story inventory exists in Green Valley, Summerlin villages, and northwest Las Vegas. Confirm whether every occupant must be 55+ before you fall in love with a model.",
        },
        {
          heading: "Money order of operations",
          body: "List the larger house with a real CMA. Do not buy the smaller house on a guess. Move-up sequencing applies in reverse: sale contingency, rent-back, or a short overlap. Call 702-222-1964.",
        },
      ]}
      faqs={[
        {
          question: "Do I have to buy 55+ to downsize?",
          answer:
            "No. One-story all-ages homes exist. 55+ is a choice about occupancy rules and amenities, not a requirement.",
        },
        {
          question: "What will my current home sell for?",
          answer: "UNKNOWN without a CMA. Use the home valuation page or call.",
        },
        {
          question: "Can grandchildren stay overnight in 55+?",
          answer:
            "Usually for a limited number of days per year. Confirm the CC&Rs. Children cannot be permanent residents.",
        },
      ]}
      related={[
        { href: "/55-plus-communities", label: "55+ communities" },
        { href: "/sellers", label: "Selling guide" },
        { href: "/sellers/move-up", label: "Move-up sellers" },
        {
          href: "/55-plus-communities/sun-city-summerlin",
          label: "Sun City Summerlin",
        },
      ]}
      lastUpdated="September 2026"
    />
  );
}
