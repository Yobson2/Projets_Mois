import React from 'react';
import "../../styles/StyleComponentsHome/section3.css"

export default function Section3() {
    return (
        <div className="section2">
          <h1>Fonctionnalités Clés</h1>
          <div className="section2-blocks">
            <div className="img-card iCard-style3">
              <div className="card-content">
                <div className="card-image">
                  <span className="card-title">Personnalisation des préférences</span>
                  <img src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1" alt="Image1" />
                </div>
                <div className="card-text">
                  <p>
                    Trouvez des correspondances de covoiturage adaptées à vos besoins spécifiques etc...
                  </p>
                </div>
              </div>
            </div>
    
            <div className="img-card iCard-style3">
              <div className="card-content">
                <div className="card-image">
                  <span className="card-title">Notation des utilisateurs</span>
                  <img src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1" alt="Image2" />
                </div>
                <div className="card-text">
                  <p>
                    Évaluez et consultez les avis d'autres utilisateurs pour choisir des partenaires de covoiturage fiables et agréables.
                  </p>
                </div>
              </div>
            </div>
    
            <div className="img-card iCard-style3">
              <div className="card-content">
                <div className="card-image">
                  <span className="card-title">Historique des réservations</span>
                  <img src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1" alt="Image3" />
                </div>
                <div className="card-text">
                  <p>
                    Gardez une trace de vos réservations précédentes, y compris les détails des itinéraires, les dates et les coûts.
                  </p>
                </div>
              </div>
            </div>
    
            <div className="img-card iCard-style3">
              <div className="card-content">
                <div className="card-image">
                  <span className="card-title">Historique des trajets</span>
                  <img src="https://www.dropbox.com/s/tclqbz7o4u8e705/ipad-632394_640.jpg?raw=1" alt="Image4" />
                </div>
                <div className="card-text">
                  <p>
                    Gardez une trace de vos trajets précédents, y compris les détails des itinéraires, les dates et les coûts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }