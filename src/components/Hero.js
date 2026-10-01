"use client";

import Reveal from "./Reveal";
import LeafBranch from "./LeafBranch";
import { scrollToId } from "../utils/smoothScroll";

export default function Hero({ onBooking }) {
  return (
    <section id="top" className="relative overflow-hidden bg-emerald-950 text-white">
      {/* Background giả lập ảnh: gradient + pattern */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(251,191,36,0.25),transparent),linear-gradient(to_bottom,rgba(2,44,34,0.2),rgba(2,44,34,0.95))]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <LeafBranch className="left-6 top-24 h-32 w-32 text-amber-200" />
      <LeafBranch className="bottom-24 right-6 h-40 w-40 rotate-180 text-amber-200" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-4 pb-20 pt-28 text-center md:px-6">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-amber-200">
            Homestay • Vũng Tàu • Sát biển
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            TinhHouse —<br />
            <span className="text-amber-300">Tĩnh lặng để trở về</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
            Căn nhà nhỏ giữa vườn lá, cách biển 5 phút đi bộ.
            Buổi sáng nghe sóng, buổi tối nghe gió — dành cho những ai
            cần một khoảng lặng.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onBooking}
              className="rounded-full bg-amber-400 px-8 py-3.5 font-semibold text-emerald-950 transition hover:bg-amber-300"
            >
              Đặt phòng ngay
            </button>
            <button
              onClick={() => scrollToId("khong-gian")}
              className="rounded-full border border-white/30 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Xem không gian
            </button>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <span>★ 4.9/5 (320+ đánh giá)</span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="hidden sm:block">Check-in 14:00 • Check-out 12:00</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
