"use client";

import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REALSCOUT_SEARCH_URL } from "@/lib/contact";
import { MlsDisclaimer } from "@/components/shared/MlsDisclaimer";

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
}

const PropertyCard = ({ property }: { property: Property }) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
    <div className="relative h-48 md:h-64">
      <Image
        src={property.image}
        alt={`${property.name} in ${property.location}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
      <div className="absolute right-4 top-4 rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold tabular-nums text-white">
        {property.price}
      </div>
    </div>
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold text-slate-900">{property.name}</h3>
      <p className="mb-4 text-slate-600">{property.location}</p>
      <div className="mb-4 flex items-center justify-between text-slate-600">
        <div className="flex items-center gap-1">
          <Bed className="h-4 w-4 text-blue-600" aria-hidden="true" />
          <span className="text-sm tabular-nums">{property.bedrooms} Beds</span>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="h-4 w-4 text-blue-600" aria-hidden="true" />
          <span className="text-sm tabular-nums">
            {property.bathrooms} Baths
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Square className="h-4 w-4 text-blue-600" aria-hidden="true" />
          <span className="text-sm tabular-nums">
            {property.squareFeet.toLocaleString()} sq ft
          </span>
        </div>
      </div>
      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
        <Link href={`/listings/${property.id}`}>
          View Details{" "}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  </div>
);

const properties: Property[] = [
  {
    id: 1,
    name: "Modern Luxury Home",
    location: "Summerlin, Las Vegas, NV",
    price: "$850,000",
    image: "/Image/hero_bg_1.jpg",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
  },
  {
    id: 2,
    name: "Spacious 3-Bedroom Home",
    location: "Henderson, NV",
    price: "$625,000",
    image: "/Image/hero_bg_2.jpg",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2400,
  },
  {
    id: 3,
    name: "Elegant Estate",
    location: "Green Valley, Henderson, NV",
    price: "$1,200,000",
    image: "/Image/hero_bg_3.jpg",
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4500,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Featured Properties
            </h2>
            <p className="text-lg text-slate-600">
              Sample Las Vegas and Henderson homes — live inventory is on MLS
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <a
              href={REALSCOUT_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Properties
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <MlsDisclaimer className="mt-8" />
      </div>
    </section>
  );
}
