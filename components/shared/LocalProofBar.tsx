import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  OFFICE_HOURS,
  OFFICE_NAP,
} from "@/lib/contact";

type LocalProofBarProps = {
  className?: string;
  compact?: boolean;
  variant?: "light" | "dark";
};

export function LocalProofBar({
  className = "",
  compact = false,
  variant = "light",
}: LocalProofBarProps) {
  const isDark = variant === "dark";

  return (
    <section
      aria-label="Office location, hours, and contact"
      className={`${
        isDark
          ? "border-b border-slate-700 bg-slate-800"
          : "border-t border-slate-200 bg-slate-50"
      } ${className}`}
    >
      <div
        className={`container mx-auto px-4 ${compact ? "py-6" : "py-8 md:py-10"}`}
      >
        <div
          className={`mb-4 flex flex-col gap-1 text-sm md:flex-row md:items-center md:justify-between ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          <p className="flex min-w-0 items-start gap-2">
            <MapPin
              className={`mt-0.5 h-4 w-4 shrink-0 ${isDark ? "text-blue-300" : "text-blue-600"}`}
              aria-hidden="true"
            />
            <span>
              <span
                className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Berkshire Hathaway HomeServices Nevada Properties
              </span>
              <span className="block">{OFFICE_NAP.full}</span>
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Clock
              className={`h-4 w-4 shrink-0 ${isDark ? "text-blue-300" : "text-blue-600"}`}
              aria-hidden="true"
            />
            <span>{OFFICE_HOURS.display}</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={CTA_TEL}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Call {CTA_PHONE}
          </a>
          <a
            href={AGENT_EMAIL_MAILTO}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 no-underline hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            {AGENT_EMAIL}
          </a>
          <a
            href={OFFICE_NAP.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 no-underline hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Get Directions
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={OFFICE_NAP.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 no-underline hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Star className="mr-2 h-4 w-4 text-amber-500" aria-hidden="true" />
            View Google Reviews
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
