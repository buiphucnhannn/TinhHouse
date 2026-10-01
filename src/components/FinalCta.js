"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function FinalCta({ onBooking }) {
  return (
    <section className="relative w-full flex flex-col justify-center items-center overflow-hidden select-none py-16 sm:py-20 lg:py-28 min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] bg-[#0E1F13]">
      {/* Full-width background photograph with bounded height */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/TinhHouse/AnhSP4.jpg"
          alt="Tịnh House - Đến để nghỉ ngơi, ở lại để cảm nhận"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        {/* Lớp gradient tối để tôn vinh chữ và logo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#0A160D]" />

        {/* Hiệu ứng làm mờ chuyển tiếp êm ái ở mép dưới tiếp giáp với BodyMap */}
        <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 bg-gradient-to-t from-[#0A160D] via-[#0A160D]/80 to-transparent pointer-events-none z-10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-20 text-center z-10">
        <Reveal variant="zoom-soft">
          {/* Logo Emblem */}
          <div className="mx-auto mb-3 sm:mb-3.5 relative h-11 w-11 sm:h-13 sm:w-13">
            <Image
              src="/TinhHouse/logo.png"
              alt="Tịnh House"
              fill
              sizes="60px"
              className="object-contain brightness-0 invert drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            />
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={100}>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-normal leading-[1.2] text-white tracking-wide">
            Đến để nghỉ ngơi.<br />
            Ở lại để cảm nhận.
          </h2>
        </Reveal>

        <Reveal variant="fade-up" delay={200}>
          <div className="mt-5 sm:mt-6 flex justify-center">
            <button
              onClick={onBooking}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-sm sm:text-base font-medium text-stone-900 shadow-xl transition-all duration-300 hover:bg-stone-100 hover:shadow-2xl hover:scale-105 cursor-pointer"
            >
              <span>Đặt phòng ngay</span>
              <svg
                width="16"
                height="16"
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
      </div>
    </section>
  );
}

