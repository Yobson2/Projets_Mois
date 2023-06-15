import '../styles/registre.css'
import { Link } from 'react-router-dom';

import {auth,createUserWithEmailAndPassword,addDoc,userCollection} from '../db/firebase';

 function Registre(){
    const [error, setError]=useState(false)
    const [nom, setNom]=useState("")
    const [prenom, setPrenom]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [configPassword, setConfigPassword]=useState("")


    const handleSign=(e)=>{
        e.preventDefault();
        console.log('Sign')
    }
    return (
        <div className="contenaire-registre" >
            <div className="registre-image">
                {/* <img src="../../public/Images/7572771.jpg" alt="" /> */}
            </div>
            <form className="form-registre" id='form-registre' onSubmit={handleSign}>
                <p className="title" id='title'>Enregistrer</p>
                <p className="message" id='message'>Inscrivez-vous maintenant et obtenez un accès complet à notre application </p>
                    <div className="flex">
                    <label>
                        <input required="" placeholder="" type="text" className="input" onChange={e=>setNom(e.target.value)}/>
                        <span>Nom</span>
                    </label>
                     &nbsp;&nbsp;
                    <label>
                        <input required="" placeholder="" type="text" className="input" onChange={e=>setPrenom(e.target.value)} />
                        <span>Prenom</span>
                    </label>
                </div>  
                        
                <label>
                    <input required="" placeholder="" type="email" className="input" onChange={e=>setEmail(e.target.value)}/>
                    <span>Email</span>
                </label> 
                    
                <label>
                    <input required="" placeholder="" type="password" className="input" onChange={e=>setPassword(e.target.value)}/>
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" className="input" onChange={e=>setConfigPassword(e.target.value)}/>
                    <span>Confirm password</span>
                </label>
                <p className="signin-error">Veuillez rempli tous les champs !!!</p>
                <button className="submit">Submit</button>   
                <p className="signin">Vous avez déjà un compte ? <Link to="/login" id='lien-connect'>Se connecter</Link></p>
            </form>
           
      </div>
    );
}





export default Registre