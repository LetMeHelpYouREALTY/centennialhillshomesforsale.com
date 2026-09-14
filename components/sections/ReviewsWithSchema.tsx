import { ReviewSchema } from "@/components/SchemaScript";
import ReviewsSection, {
  aggregateRating,
  defaultReviews,
  type Review,
} from "@/components/sections/ReviewsSection";

type ReviewsWithSchemaProps = {
  reviews?: Review[];
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
