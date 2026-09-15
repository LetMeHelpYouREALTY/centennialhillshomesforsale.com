"use client";

import { useEffect } from "react";
import "./globals.css";
import {
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
  OFFICE_NAP,
  TEXT_LINK_CLASS,
} from "@/lib/contact";

export default function GlobalError({
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
    <html lang="en">
      <body className="bg-white text-slate-900">
        <main className="min-h-screen pb-20 pt-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-slate-900">
              Something went wrong
            </h1>
            <p className="mb-8 text-pretty text-slate-600">
              Reload this page, or call {CTA_PHONE} while this screen is fixed.
              Office:{" "}
              <a
                href={OFFICE_NAP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={TEXT_LINK_CLASS}
              >
                {OFFICE_NAP.full}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              . Email{" "}
              <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
                {AGENT_EMAIL}
              </a>
              .
            </p>
            <div className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={reset}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Try again
              </button>
              <a
                href="/"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Home
              </a>
              <a
                href="/listings"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Search listings
              </a>
              <a
                href={CTA_TEL}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Call {CTA_PHONE}
              </a>
              <a
                href={AGENT_EMAIL_MAILTO}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {AGENT_EMAIL}
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
