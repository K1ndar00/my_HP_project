import type { DiaryEntry } from "../types";
import Tags from "./Tags";

export default function DiaryItem({ entry }: { entry: DiaryEntry }) {
  return (
    <article className="entry">
      <time className="meta" dateTime={entry.date}>
        {entry.date}
      </time>
      <h3>{entry.title}</h3>
      {entry.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <Tags tags={entry.tags} />
    </article>
  );
}
