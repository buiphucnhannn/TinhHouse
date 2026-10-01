import Reveal from "./Reveal";

const ROOMS = [
  {
    name: "Phòng Tĩnh — cửa sổ vườn",
    price: "650k / đêm",
    desc: "20m², giường 1m8, bồn tắm gỗ, ban công nhìn vườn chuối.",
    tag: "Phổ biến nhất",
  },
  {
    name: "Phòng Lặng — gác mái",
    price: "850k / đêm",
    desc: "28m², gác lửng đọc sách, cửa sổ trời ngắm sao.",
    tag: "View đẹp",
  },
  {
    name: "Nhà Riêng — nguyên căn",
    price: "1.900k / đêm",
    desc: "70m², 2 phòng ngủ, bếp riêng, hiên trà 30m² cho 4-6 người.",
    tag: "Gia đình",
  },
];

export default function Space({ onBooking }) {
  return (
    <section id="khong-gian" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Không gian
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold text-emerald-950 md:text-4xl">
            Chọn một góc nhỏ cho riêng mình
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ROOMS.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-950/10 bg-[#faf7ef] transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-emerald-100 to-amber-100 text-5xl">
                  {["🛖", "🪟", "🏡"][i]}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-emerald-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-200">
                    {r.tag}
                  </span>
                  <h3 className="mt-3 font-bold text-emerald-950">{r.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-emerald-950/70">
                    {r.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-emerald-900">{r.price}</span>
                    <button
                      onClick={onBooking}
                      className="rounded-full border border-emerald-900 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-900 hover:text-white"
                    >
                      Đặt
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
