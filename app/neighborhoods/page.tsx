import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { MapPin, Phone, Home, Users, GraduationCap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods | Centennial Hills, Inspirada, Summerlin",
  description:
    "Centennial Hills, Inspirada, Tournament Hills, 89144, and 89138 guides from Dr. Jan Duffy. Call 702-222-1964.",
  keywords: [
    "centennial hills real estate",
    "inspirada henderson",
    "tournament hills real estate",
    "89144 homes for sale",
  ],
};

const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    medianPrice: "$625,000",
    priceChange: "+6.8%",
    description: "Premier master-planned community with parks, trails, and top-rated schools",
    highlights: ["150+ Parks", "Top Schools", "Red Rock Views", "Downtown Summerlin"],
    bestFor: "Families, professionals, outdoor enthusiasts",
  },
  {
    name: "Henderson",
    slug: "henderson",
    medianPrice: "$485,000",
    priceChange: "+5.1%",
    description: "Nevada's second-largest city with master-planned communities and lake access",
    highlights: ["Low Crime Rate", "Excellent Schools", "Lake Las Vegas", "Green Valley"],
    bestFor: "Families, retirees, commuters",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    medianPrice: "$520,000",
    priceChange: "+4.8%",
    description: "Established Henderson community with mature landscaping and excellent amenities",
    highlights: ["Golf Courses", "Walking Trails", "The District", "Mature Trees"],
    bestFor: "Established families, golfers, professionals",
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    medianPrice: "$2,500,000",
    priceChange: "+8.5%",
    description: "Ultra-luxury guard-gated community with custom estates and celebrity residents",
    highlights: ["Guard-Gated", "Custom Estates", "Bear's Best Golf", "Strip Views"],
    bestFor: "Luxury buyers, celebrities, executives",
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    medianPrice: "$750,000",
    priceChange: "+7.2%",
    description: "Master-planned luxury community with championship golf and mountain views",
    highlights: ["Golf Community", "Guard-Gated", "Mountain Views", "Luxury Amenities"],
    bestFor: "Golfers, luxury buyers, families",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    medianPrice: "$385,000",
    priceChange: "+3.2%",
    description: "Rapidly growing area with new construction and a lower entry price band",
    highlights: ["New Construction", "Affordable", "Growing Area", "Family-Friendly"],
    bestFor: "First-time buyers, young families, investors",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    medianPrice: "$550,000",
    priceChange: "+5.5%",
    description: "Newer master-planned community in northwest Las Vegas with mountain views",
    highlights: ["New Homes", "Mountain Views", "Skye Center", "Great Schools"],
    bestFor: "Young families, outdoor enthusiasts, commuters",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    medianPrice: "$495,000",
    priceChange: "+4.8%",
    description: "Northwest Las Vegas community near Centennial Hills Park and Town Center",
    highlights: ["89149", "Park", "Town Center", "US-95"],
    bestFor: "Northwest Las Vegas, park and Town Center access",
  },
  {
    name: "Lone Mountain",
    slug: "lone-mountain",
    medianPrice: "Ask CMA",
    priceChange: "Views/lots",
    description: "Northwest lots and view streets next to the Centennial Hills corridor",
    highlights: ["Mountain views", "Larger lots", "US-95 access", "Resale mix"],
    bestFor: "Buyers comparing northwest Las Vegas lot size",
  },
  {
    name: "Tournament Hills",
    slug: "tournament-hills",
    medianPrice: "Ask CMA",
    priceChange: "Thin inventory",
    description: "Guard-gated Summerlin custom homes near TPC (89134) — not Centennial Hills",
    highlights: ["89134", "TPC Summerlin", "Custom lots", "Gated"],
    bestFor: "Summerlin luxury buyers",
  },
  {
    name: "Summerlin West",
    slug: "summerlin-west",
    medianPrice: "Ask CMA",
    priceChange: "89138",
    description: "Later Howard Hughes villages including Reverence in ZIP 89138",
    highlights: ["89138", "Reverence", "Newer plans", "Foothill views"],
    bestFor: "Summerlin West / 89138 searchers",
  },
  {
    name: "89144 Summerlin",
    slug: "89144",
    medianPrice: "Ask CMA",
    priceChange: "Not CH",
    description: "The Arbors, Trails, and Queensridge — Summerlin ZIP, not Centennial Hills",
    highlights: ["89144", "Summerlin", "Arbors/Trails", "Queensridge"],
    bestFor: "89144 zip code homes for sale",
  },
  {
    name: "Groves at Inspirada",
    slug: "groves-at-inspirada",
    medianPrice: "Townhomes",
    priceChange: "Resale",
    description: "KB Home townhomes inside Inspirada Henderson — new construction closed",
    highlights: ["89044", "KB Home", "Townhomes", "Aventura Park nearby"],
    bestFor: "Groves at Inspirada searchers",
  },
  {
    name: "Red Rock Country Club",
    slug: "red-rock-country-club",
    medianPrice: "Ask CMA",
    priceChange: "Golf",
    description: "Two-course Summerlin golf community in 89135",
    highlights: ["89135", "Two courses", "Gated", "Mixed product"],
    bestFor: "Golf-community buyers",
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    medianPrice: "~$555K",
    priceChange: "May 2026 resale",
    description: "Henderson 89044 master plan — Groves townhomes, Aventura Park, final new-construction pods",
    highlights: ["89044", "Parks", "Groves townhomes", "Tri Pointe / KB / Toll"],
    bestFor: "Henderson new construction and resale",
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    medianPrice: "$475,000",
    priceChange: "+4.5%",
    description: "Southwest Las Vegas master-planned community with mountain views and parks",
    highlights: ["Mountain Views", "Parks", "Growing Area", "Value"],
    bestFor: "Southwest Las Vegas commuters",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas & Henderson Neighborhoods
            </h1>
            <p className="text-xl text-slate-600">
              Explore the best communities in Southern Nevada with Dr. Jan Duffy, your{" "}
              <strong>Berkshire Hathaway HomeServices</strong> neighborhood expert
            </p>
          </div>

          {/* Neighborhood Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {neighborhood.name}
                      </h2>
                      <p className="text-sm text-slate-500">{neighborhood.bestFor}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{neighborhood.medianPrice}</div>
                      <div className="text-sm text-green-600">{neighborhood.priceChange} YoY</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Every Las Vegas ZIP has a different commute and HOA stack. I will not send you to
                89144 when you asked for Centennial Hills, or to Groves when you asked for a
                detached Inspirada lot. That is the job.
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Neighborhood Services */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Neighborhood Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Area Tours</h3>
                <p className="text-slate-400 text-sm">
                  Personalized neighborhood tours to help you experience each community firsthand
                </p>
              </div>
              <div className="text-center">
                <GraduationCap className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">School Research</h3>
                <p className="text-slate-400 text-sm">
                  Detailed school district information, ratings, and enrollment guidance
                </p>
              </div>
              <div className="text-center">
                <Home className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Home Matching</h3>
                <p className="text-slate-400 text-sm">
                  Find homes that match your criteria in the neighborhoods you love
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing a Neighborhood?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dr. Jan Duffy knows every Las Vegas community inside and out. Call for personalized
              neighborhood recommendations.
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

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
