import React from 'react';
import { useParams } from 'react-router-dom';

const Profil = () => {
  // user Id
  let { userId } = useParams();

  console.log(userId);

  return (
    <main>
      <h1>Profil user : {userId}</h1>
    </main>
  );
};

export default Profil;
