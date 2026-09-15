"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CTA_PHONE, CTA_TEL, OFFICE_NAP } from "@/lib/contact";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-white pb-20 pt-8">
      <div className="container mx-auto max-w-xl px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-slate-900">
          Something went wrong
        </h1>
        <p className="mb-8 text-slate-600">
          Reload this page, or call {CTA_PHONE} and we will pull the listing
          from MLS while this screen is fixed. Office: {OFFICE_NAP.full}.
        </p>
        <div className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Home
          </Link>
          <Link
            href="/listings"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Search listings
          </Link>
          <a
            href={CTA_TEL}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Call {CTA_PHONE}
          </a>
        </div>
      </div>
    </main>
  );
}
