"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const EXPERIENCES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
        <path
          d="M12 3C7.5 7.5 4 11 4 15.5a8 8 0 0 0 16 0c0-4.5-3.5-8-8-12.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M12 9v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 13l4-3M12 15l-3-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Gần gũi thiên nhiên",
    desc: "Không gian xanh mát, tràn ngập cỏ cây.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Đón nắng buổi sớm",
    desc: "Những buổi sáng trong lành, nhiều năng lượng.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
        <path
          d="M4 19h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M18 10h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M7 3v2M11 3v2M15 3v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Khoảng thời gian chậm rãi",
    desc: "Một tách cà phê, trọn vẹn phút an yên.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
        <path
          d="M3 10.5 12 3l9 7.5M5.5 9.5V20a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1V9.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 21v-6h4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Không gian riêng tư",
    desc: "Thoải mái, tự do và yên tĩnh như ở nhà.",
  },
];

export default function Services() {
  return (
    <section
      id="trai-nghiem"
      className="relative w-full scroll-mt-12 select-none py-24 sm:py-32 md:py-36 bg-[#0E1F13]"
    >
      {/* Full-width background photograph spanning 100% from very top to very bottom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/TinhHouse/AnhSP4.jpg"
          alt="Trải nghiệm tại Tịnh House"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1F13]/70 via-[#0E1F13]/55 to-[#0E1F13]/75" />
      </div>

      {/* Top Wave: Cream cutout overlay on top of image (bleeds 2px up into Space to eliminate subpixel seam) */}
      <div className="absolute -top-[2px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="-2 -2 1444 74"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 block"
        >
          <path
            d="M-2,-2 L1442,-2 L1442,25 C1160,65 820,15 480,55 C240,75 -2,30 -2,30 Z"
            fill="#FAF7F0"
          />
        </svg>
      </div>

      {/* Main Content - Căn giữa toàn bộ từ header đến các mục trải nghiệm */}
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14 xl:px-20 text-center z-10 flex flex-col items-center">
        <Reveal variant="fade-down">
          <div className="inline-flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-emerald-200">
              <path
                d="M12 3C7.5 7.5 4 11 4 15.5a8 8 0 0 0 16 0c0-4.5-3.5-8-8-12.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path d="M12 9v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-100/90 font-medium">
              TRẢI NGHIỆM TẠI TỊNH
            </span>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={100}>
          <h2 className="mt-3.5 sm:mt-4 font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[48px] font-normal leading-[1.25] text-white text-center">
            Những điều nhỏ<br />
            làm nên một kỳ nghỉ
          </h2>
        </Reveal>

        {/* 4 Feature Items căn đều, đối xứng và căn giữa mượt mà */}
        <div className="mt-12 sm:mt-16 lg:mt-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
          {EXPERIENCES.map((item, i) => (
            <Reveal key={item.title} variant="slide-up-grow" delay={120 + i * 110}>
              <div className="group flex flex-col items-center text-center h-full">
                <div className="mb-3.5 sm:mb-4 inline-flex items-center justify-center text-white/90 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm lg:text-[14px] leading-relaxed text-white/80 font-light max-w-[260px] mx-auto">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom Wave: Cream cutout overlay on bottom of image (bleeds 2px down into Ritual to eliminate subpixel seam) */}
      <div className="absolute -bottom-[2px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="-2 0 1444 74"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 block"
        >
          <path
            d="M-2,45 C280,15 620,65 960,30 C1200,5 1360,35 1442,40 L1442,74 L-2,74 Z"
            fill="#FAF7F0"
          />
        </svg>
      </div>
    </section>
  );
}

