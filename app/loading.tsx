export default function Loading() {
  return (
    <div
      className="container mx-auto max-w-4xl px-4 py-16"
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <span className="sr-only">Loading page…</span>
      <div className="space-y-4">
        <div className="h-10 w-2/3 rounded bg-slate-200 motion-safe:animate-pulse" />
        <div className="h-6 w-full rounded bg-slate-100 motion-safe:animate-pulse" />
        <div className="h-6 w-5/6 rounded bg-slate-100 motion-safe:animate-pulse" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="h-40 rounded-xl bg-slate-100 motion-safe:animate-pulse" />
          <div className="h-40 rounded-xl bg-slate-100 motion-safe:animate-pulse" />
        </div>
      </div>
    </div>
  );
}
