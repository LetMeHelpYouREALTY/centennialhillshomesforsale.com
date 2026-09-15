"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  OFFICE_NAP,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-white pb-20 pt-8">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-slate-900">
          Something went wrong
        </h1>
        <p className="mb-8 text-pretty text-slate-600">
          Reload this page, or{" "}
          <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
            call {CTA_PHONE}
          </a>{" "}
          and we will pull the listing from MLS while this screen is fixed.
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
          . Email{" "}
          <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
            {AGENT_EMAIL}
          </a>
          .
        </p>
        <div className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Home
          </Link>
          <Link
            href="/listings"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Search listings
          </Link>
          <a
            href={CTA_TEL}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
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
          className="mt-10 text-left"
          aria-labelledby="error-mls-heading"
        >
          <h2
            id="error-mls-heading"
            className="mb-3 text-center text-xl font-bold text-slate-900"
          >
            Search live MLS
          </h2>
          <p className="mb-4 text-center text-pretty text-slate-600">
            ZIP, street, or community. Submits to current listings — not a
            scraped sample.
          </p>
          <MlsSearchForm inputId="mls-q-error" />
        </section>
        <ul className="mt-8 space-y-2 text-left text-slate-700">
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
      </div>
      <GoogleReviewsCta className="bg-white" />
      <VisitOffice compact />
    </div>
  );
}
