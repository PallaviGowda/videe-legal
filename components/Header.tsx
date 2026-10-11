"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, whatsappUrl } from "@/lib/site";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-navy-950 text-center text-xs text-slate-200 sm:text-sm">
        <Link href="/contact#book" className="container-page block py-2 hover:text-white">
          <span className="hidden sm:inline">The DPDP Rules, 2025 are notified. Is your business ready? </span>
          <span className="sm:hidden">Is your business DPDP ready? </span>
          <span className="font-semibold text-gold-400">Book a discovery call →</span>
        </Link>
      </div>
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-navy-700 ${
                isActive(link.href) ? "text-navy-700" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {whatsappUrl() && (
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:bg-[#1ebe5a]"
            >
              <WhatsAppIcon />
            </a>
          )}
          <Link href="/contact#book" className="btn-primary px-5 py-2.5 text-sm">
            Book Consultation
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-navy-900 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile navigation">
          <div className="container-page flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 font-medium ${isActive(link.href) ? "text-navy-700" : "text-slate-700"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact#book" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Book Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
