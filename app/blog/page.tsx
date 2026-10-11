import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – DPDP Act Insights",
  description:
    "Articles and practical guides on India's DPDP Act: consent, privacy policies, data processing agreements, Data Fiduciary obligations and startup compliance.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on India's data protection law"
        intro="Plain-English articles to help you understand the DPDP Act and put compliance into practice."
      />
      <section className="bg-slate-50 py-20">
        <div className="container-page">
          {posts.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-600">New posts are coming soon. Check back shortly.</p>
          )}
        </div>
      </section>
      <ConsultBand />
    </>
  );
}
