import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { checklist } from "@/lib/checklist";

export const metadata: Metadata = {
  title: "DPDP Readiness Checklist",
  description: "A practical DPDP Act readiness checklist for businesses.",
  robots: { index: false, follow: true },
};

export default function ChecklistPage() {
  return (
    <section className="py-16">
      <div className="container-page max-w-4xl">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-gold-600">Videe Legal · Free Resource</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-navy-900">DPDP Readiness Checklist</h1>
            <p className="mt-3 text-slate-600">Tick each control your organisation already has in place.</p>
          </div>
          <PrintButton />
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {checklist.map((group) => (
            <div key={group.area} className="break-inside-avoid rounded-2xl border border-slate-200 p-6">
              <h2 className="font-serif text-xl font-semibold text-navy-900">{group.area}</h2>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <label className="flex gap-3 text-sm text-slate-700">
                      <input type="checkbox" className="mt-0.5 h-4 w-4 flex-none accent-navy-700" />
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="no-print mt-12 rounded-2xl bg-navy-900 p-8 text-center text-white">
          <h2 className="font-serif text-2xl text-gold-300">Found gaps?</h2>
          <p className="mt-2 text-slate-200">Our DPDP Gap Assessment turns this checklist into a clear action plan.</p>
          <Link href="/contact#book" className="btn-gold mt-6">
            Book Consultation
          </Link>
        </div>
        <p className="mt-8 text-xs text-slate-500">
          This checklist is a general guide and does not constitute legal advice.
        </p>
      </div>
    </section>
  );
}
