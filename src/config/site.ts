// ★ ここを書き換えるだけで、トップページの文言が変わります。空の項目は画面に出ません。
export const site = {
  name: "Kento Kikuchi",
  nameLines: ["Kento", "Kikuchi"],
  role: "Junior Engineer",
  tagline: "駆け出しエンジニア。",
  // About ページの文章。短く、1 行ずつ。
  about: ["駆け出しエンジニアです。", "手を動かしながら、学んでいます。"],
  skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git / GitHub", "HTML / CSS"],
  social: { github: "K1ndar00" },
} as const;

export const navItems = [
  { href: "/works", label: "Works" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;
