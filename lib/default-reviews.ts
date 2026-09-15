import { agentStats } from "@/lib/site-config";

export type SiteReview = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
};

export const defaultReviews: SiteReview[] = [
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
