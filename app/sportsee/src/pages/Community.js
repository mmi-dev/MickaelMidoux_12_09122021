import React from 'react';
import underConstruction from '../assets/img/under-construction.svg';

const Community = () => {
  return (
    <main>
      <h1>Communauté</h1>
      <img
        src={underConstruction}
        alt="Erreur 404"
        style={{ maxHeight: '60vh', aspectRatio: '1:1' }}
      />
    </main>
  );
};

export default Community;
