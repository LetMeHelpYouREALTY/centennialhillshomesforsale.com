export type SiteFaq = {
  question: string;
  answer: string;
};

export const defaultFaqs: SiteFaq[] = [
  {
    question: "What areas do you serve?",
    answer:
      "Las Vegas, Henderson, Summerlin, Green Valley, Centennial Hills, and North Las Vegas. Coverage includes residential, luxury, and investment properties throughout Clark County.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "Escrow length is set in the purchase contract, often 30–45 days for financed purchases. Cash and new construction can close on a different timeline. We walk the contract dates with you so nothing is a surprise.",
  },
  {
    question: "Do you help with home valuations?",
    answer:
      "Yes. We provide a CMA from current MLS comps — whether you are listing or checking equity. The consult is separate from a listing agreement.",
  },
  {
    question: "Who is the agent of record?",
    answer:
      "Serving Las Vegas since 2008, Dr. Jan Duffy is one agent of record at Berkshire Hathaway HomeServices Nevada Properties — not a kiosk script.",
  },
  {
    question: "Can you help with investment properties?",
    answer:
      "Yes. We cover rental properties and investment analysis across the Las Vegas Valley, including cap-rate math and neighborhood inventory—not a generic yield pitch.",
  },
  {
    question: "What are your fees?",
    answer:
      "Buyer-broker compensation is disclosed in a written buyer agreement. It may be paid by the seller, the buyer, or both. Seller fees are negotiated in writing before you list. Call for a numbers-first consult.",
  },
];
