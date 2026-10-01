"use client";

import Reveal from "./Reveal";

export default function FinalCta({ onBooking }) {
  return (
    <section className="bg-emerald-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6 md:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-5xl">
            Cuối tuần này,
            <span className="text-amber-300"> về biển thở một hơi</span> nhé?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Chỉ còn 3 phòng trống cho thứ 7 này. Nhắn TinhHouse giữ chỗ
            trước 20h hôm nay để được tặng set trà chiều.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={onBooking}
              className="rounded-full bg-amber-400 px-8 py-3.5 font-semibold text-emerald-950 transition hover:bg-amber-300"
            >
              Giữ chỗ ngay — miễn phí hủy
            </button>
            <a
              href="tel:0900000000"
              className="rounded-full border border-white/30 px-8 py-3.5 font-semibold hover:bg-white/10"
            >
              Gọi: 0900 000 000
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
