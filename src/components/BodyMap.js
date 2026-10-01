import Reveal from "./Reveal";

const AREAS = [
  { name: "Hiên trà", note: "30m² • sức chứa 12 người" },
  { name: "Vườn lá", note: "võng • xích đu • thảm yoga" },
  { name: "Bếp chung", note: "tự nấu • BBQ buổi tối" },
  { name: "Bãi biển", note: "5 phút đi bộ • Bãi Trước" },
];

export default function BodyMap() {
  return (
    <section id="ban-do" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Sơ đồ & Bản đồ
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold text-emerald-950 md:text-4xl">
            Nhà nhỏ, vườn rộng, biển gần
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {AREAS.map((a) => (
                <div
                  key={a.name}
                  className="rounded-2xl border border-emerald-950/10 bg-[#faf7ef] p-5"
                >
                  <h3 className="font-semibold text-emerald-950">{a.name}</h3>
                  <p className="mt-1 text-sm text-emerald-950/60">{a.note}</p>
                </div>
              ))}
              <div className="col-span-2 rounded-2xl bg-emerald-900 p-5 text-sm text-white">
                📍 12/8 Trần Phú, P.1, TP. Vũng Tàu — hẻm yên tĩnh, ô tô đỗ
                cách 50m, có người dẫn vào.
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            {/* Khung bản đồ: thay iframe Google Maps thật khi có địa chỉ chính xác */}
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-3xl bg-emerald-50 p-8 text-center">
              <span className="text-5xl">🗺️</span>
              <p className="mt-4 font-semibold text-emerald-950">
                Nhúng Google Maps tại đây
              </p>
              <p className="mt-2 max-w-sm text-sm text-emerald-950/60">
                Thay div này bằng{" "}
                <code className="rounded bg-white px-1.5 py-0.5">
                  &lt;iframe src="https://maps.google.com/..." /&gt;
                </code>{" "}
                khi bạn chốt địa chỉ.
              </p>
              <a
                href="https://maps.google.com/?q=Vung+Tau"
                target="_blank"
                rel="noreferrer"
                className="mt-4 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Mở Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
