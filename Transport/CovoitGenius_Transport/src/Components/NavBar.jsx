// import  { useState } from 'react';
import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
 function NavSection() {
    return (
      <div className="wrapper site-header__wrapper">
        <div className="logo-texte">
          <div className="site-header__start">
            <img
              src="../../../public/Carrios.png"
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
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/trajet">Apropos</Link>
          </li>
          <li className="nav__item">
            <Link to="/trajet">Contact</Link>
          </li>
          <li className="compte">
            <Link to="/login">Mon profit</Link>
          </li>
        </ul>
      </nav>
    );
  }


  export default NavSection;