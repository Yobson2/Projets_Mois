import React, { useState } from 'react';
import "../../styles/Dashboard.css";
import NavSection from '../../Components/NavBar';

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState(1);
  const [currentSubSection, setCurrentSubSection] = useState(5);

  const changeContent = (section) => {
    setCurrentSection(section);
  };

  const changeTrajet = (subsection) => {
    setCurrentSubSection(subsection + 4);
    console.log('changeTrajet')
  };

  return (
    <div className='User-section'>
      {/* <NavSection /> */}
      <h3>Dashboard user</h3>
      <div className="banner">
        <h1>User Dashboard</h1>
      </div>
      
      <div className="navigation">
        <button className="menu-item" onClick={() => changeContent(1)}>Trajet</button>
        <button className="menu-item" onClick={() => changeContent(2)}>Paramètres</button>
        <button className="menu-item" onClick={() => changeContent(3)}>Mes annonces</button>
        <button className="menu-item" onClick={() => changeContent(4)}>Mes réservations</button>
      </div>
      
      <div className="content">
        <h2>Dashboard Content</h2>
        
        <div className="card" id="section1" style={{ display: currentSection === 1 ? 'block' : 'none' }}>
          <div className="navigation2">
            <button className="menu-item2" onClick={() => changeTrajet(1)}>Chercher</button> ou&nbsp;
            <button className="menu-item2" onClick={() => changeTrajet(2)}>Proposer</button> ou&nbsp;
            <button className="menu-item2" onClick={() => changeTrajet(3)}>Chat</button>
          </div>

          <div className="section1-moove">
            <div className="card1" id="section5" style={{ display: currentSubSection === 5 ? 'block' : 'none' }}>
              <h3 className="section-title">Section 5</h3>
              <p>Contenu de la section 5...</p>
            </div>
            
            <div className="card1" id="section6" style={{ display: currentSubSection === 6 ? 'block' : 'none' }}>
              <h3 className="section-title">Section 6</h3>
              <p>Contenu de la section 6...</p>
            </div>
            
            <div className="card1" id="section7" style={{ display: currentSubSection === 7 ? 'block' : 'none' }}>
              <h3 className="section-title">Section 7</h3>
              <p>Contenu de la section 7...</p>
            </div>
          </div>
        </div>
        
        <div className="card" id="section2" style={{ display: currentSection === 2 ? 'block' : 'none' }}>
          <h3 className="section-title">Section 2</h3>
          <p>Contenu de la section 2...</p>
        </div>
        
        <div className="card" id="section3" style={{ display: currentSection === 3 ? 'block' : 'none' }}>
          <h3 className="section-title">Section 3</h3>
          <p>Contenu de la section 3...</p>
        </div>
        
        <div className="card" id="section4" style={{ display: currentSection === 4 ? 'block' : 'none' }}>
          <h3 className="section-title">Section 4</h3>
          <p>Contenu de la section 4...</p>
        </div>
      </div>
    </div>
   
  );
}