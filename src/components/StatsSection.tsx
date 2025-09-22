import { useEffect, useState } from "react";
import worldBackground from "@/assets/world-hemisphere.jpg";

const stats = [
  { number: "2017", label: "Fundada", suffix: "" },
  { number: "250", label: "Number of employees", suffix: "+" },
  { number: "578000", label: "Work hours", suffix: "+" },
  { number: "50", label: "Customers", suffix: "+" }
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
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${worldBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="relative z-10 container mx-auto px-6">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 transition-all duration-800 ${
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
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-2">
                  {animatedNumbers[index] !== undefined ? (
                    <>
                      {formatNumber(animatedNumbers[index], stat.number)}
                      <span className="text-2xl md:text-3xl lg:text-4xl text-black">
                        {stat.suffix}
                      </span>
                    </>
                  ) : (
                    <>
                      {stat.number}
                      <span className="text-2xl md:text-3xl lg:text-4xl text-black">
                        {stat.suffix}
                      </span>
                    </>
                  )}
                </div>
                
                {/* Label */}
                <p className="text-sm md:text-base text-black font-medium leading-tight mt-2">
                  {stat.label}
                </p>

                {/* Decorative Line */}
                <div className="w-12 h-1 bg-consteel-gold mx-auto mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;