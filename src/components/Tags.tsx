type Props = {
  tags: string[];
  active?: string | null;
  onSelect?: (tag: string) => void;
};

export default function Tags({ tags, active, onSelect }: Props) {
  return (
    <ul className="tags">
      {tags.map((t) => (
        <li key={t}>
          {onSelect ? (
            <button className={t === active ? "tag active" : "tag"} onClick={() => onSelect(t)}>
              {t}
            </button>
          ) : (
            <span className="tag">{t}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
