import { CTA_PHONE } from "@/lib/contact";
import { cn } from "lib/utils";

type MlsSearchFormProps = {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
};

export function MlsSearchForm({
  className = "",
  inputClassName = "",
  buttonClassName = "",
}: MlsSearchFormProps) {
  return (
    <form
      action="/listings"
      method="get"
      className={cn(
        "mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row",
        className,
      )}
      role="search"
    >
      <label htmlFor="mls-q" className="sr-only">
        Search Las Vegas MLS by ZIP, street, or community
      </label>
      <input
        id="mls-q"
        name="q"
        type="search"
        autoComplete="off"
        placeholder="ZIP, street, or community"
        className={cn(
          "min-h-11 flex-1 rounded-md border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
          inputClassName,
        )}
      />
      <button
        type="submit"
        className={cn(
          "inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 font-bold text-white hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
          buttonClassName,
        )}
      >
        Search MLS
      </button>
      <p className="sr-only">
        Submits to live listings. Call {CTA_PHONE} if the phrase does not match
        a street or ZIP.
      </p>
    </form>
  );
}
