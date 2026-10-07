import { GitFork, X, Camera, Mail, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Contact | My Site",
  description: "お問い合わせ・SNSリンク",
};

const socials = [
  {
    label: "X (Twitter)",
    handle: "@yourhandle",
    href: "https://twitter.com/yourhandle",
    icon: X,
    description: "日々の思考・制作メモを発信しています",
  },
  {
    label: "GitHub",
    handle: "yourhandle",
    href: "https://github.com/yourhandle",
    icon: GitFork,
    description: "制作物のソースコードを公開しています",
  },
  {
    label: "Instagram",
    handle: "@yourhandle",
    href: "https://www.instagram.com/yourhandle",
    icon: Camera,
    description: "写真・ビジュアル系の投稿",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Contact
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          お仕事のご依頼・コラボレーション・雑談など、お気軽にどうぞ。
        </p>
      </div>

      <div className="space-y-10">
        {/* Email */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            メール
          </h2>
          <a
            href="mailto:your@email.com"
            className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 px-6 py-4 text-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-900 transition-colors"
          >
            <Mail
              size={20}
              className="text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors"
            />
            <span className="font-medium">your@email.com</span>
            <ExternalLink size={14} className="text-slate-400 ml-auto" />
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            仕事のご依頼はメールが確実です。2〜3営業日以内に返信します。
          </p>
        </section>

        {/* SNS */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            SNS
          </h2>
          <ul className="space-y-3">
            {socials.map(({ label, handle, href, icon: Icon, description }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 px-5 py-4 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-600 dark:hover:bg-slate-900 transition-colors"
                >
                  <Icon
                    size={20}
                    className="shrink-0 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {label}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {handle}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                      {description}
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-slate-300 dark:text-slate-600"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Note */}
        <section className="rounded-xl bg-slate-50 px-6 py-5 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">
              受け付けているご依頼：
            </strong>
            <br />
            Webサイト制作・フロントエンド開発・UI デザイン・技術ブログ執筆など。
            まずはお気軽にご相談ください。
          </p>
        </section>
      </div>
    </div>
  );
}
