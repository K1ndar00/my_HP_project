import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About | My Site",
  description: "自己紹介とサイトのスタンスについて",
};

const skills = ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"];

const interests = ["Webデザイン", "プログラミング", "写真", "読書", "音楽"];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          About
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          このサイトと私について。
        </p>
      </div>

      <div className="space-y-12">
        {/* Profile */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            はじめまして
          </h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Web 開発・デザインを中心に活動しています。
              日々の学びや制作物をここに集約し、思考を整理する場として使っています。
            </p>
            <p>
              足踏みしている人の指針になれたら嬉しいですし、
              同じ興味を持つ人や仕事のご縁につながることも歓迎しています。
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            スキル
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            興味・関心
          </h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Site policy */}
        <section className="space-y-4 rounded-xl border border-slate-200 p-6 dark:border-slate-800">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            このサイトについて
          </h2>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">—</span>
              作品・文章・思考の拠点として使っています
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">—</span>
              月1記事以上、制作過程も含めて公開していく予定です
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-slate-400">—</span>
              仕事のご依頼・コラボレーションはコンタクトページからどうぞ
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300 transition-colors"
          >
            作品を見る <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
          >
            お問い合わせ <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
