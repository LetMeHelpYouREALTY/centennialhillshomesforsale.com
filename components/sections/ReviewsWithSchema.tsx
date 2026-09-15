import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";

type ReviewsWithSchemaProps = {
  className?: string;
  title?: string;
  subtitle?: string;
  googleReviewsUrl?: string;
};

/**
 * Do not emit Review / AggregateRating JSON-LD from invented quotes.
 * Point visitors at the live Google Business Profile instead.
 */
export default function ReviewsWithSchema({
  className,
}: ReviewsWithSchemaProps) {
  return <GoogleReviewsCta className={className} />;
}
