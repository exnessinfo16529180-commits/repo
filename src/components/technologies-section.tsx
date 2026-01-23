import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";

const technologies = [
  { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
  { name: "Python", icon: "🐍", color: "from-blue-600 to-yellow-500" },
  { name: "Node.js", icon: "📦", color: "from-green-600 to-green-400" },
  { name: "TensorFlow", icon: "🧠", color: "from-orange-500 to-red-500" },
  { name: "Arduino", icon: "⚙️", color: "from-cyan-500 to-blue-600" },
  { name: "Unity", icon: "🎮", color: "from-black to-gray-600" },
  { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-400" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-cyan-500" },
];

export function TechnologiesSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tau-gold/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tau-burgundy/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-tau-burgundy to-tau-gold bg-clip-text text-transparent">
              {getTranslation(language, "technologies.title")}
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {getTranslation(language, "technologies.subtitle")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-tau-burgundy to-tau-gold rounded-full mx-auto mt-6" />
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative p-6 rounded-2xl bg-tau-dark-secondary/50 border border-tau-burgundy/30 hover:border-tau-gold transition-all duration-300 backdrop-blur-sm h-full flex flex-col items-center justify-center gap-4 group-hover:bg-tau-dark-secondary overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-tau-burgundy/20 to-tau-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon with animation */}
                <div className="text-5xl animate-float group-hover:animate-pulse">
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className="text-white font-bold text-center relative z-10">
                  {tech.name}
                </h3>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tau-burgundy to-tau-gold w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-6">
            And many more technologies powering innovation at TAU University
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-tau-burgundy to-tau-burgundy/80 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-tau-burgundy/50 transition-all duration-300">
            Explore All Technologies
          </button>
        </div>
      </div>
    </section>
  );
}
