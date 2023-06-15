import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../styles/header.css';
import Trajet from '../pages/Trajet';
import Home from '../pages/Home';
import Registre from '../pages/Registre';
import NavSection from './NavBar'
import Login from '../pages/Login';

function Header() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <header className="site-header">
            {/* <img src="../../../public/Images/7572771.jpg" alt="" /> */}
            <NavSection />
            <div className="pub-header">
              <h1>Plateforme de Covoiturage Personnalisé</h1>
              <p>
                Facilitez vos déplacements en trouvant des trajets adaptés à vos
                besoins
              </p>
            </div>
          </header>
        }
      />

      <Route path="/" element={<Home />} />
      <Route path="/trajet" element={<Trajet />} />
      <Route path="/registre" element={<Registre />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}



export default Header;
