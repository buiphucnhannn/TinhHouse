"use client";

import { useEffect, useState } from "react";

export default function BookingModal({ open, onClose }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) setSent(false);
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Khóa scroll nền khi mở modal
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    // TODO: gọi API/Zalo/Facebook tại đây. Hiện chỉ demo front-end.
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {!sent ? (
          <>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-emerald-950">
                  Đặt phòng TinhHouse
                </h3>
                <p className="mt-1 text-sm text-emerald-950/60">
                  Giữ chỗ miễn phí — xác nhận qua điện thoại trong 15 phút.
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-900"
                aria-label="Đóng"
              >
                ✕
              </button>
            </div>
            <form onSubmit={submit} className="mt-5 space-y-3">
              <input
                required
                placeholder="Tên của bạn"
                className="w-full rounded-xl border border-emerald-950/15 px-4 py-3 text-sm outline-none focus:border-emerald-700"
              />
              <input
                required
                placeholder="Số điện thoại"
                pattern="[0-9+ ]{9,15}"
                className="w-full rounded-xl border border-emerald-950/15 px-4 py-3 text-sm outline-none focus:border-emerald-700"
              />
              <div className="grid grid-cols-2 gap-3">
                <label className="text-xs text-emerald-950/60">
                  Nhận phòng
                  <input
                    required
                    type="date"
                    className="mt-1 w-full rounded-xl border border-emerald-950/15 px-3 py-2.5 text-sm text-emerald-950"
                  />
                </label>
                <label className="text-xs text-emerald-950/60">
                  Trả phòng
                  <input
                    required
                    type="date"
                    className="mt-1 w-full rounded-xl border border-emerald-950/15 px-3 py-2.5 text-sm text-emerald-950"
                  />
                </label>
              </div>
              <select
                className="w-full rounded-xl border border-emerald-950/15 px-4 py-3 text-sm"
                defaultValue="Phòng Tĩnh — 650k/đêm"
              >
                <option>Phòng Tĩnh — 650k/đêm</option>
                <option>Phòng Lặng — 850k/đêm</option>
                <option>Nhà Riêng nguyên căn — 1.900k/đêm</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-full bg-amber-400 py-3.5 font-semibold text-emerald-950 hover:bg-amber-300"
              >
                Gửi yêu cầu giữ chỗ
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
              ✓
            </div>
            <h3 className="mt-4 text-xl font-bold text-emerald-950">
              Đã nhận yêu cầu!
            </h3>
            <p className="mt-2 text-sm text-emerald-950/70">
              TinhHouse sẽ gọi lại xác nhận trong 15 phút (8h–21h).
              Cảm ơn bạn đã chọn sự tĩnh lặng.
            </p>
            <button
              onClick={onClose}
              className="mt-5 rounded-full bg-emerald-900 px-6 py-2.5 text-sm font-semibold text-white"
            >
              Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
