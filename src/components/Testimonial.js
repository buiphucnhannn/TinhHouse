"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "Một nơi thật bình yên. Căn phòng đẹp hơn mình tưởng và rất nhiều cây xanh. Rất thích cảm giác được sống chậm ở đây!",
    author: "Linh",
    avatar: "/images/avatar_linh.jpg",
  },
  {
    quote:
      "Không gian ở Tịnh đem lại cảm giác nhẹ nhõm hiếm có. Buổi sáng mở cửa ra đón nắng sớm và nhâm nhi tách cà phê, mọi mệt mỏi đều tan biến.",
    author: "Hương Giang",
    avatar: "/images/avatar_linh.jpg",
  },
  {
    quote:
      "Mọi chi tiết trong phòng đều được chăm chút tỉ mỉ, mộc mạc mà vô cùng tinh tế. Chắc chắn sẽ quay trở lại mỗi khi cần nạp lại năng lượng.",
    author: "Tuấn Anh",
    avatar: "/images/avatar_linh.jpg",
  },
  {
    quote:
      "Chủ nhà chu đáo, các góc trong homestay chụp ảnh góc nào cũng thơ mộng. Một kỳ nghỉ trọn vẹn và an yên.",
    author: "Minh Trang",
    avatar: "/images/avatar_linh.jpg",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));

  const item = REVIEWS[current];

  return (
    <section id="cam-nhan" className="relative scroll-mt-12 w-full overflow-hidden select-none mb-16 sm:mb-20 lg:mb-24">
      {/* Nền tràn toàn bộ màn hình 100%: Nửa trái là màu kem ấm (#EFE8DC), Nửa phải là ảnh vòm cửa sổ */}
      <div className="absolute inset-0 w-full h-full flex pointer-events-none">
        {/* Nửa trái tràn ra tận mép trái màn hình */}
        <div className="w-full lg:w-1/2 h-full bg-[#EFE8DC]" />
        
        {/* Nửa phải tràn ra tận mép phải màn hình với ảnh nghệ thuật sắc nét, không mờ */}
        <div className="hidden lg:block w-1/2 h-full relative overflow-hidden bg-stone-100">
          <Image
            src="/images/testimonial_banner.jpg"
            alt="Không gian thư thái tại Tịnh House"
            fill
            sizes="50vw"
            className="object-cover object-[center_40%] transition-transform duration-700 hover:scale-105"
          />

          {/* Đường cong mềm mại nối giữa nền kem (#EFE8DC) và ảnh - 1 đường cong duy nhất rõ ràng */}
          <div className="absolute inset-y-0 -left-[1px] w-20 lg:w-28 xl:w-36 z-10 pointer-events-none">
            <svg
              viewBox="0 0 100 500"
              preserveAspectRatio="none"
              className="w-full h-full text-[#EFE8DC] fill-current"
            >
              <path d="M0,0 C85,130 85,370 0,500 L0,0 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Khung nội dung chính: Căn theo max-w-[1440px] đồng bộ chuẩn xác với toàn bộ website */}
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14 xl:px-20 z-10">

        {/* Lưới 12 cột chuẩn tỷ lệ, căn giữa hoàn hảo */}
        <div className="w-full grid lg:grid-cols-12 min-h-[440px] lg:min-h-[500px] xl:min-h-[540px] items-stretch relative">
          
          {/* Cột trái: Nhận xét khách hàng - căn giữa trên mobile, căn trái thanh lịch trên desktop */}
          <div className="lg:col-span-6 flex flex-col justify-center py-10 sm:py-16 lg:py-22 pr-0 lg:pr-14 z-20">
            <div className="max-w-xl mx-auto lg:mx-0 relative z-20 w-full text-center lg:text-left">
              <Reveal variant="fade-up">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-stone-600">
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600">
                    CẢM NHẬN CỦA KHÁCH
                  </span>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={100}>
                <div className="mt-2.5 flex items-center justify-center lg:justify-start gap-3">
                  <span className="hidden lg:inline-block h-7 sm:h-8 w-[2px] bg-stone-300 rounded-full" />
                  <h2 className="font-serif text-[25px] sm:text-3xl lg:text-[40px] xl:text-[42px] font-normal leading-[1.25] text-[#22201D] tracking-tight text-center lg:text-left">
                    Những lời chia sẻ thật lòng
                  </h2>
                </div>
              </Reveal>
            </div>

            {/* Quote block: Căn giữa trên mobile, căn trái thanh lịch trên desktop */}
            <div className="my-5 sm:my-8 max-w-xl mx-auto lg:mx-0 w-full">
              <Reveal variant="fade-up" delay={180}>
                <div className="relative text-center lg:text-left px-2 sm:px-4 lg:pl-8 lg:pr-2">
                  {/* Quote mark trên desktop (bên lề trái) */}
                  <span
                    aria-hidden
                    className="hidden lg:block absolute -top-3.5 left-0 font-serif text-4xl sm:text-5xl text-[#A67C52] select-none leading-none"
                  >
                    “
                  </span>

                  <blockquote className="text-[15px] sm:text-lg lg:text-[19px] leading-relaxed text-stone-700 font-normal min-h-[68px] sm:min-h-[64px] text-center lg:text-left">
                    {/* Dấu mở nháy trên mobile nằm ngay đầu câu văn */}
                    <span
                      aria-hidden
                      className="lg:hidden inline-block font-serif text-2xl sm:text-3xl text-[#A67C52] select-none mr-1 leading-none align-baseline not-italic"
                    >
                      “
                    </span>
                    {item.quote}
                    {/* Dấu đóng nháy nằm ngay cuối câu văn */}
                    <span
                      aria-hidden
                      className="inline-block font-serif text-2xl sm:text-3xl lg:text-4xl text-[#A67C52] select-none ml-1 leading-none align-baseline not-italic"
                    >
                      ”
                    </span>
                  </blockquote>
                </div>
              </Reveal>
            </div>

            {/* Author row & Navigation Controls: Cân đối và đối xứng trên mobile */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full">
              <Reveal variant="fade-up" delay={240}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 border-t border-stone-300/80 pt-4 sm:pt-5">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border border-stone-300 shadow-xs">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="44px"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[#22201D]">
                      — {item.author} —
                    </span>
                  </div>

                  {/* Navigation Buttons (< & >) & Dots */}
                  <div className="flex items-center justify-center gap-2.5">
                    {/* Nút lùi lại < */}
                    <button
                      onClick={prev}
                      aria-label="Cảm nhận trước đó"
                      className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center text-stone-700 hover:border-stone-900 hover:text-stone-900 transition cursor-pointer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M15 19l-7-7 7-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {/* Dots ở giữa */}
                    <div className="flex items-center gap-1.5 px-0.5">
                      {REVIEWS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrent(idx)}
                          aria-label={`Chuyển đến đánh giá ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            idx === current ? "w-4 bg-stone-800" : "w-1.5 bg-stone-400 hover:bg-stone-600"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Nút tiến tới > */}
                    <button
                      onClick={next}
                      aria-label="Cảm nhận tiếp theo"
                      className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center text-stone-700 hover:border-stone-900 hover:text-stone-900 transition cursor-pointer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Cột phải: Không gian hiển thị ảnh cho mobile, desktop dùng background split */}
          <div className="lg:col-span-6 relative">
            {/* Mobile-only image container */}
            <div className="lg:hidden mt-6">
              <Reveal variant="zoom-soft">
                <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden bg-stone-100 rounded-2xl shadow-sm">
                  <Image
                    src="/images/testimonial_banner.jpg"
                    alt="Không gian thư thái tại Tịnh House"
                    fill
                    sizes="100vw"
                    className="object-cover object-[center_40%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
