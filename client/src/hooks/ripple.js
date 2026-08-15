// Attaches a gold ripple effect on click, same as the original .book-mini script.
export function handleRipple(e) {
  const btn = e.currentTarget;
  const r = btn.getBoundingClientRect();
  const s = document.createElement("span");
  s.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,.32);width:80px;height:80px;left:${
    e.clientX - r.left - 40
  }px;top:${e.clientY - r.top - 40}px;transform:scale(0);animation:ripple-anim .5s ease-out forwards;pointer-events:none;`;
  btn.appendChild(s);
  setTimeout(() => s.remove(), 600);
}
