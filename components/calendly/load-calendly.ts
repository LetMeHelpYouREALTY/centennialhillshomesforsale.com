export const CALENDLY_WIDGET_CSS =
  "https://assets.calendly.com/assets/external/widget.css";
export const CALENDLY_WIDGET_JS =
  "https://assets.calendly.com/assets/external/widget.js";

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
