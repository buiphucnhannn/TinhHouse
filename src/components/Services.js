import Reveal from "./Reveal";

const SERVICES = [
  { icon: "🍵", title: "Trà chiều & cà phê", desc: "Trà hoa, cà phê trứng mỗi chiều 15h-17h tại hiên." },
  { icon: "🚲", title: "Xe đạp miễn phí", desc: "Dạo biển sáng sớm, chợ đêm Vũng Tàu." },
  { icon: "🍳", title: "Bữa sáng vườn", desc: "Bánh mì chảo, bún cá, trái cây theo mùa." },
  { icon: "🧘", title: "Thiền & yoga", desc: "Sân vườn 6h sáng mỗi cuối tuần, có thảm sẵn." },
  { icon: "🧺", title: "BBQ sân vườn", desc: "Set nướng 299k/người, bếp than & gia vị đầy đủ." },
  { icon: "🚗", title: "Đưa đón", desc: "Hỗ trợ xe Sài Gòn – Vũng Tàu 2 chiều giá tốt." },
];

export default function Services() {
  return (
    <section id="dich-vu" className="scroll-mt-20 bg-emerald-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            Dịch vụ
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold md:text-4xl">
            Nhỏ thôi, nhưng đủ đầy
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
