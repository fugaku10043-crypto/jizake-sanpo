import { useEffect, useState } from "react";

const navItems = [
  { id: "map", label: "地図から探す", href: "#map" },
  { id: "diagnosis", label: "気分で診断", href: "#diagnosis" },
  { id: "guide", label: "初心者向けガイド", href: "#guide" },
  { id: "about", label: "このサイトについて", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-50/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 cursor-pointer"
          aria-label="地酒さんぽ ホーム"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-background-50 text-lg font-bold font-heading">
            <i className="ri-cup-line"></i>
          </span>
          <span className="text-xl md:text-2xl font-heading font-bold text-foreground-900 tracking-tight">
            地酒さんぽ
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-background-100/80 rounded-full px-1 py-1 backdrop-blur">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-label text-foreground-700 hover:bg-background-50 hover:text-primary-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#map"
            className="ml-1 px-4 py-2 rounded-full bg-primary-500 text-background-50 text-sm font-label hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            地図をひらく
          </a>
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-background-100 text-foreground-900 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニューを開く"
        >
          <i className={`ri-${menuOpen ? "close-line" : "menu-line"} text-xl`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200 px-4 py-3 flex flex-col gap-1 anim-pop-in">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-md text-foreground-800 font-label hover:bg-background-100 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}