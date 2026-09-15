"use client";

import { useEffect } from "react";
import Script from "next/script";
import { CALENDLY_SHOWING_URL } from "@/lib/contact";
import { CALENDLY_WIDGET_JS, ensureCalendlyStylesheet } from "./load-calendly";
import "./types";

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({
  url = CALENDLY_SHOWING_URL,
  text = "Schedule a Showing",
  className = "inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors",
  children,
}: CalendlyButtonProps) {
  useEffect(() => {
    ensureCalendlyStylesheet();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.Calendly) {
      event.preventDefault();
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <>
      <Script
        id="calendly-widget-js"
        src={CALENDLY_WIDGET_JS}
        strategy="lazyOnload"
      />
      <a href={url} onClick={handleClick} className={className}>
        {children || text}
      </a>
    </>
  );
}
