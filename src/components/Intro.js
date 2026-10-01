import Reveal from "./Reveal";

const STATS = [
  { value: "5'", label: "đi bộ ra biển" },
  { value: "8", label: "phòng nghỉ tĩnh lặng" },
  { value: "300m²", label: "vườn lá & hiên trà" },
];

export default function Intro() {
  return (
    <section id="gioi-thieu" className="scroll-mt-20 bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Giới thiệu
            </p>
            <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
              Một nơi chốn để thở chậm lại
            </h2>
            <p className="mt-4 leading-relaxed text-emerald-950/70">
              TinhHouse không ồn ào, không xô bồ. Nhà làm bằng gỗ, tre và
              ánh sáng tự nhiên. Mỗi phòng chỉ có những gì vừa đủ: một
              chiếc giường êm, một góc trà, một ô cửa nhìn ra vườn.
            </p>
            <p className="mt-3 leading-relaxed text-emerald-950/70">
              Sáng dậy sớm đi bộ ra Bãi Trước, trưa về nằm võng đọc sách,
              chiều pha ấm trà nghe mưa trên mái lá.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-emerald-900">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-emerald-900/60">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-emerald-100">
                {/* Thay bằng <Image src="/images/intro.jpg" ... /> khi có ảnh thật */}
                <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-950 p-8 text-center text-white">
                  <span className="text-6xl">🍃</span>
                  <p className="mt-4 text-sm text-white/70">
                    Ảnh minh họa — thay bằng ảnh thật trong
                    <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5">
                      /public/images/
                    </code>
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-amber-300 px-5 py-4 shadow-lg">
                <p className="text-sm font-semibold text-emerald-950">
                  “Ở 1 đêm, nhớ 1 năm”
                </p>
                <p className="text-xs text-emerald-950/70">— khách đã ở, 2025</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
