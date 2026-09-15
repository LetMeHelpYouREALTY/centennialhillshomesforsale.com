export type SiteFaq = {
  question: string;
  answer: string;
};

export const defaultFaqs: SiteFaq[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We specialize in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, Centennial Hills, and surrounding communities. Coverage includes residential, luxury, and investment properties throughout Southern Nevada.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "Typically, the home buying process takes 30-45 days from offer acceptance to closing. Timelines vary with financing and inspections. We walk the contract dates with you so nothing is a surprise.",
  },
  {
    question: "Do you help with home valuations?",
    answer:
      "Yes. We provide no-obligation home valuations using current market data and comparable sales—whether you are listing or checking equity.",
  },
  {
    question: "What makes you different from other real estate agents?",
    answer:
      "Serving Las Vegas since 2008 with 500+ closings, Dr. Jan Duffy combines local market knowledge with Berkshire Hathaway HomeServices resources. You get one agent of record, not a kiosk script.",
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
