import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Globe,
  DollarSign,
  TrendingUp,
  CheckCircle,
  BarChart,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { FAQSchema } from "@/components/SchemaScript";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Sell Your Las Vegas Home | Berkshire Hathaway HomeServices",
    description:
      "Sell your Las Vegas or Henderson home with comps-based pricing and Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Request a CMA. Call (702) 222-1964.",
    keywords: [
      "sell home Las Vegas",
      "Las Vegas listing agent",
      "Berkshire Hathaway sell house",
      "Henderson home selling",
      "what is my home worth Las Vegas",
      "Las Vegas real estate agent",
      "Summerlin home selling",
    ],
  },
  PAGE_HERO_IMAGES.sellers,
);

const sellerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Selling Services Las Vegas",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17022221964",
  },
  areaServed: "Las Vegas, Henderson, Summerlin, Clark County NV",
  serviceType: "Seller Representation",
};

const sellingBenefits = [
  {
    icon: Globe,
    title: "Listing marketing in writing",
    description:
      "Professional photography, virtual tours, drone when the lot warrants it, MLS syndication, and BHHS network exposure. The marketing plan is on the listing consult — not a slogan.",
  },
  {
    icon: Users,
    title: "Global Buyer Network",
    description:
      "Berkshire Hathaway HomeServices referral network means your listing can reach qualified relocation buyers — especially important for Las Vegas inbound demand.",
  },
  {
    icon: BarChart,
    title: "Comps-based pricing",
    description:
      "Dr. Jan has been serving Las Vegas since 2008, which means accurate pricing that attracts buyers without leaving money on the table. Overpriced homes sit and lose value; well-priced homes generate competition and sell for more.",
  },
  {
    icon: DollarSign,
    title: "Skilled Negotiation",
    description:
      "From offer review to closing negotiations, Dr. Jan protects your interests and the net sheet. Street-level CMA math beats a career-volume slogan.",
  },
];

const sellerFaqs = [
  {
    question: "How long will it take to sell my Las Vegas home?",
    answer:
      "UNKNOWN without a CMA and a live MLS pull. Well-priced houses can go fast; overpriced houses sit. I will not publish a 28-day average as if it were your street.",
  },
  {
    question: "What do I need to do to prepare my home for sale?",
    answer:
      "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional staging consultation yield the highest ROI. She'll walk through your home and identify exactly what improvements will generate the best return.",
  },
  {
    question: "How does Berkshire Hathaway market my home?",
    answer:
      "Your home gets professional photography, virtual tours, drone video when the lot warrants it, MLS syndication, BHHS network exposure, and paid digital we agree on in writing. Ask for that plan on the listing consult.",
  },
  {
    question: "What are your commission rates?",
    answer:
      "Commission is negotiable. Dr. Jan walks through listing-side compensation, buyer-broker agreements, and net-sheet math on the consult. I will not claim marketing “typically more than offsets” the fee — your net is the CMA plus the offer, not a slogan.",
  },
  {
    question: "Should I wait for prices to go higher?",
    answer:
      "UNKNOWN without a CMA on your street. I will not publish an unsourced year-over-year appreciation figure as if it were your house. Timing the market is a guess; listing when you are ready, priced to the live comps, is the plan I can actually run.",
  },
  {
    question: "Do I need to be moved out before listing?",
    answer:
      "Not necessarily. Many homes sell while occupied. However, vacant homes are easier to show and stage. Dr. Jan will help you develop a strategy based on your specific situation and timeline.",
  },
];

const sellingProcess = [
  {
    step: 1,
    title: "CMA / home valuation",
    description:
      "Dr. Jan analyzes comparable sales, market conditions, and your home's unique features to determine optimal pricing. You'll understand exactly what your home could sell for before making any decisions.",
  },
  {
    step: 2,
    title: "Preparation & Staging",
    description:
      "Receive a customized preparation checklist to maximize your home's appeal. Dr. Jan provides staging consultations and can recommend contractors for any needed repairs or updates.",
  },
  {
    step: 3,
    title: "Professional Marketing",
    description:
      "Your home is photographed professionally, with virtual tours and drone video when the lot warrants it. It is listed on the MLS, shared through the BHHS network, and promoted with digital we agree on in writing.",
  },
  {
    step: 4,
    title: "Showings & Open Houses",
    description:
      "Dr. Jan coordinates all showings and open houses, gathering feedback from every visit. You'll receive regular updates on activity and market response.",
  },
  {
    step: 5,
    title: "Offer Review & Negotiation",
    description:
      "When offers come in, Dr. Jan analyzes each one for price, terms, contingencies, and buyer qualification. She negotiates on your behalf to get the best possible outcome.",
  },
  {
    step: 6,
    title: "Contract to Close",
    description:
      "Dr. Jan manages every detail from accepted offer to closing—inspections, appraisals, repairs, and coordination with title, escrow, and the buyer's agent. You'll close with confidence.",
  },
];

const includedServices = [
  "Professional photography & virtual tour",
  "Drone video for properties with views or large lots",
  "Comprehensive market analysis & pricing strategy",
  "MLS listing plus BHHS network exposure",
  "Berkshire Hathaway global network exposure",
  "Social media marketing campaign",
  "Targeted digital advertising",
  "Open house coordination",
  "Showing feedback & regular updates",
  "Written offer negotiation",
  "Transaction coordination through closing",
  "Staging consultation with recommendations",
];

export default function SellersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sellerSchema) }}
      />
      <FAQSchema faqs={sellerFaqs} />
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sell Your Las Vegas Home to the Comps
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.sellers.src}
              alt={PAGE_HERO_IMAGES.sellers.alt}
            />
            <p className="text-xl text-slate-600 mb-8">
              When you list with{" "}
              <strong>Berkshire Hathaway HomeServices</strong>, you get
              professional photography, comps-based pricing, and a listing plan
              in writing. Dr. Jan Duffy has been serving Las Vegas since
              2008—helping sellers price to the comps and negotiate the net
              sheet.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />{" "}
                No-obligation CMA
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> MLS
                listing marketing
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Written
                offer strategy
              </span>
            </div>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Las Vegas Seller Listing Snapshot | {MARKET_SNAPSHOT_AS_OF}
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              {MARKET_SNAPSHOT_SOURCE}. These are listing medians, not your net.
              Days on market and list-to-sale ratio need a live MLS pull.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.lasVegas)}
                </div>
                <div className="text-slate-300 text-sm">
                  Las Vegas listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.hendersonListing)}
                </div>
                <div className="text-slate-300 text-sm">
                  Henderson listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.centennialHills)}
                </div>
                <div className="text-slate-300 text-sm">
                  Centennial Hills listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">CMA</div>
                <div className="text-slate-300 text-sm">
                  Your street, not a headline
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.sellers.src}
              avoidSrc={PAGE_HERO_IMAGES.sellers.src}
            >
              The Berkshire Hathaway HomeServices Selling Advantage
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Not all listing plans are the same. When you choose a Berkshire
              Hathaway HomeServices agent, you get MLS marketing, a global
              referral network, and a net-sheet conversation before you sign.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {sellingBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Selling Process */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.sellersListing.src}
              avoidSrc={PAGE_HERO_IMAGES.sellers.src}
            >
              The Home Selling Process
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Selling a home involves many steps, but you don't have to navigate
              them alone. Dr. Jan Duffy manages every detail from initial
              valuation to closing day, keeping you informed and in control
              throughout the process.
            </p>
            <div className="space-y-6">
              {sellingProcess.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start bg-white rounded-lg p-6 border border-slate-200"
                >
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seller Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.sellers.src}
              avoidSrc={PAGE_HERO_IMAGES.sellers.src}
            >
              Specialized Services for Every Seller
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Every seller's situation is unique. Whether you're upgrading,
              downsizing, dealing with a life change, or relocating for work,
              Dr. Jan provides customized strategies that address your specific
              needs and timeline.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/sellers/move-up"
                className="block min-h-11 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="text-3xl mb-4">🏡</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Move-Up Sellers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Leverage your equity into the next house. Coordinated buy &
                  sell strategies.
                </p>
                <span className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </span>
              </Link>
              <Link
                href="/sellers/downsizing"
                className="block min-h-11 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="text-3xl mb-4">🌴</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Downsizing
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Extract equity, simplify life. 55+ communities and
                  low-maintenance options.
                </p>
                <span className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </span>
              </Link>
              <Link
                href="/sellers/divorce-probate"
                className="block min-h-11 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Divorce & Probate
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Sensitive situations handled with discretion and
                  professionalism.
                </p>
                <span className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </span>
              </Link>
              <Link
                href="/sellers/relocation"
                className="block min-h-11 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="text-3xl mb-4">✈️</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Relocation
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Moving for work? BHHS nationwide network coordinates both
                  ends.
                </p>
                <span className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </span>
              </Link>
            </div>
          </section>

          {/* Listing quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-6 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.sellersListing.src}
              avoidSrc={PAGE_HERO_IMAGES.sellers.src}
            >
              Pricing from live comps
            </SectionHeading>
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Pricing your home to the comps from day one is the listing
                decision that matters. Overpriced homes sit, and every extra day
                is carrying cost plus buyer leverage. I use a live CMA and files
                since 2008. Confirm the live file, not a close-to-ask slogan."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties | Serving Las Vegas
                Since 2008
              </cite>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.sellersListing.src}
              avoidSrc={PAGE_HERO_IMAGES.sellers.src}
            >
              What's Included When You List with BHHS
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              When you list with Dr. Jan Duffy at Berkshire Hathaway
              HomeServices, you receive MLS syndication, photos, and a written
              listing plan. Sale price comes from comps, not a slogan.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedServices.map((item) => (
                <div
                  key={item}
                  className="flex items-center bg-white p-4 rounded-lg border border-slate-200"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Home Valuation CTA */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  What's Your Home Worth?
                </h2>
                <p className="text-blue-100 mb-6">
                  Request a CMA from current MLS comps. Dr. Jan has served Las
                  Vegas since 2008. A city median is not your sold price — the
                  worksheet uses sold comps, actives, and the condition of this
                  house.
                </p>
                <Link
                  href="/home-valuation"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-8 py-3 font-bold text-blue-600 no-underline hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                >
                  Request a CMA
                </Link>
              </div>
              <div className="text-center">
                <TrendingUp className="h-24 w-24 text-blue-200 mx-auto mb-4" />
                <p className="text-2xl font-bold">
                  {formatUsd(LISTING_MEDIANS_USD.lasVegas)}
                </p>
                <p className="text-blue-200">
                  Las Vegas listing median ({MARKET_SNAPSHOT_AS_OF})
                </p>
                <p className="text-blue-300 text-sm mt-2">
                  Listing median, not a sold CMA
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.sellers.src}
            >
              Frequently Asked Questions About Selling in Las Vegas
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Selling your home raises many questions. Here are answers to the
              most common concerns from Las Vegas home sellers.
            </p>
            <div className="space-y-4">
              {sellerFaqs.map((faq) => (
                <div key={faq.question} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <VisitOffice compact />
          <PageCTA
            headline="Ready to price a listing?"
            subheadline="Call Dr. Jan Duffy for a listing consult and a live CMA. No obligation."
            className="rounded-2xl"
            formSource="sellers-hub"
            formHeading="Request a listing CMA"
            formType="home-valuation"
          />
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Last updated: September 2026
        </p>
      </main>
      <RealScoutListings />
    </>
  );
}
