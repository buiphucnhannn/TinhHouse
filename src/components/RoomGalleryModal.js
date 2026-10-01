"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function RoomGalleryModal({
  open,
  initialIndex = 0,
  items = [],
  onClose,
  onBooking,
  headerTitle = "Tịnh House • Chi tiết phòng nghỉ",
}) {
  const [index, setIndex] = useState(initialIndex);
  const pointerStartX = useRef(null);
  const pointerStartY = useRef(null);
  const isPointerDown = useRef(false);
  const lastWheelTime = useRef(0);

  // Sync index khi initialIndex thay đổi
  useEffect(() => {
    if (open) {
      setIndex(initialIndex);
    }
  }, [open, initialIndex]);

  const prev = useCallback(() => {
    setIndex((curr) => (curr === 0 ? items.length - 1 : curr - 1));
  }, [items.length]);

  const next = useCallback(() => {
    setIndex((curr) => (curr === items.length - 1 ? 0 : curr + 1));
  }, [items.length]);

  // Khóa cuộn trang nền khi mở modal
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Hỗ trợ phím mũi tên trái/phải và phím Escape
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, prev, next, onClose]);

  // Hỗ trợ Touchpad lướt ngang (2 ngón)
  const handleWheel = (e) => {
    if (!open) return;
    if (Math.abs(e.deltaX) > 25) {
      const now = Date.now();
      if (now - lastWheelTime.current > 380) {
        lastWheelTime.current = now;
        if (e.deltaX > 0) {
          next();
        } else {
          prev();
        }
      }
    }
  };

  // Hỗ trợ kéo lướt chuột / cảm ứng (Pointer Events)
  const handlePointerDown = (e) => {
    if (e.target.closest("button")) return;
    isPointerDown.current = true;
    pointerStartX.current = e.clientX;
    pointerStartY.current = e.clientY;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerUp = (e) => {
    if (!isPointerDown.current || pointerStartX.current === null) return;
    const diffX = pointerStartX.current - e.clientX;
    const diffY = pointerStartY.current !== null ? pointerStartY.current - e.clientY : 0;

    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        next();
      } else {
        prev();
      }
    }
    isPointerDown.current = false;
    pointerStartX.current = null;
    pointerStartY.current = null;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}
  };

  const handlePointerCancel = () => {
    isPointerDown.current = false;
    pointerStartX.current = null;
    pointerStartY.current = null;
  };

  if (!open || items.length === 0) return null;

  const currentItem = items[index] || items[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phòng nghỉ"
      onWheel={handleWheel}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md select-none overflow-hidden animate-in fade-in duration-200"
    >
      {/* Top Header: Centered Title & Close Button */}
      <div className="relative z-20 flex items-center justify-center px-3 py-3 sm:px-8 sm:py-4 min-h-[48px] sm:min-h-[60px]">
        <div className="text-center px-10 sm:px-16 max-w-full">
          <span className="text-white/85 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide sm:tracking-wider uppercase whitespace-nowrap inline-block">
            {headerTitle}
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Đóng giao diện xem ảnh"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white/25 hover:text-white cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Stage: Image and Left/Right Navigation buttons */}
      <div
        className="relative flex flex-1 items-center justify-center px-4 sm:px-8 md:px-16 touch-pan-y cursor-grab active:cursor-grabbing min-h-0"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {/* Nút lùi ảnh trái (<) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Ảnh trước (Mũi tên trái)"
          className="absolute left-2 sm:left-6 md:left-8 z-20 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/30 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Khung hiển thị ảnh trung tâm */}
        <div className="relative max-h-[50vh] sm:max-h-[62vh] w-full max-w-4xl aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl bg-black/40">
          <Image
            key={currentItem.src}
            src={currentItem.src}
            alt={currentItem.title || "Phòng nghỉ Tịnh House"}
            fill
            priority
            draggable={false}
            sizes="(max-width: 1200px) 95vw, 1100px"
            className="object-contain sm:object-cover transition-opacity duration-300 pointer-events-none select-none"
          />
        </div>

        {/* Nút tiến ảnh phải (>) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Ảnh tiếp theo (Mũi tên phải)"
          className="absolute right-2 sm:right-6 md:right-8 z-20 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/30 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Bottom Information Card: Room Details & Specs like the outside cards */}
      <div className="relative z-20 px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-center text-center max-w-4xl xl:max-w-5xl mx-auto w-full">
        {/* Title & Counter: Căn giữa đối xứng, không rớt 1 chữ trơ trọi */}
        <div className="max-w-2xl mx-auto text-center px-2">
          <h3 className="font-serif text-[16px] sm:text-xl md:text-2xl font-medium text-white tracking-normal sm:tracking-wide inline [text-wrap:balance]">
            {currentItem.title}
          </h3>
          <span className="ml-2 sm:ml-2.5 inline-flex items-center align-middle rounded-full bg-white/15 px-2 sm:px-2.5 py-0.5 font-mono text-[11px] sm:text-xs text-stone-200 font-sans not-italic whitespace-nowrap">
            {index + 1}/{items.length}
          </span>
        </div>

        {/* Specs Row with Icons (Guests, Bed, Feature) - khớp như các card bên ngoài */}
        {(currentItem.guests || currentItem.bed || currentItem.feature) && (
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-[13px] text-stone-200">
            {currentItem.guests && (
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-amber-200">
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                {currentItem.guests}
              </span>
            )}
            {currentItem.bed && (
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-amber-200">
                  <path d="M3 11v8M21 11v8M3 15h18M6 11V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                {currentItem.bed}
              </span>
            )}
            {currentItem.feature && (
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-amber-200">
                  <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                {currentItem.feature}
              </span>
            )}
          </div>
        )}

        {/* Description - Cân bằng chữ và ngắt dòng tự nhiên */}
        {currentItem.desc && (
          <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-2xl text-center leading-relaxed [text-wrap:balance] px-2">
            {currentItem.desc}
          </p>
        )}

        {/* Action Button: Đặt phòng ngay */}
        {onBooking && (
          <div className="mt-3">
            <button
              onClick={() => {
                onClose?.();
                onBooking(currentItem.title);
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-[#825A3E] hover:bg-[#996a49] text-white px-6 py-2 text-xs sm:text-sm font-medium transition shadow-lg cursor-pointer"
            >
              <span>Đặt phòng {currentItem.title}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
