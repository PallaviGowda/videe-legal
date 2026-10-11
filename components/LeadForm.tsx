"use client";

import { FormEvent, useState } from "react";
import { services, additionalServices } from "@/lib/services";
import { submitLead } from "@/lib/submitLead";
import WhatsAppCta from "./WhatsAppCta";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-100";

export default function LeadForm({ variant = "consultation" }: { variant?: "consultation" | "contact" }) {
  const [status, setStatus] = useState<Status>("idle");
  const isConsultation = variant === "consultation";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data._gotcha) return;
    delete data._gotcha;
    setStatus("sending");
    try {
      const result = await submitLead(
        isConsultation ? "New consultation booking - Videe Legal" : "New contact enquiry - Videe Legal",
        { formType: variant, ...data },
      );
      setStatus(result);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-gold-300 bg-gold-100 p-8 text-center" role="status">
        <h3 className="font-serif text-2xl text-navy-900">Thank you!</h3>
        <p className="mt-2 text-slate-700">
          We have received your request and will get back to you within one business day.
        </p>
        <WhatsAppCta
          label="Need a faster reply? WhatsApp us"
          message="Hello Videe Legal, I just submitted a consultation request on your website."
          className="mt-6"
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">Name *</span>
        <input name="name" required autoComplete="name" className={inputClass} placeholder="Your full name" />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">Company</span>
        <input name="company" autoComplete="organization" className={inputClass} placeholder="Company name" />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">Email *</span>
        <input name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@company.com" />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+91" />
      </label>
      {isConsultation && (
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-slate-700">Service of interest</span>
          <select name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {[...services.map((s) => s.title), ...additionalServices, "Not sure yet"].map((title) => (
              <option key={title}>{title}</option>
            ))}
          </select>
        </label>
      )}
      <label className="block sm:col-span-2">
        <span className="mb-1 block text-sm font-medium text-slate-700">
          {isConsultation ? "Requirement *" : "Message *"}
        </span>
        <textarea
          name="requirement"
          required
          rows={4}
          className={inputClass}
          placeholder="Tell us briefly about your organisation and privacy needs"
        />
      </label>
      <p className="text-xs text-slate-500 sm:col-span-2">
        By submitting this form, you agree that Videe Legal may use your details to respond to your enquiry.
      </p>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
          {status === "sending" ? "Sending..." : isConsultation ? "Book Consultation" : "Send Message"}
        </button>
        {status === "mailto" && (
          <p className="mt-3 text-sm text-slate-600" role="status">
            Your email app has been opened with your details. Please send the email to complete your request.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
