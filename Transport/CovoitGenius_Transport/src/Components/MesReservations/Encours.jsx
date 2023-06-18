import React from 'react';
import "../../styles/reservationEncours.css"

function Encours2() {
  return (
    <div className="blocks-reservation-encours">
    <div className="card-reservation">
      <div className="card-body">
        <hr />
        <p className="card-info">Source: <span className="card-data"> Valeur de la source</span></p>
        <hr />
        <p className="card-info">Destination: <span className="card-data">Valeur de la destination</span></p>
        <hr />
        <p className="card-info">Date: <span className="card-data">Valeur de la date</span></p>
        <hr />
      </div>
      <div className="button-container">
        <button className="info-button-res">Infos</button>
        <button className="info-button-res">Terminer</button>
      </div>
    </div>

    
    
  </div>
  );
}

export default Encours2;
