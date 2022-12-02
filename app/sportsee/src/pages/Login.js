import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../contexts/AuthContext';
import user from '../assets/icons/user.svg';

const Login = () => {
  const { setIsAuthenticated, setUserId } = useContext(Auth);

  return (
    <main>
      <h1>Connexion</h1>
      <ul className="user-list">
        <li className="user-item">
          <Link
            onClick={() => {
              setIsAuthenticated(true);
              setUserId('18');
              sessionStorage.setItem('isAuthenticated', true);
              sessionStorage.setItem('userId', 18);
            }}
            to="/user/18"
          >
            <img src={user} alt="utilisateur 1" />
            <div className="user-name">Cecilia</div>
          </Link>
        </li>
        <li className="user-item">
          <Link
            onClick={() => {
              setIsAuthenticated(true);
              setUserId('12');
              sessionStorage.setItem('isAuthenticated', true);
              sessionStorage.setItem('userId', 12);
            }}
            to="/user/12"
          >
            <img src={user} alt="utilisateur 2" />
            <div className="user-name">Karl</div>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Login;
