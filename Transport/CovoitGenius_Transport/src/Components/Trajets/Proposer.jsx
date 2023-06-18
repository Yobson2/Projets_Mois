import React from 'react';
import "../../styles/Proposer.css"

function Proposer() {
  return (
    <section class="search-section p-8">
      <h1>Trouver un Trajet</h1>
      <form  id='form44'>
        <div class="mb-4">
          <label for="departure" class="block mb-2">Point de Départ</label>
          <input type="text" id="departure" name="departure" placeholder="Entrez votre point de départ" class="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
        <div class="mb-4">
          <label for="destination" class="block mb-2">Destination</label>
          <input type="text" id="destination" name="destination" placeholder="Entrez votre destination" class="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
        <div class="mb-4">
          <label for="date" class="block mb-2">Date</label>
          <input type="date" id="date" name="date" class="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
        <div class="mb-4">
          <label for="time" class="block mb-2">Heure</label>
          <input type="time" id="time" name="time" class="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
        <div class="mb-4">
          <label for="seats" class="block mb-2">Nombre de Places</label>
          <input type="number" id="seats" name="seats" min="1" max="10" class="w-full border border-gray-300 rounded py-2 px-3" />
        </div>
        <div class="mb-4">
          <label for="preferences" class="block mb-2">Préférences</label>
          <select id="preferences" name="preferences" class="w-full border border-gray-300 rounded py-2 px-3">
            <option value="none">Aucune préférence</option>
            <option value="smoking">Fumeurs autorisés</option>
            <option value="pets">Animaux de compagnie autorisés</option>
          </select>
        </div>
        <button type="submit" class="search-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Proposer
        </button>
      </form>
    </section>
  );
}

export default Proposer;
