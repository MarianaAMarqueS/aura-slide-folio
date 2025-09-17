import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustrialHeroImage from "@/components/IndustrialHeroImage";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section with 3D Room and Logo */}
      <HeroSection />
      
      {/* About Section - A Consteel */}
      <AboutSection />
      
      {/* Services and Industries Grid */}
      <ServicesSection />
      
      {/* Full Width Industrial Image */}
      <IndustrialHeroImage />
      
      {/* Projects Horizontal Scroll */}
      <ProjectsSection />
      
      {/* Statistics Section */}
      <StatsSection />
      
      {/* Final Golden Footer */}
      <FooterSection />
    </main>
  );
};

export default Index;
