export function MlsDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-xs leading-relaxed text-slate-600 ${className}`}
      role="note"
    >
      Listing information is provided exclusively for consumers&apos; personal,
      non-commercial use and may not be used for any purpose other than to
      identify prospective properties. Data is deemed reliable but is not
      guaranteed. © Greater Las Vegas Association of REALTORS®. All rights
      reserved. Listing attribution and brokerage identification appear on each
      MLS record.
    </p>
  );
}
