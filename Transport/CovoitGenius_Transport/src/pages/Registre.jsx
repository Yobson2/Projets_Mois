import '../styles/registre.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo3 from '../assets/Images/register-page-img.png';

import {auth,createUserWithEmailAndPassword,addDoc,userCollection,googleProvider,signInWithPopup} from '../db/firebase';

 function Registre(){
    const [er, setErrorChamps]=useState(false)
    const [error, setError]=useState(false)
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        configPassword: ""
      });

    const { nom, prenom, email, password, configPassword } = formData;
    const handleChange = (e) => {
      
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          dateNaissance:"auto",
          sexe:"auto",
          tel:"auto",
          photo:"auto",
        });
        // console.log('formData',formData)
      };
      const resetForm = () => {
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          password: "",
          configPassword: ""
        });
      };
      const handleSign = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.configPassword) {
          setError(true);
          return;
        }
    
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
           // Ignorer configPassword lors de l'ajout des données
          const { configPassword, ...userData } = formData; 
          const data = await addDoc(userCollection, userData);
          swal("Félicitation !", "Votre inscription a été éffectuer avec succes !", "success")
          resetForm();
        } catch (e) {
          setErrorChamps(true);
        }
      };
      
      const signWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          const { user } = result;
          
          const userData = {
            nom: dernierMot(user.displayName),
            prenom: motsSaufUn(user.displayName),
            email: user.email,
            photo:user.photoURL,
            dateNaissance:"auto",
            sexe:"auto",
            tel:"auto",
          };
           
          const data = await addDoc(userCollection, userData);
          swal("Félicitation !", "Votre inscription a été éffectuer avec succes !", "success")
        } catch (errs) {
          console.error(errs);
        }
      };
      


    return (
        <div className="contenaire-registre" >
            <div className="registre-image" id='registre-image'>
                <img src={logo3} alt="" />
            </div>
            <form className="form-registre" id='form-registre' onSubmit={handleSign}>
                <p className="title" id='title'>Enregistrer</p>
                <p className="message" id='message'>Inscrivez-vous maintenant et obtenez un accès complet à notre application </p>
                    <div className="flex">
                    <label>
                        <input required="" placeholder="" type="text" name="nom" value={nom} className="input" onChange={handleChange}/>
                        <span>Nom</span>
                    </label>
                     &nbsp;&nbsp;
                    <label>
                        <input required="" placeholder="" type="text" name="prenom" value={prenom}  className="input" onChange={handleChange} />
                        <span>Prenom</span>
                    </label>
                </div>  
                        
                <label>
                    <input required="" placeholder="" type="email" name="email" value={email} className="input" onChange={handleChange}/>
                    <span>Email</span>
                </label> 
                    
                <label>
                    <input required="" placeholder="" type="password"   name="password" value={password} className="input" onChange={handleChange}/>
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password"  value={configPassword} className="input" name="configPassword"   onChange={handleChange}/>
                    <span>Confirm password</span>
                </label>
                
              {  error &&<p className="signin-error">Mot de passe incorrect !!!</p>}
              {  er &&<p className="signin-error">Veuillez rempli tous les champs !!!</p>}
                <button className="submit">Submit</button>  
                <p className="p line">Or With</p>
                <div className="flex-row">
                <button className="button" onClick={signWithGoogle} >
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                        <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                    </svg>
                        Continue with Google
            </button>
              
           </div> 
                <p className="signin">Vous avez déjà un compte ? <Link to="/login" id='lien-connect'>Se connecter</Link></p>
            </form>
           
      </div>
    );
}

function generateRandomWord(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomWord = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWord += characters.charAt(randomIndex);
    }
    return randomWord;
  }

  function dernierMot(chaine) {
    let mots = chaine.split(" ");
    let dernierMot = mots[mots.length - 1];
    
    return dernierMot;
  }
  function motsSaufUn(chaine) {
    let mots = chaine.split(" ");
    let dernierMot = mots[mots.length - 1];
  
    // Filtre les mots pour exclure le mot spécifié
    let motsSaufExclu = mots.filter(mot => mot !== dernierMot);
  
    return motsSaufExclu.join(" ");
  }
  






export default Registre