import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css";
import { auth, signInWithEmailAndPassword, signOut,googleProvider,signInWithPopup, getDocs, userCollection } from '../db/firebase';

const Login = () => {
  const [error, setError] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  });
  const { email, password} = formLogin;
  const [redirectWithId, setRedirectWithId] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const userId = await recupereDocumentId(userCollection, formLogin.email, formLogin.password)

    signInWithEmailAndPassword(auth, formLogin.email, formLogin.password)
    .then((userCredential) => {
        // console.log("Logged in User ID:", userId);
        navigate(`/DashboardUser/${userId}`);
        swal("Félicitation !", "Votre connexion a été effectuée avec succès !", "success");
    })
    .catch((e) => {
      setError(true);
    });
    
  };
  
  async function recupereDocumentId(userCollection, email, password) {
    try {
      const querySnapshot = await getDocs(userCollection);
      for (const doc of querySnapshot.docs) {
        const documentData = doc.data();
        const documentId = doc.id;
        if (documentData.email === email && documentData.password === password) {
          return documentId;
        }
      }
      console.log("Aucun document trouvé avec l'email et le mot de passe spécifiés.");
      return null;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
      return null;
    }
  }
  const loginGoogle = async () => {
    try {
      
      const emailGoogle = await signInWithGoogle();
      const userId = await recupereGoogle(userCollection, emailGoogle)
      await signOut(auth, googleProvider);
    
      swal("Félicitation !", "Votre connexion a été éffectuer avec succes !", "success")
      navigate(`/DashboardUser/${userId}`);
    } catch (er) {
      console.error(er);
    }
    
  };
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { user } = result;
      return user.email;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  };


  async function recupereGoogle(userCollection, email) {
    try {
      const querySnapshot = await getDocs(userCollection);
      for (const doc of querySnapshot.docs) {
        const documentData = doc.data();
        const documentId = doc.id;
        if (documentData.email === email) {
          return documentId;
        }
      }
      console.log("Aucun document trouvé avec l'email et le mot de passe spécifiés.");
      return null;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
      return null;
    }
  }
  
  

      
    return (

      <div className="contenaire-login">
      <div className="login-image">
           <img src="../../public/Images/login-page-img.png" alt="" />
      </div>
      <form className="form" onSubmit={handleLogin}>
          <div className="entete-login">
              <h2>Login</h2>
          </div>
          <div className="flex-column">
            </div>
            <div className="inputForm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20"><g data-name="Layer 3" id="Layer_3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
              <input placeholder="Enter your Email" className="input" name="email" value={email} type="text" onChange={handleChange} />
            </div>
          
          <div className="flex-column">
            </div>
            <div className="inputForm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>        
              <input placeholder="Enter your Password" className="input" type="password" name="password" value={password} onChange={handleChange}/>
            </div>
          
          <div className="flex-row">
            <div>
            <input type="radio" />
            <label>Remember me </label>
            </div>
            <span className="span">Forgot password?</span>
          </div>
         
          { error && <p className="p-error">Email ou mot de passe incorrect</p>} 
          <button className="button-submit">Sign In</button>
          <p className="p">Vous n'avez pas de compte ? <Link to="/registre" className="span">S'inscrire</Link>
      
          </p><p className="p line">Or With</p>
          <div className="flex-row">
            <button className="button"  onClick={loginGoogle}>
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
              </svg>
                Continue with Google
            </button>
              
           </div>
        </form>
  </div>
      
    );
}
 




export default Login;

