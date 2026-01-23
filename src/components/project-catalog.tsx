import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";
import { Search, Eye } from "lucide-react";

interface ProjectItem {
  id: number;
  title: { ru: string; kz: string; en: string };
  description: { ru: string; kz: string; en: string };
  image: string;
  category: string;
  technologies: string[];
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: {
      ru: "Medica AI Diagnostics",
      kz: "Medica AI Диагностикасы",
      en: "Medica AI Diagnostics",
    },
    description: {
      ru: "Система анализа медицинских изображений с использованием глубокого обучения",
      kz: "Терең оқытуды пайдаланып медициналық суреттерді талдау жүйесі",
      en: "Medical image analysis system using deep learning",
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    id: 2,
    title: {
      ru: "FieldSense IoT Platform",
      kz: "FieldSense IoT Платформасы",
      en: "FieldSense IoT Platform",
    },
    description: {
      ru: "Умная платформа мониторинга сельскохозяйственных земель",
      kz: "Ауылшарушылық жерлерін қадағалау ойлы платформасы",
      en: "Smart agricultural land monitoring platform",
    },
    image: "https://images.unsplash.com/photo-1599707367971-6e80a9d7a857?w=400&h=400&fit=crop",
    category: "IoT",
    technologies: ["Node.js", "MQTT", "MongoDB"],
  },
  {
    id: 3,
    title: {
      ru: "EduWeb Platform",
      kz: "EduWeb Платформасы",
      en: "EduWeb Platform",
    },
    description: {
      ru: "Современная веб-платформа для онлайн-образования",
      kz: "Онлайн-білім беру үшін заманауи веб-платформасы",
      en: "Modern web platform for online education",
    },
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=400&fit=crop",
    category: "Web",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 4,
    title: {
      ru: "MobileLearn App",
      kz: "MobileLearn Қосымшасы",
      en: "MobileLearn App",
    },
    description: {
      ru: "Мобильное приложение для самообучения студентов",
      kz: "Студенттерінің өзін-өзі оқытуының ұялы қосымшасы",
      en: "Mobile app for student self-learning",
    },
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Swift"],
  },
  {
    id: 5,
    title: {
      ru: "VR Campus Experience",
      kz: "VR Кампус Тәжірибесі",
      en: "VR Campus Experience",
    },
    description: {
      ru: "Виртуальная реальность для экскурсии по кампусу",
      kz: "Кампус экскурсиясы үшін виртуальды шындық",
      en: "Virtual reality for campus tours",
    },
    image: "https://images.unsplash.com/photo-1617638924702-92d37c7a4c45?w=400&h=400&fit=crop",
    category: "VR/AR",
    technologies: ["Unity", "C#", "Oculus SDK"],
  },
  {
    id: 6,
    title: {
      ru: "AR Interior Design",
      kz: "AR Ішкі Дизайны",
      en: "AR Interior Design",
    },
    description: {
      ru: "Приложение дополненной реальности для дизайна интерьера",
      kz: "Ішкі дизайнын арналған ұзартылған шындық қосымшасы",
      en: "Augmented reality interior design app",
    },
    image: "https://images.unsplash.com/photo-1639096838987-4d66013a4450?w=400&h=400&fit=crop",
    category: "VR/AR",
    technologies: ["ARKit", "SwiftUI", "RealityKit"],
  },
  {
    id: 7,
    title: {
      ru: "ResearchData Analytics",
      kz: "ResearchData Аналитикасы",
      en: "ResearchData Analytics",
    },
    description: {
      ru: "Платформа для анализа и визуализации научных данных",
      kz: "Ғалымдық деректерді талдау және визуализациялау платформасы",
      en: "Platform for research data analysis and visualization",
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    category: "AI/ML",
    technologies: ["Python", "D3.js", "PostgreSQL"],
  },
  {
    id: 8,
    title: {
      ru: "SmartHome Control",
      kz: "SmartHome Бақылау",
      en: "SmartHome Control",
    },
    description: {
      ru: "Система управления умным домом через интернет вещей",
      kz: "Интернет нәрселері арқылы ұялы үйді басқару жүйесі",
      en: "Smart home control system via IoT",
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "IoT",
    technologies: ["Arduino", "Python", "MQTT"],
  },
];

const filterOptions = [
  { value: "all", label: "filter.all" },
  { value: "AI/ML", label: "filter.aiml" },
  { value: "IoT", label: "filter.iot" },
  { value: "Web", label: "filter.web" },
  { value: "Mobile", label: "filter.mobile" },
  { value: "VR/AR", label: "filter.vrar" },
];

export function ProjectCatalog() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesFilter =
        activeFilter === "all" || project.category === activeFilter;
      const title = project.title[language] || project.title.en;
      const description =
        project.description[language] || project.description.en;
      const matchesSearch =
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [searchQuery, activeFilter, language]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tau-burgundy/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-tau-burgundy to-tau-gold bg-clip-text text-transparent">
              {getTranslation(language, "catalog.title")}
            </span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tau-gold" />
            <input
              type="text"
              placeholder={getTranslation(language, "catalog.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-tau-dark-secondary border border-tau-burgundy/50 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-tau-gold transition-colors duration-300"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filterOptions.map((option) => {
            const label =
              option.value === "all"
                ? getTranslation(language, "catalog.filter.all")
                : option.value;

            return (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === option.value
                    ? "bg-gradient-to-r from-tau-burgundy to-tau-burgundy/80 text-white shadow-lg shadow-tau-burgundy/50"
                    : "bg-tau-dark-secondary border border-tau-burgundy/30 text-foreground/80 hover:border-tau-gold hover:text-tau-gold"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {filteredProjects.map((project, index) => {
            const title = project.title[language] || project.title.en;
            const description =
              project.description[language] || project.description.en;

            // Create varied heights for masonry effect
            const heightClass =
              index % 5 === 0 ? "lg:row-span-2" : "";

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden border border-tau-burgundy/30 hover:border-tau-gold transition-all duration-300 ${heightClass}`}
              >
                {/* Background Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tau-burgundy/80 via-transparent to-transparent group-hover:from-tau-burgundy/60 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Category Badge */}
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-tau-gold/90 text-tau-burgundy text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tau-gold transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-sm text-white/80 mb-3 line-clamp-2">
                      {description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-tau-burgundy/40 text-tau-gold px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <button className="w-full py-2 bg-tau-gold/20 border border-tau-gold text-tau-gold text-sm font-semibold rounded-lg hover:bg-tau-gold hover:text-tau-burgundy transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <Eye size={16} />
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">
              No projects found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
