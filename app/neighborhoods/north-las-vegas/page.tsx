import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import NeighborhoodGuide from "@/components/sections/NeighborhoodGuide";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "North Las Vegas Homes for Sale | Aliante, Tule Springs",
    description:
      "North Las Vegas homes for sale with Dr. Jan Duffy — Aliante, Tule Springs, Valley Vista, and current listings. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "North Las Vegas homes for sale",
      "Aliante homes",
      "Tule Springs homes",
      "first time home buyer Las Vegas",
    ],
  },
  {
    src: "/images/neighborhoods/north-las-vegas.png",
    alt: "Northwest Las Vegas Valley residential streets near North Las Vegas",
  },
);

const median = formatUsd(LISTING_MEDIANS_USD.northLasVegas);

export default function NorthLasVegasPage() {
  return (
    <NeighborhoodGuide
      name="North Las Vegas"
      slug="north-las-vegas"
      h1="North Las Vegas Homes for Sale"
      intro="North Las Vegas is a separate city north of Las Vegas, with master plans such as Aliante, Tule Springs, and Valley Vista plus in-fill resale. Citywide listing medians sit below Henderson and Summerlin West — still not a promise for every street."
      zipCodes={["89031", "89032", "89081", "89084", "89085", "89086"]}
      city="North Las Vegas"
      imageSrc="/images/neighborhoods/north-las-vegas.png"
      imageAlt="Northwest Las Vegas Valley residential streets near North Las Vegas"
      latitude={36.1989}
      longitude={-115.1175}
      stats={[
        { value: median, label: "City median listing" },
        { value: "I-15 / 215", label: "Freeway access" },
        { value: "Aliante", label: "2000s master plan" },
        { value: "New + resale", label: "Inventory mix" },
      ]}
      sections={[
        {
          heading: "Citywide median vs the subdivision",
          body: `${MARKET_SNAPSHOT_SOURCE} shows a North Las Vegas median listing of ${median} as of ${MARKET_SNAPSHOT_AS_OF}. Tule Springs and some new-construction pods list well above that. Older in-fill can list below it. I CMA the subdivision, beds, and HOA — not the city name on a billboard.`,
        },
        {
          heading: "Where buyers actually tour",
          body: "Aliante is the finished 2000s master plan (and Sun City Aliante is the 55+ village inside it). Tule Springs / Skye Canyon adjacency is newer production against Floyd Lamb Park and the northern 215. Valley Vista and other builder pods rotate incentives. I do not treat “North Las Vegas” as one product.",
        },
        {
          heading: "Investors and first-time buyers",
          body: "Some NLV streets cash-flow on paper and fail inspection. Some first-time buyers want a one-story Aliante resale and get shown a two-story incentive home 20 minutes away. Say occupancy vs rental on the call. I represent buyers and sellers. I do not manage rentals. I can refer a licensed manager.",
        },
        {
          heading: "Commute vs Centennial Hills",
          body: "I-15 and the northern 215 are the spines. Centennial Hills (89149 / 89131 / 89143) shares a freeway corridor, not a city hall. Time both if you work in Summerlin or at Harry Reid. Email homes@heyberkshire.com or call (702) 222-1964 with the workplace address for a drive-time matrix, not a city slogan.",
        },
        {
          heading: "How I send North Las Vegas matches",
          body: "Name Aliante, Tule Springs, Valley Vista, or in-fill — plus occupancy vs rental. I filter MLS by subdivision, not the city median. Email homes@heyberkshire.com or call (702) 222-1964. I do not manage rentals.",
        },
      ]}
      faqs={[
        {
          question: "What is the median home price in North Las Vegas?",
          answer: `Realtor.com reported ${median} as the North Las Vegas median listing price as of ${MARKET_SNAPSHOT_AS_OF}. Village pricing differs. Ask for a live CMA.`,
        },
        {
          question: "Is North Las Vegas the same as Centennial Hills?",
          answer:
            "No. Centennial Hills is northwest Las Vegas (89149 / 89131 / 89143). North Las Vegas is a separate city. They share a freeway corridor, not a city hall.",
        },
        {
          question: "Which builders are active in North Las Vegas?",
          answer:
            "Builder lineups change. Lennar, KB Home, Richmond American, and Century Communities have had pods in recent years. I confirm which community is still selling new on a live pull.",
        },
        {
          question: "How do I get a North Las Vegas CMA?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964 with the subdivision and occupancy vs rental. I will not price a bid from the city median alone.",
        },
      ]}
      related={[
        {
          href: "/neighborhoods/centennial-hills",
          label: "Centennial Hills homes",
        },
        { href: "/neighborhoods/skye-canyon", label: "Skye Canyon homes" },
        {
          href: "/55-plus-communities/sun-city-aliante",
          label: "Sun City Aliante",
        },
        { href: "/buyers/first-time-buyers", label: "First-time buyer guide" },
      ]}
    />
  );
}
