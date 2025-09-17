import { useEffect, useState } from "react";

const FooterSection = () => {
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

    const element = document.getElementById('footer-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="footer-section"
      className="relative bg-consteel-gold py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Large Logo */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-16 h-16 bg-consteel-dark rounded-2xl flex items-center justify-center">
              <span className="text-consteel-gold text-3xl font-black">C</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-consteel-dark tracking-tight">
              consteel
            </h2>
          </div>

          {/* Tagline */}
          <div className={`transition-all duration-800 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="w-32 h-1 bg-consteel-dark mx-auto mb-8" />
            <p className="text-3xl md:text-4xl font-light text-consteel-dark/80 tracking-wide">
              Together We Rise
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <div className="w-24 h-px bg-consteel-dark/30" />
            <div className="w-2 h-2 bg-consteel-dark rounded-full" />
            <div className="w-24 h-px bg-consteel-dark/30" />
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-consteel-dark/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-consteel-dark/10 rounded-lg rotate-45" />
      <div className="absolute top-1/3 right-10 w-8 h-8 border border-consteel-dark/30 rounded-full" />
      <div className="absolute bottom-1/3 left-20 w-6 h-6 bg-consteel-dark/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default FooterSection;