
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-red-500 bg-clip-text text-transparent animate-fade-in">
          DIGIT-SITE
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-200 animate-fade-in">
          Création & Refonte de Sites Web
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed animate-fade-in">
          Nous concevons des expériences web exceptionnelles qui captivent vos visiteurs et transforment votre vision en réalité digitale. 
          Chaque projet est une œuvre d'art technologique.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
            Voir nos Réalisations
          </button>
          <button className="px-8 py-4 border-2 border-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-gradient-to-r hover:from-red-500/20 hover:to-purple-600/20 transition-all duration-300 transform hover:scale-105">
            Demander un Devis
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
