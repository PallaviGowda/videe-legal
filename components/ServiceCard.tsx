import type { Service } from "@/lib/services";

export default function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <article
      id={service.slug}
      className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
        </svg>
      </span>
      <h3 className="mt-5 font-serif text-xl font-semibold text-navy-900">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-slate-600">{service.summary}</p>
      {detailed && (
        <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-700">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
