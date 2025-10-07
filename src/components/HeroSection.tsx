import { useEffect, useState } from "react";
import consteelLogo from "@/assets/consteel-logo.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen bg-hero-bg overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/melted-metal.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-hero-accent/20" />
          ))}
        </div>
      </div>

      {/* Purple accent lines */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-hero-accent/40" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hero-accent/60" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-hero-accent/40" />
      </div>

      {/* 3D Room Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hero-bg/50 to-hero-bg" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left Side - Logo */}
          <div className={`flex-1 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              <img 
                src={consteelLogo}
                alt="Consteel Logo"
                className="w-96 h-72 object-contain filter drop-shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-hero-accent/20 to-transparent blur-3xl" />
            </div>
          </div>

          {/* Right Side - Brand */}
          <div className={`flex-1 text-right transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <h1 className="text-6xl font-black text-consteel-darker tracking-tight mb-4">
              CONSTEEL
            </h1>
            <div className="w-24 h-1 bg-consteel-gold ml-auto mb-6" />
            <p className="text-xl text-consteel-light-gray max-w-md ml-auto">
              Excelência em soluções industriais e construção em aço
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-consteel-dark to-transparent" />
    </section>
  );
};

export default HeroSection;