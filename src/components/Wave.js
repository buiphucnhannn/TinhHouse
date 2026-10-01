export default function Wave({ flip = false, className = "", fill = "#022c22" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-[56px] w-full md:h-[90px]"
      >
        <path
          d="M0,48 C240,90 480,0 720,36 C960,72 1200,80 1440,32 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
