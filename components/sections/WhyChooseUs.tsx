import {
  Award,
  Clock,
  Home,
  Mail,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
} from "@/lib/contact";
import { SectionHeading } from "@/components/shared/SectionPhoto";
import { PAGE_HERO_IMAGES } from "@/lib/site-images";

const features = [
  {
    icon: Shield,
    title: "Franchise brokerage",
    description:
      "Berkshire Hathaway HomeServices Nevada Properties — a documented process, not a kiosk script.",
  },
  {
    icon: TrendingUp,
    title: "Local numbers",
    description:
      "Las Vegas and Henderson inventory, ZIP-level pricing, and live CMA math since 2008.",
  },
  {
    icon: Users,
    title: "One agent of record",
    description:
      "Dr. Jan Duffy answers the client line. No callback queue, no assistant filter.",
  },
  {
    icon: Award,
    title: "Written agreements",
    description:
      "Buyer-broker and listing compensation are disclosed in writing. No slogan about “free” representation.",
  },
  {
    icon: Clock,
    title: "Replies during office hours",
    description:
      "Call, text, or email homes@heyberkshire.com. I reply during posted hours — I will not promise a two-hour SLA.",
  },
  {
    icon: Home,
    title: "Written files by type",
    description:
      "Buying, selling, 55+ (Siena, Trilogy, Sun City), luxury, and new construction — each on its own written agreement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <SectionHeading
            className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl"
            fallbackSrc={PAGE_HERO_IMAGES.about.src}
            avoidSrc={PAGE_HERO_IMAGES.homepage.src}
          >
            How Dr. Jan Duffy actually works a file
          </SectionHeading>
          <p className="mx-auto max-w-3xl text-pretty text-xl text-slate-600">
            Berkshire Hathaway HomeServices Nevada Properties — local closings
            with a national brand behind the contract.
          </p>
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.title}
                className="flex flex-col items-center rounded-lg p-6 text-center transition-colors hover:bg-slate-50"
              >
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-pretty text-slate-600">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            About Dr. Jan
          </Link>
          <a
            href={CTA_TEL}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-3 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Call {CTA_PHONE}
          </a>
          <a
            href={AGENT_EMAIL_MAILTO}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            {AGENT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
