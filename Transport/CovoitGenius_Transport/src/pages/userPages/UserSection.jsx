import React, { useState, useEffect } from 'react';
import {  useParams,Link } from 'react-router-dom';

import "../../styles/Dashboard.css";
import Chat from '../../Components/Trajets/Chat';
import Proposer from '../../Components/Trajets/Proposer';
import Search from '../../Components/Trajets/Search';

import UserInfos from '../../Components/Parametres/UserInfos';
import Photo from '../../Components/Parametres/Photo';

import AnnoncesEncours from '../../Components/MesAnnonces/EnCours';
import Historiques from '../../Components/MesAnnonces/Historiques';

import Encours2 from '../../Components/MesReservations/Encours';
import Historiques2 from '../../Components/MesReservations/Historiques';

import "../../styles/enteteDash.css";
import {  getDocs, userCollection } from '../../db/firebase';

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState(1);
  const [currentSubSection, setCurrentSubSection] = useState(5);
  const [userInfo, setUserInfo] = useState(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  let { id } = useParams();
  const changeContent = (section) => {
    setCurrentSection(section);
    
  };

  const changeTrajet = (subsection) => {
    setCurrentSubSection(subsection + 4);
  };
  async function GetInfosUser(id) {
    try {
      const querySnapshot = await getDocs(userCollection);
      for (const doc of querySnapshot.docs) {
        const documentData = doc.data();
        const documentId = doc.id;
        if (id === documentId) {
          setUserInfo(documentData);
        }
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
    }
  }
  const handleUpdate = () => {
    setUpdateTrigger(!updateTrigger);
  };

  useEffect(() => {
    GetInfosUser(id);
  }, [id,updateTrigger]);

  
  return (
    <div className='User-section'>
       
      <div className="banner">
        {userInfo && (
        <div>
           <div className="wrapper-entete site-header__wrapper">
        <div className="logo-texte">
          <div className="site-header__dash">
          <img src={userInfo.photo} alt="" />
          </div>
           <div class="textContainer">
            <p class="name">{userInfo.nom}</p>
            <p class="profile">{userInfo.prenom}</p>
          </div>
        </div>
        <div className="site-header__middle">
          <Nav />
        </div>
      </div>
        </div>
      )}
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
            <button className="menu-item2" onClick={() => changeTrajet(3)}>Communauté</button>
          </div>

          <div className="section1-moove">
            <div className="card1" id="section5" style={{ display: currentSubSection === 5 ? 'block' : 'none' }}>
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>chercher</h3>

               {id && <Search userId={id} onUpdate={handleUpdate}/>}
            </div>
            
            <div className="card1" id="section6" style={{ display: currentSubSection === 6 ? 'block' : 'none' }}>
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>Proposer</h3>
              {id && <Proposer userId={id} onUpdate={handleUpdate}/>}
            </div>
            
            <div className="card1" id="section7" style={{ display: currentSubSection === 7 ? 'block' : 'none' }}>
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>communauté</h3>
              <Chat />
            </div>
          </div>
        </div>
        
        <div className="card" id="section2" style={{ display: currentSection === 2 ? 'block' : 'none' }}>
          <div className="navigation2">
            <button className="menu-item2" onClick={() => {changeTrajet(4);handleUpdate()}}>Informations personnelles</button> 
            <button className="menu-item2" onClick={() => {changeTrajet(5);handleUpdate()}}>Photo</button> 
            {/* <button className="menu-item2" onClick={() => changeTrajet(6)}>Vehicule</button> */}
          </div>
          <div className="section1-moove">
          <div className="card1" id="section8" style={{ display: currentSubSection === 8 ? 'block' : 'none' }}>
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>informations personnelles</h3>
              {id && <UserInfos userId={id}  onUpdate={handleUpdate}/>}
            </div>
            
            <div className="card1" id="section9" style={{ display: currentSubSection === 9 ? 'block' : 'none' }}>
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>Photo</h3>
             
              {id && <Photo userId={id}  onUpdate={handleUpdate} />}
            </div>
          </div>
          
        </div>
        
        <div className="card" id="section3" style={{ display: currentSection === 3 ? 'block' : 'none' }}>
        <div className="navigation2">
        <button className="menu-item2" onClick={() => {changeTrajet(7);handleUpdate();}}>En cours</button>
            <button className="menu-item2" onClick={() => {changeTrajet(8);handleUpdate();}}>Historiques</button> 
          </div>
          <div className="section1-moove">
            <p>Retrouvez ici vos annonces en cours ainsi que celles dans l'historiques</p>
          <div className="card1" id="section11" style={{ display: currentSubSection === 11 ? 'block' : 'none' }}>
             
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>En cours</h3>
              
              {id && <AnnoncesEncours userId={id} onUpdate={handleUpdate}/>}
            </div>
            
            <div className="card1" id="section12" style={{ display: currentSubSection === 12 ? 'block' : 'none' }}>
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>Historiques</h3>
              
              {id && <Historiques userId={id} onUpdate={handleUpdate}/>}
            </div>
            
          </div>
        </div>
        
        <div className="card" id="section4" style={{ display: currentSection === 4 ? 'block' : 'none' }}>
        <div className="navigation2">
            <button className="menu-item2" onClick={() => {changeTrajet(9);handleUpdate()}}>En cours</button> 
            <button className="menu-item2" onClick={() => {changeTrajet(10);handleUpdate()}}>Historiques</button> 
          </div>
          <div className="section1-moove">
          <p>Retrouvez ici vos reservations en cours ainsi que celles dans l'historiques</p>
          <div className="card1" id="section13" style={{ display: currentSubSection === 13 ? 'block' : 'none' }}>
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>En cours</h3>
              {id && <Encours2 userId={id} onUpdate={handleUpdate}/>}
            </div>
            
            <div className="card1" id="section14" style={{ display: currentSubSection === 14 ? 'block' : 'none' }}>
              <h3 className="section-title"><i class="fa-regular fa-hand-point-right"></i>Historiques</h3>
           
              {id && <Historiques2  userId={id} onUpdate={handleUpdate}/>}
            </div>
            
          </div>
        </div>
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
        className={`nav__toggle_dah ${isActive ? 'active' : ''}`}
        onClick={handleToggle}
        aria-expanded={isActive ? 'true' : 'false'}
        aria-label={isActive ? 'close menu' : 'menu'}
      >
        {isActive ? 'X' : <i className="fa-sharp fa-solid fa-bars"></i>}
      </button>
      <ul className={`nav__wrapper_dash ${isActive ? 'active' : ''}`}>
        <li className="nav__item">
          <Link  className='liens'>Mon profit</Link>
        </li>
        <li className="nav__item">
          <Link  className='liens'>Deconnexion</Link>
        </li>
      </ul>
    </nav>
  );
}


