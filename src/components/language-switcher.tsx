"use client";

import { useLanguage } from "@/lib/language-context";
import { Language } from "@/lib/i18n";

const languages: { code: Language; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "KZ" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-background px-3 py-2 rounded-lg border border-tau-burgundy/20">
      {languages.map((lang, index) => (
        <div key={lang.code}>
          <button
            onClick={() => setLanguage(lang.code)}
            className={`px-2 py-1 text-xs font-semibold transition-all duration-300 relative ${
              language === lang.code
                ? "text-tau-gold"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {lang.label}
            {language === lang.code && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-tau-burgundy to-tau-gold rounded-full"></div>
            )}
          </button>
          {index < languages.length - 1 && (
            <div className="inline-block w-px h-4 mx-1 bg-tau-burgundy/30"></div>
          )}
        </div>
      ))}
    </div>
  );
}
