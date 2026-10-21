import { meterTone } from "../data/player";

export default function Meters({ attributes, compact = false }) {
  return (
    <ul className={`meters ${compact ? "is-compact" : ""}`}>
      {attributes.map((attr) => (
        <li key={attr.key}>
          <span className="meter-copy">
            <span className="meter-label">{attr.label}</span>
            {!compact && <small>{attr.hint}</small>}
          </span>
          <span className="meter-track" aria-hidden="true">
            <span
              className={`meter-fill ${meterTone(attr.value)}`}
              style={{ width: `${(attr.value / 99) * 100}%` }}
            />
          </span>
          <span className="meter-value">{attr.value}</span>
        </li>
      ))}
    </ul>
  );
}
