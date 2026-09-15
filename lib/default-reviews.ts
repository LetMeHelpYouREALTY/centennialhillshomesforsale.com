export type SiteReview = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
};

/** Do not invent named testimonials. Use GoogleReviewsCta instead. */
export const defaultReviews: SiteReview[] = [];
