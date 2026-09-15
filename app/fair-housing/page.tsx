import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { OFFICE_PHOTO_PATH, OFFICE_PHOTO_ALT } from "@/lib/site-images";
import {
  CTA_PHONE,
  CTA_TEL,
  OFFICE_NAP,
  AGENT_EMAIL,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { PageCTA } from "@/components/shared/PageCTA";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { VisitOffice } from "@/components/shared/VisitOffice";
import SchemaScript from "@/components/SchemaScript";
import { generateWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = withShareImage(
  {
    title: "Fair Housing Statement | Equal Housing Opportunity",
    description:
      "Equal Housing Opportunity statement for Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties. We provide real estate services without discrimination.",
  },
  { src: OFFICE_PHOTO_PATH, alt: OFFICE_PHOTO_ALT },
);

export default function FairHousingPage() {
  return (
    <>
      <SchemaScript
        id="webpage-schema"
        schema={generateWebPageSchema({
          name: "Equal Housing Opportunity",
          description:
            "Equal Housing Opportunity statement for Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties.",
          url: "/fair-housing",
        })}
      />
      <main className="bg-white pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Berkshire Hathaway HomeServices Nevada Properties
          </p>
          <PageHeroImage src={OFFICE_PHOTO_PATH} alt={OFFICE_PHOTO_ALT} />
          <h1 className="mb-6 text-4xl font-bold text-slate-900">
            Equal Housing Opportunity
          </h1>
          <p className="mb-8 text-lg text-slate-700">
            Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties
            provide professional real estate services without regard to race,
            color, religion, sex, handicap, familial status, or national origin.
          </p>

          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Our Commitment
            </h2>
            <p className="text-slate-700">
              This commitment applies to listings, advertising, consultations,
              showings, transaction processing, and marketing. All dwellings
              advertised here are available on an equal opportunity basis.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Advertising Standard
            </h2>
            <p className="text-slate-700">
              All real estate advertised herein is subject to the Federal Fair
              Housing Act, which makes it illegal to advertise any preference,
              limitation, or discrimination because of race, color, religion,
              sex, handicap, familial status, or national origin, or intention
              to make any such preference, limitation, or discrimination. We
              will not knowingly accept advertising that violates the law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Reasonable Accommodations
            </h2>
            <p className="text-slate-700">
              If you need a reasonable accommodation to access our services or
              office, call{" "}
              <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
                {CTA_PHONE}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${AGENT_EMAIL}`} className={TEXT_LINK_CLASS}>
                {AGENT_EMAIL}
              </a>
              . Office: {OFFICE_NAP.full}.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Reporting Discrimination
            </h2>
            <p className="mb-4 text-slate-700">
              If you believe you have been discriminated against, you may file a
              complaint with:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>
                U.S. Department of Housing and Urban Development (HUD) Fair
                Housing: 1-800-669-9777 ·{" "}
                <a
                  href="https://www.hud.gov/fairhousing"
                  className={TEXT_LINK_CLASS}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hud.gov/fairhousing
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                Nevada Real Estate Division: (702) 486-4033 · 3300 W. Sahara
                Ave., Suite 350, Las Vegas, NV 89102
              </li>
            </ul>
          </section>
        </div>
        <VisitOffice compact />
        <PageCTA
          headline="Ask for a showing without a lifestyle slogan"
          subheadline="I describe square footage, amenities, named campuses, and commute times. Call (702) 222-1964."
        />
      </main>
    </>
  );
}
