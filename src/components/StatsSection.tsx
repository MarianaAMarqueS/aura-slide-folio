import { useEffect, useState } from "react";

const stats = [
  { number: "1928", label: "Ano de Fundação", suffix: "" },
  { number: "682", label: "Projetos Concluídos", suffix: " milhões" },
  { number: "123", label: "Colaboradores", suffix: "" },
  { number: "3750", label: "Clientes Satisfeitos", suffix: "" },
  { number: "1000", label: "Toneladas Processadas", suffix: "+" },
  { number: "370.000", label: "m² Construídos", suffix: " m²" }
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<Record<number, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate numbers when section becomes visible
          stats.forEach((stat, index) => {
            const target = parseInt(stat.number.replace(/[^\d]/g, ''));
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setAnimatedNumbers(prev => ({
                ...prev,
                [index]: Math.floor(current)
              }));
            }, 20);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num: number, originalStr: string): string => {
    if (originalStr.includes('.')) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <section 
      id="stats-section"
      className="relative bg-gradient-to-br from-slate-100 to-slate-200 py-20 overflow-hidden"
    >
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Purple Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-hero-accent/30" />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-500`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* Number */}
                <div className="text-4xl md:text-5xl font-black text-consteel-darker mb-2">
                  {animatedNumbers[index] !== undefined ? (
                    <>
                      {formatNumber(animatedNumbers[index], stat.number)}
                      <span className="text-2xl md:text-3xl text-consteel-light-gray">
                        {stat.suffix}
                      </span>
                    </>
                  ) : (
                    <>
                      {stat.number}
                      <span className="text-2xl md:text-3xl text-consteel-light-gray">
                        {stat.suffix}
                      </span>
                    </>
                  )}
                </div>
                
                {/* Label */}
                <p className="text-sm md:text-base text-consteel-light-gray font-medium leading-tight">
                  {stat.label}
                </p>

                {/* Decorative Line */}
                <div className="w-8 h-px bg-consteel-gold mx-auto mt-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Company Info */}
        <div className={`mt-20 text-center transition-all duration-800 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-12 bg-consteel-dark rounded-xl flex items-center justify-center">
              <span className="text-consteel-gold text-2xl font-black">C</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-consteel-dark">
              consteel
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-consteel-light-gray">
            <div>
              <h4 className="font-bold text-consteel-dark mb-2">Sede</h4>
              <p className="text-sm">Rua da Indústria, 123<br/>4000-000 Porto</p>
            </div>
            <div>
              <h4 className="font-bold text-consteel-dark mb-2">Contactos</h4>
              <p className="text-sm">+351 220 123 456<br/>info@consteel.pt</p>
            </div>
            <div>
              <h4 className="font-bold text-consteel-dark mb-2">Horários</h4>
              <p className="text-sm">Segunda-Sexta: 8h-18h<br/>Sábado: 8h-13h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;