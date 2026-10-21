export default function Radar({ attributes }) {
  const size = 280;
  const center = size / 2;
  const radius = 86;
  const rings = [0.25, 0.5, 0.75, 1];

  const point = (index, scale) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / attributes.length;
    return [
      center + Math.cos(angle) * radius * scale,
      center + Math.sin(angle) * radius * scale,
    ];
  };

  const shape = attributes
    .map((attr, index) => point(index, attr.value / 99).join(","))
    .join(" ");

  return (
    <svg className="radar" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Radar des compétences">
      {rings.map((ring) => (
        <polygon
          key={ring}
          className="radar-ring"
          points={attributes.map((_, index) => point(index, ring).join(",")).join(" ")}
        />
      ))}
      {attributes.map((attr, index) => {
        const [x, y] = point(index, 1);
        return <line key={attr.key} className="radar-axis" x1={center} y1={center} x2={x} y2={y} />;
      })}
      <polygon className="radar-shape" points={shape} />
      {attributes.map((attr, index) => {
        const [x, y] = point(index, attr.value / 99);
        return <circle key={`${attr.key}-dot`} className="radar-dot" cx={x} cy={y} r="3.5" />;
      })}
      {attributes.map((attr, index) => {
        const [x, y] = point(index, 1.22);
        return (
          <text
            key={`${attr.key}-label`}
            className="radar-label"
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {attr.key}
          </text>
        );
      })}
    </svg>
  );
}
