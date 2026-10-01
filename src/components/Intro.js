"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { scrollToId } from "../utils/smoothScroll";

export default function Intro() {
  return (
    <section id="ve-tinh" className="relative scroll-mt-0 bg-[#FAF7F0] pt-22 pb-12 sm:py-20 lg:py-28 overflow-hidden">
      {/* Subtle blurred foreground leaf on left edge (matching design) */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none absolute -left-10 top-1 z-0 h-44 w-44 opacity-35 blur-[0.5px] select-none mix-blend-multiply"
      >
        <Image
          src="/images/tropical_leaf.jpg"
          alt=""
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left Column: Text & Content */}
          <div className="relative z-10 lg:col-span-5">
            <Reveal variant="fade-right">
              <div className="inline-flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-stone-500"
                >
                  <path
                    d="M12 3C7.5 7.5 4 11 4 15.5a8 8 0 0 0 16 0c0-4.5-3.5-8-8-12.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path d="M12 9v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">
                  VỀ TỊNH HOUSE
                </span>
              </div>
            </Reveal>

            <Reveal variant="fade-right" delay={100}>
              <h2 className="mt-3.5 sm:mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.2] text-[#22201D]">
                Một khoảng lặng<br />
                giữa thiên nhiên
              </h2>
            </Reveal>

            <Reveal variant="fade-right" delay={180}>
              <p className="mt-4 sm:mt-6 text-[15px] sm:text-base lg:text-[17px] leading-relaxed text-stone-600 max-w-xl text-left">
                Tịnh House mang đến một không gian lưu trú mộc mạc, gần gũi với thiên nhiên — nơi bạn có thể tạm rời nhịp sống vội vã, tận hưởng những buổi sáng nhiều nắng và những phút giây thật bình yên.
              </p>
            </Reveal>

            <Reveal variant="fade-right" delay={260}>
              <div className="mt-6 sm:mt-8 flex items-center justify-between gap-4">
                <button
                  onClick={() => scrollToId("phong-nghi")}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#4A3B32] px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#382b24] hover:shadow-md cursor-pointer"
                >
                  <span>Tìm hiểu thêm</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Botanical Sketch Decoration */}
                <div className="opacity-45 pr-6 sm:pr-10">
                  <svg width="68" height="68" viewBox="0 0 100 100" fill="none" className="text-stone-700">
                    <path
                      d="M20,80 Q50,50 80,20 M50,50 Q40,35 48,25 M50,50 Q65,40 75,48 M35,65 Q25,55 33,45 M65,35 Q55,25 63,15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Organic Pebble Framed Photo */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <Reveal variant="fade-left" delay={150} className="w-full max-w-[680px] xl:max-w-[760px] 2xl:max-w-[820px]">
              <div
                className="relative aspect-[4/3] sm:aspect-[15/11] lg:aspect-[16/11] w-full overflow-hidden shadow-2xl transition-all duration-500"
                style={{
                  borderRadius: "32% 68% 58% 42% / 46% 40% 60% 54%",
                }}
              >
                <Image
                  src="/TinhHouse/AnhSP2.jpg"
                  alt="Không gian mộc mạc tại Tịnh House"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 58vw, 820px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

