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
    </section>
  );
};

export default HeroSection;