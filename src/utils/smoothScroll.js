// Cuộn mượt chậm rãi, sang trọng tới section (custom requestAnimationFrame với easeInOutCubic)
let activeScrollAnimation = null;

export function scrollToId(id, customOffset) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Xóa bỏ dấu # trên URL nếu có
  if (window.history?.replaceState) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  let targetY = 0;

  if (id && id !== "trang-chu") {
    const el = document.getElementById(id);
    if (!el) return;

    // Tính vị trí lý tưởng nhất để ngắm nhìn section:
    // Header cố định cao ~72-76px, thêm khoảng đệm ~14-20px để tiêu đề section nằm ở vị trí thoải mái nhất
    const headerOffset =
      customOffset !== undefined
        ? customOffset
        : window.innerWidth >= 640
        ? 80
        : 72;

    const elementRect = el.getBoundingClientRect();
    targetY = Math.max(0, elementRect.top + window.scrollY - headerOffset);
  }

  smoothScrollTo(targetY);
}

export function smoothScrollTo(targetY, minDuration = 800, maxDuration = 1200) {
  if (typeof window === "undefined") return;

  // Hủy animation đang chạy nếu có
  if (activeScrollAnimation) {
    cancelAnimationFrame(activeScrollAnimation);
    activeScrollAnimation = null;
  }

  const startY = window.scrollY || window.pageYOffset;
  const distance = targetY - startY;
  if (Math.abs(distance) < 4) return;

  // Thời lượng cuộn: tỷ lệ theo quãng đường nhưng khống chế trong khoảng êm ái
  const duration = Math.min(Math.max(Math.abs(distance) * 0.55, minDuration), maxDuration);
  let startTime = null;

  // Easing function: easeInOutCubic (êm ái, chậm dần lúc bắt đầu và kết thúc)
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const onUserInteraction = () => {
    if (activeScrollAnimation) {
      cancelAnimationFrame(activeScrollAnimation);
      activeScrollAnimation = null;
    }
    window.removeEventListener("wheel", onUserInteraction);
    window.removeEventListener("touchmove", onUserInteraction);
  };

  window.addEventListener("wheel", onUserInteraction, { passive: true, once: true });
  window.addEventListener("touchmove", onUserInteraction, { passive: true, once: true });

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      activeScrollAnimation = requestAnimationFrame(step);
    } else {
      activeScrollAnimation = null;
      window.removeEventListener("wheel", onUserInteraction);
      window.removeEventListener("touchmove", onUserInteraction);
      // Đảm bảo URL luôn sạch sẽ, không vướng dấu #
      if (window.history?.replaceState) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
  };

  activeScrollAnimation = requestAnimationFrame(step);
}

export function handleAnchorClick(e, id) {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }
  scrollToId(id);
}
