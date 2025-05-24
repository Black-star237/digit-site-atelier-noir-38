
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Création de Sites Web",
      description: "Sites web sur mesure, modernes et optimisés pour convertir vos visiteurs en clients.",
      features: ["Design responsive", "SEO optimisé", "Performance maximale", "UX/UI moderne"]
    },
    {
      title: "Refonte de Sites",
      description: "Modernisation complète de votre présence en ligne pour rester compétitif.",
      features: ["Audit complet", "Migration sécurisée", "Design moderne", "Optimisation mobile"]
    },
    {
      title: "E-Commerce",
      description: "Boutiques en ligne performantes qui transforment les visiteurs en acheteurs.",
      features: ["Paiement sécurisé", "Gestion des stocks", "Analytics avancées", "Marketing intégré"]
    },
    {
      title: "Applications Web",
      description: "Solutions web complexes adaptées à vos besoins métier spécifiques.",
      features: ["Architecture scalable", "API robustes", "Sécurité renforcée", "Maintenance incluse"]
    }
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          Nos Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-900/50 transition-all duration-300 group border border-gray-800 hover:border-red-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
