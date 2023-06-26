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
        <img src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1" alt="Image 1" />
      </div>
      <div className="content-infos4">
        <h3>Utilisateurs inscrits</h3>
        <p>Plus de 100 000 utilisateurs inscrits sur notre plateforme de covoiturage personnalisé</p>
      </div>
    </div>
    <div className="content-section4">
      <div className="content-image4">
        <img src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1" alt="Image 2" />
      </div>
      <div className="content-infos4">
        <h3>Trajets effectués</h3>
        <p>Plus de 1 million de trajets réalisés avec succès grâce à notre plateforme</p>
      </div>
    </div>
    <div className="content-section4">
      <div className="content-image4">
        <img src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1" alt="Image 3" />
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