import React from 'react';
import { Mic, Hand, Gamepad2, Eye, Volume2, BrainCircuit } from 'lucide-react';

const Accessibility: React.FC = () => {
  const accessibilityFeatures = [
    {
      icon: <Mic className="w-8 h-8 text-blue-600" />,
      title: 'Commandes vocales avancées',
      description: "Contrôlez l'ensemble des fonctionnalités grâce à une reconnaissance vocale précise, même en environnement bruyant."
    },
    {
      icon: <Hand className="w-8 h-8 text-blue-600" />,
      title: 'Retour haptique personnalisable',
      description: 'Vibrations et retours tactiles ajustables offrant un feedback sensoriel pour faciliter la navigation.'
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-blue-600" />,
      title: 'Boutons physiques adaptables',
      description: 'Accessoires magnétiques permettant d\'ajouter des boutons physiques de différentes tailles et sensibilités.'
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Optimisation pour lecteurs d'écran",
      description: 'Compatible avec tous les logiciels d\'assistance, avec descriptions détaillées des éléments visuels.'
    },
    {
      icon: <Volume2 className="w-8 h-8 text-blue-600" />,
      title: 'Système audio intelligent',
      description: 'Haut-parleurs directionnels et amplification ciblée des fréquences vocales pour une meilleure intelligibilité.'
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
      title: 'Interface adaptative',
      description: "L'IA analyse vos interactions et adapte progressivement l'interface à vos besoins spécifiques."
    }
  ];

  return (
    <section id="accessibility" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Accessibilité sans compromis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque détail de Colossus a été conçu pour garantir une expérience numérique inclusive et accessible à tous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300">
                <div className="p-3 rounded-lg bg-blue-50 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-video">
            <video
              className="w-full h-full object-cover"
              src="/videos/demo.mp4"
              controls
              poster="/images/exemple.png"
            >
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;