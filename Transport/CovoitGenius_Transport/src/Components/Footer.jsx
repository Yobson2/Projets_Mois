import React from 'react';
import '../styles/footer.css'




class Footer extends React.Component {
    render() {
        return (
            <footer className="padding_4x">
            <div className="flex">
            <section className="flex-content padding_1x">
                <h3>Features</h3>
                <a href="#">Jobs</a>
                <a href="#">Brand Assets</a>
                <a href="#">Investor Relations</a>
                <a href="#">Terms of Service</a>
              </section>
              <section className="flex-content padding_1x">
                <h3>Home</h3>
                <a href="#">Home</a>
                <a href="#">Trajet</a>
                <a href="#">Mon Profil</a>
              </section>
              <section className="flex-content padding_1x">
                <h3>Fonctionnalité</h3>
                <a href="#">Notation</a>
                <a href="#">Paiement</a>
                <a href="#">Notifications</a>
              </section>
              <section className="flex-content padding_1x">
                <h3>CovoitGenius qui  vous informe</h3>
                <p>Vous pouvez nous faire confiance. nous n'envoyons que des offres promotionnelles,</p>
                <fieldset className="fixed_flex">
                  <input type="email" name="newsletter" placeholder="Your Email Address"/>
                  <button className="btn btn_2">Subscribe</button>
                </fieldset>
              </section>
            </div>
            <div className="flex">
              <section className="flex-content padding_1x">
                <p>Copyright ©2023 All rights reserved || Abdullah</p>
              </section>
              <section className="flex-content padding_1x">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </section>
            </div>
          </footer>
        );
    }
}

export default Footer;
