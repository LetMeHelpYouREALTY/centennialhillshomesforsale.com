import { FAQSchema } from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import { defaultFaqs, type SiteFaq } from "@/lib/default-faqs";

type FAQWithSchemaProps = {
  faqs?: SiteFaq[];
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function FAQWithSchema({
  faqs = defaultFaqs,
  title,
  subtitle,
  className,
}: FAQWithSchemaProps) {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <FAQSection
        faqs={faqs}
        title={title}
        subtitle={subtitle}
        className={className}
      />
    </>
  );
}
