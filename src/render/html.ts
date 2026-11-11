export const esc = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Escape, then turn `code` spans into monospace spans. */
export const inline = (s: string): string => esc(s).replace(/`([^`]+)`/g, '<span class="mono">$1</span>');

export const tags = (items: string[]): string =>
  `<div class="tags">${items.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
