"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  REALSCOUT_SEARCH_URL,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { MlsDisclaimer } from "@/components/shared/MlsDisclaimer";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";

const WIDGET_HTML = `<realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              property-types=",SFR,MF,TC"
            ></realscout-office-listings>`;

export default function RealScoutListings() {
  const mountRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
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
    <section className="bg-slate-50 py-16 md:py-24" aria-labelledby={headingId}>
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
          <div>
            <SectionHeading
              id={headingId}
              className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl"
              fallbackSrc={PAGE_HERO_IMAGES.buyers.src}
              avoidSrc={PAGE_HERO_IMAGES.listings.src}
              photoClassName="mb-4"
            >
              Current Las Vegas Listings
            </SectionHeading>
            <p className="text-pretty text-lg text-slate-600">
              Live MLS via RealScout for Las Vegas, Henderson, 89138 Summerlin
              West, and 55+ campuses such as Siena.{" "}
              <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
                Call {CTA_PHONE}
              </a>{" "}
              or{" "}
              <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
                email {AGENT_EMAIL}
              </a>{" "}
              for a showing.
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
          aria-labelledby={headingId}
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
