import React from 'react';
import underConstruction from '../assets/img/under-construction.svg';

const Settings = () => {
  return (
    <main>
      <h1>Réglage</h1>
      <img
        src={underConstruction}
        alt="Erreur 404"
        style={{ maxHeight: '60vh', aspectRatio: '1:1' }}
      />
    </main>
  );
};

export default Settings;
