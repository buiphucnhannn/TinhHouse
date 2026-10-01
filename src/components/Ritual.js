import Reveal from "./Reveal";

const STEPS = [
  { time: "05:30", title: "Dậy sớm đi biển", desc: "Đi bộ 5 phút ra Bãi Trước ngắm bình minh, chân trần trên cát." },
  { time: "07:00", title: "Ăn sáng vườn", desc: "Bữa sáng nóng hổi dưới giàn hoa giấy, chim hót." },
  { time: "15:00", title: "Trà chiều hiên nhà", desc: "Pha ấm trà ô long, đọc vài trang sách, không điện thoại." },
  { time: "20:00", title: "Nghe đêm xuống", desc: "Nằm võng nghe gió, thi thoảng có mưa rào trên mái lá." },
];

export default function Ritual() {
  return (
    <section id="trai-nghiem" className="scroll-mt-20 bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Trải nghiệm
            </p>
            <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
              Một ngày “nghi thức” ở TinhHouse
            </h2>
            <p className="mt-4 text-emerald-950/70">
              Không lịch trình dày đặc. Chỉ 4 khoảng khắc trong ngày —
              đủ để bạn thấy mình sống chậm lại.
            </p>
          </Reveal>
          <div className="space-y-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.time} delay={i * 100}>
                <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="flex h-12 shrink-0 items-center rounded-xl bg-emerald-900 px-3 font-mono text-sm font-bold text-amber-200">
                    {s.time}
                  </span>
                  <div>
                    <h3 className="font-semibold text-emerald-950">{s.title}</h3>
                    <p className="mt-1 text-sm text-emerald-950/70">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
