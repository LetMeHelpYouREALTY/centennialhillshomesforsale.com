export default function Loading() {
  return (
    <div
      className="container mx-auto max-w-4xl px-4 py-16"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Loading page</span>
      <div className="space-y-4">
        <div className="h-10 w-2/3 animate-pulse rounded bg-slate-200" />
        <div className="h-6 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-6 w-5/6 animate-pulse rounded bg-slate-100" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="h-40 animate-pulse rounded-xl bg-slate-100" />
          <div className="h-40 animate-pulse rounded-xl bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
