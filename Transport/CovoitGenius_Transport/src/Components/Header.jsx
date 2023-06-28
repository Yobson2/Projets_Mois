import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import NavSection from './NavBar';

function Header() {
  return (
    <header className="site-header">
      <img src="https://www.laroueverte.com/img/base/layout/vertical/hero.jpg?timestamp=20230606084053" alt="" />
      <NavSection />
      <div className="pub-header">
        <h1 className="animated-title">Plateforme de Covoiturage Personnalisé</h1>
        <p className="animated-description">
          Facilitez vos déplacements en trouvant des trajets adaptés à vos besoins
        </p>
        <button className="cta">
          <Link to="/login" className='spanNav'>Commencer</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
