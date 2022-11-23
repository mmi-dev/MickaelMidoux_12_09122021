import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../contexts/Context';

const Profil = () => {
  const { setIsAuthenticated } = useContext(Auth);
  const { userId, setUserId } = useContext(Auth);

  const navigate = useNavigate();

  return (
    <main>
      <h1>Profil user : {userId}</h1>
      <form>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsAuthenticated(false);
            setUserId('');

            navigate('/');
          }}
        >
          {' '}
          Deconnexion
        </button>
      </form>
    </main>
  );
};

export default Profil;
