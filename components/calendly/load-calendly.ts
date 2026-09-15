import "./types";

export const CALENDLY_WIDGET_CSS =
  "https://assets.calendly.com/assets/external/widget.css";
export const CALENDLY_WIDGET_JS =
  "https://assets.calendly.com/assets/external/widget.js";

const CALENDLY_SCRIPT_ATTR = "data-calendly-js";

/** Inject Calendly CSS once. Avoids a render-blocking <link> on every route. */
export function ensureCalendlyStylesheet(): void {
  if (typeof document === "undefined") return;
  if (document.querySelector('link[data-calendly-css="true"]')) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_WIDGET_CSS;
  link.setAttribute("data-calendly-css", "true");
  document.head.appendChild(link);
}

type CalendlyScriptOptions = {
  onLoad?: () => void;
  onError?: () => void;
};

/** Load widget.js once so Button, Badge, and Widget do not share a Script id. */
export function ensureCalendlyScript(
  options: CalendlyScriptOptions = {},
): void {
  if (typeof document === "undefined") return;
  const { onLoad, onError } = options;

  const existing = document.querySelector<HTMLScriptElement>(
    `script[${CALENDLY_SCRIPT_ATTR}="true"]`,
  );
  if (existing) {
    if (window.Calendly) {
      onLoad?.();
    } else {
      if (onLoad) existing.addEventListener("load", onLoad, { once: true });
      if (onError) existing.addEventListener("error", onError, { once: true });
    }
    return;
  }

  const script = document.createElement("script");
  script.src = CALENDLY_WIDGET_JS;
  script.async = true;
  script.setAttribute(CALENDLY_SCRIPT_ATTR, "true");
  if (onLoad) script.addEventListener("load", onLoad, { once: true });
  if (onError) script.addEventListener("error", onError, { once: true });
  document.body.appendChild(script);
}
