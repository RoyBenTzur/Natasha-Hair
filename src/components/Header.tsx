import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#collection", label: t("nav.collection") },
    { href: "#story", label: t("nav.story") },
    { href: "#pro", label: t("nav.pro") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="text-xl md:text-2xl">
          <Wordmark />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.22em] text-cream/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setLang(lang === "he" ? "en" : "he")}
          className="text-xs uppercase tracking-[0.22em] text-cream/70 hover:text-gold transition-colors border border-border rounded-full px-4 py-2"
          aria-label="Toggle language"
        >
          {lang === "he" ? "EN" : "עב"}
        </button>
      </div>
    </header>
  );
}
