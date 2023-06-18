import React, { useState } from 'react';
import "../../styles/Dashboard.css";
import NavSection from '../../Components/NavBar';
import Chat from '../../Components/Trajets/Chat';
import Proposer from '../../Components/Trajets/Proposer';
import Search from '../../Components/Trajets/Search';

import UserInfos from '../../Components/Parametres/UserInfos';
import Photo from '../../Components/Parametres/Photo';

import AnnoncesEncours from '../../Components/MesAnnonces/EnCours';
import Historiques from '../../Components/MesAnnonces/Historiques';

import Encours2 from '../../Components/MesReservations/Encours';
import Historiques2 from '../../Components/MesReservations/Historiques';

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
              {/* <h3 className="section-title">Section 5</h3> */}
              <Search />
            </div>
            
            <div className="card1" id="section6" style={{ display: currentSubSection === 6 ? 'block' : 'none' }}>
              <h3 className="section-title">Section 6</h3>
              <Proposer />
            </div>
            
            <div className="card1" id="section7" style={{ display: currentSubSection === 7 ? 'block' : 'none' }}>
              <h3 className="section-title">Section 7</h3>
              <Chat />
            </div>
          </div>
        </div>
        
        <div className="card" id="section2" style={{ display: currentSection === 2 ? 'block' : 'none' }}>
          <div className="navigation2">
            <button className="menu-item2" onClick={() => changeTrajet(4)}>Informations personnelles</button> 
            <button className="menu-item2" onClick={() => changeTrajet(5)}>Photo</button> 
            <button className="menu-item2" onClick={() => changeTrajet(6)}>Vehicule</button>
          </div>
          {/* <h3 className="section-title">Section 2</h3>
          <p>Contenu de la section 2...</p> */}
          <div className="section1-moove">
          <div className="card1" id="section8" style={{ display: currentSubSection === 8 ? 'block' : 'none' }}>
              <h3 className="section-title">Section 8</h3>
              <UserInfos />
            </div>
            
            <div className="card1" id="section9" style={{ display: currentSubSection === 9 ? 'block' : 'none' }}>
              <h3 className="section-title">Section 6</h3>
              <Photo />
            </div>
            
            <div className="card1" id="section10" style={{ display: currentSubSection === 10 ? 'block' : 'none' }}>
              <h3 className="section-title">Section 10</h3>
              <p>Vehicule</p>
            </div>
          </div>
          
        </div>
        
        <div className="card" id="section3" style={{ display: currentSection === 3 ? 'block' : 'none' }}>
        <div className="navigation2">
            <button className="menu-item2" onClick={() => changeTrajet(7)}>En cours</button> 
            <button className="menu-item2" onClick={() => changeTrajet(8)}>Historiques</button> 
          </div>
          <div className="section1-moove">
            <p>Retrouvez ici vos annonces en cours ainsi que celles dans l'historiques</p>
          <div className="card1" id="section11" style={{ display: currentSubSection === 11 ? 'block' : 'none' }}>
             
              <h3 className="section-title">/En cours</h3>
              <AnnoncesEncours />
            </div>
            
            <div className="card1" id="section12" style={{ display: currentSubSection === 12 ? 'block' : 'none' }}>
              <h3 className="section-title">/Historiques</h3>
              <Historiques />
            </div>
            
          </div>
        </div>
        
        <div className="card" id="section4" style={{ display: currentSection === 4 ? 'block' : 'none' }}>
        <div className="navigation2">
            <button className="menu-item2" onClick={() => changeTrajet(9)}>En cours</button> 
            <button className="menu-item2" onClick={() => changeTrajet(10)}>Historiques</button> 
          </div>
          <div className="section1-moove">
          <p>Retrouvez ici vos reservations en cours ainsi que celles dans l'historiques</p>
          <div className="card1" id="section13" style={{ display: currentSubSection === 13 ? 'block' : 'none' }}>
              <h3 className="section-title">/En cours</h3>
              <Encours2 />
            </div>
            
            <div className="card1" id="section14" style={{ display: currentSubSection === 14 ? 'block' : 'none' }}>
              <h3 className="section-title">/Historiques</h3>
              <Historiques2 />
            </div>
            
          </div>
        </div>
      </div>
    </div>
   
  );
}