import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import consteelLogo from '@/assets/consteel-logo-c.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Quem Somos', href: '#about' },
    { label: 'Serviços e Indústrias', href: '#services' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Notícias', href: '#news' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href === '#news') {
      // Scroll to footer since there's no news section
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-consteel-darker/95 backdrop-blur-sm border-b border-consteel-gold/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={consteelLogo} 
              alt="Consteel" 
              className="h-10 w-auto"
            />
          </div>

          {/* Menu Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-consteel-gold/30 hover:border-consteel-gold hover:bg-consteel-gold/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-consteel-gold" />
            ) : (
              <Menu className="w-5 h-5 text-consteel-gold" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-consteel-darker border-l border-consteel-gold/20 z-50 transform transition-transform duration-300 shadow-2xl">
            <div className="p-6 pt-20">
              <nav className="space-y-1">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-4 text-lg font-medium text-consteel-light-gray hover:text-consteel-gold hover:bg-consteel-gold/10 rounded-lg transition-all duration-300 border border-transparent hover:border-consteel-gold/30"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'fade-in 0.3s ease-out forwards'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;