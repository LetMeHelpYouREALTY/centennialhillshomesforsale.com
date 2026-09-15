import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import TopicGuide from "@/components/sections/TopicGuide";

export const metadata: Metadata = withShareImage(
  {
    title: "Selling a Las Vegas Home While Relocating | Dr. Jan Duffy",
    description:
      "List your Las Vegas or Henderson home from out of state. Remote showings, lockbox, weekly updates with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "sell Las Vegas home while moving",
      "relocation home sale Nevada",
      "list house from out of state Las Vegas",
    ],
  },
  {
    src: "/images/hero/relocation.png",
    alt: "Moving truck in the driveway of a Las Vegas home during relocation",
  },
);

export default function SellersRelocationPage() {
  return (
    <TopicGuide
      name="relocation listings"
      slug="relocation"
      badge="Sellers"
      h1="Selling Your Las Vegas Home While You Relocate"
      imageSrc="/images/hero/relocation.png"
      imageAlt="Moving truck in the driveway of a Las Vegas home during relocation"
      intro="You can list from another time zone — 89138 Summerlin West, Centennial Hills, or a 55+ campus such as Siena. I handle access, vendors, and the offer paper. You sign electronically and get a weekly written update — not a mystery lockbox."
      stats={[
        { value: "Remote", label: "E-sign + photos" },
        { value: "Lockbox", label: "Supervised access" },
        { value: "Vendors", label: "Cleanout / paint" },
        { value: "Weekly", label: "Written update" },
      ]}
      sections={[
        {
          heading: "What remote actually looks like",
          body: "I walk the house, shoot photos, order a lockbox the HOA and gate will accept, and send a CMA before we pick a list price. Showings go on a calendar you can see. Offers come as a summary plus the contract — not a voicemail.",
        },
        {
          heading: "Vacant vs occupied vs tenant",
          body: "Vacant is easier to show and easier to get damaged. Occupied needs a showing window. Tenant-occupied needs the lease and Nevada notice rules. I will not advertise “easy to show” if a tenant has not been noticed.",
        },
        {
          heading: "The other city",
          body: "If you are buying in another state, Berkshire Hathaway HomeServices has a referral network. I still represent this listing. I do not dump you on a stranger without an introduction. Call (702) 222-1964 or email homes@heyberkshire.com.",
        },
        {
          heading: "Weekly written updates",
          body: "You get showing feedback and offer summaries in writing, not a mystery lockbox. Email homes@heyberkshire.com from the new time zone if a call window is awkward — I still walk the Clark County house myself.",
        },
        {
          heading: "How I start a remote listing CMA",
          body: "Send the address, occupancy (vacant, occupied, tenant), and photos if you have them. I walk the house, then email a CMA before we pick a list price. Email homes@heyberkshire.com or call (702) 222-1964.",
        },
      ]}
      faqs={[
        {
          question: "Do I have to fly back for closing?",
          answer:
            "Usually no. Mobile notary and wired funds. Confirm with title on your file.",
        },
        {
          question: "Who handles repairs?",
          answer:
            "I bid local vendors and send photos. You approve in writing. I do not spend your money on a guess.",
        },
        {
          question: "Can you also help me buy in Las Vegas later?",
          answer: "Yes. That is a separate buyer agreement if you return.",
        },
        {
          question: "How do I start a remote listing?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964 with the address, occupancy (vacant / occupied / tenant), and photos if you already have them.",
        },
      ]}
      related={[
        { href: "/relocation", label: "Relocation hub" },
        { href: "/sellers", label: "Selling guide" },
        { href: "/home-valuation", label: "Home valuation" },
        {
          href: "/buyers/california-relocator",
          label: "California buyers (inbound)",
        },
      ]}
    />
  );
}
