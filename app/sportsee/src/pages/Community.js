import React from 'react';
import underConstruction from '../assets/img/under-construction.svg';

/**
 * @category Pages
 * @description Community page
 */
const Community = () => {
  return (
    <main>
      <h1>Communauté</h1>
      <img
        src={underConstruction}
        alt="EUnder construction"
        style={{ maxHeight: '60vh', aspectRatio: '1:1' }}
      />
    </main>
  );
};

export default Community;
