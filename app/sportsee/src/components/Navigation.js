import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-link">
          <NavLink to="/" end>
            Accueil
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/user/:userId/profil">Profil</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/settings">Réglage</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/community">Communauté</NavLink>
        </li>
      </ul>
    </nav>
  );
}
