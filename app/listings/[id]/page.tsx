import Link from "next/link";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { PageCTA } from "@/components/shared/PageCTA";
import { MlsDisclaimer } from "@/components/shared/MlsDisclaimer";
import { CTA_PHONE, CTA_TEL, REALSCOUT_SEARCH_URL } from "@/lib/contact";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Live MLS Listings | Dr. Jan Duffy",
  description:
    "This site does not host fake listing detail pages. Search live MLS with Dr. Jan Duffy or call (702) 222-1964.",
  robots: {
    index: false,
    follow: true,
  },
};

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;

  return (
    <main className="pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <PageHeroImage
          src={PAGE_HERO_IMAGES.listings.src}
          alt={PAGE_HERO_IMAGES.listings.alt}
        />
        <h1 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Live inventory is on MLS — not a sample listing
        </h1>
        <p className="mb-4 text-lg text-slate-600">
          URL segment <span className="font-mono text-slate-900">{id}</span> is
          not a published CMA or a current MLS photo set. RealScout already
          syncs live listings. I will not invent an $850,000 Summerlin house for
          Google.
        </p>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/listings"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Search Las Vegas listings
          </Link>
          <a
            href={REALSCOUT_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Open live MLS
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={CTA_TEL}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Call {CTA_PHONE}
          </a>
        </div>
        <MlsDisclaimer />
      </div>
      <PageCTA
        headline="Want a specific address walked?"
        subheadline="Call Dr. Jan Duffy. She will pull the live MLS file, not a placeholder."
      />
    </main>
  );
}
