import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Videe Legal combines 15+ years of IT industry experience with legal expertise to deliver practical DPDP Act compliance advisory.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Videe Legal"
        title="Privacy advisory built on technology and law"
        intro="We help organisations understand, implement and sustain compliance with India's Digital Personal Data Protection Act."
      />
      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Our story</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
              <p>
                Videe Legal was founded with a simple belief: data protection compliance should be clear, practical and
                achievable for every business — from early-stage startups to established enterprises.
              </p>
              <p>
                With more than 15 years in the IT industry and a strong legal foundation, we understand both the letter
                of the law and the realities of building and running technology. This lets us design compliance
                programmes that fit naturally into your products, processes and culture.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-navy-900 p-8 text-white">
            <h2 className="font-serif text-2xl text-gold-300">Our mission</h2>
            <p className="mt-4 leading-relaxed text-slate-200">
              To simplify Digital Personal Data Protection compliance for businesses and help them earn the trust of
              their customers through privacy-first practices.
            </p>
            <h2 className="mt-8 font-serif text-2xl text-gold-300">Who we work with</h2>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>Startups and SMEs</li>
              <li>Technology and SaaS companies</li>
              <li>E-commerce and digital platforms</li>
              <li>Enterprises and their vendors</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <p className="eyebrow text-center text-gold-600">Our Expertise</p>
          <h2 className="section-title mt-3 text-center">What makes us different</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {site.expertise.map((s) => (
              <div key={s.title} className="rounded-2xl border-l-4 border-gold-400 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ConsultBand title="Let's make your business DPDP ready" />
    </>
  );
}
