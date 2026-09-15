import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Home } from "lucide-react";
import { CTA_PHONE, CTA_TEL, REALSCOUT_SEARCH_URL } from "@/lib/contact";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to Tour Las Vegas Homes?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Call Dr. Jan Duffy for current MLS matches, a listing strategy, or a
            private showing.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <a
                href={REALSCOUT_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 no-underline"
              >
                <Home className="h-5 w-5" aria-hidden="true" />
                Browse Properties
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 no-underline"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Send a Message
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a
                href={CTA_TEL}
                className="flex items-center gap-2 no-underline"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {CTA_PHONE}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <span className="font-semibold text-white">Free consultation</span>
            <span className="font-semibold text-white">No obligation</span>
            <span className="font-semibold text-white">
              License S.0197614.LLC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
