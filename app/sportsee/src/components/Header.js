import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo//logo.png';
import Navigation from '../components/Navigation';

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
