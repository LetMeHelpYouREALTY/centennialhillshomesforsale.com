import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react";
import { AgentPhoto } from "@/components/shared/AgentPhoto";
import { FairHousingNotice } from "@/components/shared/FairHousingNotice";
import { LocalProofBar } from "@/components/shared/LocalProofBar";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  AGENT_LICENSE,
  CTA_PHONE,
  CTA_TEL,
  OFFICE_HOURS,
  OFFICE_NAP,
  SOCIAL_PROFILES,
} from "@/lib/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <LocalProofBar variant="dark" />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <AgentPhoto variant="footer" className="mb-4" />
            <h2 className="mb-4 text-xl font-bold">
              Berkshire Hathaway HomeServices
            </h2>
            <p className="mb-4 text-sm text-slate-300">
              Nevada Properties — Las Vegas, Henderson, and Summerlin listings
              with Dr. Jan Duffy. License {AGENT_LICENSE}.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_PROFILES.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="Dr. Jan Duffy on Facebook (opens in a new tab)"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_PROFILES.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="Dr. Jan Duffy on Instagram (opens in a new tab)"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_PROFILES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
                aria-label="Dr. Jan Duffy on LinkedIn (opens in a new tab)"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
            <ul className="space-y-2">
              {[
                { href: "/listings", label: "Homes for Sale" },
                { href: "/neighborhoods", label: "Las Vegas Neighborhoods" },
                { href: "/home-valuation", label: "Home Valuation" },
                { href: "/why-berkshire-hathaway", label: "Why BHHS" },
                { href: "/market-insights", label: "Market Insights" },
                { href: "/about", label: "About Dr. Jan" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-bold">Real Estate Services</h2>
            <ul className="space-y-2">
              {[
                { href: "/buyers", label: "Home Buying" },
                {
                  href: "/buyers/california-relocator",
                  label: "California Relocators",
                },
                { href: "/sellers", label: "Home Selling" },
                { href: "/luxury-homes", label: "Luxury Homes" },
                { href: "/55-plus-communities", label: "55+ Communities" },
                { href: "/new-construction", label: "New Construction" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-bold">Contact Dr. Jan Duffy</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <address className="text-sm not-italic text-slate-300">
                  {OFFICE_NAP.street}
                  <br />
                  {OFFICE_NAP.city}, {OFFICE_NAP.state} {OFFICE_NAP.zip}
                </address>
              </li>
              <li className="flex items-center">
                <Phone
                  className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <a
                  href={CTA_TEL}
                  className="text-sm text-slate-300 no-underline transition-colors hover:text-white"
                >
                  {CTA_PHONE}
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  className="mr-3 h-5 w-5 flex-shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <a
                  href={AGENT_EMAIL_MAILTO}
                  className="text-sm text-slate-300 no-underline transition-colors hover:text-white"
                >
                  {AGENT_EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <Clock
                  className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <span className="text-sm text-slate-300">
                  {OFFICE_HOURS.weekday}
                  <br />
                  {OFFICE_HOURS.saturday}
                  <br />
                  {OFFICE_HOURS.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-400 md:text-left">
              © {currentYear} Berkshire Hathaway HomeServices Nevada
              Properties. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/fair-housing"
                className="text-slate-400 no-underline transition-colors hover:text-white"
              >
                Fair Housing
              </Link>
              <Link
                href="/faq"
                className="text-slate-400 no-underline transition-colors hover:text-white"
              >
                FAQ
              </Link>
              <Link
                href="/security-policy"
                className="text-slate-400 no-underline transition-colors hover:text-white"
              >
                Security
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-slate-400 no-underline transition-colors hover:text-white"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Dr. Jan Duffy, REALTOR® | License {AGENT_LICENSE} | Berkshire
            Hathaway HomeServices Nevada Properties
          </p>
          <FairHousingNotice className="mx-auto mt-3 max-w-3xl text-center text-slate-500" />
        </div>
      </div>
    </footer>
  );
}
