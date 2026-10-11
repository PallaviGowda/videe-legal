import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/blog";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-gold-300 hover:shadow-lg"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
        {post.date && " · "}
        {post.readTime}
      </p>
      <h3 className="mt-3 font-serif text-xl font-semibold text-navy-900 group-hover:text-navy-700">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>
      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-5 text-sm font-semibold text-gold-600">Read post →</span>
    </Link>
  );
}
