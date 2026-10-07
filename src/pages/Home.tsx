import { Link } from "react-router-dom";
import { site } from "../data/site";
import { works } from "../data/works";
import { diary } from "../data/diary";
import WorkCard from "../components/WorkCard";
import DiaryItem from "../components/DiaryItem";

const sortedDiary = [...diary].sort((a, b) => b.date.localeCompare(a.date));

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>{site.name}</h1>
        <p className="lead">{site.tagline}</p>
      </section>

      <section>
        <h2>About</h2>
        <p>{site.intro}</p>
        <h3>Skills</h3>
        <ul className="tags">
          {site.skills.map((s) => (
            <li key={s} className="tag">{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Works</h2>
        <div className="grid">
          {works.slice(0, 3).map((w) => (
            <WorkCard key={w.id} work={w} />
          ))}
        </div>
        <p><Link to="/works">すべての作品 →</Link></p>
      </section>

      <section>
        <h2>Latest Diary</h2>
        {sortedDiary.slice(0, 2).map((e) => (
          <DiaryItem key={e.id} entry={e} />
        ))}
        <p><Link to="/diary">日記一覧 →</Link></p>
      </section>

      <section>
        <h2>Contact</h2>
        <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
        <p className="links">
          {site.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </p>
      </section>
    </>
  );
}
