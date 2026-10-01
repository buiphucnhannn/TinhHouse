"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import RoomGalleryModal from "./RoomGalleryModal";

const ROOMS = [
  {
    id: "garden",
    name: "Garden Room",
    image: "/TinhHouse/AnhSP.jpg",
    guests: "2 khách",
    bed: "1 giường",
    feature: "View xanh",
    desc: "Không gian thoáng đãng, nhiều ánh sáng và gần gũi thiên nhiên.",
  },
  {
    id: "cozy",
    name: "Cozy Room",
    image: "/TinhHouse/AnhSP2.jpg",
    guests: "2 khách",
    bed: "1 giường",
    feature: "Không gian riêng",
    desc: "Căn phòng ấm áp với thiết kế mộc mạc, phù hợp cho những ngày nghỉ ngơi.",
  },
  {
    id: "private",
    name: "Private Room",
    image: "/TinhHouse/AnhSp3.jpg",
    guests: "2 khách",
    bed: "1 giường",
    feature: "Ban công",
    desc: "Không gian riêng tư, yên tĩnh, thích hợp cho cặp đôi hoặc bạn bè.",
  },
];

const GALLERY_ITEMS = [
  {
    src: "/TinhHouse/AnhSP.jpg",
    title: "Garden Room",
    guests: "2 khách",
    bed: "1 giường",
    feature: "View xanh",
    desc: "Không gian thoáng đãng, nhiều ánh sáng và gần gũi thiên nhiên.",
  },
  {
    src: "/TinhHouse/AnhSP2.jpg",
    title: "Cozy Room",
    guests: "2 khách",
    bed: "1 giường",
    feature: "Không gian riêng",
    desc: "Căn phòng ấm áp với thiết kế mộc mạc, phù hợp cho những ngày nghỉ ngơi.",
  },
  {
    src: "/TinhHouse/AnhSp3.jpg",
    title: "Private Room",
    guests: "2 khách",
    bed: "1 giường",
    feature: "Ban công",
    desc: "Không gian riêng tư, yên tĩnh, thích hợp cho cặp đôi hoặc bạn bè.",
  },
  {
    src: "/TinhHouse/AnhSP4.jpg",
    title: "Deluxe Suite & Ban công",
    guests: "2-4 khách",
    bed: "1 giường lớn",
    feature: "Rèm lụa & Sofa",
    desc: "Căn phòng rộng rãi với giường rèm lụa thơ mộng và góc sofa thư giãn hướng vườn.",
  },
];

export default function Space({ onBooking }) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (idx = 0) => {
    setGalleryIndex(idx);
    setGalleryOpen(true);
  };

  return (
    <section id="phong-nghi" className="relative scroll-mt-12 bg-[#FAF7F0] pb-16 sm:pb-28 pt-6 sm:pt-8 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14 xl:px-20">
        {/* Section Header */}
        <div className="pb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-stone-500">
                <path
                  d="M3 7v11m18-11v11M3 14h18M7 14V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">
                PHÒNG NGHỈ
              </span>
            </div>
          </Reveal>

          <div className="mt-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Reveal delay={100}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#22201D]">
                Ở đâu cũng thấy dễ chịu
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <button
                onClick={() => openGallery(0)}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 transition cursor-pointer self-start md:self-auto"
              >
                <span>Xem tất cả phòng</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <p className="mt-2 text-sm sm:text-base text-stone-500 whitespace-normal md:whitespace-nowrap">
              Những căn phòng được chăm chút tỉ mỉ, mang đến cảm giác ấm áp và gần gũi như ở nhà.
            </p>
          </Reveal>
        </div>

        {/* 3 Room Cards Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {ROOMS.map((r, i) => (
            <Reveal key={r.id} variant="card-float" delay={i * 140}>
              <div
                onClick={() => openGallery(i)}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-stone-200/80 bg-[#F6F1E7]/60 p-4 sm:p-5 transition-all duration-500 hover:bg-[#F6F1E7] hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Room Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-stone-200">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 33vw, 450px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col pt-5 pb-2 px-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#22201D] group-hover:text-[#4A3B32] transition-colors">
                    {r.name}
                  </h3>

                  {/* Features / Specs row */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-stone-500 border-b border-stone-200/70 pb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-stone-400">
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      {r.guests}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-stone-400">
                        <path d="M3 11v8M21 11v8M3 15h18M6 11V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                      {r.bed}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-stone-400">
                        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" stroke="currentColor" strokeWidth="1.6" />
                        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                      {r.feature}
                    </span>
                  </div>

                  <p className="mt-3 flex-1 text-xs sm:text-[13.5px] leading-relaxed text-stone-600 text-left">
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Gallery Modal xem toàn bộ ảnh phòng */}
      <RoomGalleryModal
        open={galleryOpen}
        initialIndex={galleryIndex}
        items={GALLERY_ITEMS}
        onClose={() => setGalleryOpen(false)}
        onBooking={onBooking}
      />
    </section>
  );
}
