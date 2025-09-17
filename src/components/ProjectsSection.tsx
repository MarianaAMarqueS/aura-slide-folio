import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Torre Industrial Porto",
    category: "Estruturas Metálicas",
    year: "2024",
    location: "Porto, Portugal", 
    team: "15 Especialistas",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Ponte Rodoviária Aveiro",
    category: "Infraestrutura",
    year: "2023",
    location: "Aveiro, Portugal",
    team: "22 Especialistas",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Complexo Industrial Braga",
    category: "Construção Industrial",
    year: "2023",
    location: "Braga, Portugal",
    team: "18 Especialistas", 
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Edifício Corporativo Lisboa",
    category: "Arquitetura Moderna",
    year: "2024",
    location: "Lisboa, Portugal",
    team: "12 Especialistas",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Terminal Portuário Leixões",
    category: "Infraestrutura Portuária", 
    year: "2022",
    location: "Leixões, Portugal",
    team: "25 Especialistas",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Centro de Distribuição Coimbra",
    category: "Logística Industrial",
    year: "2024",
    location: "Coimbra, Portugal",
    team: "20 Especialistas",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
  }
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="projects-section"
      className="bg-consteel-dark py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`flex items-center justify-between mb-12 transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <h2 className="text-5xl font-black text-foreground mb-4">
              Projetos
            </h2>
            <div className="w-16 h-1 bg-consteel-gold mb-6" />
            <p className="text-xl text-consteel-light-gray max-w-2xl">
              Uma seleção dos nossos projetos mais emblemáticos, demonstrando a nossa 
              capacidade de execução em diversos setores da indústria.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 bg-consteel-gray hover:bg-consteel-gold border border-border hover:border-consteel-gold rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-consteel-light-gray group-hover:text-consteel-dark" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 bg-consteel-gray hover:bg-consteel-gold border border-border hover:border-consteel-gold rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-consteel-light-gray group-hover:text-consteel-dark" />
            </button>
          </div>
        </div>

        {/* Projects Horizontal Scroll */}
        <div 
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto scrollbar-hide pb-4 transition-all duration-800 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-consteel-darker/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-consteel-gold text-consteel-dark px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="space-y-2 text-sm text-consteel-light-gray">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-border">
                  <button className="text-consteel-gold hover:text-consteel-gold-glow font-semibold text-sm transition-colors duration-300">
                    Ver Detalhes →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProjectsSection;