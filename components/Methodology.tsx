import { methodology } from "@/lib/services";

export default function Methodology({ className = "bg-white" }: { className?: string }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-600">How We Work</p>
          <h2 className="section-title mt-3">A structured, four-step methodology</h2>
          <p className="mt-4 text-slate-600">
            Every engagement follows the same proven framework, so you always know what happens next and what you
            receive at each stage.
          </p>
        </div>
        <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          <span className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-gold-300 via-navy-200 to-gold-300 md:block" aria-hidden="true" />
          {methodology.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-navy-900 font-serif text-xl font-semibold text-gold-300 shadow-lg ring-2 ring-gold-400">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              <p className="mt-4 rounded-full border border-gold-300 bg-gold-100 px-4 py-1.5 text-xs font-semibold text-navy-900">
                {step.output}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
