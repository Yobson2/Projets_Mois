import React from 'react';
import "../../styles/StyleComponentsHome/section1.css";
import { Link } from 'react-router-dom';
import logo1 from '../../assets/Images/banner-img.png';
import logo2 from '../../assets/Logo/icons8-check-50.png';

export default function Section1() {
  return (
    <div className="section1">
      <div className="section1-image">
        <img src={logo1} alt="" />
      </div>
      <div className="section1-blocks">
        <h1>Avantages du Covoiturage</h1>
        <ul>
          <li><img src={logo2} alt="" /><span>Réduction des coûts de transport</span></li>
          <li><img src={logo2} alt="" /><span>Diminution de l'impact environnemental</span></li>
          <li><img src={logo2} alt="" /><span>Création de liens sociaux et opportunités de networking</span></li>
          <li><img src={logo2} alt="" /><span>Économie de places de parking</span></li>
          <li><img src={logo2} alt="" /><span>Réduction du trafic et de la congestion</span></li>
        </ul>

        <Link to="/login" className="section1_btn"><span>Commencer</span></Link>
      </div>
    </div>
  );
};
