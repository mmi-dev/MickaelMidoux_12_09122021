import React from 'react';
import underConstruction from '../assets/img/under-construction.svg';

/**
 * @category Pages
 * @description Settings page
 */
const Settings = () => {
  return (
    <main>
      <h1>Réglage</h1>
      <img
        src={underConstruction}
        alt="Under construction"
        style={{ maxHeight: '60vh', aspectRatio: '1:1' }}
      />
    </main>
  );
};

export default Settings;
