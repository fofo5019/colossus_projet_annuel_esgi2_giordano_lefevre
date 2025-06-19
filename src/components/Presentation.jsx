import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Colossus
              <span className="block text-3xl lg:text-4xl text-blue-600 font-normal mt-2">
                La tablette 24 pouces pour tous
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Découvrez la grandeur d'une tablette adaptative qui rend le numérique accessible à chacun, 
              quels que soient ses besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Découvrir
              </button>
              <button 
                onClick={scrollToFeatures}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                En savoir plus
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/exemple.png"
                alt="Tablette Colossus 24 pouces"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-8 h-8 text-blue-600" />
      </button>
    </section>
  );
};

export default Hero;