import { FAQSchema } from "@/components/SchemaScript";
import FAQSection, {
  defaultFaqs,
  type FAQ,
} from "@/components/sections/FAQSection";

type FAQWithSchemaProps = {
  faqs?: FAQ[];
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
