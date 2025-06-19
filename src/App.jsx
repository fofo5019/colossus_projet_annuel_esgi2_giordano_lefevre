import React from 'react';
import EnTete from './components/EnTete';
import PiedDePage from './components/PiedDePage';
import Presentation from './components/Presentation';
import Fonctionnalites from './components/Fonctionnalites';
import Accessibilite from './components/Accessibilite';
import NotreHistoire from './components/NotreHistoire';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
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