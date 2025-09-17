import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import consteelLogo from "@/assets/consteel-logo-c.jpg";

// Mock project data with photos
const projectsData = {
  "wind-energy": {
    id: "wind-energy",
    title: "Wind Energy",
    location: "Spain, Portugal",
    year: "2019/2020",
    photos: Array.from({ length: 12 }, (_, i) =>
      `https://images.unsplash.com/photo-${1600000000000 + i}?w=400&h=300&fit=crop&auto=format`
    )
  },
  "airbus-a380": {
    id: "airbus-a380",
    title: "Airbus A380",
    location: "Spain",
    year: "2017",
    photos: Array.from({ length: 12 }, (_, i) =>
      `https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=300&fit=crop&auto=format`
    )
  },
  "joinery": {
    id: "joinery",
    title: "Joinery",
    location: "Portugal, France",
    year: "2019/2020",
    photos: Array.from({ length: 12 }, (_, i) =>
      `https://images.unsplash.com/photo-${1400000000000 + i}?w=400&h=300&fit=crop&auto=format`
    )
  },
  "hydro-electric": {
    id: "hydro-electric",
    title: "Hydro-Electric",
    location: "Spain",
    year: "2018",
    photos: Array.from({ length: 12 }, (_, i) =>
      `https://images.unsplash.com/photo-${1300000000000 + i}?w=400&h=300&fit=crop&auto=format`
    )
  }
};

const allProjects = [
  {
    id: "airbus-a380",
    title: "Airbus A380",
    category: "Aviation",
    year: "2017",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&auto=format&fit=crop"
  },
  {
    id: "joinery",
    title: "Joinery",
    category: "Construction",
    year: "2019/2020",
    location: "Portugal, France",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop"
  },
  {
    id: "wind-energy",
    title: "Wind Energy",
    category: "Energy",
    year: "2019/2020",
    location: "Spain, Portugal",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop"
  },
  {
    id: "hydro-electric",
    title: "Hydro-Electric",
    category: "Energy",
    year: "2018",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop"
  }
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const project = projectsData[projectId as keyof typeof projectsData];
  const otherProjects = allProjects.filter(p => p.id !== projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={consteelLogo} 
              alt="Consteel" 
              className="h-8 w-auto"
            />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      {/* Project Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.location} {project.year}
            </p>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {project.photos.map((photo, index) => (
              <div 
                key={index}
                className="aspect-[4/3] bg-muted rounded-lg overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full bg-muted-foreground/10 hover:bg-muted-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 bg-muted-foreground/20 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Outros Projetos
          </h2>
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
              {otherProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="flex-shrink-0 w-80 group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="w-full h-full bg-muted-foreground/10 flex items-center justify-center">
                        <div className="w-12 h-12 bg-muted-foreground/20 rounded" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        {project.location}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {project.year}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <img 
                src={consteelLogo} 
                alt="Consteel" 
                className="h-8 w-auto mb-4"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Quem somos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary transition-colors">Serviços</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Projetos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Contatos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-primary transition-colors">Privacidade</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Reclamações</Link></li>
              </ul>
            </div>
            <div>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="O seu email" 
                  className="w-full px-4 py-2 bg-background border border-border/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Assinar Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default ProjectDetails;
