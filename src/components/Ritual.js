"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import RoomGalleryModal from "./RoomGalleryModal";

const GALLERY_ITEMS = [
  {
    src: "/TinhHouse/AnhSP4.jpg",
    title: "Phòng ngủ rèm lụa & Ban công xanh",
    desc: "Không gian mở ngập tràn ánh nắng sớm và tầm nhìn hướng ra khu vườn yên bình.",
  },
  {
    src: "/images/living_room.jpg",
    title: "Phòng khách mộc mạc",
    desc: "Nơi quây quần chuyện trò, nhâm nhi tách trà ấm và lắng nghe tiếng gió vi vu qua thềm nhà.",
  },
  {
    src: "/images/shelf_lamp.jpg",
    title: "Kệ gỗ & Đèn ấm cổ điển",
    desc: "Từng góc nhỏ đều được chăm chút với chất liệu gỗ mộc, cây xanh và ánh đèn vàng dịu nhẹ.",
  },
  {
    src: "/TinhHouse/AnhSP.jpg",
    title: "Phòng ngủ ngập tràn ánh sáng",
    desc: "Góc giường êm ái bên chậu cây xanh, mang đến giấc ngủ sâu và nguồn năng lượng tích cực.",
  },
  {
    src: "/images/window_cushion.jpg",
    title: "Góc đọc sách bên ô cửa sổ",
    desc: "Một chốn nhỏ riêng tư để đọc cuốn sách yêu thích và ngắm nhìn tán lá xanh bên ngoài.",
  },
  {
    src: "/images/branch_ivy.jpg",
    title: "Dây leo & Cành cây khô nghệ thuật",
    desc: "Điểm nhấn trang trí độc bản mang hơi thở núi rừng mộc mạc vào từng nhịp sống.",
  },
];

export default function Ritual() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (idx = 0) => {
    setGalleryIndex(idx);
    setGalleryOpen(true);
  };

  return (
    <section id="hinh-anh" className="relative scroll-mt-12 bg-[#FAF7F0] py-12 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14 xl:px-20">
        {/* Header row */}
        <div className="pb-8 sm:pb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-stone-500">
                <path
                  d="M12 2C8.5 7 5 10 5 14a7 7 0 0 0 14 0c0-4-3.5-7-7-12Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path d="M12 8v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">
                NHỮNG GÓC NHỎ CỦA TỊNH
              </span>
            </div>
          </Reveal>

          <div className="mt-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Reveal delay={100}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#22201D]">
                Một chút nắng, một chút xanh<br />
                và rất nhiều bình yên.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <button
                onClick={() => openGallery(0)}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 transition cursor-pointer self-start md:self-auto"
              >
                <span>Xem thêm ảnh</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </Reveal>
          </div>
        </div>

        {/* 4-Column Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {/* Col 1: Tall Garden photo (Index 0) */}
          <Reveal variant="zoom-soft" delay={100}>
            <div
              onClick={() => openGallery(0)}
              className="group relative h-[260px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <Image
                src="/TinhHouse/AnhSP4.jpg"
                alt="Vườn xanh tại Tịnh House"
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </div>
          </Reveal>

          {/* Col 2: Tall Living room photo (Index 1) */}
          <Reveal variant="zoom-soft" delay={180}>
            <div
              onClick={() => openGallery(1)}
              className="group relative h-[260px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <Image
                src="/images/living_room.jpg"
                alt="Phòng khách mộc mạc"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </div>
          </Reveal>

          {/* Col 3: Two stacked photos (lamp: Index 2 & bedroom: Index 3) */}
          <div className="flex flex-col gap-3.5 sm:gap-6">
            <Reveal variant="zoom-soft" delay={240}>
              <div
                onClick={() => openGallery(2)}
                className="group relative h-[150px] sm:h-[208px] lg:h-[227px] w-full overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src="/images/shelf_lamp.jpg"
                  alt="Đèn ngủ cổ điển"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </div>
            </Reveal>

            <Reveal variant="zoom-soft" delay={300}>
              <div
                onClick={() => openGallery(3)}
                className="group relative h-[150px] sm:h-[208px] lg:h-[227px] w-full overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src="/TinhHouse/AnhSP.jpg"
                  alt="Phòng ngủ với rèm trắng"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </div>
            </Reveal>
          </div>

          {/* Col 4: Two stacked photos (window daybed: Index 4 & branch ivy: Index 5) */}
          <div className="flex flex-col gap-3.5 sm:gap-6">
            <Reveal variant="zoom-soft" delay={360}>
              <div
                onClick={() => openGallery(4)}
                className="group relative h-[150px] sm:h-[208px] lg:h-[227px] w-full overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src="/images/window_cushion.jpg"
                  alt="Góc đọc sách bên cửa sổ"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </div>
            </Reveal>

            <Reveal variant="zoom-soft" delay={420}>
              <div
                onClick={() => openGallery(5)}
                className="group relative h-[150px] sm:h-[208px] lg:h-[227px] w-full overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src="/images/branch_ivy.jpg"
                  alt="Cành cây và cây xanh trang trí"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Lightbox / Gallery Modal xem toàn bộ ảnh góc nhỏ */}
      <RoomGalleryModal
        open={galleryOpen}
        initialIndex={galleryIndex}
        items={GALLERY_ITEMS}
        headerTitle="Tịnh House • Những góc nhỏ bình yên"
        onClose={() => setGalleryOpen(false)}
      />
    </section>
  );
}
