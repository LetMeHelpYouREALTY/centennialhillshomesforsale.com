"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { REALSCOUT_SEARCH_URL } from "@/lib/contact";
import { MlsDisclaimer } from "@/components/shared/MlsDisclaimer";

const WIDGET_HTML = `<realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              property-types=",SFR,MF,TC"
            ></realscout-office-listings>`;

export default function RealScoutListings() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const node = mountRef.current;
    if (!node || showWidget) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowWidget(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [showWidget]);

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Current Las Vegas Listings
            </h2>
            <p className="text-lg text-slate-600">
              Live MLS inventory via RealScout — search, save, and request a
              showing
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <a
              href={REALSCOUT_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Properties
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Button>
        </div>

        <div
          ref={mountRef}
          className="min-h-[24rem]"
          aria-label="Live office listings from RealScout"
        >
          {showWidget ? (
            <div dangerouslySetInnerHTML={{ __html: WIDGET_HTML }} />
          ) : (
            <div
              className="flex min-h-[24rem] items-center justify-center rounded-xl bg-slate-100 text-slate-600"
              aria-busy="true"
            >
              Loading live MLS listings…
            </div>
          )}
        </div>
        <MlsDisclaimer className="mt-8" />
      </div>
    </section>
  );
}
