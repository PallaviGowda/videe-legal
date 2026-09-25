"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/lib/submitLead";

export default function ChecklistDownload() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    if (data._gotcha) return;
    delete data._gotcha;
    setSending(true);
    setError(false);
    try {
      await submitLead("DPDP checklist download - Videe Legal", { formType: "checklist-download", ...data });
      router.push("/dpdp-checklist");
    } catch {
      setError(true);
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="sr-only" htmlFor="checklist-name">
        Name
      </label>
      <input
        id="checklist-name"
        name="name"
        required
        placeholder="Your name"
        autoComplete="name"
        className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:border-gold-400 focus:outline-none"
      />
      <label className="sr-only" htmlFor="checklist-email">
        Work email
      </label>
      <input
        id="checklist-email"
        name="email"
        type="email"
        required
        placeholder="Work email"
        autoComplete="email"
        className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:border-gold-400 focus:outline-none"
      />
      <button type="submit" disabled={sending} className="btn-gold whitespace-nowrap">
        {sending ? "Please wait..." : "Get Free Checklist"}
      </button>
      {error && (
        <p className="text-sm text-red-300 sm:basis-full" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
