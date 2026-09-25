import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import { additionalServices, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "DPDP Compliance Services",
  description:
    "DPDP gap assessments, privacy policy drafting, consent management, privacy impact assessments, vendor privacy assessments and privacy awareness training.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical DPDP compliance services"
        intro="Choose a focused engagement or a complete compliance programme tailored to your organisation's size, sector and risk profile."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} detailed />
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-gold-600">Also Available</p>
            <h2 className="section-title mt-3">Flexible advisory options</h2>
            <p className="mt-4 text-slate-600">
              Need continuous support? We offer packages and retainers designed for growing businesses.
            </p>
            <Link href="/contact#book" className="btn-primary mt-8">
              Discuss Your Requirements
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {additionalServices.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 p-5 font-medium text-navy-900">
                <span className="mr-2 text-gold-500">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
