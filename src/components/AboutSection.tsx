import { useEffect, useState } from "react";
import ceoImage from "@/assets/hugo-bernardes-ceo.jpg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about-section"
      className="bg-white py-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className={`transition-all duration-800 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-consteel-gold/20 to-transparent blur-2xl" />
              <img 
                src={ceoImage}
                alt="Hugo Bernardes - CEO & Fundador da Consteel"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-800 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h2 className="text-5xl font-black text-black mb-6">
              A Consteel
            </h2>
            
            <div className="w-16 h-1 bg-consteel-gold mb-8" />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Localizada em Cantanhede, Portugal, a CONSTEEL – Metalomecânica e Serviços Lda, presta os mais variados serviços no ramo da metalomecânica por toda a Europa.
              </p>

              <p>
                Fundada em 2017, após anos de experiência desenvolvida pelo CEO e fundador, Hugo Bernardes, surge no seguimento da necessidade do mercado atual em obter os melhores serviços na indústria metalomecânica, apresentando-se como uma alternativa de confiança e qualidade, usando as melhores soluções na indústria de forma a cumprir os objetivos dos nossos clientes com a melhor distinção possível.
              </p>

              <p>
                Focamos o nosso campo de missão e visão, de forma a sermos uma ferramenta e solução à medida de cada cliente, tendo em mente a melhoria contínua, de modo que estes alcancem e mantenham os maiores padrões de qualidade.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-consteel-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">HB</span>
                </div>
                <div>
                  <p className="text-consteel-gold font-semibold">Hugo Bernardes</p>
                  <p className="text-sm text-gray-600">CEO & Fundador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;