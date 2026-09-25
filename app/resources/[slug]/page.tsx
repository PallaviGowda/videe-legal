import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/resources/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt, publishedTime: article.date },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/resources/${article.slug}`,
  };

  return (
    <article>
      <header className="hero-bg text-white">
        <div className="container-page max-w-4xl py-16 md:py-20">
          <Link href="/resources" className="text-sm text-gold-300 hover:text-gold-400">
            ← Resource Center
          </Link>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-5xl">{article.title}</h1>
          <p className="mt-4 text-slate-300">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · {article.readTime}
          </p>
        </div>
      </header>
      <div className="container-page max-w-3xl py-16">
        <p className="text-lg leading-relaxed text-slate-700">{article.excerpt}</p>
        {article.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl font-semibold text-navy-900">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <aside className="mt-14 rounded-2xl border border-gold-300 bg-gold-100 p-7">
          <h2 className="font-serif text-xl font-semibold text-navy-900">Need help applying this to your business?</h2>
          <p className="mt-2 text-slate-700">Speak with Videe Legal about a tailored DPDP compliance plan.</p>
          <Link href="/contact#book" className="btn-primary mt-5">
            Book Consultation
          </Link>
        </aside>
        <p className="mt-8 text-xs text-slate-500">
          This article provides general information and does not constitute legal advice.
        </p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
