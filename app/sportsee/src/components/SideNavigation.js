import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import relaxation from '../assets/icons/relaxation.png';
import swimming from '../assets/icons/swimming.png';
import cycling from '../assets/icons/cycling.png';
import bodybuilding from '../assets/icons/bodybuilding.png';
import { Auth, AuthUser } from '../contexts/AuthContext';

export default function SideNavigation() {
  const { isAuthenticated } = useContext(Auth);
  const { userId } = useContext(AuthUser);

  let activeClassName = 'active';

  const categories = [
    {
      category: 'relaxation',
      icon: relaxation,
      path: '/user/' + userId + '?category=relaxation',
    },
    {
      category: 'swimming',
      icon: swimming,
      path: '/user/' + userId + '?category=swimming',
    },
    {
      category: 'cycling',
      icon: cycling,
      path: '/user/' + userId + '?category=cycling',
    },
    {
      category: 'bodybuilding',
      icon: bodybuilding,
      path: '/user/' + userId + '?category=bodybuilding',
    },
  ];
  return (
    <nav className="sideNav">
      <ul className="sideNav-list">
        {categories.map((cat, index) => {
          return (
            <li className="sideNav-link" key={index}>
              <NavLink
                to={isAuthenticated ? cat.path : '/'}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end
              >
                <img
                  className="sideNav-icon"
                  src={cat.icon}
                  alt={cat.category}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
