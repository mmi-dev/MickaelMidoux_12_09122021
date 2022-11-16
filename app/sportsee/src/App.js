// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId/profil" element={<Profil />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
