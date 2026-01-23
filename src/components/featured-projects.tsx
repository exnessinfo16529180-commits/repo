"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: { ru: string; kz: string; en: string };
  description: { ru: string; kz: string; en: string };
  image: string;
  technologies: string[];
  category: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: {
      ru: "AI-Powered Diagnostic System",
      kz: "AI-Ықсалды Диагностика Жүйесі",
      en: "AI-Powered Diagnostic System",
    },
    description: {
      ru: "Инновационная система диагностики на основе искусственного интеллекта для медицинских учреждений",
      kz: "Ғалымдық ынамдарындағы қызмет көрсету үшін жасанды интеллектке негізделген диагностика жүйесі",
      en: "Innovative AI-powered diagnostic system for medical institutions",
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    category: "AI/ML",
  },
  {
    id: 2,
    title: {
      ru: "Smart IoT Agriculture",
      kz: "Ойлы IoT Ауылшарушылығы",
      en: "Smart IoT Agriculture",
    },
    description: {
      ru: "Интеллектуальная система мониторинга сельскохозяйственных полей с использованием IoT датчиков",
      kz: "IoT датчиктері арқылы ауылшарушылық өндірісінің ынамдарын қадағалау жүйесі",
      en: "Smart monitoring system for agricultural fields using IoT sensors",
    },
    image: "https://images.unsplash.com/photo-1599707367971-6e80a9d7a857?w=800&h=600&fit=crop",
    technologies: ["Arduino", "Node.js", "MQTT"],
    category: "IoT",
  },
  {
    id: 3,
    title: {
      ru: "Virtual Reality Campus Tour",
      kz: "Виртуальды Шындық Кампусы Саяхаты",
      en: "Virtual Reality Campus Tour",
    },
    description: {
      ru: "Интерактивная VR-экскурсия по кампусу университета с использованием современных технологий",
      kz: "Университет кампусын ынамдарында жүргінідің виртуальды шындық экскурсиясы",
      en: "Interactive VR campus tour using cutting-edge technology",
    },
    image: "https://images.unsplash.com/photo-1617638924702-92d37c7a4c45?w=800&h=600&fit=crop",
    technologies: ["Unity", "Oculus SDK", "C#"],
    category: "VR/AR",
  },
];

export function FeaturedProjects() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = featuredProjects[activeIndex];
  const title = activeProject.title[language] || activeProject.title.en;
  const description =
    activeProject.description[language] || activeProject.description.en;

  const goToPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tau-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-tau-burgundy to-tau-gold bg-clip-text text-transparent">
              {getTranslation(language, "featured.title")}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tau-burgundy to-tau-gold rounded-full mx-auto" />
        </div>

        {/* Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative h-96 group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-tau-burgundy/50 to-tau-gold/50 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />

            {/* Image container */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-tau-burgundy/50">
              <img
                src={activeProject.image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-tau-burgundy/40 via-transparent to-transparent" />
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4 px-4 py-2 bg-tau-gold/90 text-tau-burgundy font-bold rounded-full text-sm">
              {activeProject.category}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <p className="text-sm font-semibold text-tau-gold mb-3 uppercase tracking-wider">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-tau-burgundy/20 border border-tau-burgundy/50 text-foreground/80 rounded-full text-sm hover:bg-tau-burgundy/30 hover:border-tau-gold transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="group relative px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-tau-burgundy to-tau-burgundy/80 rounded-lg hover:shadow-xl hover:shadow-tau-burgundy/50 transition-all duration-300 overflow-hidden w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">
                {getTranslation(language, "featured.viewProject")}
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between pt-8 border-t border-tau-burgundy/30">
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-lg border border-tau-burgundy/50 text-tau-gold hover:bg-tau-burgundy/20 transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-lg border border-tau-burgundy/50 text-tau-gold hover:bg-tau-burgundy/20 transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-tau-gold"
                        : "w-2 bg-tau-burgundy/50 hover:bg-tau-burgundy"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
