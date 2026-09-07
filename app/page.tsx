import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import {
  Phone,
  Home as HomeIcon,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { getCanonicalUrl, getRequestOrigin } from "@/lib/site-url";
import { AgentPhoto } from "@/components/shared/AgentPhoto";
import { AGENT_PHOTO_PATH } from "@/lib/brand-assets";
import { CTA_PHONE, CTA_TEL, OFFICE_NAP } from "@/lib/contact";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      absolute:
        "Centennial Hills Homes for Sale | Las Vegas 89149 Real Estate | Dr. Jan Duffy",
    },
    description:
      "Centennial Hills homes for sale in northwest Las Vegas (89149, 89131, 89143). Search current listings with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call 702-222-1964.",
    keywords: [
      "centennial hills real estate",
      "centennial hills las vegas real estate",
      "homes for sale in centennial hills nv",
      "homes for sale in centennial hills",
      "centennial hills homes for sale",
      "centennial hills town center nv real estate",
    ],
  };
}

const communities = [
  {
    href: "/neighborhoods/centennial-hills",
    label: "Centennial Hills (89149)",
  },
  { href: "/neighborhoods/89144", label: "89144 Summerlin homes" },
  { href: "/neighborhoods/inspirada", label: "Inspirada Henderson" },
  { href: "/neighborhoods/groves-at-inspirada", label: "Groves at Inspirada" },
  { href: "/neighborhoods/tournament-hills", label: "Tournament Hills" },
  { href: "/neighborhoods/summerlin-west", label: "Summerlin West / 89138" },
  { href: "/neighborhoods/lone-mountain", label: "Lone Mountain" },
  { href: "/neighborhoods/skye-canyon", label: "Skye Canyon" },
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
    telephone: "+17022221964",
    image: `${origin}${AGENT_PHOTO_PATH}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_NAP.street,
      addressLocality: OFFICE_NAP.city,
      addressRegion: OFFICE_NAP.state,
      postalCode: OFFICE_NAP.zip,
    },
    areaServed: [
      "Centennial Hills",
      "Las Vegas",
      "Summerlin",
      "Henderson",
      "Inspirada",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
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
            <p className="mx-auto mb-10 max-w-3xl text-xl text-white/80 md:text-2xl">
              Northwest Las Vegas listings in 89149, 89131, and 89143 — written
              for this site, not copied from another domain.
            </p>

            <div className="mb-8 flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
                }}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">500+</span>
                <span>Clients represented</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Since 2008</span>
                <span>Las Vegas closings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">4.9★</span>
                <span>Client rating</span>
              </div>
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
                <p className="mb-4 text-lg text-slate-600">
                  Berkshire Hathaway HomeServices Nevada Properties. License
                  S.0197614.LLC. Call {CTA_PHONE} for Centennial Hills,
                  Summerlin, and Henderson listings.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                  <a
                    href={CTA_TEL}
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call {CTA_PHONE}
                  </a>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    About Dr. Jan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Match the search to the right ZIP
              </h2>
              <p className="text-lg text-slate-600">
                Google is showing this site for Centennial Hills, Inspirada,
                Tournament Hills, and 89144. Those are different maps. Pick the
                page that matches the street you want.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
              {communities.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-slate-200 px-5 py-4 font-semibold text-slate-900 hover:border-blue-400 hover:bg-blue-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Why work with Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-slate-600">
                Berkshire Hathaway HomeServices Nevada Properties — local
                closings with a national brand behind the contract.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Shield,
                  title: "Trusted brand",
                  desc: "Berkshire Hathaway HomeServices Nevada Properties — documented process, not a kiosk script.",
                },
                {
                  icon: Users,
                  title: "50K+ network",
                  desc: "Referral coverage when the other side of the move is out of state.",
                },
                {
                  icon: TrendingUp,
                  title: "$127M+ sold",
                  desc: "Closed volume across Las Vegas neighborhoods since 2008.",
                },
                {
                  icon: HomeIcon,
                  title: "Full service",
                  desc: "Buying, selling, 55+, luxury, and new construction — one agent of record.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 p-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              ))}
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
                Neighborhood listing median about $525,000 as of June 2026
                (realtor.com Centennial Hills report). Days on market and count
                move weekly — ask for a live pull.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
              {[
                {
                  value: "$525K",
                  label: "Listing median",
                  sub: "June 2026 report",
                },
                { value: "48", label: "Median DOM", sub: "Same report" },
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
                className="inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Centennial Hills market insights
              </Link>
            </div>
          </div>
        </section>

        <RealScoutListings />
        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection />

        <section className="bg-blue-600 py-16 text-white md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {config.ctaHeadline}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              {config.ctaSubheadline}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={CTA_TEL}
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 transition-colors hover:bg-blue-50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {CTA_PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-block rounded-md bg-blue-700 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-800"
              >
                Send a message
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              {OFFICE_NAP.full} · License S.0197614.LLC
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
