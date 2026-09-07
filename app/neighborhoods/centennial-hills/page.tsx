import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Mountain, Users, ShoppingBag, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centennial Hills Homes for Sale | 89149 Las Vegas Real Estate",
  description:
    "Homes for sale in Centennial Hills, Las Vegas (89149, 89131, 89143). Town Center, park, and current listings with Dr. Jan Duffy. Call 702-222-1964.",
  keywords: [
    "centennial hills real estate",
    "homes for sale in centennial hills nv",
    "centennial hills las vegas real estate",
    "centennial hills homes for sale",
    "centennial hills town center nv real estate",
    "centennial hills town center nv open houses",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in Centennial Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of the June 2026 realtor.com Centennial Hills neighborhood report, the median listing price was about $525,000 with a median 48 days on market. Ask for a live CMA before you bid.",
      },
    },
    {
      "@type": "Question",
      name: "Which ZIP codes are Centennial Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Centennial Hills listings sit in 89149, 89131, and 89143. ZIP 89144 is Summerlin, not Centennial Hills.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Centennial Hills from the Las Vegas Strip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centennial Hills is approximately 20-25 minutes from the Strip via US-95. The community offers easy freeway access while maintaining a suburban, family-oriented atmosphere away from tourist areas.",
      },
    },
    {
      "@type": "Question",
      name: "What shopping and amenities are near Centennial Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centennial Center provides extensive shopping, dining, and entertainment including Target, Costco, and numerous restaurants. Downtown Summerlin is also easily accessible for additional retail and entertainment options.",
      },
    },
  ],
};

export default function CentennialHillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <span className="text-slate-900">Centennial Hills</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Centennial Hills Homes for Sale in Las Vegas
            </h1>
            <p className="text-xl text-slate-600">
              Northwest Las Vegas listings near Centennial Hills Park and Town Center. Dr. Jan Duffy
              at Berkshire Hathaway HomeServices Nevada Properties.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Centennial Hills Market | June 2026 listing data
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$525,000</div>
                <div className="text-slate-300 text-sm">Median listing (realtor.com, June 2026)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">48 Days</div>
                <div className="text-slate-300 text-sm">Median days on market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">89149</div>
                <div className="text-slate-300 text-sm">Core ZIP (also 89131 / 89143)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">Town Center</div>
                <div className="text-slate-300 text-sm">Retail at Centennial Hills</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Centennial Hills: northwest Las Vegas resale, not 89144 Summerlin
              </h2>
              <p>
                <strong>Centennial Hills</strong> is the northwest Las Vegas corridor around Centennial
                Hills Park, US-95, and Centennial Town Center. Listings cluster in 89149, 89131, and
                89143. If you searched 89144, that ZIP is Summerlin — use the{" "}
                <Link href="/neighborhoods/89144">89144 homes for sale</Link> page instead of touring
                the wrong side of the valley.
              </p>
              <p>
                The community's appeal starts with location. Positioned at the base of the mountains
                with easy access to US-95, Centennial Hills provides quick commutes throughout the
                valley while maintaining a distinctly suburban atmosphere. The mountains are visible
                from most streets, creating the feeling of living closer to nature than Centennial
                Hills' urban conveniences would suggest.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented
                Centennial Hills families since the community's earliest phases. Dr. Jan Duffy knows
                which streets offer the best mountain views, which school zones are most sought-after,
                and which HOAs maintain their communities to the highest standards. This deep local
                knowledge, combined with the BHHS commitment to client service, ensures Centennial
                Hills buyers and sellers receive exceptional representation.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Established northwest streets</h4>
                  </div>
                  <p className="text-slate-600">
                    Centennial Hills has 15–20 years of landscaping and HOA track records on many
                    streets. Compare that to newer product in Skye Canyon: different vintage, different
                    lot premiums. I walk both when the buyer is choosing northwest Las Vegas.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Centennial Center Convenience</h4>
                  </div>
                  <p className="text-slate-600">
                    Centennial Center provides residents with comprehensive shopping, dining, and
                    entertainment options without leaving the neighborhood. Major retailers like Target,
                    Costco, and Home Depot anchor the center, while diverse restaurants and services
                    meet daily needs. Downtown Summerlin is also just minutes away.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Centennial Hills School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Centennial Hills is served by established, well-regarded schools with proven track records:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Ober Elementary (8/10)</li>
                      <li>• Cashman Elementary</li>
                      <li>• Scherkenbach Elementary</li>
                      <li>• Hummel Elementary</li>
                      <li>• McMillan Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Centennial High School (7/10)</li>
                      <li>• Shadow Ridge High School</li>
                      <li>• Arbor View High School</li>
                      <li>• Becker Middle School</li>
                      <li>• Escobedo Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Charter/Private</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pinecrest Academy</li>
                      <li>• Somerset Academy</li>
                      <li>• Coral Academy of Science</li>
                      <li>• Faith Lutheran (nearby)</li>
                      <li>• The Meadows School (nearby)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Centennial Hills</h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Distance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Drive Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rush Hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr><td className="px-4 py-3">Downtown Summerlin</td><td className="px-4 py-3">6 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">18-25 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">30-45 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">25 miles</td><td className="px-4 py-3">30 min</td><td className="px-4 py-3">45-60 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Centennial Hills' proximity to US-95 provides excellent north-south access throughout the valley.
              </p>

              {/* Shopping & Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Centennial Center</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Major Retail:</strong> Target, Costco, Home Depot, Best Buy, Kohl's</li>
                    <li><strong>Grocery:</strong> Smith's, Trader Joe's, Whole Foods nearby</li>
                    <li><strong>Dining:</strong> 50+ restaurants including Red Robin, BJ's, Cheesecake Factory</li>
                    <li><strong>Entertainment:</strong> Century 18 Theatres, bowling, fitness centers</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Centennial Hills Hospital:</strong> Full-service hospital, 24/7 ER, maternity center</li>
                    <li><strong>Southwest Medical:</strong> Multiple primary care and urgent care locations</li>
                    <li><strong>Dignity Health:</strong> Clinics and specialty services</li>
                    <li><strong>VA Medical Center:</strong> 10 minutes for veteran services</li>
                  </ul>
                </div>
              </div>

              {/* Parks & Recreation */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Parks & Recreation</h3>
              <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Centennial Hills offers extensive parks and recreation facilities:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Centennial Hills Park:</strong> 120 acres with sports fields, playground, skate park, dog park</li>
                    <li><strong>Centennial Hills YMCA:</strong> Full fitness facility, pools, youth programs</li>
                    <li><strong>Centennial Hills Library:</strong> Modern library with programs and events</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Angel Park Golf Club:</strong> Two public courses, 36 holes of golf</li>
                    <li><strong>Floyd Lamb Park:</strong> 15 minutes—680 acres, lakes, wildlife viewing</li>
                    <li><strong>Mountain Trails:</strong> Easy access to BLM land for hiking and biking</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current <strong>June 2026 realtor.com neighborhood report</strong> showed a
                Centennial Hills listing median near <strong>$525,000</strong> and about
                <strong> 48 days</strong> on market. That is a listing snapshot, not your house.
                I will pull live MLS comps before you write a number.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in Centennial Hills means
                partnering with agents who understand the community's evolution and can identify
                properties that represent genuine value. Dr. Jan Duffy helps buyers look beyond
                surface features to evaluate factors that matter long-term: construction quality,
                lot positioning, HOA health, and school quality. That expertise translates into
                better purchase decisions and stronger long-term investments.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Centennial Hills is production northwest Las Vegas with a park and a Town Center,
                not Summerlin 89144 and not Tournament Hills. I start every buyer call by locking
                the ZIP, then we tour."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Centennial Hills
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the current median home price in Centennial Hills?
                </h3>
                <p className="text-slate-600">
                  As of the June 2026 realtor.com Centennial Hills neighborhood report, the median
                  listing price was about $525,000 with a median 48 days on market. Ask for a live
                  CMA before you bid.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Which ZIP is Centennial Hills vs 89144?
                </h3>
                <p className="text-slate-600">
                  Centennial Hills listings are mainly 89149, 89131, and 89143. ZIP 89144 is
                  Summerlin (The Arbors, Trails, Queensridge). Mixing them wastes a Saturday of
                  showings.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Do you offer property management in Centennial Hills?
                </h3>
                <p className="text-slate-600">
                  No. Dr. Jan Duffy represents buyers and sellers. She does not manage rentals.
                  If you need a licensed manager, she can refer one.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Are there open houses at Centennial Hills Town Center?
                </h3>
                <p className="text-slate-600">
                  Town Center is the retail node (Target, Costco, and surrounding pads), not a
                  subdivision name. Open houses are listed by street. Call 702-222-1964 for this
                  weekend’s 89149 / 89131 showings.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How far is Centennial Hills from the Las Vegas Strip?
                </h3>
                <p className="text-slate-600">
                  Centennial Hills is approximately 20-25 minutes from the Strip via US-95.
                  The community offers freeway access via US-95 while sitting away from the resort
                  corridor. Drive times are in the commute table below.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What shopping and amenities are near Centennial Hills?
                </h3>
                <p className="text-slate-600">
                  Centennial Center provides extensive shopping, dining, and entertainment
                  including Target, Costco, and numerous restaurants. Downtown Summerlin is
                  also easily accessible for additional retail and entertainment options.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Centennial Hills Home
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for 89149 / 89131 / 89143 listings and Town Center–area
              showings.
            </p>
            <a
              href="tel:+17022221964"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 222-1964
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: September 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
