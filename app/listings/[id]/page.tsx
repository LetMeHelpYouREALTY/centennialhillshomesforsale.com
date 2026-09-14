import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { CTA_PHONE, CTA_TEL, REALSCOUT_SEARCH_URL } from "@/lib/contact";
import { MlsDisclaimer } from "@/components/shared/MlsDisclaimer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Property Details | Las Vegas & Henderson Real Estate",
  description:
    "View detailed information about this property listing in Las Vegas or Henderson, NV.",
};

// This would typically fetch from RealScout API
async function getProperty(id: string) {
  // Placeholder - replace with RealScout API call
  return {
    id,
    name: "Modern Luxury Home",
    location: "Summerlin, Las Vegas, NV",
    price: "$850,000",
    image: "/Image/hero_bg_1.jpg",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
    yearBuilt: 2018,
    description:
      "Stunning modern home in desirable Summerlin community. Features open floor plan, updated kitchen, and beautiful backyard. Close to shopping, parks, and the Las Vegas Strip corridor.",
  };
}

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = await getProperty(id);

  return (
    <>
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: "Properties", href: "/listings" },
              { name: property.name, href: "" },
            ]}
          />

          {/* Property Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {property.name}
            </h1>
            <div className="flex items-center text-slate-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </div>
            <div className="text-3xl font-bold text-blue-600">
              {property.price}
            </div>
          </div>

          {/* Main Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={property.image}
              alt={`${property.name} in ${property.location}`}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Property Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Property Details
              </h2>
              <p className="text-slate-700 mb-6">{property.description}</p>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Features
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      {property.bedrooms} Bedrooms
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      {property.bathrooms} Bathrooms
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      {property.squareFeet.toLocaleString()} sq ft
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      Built {property.yearBuilt}
                    </span>
                  </div>
                </div>
              </div>

              {/* RealScout Widget Integration Point */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Schedule a Showing
                </h3>
                <p className="text-slate-700 mb-4">
                  Contact us to schedule a private viewing of this property.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Contact Agent</Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Contact Agent
                </h3>
                <p className="text-slate-600 mb-4">Dr. Jan Duffy</p>
                <p className="text-sm text-slate-600 mb-6">
                  Berkshire Hathaway HomeServices Nevada Properties
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <a href={CTA_TEL}>Call {CTA_PHONE}</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Send Message</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={REALSCOUT_SEARCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Search Live MLS
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <MlsDisclaimer className="mt-8" />
        </div>
      </main>
    </>
  );
}
