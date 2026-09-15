import Link from "next/link";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { Phone } from "lucide-react";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";
import { MlsDisclaimer } from "@/components/shared/MlsDisclaimer";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  OFFICE_NAP,
  REALSCOUT_SEARCH_URL,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import SchemaScript from "@/components/SchemaScript";
import { generateWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = withShareImage(
  {
    title: "Live MLS Listings | Dr. Jan Duffy",
    description:
      "This site does not host fake listing detail pages. Search live MLS with Dr. Jan Duffy or call (702) 222-1964 or email homes@heyberkshire.com.",
    robots: {
      index: false,
      follow: true,
    },
  },
  PAGE_HERO_IMAGES.listings,
);

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;

  return (
    <div className="pb-16">
      <SchemaScript
        id="webpage-schema"
        schema={generateWebPageSchema({
          name: "Live MLS listings — not a sample property page",
          description:
            "This site does not host fake listing detail pages. Search live MLS with Dr. Jan Duffy or call (702) 222-1964 or email homes@heyberkshire.com.",
          url: `/listings/${id}`,
        })}
      />
      <div className="container mx-auto max-w-3xl px-4">
        <PageHeroImage
          src={PAGE_HERO_IMAGES.listings.src}
          alt={PAGE_HERO_IMAGES.listings.alt}
        />
        <h1 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Live inventory is on MLS — not a sample listing
        </h1>
        <p className="mb-4 text-pretty text-lg text-slate-600">
          URL segment <span className="font-mono text-slate-900">{id}</span> is
          not a published CMA or a current MLS photo set. Berkshire Hathaway
          HomeServices Nevada Properties and Dr. Jan Duffy use RealScout for
          live listings. I will not invent an $850,000 Summerlin house for
          Google.
        </p>
        <div className="mb-10 flex flex-col flex-wrap gap-3 sm:flex-row">
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
          <a
            href={AGENT_EMAIL_MAILTO}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            {AGENT_EMAIL}
          </a>
        </div>
        <section
          className="mb-10"
          aria-labelledby="listing-placeholder-mls-heading"
        >
          <SectionHeading
            id="listing-placeholder-mls-heading"
            className="mb-3 text-xl font-bold text-slate-900"
            fallbackSrc={PAGE_HERO_IMAGES.buyers.src}
            avoidSrc={PAGE_HERO_IMAGES.listings.src}
          >
            Search live MLS
          </SectionHeading>
          <p className="mb-4 text-pretty text-slate-600">
            ZIP, street, or community. Submits to current listings — not a
            scraped sample.
          </p>
          <MlsSearchForm className="mx-0" inputId="mls-q-listing-placeholder" />
        </section>
        <p className="mb-8 text-pretty text-sm text-slate-600">
          Office:{" "}
          <a
            href={OFFICE_NAP.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={TEXT_LINK_CLASS}
          >
            {OFFICE_NAP.full}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
        <ul className="mb-8 space-y-2 text-left text-slate-700">
          <li>
            <Link href="/neighborhoods/89138" className={TEXT_LINK_CLASS}>
              89138 Summerlin West homes
            </Link>
          </li>
          <li>
            <Link href="/55-plus-communities/siena" className={TEXT_LINK_CLASS}>
              Siena 55+ Summerlin
            </Link>
          </li>
          <li>
            <Link href="/contact" className={TEXT_LINK_CLASS}>
              Contact Dr. Jan Duffy
            </Link>
          </li>
        </ul>
        <MlsDisclaimer />
      </div>
      <GoogleReviewsCta className="bg-white" />
      <VisitOffice compact />
      <PageCTA
        headline="Want a specific address walked?"
        subheadline="Call or email with the MLS number or street. I pull the live file, not a placeholder."
        formSource="listing-placeholder"
        formHeading="Ask about a live listing"
        formType="property-search"
      />
    </div>
  );
}
