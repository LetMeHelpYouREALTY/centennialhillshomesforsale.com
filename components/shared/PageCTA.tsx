import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";
import {
  CTA_PHONE,
  CTA_TEL,
  OFFICE_NAP,
  TEXT_LINK_ON_DARK_CLASS,
} from "@/lib/contact";
import { GuideLeadForm } from "@/components/forms/GuideLeadForm";

type PageCTAProps = {
  headline: string;
  subheadline?: string;
  className?: string;
  formSource?: string;
  formHeading?: string;
  formType?: "contact" | "property-search" | "home-valuation" | "newsletter";
};

export function PageCTA({
  headline,
  subheadline,
  className = "",
  formSource,
  formHeading,
  formType = "contact",
}: PageCTAProps) {
  return (
    <>
      {formSource ? (
        <div className="bg-white py-8">
          <div className="container mx-auto max-w-3xl px-4">
            <GuideLeadForm
              source={formSource}
              heading={formHeading ?? "Ask Dr. Jan Duffy"}
              formType={formType}
              className="mb-0"
            />
          </div>
        </div>
      ) : null}
      <section
        className={`bg-blue-600 py-16 text-white md:py-20 ${className}`}
        aria-labelledby="page-cta-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            id="page-cta-heading"
            className="mb-4 text-3xl font-bold text-balance md:text-4xl"
          >
            {headline}
          </h2>
          {subheadline ? (
            <p className="mx-auto mb-8 max-w-2xl text-xl text-pretty text-blue-100">
              {subheadline}
            </p>
          ) : null}
          <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <a
              href={CTA_TEL}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 no-underline transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Call {CTA_PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-700 px-8 py-4 text-lg font-bold text-white no-underline transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              Send a Message
            </Link>
            <a
              href={OFFICE_NAP.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-8 py-4 text-lg font-bold text-white no-underline transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
              Get Directions
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={OFFICE_NAP.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-8 py-4 text-lg font-bold text-white no-underline transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              <Star className="mr-2 h-5 w-5" aria-hidden="true" />
              Google Reviews
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            <a
              href={OFFICE_NAP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={TEXT_LINK_ON_DARK_CLASS}
            >
              {OFFICE_NAP.full}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {" · "}
            License S.0197614.LLC
          </p>
        </div>
      </section>
    </>
  );
}
