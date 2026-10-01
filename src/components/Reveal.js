"use client";

import { useEffect, useRef, useState } from "react";

const VARIANTS = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-8 sm:translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-8 sm:-translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  "zoom-soft": {
    hidden: "opacity-0 scale-[0.93] blur-[1px]",
    visible: "opacity-100 scale-100 blur-0",
  },
  "card-float": {
    hidden: "opacity-0 translate-y-10 scale-[0.96] blur-[1px]",
    visible: "opacity-100 translate-y-0 scale-100 blur-0",
  },
  "slide-up-grow": {
    hidden: "opacity-0 translate-y-8 scale-[0.98]",
    visible: "opacity-100 translate-y-0 scale-100",
  },
};

/**
 * Reveal Component
 * - Hoạt động cả khi lướt lên lẫn lướt xuống, cả lúc mới load hay load lâu
 * - Hỗ trợ nhiều hiệu ứng độc đáo cho từng section
 * - Mượt mà, êm ái, tối ưu hiệu năng
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  duration = 750,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // Khi phần tử lướt ra khỏi màn hình (kể cả lướt lên hoặc lướt xuống),
          // reset lại trạng thái để khi lướt tới lại sẽ xuất hiện mượt mà
          setVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "-20px 0px -30px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const selectedVariant = VARIANTS[variant] || VARIANTS["fade-up"];

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-[transform,opacity] ${
        visible ? selectedVariant.visible : selectedVariant.hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
