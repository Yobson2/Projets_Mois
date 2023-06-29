// import  { useState } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/Carrios.png';

 function NavSection() {
    return (
      <div className="wrapper site-header__wrapper">
        <div className="logo-texte">
          <div className="site-header__start">
            <img
              src={logo}
              alt=""
              className="brand"
            />
          </div>
          <h3>CovoitGenius</h3>
        </div>
        <div className="site-header__middle">
          <Nav />
        </div>
      </div>
    );
  }
 

function Nav() {
    const [isActive, setIsActive] = useState(false);
  
    const handleToggle = () => {
      setIsActive(!isActive);
    };
  
    return (
      <nav className="nav">
        <button
          className={`nav__toggle ${isActive ? 'active' : ''}`}
          onClick={handleToggle}
          aria-expanded={isActive ? 'true' : 'false'}
          aria-label={isActive ? 'close menu' : 'menu'}
        >
          {isActive ? 'X' : <i className="fa-sharp fa-solid fa-bars"></i>}
        </button>
        <ul className={`nav__wrapper ${isActive ? 'active' : ''}`}>
          <li className="nav__item">
            <Link to="/login" className='liens'>Se connecter</Link>
          </li>
          <li className="nav__item">
            <Link to="/registre" className='liens'>S'inscrire</Link>
          </li>
        </ul>
      </nav>
    );
  }


  export default NavSection;