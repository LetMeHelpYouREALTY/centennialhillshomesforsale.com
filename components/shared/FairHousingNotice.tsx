import Link from "next/link";

type FairHousingNoticeProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function FairHousingNotice({
  className = "",
  variant = "dark",
}: FairHousingNoticeProps) {
  const linkClass =
    variant === "dark"
      ? "text-slate-300 underline-offset-2 hover:text-white hover:underline"
      : "text-blue-700 underline-offset-2 hover:text-blue-800 hover:underline";

  return (
    <p className={`text-xs leading-relaxed ${className}`}>
      Equal Housing Opportunity. We provide real estate services without regard
      to race, color, religion, sex, handicap, familial status, or national
      origin.{" "}
      <Link href="/fair-housing" className={linkClass}>
        Read the full Fair Housing statement
      </Link>
      .
    </p>
  );
}
