// ★ ここを書き換えるだけで、トップページの文言が変わります。空の項目は画面に出ません。
export const site = {
  name: "Kento Kikuchi",
  nameLines: ["Kento", "Kikuchi"],
  role: "Aspiring Engineer",
  tagline: "しがないエンジニア志望。",
  heroSub: "作って、壊して、直して、また作る。",
  // スクロールすると 1 フレーズずつ浮かび上がる文章。accent: true で強調（グラデーション）
  statement: [
    { text: "しがないエンジニア志望です。" },
    { text: "派手な実績は、まだありません。" },
    { text: "でも、" },
    { text: "手を動かすこと", accent: true },
    { text: "だけは、" },
    { text: "毎日続けています。" },
    { text: "作ったものと、考えたことを、ここに置いていきます。", accent: true },
  ],
  skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git / GitHub", "HTML / CSS"],
  email: "",
  social: { github: "K1ndar00" },
  // 記事を書いているサービスのユーザー名。入力すると記事一覧に自動で取り込まれます。
  articles: { note: "", qiita: "", zenn: "" },
} as const;

export const navItems = [
  { href: "/works", label: "Works" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;
