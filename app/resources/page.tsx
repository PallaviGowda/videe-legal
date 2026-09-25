import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "DPDP Resource Center",
  description:
    "Guides and articles on India's DPDP Act: DPDP vs GDPR, consent requirements, privacy policy checklist, Data Fiduciary obligations and startup compliance.",
  alternates: { canonical: "/resources" },
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="DPDP Resource Center"
        title="Insights on India's data protection law"
        intro="Plain-English guides to help you understand the DPDP Act and put compliance into practice."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-gold-300 hover:shadow-lg"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readTime}
              </p>
              <h2 className="mt-3 font-serif text-xl font-semibold text-navy-900 group-hover:text-navy-700">
                {article.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
              <span className="mt-5 text-sm font-semibold text-gold-600">Read article →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
