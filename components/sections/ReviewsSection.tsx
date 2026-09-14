"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { OFFICE_NAP } from "@/lib/contact";
import { agentStats } from "@/lib/site-config";

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
}

export const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Tom Sanders",
    location: "Las Vegas, NV",
    rating: 5,
    text: "Dr. Duffy made our home buying experience seamless. Her knowledge of the Las Vegas market is unmatched, and she guided us through every step with professionalism and care.",
    image: "/Image/person1.jpeg",
    date: "2025-11-15",
  },
  {
    id: 2,
    name: "Vitor Palmer",
    location: "Henderson, NV",
    rating: 5,
    text: "We couldn't be happier with our new home! The entire process was smooth, and Dr. Duffy's attention to detail and negotiation skills saved us thousands. Highly recommend!",
    image: "/Image/person_2-min.jpg",
    date: "2025-10-22",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Summerlin, NV",
    rating: 5,
    text: "As first-time buyers, we were nervous about the process. Dr. Duffy patiently explained everything and helped us find the right home in our budget. Thank you!",
    image: "/Image/person_4-min.jpg",
    date: "2025-09-08",
  },
];

export const aggregateRating = {
  ratingValue: agentStats.averageRating,
  reviewCount: agentStats.reviewCount,
  bestRating: 5,
  worstRating: 1,
};

interface ReviewsSectionProps {
  reviews?: Review[];
  title?: string;
  subtitle?: string;
  googleReviewsUrl?: string;
  className?: string;
}

export default function ReviewsSection({
  reviews = defaultReviews,
  title = "What Clients Say",
  subtitle = "Recent notes from buyers and sellers who closed with Dr. Jan Duffy",
  googleReviewsUrl = OFFICE_NAP.reviewsUrl,
  className = "",
}: ReviewsSectionProps) {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className={`bg-slate-50 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">{subtitle}</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(aggregateRating.ratingValue)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold tabular-nums text-slate-900">
              {aggregateRating.ratingValue}
            </span>
            <span className="text-slate-600">
              ({aggregateRating.reviewCount}+ reviews)
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="mb-4 flex items-center">
                <div className="relative mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                  {review.image ? (
                    <Image
                      src={review.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-200">
                      <span className="text-sm text-slate-400">
                        {review.name[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-slate-900">
                    {review.name}
                  </h3>
                  <p className="text-sm text-slate-600">{review.location}</p>
                </div>
              </div>

              <div
                className="mb-4 flex items-center"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="relative">
                <Quote
                  className="absolute -left-2 -top-2 h-8 w-8 text-blue-100"
                  aria-hidden="true"
                />
                <p className="relative z-10 pl-4 text-slate-700">
                  {review.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            Read more reviews on Google
            <Star
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function getReviewSchemaData(reviews: Review[]) {
  return reviews.map((review) => ({
    author: review.name,
    rating: review.rating,
    text: review.text,
    date: review.date,
  }));
}
