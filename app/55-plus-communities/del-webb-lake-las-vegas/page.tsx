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
    title: "Del Webb at Lake Las Vegas Homes | 55+ Henderson",
    description:
      "Del Webb Lake Las Vegas 55+ homes in Henderson. Lake setting, resort amenities, current listings with Dr. Jan Duffy. Call (702) 222-1964.",
    keywords: [
      "Del Webb Lake Las Vegas",
      "Lake Las Vegas 55 plus",
      "Del Webb homes Henderson",
    ],
  },
  {
    src: "/images/neighborhoods/del-webb-lake-las-vegas.png",
    alt: "Lake Las Vegas Henderson setting near Del Webb",
  },
);

const areaMedian = formatUsd(LISTING_MEDIANS_USD.lakeLasVegas);

export default function DelWebbLakeLasVegasPage() {
  return (
    <NeighborhoodGuide
      name="Del Webb at Lake Las Vegas"
      slug="del-webb-lake-las-vegas"
      pathPrefix="/55-plus-communities"
      badge="55+ HOPA community"
      h1="Del Webb at Lake Las Vegas Homes"
      intro="Del Webb at Lake Las Vegas is a newer 55+ village inside the Lake Las Vegas setting in Henderson — lake and mountain views, Del Webb programming, not the 1989 Sun City Summerlin campus."
      zipCodes={["89011"]}
      city="Henderson"
      imageSrc="/images/neighborhoods/del-webb-lake-las-vegas.png"
      imageAlt="Lake Las Vegas Henderson setting near Del Webb"
      latitude={36.103}
      longitude={-114.929}
      stats={[
        { value: areaMedian, label: "Lake LV listing median" },
        { value: "Confirm HOA", label: "Home count" },
        { value: "89011", label: "Primary ZIP" },
        { value: "Lake", label: "Setting" },
      ]}
      senior={{
        priceRange: `Lake Las Vegas area listing median ${areaMedian} (not the village alone)`,
        hoaFees: "Confirm on resale docs",
        amenities: [
          { name: "Del Webb clubhouse" },
          { name: "Resort-style pool" },
          { name: "Fitness center" },
          { name: "Lake Las Vegas trail access" },
        ],
      }}
      sections={[
        {
          heading: "Lake Las Vegas is a region, not one HOA",
          body: `Lake Las Vegas includes hotels, all-ages housing, and this Del Webb village. ${MARKET_SNAPSHOT_SOURCE} shows a Lake Las Vegas median listing of ${areaMedian} as of ${MARKET_SNAPSHOT_AS_OF} — that is the broader neighborhood sample, not a Del Webb-only CMA. I filter MLS by the Del Webb subdivision name.`,
        },
        {
          heading: "What you buy that Sun City does not have",
          body: "Newer floor plans, a smaller resident count, and a lake setting. You do not get three on-site golf courses like Sun City Summerlin. Lake amenities, marina access, and resort parking rules are their own documents. I walk those before you waive due diligence.",
        },
        {
          heading: "Commute",
          body: "This is the far east edge of Henderson. I-215 and Lake Mead Parkway are the spines. Airport and Strip drives are longer than from Green Valley. Time them at your hour if you still work or fly often.",
        },
        {
          heading: "Lake amenities vs the Del Webb village",
          body: "Marina, resort parking, and trail rules are their own documents — not the citywide Lake Las Vegas listing median. I walk those before you waive due diligence. Email homes@heyberkshire.com or call (702) 222-1964 with the village street so I filter MLS by Del Webb, not 89011 alone.",
        },
        {
          heading: "How I send Del Webb Lake Las Vegas matches",
          body: "Name the Del Webb village street if you have it. I filter MLS by subdivision, not the Lake Las Vegas area sample. Email homes@heyberkshire.com or call (702) 222-1964 — marina and resort rules stay on the packet, not on this page.",
        },
      ]}
      faqs={[
        {
          question: "Is Del Webb at Lake Las Vegas the same as Sun City?",
          answer:
            "No. It is a newer Del Webb 55+ village at Lake Las Vegas. Sun City Summerlin is the large 1989 campus in 89134.",
        },
        {
          question: "What is the median price?",
          answer: `The Lake Las Vegas area listing median was ${areaMedian} as of ${MARKET_SNAPSHOT_AS_OF}. That is not a Del Webb-only sold median. Ask for a live CMA.`,
        },
        {
          question: "Is it 55+?",
          answer:
            "Yes. HOPA rules apply. Confirm current occupancy and guest limits in the CC&Rs.",
        },
        {
          question: "How do I get a Del Webb Lake Las Vegas CMA?",
          answer:
            "Email homes@heyberkshire.com or call (702) 222-1964. The Lake Las Vegas area listing median is not a village-only sold price.",
        },
      ]}
      related={[
        { href: "/55-plus-communities", label: "All 55+ communities" },
        {
          href: "/55-plus-communities/sun-city-anthem",
          label: "Sun City Anthem",
        },
        { href: "/neighborhoods/henderson", label: "Henderson homes" },
      ]}
      lastUpdated="September 2026"
    />
  );
}
