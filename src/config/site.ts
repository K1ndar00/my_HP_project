// ★ ここを書き換えるだけで、トップページの文言が変わります。空の項目は画面に出ません。
export const site = {
  name: "Kento Kikuchi",
  nameLines: ["Kento", "Kikuchi"],
  role: "Junior Engineer",
  tagline: "駆け出しエンジニア。",
  heroSub: "作って、壊して、直して、また作る。",
  // スクロールすると 1 フレーズずつ浮かび上がる文章。accent: true で強調（グラデーション）
  statement: [
    { text: "駆け出しエンジニアです。" },
    { text: "いまは React を学びながら、" },
    { text: "小さなアプリを作っています。" },
    { text: "作っているのは、" },
    { text: "最初の一歩を小さくする", accent: true },
    { text: "Todo アプリ。" },
    { text: "コードは AI と書く。" },
    { text: "何を作るか、どう分けるかは、" },
    { text: "自分で考える。", accent: true },
    { text: "作ったものと、考えたことを、" },
    { text: "ここに置いていきます。" },
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
