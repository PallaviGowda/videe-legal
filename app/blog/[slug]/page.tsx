import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandMark } from "@/components/ExpertiseSection";
import WhatsAppCta from "@/components/WhatsAppCta";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    keywords: post.tags.join(", ") || undefined,
  };

  return (
    <article>
      <header className="hero-bg text-white">
        <div className="container-page max-w-4xl py-16 md:py-20">
          <Link href="/blog" className="text-sm text-gold-300 hover:text-gold-400">
            ← Blog
          </Link>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-slate-300">
            {post.author}
            {post.date && (
              <>
                {" · "}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </>
            )}
            {" · "}
            {post.readTime}
          </p>
        </div>
      </header>
      <div className="container-page max-w-3xl py-16">
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <aside className="mt-14 flex flex-col gap-6 rounded-2xl border border-gold-300 bg-gold-100 p-7 sm:flex-row sm:items-center">
          <BrandMark className="h-16 w-16" />
          <div>
            <h2 className="font-serif text-xl font-semibold text-navy-900">Need help applying this to your business?</h2>
            <p className="mt-2 text-slate-700">Talk to our privacy experts about a tailored DPDP compliance plan.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#book" className="btn-primary">
                Book Consultation
              </Link>
              <WhatsAppCta message={`Hello Videe Legal, I read "${post.title}" and have a question.`} />
            </div>
          </div>
        </aside>
        <p className="mt-8 text-xs text-slate-500">
          This article provides general information and does not constitute legal advice.
        </p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
