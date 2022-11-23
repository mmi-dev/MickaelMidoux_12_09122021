import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';

import { Routes, Route, Navigate } from 'react-router-dom';

import User from './pages/User';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';
import NotFound from './pages/NotFound';
import { Auth } from './contexts/Context';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');



  isAuthenticated ? console.log('auth ok') : console.log('auth ???');
  return (
    <Auth.Provider
      value={{ isAuthenticated, setIsAuthenticated, userId, setUserId }}
    >
      <div className="App">
        <Header />
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to={"/user/"+userId}/> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/community" element={<Community />} />
            <Route path="/user" element={isAuthenticated ? <Navigate to={"/user/"+userId}/> : <Navigate to={"/login"}/> } />
            <Route path="/user/:userId" element={isAuthenticated ? <User /> : <Navigate to={"/login"}/> } />
            <Route path="/user/:userId/profil" element={<Profil />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Auth.Provider>
  );
}

export default App;
