
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-red-500 bg-clip-text text-transparent animate-fade-in drop-shadow-2xl">
          DIGIT-SITE
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-100 animate-fade-in drop-shadow-lg">
          Création & Refonte de Sites Web
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed animate-fade-in drop-shadow-md">
          Nous concevons des expériences web exceptionnelles qui captivent vos visiteurs et transforment votre vision en réalité digitale. 
          Chaque projet est une œuvre d'art technologique.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <button 
            onClick={() => navigate('/portfolio')}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 border border-red-500/20"
          >
            Voir nos Réalisations
          </button>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 border-2 border-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-gradient-to-r hover:from-red-500/20 hover:to-purple-600/20 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/20 border-purple-500/50 backdrop-blur-sm"
          >
            Demander un Devis
          </button>
        </div>

        {/* Scroll indicator - enhanced visibility */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center shadow-lg shadow-gray-300/30">
            <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-purple-600 rounded-full mt-2 animate-pulse shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
