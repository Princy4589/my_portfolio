export default function Crest({ size = 72 }) {
  return (
    <svg
      className="crest"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <polygon
        className="crest-outer"
        points="40,4 72,20 72,52 40,76 8,52 8,20"
      />
      <polygon className="crest-inner" points="40,14 64,26 64,50 40,66 16,50 16,26" />
      <text x="40" y="46" textAnchor="middle">
        PR
      </text>
    </svg>
  );
}
