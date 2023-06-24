import React, { useState } from 'react';
import "../../styles/photo.css"

import { getDoc, userCollection, doc, updateDoc } from '../../db/firebase';

function Photo({ userId }) {

  const [previewSrc, setPreviewSrc] = useState('');

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setPreviewSrc(reader.result);
      });
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateImage(userId); 
  };

  async function updateImage(userId) {
    try {
      const userRef = doc(userCollection, userId);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const updatedUser = {
          photo: previewSrc || userDoc.data().photo
        };
        await updateDoc(userRef, updatedUser);
        swal("Succès", "Informations mises à jour !", "success");
        setPreviewSrc('');
      } else {
        swal("Erreur", "Utilisateur non trouvé.", "error");
      }

    } catch (error) {
      console.error("Une erreur s'est produite lors de la mise à jour :", error);
      swal("Erreur", "Une erreur s'est produite lors de la mise à jour.", "error");
    }
  }

  return (
    <div className="container mx-auto py-8 photo-section">
      <h1 className="text-2xl font-bold mb-4">Mettre à jour une photo</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="max-w-lg bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Nouvelle photo:</label>
          <input type="file" name="photo" id="photo" onChange={handlePhotoChange} className="border border-gray-300 p-2 w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Aperçu:</label>
          <div className="preview-container rounded-lg border-dashed border-2 border-gray-300 p-4">
            <img src={previewSrc} alt="Aperçu de la photo" className="w-full h-auto" />
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Mettre à jour
          </button>
        </div>
      </form>
    </div>
  );

}

export default Photo;
