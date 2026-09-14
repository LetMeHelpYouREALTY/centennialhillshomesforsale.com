"use client";

import { useId, useState } from "react";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { CTA_PHONE, CTA_TEL } from "@/lib/contact";

export interface FAQ {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQ[] = [
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
      "Buyer representation is typically paid by the listing side of the commission. Seller fees are negotiated in writing before you list. Call for a numbers-first consult.",
  },
];

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Straight answers about buying, selling, and working with Dr. Jan Duffy",
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`bg-white py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">{subtitle}</p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => {
            const panelId = `${baseId}-faq-panel-${index}`;
            const buttonId = `${baseId}-faq-button-${index}`;
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="mb-4 overflow-hidden rounded-lg border border-slate-200"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
                >
                  <span className="pr-4 font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      className="h-5 w-5 flex-shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDown
                      className="h-5 w-5 flex-shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                  )}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="border-t border-slate-200 bg-slate-50 px-6 py-4"
                >
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-slate-600">
          Still have a question?{" "}
          <a
            href={CTA_TEL}
            className="inline-flex items-center font-semibold text-blue-700"
          >
            <Phone className="mr-1 h-4 w-4" aria-hidden="true" />
            Call {CTA_PHONE}
          </a>
        </p>
      </div>
    </section>
  );
}

export function getFAQSchemaData(faqs: FAQ[]) {
  return faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}
