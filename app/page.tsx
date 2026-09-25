import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import ServiceCard from "@/components/ServiceCard";
import { articles } from "@/lib/articles";
import { services } from "@/lib/services";

const highlights = [
  { value: "15+", label: "Years of IT industry experience" },
  { value: "Law + Tech", label: "Combined advisory approach" },
  { value: "DPDP", label: "Focused compliance expertise" },
  { value: "Practical", label: "Business-first recommendations" },
];

const steps = [
  { title: "Discover", text: "Understand your business, data flows and current privacy practices." },
  { title: "Assess", text: "Identify gaps against DPDP obligations and prioritise risks." },
  { title: "Implement", text: "Draft policies, design consent journeys and embed controls." },
  { title: "Sustain", text: "Train teams and provide ongoing advisory as your business grows." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-bg text-white">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
            <p className="eyebrow text-gold-400">DPDP Act Compliance Consulting</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Navigate India&apos;s DPDP Act with Confidence
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Helping organisations build privacy-first businesses through practical and legally compliant solutions.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact#book" className="btn-gold">
                Book Consultation
              </Link>
              <Link href="#checklist" className="btn-outline">
                Get Free DPDP Checklist
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur">
              <h2 className="font-serif text-xl text-gold-300">Is your business DPDP ready?</h2>
              <ul className="mt-5 space-y-4 text-slate-100">
                {[
                  "Do you know what personal data you collect and why?",
                  "Are your consent flows valid and easy to withdraw?",
                  "Can you respond to a data breach on time?",
                  "Are your vendors handling data responsibly?",
                ].map((q) => (
                  <li key={q} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-navy-950">
                      ?
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="font-serif text-2xl font-semibold text-navy-800 md:text-3xl">{h.value}</p>
              <p className="mt-1 text-sm text-slate-600">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-600">Our Services</p>
            <h2 className="section-title mt-3">End-to-end DPDP compliance support</h2>
            <p className="mt-4 text-slate-600">
              From first assessment to ongoing advisory, we help you meet your obligations without slowing your
              business down.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="font-semibold text-navy-700 hover:text-gold-600">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-gold-600">Why Videe Legal</p>
            <h2 className="section-title mt-3">Where technology meets law</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Unlike traditional law firms, we combine over 15 years of IT industry experience with legal expertise.
              We understand how your systems, products and data actually work — so our advice is practical,
              implementable and aligned with your business goals.
            </p>
            <Link href="/about" className="btn-primary mt-8">
              Learn About Us
            </Link>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 p-6">
                <span className="font-serif text-3xl font-semibold text-gold-500">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-gold-600">Resource Center</p>
              <h2 className="section-title mt-3">Latest DPDP insights</h2>
            </div>
            <Link href="/resources" className="font-semibold text-navy-700 hover:text-gold-600">
              Browse all articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-gold-300 hover:shadow-lg"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{article.readTime}</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-navy-900 group-hover:text-navy-700">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
