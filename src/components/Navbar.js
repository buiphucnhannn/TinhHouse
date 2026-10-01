"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { scrollToId } from "../utils/smoothScroll";

const LINKS = [
  { id: "gioi-thieu", label: "Giới thiệu" },
  { id: "khong-gian", label: "Không gian" },
  { id: "dich-vu", label: "Dịch vụ" },
  { id: "trai-nghiem", label: "Trải nghiệm" },
  { id: "cam-nhan", label: "Cảm nhận" },
  { id: "ban-do", label: "Bản đồ" },
];

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <div className={scrolled ? "" : "brightness-0 invert"}>
          <Logo />
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                scrolled ? "text-emerald-950" : "text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={onBooking}
            className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300"
          >
            Đặt phòng
          </button>
        </div>

        <button
          className={`lg:hidden rounded-lg p-2 ${
            scrolled ? "text-emerald-950" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Mở menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t bg-white px-4 pb-4 pt-2 lg:hidden">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-emerald-950 hover:bg-emerald-50"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBooking?.();
            }}
            className="mt-2 w-full rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-emerald-950"
          >
            Đặt phòng ngay
          </button>
        </div>
      )}
    </header>
  );
}
