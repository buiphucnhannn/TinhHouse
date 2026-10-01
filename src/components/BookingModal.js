"use client";

import { useEffect, useState } from "react";

export default function BookingModal({ open, onClose, defaultRoom = "Garden Room" }) {
  const [sent, setSent] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(defaultRoom);

  useEffect(() => {
    if (defaultRoom) setSelectedRoom(defaultRoom);
  }, [defaultRoom]);

  useEffect(() => {
    if (!open) setSent(false);
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[440px] max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-2xl sm:rounded-3xl bg-[#FAF7F0] p-5 sm:p-7 shadow-2xl border border-stone-200 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {!sent ? (
          <>
            <div className="relative text-center">
              <button
                onClick={onClose}
                className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-stone-200/80 hover:bg-stone-300/80 text-stone-600 transition flex items-center justify-center text-xs sm:text-sm cursor-pointer"
                aria-label="Đóng"
              >
                ✕
              </button>
              <h3 className="font-serif text-[20px] sm:text-2xl font-normal text-[#22201D] px-6 sm:px-8 tracking-tight sm:tracking-normal">
                Đặt phòng Tịnh House
              </h3>
              <p className="mt-1.5 text-[12px] sm:text-xs text-stone-500 text-center leading-relaxed max-w-[300px] sm:max-w-none mx-auto">
                Giữ chỗ miễn phí — nhân viên sẽ liên hệ xác nhận trong 15 phút.
              </p>
            </div>
            <form onSubmit={submit} className="mt-6 space-y-3.5">
              <div>
                <label className="text-xs text-stone-600 block mb-1 font-medium">Họ và tên</label>
                <input
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-xl border border-stone-300/80 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#4A3B32] transition"
                />
              </div>

              <div>
                <label className="text-xs text-stone-600 block mb-1 font-medium">Số điện thoại</label>
                <input
                  required
                  placeholder="0389 733 426"
                  pattern="[0-9+ ]{9,15}"
                  className="w-full rounded-xl border border-stone-300/80 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#4A3B32] transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="min-w-0">
                  <label className="text-xs text-stone-600 block mb-1 font-medium">Nhận phòng</label>
                  <input
                    required
                    type="date"
                    className="w-full min-w-0 rounded-xl border border-stone-300/80 bg-white px-2.5 sm:px-3 py-2 text-[12px] sm:text-xs text-stone-800 outline-none focus:border-[#4A3B32]"
                  />
                </div>
                <div className="min-w-0">
                  <label className="text-xs text-stone-600 block mb-1 font-medium">Trả phòng</label>
                  <input
                    required
                    type="date"
                    className="w-full min-w-0 rounded-xl border border-stone-300/80 bg-white px-2.5 sm:px-3 py-2 text-[12px] sm:text-xs text-stone-800 outline-none focus:border-[#4A3B32]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-stone-600 block mb-1 font-medium">Loại phòng</label>
                <select
                  className="w-full rounded-xl border border-stone-300/80 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none focus:border-[#4A3B32]"
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                >
                  <option value="Garden Room">Garden Room — View xanh, 2 khách</option>
                  <option value="Cozy Room">Cozy Room — Thiết kế mộc mạc, 2 khách</option>
                  <option value="Private Room">Private Room — Ban công yên tĩnh, 2 khách</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#4A3B32] py-3 text-sm font-medium text-white shadow-md hover:bg-[#382b24] transition mt-2"
              >
                Gửi yêu cầu đặt phòng
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-800">
              ✓
            </div>
            <h3 className="mt-4 font-serif text-2xl font-normal text-[#22201D]">
              Đã nhận yêu cầu!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xs mx-auto">
              Tịnh House sẽ gọi lại xác nhận trong 15 phút.
              Cảm ơn bạn đã lựa chọn một khoảng lặng giữa thiên nhiên.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-[#4A3B32] px-7 py-2.5 text-xs sm:text-sm font-medium text-white shadow hover:bg-[#382b24] transition"
            >
              Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

