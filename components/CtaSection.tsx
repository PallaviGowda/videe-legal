import ChecklistDownload from "./ChecklistDownload";

export default function CtaSection() {
  return (
    <section id="checklist" className="scroll-mt-20 bg-white py-20">
      <div className="container-page">
        <div className="hero-bg grid gap-8 overflow-hidden rounded-3xl p-8 text-white md:p-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-gold-400">Free Resource</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">DPDP Readiness Checklist</h2>
            <p className="mt-4 text-slate-200">
              A practical checklist covering governance, consent, data principal rights, security and vendor
              management — assess where your organisation stands in minutes.
            </p>
          </div>
          <ChecklistDownload />
        </div>
      </div>
    </section>
  );
}
