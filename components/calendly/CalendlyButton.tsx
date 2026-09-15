"use client";

import { useEffect } from "react";
import { CALENDLY_SHOWING_URL } from "@/lib/contact";
import {
  ensureCalendlyScript,
  ensureCalendlyStylesheet,
} from "./load-calendly";
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
  className = "inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
  children,
}: CalendlyButtonProps) {
  useEffect(() => {
    ensureCalendlyStylesheet();
    ensureCalendlyScript();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.Calendly) {
      event.preventDefault();
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children || text}
      <span className="sr-only">
        {" "}
        Opens a scheduling popup, or a new tab if the widget does not load
      </span>
    </a>
  );
}
