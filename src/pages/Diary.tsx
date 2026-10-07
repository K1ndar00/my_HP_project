import { useState } from "react";
import { diary } from "../data/diary";
import DiaryItem from "../components/DiaryItem";
import Tags from "../components/Tags";

const sorted = [...diary].sort((a, b) => b.date.localeCompare(a.date));
const allTags = [...new Set(diary.flatMap((e) => e.tags))];

export default function Diary() {
  const [tag, setTag] = useState<string | null>(null);
  const list = tag ? sorted.filter((e) => e.tags.includes(tag)) : sorted;

  return (
    <section>
      <h1>Diary</h1>
      <Tags tags={allTags} active={tag} onSelect={(t) => setTag(t === tag ? null : t)} />
      {list.map((e) => (
        <DiaryItem key={e.id} entry={e} />
      ))}
    </section>
  );
}
