import Image from "next/image";
import { Clock, Star } from "lucide-react";
import { OfficeMap } from "@/components/shared/OfficeMap";
import { OFFICE_HOURS, OFFICE_NAP, TEXT_LINK_CLASS } from "@/lib/contact";
import {
  OFFICE_PHOTO_ALT,
  OFFICE_PHOTO_PATH,
  VISIT_OFFICE_PHOTO_ALT,
  VISIT_OFFICE_PHOTO_PATH,
} from "@/lib/site-images";

type VisitOfficeProps = {
  className?: string;
  compact?: boolean;
};

export function VisitOffice({
  className = "",
  compact = false,
}: VisitOfficeProps) {
  return (
    <section
      className={`bg-slate-50 ${compact ? "py-10" : "py-14"} ${className}`}
      aria-labelledby="visit-office-heading"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h2
          id="visit-office-heading"
          className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl"
        >
          Visit the office
        </h2>
        <p className="mb-2 text-slate-600">
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
        <p className="mb-6 flex items-start gap-2 text-sm text-slate-500">
          <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{OFFICE_HOURS.display}</span>
        </p>
        <div className="relative mb-6 h-48 overflow-hidden rounded-xl md:h-64">
          <Image
            src={compact ? VISIT_OFFICE_PHOTO_PATH : OFFICE_PHOTO_PATH}
            alt={compact ? VISIT_OFFICE_PHOTO_ALT : OFFICE_PHOTO_ALT}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
        <OfficeMap height={compact ? 240 : 300} />
        <p className="mt-4 text-center">
          <a
            href={OFFICE_NAP.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center font-semibold text-blue-700 no-underline hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Star className="mr-2 h-4 w-4" aria-hidden="true" />
            View Google Reviews
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </section>
  );
}
