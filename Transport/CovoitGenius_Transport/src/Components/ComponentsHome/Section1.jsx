import React from 'react';
import "../../styles/StyleComponentsHome/section1.css";

export default function Section1() {
  return (
    <div className="section1">
      <div className="section1-image">
        <img src="../../public/Images/banner-img.png" alt="" />
      </div>
      <div className="section1-blocks">
        <h1>Avantages du Covoiturage</h1>
        <ul>
          <li><img src="../../public/Logo/icons8-check-50.png" alt="" /><span>Réduction des coûts de transport</span></li>
          <li><img src="../../public/Logo/icons8-check-50.png" alt="" /><span>Diminution de l'impact environnemental</span></li>
          <li><img src="../../public/Logo/icons8-check-50.png" alt="" /><span>Création de liens sociaux et opportunités de networking</span></li>
          <li><img src="../../public/Logo/icons8-check-50.png" alt="" /><span>Économie de places de parking</span></li>
          <li><img src="../../public/Logo/icons8-check-50.png" alt="" /><span>Réduction du trafic et de la congestion</span></li>
        </ul>

        <button className="section1_btn"><span>Commencer</span></button>
      </div>
    </div>
  );
};
