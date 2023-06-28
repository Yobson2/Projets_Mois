import React, { useState, useEffect } from 'react';
import { getDocs, annonceCollection, doc, deleteDoc, historiquesAnnonces, addDoc, onSnapshot } from '../../db/firebase';

import '../../styles/AnnoncesEncours.css';

function AnnoncesEncours({ userId, onUpdate }) {
  const [userInfo, setUserInfo] = useState([]);

  async function GetInfosUser(userId) {
    try {
      const querySnapshot = await getDocs(annonceCollection);

      let userDocuments = querySnapshot.docs.filter(doc => {
        const userData = doc.data();
        console.log('userData2', userData.id_user);
        return userData.id_user && userData.id_user.includes(userId);
      });
      console.log('userDocuments', userDocuments);

      const userInfos = userDocuments.map(doc => ({
        documentId: doc.id,
        ...doc.data()

      }));
      console.log('userInfos', userInfos);

      setUserInfo(userInfos);

    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
    }
  }

  async function handleTerminer(documentId) {
    try {
      const elementToDelete = userInfo.find(info => info.documentId === documentId);
      // Enregistrer l'élément dans la collection "historiquesAnnonces"
      const elementFin = {
        ...elementToDelete,
        Heure_fin: getCurrentTime()
      }
      if (elementFin) {
        await addDoc(historiquesAnnonces, elementFin);
        swal("Cher utilisateur !", "Votre annonce a été ajoutée à votre historique une fois terminée", "success");
      }

      // Supprimer l'élément de la collection d'origine
      await deleteDoc(doc(annonceCollection, documentId));
      // Mettre à jour l'état pour refléter les changements
      const updatedUserInfo = userInfo.filter(info => info.documentId !== documentId);
      setUserInfo(updatedUserInfo);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la suppression de l'élément :", error);
    }
    // console.log('id doc', documentId);
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(annonceCollection, (querySnapshot) => {
      let userDocuments = querySnapshot.docs.filter(doc => {
        const userData = doc.data();
        return userData.id_user && userData.id_user.includes(userId);
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
            <p className="card-info">Preference: <span className="card-data"> {infos.Préférences}</span></p>
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

export default AnnoncesEncours;



function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Formatage des chiffres 
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}
