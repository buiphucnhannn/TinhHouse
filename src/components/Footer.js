import Logo from "./Logo";
import { scrollToId } from "../utils/smoothScroll";

export default function Footer() {
  return (
    <footer className="bg-[#021f18] text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Homestay tĩnh lặng giữa lòng Vũng Tàu. Gỗ — lá — trà — biển.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-white">Liên hệ</h4>
          <ul className="mt-3 space-y-2">
            <li>📍 12/8 Trần Phú, Vũng Tàu</li>
            <li>
              📞 <a href="tel:0900000000" className="hover:text-white">0900 000 000</a>
            </li>
            <li>
              ✉️ <a href="mailto:hello@tinhhouse.vn" className="hover:text-white">hello@tinhhouse.vn</a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-white">Đi nhanh</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ["gioi-thieu", "Giới thiệu"],
              ["khong-gian", "Không gian"],
              ["dich-vu", "Dịch vụ"],
              ["ban-do", "Bản đồ"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/10 hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} TinhHouse Vũng Tàu • Làm bằng Next.js + Tailwind
      </div>
    </footer>
  );
}
