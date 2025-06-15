import React from 'react';
import { Heart, Lightbulb, Wrench, Globe } from 'lucide-react';

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
          <p className="text-xl text-gray-600">
            Une aventure humaine et technique qui nous a menés de l'échec à l'opportunité
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              À l'origine, notre projet annuel à l'ESGI visait à concevoir une tablette tactile de 24 pouces 
              dédiée à l'accessibilité numérique et le tout avec des pièces d'occasions. L'idée était ambitieuse : créer un appareil pensé pour les 
              personnes ayant des besoins spécifiques, en mettant la technologie au service de l'inclusion.
            </p>
          </div>

          {/* Timeline avec photos */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {/* Conception initiale */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-20 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-gray-900">L'Idée ambitieuse</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Concevoir une tablette tactile de 24 pouces révolutionnaire, entièrement dédiée à 
                  l'accessibilité numérique pour les personnes ayant des besoins spécifiques.
                </p>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <img 
                    src="/images/croquis.png" 
                    alt="Première esquisse du projet Colossus" 
                    className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Défis techniques */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-20 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-6 h-6 text-gray-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Les défis techniques</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Des problèmes de soudure et de compatibilité matérielle ont sérieusement freiné notre 
                  progression. Malgré tous nos efforts et les nombreuses pièces récupérées, nous avons dû 
                  prendre une décision difficile : abandonner la fabrication physique.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <img 
                      src="/images/ecran.jpg" 
                      alt="Composants électroniques du projet" 
                      className="w-full rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-2">La dalle tactile</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <img 
                      src="/images/carte_mere.jpg" 
                      alt="Tentatives de soudure" 
                      className="w-full rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-2">Les cartes mères</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transformation */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-20 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">La transformation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                Après avoir récupéré du matériel auprès de <strong>l’hôpital d’Aix-en-Provence</strong>, de l’entreprise <strong>Materiel.net</strong> et de quelques particuliers bienveillants rencontrés sur <strong>Le Bon Coin</strong>, nous avons tenté de donner vie à notre tablette.
                <br /><br />
                Plutôt que de baisser les bras, nous avons choisi de transformer cet échec en opportunité.
                <br /><br />
                Franck Giordano et Matys Lefevre ont décidé de concevoir ce site web, témoignage de notre parcours et de notre volonté de rebondir.
                </p>

                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <img 
                    src="/images/echec.png" 
                    alt="Franck et Matys travaillant sur le site" 
                    className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-500 mt-2">La révélation</p>
                </div>
              </div>
            </div>

            {/* Vision future */}
            <div className="relative flex items-start">
              <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-20 bg-blue-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Une vision d'avenir</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Ce site est devenu une plateforme de crowdfunding pour continuer à croire en cette vision, 
                  avec l'aide d'une communauté qui partage nos valeurs d'accessibilité et d'inclusion.
                </p>
                <div className="bg-white rounded-lg p-4 text-center">
                  <img 
                    src="/images/reussite.png" 
                    alt="Vision future du projet Colossus" 
                    className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-500 mt-2">Notre vision pour l'avenir de Colossus</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Plus qu'un pojet, une aventure humaine
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Cette aventure, bien plus humaine que technique, nous a appris la résilience, l'importance du 
              travail en équipe, et la capacité à s'adapter. Aujourd'hui, ce site est bien plus qu'une vitrine : 
              c'est le point de départ d'un projet que nous espérons voir renaître, cette fois, avec le soutien 
              de toutes celles et ceux qui croient en une technologie plus accessible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Soutenir le projet
              </button>
              <a 
                href="mailto:contact@colossus.fr"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Nous contacter
              </a>
            </div>

            <div className="pt-6 border-t border-blue-200">
              <p className="text-gray-700 font-medium text-lg">
                Franck Giordano & Matys Lefevre
              </p>
              <p className="text-gray-600">
                Étudiants ESGI 2 - Porteurs du projet Colossus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;