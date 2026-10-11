import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton() {
  const href = whatsappUrl();

  return (
    <>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="no-print group fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-5 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-[#1ebe5a] focus:outline-none focus:ring-4 focus:ring-green-300 md:flex"
        >
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 motion-reduce:hidden" />
            <WhatsAppIcon className="relative h-7 w-7" />
          </span>
          Chat with us
        </a>
      )}
      <div className="no-print fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(15,31,77,0.12)] md:hidden">
        <Link href="/contact#book" className="flex items-center justify-center bg-navy-700 py-4 text-sm font-semibold text-white">
          Book Consultation
        </Link>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-semibold text-white"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        ) : (
          <a href={`mailto:${site.email}`} className="flex items-center justify-center py-4 text-sm font-semibold text-navy-800">
            Email Us
          </a>
        )}
      </div>
    </>
  );
}
