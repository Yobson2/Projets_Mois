import React from 'react';
import '../styles/footer.css'




class Footer extends React.Component {
    render() {
        return (
          <footer class="footer">
          <div class="container">
            <div class="footer-content">
              <div class="footer-logo">
                  <img src="../../public/Logo/Carrios.png" alt="Card" />
                <h2>CovoitGenius</h2>
              </div>
              <div class="footer-links">
                <ul>
                  <li><a href="#">Accueil</a></li>
                  <li><a href="#">A propos</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div class="footer-social">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom">
              <p>&copy; 2023 CovoitGenius. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
        );
    }
}

export default Footer;
