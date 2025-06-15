import React from 'react';
// Imports mis à jour
import EnTete from './components/EnTete';
import PiedDePage from './components/PiedDePage';
import Presentation from './components/Presentation';
import Fonctionnalites from './components/Fonctionnalites';
import Accessibilite from './components/Accessibilite';
import NotreHistoire from './components/NotreHistoire';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      {/* Les noms des composants sont aussi mis à jour ici */}
      <EnTete />
      <main>
        <Presentation />
        <Fonctionnalites />
        <Accessibilite />
        <NotreHistoire />
        <Contact />
      </main>
      <PiedDePage />
    </>
  );
};

export default App;