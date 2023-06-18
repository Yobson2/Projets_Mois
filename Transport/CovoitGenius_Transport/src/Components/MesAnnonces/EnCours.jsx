import React from 'react';

import "../../styles/AnnoncesEncours.css"

function AnnoncesEncours() {
    return (
      <div className="blocks-annonces-encours">
        <div className="card-annonces">
          <div className="card-body">
            <hr />
            <p className="card-info">Source: <span className="card-data">Valeur de la source</span></p>
            <hr />
            <p className="card-info">Destination: <span className="card-data">Valeur de la destination</span></p>
            <hr />
            <p className="card-info">Date: <span className="card-data">Valeur de la date</span></p>
            <hr />
          </div>
          <div className="button-container">
            <button className="info-button">Infos</button>
            <button className="info-button">Terminer</button>
          </div>
        </div>

        
        
      </div>
    );
  }
  

export default AnnoncesEncours;
