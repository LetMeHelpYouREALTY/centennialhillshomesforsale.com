import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsWithSchema from "@/components/sections/ReviewsWithSchema";
import FAQWithSchema from "@/components/sections/FAQWithSchema";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { Mail, Phone } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { getCanonicalUrl, getRequestOrigin } from "@/lib/site-url";
import { AgentPhoto } from "@/components/shared/AgentPhoto";
import { AGENT_PHOTO_PATH } from "@/lib/brand-assets";
import {
  CTA_PHONE,
  CTA_PHONE_E164,
  CTA_TEL,
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  OFFICE_NAP,
  OFFICE_POSTAL_ADDRESS,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { withShareImage } from "@/lib/page-seo";
import { PAGE_HERO_IMAGES, getNeighborhoodImage } from "@/lib/site-images";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { WidgetBeTracker } from "@/components/shared/WidgetBeTracker";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import SchemaScript from "@/components/SchemaScript";
import { generateWebPageSchema } from "@/lib/schema";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export async function generateMetadata(): Promise<Metadata> {
  return withShareImage(
    {
      title: {
        absolute:
          "Centennial Hills Homes for Sale | Las Vegas 89149 Real Estate | Dr. Jan Duffy",
      },
      description:
        "Centennial Hills homes for sale in northwest Las Vegas (89149, 89131, 89143). Search current listings with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.",
      keywords: [
        "centennial hills real estate",
        "centennial hills las vegas real estate",
        "homes for sale in centennial hills nv",
        "homes for sale in centennial hills",
        "centennial hills homes for sale",
        "centennial hills town center nv real estate",
      ],
    },
    PAGE_HERO_IMAGES.homepage,
  );
}

type HomeCommunityCard = {
  href: string;
  label: string;
  slug?: string;
  image?: { src: string; alt: string };
};

const communities: HomeCommunityCard[] = [
  {
    href: "/neighborhoods/centennial-hills",
    slug: "centennial-hills",
    label: "Centennial Hills (89149)",
  },
  {
    href: "/neighborhoods/89144",
    slug: "89144",
    label: "89144 Summerlin homes",
  },
  {
    href: "/neighborhoods/inspirada",
    slug: "inspirada",
    label: "Inspirada Henderson",
  },
  {
    href: "/neighborhoods/groves-at-inspirada",
    slug: "groves-at-inspirada",
    label: "Groves at Inspirada",
  },
  {
    href: "/neighborhoods/tournament-hills",
    slug: "tournament-hills",
    label: "Tournament Hills",
  },
  {
    href: "/neighborhoods/summerlin-west",
    slug: "summerlin-west",
    label: "Summerlin West / 89138",
  },
  {
    href: "/neighborhoods/89138",
    slug: "89138",
    label: "89138 Summerlin West ZIP",
  },
  {
    href: "/neighborhoods/lone-mountain",
    slug: "lone-mountain",
    label: "Lone Mountain",
  },
  {
    href: "/neighborhoods/skye-canyon",
    slug: "skye-canyon",
    label: "Skye Canyon",
  },
  {
    href: "/neighborhoods/henderson",
    slug: "henderson",
    label: "Henderson homes",
  },
  {
    href: "/neighborhoods/summerlin",
    slug: "summerlin",
    label: "Summerlin homes",
  },
  {
    href: "/55-plus-communities",
    image: PAGE_HERO_IMAGES.fiftyFivePlus,
    label: "55+ HOPA communities",
  },
  {
    href: "/55-plus-communities/siena",
    slug: "siena",
    label: "Siena 55+ Summerlin",
  },
];

export default async function Home() {
  const config = await getPageDomainConfig();
  const origin = getRequestOrigin();
  const canonical = getCanonicalUrl("/");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Centennial Hills Real Estate",
    url: canonical,
    telephone: CTA_PHONE_E164,
    email: AGENT_EMAIL,
    image: `${origin}${AGENT_PHOTO_PATH}`,
    address: OFFICE_POSTAL_ADDRESS,
    areaServed: [
      "Centennial Hills",
      "Las Vegas",
      "Summerlin",
      "Summerlin West",
      "89138",
      "Henderson",
      "Inspirada",
      "Siena",
    ],
  };

  return (
    <>
      <WidgetBeTracker />
      <SchemaScript
        id="webpage-schema"
        schema={generateWebPageSchema({
          name: "Centennial Hills Homes for Sale",
          description:
            "Centennial Hills homes for sale in northwest Las Vegas (89149, 89131, 89143). Search current listings with Dr. Jan Duffy. Call (702) 222-1964 or email homes@heyberkshire.com.",
          url: canonical,
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white md:py-32">
          <Image
            src="/images/neighborhoods/centennial-hills.png"
            alt="Centennial Hills Las Vegas homes and northwest desert mountain views"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="container relative z-10 mx-auto px-4 text-center">
            {config.ctaBadge && (
              <span className="mb-6 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                {config.ctaBadge}
              </span>
            )}
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Centennial Hills Homes for Sale
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-pretty text-xl text-white/80 md:text-2xl">
              Northwest Las Vegas listings in 89149, 89131, and 89143 — written
              for this site, not copied from another domain.
            </p>

            <div className="mb-8 flex justify-center">
              <MlsSearchForm
                inputId="mls-q-home"
                buttonClassName="bg-white text-blue-700 hover:bg-blue-50"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Since 2008</span>
                <span>Las Vegas closings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">BHHS</span>
                <span>Nevada Properties</span>
              </div>
              <a
                href={OFFICE_NAP.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-white/80 no-underline hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="font-semibold text-white">Google</span>
                <span>reviews on the profile</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center">
              <AgentPhoto variant="card" className="shrink-0" />
              <div className="text-center md:text-left">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Your Centennial Hills agent
                </p>
                <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Dr. Jan Duffy
                </h2>
                <p className="mb-4 text-pretty text-lg text-slate-600">
                  Berkshire Hathaway HomeServices Nevada Properties. License
                  S.0197614.LLC.{" "}
                  <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
                    Call {CTA_PHONE}
                  </a>{" "}
                  or{" "}
                  <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
                    email {AGENT_EMAIL}
                  </a>{" "}
                  for Centennial Hills, Summerlin (89138), Henderson, and 55+
                  campuses such as Siena.
                </p>
                <div className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row md:justify-start">
                  <a
                    href={CTA_TEL}
                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    Call {CTA_PHONE}
                  </a>
                  <a
                    href={AGENT_EMAIL_MAILTO}
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                    {AGENT_EMAIL}
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    About Dr. Jan
                  </Link>
                  <a
                    href={OFFICE_NAP.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Get Directions
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <SectionHeading
                className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
                fallbackSrc={PAGE_HERO_IMAGES.homepage.src}
                avoidSrc={PAGE_HERO_IMAGES.homepage.src}
              >
                Match the search to the right ZIP
              </SectionHeading>
              <p className="text-pretty text-lg text-slate-600">
                Google is showing this site for Centennial Hills, Inspirada,
                Tournament Hills, 89144, 89138, and 55+ campuses such as Siena.
                Those are different maps. Pick the page that matches the street
                you want.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
              {communities.map((item) => {
                const image =
                  item.image ??
                  getNeighborhoodImage(item.slug ?? "centennial-hills");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex min-h-11 overflow-hidden rounded-xl border border-slate-200 no-underline hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    <span className="relative h-24 w-28 shrink-0 sm:h-28 sm:w-36">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    </span>
                    <span className="flex min-w-0 items-center px-4 py-3 font-semibold text-pretty text-slate-900 group-hover:text-blue-700">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold">
                Centennial Hills listing snapshot
              </h2>
              <p className="text-slate-400">
                Neighborhood listing median{" "}
                {formatUsd(LISTING_MEDIANS_USD.centennialHills)} as of{" "}
                {MARKET_SNAPSHOT_AS_OF} ({MARKET_SNAPSHOT_SOURCE}). Days on
                market and inventory move weekly — ask for a live pull.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
              {[
                {
                  value: formatUsd(LISTING_MEDIANS_USD.centennialHills),
                  label: "Listing median",
                  sub: MARKET_SNAPSHOT_AS_OF,
                },
                {
                  value: formatUsd(LISTING_MEDIANS_USD.lasVegas),
                  label: "LV city listing median",
                  sub: "Same source",
                },
                {
                  value: "89149",
                  label: "Core ZIP",
                  sub: "Also 89131 / 89143",
                },
                {
                  value: "Not 89144",
                  label: "That's Summerlin",
                  sub: "See ZIP page",
                },
              ].map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="mb-1 text-4xl font-bold text-blue-400">
                    {value}
                  </div>
                  <div className="text-sm text-slate-300">{label}</div>
                  {sub && (
                    <div className="mt-1 text-xs text-slate-400">{sub}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/market-insights"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Centennial Hills market insights
              </Link>
            </div>
          </div>
        </section>

        <RealScoutListings />
        <WhyChooseUs />
        <ReviewsWithSchema />
        <FAQWithSchema />
        <VisitOffice compact />
        <PageCTA
          headline={config.ctaHeadline}
          subheadline={config.ctaSubheadline}
          formSource="homepage"
          formHeading="Ask about a Las Vegas address"
        />
      </main>
    </>
  );
}
