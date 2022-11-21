import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';

import { Routes, Route } from 'react-router-dom';

import User from './pages/User';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';
import NotFound from './pages/NotFound';
import { Auth, AuthUser } from './contexts/AuthContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  isAuthenticated ? console.log('auth ok') : console.log('auth ???');
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <AuthUser.Provider value={{ userId, setUserId }}>
        <div className="App">
          <Header />
          <div className="container">
            <SideBar />
            <Routes>
              <Route
                path="/"
                element={isAuthenticated ? <User /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/community" element={<Community />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/user/:userId/profil" element={<Profil />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </AuthUser.Provider>
    </Auth.Provider>
  );
}

export default App;
