import { useEffect, useState } from "react";
import { Building2, Factory, Hammer, Shield, Zap, Wrench } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Estruturas Metálicas",
    icon: Building2,
    description: "Desenvolvimento e execução de estruturas metálicas complexas"
  },
  {
    id: 2,
    title: "Soldadura Especializada", 
    icon: Zap,
    description: "Técnicas avançadas de soldadura para projetos industriais",
    highlighted: true
  },
  {
    id: 3,
    title: "Carpintaria Metálica",
    icon: Hammer,
    description: "Soluções personalizadas em carpintaria metálica"
  },
  {
    id: 4,
    title: "Indústria Automóvel",
    icon: Wrench,
    description: "Componentes e estruturas para o setor automóvel"
  },
  {
    id: 5,
    title: "Construção Civil",
    icon: Factory,
    description: "Estruturas para construção civil e obras públicas"
  },
  {
    id: 6,
    title: "Serralharia",
    icon: Shield,
    description: "Trabalhos especializados em serralharia industrial"
  },
  {
    id: 7,
    title: "Manutenção Industrial",
    icon: Wrench,
    description: "Serviços de manutenção e reparação industrial"
  },
  {
    id: 8,
    title: "Projetos Especiais",
    icon: Zap,
    description: "Desenvolvimento de projetos únicos e personalizados"
  },
  {
    id: 9,
    title: "Consultoria Técnica",
    icon: Building2,
    description: "Assessoria técnica especializada em metalomecânica"
  },
  {
    id: 10,
    title: "Controlo de Qualidade",
    icon: Shield,
    description: "Rigorosos processos de controlo e certificação"
  },
  {
    id: 11,
    title: "Logística Industrial",
    icon: Factory,
    description: "Gestão completa de projetos industriais"
  },
  {
    id: 12,
    title: "Inovação Tecnológica",
    icon: Hammer,
    description: "Implementação de novas tecnologias e processos"
  }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services-section"
      className="bg-consteel-gray py-20"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-black text-foreground mb-6">
            Serviços e Indústrias
          </h2>
          <div className="w-24 h-1 bg-consteel-gold mx-auto mb-8" />
          <p className="text-xl text-consteel-light-gray max-w-3xl mx-auto">
            Oferecemos soluções completas em metalomecânica, abrangendo diversos setores industriais 
            com excelência técnica e inovação constante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`service-card transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${service.highlighted ? 'border-consteel-gold' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-8 h-8 ${
                    service.highlighted ? 'text-consteel-gold' : 'text-consteel-light-gray'
                  }`} />
                  {service.highlighted && (
                    <div className="w-2 h-2 bg-consteel-gold rounded-full animate-pulse" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-consteel-light-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;