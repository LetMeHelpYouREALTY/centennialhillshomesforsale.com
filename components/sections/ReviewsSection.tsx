import { GoogleReviewsCta } from "@/components/shared/GoogleReviewsCta";

type ReviewsSectionProps = {
  className?: string;
};

/**
 * Do not render invented named testimonials or a 4.9 stars count.
 * Point visitors at the live Google Business Profile instead.
 */
export default function ReviewsSection({ className }: ReviewsSectionProps) {
  return <GoogleReviewsCta className={className} />;
}
