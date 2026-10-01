export default function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-2">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
          light ? "bg-white/15 text-white" : "bg-emerald-900 text-amber-100"
        }`}
      >
        {/* Icon nhà lá đơn giản */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 11.5 12 4l9 7.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 10.5V19a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-8.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`leading-tight ${
          light ? "text-white" : "text-emerald-950"
        }`}
      >
        <span className="block text-lg font-bold tracking-tight">
          TinhHouse
        </span>
        <span
          className={`block text-[11px] uppercase tracking-[0.2em] ${
            light ? "text-white/70" : "text-emerald-800/70"
          }`}
        >
          Vũng Tàu
        </span>
      </span>
    </a>
  );
}
