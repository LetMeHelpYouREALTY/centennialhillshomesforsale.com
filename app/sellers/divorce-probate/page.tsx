import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";

export const metadata: Metadata = withShareImage(
  {
    title: "Divorce and Probate Home Sales Las Vegas | Dr. Jan Duffy",
    description:
      "Clark County divorce, probate, and estate home sales with Dr. Jan Duffy. Court orders, two signatures, clean close. Call (702) 222-1964. Not legal advice.",
    keywords: [
      "divorce home sale Las Vegas",
      "probate real estate Nevada",
      "estate sale Las Vegas",
    ],
  },
  {
    src: "/images/hero/sellers-listing.png",
    alt: "Las Vegas home prepared for a court-supervised listing",
  },
);

export default function DivorceProbatePage() {
  return (
    <TopicGuide
      name="divorce and probate sales"
      slug="divorce-probate"
      badge="Sellers"
      h1="Divorce and Probate Home Sales in Las Vegas"
      imageSrc="/images/hero/sellers-listing.png"
      imageAlt="Las Vegas home prepared for a court-supervised listing"
      intro="These listings close when the paperwork matches the MLS. I coordinate court orders, personal representatives, and two-party signatures. I am not your attorney or your CPA."
      stats={[
        { value: "Order", label: "Court / probate first" },
        { value: "CMA", label: "Price to the file" },
        { value: "Title", label: "Who can sign" },
        { value: "Dates", label: "Judge vs buyer" },
      ]}
      sections={[
        {
          heading: "Divorce: Nevada is a community-property state",
          body: "A listing usually needs both spouses or a court order that lets one person sign. I will not take a listing that title cannot insure. Buyers need extra time for the decree. I write that into the marketing timeline, not into a fight on the porch.",
        },
        {
          heading: "Probate and estate",
          body: "Personal representatives, letters testamentary, and sometimes a court confirmation of sale. Occupied vs vacant vs tenant in place changes the showing plan. I price from a CMA, not from what the heirs remember paying in 2012.",
        },
        {
          heading: "What I will not do",
          body: "I will not give legal advice, hide a party from title, or promise a cash buyer in 48 hours. I will introduce a real estate attorney and a title officer who have closed these files in Clark County. Call (702) 222-1964.",
        },
        {
          heading: "Documents before photos",
          body: "Send the decree, letters testamentary, or the order that says who can sign. I will not load MLS photos until title can insure the file. Email homes@heyberkshire.com or call (702) 222-1964 — this is not legal advice.",
        },
        {
          heading: "How I start a court-supervised listing",
          body: "Email the decree, letters testamentary, or the order that names who can sign — then the address. I start with title, not photos. Email homes@heyberkshire.com or call (702) 222-1964. This is not legal advice.",
        },
      ]}
      faqs={[
        {
          question: "Can one spouse list during a divorce?",
          answer:
            "Only if title and the court papers allow it. I start with those documents, not the photos.",
        },
        {
          question: "How long does a probate sale take?",
          answer:
            "UNKNOWN as a single number. Court calendars and whether confirmation is required drive the date. I map it with the attorney.",
        },
        {
          question: "Do you work with out-of-state heirs?",
          answer:
            "Yes. Remote signatures, lockbox, and a weekly photo log. I still walk the house myself.",
        },
        {
          question: "Where do I send court papers?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964. I start with who can sign, not the listing photos.",
        },
      ]}
      related={[
        { href: "/sellers", label: "Selling guide" },
        { href: "/home-valuation", label: "Home valuation" },
        { href: "/sellers/relocation", label: "Relocation sellers" },
        { href: "/contact", label: "Contact" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
