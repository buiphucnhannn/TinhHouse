"use client";

import Logo from "./Logo";
import Reveal from "./Reveal";
import { scrollToId } from "../utils/smoothScroll";

export default function Footer() {
  return (
    <footer className="shrink-0 w-full bg-[#0A160D] text-stone-400 py-6 sm:py-7 lg:py-8 border-t border-white/10 z-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14 xl:px-20">
        <Reveal variant="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-5 sm:pb-6 border-b border-white/10">
          <Logo light />

          {/* Quick links - scaled to text-sm sm:text-[15px] with generous spacing */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-8 lg:gap-10 text-xs sm:text-[15px] tracking-wide font-normal">
            {[
              ["trang-chu", "Trang chủ"],
              ["ve-tinh", "Về Tịnh"],
              ["phong-nghi", "Phòng nghỉ"],
              ["trai-nghiem", "Trải nghiệm"],
              ["hinh-anh", "Hình ảnh"],
              ["lien-he", "Liên hệ"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="transition hover:text-white cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Hotline & Address - scaled and formatted with clear hierarchy */}
          <div className="text-xs sm:text-sm text-stone-400 text-center md:text-right">
            <p>Hotline: <a href="tel:0389733426" className="text-white hover:underline font-medium">0389 733 426</a></p>
            <p className="mt-1 text-stone-400/90 text-xs sm:text-[13px]">Thôn Quảng Bố, Quảng Phú, Lương Tài, Bắc Ninh</p>
          </div>
        </div>

        <div className="pt-4 sm:pt-5 text-center text-xs sm:text-[13px] text-stone-500 tracking-wider">
          © {new Date().getFullYear()} Tịnh House. Nghỉ ngơi và sống chậm giữa thiên nhiên.
        </div>
        </Reveal>
      </div>
    </footer>
  );
}

