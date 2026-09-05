import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import useTheme from "../hooks/useTheme";

function ThemeToggle({ theme, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex items-center justify-center rounded-md border border-border p-2 text-text-muted hover:text-accent hover:border-accent/50 transition-colors duration-200 ${className}`}
    >
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-mono text-sm sm:text-base font-semibold text-text tracking-tight whitespace-nowrap"
        >
          <span className="text-accent">~/</span>
          {profile.shortName.toLowerCase().replace(/\s+/g, "-")}
        </a>

        <ul className="hidden lg:flex items-center gap-4 xl:gap-8 font-mono text-sm whitespace-nowrap ml-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors duration-200 hover:text-accent ${
                  active === link.href ? "text-accent" : "text-text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3 shrink-0 ml-4">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center rounded-md border border-accent/40 px-4 py-1.5 font-mono text-sm text-accent hover:bg-accent hover:text-bg transition-colors duration-200 whitespace-nowrap"
          >
            Say hello
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden -mr-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            className="text-text p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-bg-soft border-t border-border-soft">
          <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-1 text-text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="inline-flex items-center rounded-md border border-accent/40 px-4 py-1.5 text-accent"
              >
                Say hello
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
