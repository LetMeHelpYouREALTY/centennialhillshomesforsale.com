"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import {
  CALENDLY_SHOWING_URL,
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  CTA_PHONE,
  CTA_TEL,
} from "@/lib/contact";
import { CALENDLY_WIDGET_JS, ensureCalendlyStylesheet } from "./load-calendly";
import "./types";

type CalendlyWidgetProps = {
  url?: string;
  minWidth?: string;
  height?: string;
};

/**
 * Inline Calendly embed. The iframe is third-party, so we wait until it is
 * near the viewport (same IntersectionObserver pattern as RealScoutListings)
 * before loading widget.js and calling initInlineWidget — that keeps the
 * contact page LCP on our own content. The reserved height stays in the
 * first paint so the layout does not jump when the widget mounts.
 */
export default function CalendlyWidget({
  url = CALENDLY_SHOWING_URL,
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [loadWidget, setLoadWidget] = useState(false);
  const [busy, setBusy] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = widgetRef.current;
    if (!node) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setLoadWidget(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoadWidget(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadWidget) {
      return;
    }

    ensureCalendlyStylesheet();
    let cancelled = false;

    const initWidget = () => {
      if (cancelled || !widgetRef.current || !window.Calendly) {
        return false;
      }
      if (initializedRef.current) {
        setBusy(false);
        return true;
      }

      widgetRef.current.innerHTML = "";

      const widgetDiv = document.createElement("div");
      widgetDiv.className = "calendly-inline-widget";
      widgetDiv.setAttribute("data-url", url);
      widgetDiv.style.minWidth = minWidth;
      widgetDiv.style.height = height;
      widgetDiv.style.width = "100%";
      widgetRef.current.appendChild(widgetDiv);

      window.Calendly.initInlineWidget({
        url,
        parentElement: widgetDiv,
      });
      initializedRef.current = true;
      setBusy(false);
      return true;
    };

    if (initWidget()) {
      return;
    }

    const intervalId = setInterval(() => {
      if (initWidget()) {
        clearInterval(intervalId);
      }
    }, 100);
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      if (!initializedRef.current) {
        setBusy(false);
        setFailed(true);
      }
    }, 10000);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [loadWidget, url, minWidth, height]);

  if (failed) {
    return (
      <div
        className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
        style={{ minWidth, height, width: "100%" }}
        aria-busy={false}
        role="status"
      >
        <p className="text-pretty text-slate-700">
          The scheduler did not load. Call, email, or open Calendly in a new
          tab.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={CTA_TEL}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white no-underline hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Call {CTA_PHONE}
          </a>
          <a
            href={AGENT_EMAIL_MAILTO}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {AGENT_EMAIL}
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 no-underline hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Open Calendly
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {loadWidget ? (
        <Script
          id="calendly-widget-js"
          src={CALENDLY_WIDGET_JS}
          strategy="lazyOnload"
          onError={() => {
            setBusy(false);
            setFailed(true);
          }}
        />
      ) : null}
      <div
        ref={widgetRef}
        className="min-h-[400px]"
        style={{ minWidth, height, width: "100%" }}
        aria-busy={busy}
        aria-label="Schedule a showing with Dr. Jan Duffy"
      />
    </>
  );
}
