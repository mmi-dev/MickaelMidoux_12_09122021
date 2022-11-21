import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth, AuthUser } from '../contexts/AuthContext';

const Profil = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const { userId, setUserId } = useContext(AuthUser);

  // redirection if not authentificated
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <main>
      <h1>Profil user : {userId}</h1>
      <form>
        <button
          onClick={() => {
            setIsAuthenticated(false);
            setUserId('');
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
