import type { Metadata } from "next";
import Link from "next/link";
import ConsultBand from "@/components/ConsultBand";
import CtaSection from "@/components/CtaSection";
import Methodology from "@/components/Methodology";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import { additionalServices, engagements, scope, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "DPDP Compliance Services",
  description:
    "DPDP gap assessments, privacy policy drafting, consent management, data processing agreement drafting, privacy impact assessments and vendor privacy assessments.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clearly scoped DPDP compliance services"
        intro="Every service has defined deliverables, so you know exactly what you receive. Start small with a quick review or run a complete compliance programme."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} detailed />
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-600">Ways to Work With Us</p>
            <h2 className="section-title mt-3">Start small, scale when you are ready</h2>
            <p className="mt-4 text-slate-600">
              Most clients begin with a free discovery call or a focused review before committing to a larger
              engagement.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engagements.map((engagement, i) => (
              <div
                key={engagement.title}
                className={`flex flex-col rounded-2xl p-7 ${i === 0 ? "hero-bg text-white shadow-xl" : "border border-slate-200 bg-white"}`}
              >
                <span
                  className={`w-max rounded-full px-3 py-1 text-xs font-semibold ${i === 0 ? "bg-gold-400 text-navy-950" : "bg-navy-50 text-navy-700"}`}
                >
                  {engagement.tag}
                </span>
                <h3 className={`mt-4 font-serif text-xl font-semibold ${i === 0 ? "text-white" : "text-navy-900"}`}>
                  {engagement.title}
                </h3>
                <p className={`mt-3 flex-1 text-sm leading-relaxed ${i === 0 ? "text-slate-200" : "text-slate-600"}`}>
                  {engagement.text}
                </p>
                <Link href="/contact#book" className={`mt-6 ${i === 0 ? "btn-gold" : "btn-primary"}`}>
                  {i === 0 ? "Book Free Call" : "Enquire"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Methodology className="bg-slate-50" />

      <section className="py-20">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-gold-600">Scope</p>
            <h2 className="section-title mt-3">What we do — and don&apos;t do</h2>
            <p className="mt-4 text-slate-600">Clear boundaries so there are no surprises.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-7">
            <h3 className="font-semibold text-navy-900">Included in our services</h3>
            <ul className="mt-4 space-y-3">
              {scope.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <span className="font-bold text-green-600" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-7">
            <h3 className="font-semibold text-navy-900">Not included</h3>
            <ul className="mt-4 space-y-3">
              {scope.excluded.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <span className="font-bold text-slate-400" aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-semibold text-navy-900">Also available on request</h3>
            <ul className="mt-3 space-y-2">
              {additionalServices.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <span className="text-gold-500" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ConsultBand title="Which service is right for you?" />
      <CtaSection />
    </>
  );
}
