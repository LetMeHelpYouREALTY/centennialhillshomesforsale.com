import Link from "next/link";
import { Phone, MapPin, Star } from "lucide-react";
import { CTA_PHONE, CTA_TEL, OFFICE_HOURS, OFFICE_NAP } from "@/lib/contact";
import {
  FAQSchema,
  NeighborhoodSchema,
  SeniorCommunitySchema,
} from "@/components/SchemaScript";
import { FairHousingNotice } from "@/components/shared/FairHousingNotice";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionPhoto } from "@/components/shared/SectionPhoto";
import { VisitOffice } from "@/components/shared/VisitOffice";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { getPublicSiteUrl } from "@/lib/site-url";
import { getNeighborhoodImage } from "@/lib/site-images";

export type NeighborhoodFaq = {
  question: string;
  answer: string;
};

export type NeighborhoodStat = {
  value: string;
  label: string;
};

export type NeighborhoodRelated = {
  href: string;
  label: string;
};

export type NeighborhoodSection = {
  heading: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type SeniorGuideDetails = {
  numberOfHomes: number;
  amenities: Array<{ name: string; description?: string }>;
  priceRange: string;
  hoaFees?: string;
  latitude?: number;
  longitude?: number;
};

type NeighborhoodGuideProps = {
  name: string;
  slug: string;
  h1: string;
  intro: string;
  zipCodes: string[];
  city: string;
  imageSrc?: string;
  imageAlt?: string;
  stats: NeighborhoodStat[];
  sections: NeighborhoodSection[];
  faqs: NeighborhoodFaq[];
  related: NeighborhoodRelated[];
  lastUpdated: string;
  badge?: string;
  pathPrefix?: "/neighborhoods" | "/55-plus-communities";
  latitude?: number;
  longitude?: number;
  showListings?: boolean;
  senior?: SeniorGuideDetails;
  children?: React.ReactNode;
};

const ctaClass =
  "inline-flex min-h-11 items-center justify-center rounded-md px-8 py-4 text-lg font-bold no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600";

export default function NeighborhoodGuide({
  name,
  slug,
  h1,
  intro,
  zipCodes,
  city,
  imageSrc,
  imageAlt,
  stats,
  sections,
  faqs,
  related,
  lastUpdated,
  badge,
  pathPrefix = "/neighborhoods",
  latitude,
  longitude,
  showListings = true,
  senior,
  children,
}: NeighborhoodGuideProps) {
  const origin = getPublicSiteUrl();
  const hero = imageSrc
    ? { src: imageSrc, alt: imageAlt ?? `${name} homes in ${city}, Nevada` }
    : getNeighborhoodImage(slug);

  return (
    <>
      <FAQSchema faqs={faqs} />
      <NeighborhoodSchema
        name={name}
        description={intro}
        slug={slug}
        containedIn={city}
        pathPrefix={pathPrefix}
        latitude={latitude}
        longitude={longitude}
      />
      {senior ? (
        <SeniorCommunitySchema
          name={name}
          description={intro}
          numberOfHomes={senior.numberOfHomes}
          amenities={senior.amenities}
          priceRange={senior.priceRange}
          hoaFees={senior.hoaFees}
          latitude={senior.latitude ?? latitude}
          longitude={senior.longitude ?? longitude}
          city={city}
        />
      ) : null}
      <main className="pb-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-5xl">
            {hero.src ? <PageHeroImage src={hero.src} alt={hero.alt} /> : null}

            {badge ? (
              <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                {badge}
              </p>
            ) : null}

            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {h1}
            </h1>
            <p className="mb-6 text-lg text-slate-600">{intro}</p>
            <p className="mb-10 text-sm text-slate-500">
              ZIP {zipCodes.join(", ")} · {city}, NV · Dr. Jan Duffy, Berkshire
              Hathaway HomeServices Nevada Properties · License S.0197614.LLC ·{" "}
              {OFFICE_HOURS.display}
            </p>

            <section className="mb-12 rounded-2xl bg-slate-900 p-8 text-white">
              <h2 className="mb-6 text-center text-2xl font-bold">
                {name} snapshot
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="mb-1 text-2xl font-bold tabular-nums text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-slate-400">
                Figures are sourced where noted. Ask for a live CMA before
                pricing a bid. Last updated {lastUpdated}.
              </p>
            </section>

            {sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {section.heading}
                </h2>
                <SectionPhoto
                  heading={section.heading}
                  neighborhoodName={name}
                  neighborhoodSlug={slug}
                  fallbackSrc={hero.src}
                  avoidSrc={hero.src}
                  imageSrc={section.imageSrc}
                  imageAlt={section.imageAlt}
                  className="mb-6"
                />
                <p className="whitespace-pre-line text-slate-700">
                  {section.body}
                </p>
              </section>
            ))}

            {children}

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Nearby pages
              </h2>
              <SectionPhoto
                heading={`Nearby pages from ${name}`}
                neighborhoodName={name}
                neighborhoodSlug={slug}
                fallbackSrc={hero.src}
                avoidSrc={hero.src}
                className="mb-6"
              />
              <ul className="grid gap-3 md:grid-cols-2">
                {related.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block min-h-11 rounded-lg border border-slate-200 px-4 py-3 text-blue-700 no-underline hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Frequently asked questions
              </h2>
              <SectionPhoto
                heading={`Frequently asked questions about ${name}`}
                neighborhoodName={name}
                neighborhoodSlug={slug}
                fallbackSrc={hero.src}
                avoidSrc={hero.src}
                className="mb-6"
              />
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-lg border border-slate-200 p-5"
                  >
                    <h3 className="mb-2 font-bold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="rounded-2xl bg-blue-600 p-8 text-center text-white md:p-12"
              aria-labelledby={`${slug}-cta-heading`}
            >
              <h2
                id={`${slug}-cta-heading`}
                className="mb-3 text-3xl font-bold"
              >
                Tour {name} with Dr. Jan Duffy
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-blue-100">
                First-party local guidance — not a syndicated listing dump. Call
                or text the client line.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={CTA_TEL}
                  className={`${ctaClass} bg-white text-blue-600 hover:bg-blue-50`}
                >
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call {CTA_PHONE}
                </a>
                <a
                  href={OFFICE_NAP.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaClass} border border-white/40 text-white hover:bg-blue-700`}
                >
                  Get Directions
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={OFFICE_NAP.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaClass} border border-white/40 text-white hover:bg-blue-700`}
                >
                  <Star className="mr-2 h-4 w-4" aria-hidden="true" />
                  Google Reviews
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <p className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-100">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <a href={OFFICE_NAP.mapsUrl} className="underline">
                  {OFFICE_NAP.full}
                </a>
              </p>
              <p className="mt-2 text-xs text-blue-200">
                {OFFICE_HOURS.display}
              </p>
              <p className="mt-2 text-xs text-blue-200">
                {origin.replace("https://", "")} · Berkshire Hathaway
                HomeServices Nevada Properties
              </p>
              <FairHousingNotice className="mt-6 text-blue-100" />
            </section>
          </article>
        </div>
        <VisitOffice compact />
        {showListings ? <RealScoutListings /> : null}
      </main>
    </>
  );
}
