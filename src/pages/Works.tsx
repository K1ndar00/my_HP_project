import { useState } from "react";
import { works } from "../data/works";
import WorkCard from "../components/WorkCard";
import Tags from "../components/Tags";

const allTags = [...new Set(works.flatMap((w) => w.tags))];

export default function Works() {
  const [tag, setTag] = useState<string | null>(null);
  const list = tag ? works.filter((w) => w.tags.includes(tag)) : works;

  return (
    <section>
      <h1>Works</h1>
      <Tags tags={allTags} active={tag} onSelect={(t) => setTag(t === tag ? null : t)} />
      <div className="grid">
        {list.map((w) => (
          <WorkCard key={w.id} work={w} />
        ))}
      </div>
    </section>
  );
}
