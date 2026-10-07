// ★ まずここを自分の情報に書き換えてください。空のままにした項目は画面に表示されません。
export const site = {
  name: "Your Name",
  role: "Web Developer / Student",
  status: "就職活動中",
  tagline: "つくることで、考える。",
  intro: [
    "ここに自己紹介を書きます。学んでいること、興味のある分野、これから挑戦したいことなど。",
    "就職活動では、作ったものとその過程を見てもらうためにこのサイトを使っています。",
  ],
  skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  interests: ["Webデザイン", "プログラミング", "読書"],
  email: "",
  social: {
    github: "K1ndar00",
    x: "",
  },
  // 記事を書いているサービスのユーザー名。入力すると記事一覧が自動で取り込まれます。
  articles: {
    note: "",
    qiita: "",
    zenn: "",
  },
} as const;

export const navItems = [
  { href: "/works", label: "Works" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
