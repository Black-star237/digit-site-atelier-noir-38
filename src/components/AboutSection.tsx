
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Pourquoi Digit-Site ?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Expertise Technique</h3>
                  <p className="text-gray-400">Technologies de pointe, code optimisé et architecture scalable pour des performances exceptionnelles.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Design Innovant</h3>
                  <p className="text-gray-400">Créations uniques qui marquent les esprits et reflètent parfaitement votre identité de marque.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Accompagnement Complet</h3>
                  <p className="text-gray-400">De la conception au déploiement, nous vous accompagnons à chaque étape de votre projet digital.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Découvrir notre approche
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-800">
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">+50 Projets Réalisés</h4>
                  <p className="text-gray-400">Sites web et applications développés avec succès</p>
                </div>
                
                <div className="bg-gray-900/50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">98% de Satisfaction</h4>
                  <p className="text-gray-400">Clients satisfaits qui nous recommandent</p>
                </div>
                
                <div className="bg-gray-900/50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Support 24/7</h4>
                  <p className="text-gray-400">Assistance technique disponible en permanence</p>
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
