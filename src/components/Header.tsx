import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import consteelLogo from '@/assets/consteel-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Quem Somos', href: '#about', number: '01' },
    { label: 'Serviços e Indústrias', href: '#services', number: '02' },
    { label: 'Projetos', href: '#projects', number: '03' },
    { label: 'Notícias', href: '#news', number: '04' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href === '#news') {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-consteel-darker/80 backdrop-blur-sm border-b border-consteel-gold/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={consteelLogo} 
              alt="Consteel" 
              className="h-10 w-auto"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 text-consteel-gold font-medium hover:text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <span className="text-sm tracking-wider">MENU</span>
            <Plus className={`w-5 h-5 transition-transform duration-500 ${isMenuOpen ? 'rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Staggered Menu Overlay */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-1/3 z-50 ${isMenuOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Staggered Background Layers */}
        <div 
          className={`absolute inset-0 bg-consteel-gold/20 transition-all duration-700 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionDelay: '0ms' }}
        />
        <div 
          className={`absolute inset-0 bg-consteel-darker/95 backdrop-blur-sm transition-all duration-700 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionDelay: '100ms' }}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center px-8 md:px-12 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 delay-300' : 'opacity-0'
        }`}>
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 text-consteel-gold font-medium hover:text-white transition-colors duration-300"
            aria-label="Close menu"
          >
            <span className="text-sm tracking-wider">FECHAR</span>
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Items */}
          <nav className="space-y-4">
            {navigationItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`group flex items-baseline gap-4 w-full text-left transition-all duration-500 hover:translate-x-4 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${400 + index * 100}ms` : '0ms'
                }}
              >
                <span className="text-consteel-gold/50 text-xs font-mono group-hover:text-consteel-gold transition-colors duration-300">
                  {item.number}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-consteel-gold transition-colors duration-300">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Footer Info */}
          <div className={`absolute bottom-8 left-8 md:left-12 text-consteel-light-gray text-xs transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-4 opacity-0'
          }`}>
            <p>Cantanhede, Portugal</p>
            <p className="text-consteel-gold">info@consteel.pt</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;