import Link from "next/link";
import { Phone } from "lucide-react";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  OFFICE_NAP,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import { SectionHeading } from "@/components/shared/SectionPhoto";

export default function NotFound() {
  return (
    <div className="bg-white pb-20 pt-8">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          404
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          That page is not on this site
        </h1>
        <p className="mb-8 text-pretty text-lg text-slate-600">
          The URL may be mistyped, or the listing moved. Use a neighborhood
          guide, search live MLS, or call the office line. Office:{" "}
          <a
            href={OFFICE_NAP.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={TEXT_LINK_CLASS}
          >
            {OFFICE_NAP.full}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          . Email{" "}
          <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
            {AGENT_EMAIL}
          </a>
          .
        </p>
        <div className="mb-10 flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
          <Link
            href="/listings"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Search listings
          </Link>
          <Link
            href="/neighborhoods"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Neighborhood guides
          </Link>
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
          className="mb-10 text-left"
          aria-labelledby="not-found-mls-heading"
        >
          <SectionHeading
            id="not-found-mls-heading"
            className="mb-3 text-center text-xl font-bold text-slate-900"
          >
            Search live MLS
          </SectionHeading>
          <p className="mb-4 text-center text-pretty text-slate-600">
            ZIP, street, or community. Submits to current listings — not a
            scraped sample.
          </p>
          <MlsSearchForm inputId="mls-q-404" />
        </section>
        <ul className="space-y-2 text-left text-slate-700">
          <li>
            <Link
              href="/neighborhoods/centennial-hills"
              className={TEXT_LINK_CLASS}
            >
              Centennial Hills homes
            </Link>
          </li>
          <li>
            <Link href="/neighborhoods/89138" className={TEXT_LINK_CLASS}>
              89138 Summerlin West homes
            </Link>
          </li>
          <li>
            <Link href="/55-plus-communities" className={TEXT_LINK_CLASS}>
              Las Vegas 55+ communities
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
          <li>
            <Link href="/home-valuation" className={TEXT_LINK_CLASS}>
              Request a Las Vegas CMA
            </Link>
          </li>
          <li>
            <Link href="/relocation" className={TEXT_LINK_CLASS}>
              Las Vegas relocation
            </Link>
          </li>
          <li>
            <Link href="/buyers/first-time-buyers" className={TEXT_LINK_CLASS}>
              First-Time Las Vegas Buyers
            </Link>
          </li>
        </ul>
      </div>
      <GoogleReviewsCta className="bg-white" />
      <VisitOffice compact />
    </div>
  );
}
