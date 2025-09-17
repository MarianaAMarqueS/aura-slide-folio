import { useEffect, useState } from "react";
import ceoImage from "@/assets/consteel-ceo.jpg";

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
      className="bg-consteel-dark py-20"
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
                alt="CEO da Consteel"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-800 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h2 className="text-5xl font-black text-foreground mb-6">
              A Consteel
            </h2>
            
            <div className="w-16 h-1 bg-consteel-gold mb-8" />

            <div className="space-y-6 text-consteel-light-gray leading-relaxed">
              <p className="text-lg">
                <span className="text-consteel-gold font-semibold">José Santos e Cia Pereira - Sócio CONSTEEL.</span> 
                {" "}Estabelecida com décadas de experiência no mercado português, a nossa empresa tem-se 
                destacado pela qualidade e inovação em soluções de aço.
              </p>

              <p>
                Com um compromisso inabalável com a excelência, desenvolvemos projetos que transformam 
                ideias em estruturas sólidas e duradouras. A nossa experiência abrange desde pequenos 
                projetos residenciais até grandes complexos industriais.
              </p>

              <p>
                Investimos continuamente em tecnologia de ponta e formação da nossa equipa, garantindo 
                que cada projeto seja executado com os mais altos padrões de qualidade e segurança. 
                A confiança dos nossos clientes é o alicerce do nosso sucesso.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-consteel-gold rounded-full flex items-center justify-center">
                  <span className="text-consteel-dark font-bold text-xl">C</span>
                </div>
                <div>
                  <p className="text-consteel-gold font-semibold">Consteel</p>
                  <p className="text-sm text-consteel-light-gray">Construindo o futuro</p>
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