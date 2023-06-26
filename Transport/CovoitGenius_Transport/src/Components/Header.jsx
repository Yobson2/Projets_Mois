import React, { useState } from 'react';

import '../styles/header.css';
import NavSection from './NavBar'

function Header() {
  return (
    
          <header className="site-header">
            <img src="../../../public/Images/forgot-password.png" alt="" />
            <NavSection />
            <div className="pub-header">
              <h1>Plateforme de Covoiturage Personnalisé</h1>
              <p>
                Facilitez vos déplacements en trouvant des trajets adaptés à vos
                besoins
              </p>
            </div>
          </header>  
  );
}



export default Header;
