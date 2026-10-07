export type Link = { label: string; url: string };

export type Work = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  /** 担当・工夫した点・学んだことなど（就活で伝えたい内容） */
  highlights?: string[];
  links?: Link[];
  /** YYYY-MM */
  period?: string;
};

export type DiaryEntry = {
  id: string;
  /** YYYY-MM-DD */
  date: string;
  title: string;
  tags: string[];
  /** 段落ごとに配列で書く */
  body: string[];
};
