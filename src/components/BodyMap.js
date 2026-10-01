"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const MAP_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Qu%E1%BA%A3ng+B%E1%BB%91,+Qu%E1%BA%A3ng+Ph%C3%BA,+L%C6%B0%C6%A1ng+T%C3%A0i,+B%E1%BA%AFc+Ninh";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Qu%E1%BA%A3ng+B%E1%BB%91,+Qu%E1%BA%A3ng+Ph%C3%BA,+L%C6%B0%C6%A1ng+T%C3%A0i,+B%E1%BA%AFc+Ninh&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function BodyMap() {
  return (
    <section id="lien-he" className="relative scroll-mt-12 flex-1 flex flex-col justify-center py-4 sm:py-6 lg:py-7 overflow-hidden">
      {/* Nền ảnh sân vườn Tịnh House rõ nét tự nhiên - không làm tối nền */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/contact_courtyard_bg.jpg"
          alt="Không gian sân vườn Tịnh House"
          fill
          priority
          className="object-cover object-[center_60%]"
        />

        {/* Chuyển tiếp mờ êm dịu ở mép trên tiếp nối từ FinalCta (mờ nhẹ nhàng, không dày) */}
        <div className="absolute top-0 inset-x-0 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-[#0A160D] via-[#0A160D]/60 to-transparent pointer-events-none z-10" />

        {/* Chuyển tiếp mờ êm ở mép dưới tiếp giáp với Footer */}
        <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 bg-gradient-to-t from-[#0A160D] via-[#0A160D]/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* Main Container - Scaled to max-w-[1440px] aligned precisely with upper sections */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-14 xl:px-20 z-10">
        <div className="grid items-center gap-5 sm:gap-7 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          
          {/* Left Column: Info & Details Card */}
          <div className="lg:col-span-5 relative z-10">
            <Reveal variant="fade-right" className="h-full">
              <div className="rounded-[20px] sm:rounded-[26px] bg-white/92 backdrop-blur-md p-4 sm:p-6 lg:p-7 border border-stone-200/90 shadow-[0_16px_40px_-15px_rgba(74,59,50,0.12)]">
                <div className="inline-flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-stone-500">
                    <path
                      d="M12 21s-7-5.5-7-11.5a7 7 0 1 1 14 0C19 15.5 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">
                    VỊ TRÍ & LIÊN HỆ
                  </span>
                </div>

                <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-normal leading-[1.2] text-[#22201D]">
                  Hẹn bạn ở Tịnh
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
                  Một hành trình mới bắt đầu<br />
                  từ một nơi thật yên.
                </p>

                {/* Contact list */}
                <div className="mt-4 space-y-2.5 sm:space-y-3">
                  <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-[13.5px] text-stone-700">
                    <div className="mt-0.5 shrink-0 text-stone-500">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 21s-7-5.5-7-11.5a7 7 0 1 1 14 0C19 15.5 12 21 12 21Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">
                      Thôn Quảng Bố, Xã Quảng Phú,<br />
                      Huyện Lương Tài, Tỉnh Bắc Ninh, Việt Nam
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-[13.5px] text-stone-700">
                    <div className="shrink-0 text-stone-500">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </div>
                    <a href="tel:0389733426" className="font-medium hover:text-[#4A3B32] transition">
                      0389 733 426
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-[13.5px] text-stone-700">
                    <div className="shrink-0 text-stone-500">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
                        <path
                          d="M13 10.5V8.5a1.5 1.5 0 0 1 1.5-1.5H16M11 10.5h4M13 10.5V17"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">Tịnh House Phú Quốc</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5">
                  <a
                    href={MAP_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#4A3B32] px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#382b24] hover:shadow-md cursor-pointer"
                  >
                    <span>Chỉ đường đến Tịnh</span>
                    <svg
                      width="13"
                      height="13"
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
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Google Maps Trực Quan Gọn Gàng, Thông Thoáng */}
          <div className="lg:col-span-7 flex justify-center">
            <Reveal variant="fade-left" delay={180} className="w-full">
              <div className="relative h-[230px] sm:h-[270px] lg:h-[310px] xl:h-[330px] w-full overflow-hidden rounded-[20px] sm:rounded-[26px] border border-stone-200/90 bg-[#E8EDE5] shadow-[0_16px_40px_-15px_rgba(74,59,50,0.12)]">
                {/* Real Google Maps Embed - Giao diện gốc thoáng đãng, tương tác trực tiếp */}
                <iframe
                  title="Bản đồ vị trí Tịnh House Bắc Ninh"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
