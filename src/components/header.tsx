import Link from "next/link";
import { TAULogo } from "./tau-logo";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";

export function Header() {
  const { language } = useLanguage();

  const navLinks = [
    { href: "/", label: getTranslation(language, "nav.home") },
    { href: "/projects", label: getTranslation(language, "nav.projects") },
    { href: "/technologies", label: getTranslation(language, "nav.technologies") },
    { href: "/about", label: getTranslation(language, "nav.about") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-tau-burgundy/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between" style={{ margin: "-2px auto 0" }}>
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-tau-burgundy/30 blur-lg rounded-lg"></div>
            <TAULogo size={40} className="relative" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-tau-burgundy">TAU</div>
            <div className="text-xs text-foreground/60">UNIVERSITY</div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-tau-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tau-burgundy to-tau-gold group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </nav>

        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
