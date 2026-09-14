import Link from "next/link";
import { Phone } from "lucide-react";
import { CTA_PHONE, CTA_TEL, OFFICE_NAP } from "@/lib/contact";

type PageCTAProps = {
  headline: string;
  subheadline?: string;
  className?: string;
};

export function PageCTA({
  headline,
  subheadline,
  className = "",
}: PageCTAProps) {
  return (
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
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
        </div>
        <p className="mt-6 text-sm text-blue-200">
          {OFFICE_NAP.full} · License S.0197614.LLC
        </p>
      </div>
    </section>
  );
}
