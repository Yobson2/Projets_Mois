import React, { useState, useEffect } from 'react';
import "../../styles/Proposer.css"

import { annonceCollection, addDoc, getDocs, userCollection } from '../../db/firebase';

function Proposer({ userId }) {
  const [er, setErrorChamps] = useState(false);
  const [matchingDocs, setMatchingDocs] = useState([]);
  const [formPropose, setFormPropose] = useState({
    Point_de_Départ: "",
    Destination: "",
    Date: "",
    Heure: "",
    Nombre_de_Places: "",
    Taille_des_bagages: "",
    Préférences: "",
    Montant:"",
  });


  const { Point_de_Départ, Destination, Date,Montant, Heure, Nombre_de_Places, Taille_des_bagages, Préférences } = formPropose;

  const handleChange = (e) => {
    setFormPropose({
      ...formPropose,
      [e.target.name]: e.target.value,
      id_user: userId,
      nom: matchingDocs[0]?.nom,
      photo: matchingDocs[0]?.photo,
    });
  };

  const resetForm = () => {
    setFormPropose({
      Point_de_Départ: "",
      Destination: "",
      Date: "",
      Heure: "",
      Nombre_de_Places: "",
      Taille_des_bagages: "",
      Préférences: "",
      Montant:""
    });

  };

  const handleSign = async (e) => {
    e.preventDefault();
    if (!Point_de_Départ || !Destination || !Date || !Heure || !Montant || !Nombre_de_Places || !Taille_des_bagages || !Préférences) {
      setErrorChamps(true);
      return;
    }
    try {
      const data = await addDoc(annonceCollection, formPropose);
      swal("Félicitation !", "Votre Annonces a été enregistrée avec succès !", "success");
      resetForm();
      setErrorChamps(false);
    } catch (e) {
      setErrorChamps(true);
    }
  }

  useEffect(() => {
    async function GetInfosUser(userId) {
      try {
        const querySnapshot = await getDocs(userCollection);
        const matchingData = querySnapshot.docs
          .filter(doc => doc.id === userId)
          .map(doc => ({ nom: doc.data().nom, photo: doc.data().photo }));

        setMatchingDocs(matchingData);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des documents :", error);
      }
    }
    GetInfosUser(userId);
   
  }, [userId]);

 
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
          <label for="seats" className="block mb-2">Montant</label>
          <input type='text' id="seats" name="Montant" value={Montant} className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange} required=""/>
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








 
