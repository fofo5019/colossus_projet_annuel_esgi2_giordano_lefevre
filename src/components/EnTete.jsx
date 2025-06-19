import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img src="/colossus-icon.svg" alt="Logo Colossus" className="w-8 h-8" />
          <span className="text-2xl font-bold text-gray-800">Colossus</span>
        </div>

        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu mobile"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`
          absolute top-full left-0 w-full bg-white lg:static lg:flex lg:gap-8 lg:w-auto lg:bg-transparent 
          transition-transform duration-300 ease-in-out shadow-lg lg:shadow-none
          ${isOpen ? 'translate-y-0' : '-translate-y-full'} lg:translate-y-0
        `}>
          <li>
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-6 py-3 lg:py-0 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Accueil
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-6 py-3 lg:py-0 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Caractéristiques
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('accessibility')}
              className="block w-full text-left px-6 py-3 lg:py-0 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Accessibilité
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('our-story')}
              className="block w-full text-left px-6 py-3 lg:py-0 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Notre Histoire
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-6 py-3 lg:py-0 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;