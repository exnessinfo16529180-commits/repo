import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { ProjectCatalog } from "@/components/project-catalog";
import { TechnologiesSection } from "@/components/technologies-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Project Catalog */}
      <ProjectCatalog />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* About Section */}
      <AboutSection />
    </div>
  );
}
