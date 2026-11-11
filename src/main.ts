import "./styles/globals.css";

const root = document.documentElement;

document.getElementById("theme")?.addEventListener("click", () => {
  const explicit = root.getAttribute("data-theme");
  const dark = explicit === "dark" || (!explicit && matchMedia("(prefers-color-scheme: dark)").matches);
  const next = dark ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("kk-theme", next); } catch { /* storage unavailable */ }
});

const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".links a"));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        for (const a of links) a.setAttribute("aria-current", String(a.getAttribute("href") === `#${e.target.id}`));
      }
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );
  for (const a of links) {
    const section = document.querySelector(a.getAttribute("href") ?? "");
    if (section) io.observe(section);
  }
}

const copy = document.getElementById("copy") as HTMLButtonElement | null;
copy?.addEventListener("click", async () => {
  const flash = (msg: string) => {
    copy.textContent = msg;
    setTimeout(() => (copy.textContent = "Copy address"), 2000);
  };
  try {
    await navigator.clipboard.writeText(copy.dataset.copy ?? "");
    flash("Copied");
  } catch {
    const target = copy.previousElementSibling;
    if (target) {
      const range = document.createRange();
      range.selectNodeContents(target);
      const sel = getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    flash("Select the address above");
  }
});
