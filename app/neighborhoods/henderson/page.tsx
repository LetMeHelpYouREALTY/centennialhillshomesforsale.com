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
    title: "Henderson Homes for Sale | Green Valley, Inspirada, Anthem",
    description:
      "Henderson, Nevada homes for sale with Dr. Jan Duffy, BHHS Nevada Properties. Green Valley, Inspirada, Anthem, and Lake Las Vegas. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "Henderson homes for sale",
      "Henderson real estate agent",
      "Henderson Nevada",
      "Green Valley Henderson",
    ],
  },
  {
    src: "/images/neighborhoods/henderson.png",
    alt: "Henderson Nevada parks and residential streets in a master-planned community",
  },
);

const listing = formatUsd(LISTING_MEDIANS_USD.hendersonListing);
const sold = formatUsd(LISTING_MEDIANS_USD.hendersonSold);

export default function HendersonPage() {
  return (
    <NeighborhoodGuide
      name="Henderson"
      slug="henderson"
      h1="Henderson Homes for Sale"
      intro="Henderson is Nevada’s second-largest city, southeast of the Strip, with finished master plans (Green Valley, Inspirada, Anthem) and waterfront product at Lake Las Vegas. It is not Las Vegas city limits and it is not Centennial Hills."
      zipCodes={[
        "89002",
        "89011",
        "89012",
        "89014",
        "89015",
        "89044",
        "89052",
        "89074",
      ]}
      city="Henderson"
      imageSrc="/images/neighborhoods/henderson.png"
      imageAlt="Henderson Nevada parks and residential streets in a master-planned community"
      latitude={36.0395}
      longitude={-114.9817}
      stats={[
        { value: listing, label: "Median listing" },
        { value: sold, label: "Median sold" },
        {
          value: formatUsd(LISTING_MEDIANS_USD.inspirada),
          label: "Inspirada listing",
        },
        { value: "City parks", label: "Recreation" },
      ]}
      sections={[
        {
          heading: "City vs village",
          body: "Henderson is a city with its own police, parks department, and recreation centers. Green Valley is the 1980s–90s grid. Inspirada (89044) is a newer park-based master plan. Anthem and MacDonald Highlands sit against the McCullough Range. Lake Las Vegas is a separate waterfront setting. I tour by village, commute, and HOA — not by a city-wide ranking.",
        },
        {
          heading: `Pricing as of ${MARKET_SNAPSHOT_AS_OF}`,
          body: `${MARKET_SNAPSHOT_SOURCE}: Henderson median listing ${listing}, median sold ${sold}. Days on market and active count are UNKNOWN on this page until a new sourced pull. Neighborhood listing medians on the same pull include Inspirada ${formatUsd(LISTING_MEDIANS_USD.inspirada)}, Anthem ${formatUsd(LISTING_MEDIANS_USD.anthem)}, Green Valley Ranch ${formatUsd(LISTING_MEDIANS_USD.greenValleyRanch)}, and Lake Las Vegas ${formatUsd(LISTING_MEDIANS_USD.lakeLasVegas)}. MacDonald Highlands trades on a different order of magnitude. Ask for a CMA on the street.`,
        },
        {
          heading: "Commute and daily geography",
          body: "I-215 and I-15 connect Henderson to the airport and the Strip; time those drives at your hour. St. Rose Parkway is the east-west spine for Green Valley and Inspirada. City recreation centers and parks are the civic layer — confirm which park is actually walkable from the listing, not from the city homepage.",
        },
        {
          heading: "Campuses",
          body: "Henderson addresses are Clark County School District. Confirm elementary, middle, and high school on the specific listing. Pinecrest and other charters enroll from Henderson independently of the zoned campus. I name the campus. I do not publish ratings.",
        },
        {
          heading: "How I send Henderson matches",
          body: "Green Valley, Inspirada, Anthem, and Lake Las Vegas are different freeways. Email homes@heyberkshire.com or call (702) 222-1964 with the village name and commute. I will not treat “Henderson” as one product.",
        },
      ]}
      faqs={[
        {
          question: "What is the current median home price in Henderson?",
          answer: `As of ${MARKET_SNAPSHOT_AS_OF}, realtor.com showed a ${listing} median listing price and a ${sold} median sold price for Henderson. Village medians differ. Ask for a live CMA.`,
        },
        {
          question: "How does Henderson compare with Las Vegas city?",
          answer:
            "Henderson is a separate city with its own parks and recreation system. Las Vegas city listing median on the same realtor.com pull was lower. Compare commute, HOA, and the actual house — not a slogan.",
        },
        {
          question: "Which Henderson communities do you cover?",
          answer:
            "Green Valley, Inspirada (including Groves townhomes), Anthem, Lake Las Vegas / Del Webb, Solera, and Sun City Anthem. Call (702) 222-1964 or email homes@heyberkshire.com with the village name.",
        },
      ]}
      related={[
        { href: "/neighborhoods/green-valley", label: "Green Valley homes" },
        { href: "/neighborhoods/inspirada", label: "Inspirada homes" },
        {
          href: "/neighborhoods/groves-at-inspirada",
          label: "Groves at Inspirada townhomes",
        },
        {
          href: "/55-plus-communities/sun-city-anthem",
          label: "Sun City Anthem",
        },
      ]}
    />
  );
}
