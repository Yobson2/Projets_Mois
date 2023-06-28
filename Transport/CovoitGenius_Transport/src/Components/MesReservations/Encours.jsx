import React, { useState, useEffect } from 'react';
import { getDocs, reservationCollection, doc, deleteDoc, addDoc, historiquesReservations, onSnapshot } from '../../db/firebase';
import "../../styles/reservationEncours.css"

function Encours2({ userId, onUpdate }) {
  const [userInfo, setUserInfo] = useState([]);

  async function GetInfosUser(userId) {
    try {
      const querySnapshot = await getDocs(reservationCollection);

      let userDocuments = querySnapshot.docs.filter(doc => {
        const userData = doc.data();
        return userData.id_user_reservation && userData.id_user_reservation.includes(userId);
      });
      console.log('userDocuments', userDocuments);

      const userInfos = userDocuments.map(doc => ({
        documentId: doc.id,
        ...doc.data()
      }));
      console.log('userInfos-reservations', userInfos);

      setUserInfo(userInfos);

    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
    }
  }

  async function handleTerminer(documentId) {
    try {
      const elementToDelete = userInfo.find(info => info.documentId === documentId);
      // Enregistrer l'élément dans la collection "historiquesReservations"
      const elementFin = {
        ...elementToDelete,
        Heure_fin: getCurrentTime()
      }
      if (elementFin) {
        await addDoc(historiquesReservations, elementFin);
        swal("Cher utilisateur !", "Votre reservation a été ajoutée à votre historique une fois terminée", "success");
      }

      // Supprimer l'élément de la collection d'origine
      await deleteDoc(doc(reservationCollection, documentId));
      console.log('Élément supprimé avec succès !');
      // Mettre à jour l'état pour refléter les changements
      const updatedUserInfo = userInfo.filter(info => info.documentId !== documentId);
      setUserInfo(updatedUserInfo);

      onUpdate();
    } catch (error) {
      console.error("Une erreur s'est produite lors de la suppression de l'élément :", error);
    }
    console.log('id doc', documentId);
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(reservationCollection, (querySnapshot) => {
      let userDocuments = querySnapshot.docs.filter(doc => {
        const userData = doc.data();
        return userData.id_user_reservation && userData.id_user_reservation.includes(userId);
      });

      const userInfos = userDocuments.map(doc => ({
        documentId: doc.id,
        ...doc.data()
      }));

      setUserInfo(userInfos);
    });

    return () => {
      unsubscribe();
    };
  }, [userId]);
  
  return (
    <div className="blocks-annonces-encours">
      {userInfo.map((infos, index) => (
        <div className="card-annonces" key={index}>
          <div className="card-body">
            <hr />
            <p className="card-info">Source: <span className="card-data">{infos.Point_de_Départ}</span></p>
            <hr />
            <p className="card-info">Destination: <span className="card-data">{infos.Destination}</span></p>
            <hr />
            <p className="card-info">Date: <span className="card-data">{infos.Date}</span></p>
            <hr />
          </div>
          <div className="button-container">
            <button className="info-button" onClick={() => handleTerminer(infos.documentId)}>Terminer</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Encours2;


function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Formatage des chiffres 
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

