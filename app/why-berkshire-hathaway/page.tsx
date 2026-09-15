import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";
import { CTA_PHONE } from "@/lib/contact";

export const metadata: Metadata = withShareImage(
  {
    title: "Why Berkshire Hathaway HomeServices | Dr. Jan Duffy",
    description:
      "Why work with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. One agent of record, BHHS brand, local CMA. Call (702) 222-1964.",
    keywords: [
      "Berkshire Hathaway HomeServices Las Vegas",
      "Dr. Jan Duffy realtor",
      "BHHS Nevada Properties",
    ],
  },
  {
    src: "/images/hero/office-lake-mead.png",
    alt: "Berkshire Hathaway HomeServices Nevada Properties office on West Lake Mead Boulevard",
  },
);

export default function WhyBerkshirePage() {
  return (
    <TopicGuide
      name="this brokerage"
      slug="why-berkshire-hathaway"
      badge="About the brand"
      h1="Why Berkshire Hathaway HomeServices Nevada Properties"
      imageSrc="/images/hero/office-lake-mead.png"
      imageAlt="Berkshire Hathaway HomeServices Nevada Properties office on West Lake Mead Boulevard"
      intro="The brand is the distribution and the E&O. The work is one agent — Dr. Jan Duffy, license S.0197614.LLC — writing CMAs and walking houses in Clark County, including 89138 Summerlin West and 55+ campuses such as Siena. I will not sell you a kiosk."
      stats={[
        { value: "BHHS", label: "Brokerage" },
        { value: "S.0197614.LLC", label: "License" },
        { value: "Since 2008", label: "Las Vegas practice" },
        { value: CTA_PHONE, label: "Client line" },
      ]}
      sections={[
        {
          heading: "What the name actually buys you",
          body: "Listing syndication, a national relocation network, and a brokerage that has been through more cycles than a pop-up team. Your contract is still with Nevada Properties and with me. Follow Up Boss and RealScout are already connected natively — I do not build a shadow CRM.",
        },
        {
          heading: "What I actually do",
          body: "Live MLS, gate access, builder registration, 55+ CC&Rs (Siena, Trilogy, Sun City), 89138 Summerlin West, and written buyer or listing agreements. Phone (702) 222-1964 is the client line. Email homes@heyberkshire.com. (702) 500-1942 is the professional/FUB line, not a consumer CTA.",
        },
        {
          heading: "Fair Housing",
          body: "I describe square footage, amenities, named campuses, and commute times. I do not use “safe neighborhood,” “good schools,” or “family-friendly” as sales copy. Read /fair-housing.",
        },
        {
          heading: "How to reach this practice",
          body: "Client line (702) 222-1964. Email homes@heyberkshire.com. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Hours Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment. (702) 500-1942 is the professional/FUB line, not a consumer CTA.",
        },
        {
          heading: "What a CMA from this office looks like",
          body: "Sold comps, current actives, and the address — not a brand slogan. Warren Buffett does not write it. Email homes@heyberkshire.com or call (702) 222-1964 with the street. Buyer files still need a written buyer agreement.",
        },
      ]}
      faqs={[
        {
          question: "Are you a Berkshire Hathaway employee?",
          answer:
            "I am a REALTOR with Berkshire Hathaway HomeServices Nevada Properties, a franchise brokerage. Warren Buffett does not write your CMA.",
        },
        {
          question: "Do I have to pay more for the brand?",
          answer:
            "Fees are negotiated in writing. The brand is not a surcharge line item I hide.",
        },
        {
          question: "Where is the office?",
          answer:
            "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment.",
        },
        {
          question: "What email should clients use?",
          answer:
            "homes@heyberkshire.com. Do not use the FUB/professional line (702) 500-1942 as a consumer CTA.",
        },
      ]}
      related={[
        { href: "/about", label: "About Dr. Jan Duffy" },
        { href: "/contact", label: "Contact" },
        { href: "/fair-housing", label: "Fair Housing" },
        { href: "/google-business", label: "Google Business Profile" },
      ]}
      lastUpdated="September 2026"
      showListings={false}
    />
  );
}
