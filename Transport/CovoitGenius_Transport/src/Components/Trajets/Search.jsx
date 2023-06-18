import React from 'react';
import "../../styles/search.css";


function Search() {
  return (
    <div classNameName="content-seach">
    <div className="card-form">
     <h3>Votre Recherche</h3>
       <form action="#" className="form2" >
             <div className="form-sous">
                     <div className="cont-input">
                         <label for="depart">Départ *</label>
                         <input type="text" id="depart" name="depart" required  className='search_input'/>
                     </div>
                     <div className="cont-input"> 

                         <label for="destination">Destination *</label>
                         <input type="text" id="destination" name="destination" required  className='search_input'/>
                     </div>
                     <div className="cont-input"> 
                         
                         <label for="date">Date *</label>
                         <input type="date" id="date" name="date" required className='search_input'/>
                     </div>
                 
             </div>
         
        <div className="bottom-element">
         <input type="submit" value="Rechercher" />
        </div>
       </form>
       <div className="liste-el-recherche">
         <p><span>10 </span>Trajets trouvés</p>
         {/* <h2>Listes des trajets disponibles</h2> */}
         <div className="structures">
             
         <div className="blocs-listes">
             <div className="cards-listes">
                <div className="picture"><img src="Images/7572771.jpg" alt="" /><h4>Thomas</h4></div>
             </div>
             <div className="infos">
               <div className="infos-row1">
                  <h4><span>8h 00</span> |   <span>Jeu 08 Mars 2002</span></h4>
                  <div className="icon-cars">
                     <i className="fa-thin fa-down-to-line"></i>
                  </div>
               </div>
               <div className="infos-row2">
                  <div className="fleche-moove">
                        |  
                  </div>
                  <div className="fleche-direction">
                      <p>Abidjan, <span>Yopougon</span></p>
                      <p>Abidjan, <span>Yopougon</span></p>
                  </div>
                  <div className="infos-places">
                      <p><span>5</span>places</p>
                       <button className="btn-infos"><span>12</span>Fcfa</button>
                     </div>
               </div>
             </div>
             
            
          </div>
          
         
          
            
          
          
          
         </div>
         
       </div>
     </div>

 
</div>

  );
}

export default Search;
