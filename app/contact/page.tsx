import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Star,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
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
  OFFICE_HOURS,
  OFFICE_NAP,
  OFFICE_POSTAL_ADDRESS,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { OfficeMap } from "@/components/shared/OfficeMap";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";
import { PageCTA } from "@/components/shared/PageCTA";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { HubConversionLinks } from "@/components/shared/HubConversionLinks";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import { getPublicSiteUrl } from "@/lib/site-url";
import SchemaScript, { FAQSchema } from "@/components/SchemaScript";
import { generateWebPageSchema } from "@/lib/schema";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { MlsSearchForm } from "@/components/search/MlsSearchForm";
import { MARKET_SNAPSHOT_AS_OF } from "@/lib/market-snapshots";

export function generateMetadata(): Metadata {
  return withShareImage(
    {
      title:
        "Contact Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
      description:
        "Contact Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Schedule an appointment, get directions, call (702) 222-1964, or email homes@heyberkshire.com. Las Vegas, Henderson, Summerlin.",
      keywords: [
        "contact real estate agent Las Vegas",
        "Berkshire Hathaway contact",
        "Dr. Jan Duffy phone",
        "Las Vegas realtor contact",
        "schedule real estate appointment",
      ],
    },
    PAGE_HERO_IMAGES.contact,
  );
}

const contactOrigin = getPublicSiteUrl();

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: CTA_PHONE_E164,
    email: AGENT_EMAIL,
    image: `${contactOrigin}${AGENT_PHOTO_PATH}`,
    url: `${contactOrigin}/contact`,
    address: OFFICE_POSTAL_ADDRESS,
  },
};

const contactFaqs = [
  {
    question: "What should I expect during my first consultation?",
    answer:
      "The first consult is a written-plan conversation: timeline, budget, ZIP, and whether you need a buyer-broker or listing agreement. Bring the address if you have one. I will pull live MLS, not a script.",
  },
  {
    question: "Do I need to be pre-approved before scheduling a showing?",
    answer:
      "A pre-approval letter strengthens an offer, but it is not required for an initial consult. I can introduce Clark County lenders. Rates are UNKNOWN until that lender quotes your file.",
  },
  {
    question: "How quickly can you respond to inquiries?",
    answer: `I reply during posted office hours. For urgent files, call or text ${CTA_PHONE} or email ${AGENT_EMAIL}. I will not promise a two-hour SLA on this page.`,
  },
  {
    question: "Do you charge for consultations?",
    answer:
      "No separate consult fee. The first call is a written-plan conversation: timeline, budget, ZIP, and whether you need a buyer-broker or listing agreement. Representation is a separate written agreement.",
  },
  {
    question: "What is the office email?",
    answer: `Email ${AGENT_EMAIL}. The client phone is ${CTA_PHONE}. Hours: ${OFFICE_HOURS.display}. Office: ${OFFICE_NAP.full}.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        id="webpage-schema"
        schema={generateWebPageSchema({
          name: "Contact Dr. Jan Duffy",
          description:
            "Contact Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.",
          url: "/contact",
        })}
      />
      <FAQSchema faqs={contactFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
              Contact Dr. Jan Duffy
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.contact.src}
              alt={PAGE_HERO_IMAGES.contact.alt}
            />
            <div className="mb-8 flex justify-center">
              <AgentPhoto variant="card" priority />
            </div>
            <p className="text-pretty text-xl text-slate-600 max-w-2xl mx-auto">
              Questions about Las Vegas real estate?{" "}
              <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
                Call {CTA_PHONE}
              </a>{" "}
              or{" "}
              <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
                email {AGENT_EMAIL}
              </a>{" "}
              with the address. Schedule an appointment or reach out directly.
            </p>
            <div className="mt-8">
              <MlsSearchForm inputId="mls-q-contact" />
            </div>
            <HubConversionLinks />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Map */}
            <div>
              <SectionHeading
                className="text-2xl font-bold text-slate-900 mb-6"
                fallbackSrc={PAGE_HERO_IMAGES.contact.src}
                avoidSrc={PAGE_HERO_IMAGES.contact.src}
              >
                Call, email, or visit the office
              </SectionHeading>
              <p className="text-pretty text-slate-700 mb-8">
                Name the file — first home, luxury listing, or rental. I will
                pull live comps and put compensation in writing. Serving Las
                Vegas since 2008 with{" "}
                <strong>Berkshire Hathaway HomeServices</strong>.
              </p>

              {/* NAP Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Phone
                    className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Phone (Call or Text)
                    </h3>
                    <a
                      href={CTA_TEL}
                      className="inline-flex min-h-11 items-center text-2xl font-bold text-blue-600 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      {CTA_PHONE}
                    </a>
                    <p className="text-sm text-slate-600 mt-1">
                      {OFFICE_HOURS.display}
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Mail
                    className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href={AGENT_EMAIL_MAILTO}
                      className="inline-flex min-h-11 items-center font-medium text-blue-600 no-underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      {AGENT_EMAIL}
                    </a>
                    <p className="text-sm text-slate-600 mt-1">
                      Replies during posted office hours — call or text the
                      client line
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <MapPin
                    className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Office Address
                    </h3>
                    <address className="not-italic text-slate-700">
                      Berkshire Hathaway HomeServices
                      <br />
                      Nevada Properties
                      <br />
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
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Clock
                    className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-slate-700">
                      {OFFICE_HOURS.weekday}
                      <br />
                      {OFFICE_HOURS.saturday}
                      <br />
                      {OFFICE_HOURS.sunday}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Available by appointment outside these hours
                    </p>
                  </div>
                </div>
              </div>

              <OfficeMap className="mb-8" height={300} />

              <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="mb-2 text-xl font-bold text-slate-900">
                  Send a Message
                </h2>
                <p className="mb-4 text-pretty text-sm text-slate-600">
                  Prefer email over Calendly? Send the address, ZIP, and
                  timeline. I reply during posted hours.
                </p>
                <LeadCaptureForm source="contact-page" formType="contact" />
              </div>

              {/* Credentials */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Dr. Jan Duffy, REALTOR®</strong>
                  <br />
                  License S.0197614.LLC
                  <br />
                  Berkshire Hathaway HomeServices Nevada Properties
                </p>
              </div>
            </div>

            {/* Schedule Appointment - Calendly Widget */}
            <div>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-blue-600 text-white p-6 text-center">
                  <Calendar
                    className="h-10 w-10 mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <h2 className="text-2xl font-bold mb-2">
                    Schedule an Appointment
                  </h2>
                  <p className="text-blue-50">
                    Book a time that works for you—phone consultation, property
                    showing, or in-person meeting at our office.
                  </p>
                </div>
                <CalendlyWidget height="600px" />
              </div>

              {/* Why Contact BHHS */}
              <div className="mt-6 bg-slate-900 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">
                  What you get on the first call
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Shield
                      className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">
                        Franchise brokerage:
                      </strong>{" "}
                      Written compensation, a global referral network, and
                      documented ethics standards — not a Buffett slogan.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Star
                      className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Proven local work:</strong>{" "}
                      Serving Las Vegas since 2008 with Berkshire Hathaway
                      HomeServices Nevada Properties.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Users
                      className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">
                        Referral network for relocations:
                      </strong>{" "}
                      BHHS referral network for inbound and outbound
                      relocations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <section className="max-w-5xl mx-auto mt-16">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-6 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.listings.src}
              avoidSrc={PAGE_HERO_IMAGES.contact.src}
            >
              Areas I serve
            </SectionHeading>
            <p className="text-pretty text-slate-600 text-center max-w-3xl mx-auto mb-8">
              I represent buyers and sellers throughout the Las Vegas Valley,
              including 89138 Summerlin West and 55+ campuses such as Siena.
              Call or email with the ZIP or address.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Las Vegas", href: "/neighborhoods" },
                { name: "Henderson", href: "/neighborhoods/henderson" },
                { name: "Summerlin", href: "/neighborhoods/summerlin" },
                { name: "Green Valley", href: "/neighborhoods/green-valley" },
                {
                  name: "North Las Vegas",
                  href: "/neighborhoods/north-las-vegas",
                },
                {
                  name: "Southern Highlands",
                  href: "/neighborhoods/southern-highlands",
                },
                { name: "Skye Canyon", href: "/neighborhoods/skye-canyon" },
                {
                  name: "Centennial Hills",
                  href: "/neighborhoods/centennial-hills",
                },
                {
                  name: "89138 Summerlin West",
                  href: "/neighborhoods/89138",
                },
                {
                  name: "Siena 55+",
                  href: "/55-plus-communities/siena",
                },
                { name: "The Ridges", href: "/neighborhoods/the-ridges" },
                { name: "Inspirada", href: "/neighborhoods/inspirada" },
                {
                  name: "Mountains Edge",
                  href: "/neighborhoods/mountains-edge",
                },
                { name: "Spring Valley", href: "/listings?q=Spring+Valley" },
              ].map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="flex min-h-11 items-center justify-center rounded-lg bg-slate-50 p-3 text-center text-sm font-medium text-slate-700 no-underline transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Contact Options */}
          <section className="max-w-4xl mx-auto mt-16">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-6 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.contact.src}
            >
              Prefer a call or email?
            </SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href={CTA_TEL}
                className="flex min-h-11 items-center justify-center rounded-xl bg-blue-600 p-6 text-white no-underline transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Phone className="h-8 w-8 mr-4" aria-hidden="true" />
                <div className="text-left">
                  <div className="font-bold text-lg">Call {CTA_PHONE}</div>
                  <div className="text-blue-50">Client line</div>
                </div>
              </a>
              <a
                href={AGENT_EMAIL_MAILTO}
                className="flex min-h-11 items-center justify-center rounded-xl bg-slate-700 p-6 text-white no-underline transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Mail className="h-8 w-8 mr-4" aria-hidden="true" />
                <div className="text-left">
                  <div className="font-bold text-lg">Email</div>
                  <div className="text-slate-300">{AGENT_EMAIL}</div>
                </div>
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto mt-16">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-8 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.contact.src}
            >
              Frequently Asked Questions
            </SectionHeading>
            <div className="space-y-4">
              {contactFaqs.map((faq) => (
                <div key={faq.question} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-pretty text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-600 mt-8">
          Last updated: {MARKET_SNAPSHOT_AS_OF}
        </div>
      </div>
      <GoogleReviewsCta className="bg-white" />
      <VisitOffice compact />
      <PageCTA
        headline="Call before you tour"
        subheadline="I will pull the live MLS file and meet at 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964 or email homes@heyberkshire.com."
      />
    </>
  );
}
