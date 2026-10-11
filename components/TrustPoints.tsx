import { site } from "@/lib/site";

export default function TrustPoints({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-sm ${light ? "text-slate-200" : "text-slate-600"} ${className}`}>
      {site.promises.map((promise) => (
        <li key={promise} className="flex items-center gap-2">
          <svg className="h-4 w-4 flex-none text-gold-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {promise}
        </li>
      ))}
    </ul>
  );
}
