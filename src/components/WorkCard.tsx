import type { Work } from "../types";
import Tags from "./Tags";

export default function WorkCard({ work }: { work: Work }) {
  return (
    <article className="card">
      <h3>{work.title}</h3>
      {work.period && <p className="meta">{work.period}</p>}
      <p>{work.summary}</p>
      {work.highlights && (
        <ul className="highlights">
          {work.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <Tags tags={work.tags} />
      {work.links && (
        <p className="links">
          {work.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </p>
      )}
    </article>
  );
}
