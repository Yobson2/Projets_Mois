import React from 'react';
import "../../styles/historiques.css"

function Historiques2() {
  return (
    <div className="corps-historiques">
    <div className="history-container">
    <ul className="history-list" id='history-list'>
      <li className="history-item">
        <div className="history-date">Date 1</div>
        <div className="history-info">
          <div className="history-description">Description 1</div>
          <div className="history-details">
          <p>Nombre de personnes : <span className="history-people"> 5</span></p>
            <hr />
             <p>Source : <span className="history-source"> Ville A</span></p>
             <hr />
             <p>Destination : <span className="history-destination">Ville B</span></p>
             <hr />
             <p>Heure de début :<span className="history-start-time"> 09:00</span></p>
             
             <hr />
             <p>Heure de fin : <span className="history-end-time"> 12:00</span></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div className="history-container">
    <ul className="history-list" id='history-list'>
      <li className="history-item">
        <div className="history-date">Date 1</div>
        <div className="history-info">
          <div className="history-description">Description 1</div>
          <div className="history-details">
          <p>Nombre de personnes : <span className="history-people"> 5</span></p>
            <hr />
             <p>Source : <span className="history-source"> Ville A</span></p>
             <hr />
             <p>Destination : <span className="history-destination">Ville B</span></p>
             <hr />
             <p>Heure de début :<span className="history-start-time"> 09:00</span></p>
             
             <hr />
             <p>Heure de fin : <span className="history-end-time"> 12:00</span></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div className="history-container">
    <ul className="history-list" id='history-list'>
      <li className="history-item">
        <div className="history-date">Date 1</div>
        <div className="history-info">
          <div className="history-description">Description 1</div>
          <div className="history-details">
            <p>Nombre de personnes : <span className="history-people"> 5</span></p>
            <hr />
             <p>Source : <span className="history-source"> Ville A</span></p>
             <hr />
             <p>Destination : <span className="history-destination">Ville B</span></p>
             <hr />
             <p>Heure de début :<span className="history-start-time"> 09:00</span></p>
             
             <hr />
             <p>Heure de fin : <span className="history-end-time"> 12:00</span></p>
            
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
  );
}

export default Historiques2;
