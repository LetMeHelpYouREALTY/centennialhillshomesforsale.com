import Link from "next/link";
import { cn } from "@/lib/utils";

export const HUB_CONVERSION_LINKS = [
  { href: "/buyers/first-time-buyers", label: "First-Time Las Vegas Buyers" },
  { href: "/relocation", label: "Las Vegas Relocation" },
  { href: "/home-valuation", label: "Request a Las Vegas CMA" },
] as const;

const LINK_CLASS =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";

type HubConversionLinksProps = {
  className?: string;
};

export function HubConversionLinks({ className }: HubConversionLinksProps) {
  return (
    <nav
      aria-label="First-time buyer, relocation, and CMA pages"
      className={cn(
        "mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row",
        className,
      )}
    >
      {HUB_CONVERSION_LINKS.map((item) => (
        <Link key={item.href} href={item.href} className={LINK_CLASS}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
