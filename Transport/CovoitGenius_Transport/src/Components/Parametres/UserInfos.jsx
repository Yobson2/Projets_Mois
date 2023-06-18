import React from 'react';
import "../../styles/UserInfos.css"

function UserInfos() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez le code pour gérer la soumission du formulaire ici
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4" id='titre'>Formulaire de Mise à Jour</h1>
      <form onSubmit={handleSubmit} className='form_mise'>
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 mr-2  inputs" >
              <label htmlFor="nom" className="block mb-2">Nom</label>
              <input type="text" id="nom" name="nom" placeholder="Votre nom" className="w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div className="w-1/2 ml-2 inputs">
              <label htmlFor="prenom" className="block mb-2">Prénom</label>
              <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" className="w-full border border-gray-300 rounded py-2 px-3" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 mr-2 inputs">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Votre email" className="w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div className="w-1/2 ml-2 inputs">
              <label htmlFor="dateNaissance" className="block mb-2">Date de naissance</label>
              <input type="date" id="dateNaissance" name="dateNaissance" className="w-full border border-gray-300 rounded py-2 px-3" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 mr-2 inputs">
              <label htmlFor="sexe" className="block mb-2">Sexe</label>
              <select id="sexe" name="sexe" className="w-full border border-gray-300 rounded py-2 px-3">
                <option value="">Sélectionnez votre sexe</option>
                <option value="femme">Femme</option>
                <option value="homme">Homme</option>
              </select>
            </div>
            <div className="w-1/2 ml-2 inputs">
              <label htmlFor="tel" className="block mb-2">Téléphone</label>
              <input type="tel" id="tel" name="tel" placeholder="Votre numéro de téléphone" className="w-full border border-gray-300 rounded py-2 px-3" />
            </div>
          </div>
        </div>
        <div className="mb-4 inputs">
          <label htmlFor="password" className="block mb-2">Mot de passe</label>
          <input type="password" id="password" name="password" placeholder="Votre mot de passe" className="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  send-btn">
         Mettre à jour
         </button>


      </form>
    </div>
  );
}

export default UserInfos;
