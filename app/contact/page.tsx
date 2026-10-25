import type { Metadata } from "next";
import BookingCta from "@/components/BookingCta";
import { BrandMark, LinkedInButton } from "@/components/ExpertiseSection";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import TrustPoints from "@/components/TrustPoints";
import WhatsAppCta from "@/components/WhatsAppCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description: "Book a DPDP compliance consultation with Videe Legal, email us or chat with us on WhatsApp.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "Share your requirement using the form or WhatsApp.",
  "We respond within one business day to schedule a call.",
  "A discovery call to understand your business and data.",
  "A clear proposal with practical next steps.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your privacy compliance"
        intro="Book a consultation or message us on WhatsApp — we typically respond within one business day."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div id="book" className="scroll-mt-24 rounded-2xl bg-white p-7 shadow-sm md:p-10 lg:col-span-2">
            <h2 className="section-title">Book a Free Discovery Call</h2>
            <p className="mt-2 text-slate-600">Share a few details and we&apos;ll schedule a no-obligation call.</p>
            <TrustPoints className="mt-5" />
            <div className="mt-8">
              <LeadForm variant="consultation" />
            </div>
          </div>
          <aside className="space-y-6">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="hero-bg flex items-center gap-4 p-6 text-white">
                <BrandMark className="h-16 w-16" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-300">Get in touch</p>
                  <p className="font-serif text-xl font-semibold">Talk to our privacy experts</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <BookingCta label="Pick a Time on Our Calendar" className="btn-primary" />
                <WhatsAppCta />
                <LinkedInButton />
                <a href={`mailto:${site.email}`} className="text-center text-sm font-medium text-navy-700 hover:text-gold-600">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="font-serif text-xl text-navy-900">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-slate-700">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold-100 font-semibold text-gold-600">
                      {i + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
