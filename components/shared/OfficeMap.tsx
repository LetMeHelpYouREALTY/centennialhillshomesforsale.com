import { MapPin } from "lucide-react";
import { OFFICE_NAP } from "@/lib/contact";

type OfficeMapProps = {
  className?: string;
  height?: number;
};

export function OfficeMap({ className = "", height = 300 }: OfficeMapProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl shadow-md">
        <iframe
          src={OFFICE_NAP.mapsEmbedUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Berkshire Hathaway HomeServices Nevada Properties office map"
          className="w-full"
        />
      </div>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <a
          href={OFFICE_NAP.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg bg-blue-600 px-4 py-3 font-medium text-white no-underline transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          <MapPin className="mr-2 h-4 w-4" aria-hidden="true" />
          Get Directions
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={OFFICE_NAP.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-slate-900 no-underline transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          View on Google Maps
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
