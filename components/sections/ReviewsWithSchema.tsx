import { ReviewSchema } from "@/components/SchemaScript";
import ReviewsSection from "@/components/sections/ReviewsSection";
import {
  aggregateRating,
  defaultReviews,
  type SiteReview,
} from "@/lib/default-reviews";

type ReviewsWithSchemaProps = {
  reviews?: SiteReview[];
  title?: string;
  subtitle?: string;
  googleReviewsUrl?: string;
  className?: string;
};

export default function ReviewsWithSchema({
  reviews = defaultReviews,
  title,
  subtitle,
  googleReviewsUrl,
  className,
}: ReviewsWithSchemaProps) {
  return (
    <>
      <ReviewSchema
        reviews={reviews.map((review) => ({
          author: review.name,
          rating: review.rating,
          text: review.text,
          date: review.date,
        }))}
        aggregateRating={aggregateRating}
      />
      <ReviewsSection
        reviews={reviews}
        title={title}
        subtitle={subtitle}
        googleReviewsUrl={googleReviewsUrl}
        className={className}
      />
    </>
  );
}
