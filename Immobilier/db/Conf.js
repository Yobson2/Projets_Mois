import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBAWD3uh917mpoAcmDRTMy0I5l-mFOXMLY",
    authDomain: "projet-immobilier-b8cd9.firebaseapp.com",
    projectId: "projet-immobilier-b8cd9",
    storageBucket: "projet-immobilier-b8cd9.appspot.com",
    messagingSenderId: "756164862070",
    appId: "1:756164862070:web:4e5dc89b409d30cd0bbf57",
    measurementId: "G-1EWRQC77V8"
  };

  const app=initializeApp(firebaseConfig)
  const db=getFirestore(app)
  const auth=getAuth(app)
  const storage=getStorage(app)

  export {db,auth,storage}