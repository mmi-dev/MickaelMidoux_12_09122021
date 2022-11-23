import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../contexts/AuthContext';

export default function Navigation() {
  const { isAuthenticated } = useContext(Auth);
  const { userId } = useContext(Auth);

  let activeClassName = 'active';

  return (
    <nav className="mainNav">
      <ul className="mainNav-list">
        <li className="mainNav-link">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="mainNav-link">
          <NavLink
            to={isAuthenticated ? '/user/' + userId + '/profil' : '/'}
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Profil
          </NavLink>
        </li>
        <li className="mainNav-link">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Réglage
          </NavLink>
        </li>
        <li className="mainNav-link">
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
