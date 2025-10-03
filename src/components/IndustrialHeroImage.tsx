import { useEffect, useState } from "react";
import industrialHero from "@/assets/industrial-hero.jpg";

const IndustrialHeroImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordOpacity, setWordOpacity] = useState(1);
  
  const words = ["INOVAÇÃO", "SHAPE", "TECNOLOGIA"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('industrial-hero');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setWordOpacity(0);
      
      // Change word after fade out
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        // Fade in
        setWordOpacity(1);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section 
      id="industrial-hero"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
        style={{ 
          backgroundImage: `url(${industrialHero})`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-consteel-darker/60" />
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-consteel-darker/80 via-transparent to-consteel-darker/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-consteel-darker/20 to-consteel-dark" />
      
      {/* Animated Particles/Sparks Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-consteel-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 
            className="text-6xl md:text-8xl font-black text-foreground mb-6 tracking-tight transition-opacity duration-300"
            style={{ opacity: wordOpacity }}
          >
            {words[currentWordIndex]}
          </h2>
          <div className="w-32 h-1 bg-consteel-gold mx-auto mb-8" />
          <p className="text-2xl text-consteel-light-gray max-w-2xl mx-auto leading-relaxed">
            Onde a tradição encontra a tecnologia de vanguarda
          </p>
          
          {/* Floating Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-consteel-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-consteel-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-consteel-gold/20 to-transparent" />
    </section>
  );
};

export default IndustrialHeroImage;