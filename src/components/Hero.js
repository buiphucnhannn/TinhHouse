"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { scrollToId } from "../utils/smoothScroll";

const HERO_SLIDES = [
  {
    src: "/TinhHouse/AnhSp3.jpg",
    alt: "Ban công yên tĩnh hướng vườn xanh",
    titleItalic: "Tạm gác lại âu lo,",
    titleSub: "cho tâm hồn những phút giây an yên trọn vẹn.",
  },
  {
    src: "/TinhHouse/AnhSP2.jpg",
    alt: "Không gian phòng ấm áp mộc mạc",
    titleItalic: "Thức giấc cùng nắng sớm,",
    titleSub: "lắng nghe tiếng lá xào xạc bên thềm nhà.",
  },
  {
    src: "/TinhHouse/AnhSP.jpg",
    alt: "Phòng ngủ ngập tràn ánh sáng tại Tịnh House",
    titleItalic: "Một chốn nhỏ để trở về,",
    titleSub: "nghỉ ngơi và sống chậm giữa thiên nhiên.",
  },
];

export default function Hero({ onBooking }) {
  const [current, setCurrent] = useState(0);
  const pointerStartX = useRef(null);
  const pointerStartY = useRef(null);
  const isDragging = useRef(false);

  // Tự động chuyển ảnh sau mỗi 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));

  // Pointer Events (hỗ trợ cả Chuột Desktop lẫn Cảm ứng Mobile/Tablet ở mọi vị trí)
  const handlePointerDown = (e) => {
    // Không bắt drag nếu bấm trực tiếp vào nút bấm
    if (e.target.closest("button") || e.target.closest("a")) return;
    isDragging.current = true;
    pointerStartX.current = e.clientX;
    pointerStartY.current = e.clientY;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current || pointerStartX.current === null) return;
    const diffX = pointerStartX.current - e.clientX;
    const diffY = pointerStartY.current !== null ? pointerStartY.current - e.clientY : 0;

    // Chỉ chuyển ảnh khi lướt ngang nhiều hơn lướt dọc
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    isDragging.current = false;
    pointerStartX.current = null;
    pointerStartY.current = null;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}
  };

  const handlePointerCancel = (e) => {
    isDragging.current = false;
    pointerStartX.current = null;
    pointerStartY.current = null;
  };

  return (
    <section
      id="trang-chu"
      className="relative w-full h-screen min-h-[560px] sm:min-h-[620px] max-h-[880px] lg:max-h-[940px] xl:max-h-[980px] overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      {/* 3 Crossfading Background Images */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none select-none ${
            idx === current ? "opacity-100 z-0" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={idx === 0}
            loading={idx === 0 ? "eager" : "lazy"}
            sizes="100vw"
            draggable={false}
            className="object-cover object-[center_35%] transition-transform duration-[6000ms] ease-out scale-100 select-none pointer-events-none"
          />
        </div>
      ))}

      {/* Soft vignette and overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 z-1 pointer-events-none select-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/40 z-1 pointer-events-none select-none" />

      {/* Hero Content - Scaled to max-w-[1440px] aligned precisely with lower sections */}
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 sm:px-10 lg:px-14 xl:px-20 pt-16 sm:pt-24 pb-10 sm:pb-12 z-10 pointer-events-none select-none">
        <div className="max-w-2xl text-left pointer-events-none select-none translate-y-0 sm:translate-y-2">
          <Reveal variant="zoom-soft">
            <div className="mb-3.5 sm:mb-4 inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-amber-200">
                <path
                  d="M12 2C8.5 7 5 10 5 14a7 7 0 0 0 14 0c0-4.5-3.5-8-8-12.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path d="M12 8v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-amber-100/90 font-medium">
                TỊNH HOUSE
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-serif text-[27px] sm:text-5xl lg:text-[54px] font-normal leading-[1.25] text-white transition-all duration-700">
              <span className="italic block">{HERO_SLIDES[current].titleItalic}</span>
              <span className="italic block font-light">{HERO_SLIDES[current].titleSub}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 sm:mt-8">
              <button
                onClick={() => scrollToId("ve-tinh")}
                className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-medium text-stone-900 shadow-md transition-all duration-300 hover:bg-stone-100 hover:shadow-lg hover:translate-x-0.5 cursor-pointer"
              >
                <span>Khám phá Tịnh House</span>
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
            </div>
          </Reveal>

          {/* 3 Clickable Slide Indicator Dots */}
          <div className="mt-6 flex items-center gap-2.5 z-20 pointer-events-auto">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Chuyển đến ảnh ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer p-1 -m-1 ${
                  idx === current
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



