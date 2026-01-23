export type Language = "ru" | "kz" | "en";

export const translations = {
  ru: {
    nav: {
      home: "Главная",
      projects: "Проекты",
      technologies: "Технологии",
      about: "О платформе",
    },
    hero: {
      title: "DIGITAL TAU",
      subtitle: "Витрина Инноваций и Исследований",
      description: "Где встречаются идеи и технология",
    },
    stats: {
      projects: "Проектов",
      students: "Студентов",
      technologies: "Технологий",
      projectsCount: "150+",
      studentsCount: "2500+",
      technologiesCount: "45+",
    },
    featured: {
      title: "Избранные Проекты",
      viewProject: "Смотреть проект",
    },
    catalog: {
      title: "Каталог Проектов",
      search: "Поиск проектов...",
      filter: {
        all: "Все",
        aiml: "AI/ML",
        iot: "IoT",
        web: "Веб",
        mobile: "Мобильные",
        vrar: "VR/AR",
      },
    },
    technologies: {
      title: "Технологии",
      subtitle: "Передовые технологии в каждом проекте",
    },
    about: {
      title: "О Digital TAU",
      description:
        "Digital TAU представляет собой современную платформу для демонстрации инновационных проектов и исследований Таразского государственного университета имени М.Х. Дулати.",
    },
    footer: {
      copyright: "© 2025 TAU Университет",
      contacts: "Контакты",
      social: "Социальные сети",
    },
  },
  kz: {
    nav: {
      home: "Басты бет",
      projects: "Жобалар",
      technologies: "Технологиялар",
      about: "Платформа туралы",
    },
    hero: {
      title: "DIGITAL TAU",
      subtitle: "Инновация және Зерттеу Витринасы",
      description: "Идеялар мен технология бір болатын жер",
    },
    stats: {
      projects: "Жоба",
      students: "Студент",
      technologies: "Технология",
      projectsCount: "150+",
      studentsCount: "2500+",
      technologiesCount: "45+",
    },
    featured: {
      title: "Таңдалған Жобалар",
      viewProject: "Жобаны көру",
    },
    catalog: {
      title: "Жоба Каталогы",
      search: "Жобаларды іздеу...",
      filter: {
        all: "Барлығы",
        aiml: "AI/ML",
        iot: "IoT",
        web: "Веб",
        mobile: "Мобильді",
        vrar: "VR/AR",
      },
    },
    technologies: {
      title: "Технологиялар",
      subtitle: "Әр жобада озық технологиялар",
    },
    about: {
      title: "Digital TAU Туралы",
      description:
        "Digital TAU — бұл М.Х. Дүлеті атындағы Тараз мемлекеттік университетінің инновациялық жобаларын және зерттеулерін көрсету үшін ресімделген заманауи платформа.",
    },
    footer: {
      copyright: "© 2025 TAU Университеті",
      contacts: "Байланыс",
      social: "Әлеуметтік желілер",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      technologies: "Technologies",
      about: "About",
    },
    hero: {
      title: "DIGITAL TAU",
      subtitle: "Innovation & Research Showcase",
      description: "Where ideas meet technology",
    },
    stats: {
      projects: "Projects",
      students: "Students",
      technologies: "Technologies",
      projectsCount: "150+",
      studentsCount: "2500+",
      technologiesCount: "45+",
    },
    featured: {
      title: "Featured Projects",
      viewProject: "View Project",
    },
    catalog: {
      title: "Project Catalog",
      search: "Search projects...",
      filter: {
        all: "All",
        aiml: "AI/ML",
        iot: "IoT",
        web: "Web",
        mobile: "Mobile",
        vrar: "VR/AR",
      },
    },
    technologies: {
      title: "Technologies",
      subtitle: "Cutting-edge technology in every project",
    },
    about: {
      title: "About Digital TAU",
      description:
        "Digital TAU is a modern platform showcasing innovative projects and research from M.H. Dulati Taraz State University.",
    },
    footer: {
      copyright: "© 2025 TAU University",
      contacts: "Contacts",
      social: "Social Media",
    },
  },
};

export function getTranslation(
  lang: Language,
  path: string,
  defaultValue: string = ""
): string {
  const keys = path.split(".");
  let value: any = translations[lang];

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return defaultValue;
    }
  }

  return typeof value === "string" ? value : defaultValue;
}
