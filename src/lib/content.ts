import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "content");

export type Work = {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** 担当・役割（就活で伝えたい情報） */
  role?: string;
  period?: string;
  tags: string[];
  thumbnail?: string;
  github?: string;
  demo?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

function readDir(dir: string) {
  const full = path.join(contentDir, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, file), "utf-8"));
      return { slug: file.replace(/\.md$/, ""), data, content };
    });
}

const byDateDesc = <T extends { date: string }>(a: T, b: T) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

// gray-matter は日付を Date に変換するため、文字列(YYYY-MM-DD)へ揃える
const toDate = (v: unknown) =>
  v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? "1970-01-01");

function toWork(slug: string, data: Record<string, unknown>): Work {
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: toDate(data.date),
    role: data.role ? String(data.role) : undefined,
    period: data.period ? String(data.period) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    thumbnail: data.thumbnail ? String(data.thumbnail) : undefined,
    github: data.github ? String(data.github) : undefined,
    demo: data.demo ? String(data.demo) : undefined,
  };
}

function toPost(slug: string, data: Record<string, unknown>, content: string): Post {
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? content.replace(/[#*`>\n]/g, " ").trim().slice(0, 120)),
    date: toDate(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };
}

export const getAllWorks = (): Work[] =>
  readDir("works").map((f) => toWork(f.slug, f.data)).sort(byDateDesc);

export function getWork(slug: string) {
  const f = readDir("works").find((x) => x.slug === slug);
  return f ? { work: toWork(f.slug, f.data), html: marked.parse(f.content) as string } : null;
}

export const getAllPosts = (): Post[] =>
  readDir("blog").map((f) => toPost(f.slug, f.data, f.content)).sort(byDateDesc);

export function getPost(slug: string) {
  const f = readDir("blog").find((x) => x.slug === slug);
  return f
    ? { post: toPost(f.slug, f.data, f.content), html: marked.parse(f.content) as string }
    : null;
}
