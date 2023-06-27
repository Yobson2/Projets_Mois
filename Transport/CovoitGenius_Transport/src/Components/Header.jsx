import React, { useState } from 'react';

import '../styles/header.css';
import NavSection from './NavBar'

function Header() {
  return (
    
          <header className="site-header">
            {/* <img src="../../../public/Images/forgot-password.png" alt="" /> */}
            <NavSection />
            <div className="pub-header">
              <h1>Plateforme de Covoiturage Personnalisé</h1>
              <p>
                Facilitez vos déplacements en trouvant des trajets adaptés à vos
                besoins
              </p>
              <button class="cta">
              <span>Commencer</span>
              {/* <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg> */}
            </button>
            </div>
          </header>  
  );
}



export default Header;
