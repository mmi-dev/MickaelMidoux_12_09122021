import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo//logo.png';
import Navigation from '../components/Navigation';

/**
 * @component
 * @description page header with logo & navigation menu
 * @prop logo application logo URL
 */
export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo sportsee" />
        </Link>
      </div>
      <Navigation />
    </header>
  );
}
