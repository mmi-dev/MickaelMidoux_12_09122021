import React from 'react';
import Error404 from '../assets/img/404.svg';

/**
 * @category Pages
 * @description 404 error page
 */
const NotFound = () => {
  return (
    <main>
      <h1 style={{ display: 'none' }}>404</h1>
      <img
        src={Error404}
        alt="Erreur 404"
        style={{ maxHeight: '80vh', aspectRatio: '1:1' }}
      />
    </main>
  );
};

export default NotFound;
