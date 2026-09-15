import Link from "next/link";

type FairHousingNoticeProps = {
  className?: string;
  variant?: "dark" | "light" | "onBrand";
};

export function FairHousingNotice({
  className = "",
  variant = "dark",
}: FairHousingNoticeProps) {
  let linkClass: string;
  let textClass: string;
  switch (variant) {
    case "dark":
      linkClass =
        "text-slate-300 underline-offset-2 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";
      textClass = "";
      break;
    case "light":
      linkClass =
        "text-blue-700 underline-offset-2 hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600";
      textClass = "";
      break;
    case "onBrand":
      linkClass =
        "text-blue-50 underline-offset-2 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";
      textClass = "text-white";
      break;
    default: {
      const _exhaustive: never = variant;
      throw new Error(`Unhandled Fair Housing variant: ${_exhaustive}`);
    }
  }

  return (
    <p className={`text-xs leading-relaxed ${textClass} ${className}`.trim()}>
      Equal Housing Opportunity. I provide real estate services without regard
      to race, color, religion, sex, handicap, familial status, or national
      origin.{" "}
      <Link href="/fair-housing" className={linkClass}>
        Read the full Fair Housing statement
      </Link>
      .
    </p>
  );
}
