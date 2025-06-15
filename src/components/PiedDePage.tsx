import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/colossus-icon.svg" alt="Logo Colossus" className="w-8 h-8" />
              <span className="text-2xl font-bold">Colossus</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Redéfinir l'accessibilité numérique avec une tablette géante de 24 pouces, 
              conçue pour garantir une expérience inclusive et sans barrières.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Caractéristiques
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('accessibility')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accessibilité
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('our-story')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Notre Histoire
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact</h3>
            <p className="text-gray-300 mb-2">
              <a href="mailto:contact@colossus.fr" className="hover:text-white transition-colors">
                contact@colossus.fr
              </a>
            </p>
            <p className="text-gray-300">
              Franck Giordano & Matys Lefevre<br />
              <span className="text-sm">Étudiants ESGI 2</span>
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-gray-400">Fait avec le</p>
            <Heart className="w-4 h-4 text-red-500" />
            <p className="text-gray-400">pour l'accessibilité numérique</p>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Projet Colossus - Un projet présenté par Franck Giordano et Matys Lefevre ESGI 2
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;