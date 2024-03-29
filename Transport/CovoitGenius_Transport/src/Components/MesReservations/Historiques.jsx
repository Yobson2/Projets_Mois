import React, { useState, useEffect } from 'react';
import "../../styles/historiques.css";
import { getDocs, historiquesReservations, onSnapshot } from '../../db/firebase';

function Historiques2({ userId}) {
  const [userInfo, setUserInfo] = useState([]);

  async function GetHistoriquesReservations(id) {
    try {
      const querySnapshot = await getDocs(historiquesReservations);
      const userInfos = querySnapshot.docs
        .filter(doc => doc.data().id_user_reservation === id)
        .map(doc => ({ documentId: doc.id, ...doc.data() }));
      setUserInfo(userInfos);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(historiquesReservations, (querySnapshot) => {
      const userInfos = querySnapshot.docs
        .filter(doc => doc.data().id_user_reservation === userId)
        .map(doc => ({ documentId: doc.id, ...doc.data() }));
      setUserInfo(userInfos);
    });

    return () => {
      unsubscribe();
    };
  }, [userId]);

  return (
    <div className="corps-historiques">
      {userInfo.map((info, index) => (
        <div className="history-container" key={index}>
          <ul className="history-list" id='history-list'>
            <li className="history-item">
              <div className="history-date">{info.Date}</div>
              <div className="history-info">
                <div className="history-description">Description {index + 1}</div>
                <div className="history-details">
                  <p>Nombre de personnes : <span className="history-people">{info.Nombre_de_Places}</span></p>
                  <hr />
                  <p>Source : <span className="history-source">{info.Point_de_Départ}</span></p>
                  <hr />
                  <p>Destination : <span className="history-destination">{info.Destination}</span></p>
                  <hr />
                  <p>Heure de début :<span className="history-start-time">{info.Heure}</span></p>

                  <hr />
                  <p>Heure de fin : <span className="history-end-time"> {info.Heure_fin}</span></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Historiques2;
