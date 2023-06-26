import React, { useState, useEffect } from 'react';
import "../../styles/search.css";
import { annonceCollection,addDoc, getDocs,reservationCollection } from '../../db/firebase';

function Search({userId,onUpdate}) {
  const [er, setErrorChamps] = useState(true);
  const [idElement, setIdElement] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isReserve,setIseReserve]=useState([]);
  const [hasReservation, setHasReservation] = useState(false);

  const [formSearch, setFormSearch] = useState({
    depart: "",
    destination: "",
    date: "",
  });
  const { depart, destination, date } = formSearch;

  const handleChange = (e) => {
    setFormSearch({
      ...formSearch,
      [e.target.name]: e.target.value
    });
  };
 
  const resetForm = () => {
    setFormSearch({
      depart: "",
      destination: "",
      date: "",
    });
  };

  // console.log('formData 2', formSearch);

  const handleSearch = async (e) => {
    e.preventDefault();
    // console.log('formData soumis  11', formSearch);
    setIsFormSubmitted(true);
    await GetInfosUser();
    // resetForm()
  };

  async function GetInfosUser() {
    try {
      const annonceQuerySnapshot = await getDocs(annonceCollection);
      const userData = annonceQuerySnapshot.docs.map((doc) => doc.data());
      // console.log('Search data',userData)
      
      const filteredData = userData.filter(
        (data) =>
          data.Point_de_Départ === formSearch.depart &&
          data.Destination === formSearch.destination &&
          data.Date === formSearch.date
      );

     

      setIdElement(filteredData);
     
      console.log(filteredData, '++++++');
      onUpdate();

      console.log("Opération terminée");
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des documents :",
        error
      );
    }
  }

  useEffect(() => {
    GetInfosUser();
    
  }, []);

  // Reservation action

  const doReservation = async (infos) => {
    try {
       setIseReserve({
        
        id_user_reservation: userId,
        heure_reservation: getCurrentTime(),
        date_reservation: getCurrentDate(),
        ...infos
      })
      if (!infos.hasReservation) {
        // Effectuez la réservation
        await addDoc(reservationCollection, isReserve);
        infos.hasReservation = true;
        // console.log('test', infos.hasReservation);
        swal("Félicitations !", "Votre reservation a été effectuée avec succès !.", "success");
        onUpdate();
      } else {
        // console.log('Désolé, ');
        swal("Désolé", "vous avez déjà effectué une réservation.", "error")
      }
    } catch (errs) {
      console.error(errs);
    }
  };

  return (
    <div className="content-search">
     
     <div className="card-form">
     <h3>Votre Recherche</h3>
       <form action="#" className="form2" onSubmit={handleSearch}  >
             <div className="form-sous">
                     <div className="cont-input">
                         <label for="depart">Départ *</label>
                         <input type="text" id="depart" name="depart" required  className='search_input' onChange={handleChange}/>
                     </div>
                     <div className="cont-input"> 

                         <label for="destination">Destination *</label>
                         <input type="text" id="destination" name="destination" required  className='search_input' onChange={handleChange}/>
                     </div>
                     <div className="cont-input"> 
                         
                         <label for="date">Date *</label>
                         <input type="date" id="date" name="date" required="" className='search_input' onChange={handleChange}/>
                     </div>
                 
             </div>
         
        <div className="bottom-element">
         <input type="submit" value="Rechercher" />
        </div>
       </form>
       <div className="liste-el-recherche">
         <p><span> {idElement.length} </span>Trajets trouvés</p>
         <div className="structures">
         { isFormSubmitted && ( 
          // Condition pour afficher les informations après la soumission du formulaire
        idElement.map((infos, index) => (
          <div className="blocs-listes" key={index}>
                  <div className="cards-listes">
                    <div className="picture"><img src={infos.photo} alt="" /><h4>{infos.nom}</h4></div>
                  </div>
                  <div className="infos">
                    <div className="infos-row1">
                      <h4><span>{infos.Heure}</span> |   <span>{infos.Date}</span></h4>
                      <div className="icon-cars">
                          <i className="fa-thin fa-down-to-line"></i>
                      </div>
                    </div>
                    <div className="infos-row2">
                      <div className="fleche-moove">
                            |  
                      </div>
                      <div className="fleche-direction">
                          <p>Abidjan, <span>{infos.Point_de_Départ}</span></p>
                          <p>Abidjan, <span>{infos.Destination}</span></p>
                      </div>
                      <div className="infos-places">
                          <p><span>{infos.Nombre_de_Places} </span> places</p>
                            <button className="btn-infos"><span>12</span>Fcfa</button>
                          </div>
                    </div>
                    <button className="btn-infos" onClick={() => doReservation(infos)}>Réservez</button>
                  </div>
                 </div>
        ))
      )}
                
                  
                  
                
                  
                  
                
                
                
              </div>
         
       </div>
     </div>

 
</div>

  );
}

export default Search;


function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Formatage des chiffres 
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}
function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Format de la date : AAAA-MM-JJ
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}
