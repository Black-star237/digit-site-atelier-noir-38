
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Transformons ensemble votre vision en réalité digitale. Contactez-nous pour un devis personnalisé et gratuit.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Formulaire de Contact</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Décrivez votre projet"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-200 resize-none"
                  />
                </div>
                <button className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Envoyer ma demande
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4">Email</h4>
                <p className="text-gray-400">contact@digit-site.com</p>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4">Téléphone</h4>
                <p className="text-gray-400">+33 1 23 45 67 89</p>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4">Délai de Réponse</h4>
                <p className="text-gray-400">Moins de 24h en semaine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
