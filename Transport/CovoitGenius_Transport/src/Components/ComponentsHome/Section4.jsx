import React from 'react';
import "../../styles/StyleComponentsHome/section4.css"

export default function Section4() {
  return(
    <div className="section4">
  <p>Nos Chiffres</p>
  <h1>Statistiques Clés</h1>
  <p>
    Une analyse approfondie des données pour identifier les informations essentielles et prendre des décisions éclairées. Les statistiques clés fournissent des indicateurs clés de performance et des tendances significatives.
  </p>
  <div className="section4-blocks">
    <div className="content-section4">
      <div className="content-image4">
        <img src="https://media.istockphoto.com/id/1458537591/fr/photo/lhomme-fait-lexamen-en-ligne-sur-l%C3%A9cran-virtuel-r%C3%A9pondez-%C3%A0-un-sondage-en-remplissant-un.webp?b=1&s=170667a&w=0&k=20&c=FUDNtLuWeAoAIp1yNFo-TFYzUbQHsIUN3PJfFpQfnAI=" alt="Image 1" />
      </div>
      <div className="content-infos4">
        <h3>Utilisateurs inscrits</h3>
        <p>Plus de 100 000 utilisateurs inscrits sur notre plateforme de covoiturage personnalisé</p>
      </div>
    </div>
    <div className="content-section4">
      <div className="content-image4">
        <img src="https://media.istockphoto.com/id/932645662/fr/photo/voitures-sur-route-asphalt%C3%A9e-en-%C3%A9t%C3%A9.webp?b=1&s=170667a&w=0&k=20&c=H0b2XNCiYje9b15mhJHVDN5wvEhn-moY-pKr0K62WbI=" alt="Image 2" />
      </div>
      <div className="content-infos4">
        <h3>Trajets effectués</h3>
        <p>Plus de 1 million de trajets réalisés avec succès grâce à notre plateforme</p>
      </div>
    </div>
    <div className="content-section4">
      <div className="content-image4">
        <img src="https://media.istockphoto.com/id/1403692324/fr/photo/volant-moderne-de-behine-de-tableau-de-bord-ev.webp?b=1&s=170667a&w=0&k=20&c=S6dK0GDYMHNRqORiGrbXr2p1xpRzzfCfIGKH-Gpiyng=" alt="Image 3" />
      </div>
      <div className="content-infos4">
        <h3>Économie de carburant</h3>
        <p>Plus de 500 000 litres de carburant économisés grâce au covoiturage sur notre plateforme</p>
      </div>
    </div>
  </div>
</div>

   
  );
}