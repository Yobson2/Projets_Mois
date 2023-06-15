import '../styles/registre.css'
import { Link } from 'react-router-dom';


 function Registre(){
    return (
        <div className="contenaire-registre" >
            <div className="registre-image">
                {/* <img src="../../public/Images/7572771.jpg" alt="" /> */}
            </div>
            <form classNameName="form-registre" id='form-registre'>
                <p className="title" id='title'>Enregistrer</p>
                <p className="message" id='message'>Inscrivez-vous maintenant et obtenez un accès complet à notre application </p>
                    <div className="flex">
                    <label>
                        <input required="" placeholder="" type="text" className="input" />
                        <span>Nom</span>
                    </label>
                     &nbsp;&nbsp;
                    <label>
                        <input required="" placeholder="" type="text" className="input" />
                        <span>Prenom</span>
                    </label>
                </div>  
                        
                <label>
                    <input required="" placeholder="" type="email" className="input" />
                    <span>Email</span>
                </label> 
                    
                <label>
                    <input required="" placeholder="" type="password" className="input" />
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" className="input" />
                    <span>Confirm password</span>
                </label>
                <button className="submit">Submit</button>   
                <p className="signin">Vous avez déjà un compte ? <Link to="/login" id='lien-connect'>Se connecter</Link></p>
            </form>
      </div>
    );
}





export default Registre