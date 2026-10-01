import Reveal from "./Reveal";

const QUOTES = [
  {
    text: "Mình đi một mình, ở 2 đêm mà như được sạc pin. Sáng ra biển, chiều nằm võng đọc hết 1 cuốn sách.",
    name: "Minh Anh — TP.HCM",
  },
  {
    text: "Phòng thơm mùi gỗ, chăn êm, trà chiều ngon. Cô chủ dễ thương, chỉ chỗ ăn hải sản rẻ mà ngon.",
    name: "Gia đình chị Hằng — Hà Nội",
  },
  {
    text: "Nhóm 6 người thuê nguyên căn BBQ sân vườn, tối ngắm sao. Giá hợp lý, sẽ quay lại.",
    name: "Nhóm bạn Khoa — Đồng Nai",
  },
];

export default function Testimonial() {
  return (
    <section id="cam-nhan" className="scroll-mt-20 bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Cảm nhận
          </p>
          <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
            Khách đã ở nói gì?
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm">
                <div className="text-amber-400">★★★★★</div>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-emerald-950/80">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-emerald-900">
                  — {q.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
