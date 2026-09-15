"use client";

import { useId, useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone } from "lucide-react";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  TEXT_LINK_CLASS,
} from "@/lib/contact";
import { defaultFaqs, type SiteFaq } from "@/lib/default-faqs";

export type FAQ = SiteFaq;
export { defaultFaqs };

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
                  className="flex min-h-11 w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
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
          <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
            <Phone className="mr-1 h-4 w-4" aria-hidden="true" />
            Call {CTA_PHONE}
          </a>{" "}
          or{" "}
          <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
            <Mail className="mr-1 h-4 w-4" aria-hidden="true" />
            {AGENT_EMAIL}
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
