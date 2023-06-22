import React, { useState,useEffect } from 'react';
import "../../styles/Proposer.css"

import {annonceCollection,addDoc, getDocs,userCollection} from '../../db/firebase';

function Proposer({ userId }) {
  const [er, setErrorChamps]=useState(false)
  const matchingDocs = [];

  const [formPropose, setFormPropose] = useState({
    id_user:userId,
    nom:"ccoco",
    photo:"photo",
    Point_de_Départ: "",
    Destination: "",
    Date: "",
    Heure: "",
    Nombre_de_Places:"",
    Taille_des_bagages:"",
    Préférences: ""
  });
 

  const { id_user,nom,photo,Point_de_Départ,Destination, Date,Heure,Nombre_de_Places, Taille_des_bagages,Préférences } = formPropose;
  const handleChange = (e) => {
      
    setFormPropose({
      ...formPropose,
      [e.target.name]: e.target.value
    });
  };
  const resetForm = () => {
    setFormPropose({
      Point_de_Départ: "",
      Destination: "",
      Date: "",
      Heure: "",
      Nombre_de_Places:"",
      Taille_des_bagages:"",
      Préférences: ""
    });

  };
  
  const handleSign = async (e) => {
    e.preventDefault();
    if (!Point_de_Départ || !Destination || !Date || !Heure || !Nombre_de_Places || !Taille_des_bagages || !Préférences) {
      setErrorChamps(true);
      return;
    }
    try {
      const data = await addDoc(annonceCollection, formPropose); 
      swal("Félicitation !", "Votre Annonces a été enregistre avec succes !", "success")
      resetForm();
      setErrorChamps(false);
      console.log(formPropose,'form')
    } catch (e) {
      setErrorChamps(true);
    }
  }
  async function GetInfosUser(userId) {
    try {
      const querySnapshot = await getDocs(userCollection);
  
      for (const doc of querySnapshot.docs) {
        const documentData = doc.data();
        const documentId = doc.id;
  
        if (userId === documentId) {
          const { nom, photo } = documentData;
          const matchingData = { nom, photo };
          matchingDocs.push(matchingData);
        }
      }
  
      console.log('Données correspondantes :', matchingDocs[0].nom,matchingDocs[0].photo);
      console.log("Super11");
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
    }
  }
  GetInfosUser(userId);
 
  return (
    <section className="search-section p-8">
      <h1>Trouver un Trajet</h1>
      <form  id='form44' onSubmit={handleSign}>
        <div className="mb-4">
          <label for="departure" className="block mb-2">Point de Départ</label>
          <input type="text" id="departure" name="Point_de_Départ" value={Point_de_Départ} placeholder="Entrez votre point de départ" className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange} required=""/>
        </div>
        <div className="mb-4">
          <label for="destination" className="block mb-2">Destination</label>
          <input type="text" id="destination" name="Destination" value={Destination} placeholder="Entrez votre destination" className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange} required=""/>
        </div>
        <div className="mb-4">
          <label for="date" className="block mb-2">Date</label>
          <input type="date" id="date" name="Date" value={Date} className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange} required=""/>
        </div>
        <div className="mb-4">
          <label for="time" className="block mb-2">Heure</label>
          <input type="time" id="time" name="Heure" value={Heure} className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange} required=""/>
        </div>
        <div className="mb-4">
          <label for="seats" className="block mb-2">Nombre de Places</label>
          <input type="number" id="seats" name="Nombre_de_Places" value={Nombre_de_Places} min="1" max="4" className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange} required=""/>
        </div>
        <div className="mb-4">
          <label for="seats" className="block mb-2">Taille des bagages</label>
          <select id="preferences" name="Taille_des_bagages" value={Taille_des_bagages} className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange} required="">
            <option value="Aucune">Aucune</option>
            <option value="Petits">Petits</option>
            <option value="Beaucoup">Beaucoup</option>
          </select>
        </div>
        <div className="mb-4">
          <label for="preferences" className="block mb-2">Préférences</label>
          <select id="preferences" name="Préférences" value={Préférences} className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange} required="">
            <option value="Aucune préférence">Aucune préférence</option>
            <option value="Fumeurs autorisés">Fumeurs autorisés</option>
            <option value="Animaux de compagnie autorisés">Animaux de compagnie autorisés</option>
          </select>
        </div>
        {  er && <p className="signin-error-annonces">Veuillez rempli tous les champs !!!</p>}
        <button type="submit" className="search-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Proposer
        </button>
      </form>
    </section>
  );
}

export default Proposer;








 
