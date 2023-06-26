import React, { useState } from 'react';
import "../../styles/UserInfos.css"

import {  getDocs,getDoc, userCollection,doc,updateDoc,createUserWithEmailAndPassword,auth} from '../../db/firebase';

function UserInfos({userId,onUpdate}) {
  const [formUpdate, setFormUpdate] = useState({
    nom: "",
    prenom: "",
    email: "",
    dateNaissance:"",
    sexe:"",
    tel:"",
    password: "",
  });
  const resetForm = () => {
    setFormUpdate({
      nom: "",
      prenom: "",
      email: "",
      dateNaissance:"",
      sexe:"",
      tel:"",
      password: "",
    });
  };
  const { nom, prenom, email, dateNaissance,sexe, password,tel } = formUpdate;
  const handleChange = (e) => {
      
    setFormUpdate({
      ...formUpdate,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateElement(userId)
    onUpdate();
  };
  async function updateElement(userId){
    
    try {
      const userRef = doc(userCollection, userId);
      const userDoc = await getDoc(userRef);
  
      if (userDoc.exists()) {
        const updatedUser = {
          nom: formUpdate.nom || userDoc.data().nom,
          prenom: formUpdate.prenom || userDoc.data().prenom,
          email: formUpdate.email || userDoc.data().email,
          dateNaissance: formUpdate.dateNaissance || userDoc.data().dateNaissance,
          sexe: formUpdate.sexe || userDoc.data().sexe,
          tel: formUpdate.tel || userDoc.data().tel,
          password: formUpdate.password || userDoc.data().password,
        };
        const userCredential = await createUserWithEmailAndPassword(auth,formUpdate.email, formUpdate.password);
        await updateDoc(userRef, updatedUser);
        swal("Succès", "Informations mises à jour !", "success");
        resetForm()
      } else {
        swal("Erreur", "Utilisateur non trouvé.", "error");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la mise à jour :", error);
      swal("Erreur", "Une erreur s'est produite lors de la mise à jour.", "error");
    }
  }
  

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4" id='titre'>Formulaire de Mise à Jour</h1>
      <form onSubmit={handleSubmit} className='form_mise'>
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 mr-2  inputs" >
              <label htmlFor="nom" className="block mb-2">Nom</label>
              <input type="text" id="nom" name="nom" value={nom} placeholder="Votre nom" className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange}/>
            </div>
            <div className="w-1/2 ml-2 inputs">
              <label htmlFor="prenom" className="block mb-2">Prénom</label>
              <input type="text" id="prenom" name="prenom" value={prenom} placeholder="Votre prénom" className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange}/>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 mr-2 inputs">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" value={email} placeholder="Votre email" className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange}/>
            </div>
            <div className="w-1/2 ml-2 inputs">
              <label htmlFor="dateNaissance" className="block mb-2">Date de naissance</label>
              <input type="date" id="dateNaissance" name="dateNaissance" value={dateNaissance} className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange}/>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 mr-2 inputs">
              <label htmlFor="sexe" className="block mb-2">Sexe</label>
              <select id="sexe" name="sexe" value={sexe} className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange}>
                <option value="">Sélectionnez votre sexe</option>
                <option value="femme">Femme</option>
                <option value="homme">Homme</option>
              </select>
            </div>
            <div className="w-1/2 ml-2 inputs">
              <label htmlFor="tel" className="block mb-2">Téléphone</label>
              <input type="tel" id="tel" name="tel" value={tel} placeholder="Votre numéro de téléphone" className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange}/>
            </div>
          </div>
        </div>
        <div className="mb-4 inputs">
          <label htmlFor="password" className="block mb-2">Mot de passe</label>
          <input type="password" id="password" name="password" value={password} placeholder="Votre mot de passe" className="w-full border border-gray-300 rounded py-2 px-3" onChange={handleChange}/>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  send-btn">
         Mettre à jour
         </button>


      </form>
    </div>
  );
}

export default UserInfos;
