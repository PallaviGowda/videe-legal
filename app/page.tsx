import Link from "next/link";
import ConsultBand from "@/components/ConsultBand";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import ExpertiseSection, { BrandMark } from "@/components/ExpertiseSection";
import BookingCta from "@/components/BookingCta";
import Methodology from "@/components/Methodology";
import PostCard from "@/components/PostCard";
import ServiceCard from "@/components/ServiceCard";
import TrustPoints from "@/components/TrustPoints";
import WhatsAppCta from "@/components/WhatsAppCta";
import { getAllPosts } from "@/lib/blog";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const urgency = [
  { value: "Up to ₹250 crore", text: "Maximum penalty for certain failures, such as inadequate security safeguards leading to a data breach." },
  { value: "DPDP Rules, 2025", text: "Notified with phased timelines — organisations need to prepare their processes now." },
  { value: "Every business", text: "Handling digital personal data of customers, users or employees in India is within scope." },
];

const highlights = [
  { value: "15+", label: "Years of IT industry experience" },
  { value: "Law + Tech", label: "Combined advisory approach" },
  { value: "DPDP", label: "Focused compliance expertise" },
  { value: "Practical", label: "Business-first recommendations" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-bg text-white">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
            <p className="eyebrow text-gold-400">Techno-Legal DPDP Compliance</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              DPDP compliance that works in your product, not just on paper
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              We bridge India&apos;s DPDP Act and engineering reality — privacy notices, consent architecture, vendor
              DPAs and data flows — so you avoid penalties, close enterprise deals faster and earn customer trust.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/contact#book" className="btn-gold">
                Book a Free Discovery Call
              </Link>
              <BookingCta label="Pick a Time" />
              <WhatsAppCta />
              <Link href="#checklist" className="btn-outline">
                Get Free DPDP Checklist
              </Link>
            </div>
            <TrustPoints light className="mt-6" />
            <Link href="#expertise" className="mt-8 flex max-w-md items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-3 pr-5 transition hover:border-gold-400">
              <BrandMark className="h-14 w-14" />
              <span className="text-sm">
                <span className="block font-semibold text-white">Technology + Law Expertise</span>
                <span className="text-slate-300">15+ years of IT industry experience with legal expertise in data protection</span>
              </span>
            </Link>
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
              <Link href="/contact#book" className="btn-gold mt-7 w-full">
                Find Out in a Discovery Call
              </Link>
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

      <section className="bg-white py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-600">Why Act Now</p>
            <h2 className="section-title mt-3">DPDP compliance is no longer optional</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {urgency.map((item) => (
              <div key={item.value} className="rounded-2xl border-t-4 border-gold-400 bg-navy-950 p-7 text-white shadow-lg">
                <p className="font-serif text-2xl font-semibold text-gold-300">{item.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
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
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-600">Who We Help</p>
            <h2 className="section-title mt-3">Built for teams that handle personal data every day</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {site.personas.map((persona) => (
              <div key={persona.title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-gold-300 hover:shadow-lg">
                <span className="block h-1 w-10 rounded-full bg-gold-400" />
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{persona.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{persona.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Methodology className="bg-slate-50" />

      <ExpertiseSection />

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-gold-600">Blog</p>
              <h2 className="section-title mt-3">Latest DPDP insights</h2>
            </div>
            <Link href="/blog" className="font-semibold text-navy-700 hover:text-gold-600">
              View all posts →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {getAllPosts()
              .slice(0, 3)
              .map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <ConsultBand />
      <CtaSection />
    </>
  );
}
