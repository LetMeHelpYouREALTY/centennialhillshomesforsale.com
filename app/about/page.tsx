import Link from "next/link";
import {
  Phone,
  Mail,
  Award,
  Users,
  Home,
  CheckCircle,
  MapPin,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { AgentPhoto } from "@/components/shared/AgentPhoto";
import { AGENT_PHOTO_PATH } from "@/lib/brand-assets";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_PHONE_E164,
  CTA_TEL,
  OFFICE_NAP,
  OFFICE_POSTAL_ADDRESS,
  REALSCOUT_SEARCH_URL,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { PageCTA } from "@/components/shared/PageCTA";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";
import SchemaScript, { FAQSchema } from "@/components/SchemaScript";
import { generateWebPageSchema } from "@/lib/schema";
import { getPublicSiteUrl } from "@/lib/site-url";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import { GuideLeadForm } from "@/components/forms/GuideLeadForm";
import { HubConversionLinks } from "@/components/shared/HubConversionLinks";
import { MARKET_SNAPSHOT_AS_OF } from "@/lib/market-snapshots";

export function generateMetadata(): Metadata {
  return withShareImage(
    {
      title: "About Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
      description:
        "Meet Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Serving Las Vegas, Henderson, and Summerlin since 2008. Call (702) 222-1964 or email homes@heyberkshire.com.",
      keywords: [
        "Dr. Jan Duffy",
        "Berkshire Hathaway HomeServices agent",
        "Las Vegas realtor",
        "BHHS Nevada Properties",
        "Henderson real estate agent",
        "Summerlin realtor",
      ],
    },
    PAGE_HERO_IMAGES.about,
  );
}

const aboutOrigin = getPublicSiteUrl();

// Person Schema for Dr. Jan Duffy
const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy",
  jobTitle: "REALTOR®",
  description:
    "Licensed real estate agent with Berkshire Hathaway HomeServices Nevada Properties, serving Las Vegas, Henderson, and Summerlin since 2008.",
  telephone: CTA_PHONE_E164,
  email: AGENT_EMAIL,
  url: `${aboutOrigin}/about`,
  image: `${aboutOrigin}${AGENT_PHOTO_PATH}`,
  address: OFFICE_POSTAL_ADDRESS,
  worksFor: {
    "@type": "RealEstateAgent",
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_NAP.street,
      addressLocality: OFFICE_NAP.city,
      addressRegion: OFFICE_NAP.state,
      postalCode: OFFICE_NAP.zip,
      addressCountry: "US",
    },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Real Estate License",
    credentialNumber: "S.0197614.LLC",
  },
  knowsAbout: [
    "Las Vegas real estate",
    "Henderson properties",
    "Summerlin homes",
    "Luxury real estate",
    "Investment properties",
    "55+ communities",
    "Siena Summerlin",
    "Trilogy at Summerlin",
    "California relocation",
  ],
};

const aboutFaqs = [
  {
    question: "Who is Dr. Jan Duffy?",
    answer:
      "Dr. Jan Duffy is a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, license S.0197614.LLC. I have served Las Vegas, Henderson, and Summerlin since 2008. Call (702) 222-1964 or email homes@heyberkshire.com.",
  },
  {
    question: "Where is the office?",
    answer:
      "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment.",
  },
  {
    question: "Is Berkshire Hathaway HomeServices a franchise?",
    answer:
      "Yes. BHHS Nevada Properties is a franchise brokerage. You get a written plan and a global referral network. Warren Buffett does not write your CMA.",
  },
  {
    question: "What email should clients use?",
    answer:
      "homes@heyberkshire.com. The client phone is (702) 222-1964. (702) 500-1942 is the professional/FUB line, not a consumer CTA.",
  },
];

const specializations = [
  {
    title: "Residential home sales",
    href: "/listings",
    description:
      "Single-family homes, condos, and townhomes throughout Las Vegas and Henderson",
  },
  {
    title: "Luxury listings",
    href: "/luxury-homes",
    description:
      "The Ridges, MacDonald Highlands, and Southern Highlands guard-gated and custom villages",
  },
  {
    title: "New construction",
    href: "/new-construction",
    description:
      "Register before the first model-home visit with Toll Brothers, Lennar, Century Communities, and more",
  },
  {
    title: "Investment properties",
    href: "/investment-properties",
    description:
      "Rental houses in Clark County. I represent buyers and sellers; I do not manage rentals.",
  },
  {
    title: "55+ HOPA communities",
    href: "/55-plus-communities",
    description:
      "Sun City Summerlin, Siena, Trilogy, Sun City Anthem, and Del Webb Lake Las Vegas files",
  },
  {
    title: "California relocation",
    href: "/buyers/california-relocator",
    description:
      "Helping CA buyers compare Nevada's 0% wage tax and live Las Vegas comps",
  },
];

const areasServed = [
  { name: "Las Vegas", href: "/listings" },
  { name: "Henderson", href: "/neighborhoods/henderson" },
  { name: "Summerlin", href: "/neighborhoods/summerlin" },
  { name: "Green Valley", href: "/neighborhoods/green-valley" },
  { name: "North Las Vegas", href: "/neighborhoods/north-las-vegas" },
  { name: "Southern Highlands", href: "/neighborhoods/southern-highlands" },
  { name: "Skye Canyon", href: "/neighborhoods/skye-canyon" },
  { name: "Centennial Hills", href: "/neighborhoods/centennial-hills" },
  { name: "The Ridges", href: "/neighborhoods/the-ridges" },
  { name: "Tournament Hills", href: "/neighborhoods/tournament-hills" },
  { name: "89138 Summerlin West", href: "/neighborhoods/89138" },
  { name: "89144 Summerlin", href: "/neighborhoods/89144" },
  { name: "Inspirada", href: "/neighborhoods/inspirada" },
  { name: "Mountains Edge", href: "/neighborhoods/mountains-edge" },
  { name: "Spring Valley", href: "/listings?q=Spring+Valley" },
  { name: "55+ Communities", href: "/55-plus-communities" },
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        id="webpage-schema"
        schema={generateWebPageSchema({
          name: "About Dr. Jan Duffy",
          description:
            "Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Serving Las Vegas, Henderson, and Summerlin since 2008.",
          url: "/about",
        })}
      />
      <FAQSchema faqs={aboutFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Dr. Jan Duffy, Las Vegas REALTOR® at BHHS Nevada Properties
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.about.src}
              alt={PAGE_HERO_IMAGES.about.alt}
            />
            <p className="text-pretty text-xl text-slate-600">
              I have been serving Las Vegas since 2008 with Berkshire Hathaway
              HomeServices Nevada Properties. Buyers, sellers, investors, and
              relocators get a written plan and live comps — not a ranking
              slogan.
            </p>
            <div className="mt-8">
              <MlsSearchForm inputId="mls-q-about" />
            </div>
            <div className="mx-auto mt-8 max-w-3xl text-left">
              <GuideLeadForm
                source="about-page-mid"
                heading="Ask Dr. Jan Duffy"
                className="mb-0"
              />
            </div>
            <HubConversionLinks />
          </div>

          {/* Agent Profile */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Dr. Jan Duffy
                </h2>
                <p className="text-lg text-blue-600 mb-6">
                  REALTOR® | License S.0197614.LLC
                </p>

                <div className="prose prose-lg text-pretty text-slate-700 mb-8 space-y-4">
                  <p>
                    When you choose to work with{" "}
                    <strong>Berkshire Hathaway HomeServices</strong>, you are
                    choosing a franchise brokerage with written listing tools. I
                    represent this brand in Las Vegas with MLS comps and gate
                    access on every file I work.
                  </p>
                  <p>
                    Since 2008, I've represented buyers and sellers in Las
                    Vegas, Henderson, Summerlin (including 89138), Centennial
                    Hills, and throughout Southern Nevada. My files include
                    luxury properties, new construction, investment real estate,
                    55+ HOPA campuses such as Siena and Trilogy, and
                    relocations—particularly for California buyers comparing
                    Nevada's wage-tax statute against live Las Vegas comps.
                  </p>
                  <p>
                    What{" "}
                    <strong>
                      Berkshire Hathaway HomeServices Nevada Properties
                    </strong>{" "}
                    actually buys you is a franchise brokerage, a global
                    referral network, and listing marketing in writing. Warren
                    Buffett does not write your CMA. You still get one agent of
                    record — me — putting your interests first and walking the
                    file until it closes.
                  </p>
                  <p>
                    I treat every client as a principal in the file. Whether you
                    are a first-time buyer, a luxury buyer who needs discretion,
                    or an investor building a rental portfolio, you get the same
                    written process and the same MLS worksheet. Real estate is
                    matching square footage, commute, and budget to the right
                    ZIP.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-slate-900 mb-4">
                    Contact Dr. Jan Duffy
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={CTA_TEL}
                      className="inline-flex min-h-11 items-center text-slate-700 no-underline hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <Phone
                        className="h-5 w-5 mr-3 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="font-semibold">{CTA_PHONE}</span>
                    </a>
                    <a
                      href={AGENT_EMAIL_MAILTO}
                      className="inline-flex min-h-11 items-center text-slate-700 no-underline hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <Mail
                        className="h-5 w-5 mr-3 text-blue-600"
                        aria-hidden="true"
                      />
                      {AGENT_EMAIL}
                    </a>
                    <div className="flex items-start text-slate-700">
                      <MapPin
                        className="h-5 w-5 mr-3 text-blue-600 mt-0.5"
                        aria-hidden="true"
                      />
                      <address className="not-italic">
                        <a
                          href={OFFICE_NAP.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={TEXT_LINK_CLASS}
                        >
                          {OFFICE_NAP.full}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </address>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <Clock
                        className="h-5 w-5 mr-3 text-blue-600"
                        aria-hidden="true"
                      />
                      Mon-Fri 9am-6pm, Sat 10am-4pm, Sun by appointment
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-blue-600 pl-6 italic text-slate-700">
                  "My job isn't just to show you houses—it's to make sure you
                  don't overpay, that you understand what you're buying, and
                  that you're protected through every step of the transaction. I
                  stay on the file until we close the house that matches the
                  written criteria."
                  <cite className="block mt-2 text-slate-900 font-semibold not-italic">
                    — Dr. Jan Duffy, BHHS Nevada Properties
                  </cite>
                </blockquote>
              </div>

              {/* Stats & Credentials */}
              <div className="space-y-6">
                <figure className="overflow-hidden rounded-2xl bg-slate-900 p-4">
                  <AgentPhoto variant="profile" priority />
                  <figcaption className="mt-3 text-center">
                    <p className="font-semibold text-white">Dr. Jan Duffy</p>
                    <p className="text-sm text-slate-300">
                      BHHS Nevada Properties · License S.0197614.LLC
                    </p>
                  </figcaption>
                </figure>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      2008
                    </div>
                    <div className="text-sm text-slate-600">
                      Serving Las Vegas
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      BHHS
                    </div>
                    <div className="text-sm text-slate-600">
                      Nevada Properties
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      S.0197614
                    </div>
                    <div className="text-sm text-slate-600">Nevada license</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      Google
                    </div>
                    <div className="text-sm text-slate-600">
                      Read live reviews
                    </div>
                  </div>
                </div>

                {/* Quick Services */}
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link
                      href="/buyers"
                      className="inline-flex min-h-11 items-center text-slate-700 no-underline hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <ArrowRight
                        className="h-4 w-4 mr-2 text-blue-600"
                        aria-hidden="true"
                      />
                      Home Buying Guide
                    </Link>
                    <Link
                      href="/sellers"
                      className="inline-flex min-h-11 items-center text-slate-700 no-underline hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <ArrowRight
                        className="h-4 w-4 mr-2 text-blue-600"
                        aria-hidden="true"
                      />
                      Selling Your Home
                    </Link>
                    <Link
                      href="/home-valuation"
                      className="inline-flex min-h-11 items-center text-slate-700 no-underline hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <ArrowRight
                        className="h-4 w-4 mr-2 text-blue-600"
                        aria-hidden="true"
                      />
                      Request a CMA
                    </Link>
                    <a
                      href={REALSCOUT_SEARCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-slate-700 no-underline hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <ArrowRight
                        className="h-4 w-4 mr-2 text-blue-600"
                        aria-hidden="true"
                      />
                      Browse Listings
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specializations Section */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.about.src}
              avoidSrc={PAGE_HERO_IMAGES.about.src}
            >
              Files I actually work
            </SectionHeading>
            <p className="text-pretty text-slate-600 text-center max-w-3xl mx-auto mb-8">
              I work residential files across Las Vegas, Henderson, and
              Summerlin. First-time buyers, luxury tours, investors, and 55+
              HOPA occupancy rules each get a written plan — not a lifestyle
              slogan.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((spec) => (
                <Link
                  key={spec.href}
                  href={spec.href}
                  className="block min-h-11 rounded-lg border border-slate-200 bg-white p-6 no-underline hover:border-blue-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <h3 className="mb-2 flex items-center font-bold text-slate-900">
                    <CheckCircle
                      className="mr-2 h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    {spec.title}
                  </h3>
                  <p className="text-pretty text-sm text-slate-600">
                    {spec.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Why BHHS Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Berkshire Hathaway HomeServices?
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              Berkshire Hathaway HomeServices is backed by Berkshire Hathaway
              Inc. You get written compensation, a global referral network, and
              a listing plan — not a stability slogan.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-2">Franchise brokerage</h3>
                <p className="text-slate-300 text-sm">
                  BHHS Nevada Properties is a franchise. You get written
                  compensation, a referral network, and documented ethics
                  standards — not a Buffett slogan.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Referral network for relocations
                </h3>
                <p className="text-slate-300 text-sm">
                  Global referral network for inbound and outbound relocations.
                  California-to-Nevada files are a regular part of this
                  practice.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-2">Ethical Standards</h3>
                <p className="text-slate-300 text-sm">
                  Buyer or listing agreements in writing. Compensation is
                  disclosed before we tour or list.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/why-berkshire-hathaway"
                className="inline-flex min-h-11 items-center justify-center bg-white text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Why Berkshire Hathaway HomeServices
              </Link>
            </div>
          </section>

          {/* Areas Served */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.listings.src}
              avoidSrc={PAGE_HERO_IMAGES.about.src}
            >
              Areas Served by BHHS Nevada Properties
            </SectionHeading>
            <p className="text-pretty text-slate-600 text-center max-w-3xl mx-auto mb-8">
              I serve the entire Las Vegas Valley with named ZIPs, commute
              times, HOA notes, and square footage. From custom homes in The
              Ridges to production inventory in North Las Vegas, I price each
              file with a live CMA.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areasServed.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="flex min-h-11 flex-col items-center justify-center rounded-lg bg-slate-50 p-4 text-center no-underline hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Home
                    className="mb-2 h-5 w-5 text-blue-600"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-slate-700">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/neighborhoods"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex min-h-11 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Explore All Neighborhoods{" "}
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.about.src}
            >
              Frequently asked questions
            </SectionHeading>
            <div className="space-y-4">
              {aboutFaqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-slate-50 p-6">
                  <h3 className="mb-2 font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-pretty text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <GoogleReviewsCta className="mb-16 rounded-2xl" />

          {/* CTA */}
          <VisitOffice className="mb-16 rounded-2xl" compact />
          <PageCTA
            headline="Ask about a Las Vegas buy or sale"
            subheadline="Questions about buying or selling in Las Vegas? Call, text, or email homes@heyberkshire.com with the address. I will run a CMA — not a free-consult product pitch."
            className="mb-8 rounded-2xl"
            formSource="about-page"
            formHeading="Ask Dr. Jan Duffy"
          />
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-600 mt-8">
          Last updated: {MARKET_SNAPSHOT_AS_OF}
        </div>
      </div>
    </>
  );
}
