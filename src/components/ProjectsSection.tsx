import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react";

const projects = [
  {
    id: "wind-energy",
    title: "Wind Energy",
    category: "Energy",
    year: "2019/2020",
    location: "Spain, Portugal", 
    team: "15 Especialistas",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop"
  },
  {
    id: "airbus-a380",
    title: "Airbus A380",
    category: "Aviation",
    year: "2017",
    location: "Spain",
    team: "25 Especialistas",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop"
  },
  {
    id: "joinery",
    title: "Joinery",
    category: "Construction",
    year: "2019/2020",
    location: "Portugal, France",
    team: "18 Especialistas", 
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
  },
  {
    id: "hydro-electric",
    title: "Hydro-Electric",
    category: "Energy",
    year: "2018",
    location: "Spain",
    team: "12 Especialistas",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
  },
  {
    id: "manufacturing-plant",
    title: "Manufacturing Plant",
    category: "Manufacturing",
    year: "2021",
    location: "Italy",
    team: "30 Especialistas",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
  },
  {
    id: "research-center",
    title: "Research Center",
    category: "Technology",
    year: "2021",
    location: "Netherlands",
    team: "22 Especialistas",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
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
      className="bg-white py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`flex items-center justify-between mb-12 transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <h2 className="text-5xl font-black text-black mb-4">
              Projetos
            </h2>
            <div className="w-16 h-1 bg-consteel-gold mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl">
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
                <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
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
                  <Link 
                    to={`/project/${project.id}`}
                    className="text-consteel-gold hover:text-consteel-gold-glow font-semibold text-sm transition-colors duration-300"
                  >
                    Ver Detalhes →
                  </Link>
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