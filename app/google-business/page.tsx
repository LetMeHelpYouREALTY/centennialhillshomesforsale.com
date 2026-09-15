import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  MessageSquare,
  Award,
  Users,
  Home,
} from "lucide-react";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { AgentPhoto } from "@/components/shared/AgentPhoto";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_TEL,
  OFFICE_HOURS,
  OFFICE_NAP,
  TEXT_LINK_CLASS,
  TEXT_LINK_ON_DARK_CLASS,
} from "@/lib/contact";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";
import { PageCTA } from "@/components/shared/PageCTA";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import SchemaScript from "@/components/SchemaScript";
import { generateWebPageSchema } from "@/lib/schema";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import { GuideLeadForm } from "@/components/forms/GuideLeadForm";
import { HubConversionLinks } from "@/components/shared/HubConversionLinks";
import { gbpPostTemplates } from "@/lib/gbp-posts";
import {
  businessInfo,
  gbpDescription,
  gbpFAQs,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/gbp-schema";
import { MARKET_SNAPSHOT_AS_OF } from "@/lib/market-snapshots";

export function generateMetadata(): Metadata {
  return withShareImage(
    {
      title:
        "Dr. Jan Duffy, REALTOR® Las Vegas | Berkshire Hathaway HomeServices",
      description:
        "Dr. Jan Duffy is a Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Summerlin, Henderson, 55+ communities, California relocation, and luxury listings. Call (702) 222-1964 or email homes@heyberkshire.com.",
      keywords: [
        "Dr. Jan Duffy realtor",
        "Las Vegas real estate agent",
        "Berkshire Hathaway HomeServices Las Vegas",
        "Summerlin realtor",
        "Henderson real estate agent",
        "55+ communities Las Vegas",
        "California relocation Las Vegas",
      ],
      openGraph: {
        title:
          "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
        description:
          "Las Vegas REALTOR® serving since 2008. Summerlin, Henderson, luxury listings, 55+ communities.",
        url: "https://heyberkshire.com/google-business",
        type: "profile",
      },
    },
    PAGE_HERO_IMAGES.googleBusiness,
  );
}

const latestGbpPosts = [...gbpPostTemplates]
  .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
  .slice(0, 3);

function gbpPostHref(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.pathname;
  } catch {
    return url;
  }
}

export default function GoogleBusinessPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      <SchemaScript
        id="webpage-schema"
        schema={generateWebPageSchema({
          name: "Dr. Jan Duffy, REALTOR® Las Vegas",
          description:
            "Dr. Jan Duffy is a Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.",
          url: "/google-business",
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero - NAP Prominent */}
          <section className="max-w-5xl mx-auto mb-16">
            <PageHeroImage
              src={PAGE_HERO_IMAGES.googleBusiness.src}
              alt={PAGE_HERO_IMAGES.googleBusiness.alt}
            />
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award
                      className="h-6 w-6 text-blue-100"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-blue-50">
                      Berkshire Hathaway HomeServices
                    </span>
                  </div>
                  <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
                    Dr. Jan Duffy
                  </h1>
                  <p className="text-xl text-blue-50 mb-2">
                    REALTOR® | License {businessInfo.license}
                  </p>
                  <p className="text-slate-300 mb-6">Nevada Properties</p>

                  {/* NAP - Exact match to GBP */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <a
                          href={OFFICE_NAP.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={TEXT_LINK_ON_DARK_CLASS}
                        >
                          <p className="font-medium">
                            {businessInfo.address.streetAddress}
                          </p>
                          <p>
                            {businessInfo.address.addressLocality},{" "}
                            {businessInfo.address.addressRegion}{" "}
                            {businessInfo.address.postalCode}
                          </p>
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone
                        className="h-5 w-5 text-blue-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <a href={CTA_TEL} className={TEXT_LINK_ON_DARK_CLASS}>
                        {businessInfo.phone.display}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail
                        className="h-5 w-5 text-blue-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <a
                        href={AGENT_EMAIL_MAILTO}
                        className={TEXT_LINK_ON_DARK_CLASS}
                      >
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Rating, photo & CTA */}
                <div className="text-center bg-white/10 rounded-xl p-8">
                  <div className="mb-4 flex justify-center">
                    <AgentPhoto
                      variant="card"
                      className="h-40 w-40 md:h-48 md:w-48"
                    />
                  </div>
                  <p className="text-3xl font-bold mb-2">Google reviews</p>
                  <p className="text-blue-50 mb-6">
                    Live on the Business Profile — I will not invent a rating
                  </p>
                  <a
                    href={OFFICE_NAP.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white px-6 py-4 text-lg font-bold text-blue-900 no-underline transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    View Google Reviews
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={CTA_TEL}
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-lg font-bold text-white no-underline transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Call {businessInfo.phone.display}
                  </a>
                  <a
                    href={AGENT_EMAIL_MAILTO}
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/40 px-6 py-4 text-lg font-bold text-white no-underline transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {businessInfo.email}
                  </a>
                  <a
                    href={OFFICE_NAP.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/40 px-6 py-4 text-lg font-bold text-white no-underline transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Get Directions
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <p className="text-sm text-blue-50 mt-3">
                    Call for a CMA on the address — no invented rating on this
                    page
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <MlsSearchForm inputId="mls-q-google-business" />
            </div>
          </section>
          <div className="mx-auto mb-16 max-w-3xl">
            <GuideLeadForm
              source="google-business-mid"
              heading="Ask about this office"
              className="mb-0"
            />
          </div>
          <HubConversionLinks className="mb-16" />

          {/* Business Hours */}
          <section className="mx-auto mb-16 max-w-5xl">
            <SectionHeading
              className="mb-4 text-3xl font-bold text-slate-900"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.googleBusiness.src}
            >
              Business Hours
            </SectionHeading>
            <div className="rounded-xl bg-slate-50 p-6">
              <div className="mb-4 flex items-center gap-2 text-slate-700">
                <Clock className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <p className="font-medium">
                  Posted hours at the Lake Mead office
                </p>
              </div>
              <div className="grid gap-2 text-sm md:grid-cols-3">
                <div>
                  <span className="font-medium">{OFFICE_HOURS.weekday}</span>
                </div>
                <div>
                  <span className="font-medium">{OFFICE_HOURS.saturday}</span>
                </div>
                <div>
                  <span className="font-medium">{OFFICE_HOURS.sunday}</span>
                </div>
              </div>
            </div>
          </section>

          {/* About - 750 Word Description Structure */}
          <section className="max-w-4xl mx-auto mb-16">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.about.src}
              avoidSrc={PAGE_HERO_IMAGES.googleBusiness.src}
            >
              About Dr. Jan Duffy
            </SectionHeading>

            {/* Section 1: Who We Are */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Experience & Background
              </h3>
              <p className="text-pretty text-slate-700 leading-relaxed">
                {gbpDescription.whoWeAre}
              </p>
            </div>

            {/* Section 2: What We Do */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Services & Value
              </h3>
              <p className="text-pretty text-slate-700 leading-relaxed">
                {gbpDescription.whatWeDo}
              </p>
            </div>

            {/* Section 3: Where We Serve */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Areas Served
              </h3>
              <p className="text-pretty text-slate-700 leading-relaxed">
                {gbpDescription.whereWeServe}
              </p>
            </div>
          </section>

          {/* Services - Each creates searchable GBP field */}
          <section className="max-w-5xl mx-auto mb-16">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.buyers.src}
              avoidSrc={PAGE_HERO_IMAGES.googleBusiness.src}
            >
              Real Estate Services
            </SectionHeading>
            <div className="grid md:grid-cols-3 gap-4">
              {businessInfo.services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block min-h-11 rounded-lg border border-slate-200 bg-white p-4 no-underline transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {service.name}
                      </h3>
                      <p className="text-pretty text-sm text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Service Areas - Distance factor */}
          <section className="max-w-5xl mx-auto mb-16">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.listings.src}
              avoidSrc={PAGE_HERO_IMAGES.googleBusiness.src}
            >
              Service Areas
            </SectionHeading>
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">
                    Primary Markets
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/listings"
                        className="inline-flex min-h-11 items-center gap-2 text-slate-700 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <MapPin
                          className="h-4 w-4 text-blue-600"
                          aria-hidden="true"
                        />{" "}
                        Las Vegas, NV
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/neighborhoods/summerlin"
                        className="inline-flex min-h-11 items-center gap-2 text-slate-700 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <MapPin
                          className="h-4 w-4 text-blue-600"
                          aria-hidden="true"
                        />{" "}
                        Summerlin, NV
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/neighborhoods/89138"
                        className="inline-flex min-h-11 items-center gap-2 text-slate-700 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <MapPin
                          className="h-4 w-4 text-blue-600"
                          aria-hidden="true"
                        />{" "}
                        89138 Summerlin West
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/55-plus-communities/siena"
                        className="inline-flex min-h-11 items-center gap-2 text-slate-700 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <MapPin
                          className="h-4 w-4 text-blue-600"
                          aria-hidden="true"
                        />{" "}
                        Siena 55+
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">
                    Secondary Markets
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/neighborhoods/henderson"
                        className="inline-flex min-h-11 items-center gap-2 text-slate-700 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <MapPin
                          className="h-4 w-4 text-blue-600"
                          aria-hidden="true"
                        />{" "}
                        Henderson, NV
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/neighborhoods/north-las-vegas"
                        className="inline-flex min-h-11 items-center gap-2 text-slate-700 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <MapPin
                          className="h-4 w-4 text-blue-600"
                          aria-hidden="true"
                        />{" "}
                        North Las Vegas, NV
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">
                    Full Coverage
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/neighborhoods"
                        className="inline-flex min-h-11 items-center gap-2 text-slate-700 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <MapPin
                          className="h-4 w-4 text-blue-600"
                          aria-hidden="true"
                        />{" "}
                        Clark County, NV
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/listings"
                        className="inline-flex min-h-11 items-center gap-2 text-slate-700 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <MapPin
                          className="h-4 w-4 text-blue-600"
                          aria-hidden="true"
                        />{" "}
                        Las Vegas Valley listings
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Neighborhood Specialties */}
              <div className="mt-8 pt-8 border-t border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4">
                  Neighborhood files
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Summerlin", href: "/neighborhoods/summerlin" },
                    { name: "Henderson", href: "/neighborhoods/henderson" },
                    {
                      name: "Green Valley",
                      href: "/neighborhoods/green-valley",
                    },
                    { name: "The Ridges", href: "/neighborhoods/the-ridges" },
                    {
                      name: "Southern Highlands",
                      href: "/neighborhoods/southern-highlands",
                    },
                    {
                      name: "Centennial Hills",
                      href: "/neighborhoods/centennial-hills",
                    },
                    {
                      name: "Skye Canyon",
                      href: "/neighborhoods/skye-canyon",
                    },
                    { name: "Inspirada", href: "/neighborhoods/inspirada" },
                    {
                      name: "Mountains Edge",
                      href: "/neighborhoods/mountains-edge",
                    },
                    {
                      name: "North Las Vegas",
                      href: "/neighborhoods/north-las-vegas",
                    },
                    {
                      name: "89138 Summerlin West",
                      href: "/neighborhoods/89138",
                    },
                    { name: "89144 Summerlin", href: "/neighborhoods/89144" },
                    {
                      name: "Tournament Hills",
                      href: "/neighborhoods/tournament-hills",
                    },
                    {
                      name: "55+ Communities",
                      href: "/55-plus-communities",
                    },
                    { name: "Siena", href: "/55-plus-communities/siena" },
                  ].map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="inline-flex min-h-11 items-center rounded-full bg-white px-3 py-1 text-sm text-slate-700 no-underline hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.googleBusiness.src}
              avoidSrc={PAGE_HERO_IMAGES.contact.src}
            >
              Google Business Profile posts
            </SectionHeading>
            <p className="mb-8 text-center text-pretty text-slate-600">
              Draft copy for the live Google Business Profile. Dates are the
              template publish dates — not a Google ranking claim. Call{" "}
              {businessInfo.phone.display} or email {AGENT_EMAIL} for the live
              CMA behind any number.
            </p>
            <div className="space-y-6">
              {latestGbpPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-lg border border-slate-200 bg-white p-6"
                >
                  <p className="mb-2 text-sm font-semibold text-blue-800">
                    {post.publishDate}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {post.title}
                  </h3>
                  <p className="whitespace-pre-line text-pretty text-slate-700">
                    {post.content}
                  </p>
                  {post.cta ? (
                    <p className="mt-4">
                      <Link
                        href={gbpPostHref(post.cta.url)}
                        className={TEXT_LINK_CLASS}
                      >
                        {post.cta.text}
                      </Link>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          {/* FAQ Section - Extra ranking boost */}
          <section className="max-w-4xl mx-auto mb-16">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.googleBusiness.src}
            >
              Frequently Asked Questions
            </SectionHeading>
            <div className="space-y-4">
              {gbpFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-lg p-6"
                >
                  <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <MessageSquare
                      className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {faq.question}
                  </h3>
                  <p className="text-pretty text-slate-600 ml-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <GoogleReviewsCta className="mb-16 rounded-2xl bg-white" />
          <VisitOffice className="mb-16 rounded-2xl" compact />

          {/* Review CTA - Prominence factor */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8 text-center">
              <Star
                className="h-12 w-12 text-yellow-500 mx-auto mb-4"
                aria-hidden="true"
              />
              <SectionHeading
                className="text-2xl font-bold text-slate-900 mb-4"
                fallbackSrc={PAGE_HERO_IMAGES.googleBusiness.src}
                avoidSrc={PAGE_HERO_IMAGES.googleBusiness.src}
              >
                Leave a Google Review for This Office
              </SectionHeading>
              <p className="text-pretty text-slate-600 mb-6 max-w-2xl mx-auto">
                If I helped you buy or sell a home, please consider sharing your
                experience. Mention your neighborhood, type of transaction, and
                what made the experience useful.
              </p>
              <a
                href={OFFICE_NAP.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Leave a Google Review
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Call or email with the address you want on a CMA
              </h2>
              <p className="text-pretty text-xl text-slate-300 mb-8">
                Call or email with the address you want on a CMA — buying or
                selling in Las Vegas. I will pull live MLS, not a recycled
                headline.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                <a
                  href={`tel:${businessInfo.phone.tel}`}
                  className="inline-flex min-h-11 items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                  {businessInfo.phone.display}
                </a>
                <a
                  href={AGENT_EMAIL_MAILTO}
                  className="inline-flex min-h-11 items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                  {AGENT_EMAIL}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Send a contact form
                </Link>
              </div>
              <p className="text-slate-300 text-sm mt-6">
                <a
                  href={OFFICE_NAP.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={TEXT_LINK_ON_DARK_CLASS}
                >
                  {businessInfo.address.streetAddress},{" "}
                  {businessInfo.address.addressLocality},{" "}
                  {businessInfo.address.addressRegion}{" "}
                  {businessInfo.address.postalCode}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-600 mt-8">
          Last updated: {MARKET_SNAPSHOT_AS_OF}
        </div>
      </div>
      <PageCTA
        headline="Match the Google listing to this office"
        subheadline="9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Call (702) 222-1964 or email homes@heyberkshire.com."
        formSource="google-business"
        formHeading="Ask about this office"
      />
    </>
  );
}
