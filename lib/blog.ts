import fs from "fs";
import path from "path";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
};

export type Post = PostMeta & { html: string };

function parseFrontmatter(raw: string) {
  const match = raw.replace(/^\uFEFF/, "").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string>, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    data[line.slice(0, index).trim()] = line
      .slice(index + 1)
      .trim()
      .replace(/^(["'])(.*)\1$/, "$2");
  }
  return { data, content: match[2] };
}

function readPost(slug: string): (Post & { draft: boolean }) | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = parseFrontmatter(fs.readFileSync(file, "utf8"));
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Videe Legal Team",
    tags: (data.tags || "")
      .replace(/^\[|\]$/g, "")
      .split(",")
      .map((tag) => tag.trim().replace(/^(["'])(.*)\1$/, "$2"))
      .filter(Boolean),
    readTime: `${Math.max(1, Math.round(words / 200))} min read`,
    draft: data.draft === "true",
    html: marked.parse(content, { async: false }),
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => readPost(file.replace(/\.md$/, "")))
    .filter((post): post is Post & { draft: boolean } => !!post && !post.draft)
    .map(({ html: _html, draft: _draft, ...meta }) => meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  const post = readPost(slug);
  return post && !post.draft ? post : null;
}

export const formatDate = (date: string) =>
  date ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";
