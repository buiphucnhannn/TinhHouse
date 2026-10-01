// Cuộn mượt tới section theo id (JS thuần, không cần thư viện)
export function scrollToId(id) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function handleAnchorClick(e, id) {
  e.preventDefault();
  scrollToId(id);
  // Đóng menu mobile nếu cần: update hash mà không reload
  if (window.history?.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}
