import React from 'react';
import { Maximize2, Touchpad, SlidersHorizontal, Wifi, Battery } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Maximize2 className="w-12 h-12 text-blue-600" />,
      title: "Taille XXL",
      description: "Écran 24 pouces offrant une surface d'interaction maximale pour faciliter la navigation."
    },
    {
      icon: <Touchpad className="w-12 h-12 text-blue-600" />,
      title: "Écran tactile",
      description: "Technologie tactile haute précision avec sensibilité ajustable selon les besoins."
    },
    {
      icon: <SlidersHorizontal className="w-12 h-12 text-blue-600" />,
      title: "Interface personnalisable",
      description: "Personnalisation complète : taille des polices, contrastes, agencement des éléments."
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-600" />,
      title: "Connectivité avancée",
      description: "Wi-Fi 6, Bluetooth 5.2 et ports USB-C pour une connectivité sans faille."
    },
    {
      icon: <Battery className="w-12 h-12 text-blue-600" />,
      title: "Autonomie longue durée",
      description: "Batterie haute capacité offrant jusqu'à 10 heures d'utilisation continue."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Caractéristiques</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une tablette pensée dans les moindres détails pour offrir une expérience accessible et intuitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pourquoi ces caractéristiques ?</h3>
            <p className="text-gray-700 leading-relaxed">
              Chaque fonctionnalité a été pensée pour répondre aux besoins réels des utilisateurs. 
              Un écran plus grand pour ceux qui ont des difficultés visuelles, une interface personnalisable 
              pour s'adapter à chaque situation, une autonomie longue pour ne jamais être pris au dépourvu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;