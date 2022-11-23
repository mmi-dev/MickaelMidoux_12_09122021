import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiDatas from '../api/ApiDatas';
import { Auth } from '../contexts/Context';

const Login = () => {
  const { setIsAuthenticated } = useContext(Auth);
  const { setUserId } = useContext(Auth);

  return (
    <main>
      <h1>Connexion</h1>
      <ul>
        <li>
          <Link
            onClick={() => {
              setIsAuthenticated(true);
              setUserId('18');
            }}
            to="/user/18"
          >
            User 1
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsAuthenticated(true);
              setUserId('12');
            }}
            to="/user/12"
          >
            User 2
          </Link>
        </li>
      </ul>
      <ApiDatas />
    </main>
  );
};

export default Login;
