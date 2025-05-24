
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-4">
              DIGIT-SITE
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Agence de création et refonte de sites web. Nous transformons vos idées en expériences digitales exceptionnelles.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold">f</span>
              </button>
              <button className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold">in</span>
              </button>
              <button className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold">@</span>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Création de sites</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Refonte</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">E-commerce</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Applications web</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@digit-site.com</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Digit-Site. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
