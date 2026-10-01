"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { scrollToId } from "../utils/smoothScroll";

const LINKS = [
  { id: "trang-chu", label: "Trang chủ" },
  { id: "ve-tinh", label: "Về Tịnh" },
  { id: "phong-nghi", label: "Phòng nghỉ" },
  { id: "trai-nghiem", label: "Trải nghiệm" },
  { id: "hinh-anh", label: "Hình ảnh" },
  { id: "lien-he", label: "Liên hệ" },
];

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 py-3 sm:py-4 transition-all duration-300">
        {/* Background Layer 1: Dark soft gradient when at the very top (fades out smoothly) */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent transition-opacity duration-500 ease-out ${
            scrolled || open ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Background Layer 2: Warm cream frosted glass background when scrolled or menu open */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-[#FAF7F0]/95 backdrop-blur-md shadow-xs border-b border-stone-200/60 transition-opacity duration-500 ease-out ${
            scrolled || open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Nav Content Container */}
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start items-center">
            <Logo light={!scrolled && !open} />
          </div>

          {/* Center: Menu Links (perfectly centered between Logo and Button on desktop) */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-initial">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`text-[13.5px] font-medium tracking-wide transition-colors duration-300 hover:opacity-100 ${
                  scrolled || open
                    ? "text-[#22201D]/75 hover:text-[#22201D]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right: Booking Button & Mobile Hamburger */}
          <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3">
            <button
              onClick={onBooking}
              className={`rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm ${
                scrolled || open
                  ? "bg-[#7A5034] text-white hover:bg-[#684128] hover:shadow-md"
                  : "bg-white text-stone-900 hover:bg-stone-100 hover:shadow"
              }`}
            >
              Đặt phòng
            </button>

            {/* Mobile hamburger button */}
            <button
              className={`md:hidden rounded-full p-2 transition-colors duration-300 cursor-pointer ${
                scrolled || open ? "text-stone-900 hover:bg-stone-200/50" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Đóng menu" : "Mở menu"}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {open ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Menu */}
        {open && (
          <div className="relative mt-2 border-t border-stone-200/80 bg-[#FAF7F0] px-4 pb-5 pt-3 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-1">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-stone-800 hover:bg-stone-200/60 active:bg-stone-200 transition cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setOpen(false);
                onBooking?.();
              }}
              className="mt-3.5 w-full rounded-full bg-[#7A5034] py-3 text-center text-sm font-medium text-white shadow-sm hover:bg-[#684128] transition cursor-pointer"
            >
              Đặt phòng ngay
            </button>
          </div>
        )}
      </header>

      {/* Backdrop overlay on mobile when menu is open */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}


