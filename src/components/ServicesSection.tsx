import { useEffect, useState } from "react";
import { Factory, Zap, Ship, Droplet, Building2, Flame, Wrench, Package, Apple, Wind, Car, Hammer } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Celulose",
    icon: Factory,
    description: "Soluções especializadas para a indústria de celulose e papel"
  },
  {
    id: 2,
    title: "Petroquímica", 
    icon: Zap,
    description: "Estruturas e componentes para o setor petroquímico",
    highlighted: true
  },
  {
    id: 3,
    title: "Naval",
    icon: Ship,
    description: "Projetos e construção para a indústria naval"
  },
  {
    id: 4,
    title: "Hidroelétrica",
    icon: Droplet,
    description: "Equipamentos e estruturas para centrais hidroelétricas"
  },
  {
    id: 5,
    title: "Cimenteira",
    icon: Building2,
    description: "Estruturas metálicas para a indústria cimenteira"
  },
  {
    id: 6,
    title: "Siderúrgica",
    icon: Flame,
    description: "Componentes especializados para a indústria siderúrgica"
  },
  {
    id: 7,
    title: "Metalomecânica",
    icon: Wrench,
    description: "Soluções completas em metalomecânica industrial"
  },
  {
    id: 8,
    title: "Cerâmica",
    icon: Package,
    description: "Estruturas e equipamentos para a indústria cerâmica"
  },
  {
    id: 9,
    title: "Alimentar",
    icon: Apple,
    description: "Estruturas e equipamentos para a indústria alimentar"
  },
  {
    id: 10,
    title: "Eólica",
    icon: Wind,
    description: "Componentes e estruturas para energia eólica"
  },
  {
    id: 11,
    title: "Automóvel",
    icon: Car,
    description: "Componentes e estruturas para a indústria automóvel"
  },
  {
    id: 12,
    title: "Construção Civil",
    icon: Hammer,
    description: "Estruturas metálicas para construção civil e obras públicas"
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
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-consteel-light-gray" />
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