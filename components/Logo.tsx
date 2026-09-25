import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Videe Legal home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 ring-2 ring-gold-400">
        <svg className="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z M9 12l2 2 4-4"
          />
        </svg>
      </span>
      <span className={`font-serif text-xl font-semibold ${light ? "text-white" : "text-navy-900"}`}>
        Videe <span className="text-gold-500">Legal</span>
      </span>
    </Link>
  );
}
