import { Phone } from "lucide-react";
import { CTA_PHONE, CTA_TEL, OFFICE_NAP } from "@/lib/contact";

type GoogleReviewsCtaProps = {
  className?: string;
};

export function GoogleReviewsCta({ className = "" }: GoogleReviewsCtaProps) {
  return (
    <section
      className={`bg-slate-50 py-16 md:py-20 ${className}`.trim()}
      aria-labelledby="google-reviews-heading"
    >
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2
          id="google-reviews-heading"
          className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
        >
          Read the Google reviews
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-slate-600">
          I will not invent named testimonials or a star rating on this site.
          Open the Google Business Profile for the Lake Mead Boulevard office,
          then call if the file is a match.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={OFFICE_NAP.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            View Google Reviews
          </a>
          <a
            href={CTA_TEL}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Call {CTA_PHONE}
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">{OFFICE_NAP.full}</p>
      </div>
    </section>
  );
}
