"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";

interface StatItem {
  key: string;
  countKey: string;
  labelKey: string;
}

const stats: StatItem[] = [
  { key: "projects", countKey: "stats.projectsCount", labelKey: "stats.projects" },
  { key: "students", countKey: "stats.studentsCount", labelKey: "stats.students" },
  {
    key: "technologies",
    countKey: "stats.technologiesCount",
    labelKey: "stats.technologies",
  },
];

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentCount = Math.floor(target * progress);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [target, duration]);

  return <span ref={countRef}>{count}</span>;
}

export function StatsSection() {
  const { language } = useLanguage();

  const parseCount = (countStr: string): number => {
    return parseInt(countStr.replace(/[^0-9]/g, ""));
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/50 to-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tau-burgundy/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tau-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-tau-burgundy to-tau-gold bg-clip-text text-transparent">
              Digital TAU by the Numbers
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tau-burgundy to-tau-gold rounded-full mx-auto" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const countStr = getTranslation(language, stat.countKey);
            const count = parseCount(countStr);
            const label = getTranslation(language, stat.labelKey);
            const suffix = countStr.includes("+") ? "+" : "";

            return (
              <div
                key={stat.key}
                className="group relative p-8 rounded-2xl bg-tau-dark-secondary/50 border border-tau-burgundy/30 hover:border-tau-burgundy/60 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-tau-burgundy/20 to-tau-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Animated Number */}
                  <div className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-tau-burgundy to-tau-gold bg-clip-text text-transparent">
                    <AnimatedCounter target={count} />
                    <span className="text-tau-gold">{suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-lg text-foreground/80 font-semibold">{label}</p>

                  {/* Decorative line */}
                  <div className="mt-4 w-0 h-1 bg-gradient-to-r from-tau-burgundy to-tau-gold group-hover:w-full rounded-full transition-all duration-500 mx-auto" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
