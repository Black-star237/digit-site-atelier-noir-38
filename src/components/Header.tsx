
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/', isRoute: true },
    { label: 'Services', href: '#services', isRoute: false },
    { label: 'Portfolio', href: '/portfolio', isRoute: true },
    { label: 'À propos', href: '#about', isRoute: false },
    { label: 'Contact', href: '#contact', isRoute: false }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      navigate(item.href);
    } else {
      // Si on n'est pas sur la page d'accueil, aller d'abord à l'accueil
      if (location.pathname !== '/') {
        navigate('/');
        // Attendre que la page se charge puis faire le scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Si on est déjà sur la page d'accueil, faire le scroll directement
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate('/')}
          >
            DIGIT-SITE
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-white hover:text-red-400 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              onClick={() => handleNavClick({ label: 'Contact', href: '#contact', isRoute: false })}
            >
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left py-2 text-white hover:text-red-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button 
              className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg"
              onClick={() => handleNavClick({ label: 'Contact', href: '#contact', isRoute: false })}
            >
              Devis Gratuit
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
