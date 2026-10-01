import Image from "next/image";
import { scrollToId } from "../utils/smoothScroll";

export default function Logo({ light = false, showText = true, className = "" }) {
  const handleClick = (e) => {
    e.preventDefault();
    scrollToId("trang-chu");
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}
    >
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 transition-transform group-hover:scale-105 duration-300">
        <Image
          src="/TinhHouse/logo.png"
          alt="Tịnh House Logo"
          fill
          sizes="48px"
          className={`object-contain transition-all ${
            light ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" : ""
          }`}
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-serif text-lg tracking-[0.18em] font-semibold transition-colors ${
              light ? "text-white" : "text-[#22201D]"
            }`}
          >
            TỊNH HOUSE
          </span>
        </div>
      )}
    </a>
  );
}

