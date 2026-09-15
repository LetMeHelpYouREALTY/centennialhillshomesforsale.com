import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Search,
  FileText,
  Home,
  Key,
  CheckCircle,
  DollarSign,
  Shield,
  MapPin,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { withShareImage } from "@/lib/page-seo";
import { PageCTA } from "@/components/shared/PageCTA";
import { VisitOffice } from "@/components/shared/VisitOffice";
import { PageHeroImage } from "@/components/shared/PageHeroImage";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { FAQSchema } from "@/components/SchemaScript";
import { PAGE_HERO_IMAGES, getNeighborhoodImage } from "@/lib/site-images";
import Image from "next/image";
import {
  formatUsd,
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_SOURCE,
} from "@/lib/market-snapshots";

export const metadata: Metadata = withShareImage(
  {
    title: "Home Buying Guide Las Vegas | Berkshire Hathaway HomeServices",
    description:
      "Buy a Las Vegas or Henderson home with Dr. Jan Duffy, BHHS Nevada Properties. Written buyer-broker agreement and live MLS. Call (702) 222-1964.",
    keywords: [
      "buy home Las Vegas",
      "Las Vegas home buyer",
      "Berkshire Hathaway buyer agent",
      "Henderson homes for sale",
      "first time home buyer Las Vegas",
      "California relocation Las Vegas",
      "55+ communities Las Vegas",
    ],
  },
  PAGE_HERO_IMAGES.buyers,
);

const buyerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Buying Services Las Vegas",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17022221964",
  },
  areaServed: "Las Vegas, Henderson, Summerlin, Clark County NV",
  serviceType: "Buyer Representation",
};

const buyerFaqs = [
  {
    question: "How much do I need for a down payment in Las Vegas?",
    answer:
      "Down payments vary by loan type: FHA 3.5%, conventional typically 3–20%, VA 0% when eligible. Nevada down-payment assistance exists for some first-time buyers. Dr. Jan can introduce Clark County lenders. Rates and USDA eligibility are UNKNOWN until the lender quotes them.",
  },
  {
    question: "Should I get pre-approved before looking at homes?",
    answer:
      "Yes. Pre-approval shows sellers you can close and gives you a written budget. In competitive situations, pre-approved buyers have a significant advantage. The process typically takes 1-3 days with proper documentation.",
  },
  {
    question: "Does BHHS help with new construction purchases?",
    answer:
      "Yes. Register Dr. Jan before the first model-home visit. Compensation is disclosed in a written buyer agreement and may be paid by the seller, the buyer, or both — including builder contributions when they exist on that file.",
  },
  {
    question: "What if I'm relocating from another state?",
    answer:
      "Berkshire Hathaway HomeServices has a global referral network. Dr. Jan coordinates virtual tours and a drive-time matrix for inbound buyers — I will not invent a 50,000-agent headcount.",
  },
  {
    question: "How competitive is the Las Vegas housing market?",
    answer:
      "The Las Vegas market moves by village and by week. I will not invent a months-of-inventory figure. Well-priced houses in Summerlin and Henderson can still draw multiple offers. Get a pre-approval and a live MLS pull before you tour.",
  },
  {
    question: "Which neighborhoods have parks, trails, and nearby campuses?",
    answer:
      "Summerlin, Henderson (Green Valley, Inspirada), and Centennial Hills are compared on parks, trail miles, commute times, and named campuses. Dr. Jan matches the street to those priorities.",
  },
];

const buyingSteps = [
  {
    icon: DollarSign,
    title: "Get Pre-Approved for Financing",
    description:
      "Know your budget before you start looking. Dr. Jan can introduce Clark County lenders for FHA, VA, conventional, and down-payment assistance. Rates are UNKNOWN until the lender quotes them.",
  },
  {
    icon: Search,
    title: "Define Your Priorities & Search",
    description:
      "Dr. Jan provides access to live MLS listings, new construction after you register her, and private showings when the listing agent allows. She'll help you match ZIP, commute, square footage, and amenities, then set up alerts so you never miss a new listing.",
  },
  {
    icon: FileText,
    title: "Tour Properties & Make an Offer",
    description:
      "Dr. Jan prices the offer from live comps so it is competitive and still protects your side of the deal. Contingencies are written, not assumed.",
  },
  {
    icon: Home,
    title: "Due Diligence & Inspections",
    description:
      "Coordinate home inspections, review disclosures, and ensure you understand exactly what you're buying. Dr. Jan helps negotiate repairs or credits if issues arise during the inspection period.",
  },
  {
    icon: Key,
    title: "Close on the contract dates",
    description:
      "Dr. Jan Duffy coordinates with lenders, title, and escrow. Close date is on the purchase agreement — often 30-ish days with a conventional loan, longer with FHA, VA, or new construction. I will not promise a 7-day close.",
  },
];

const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    price: `${formatUsd(LISTING_MEDIANS_USD.summerlinNorth)} listing median`,
    description:
      "Master-planned streets, trail network, Downtown Summerlin, Red Rock views",
  },
  {
    name: "Henderson",
    slug: "henderson",
    price: `${formatUsd(LISTING_MEDIANS_USD.hendersonListing)} listing median`,
    description:
      "Parks, trails, civic rec centers, and the McCullough Range backdrop",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    price: `${formatUsd(LISTING_MEDIANS_USD.greenValleySouth)} listing median`,
    description:
      "Henderson villages with mature landscaping near Green Valley Ranch",
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    price: "Live CMA — custom estates",
    description:
      "Guard-gated custom homes in Summerlin with golf and mountain views",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    price: `${formatUsd(LISTING_MEDIANS_USD.northLasVegas)} listing median`,
    description:
      "City listing median — Aliante and Skye Canyon are different maps",
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    price: `${formatUsd(LISTING_MEDIANS_USD.southernHighlands)} listing median`,
    description:
      "Golf-course luxury south of the Strip — confirm village vs city comps",
  },
];

export default function BuyersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buyerSchema) }}
      />
      <FAQSchema faqs={buyerFaqs} />
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Buy Your Las Vegas Home with Confidence
            </h1>
            <PageHeroImage
              src={PAGE_HERO_IMAGES.buyers.src}
              alt={PAGE_HERO_IMAGES.buyers.alt}
            />
            <p className="text-xl text-slate-600 mb-8">
              When you work with a{" "}
              <strong>Berkshire Hathaway HomeServices</strong> buyer&apos;s
              agent, you get written advocacy for your side of the deal.
              Compensation is negotiated in a buyer agreement — it may be paid
              by the seller, the buyer, or a combination. I put the number in
              writing before we tour.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Written
                Buyer Agreement
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Full MLS
                Access
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Written
                offer strategy
              </span>
            </div>
          </div>

          {/* Value Prop */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Why You Need a Buyer's Agent
                </h2>
                <p className="text-slate-300 mb-6">
                  After the 2024 NAR practice changes, buyer-broker compensation
                  is no longer an automatic MLS offer. We sign a written buyer
                  agreement that states how I am paid. The seller may still
                  contribute — that is negotiated, not assumed.{" "}
                  <strong>Berkshire Hathaway HomeServices</strong> agents
                  protect your side of the deal, not the seller's. In a
                  competitive Las Vegas file, a written buyer agreement and live
                  comps beat a ranking slogan.
                </p>
                <ul className="space-y-2">
                  {[
                    "Full MLS access + private showings when listing agents allow",
                    "Written offer strategy on your behalf",
                    "Contract and disclosure review",
                    "Inspection coordination and repair negotiation",
                    "Lender and service provider referrals",
                    "Local market files since 2008",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-2xl font-bold mb-2">
                  Your Agent, Your Advocate
                </p>
                <p className="text-slate-400 mb-4">
                  Dr. Jan Duffy works for your side of the deal throughout the
                  transaction—from the first showing to the closing table.
                </p>
                <div className="text-sm text-slate-500">
                  Serving Las Vegas since 2008 | BHHS Nevada Properties
                </div>
              </div>
            </div>
          </section>

          {/* Buying Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.buyers.src}
              avoidSrc={PAGE_HERO_IMAGES.buyers.src}
            >
              The Home Buying Process in Las Vegas
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Buying a home is one of the most significant financial decisions
              you'll make. Understanding the process helps reduce stress and
              ensures you're prepared at each step. Here's what to expect when
              purchasing a home in Las Vegas with Dr. Jan Duffy and Berkshire
              Hathaway HomeServices.
            </p>
            <div className="space-y-6">
              {buyingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-6 items-start bg-white border border-slate-200 rounded-lg p-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Neighborhood Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.listings.src}
              avoidSrc={PAGE_HERO_IMAGES.buyers.src}
            >
              Las Vegas Neighborhoods for Home Buyers
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Las Vegas ZIPs are different maps. Listing medians below are from{" "}
              {MARKET_SNAPSHOT_SOURCE} as of {MARKET_SNAPSHOT_AS_OF} — not a
              CMA. Match commute, square footage, and HOA docs, not a slogan.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood) => {
                const photo = getNeighborhoodImage(neighborhood.slug);
                return (
                  <Link
                    key={neighborhood.slug}
                    href={`/neighborhoods/${neighborhood.slug}`}
                    className="min-h-11 overflow-hidden rounded-lg border border-slate-200 bg-white no-underline transition-shadow hover:border-blue-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <div className="relative h-32">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <h3 className="font-bold text-slate-900">
                          {neighborhood.name}
                        </h3>
                        <span className="text-right text-sm font-semibold text-blue-600">
                          {neighborhood.price}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">
                        {neighborhood.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/neighborhoods"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex min-h-11 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Explore All Neighborhoods{" "}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Buyer Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.buyers.src}
              avoidSrc={PAGE_HERO_IMAGES.buyers.src}
            >
              Specialized Guidance for Every Buyer
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Different buyers have different needs. A first-time buyer needs
              education and hand-holding through the process. A California
              relocator needs tax guidance and neighborhood matching. A luxury
              buyer needs discretion and access. Dr. Jan Duffy tailors her
              approach to match your specific situation and goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/buyers/california-relocator"
                className="block min-h-11 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="text-3xl mb-4">🌴</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  California Relocators
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Nevada charges 0% state income tax on wages. Home-price
                  differences are not a fixed 40–60% on every street — see live
                  comps. Dr. Jan helps California buyers sequence a sale and a
                  Las Vegas purchase.
                </p>
                <span className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </span>
              </Link>
              <Link
                href="/buyers/first-time-buyers"
                className="block min-h-11 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="text-3xl mb-4">🔑</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  First-Time Buyers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Down payment assistance programs, FHA/VA loans, and builder
                  incentives explained. Step-by-step guidance through your first
                  home purchase.
                </p>
                <span className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </span>
              </Link>
              <Link
                href="/buyers/luxury-homes-las-vegas"
                className="block min-h-11 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Luxury Home Buyers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  $1M+ properties. The Ridges, MacDonald Highlands, Southern
                  Highlands, and Las Vegas Strip views. Price from live comps —
                  not a secret-inventory claim.
                </p>
                <span className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </span>
              </Link>
            </div>
          </section>

          {/* Why BHHS */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.about.src}
              avoidSrc={PAGE_HERO_IMAGES.buyers.src}
            >
              Why Buy with Berkshire Hathaway HomeServices
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Berkshire Hathaway HomeServices Nevada Properties is a franchise
              brokerage. You get a written buyer agreement, a global referral
              network, and one agent of record — not a Buffett slogan.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Written plan</h3>
                <p className="text-slate-600 text-sm">
                  Compensation, showing rules, and the buyer agreement are in
                  writing before we tour.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Global Network
                </h3>
                <p className="text-slate-600 text-sm">
                  Global BHHS referral network for inbound and outbound moves
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Local practice
                </h3>
                <p className="text-slate-600 text-sm">
                  Dr. Jan has served Las Vegas since 2008 with BHHS Nevada
                  Properties
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Written offer strategy
                </h3>
                <p className="text-slate-600 text-sm">
                  Street-level CMA math and written offer strategy
                </p>
              </div>
            </div>
          </section>

          {/* Agent note */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "My job isn't just to show you houses—it's to make sure you
                don't overpay, that you understand what you're buying, and that
                you're protected through every step of the transaction. That's
                what Berkshire Hathaway HomeServices representation means. I
                stay on the file until we close the house that matches the
                written criteria."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties | Serving Las Vegas
                Since 2008
              </cite>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Las Vegas Buyer Listing Snapshot | {MARKET_SNAPSHOT_AS_OF}
            </h2>
            <p className="text-blue-100 text-center max-w-3xl mx-auto mb-8">
              {MARKET_SNAPSHOT_SOURCE}. Listing medians are not a CMA and are
              not days-on-market. Ask for a live pull before you bid.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.lasVegas)}
                </div>
                <div className="text-blue-200 text-sm">
                  Las Vegas listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.hendersonListing)}
                </div>
                <div className="text-blue-200 text-sm">
                  Henderson listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.centennialHills)}
                </div>
                <div className="text-blue-200 text-sm">
                  Centennial Hills listing median
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {formatUsd(LISTING_MEDIANS_USD.northLasVegas)}
                </div>
                <div className="text-blue-200 text-sm">
                  North Las Vegas listing median
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionHeading
              className="text-3xl font-bold text-slate-900 mb-4 text-center"
              fallbackSrc={PAGE_HERO_IMAGES.contact.src}
              avoidSrc={PAGE_HERO_IMAGES.buyers.src}
            >
              Frequently Asked Questions About Buying in Las Vegas
            </SectionHeading>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Get answers to the most common questions from Las Vegas home
              buyers. If you don't see your question here, call Dr. Jan Duffy at
              (702) 222-1964 with the address or ZIP.
            </p>
            <div className="space-y-4">
              {buyerFaqs.map((faq) => (
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
            headline="Ready to tour Las Vegas listings?"
            subheadline="Call Dr. Jan Duffy for a buyer consult. Representation is typically paid by the seller under a listing agreement — confirm current compensation in writing."
            className="rounded-2xl"
            formSource="buyers-hub"
            formHeading="Ask about a Las Vegas home"
            formType="property-search"
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
