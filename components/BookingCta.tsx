import { site } from "@/lib/site";

export default function BookingCta({
  label = "Pick a Time on Our Calendar",
  className = "btn-outline",
}: {
  label?: string;
  className?: string;
}) {
  if (!site.bookingUrl) return null;

  return (
    <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className={`gap-2 ${className}`}>
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {label}
    </a>
  );
}
