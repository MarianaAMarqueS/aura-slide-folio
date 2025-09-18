import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustrialHeroImage from "@/components/IndustrialHeroImage";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import StatsSection from "@/components/StatsSection";
import Header from "@/components/Header";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section with 3D Room and Logo */}
        <HeroSection />
        
        {/* About Section - A Consteel */}
        <section id="about">
          <AboutSection />
        </section>
        
        {/* Services and Industries Grid */}
        <section id="services">
          <ServicesSection />
        </section>
        
        {/* Full Width Industrial Image */}
        <IndustrialHeroImage />
        
        {/* Projects Horizontal Scroll */}
        <section id="projects">
          <ProjectsSection />
        </section>
        
        {/* Statistics Section */}
        <StatsSection />
        
        {/* Final Golden Footer */}
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
