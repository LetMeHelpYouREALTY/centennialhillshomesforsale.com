import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { REALSCOUT_SEARCH_URL } from "@/lib/contact";
import { MlsDisclaimer } from "@/components/shared/MlsDisclaimer";
import { getNeighborhoodImage } from "@/lib/site-images";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

type NeighborhoodCard = {
  slug: string;
  href: string;
  name: string;
  medianLabel: string;
};

const neighborhoods: NeighborhoodCard[] = [
  {
    slug: "centennial-hills",
    href: "/neighborhoods/centennial-hills",
    name: "Centennial Hills",
    medianLabel: formatUsd(LISTING_MEDIANS_USD.centennialHills),
  },
  {
    slug: "summerlin-west",
    href: "/neighborhoods/summerlin-west",
    name: "Summerlin West",
    medianLabel: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
  },
  {
    slug: "henderson",
    href: "/neighborhoods/henderson",
    name: "Henderson",
    medianLabel: formatUsd(LISTING_MEDIANS_USD.hendersonListing),
  },
  {
    slug: "89138",
    href: "/neighborhoods/89138",
    name: "89138 Summerlin West",
    medianLabel: formatUsd(LISTING_MEDIANS_USD.summerlinWest),
  },
  {
    slug: "siena",
    href: "/55-plus-communities/siena",
    name: "Siena 55+",
    medianLabel: "Live CMA",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
          <div>
            <h2 className="mb-4 text-balance text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Neighborhood listing snapshots
            </h2>
            <p className="text-lg text-pretty text-slate-600">
              Sourced listing medians as of {MARKET_SNAPSHOT_AS_OF} (
              {MARKET_SNAPSHOT_SOURCE}). Live inventory is on MLS.
            </p>
          </div>
          <a
            href={REALSCOUT_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:mt-0"
          >
            Open live MLS
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((neighborhood) => {
            const image = getNeighborhoodImage(neighborhood.slug);
            return (
              <article
                key={neighborhood.slug}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute right-4 top-4 rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold tabular-nums text-white">
                    {neighborhood.medianLabel}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {neighborhood.name}
                  </h3>
                  <p className="mb-4 text-slate-600">
                    Listing median, not a sold price and not a CMA for a
                    specific house.
                  </p>
                  <Link
                    href={neighborhood.href}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-blue-600 px-4 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Open {neighborhood.name} guide
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <MlsDisclaimer className="mt-8" />
      </div>
    </section>
  );
}
