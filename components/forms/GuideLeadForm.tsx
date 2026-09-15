import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { CTA_PHONE, AGENT_EMAIL } from "@/lib/contact";
import { cn } from "@/lib/utils";

type GuideLeadFormProps = {
  source: string;
  heading: string;
  formType?: "contact" | "property-search" | "home-valuation" | "newsletter";
  className?: string;
};

export function GuideLeadForm({
  source,
  heading,
  formType = "contact",
  className,
}: GuideLeadFormProps) {
  return (
    <section
      className={cn(
        "mb-12 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8",
        className,
      )}
      aria-labelledby={`guide-lead-heading-${source}`}
    >
      <h2
        id={`guide-lead-heading-${source}`}
        className="mb-2 text-2xl font-bold text-slate-900"
      >
        {heading}
      </h2>
      <p className="mb-6 text-pretty text-slate-600">
        Send the address or ZIP. Call {CTA_PHONE} or email {AGENT_EMAIL} if you
        want a faster live pull.
      </p>
      <LeadCaptureForm source={source} formType={formType} />
    </section>
  );
}
