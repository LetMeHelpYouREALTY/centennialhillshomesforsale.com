import { useId } from "react";
import { Mail, Phone } from "lucide-react";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  OFFICE_NAP,
  TEXT_LINK_CLASS,
} from "@/lib/contact";

type GoogleReviewsCtaProps = {
  className?: string;
};

export function GoogleReviewsCta({ className = "" }: GoogleReviewsCtaProps) {
  const headingId = useId();

  return (
    <section
      className={`bg-slate-50 py-16 md:py-20 ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2
          id={headingId}
          className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
        >
          Read the Google reviews
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-slate-600">
          I will not invent named testimonials or a star rating on this site.
          Open the Google Business Profile for the Lake Mead Boulevard office,
          then call or email if the file is a match.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={OFFICE_NAP.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            View Google Reviews
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={CTA_TEL}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Call {CTA_PHONE}
          </a>
          <a
            href={AGENT_EMAIL_MAILTO}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            {AGENT_EMAIL}
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-600">
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
      </div>
    </section>
  );
}
