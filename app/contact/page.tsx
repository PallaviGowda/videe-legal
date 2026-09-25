import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description: "Book a DPDP compliance consultation with Videe Legal or send us your privacy questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your privacy compliance"
        intro="Book a consultation or send us a message — we typically respond within one business day."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div id="book" className="scroll-mt-24 rounded-2xl bg-white p-7 shadow-sm md:p-10 lg:col-span-2">
            <h2 className="section-title">Book a Consultation</h2>
            <p className="mt-2 text-slate-600">Share a few details and we&apos;ll schedule a discovery call.</p>
            <div className="mt-8">
              <LeadForm variant="consultation" />
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy-900 p-7 text-white">
              <h2 className="font-serif text-xl text-gold-300">Get in touch</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-400">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="text-white hover:text-gold-300">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400">LinkedIn</dt>
                  <dd>
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-300">
                      Connect with Videe Legal
                    </a>
                  </dd>
                </div>
                {site.whatsapp && (
                  <div>
                    <dt className="text-slate-400">WhatsApp</dt>
                    <dd>
                      <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-300">
                        Chat with us
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="font-serif text-xl text-navy-900">Quick question?</h2>
              <p className="mt-2 text-sm text-slate-600">Send us a message and we&apos;ll get back to you.</p>
              <div className="mt-5">
                <LeadForm variant="contact" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
