export default function LeafBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
      className={`pointer-events-none absolute opacity-20 ${className}`}
    >
      <path
        d="M60 10 C60 50 60 80 60 110"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[25, 45, 65, 85].map((y, i) => (
        <g key={y}>
          <ellipse
            cx={i % 2 === 0 ? 42 : 78}
            cy={y}
            rx="14"
            ry="6"
            transform={`rotate(${i % 2 === 0 ? -30 : 30} ${i % 2 === 0 ? 42 : 78} ${y})`}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}
