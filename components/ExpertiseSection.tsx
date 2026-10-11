import Link from "next/link";
import { site } from "@/lib/site";
import WhatsAppCta from "./WhatsAppCta";

export function BrandMark({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <span className={`flex flex-none items-center justify-center rounded-full border-2 border-gold-400 bg-navy-900 ${className}`}>
      <svg className="h-1/2 w-1/2 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z M9 12l2 2 4-4" />
      </svg>
    </span>
  );
}

export function LinkedInButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#004182] focus:outline-none focus:ring-4 focus:ring-blue-200 ${className}`}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
      Follow us on LinkedIn
    </a>
  );
}

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-white py-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-5">
        <div className="hero-bg relative overflow-hidden rounded-3xl p-10 text-white shadow-2xl lg:col-span-2">
          <BrandMark className="h-20 w-20" />
          <p className="mt-8 font-serif text-5xl font-semibold text-gold-300">15+</p>
          <p className="mt-2 text-lg text-slate-200">Years of combined technology and legal experience</p>
          <div className="mt-8 border-t border-white/15 pt-6 text-sm text-slate-300">
            DPDP Act · Privacy Policies · Consent · DPAs · Vendor Risk · Privacy Impact Assessments
          </div>
        </div>
        <div className="lg:col-span-3">
          <p className="eyebrow text-gold-600">Our Expertise</p>
          <h2 className="section-title mt-3">Privacy advice grounded in technology and law</h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Our team understands how systems, products and data actually work. We translate DPDP Act obligations into
            clear, workable processes that legal, technology and business teams can implement together.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {site.expertise.map((item) => (
              <div key={item.title} className="rounded-2xl border-l-4 border-gold-400 bg-slate-50 p-5">
                <h3 className="font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact#book" className="btn-primary">
              Book Consultation
            </Link>
            <WhatsAppCta label="WhatsApp" />
            <LinkedInButton />
          </div>
        </div>
      </div>
    </section>
  );
}
