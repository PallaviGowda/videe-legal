import Link from "next/link";
import { BrandMark } from "./ExpertiseSection";
import TrustPoints from "./TrustPoints";
import WhatsAppCta from "./WhatsAppCta";

export default function ConsultBand({
  title = "Not sure where to start with DPDP compliance?",
}: {
  title?: string;
}) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page">
        <div className="hero-bg flex flex-col items-center gap-8 rounded-3xl p-8 text-white md:flex-row md:p-12">
          <BrandMark className="h-24 w-24 shadow-xl" />
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">{title}</h2>
            <p className="mt-3 text-slate-200">
              Talk to our privacy experts. Get clarity on your obligations and a practical plan for your business.
            </p>
            <TrustPoints light className="mt-5 justify-center md:justify-start" />
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto">
            <Link href="/contact#book" className="btn-gold">
              Book Consultation
            </Link>
            <WhatsAppCta />
          </div>
        </div>
      </div>
    </section>
  );
}
