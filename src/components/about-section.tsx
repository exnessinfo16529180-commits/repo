"use client";

import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: { ru: "Инновация", kz: "Инновация", en: "Innovation" },
    description: {
      ru: "Передовые технологии и идеи",
      kz: "Озық технологиялар мен идеялар",
      en: "Cutting-edge technologies and ideas",
    },
  },
  {
    title: { ru: "Сотрудничество", kz: "Ынамдарушылық", en: "Collaboration" },
    description: {
      ru: "Объединение студентов и преподавателей",
      kz: "Студент пен оқытушыларды біріктіру",
      en: "Bringing together students and faculty",
    },
  },
  {
    title: { ru: "Воздействие", kz: "Әсері", en: "Impact" },
    description: {
      ru: "Создание позитивного влияния на общество",
      kz: "Қоғамға ерте әсер ету",
      en: "Creating positive impact on society",
    },
  },
  {
    title: { ru: "Разнообразие", kz: "Әрбіртек", en: "Diversity" },
    description: {
      ru: "Разные подходы и технологии",
      kz: "Әрбіртек тәсілдер және технологиялар",
      en: "Diverse approaches and technologies",
    },
  },
];

export function AboutSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tau-burgundy/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 group">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-tau-burgundy/50 to-tau-gold/50 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />

            {/* Content Box */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-tau-burgundy/50 p-8 bg-gradient-to-br from-tau-dark-secondary/80 to-tau-dark-secondary/40 backdrop-blur-sm flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🎓</div>
                  <div>
                    <h3 className="text-tau-gold font-bold text-lg">
                      M.H. Dulati University
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Taraz, Kazakhstan
                    </p>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed text-sm">
                  One of Kazakhstan's leading educational institutions,
                  dedicated to fostering innovation and research excellence.
                </p>

                <div className="pt-4 border-t border-tau-burgundy/30">
                  <p className="text-tau-gold font-semibold mb-3">
                    Key Milestones
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>✓ Founded in 1938</li>
                    <li>✓ 150+ Research Projects</li>
                    <li>✓ 2500+ Active Students</li>
                    <li>✓ Global Partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-tau-burgundy to-tau-gold bg-clip-text text-transparent">
                {getTranslation(language, "about.title")}
              </span>
            </h2>

            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              {getTranslation(language, "about.description")}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title.en} className="flex gap-3">
                  <CheckCircle2 className="text-tau-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white">
                      {feature.title[language] || feature.title.en}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {feature.description[language] ||
                        feature.description.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8">
              <button className="group relative px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-tau-burgundy to-tau-burgundy/80 rounded-lg hover:shadow-xl hover:shadow-tau-burgundy/50 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
