"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const { language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const title = getTranslation(language, "hero.title");
  const subtitle = getTranslation(language, "hero.subtitle");
  const description = getTranslation(language, "hero.description");

  // Animated background with particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }> = [];

    const particleCount = 50;
    const burgundyColor = "rgb(139, 44, 74)";
    const goldColor = "rgb(245, 166, 35)";

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? burgundyColor : goldColor,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      // Clear with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#0a0a0a");
      gradient.addColorStop(0.5, "#1a0a12");
      gradient.addColorStop(1, "#0a0a0a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Falling Digits Overlay - Hacker Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-tau-gold font-mono text-xl animate-fall-digits font-bold"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-50px`,
                animationDuration: `${5 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 4}s`,
                letterSpacing: "0.2em",
                textShadow: "0 0 10px rgba(245, 166, 35, 0.8)",
              }}
            >
              {Math.random() > 0.5 ? "01" : "10"}{Math.floor(Math.random() * 10)}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[896px] px-4">
        {/* Animated Title */}
        <h1 className="font-black mb-4 leading-tight" style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
          <span className="block animate-pixelate-in" style={{ animationDelay: "0.1s" }}>
            <span className="bg-gradient-to-r from-white via-tau-burgundy to-tau-gold bg-clip-text text-transparent">
              {title}
            </span>
          </span>
        </h1>

        {/* Animated Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-tau-gold mb-6 animate-slideDown font-semibold">
          {subtitle}
        </h2>

        {/* Description */}
        <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto mb-12 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          {description}
        </p>

        {/* CTA Button */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          <button className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-tau-burgundy to-tau-burgundy/80 rounded-lg hover:shadow-2xl hover:shadow-tau-burgundy/50 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-tau-gold to-tau-burgundy opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-tau-burgundy/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-tau-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          {/* Animated scroll wheel */}
          <div className="relative w-6 h-10 border-2 border-tau-gold/40 rounded-full animate-pulse">
            {/* Scroll dot */}
            <div className="absolute left-1/2 top-2 w-1 h-1.5 bg-tau-gold rounded-full -translate-x-1/2 animate-bounce" style={{ animationDuration: "2s" }} />
          </div>

          {/* Glowing accent line */}
          <div className="h-8 w-px bg-gradient-to-b from-tau-gold to-transparent opacity-60" />

          {/* Floating particles effect */}
          <div className="relative w-8 h-2">
            <div className="absolute left-0 w-1 h-1 bg-tau-gold rounded-full opacity-0 animate-float" style={{ animationDelay: "0s" }} />
            <div className="absolute left-1/2 w-1 h-1 bg-tau-gold rounded-full opacity-0 animate-float" style={{ animationDelay: "0.3s" }} />
            <div className="absolute right-0 w-1 h-1 bg-tau-gold rounded-full opacity-0 animate-float" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
