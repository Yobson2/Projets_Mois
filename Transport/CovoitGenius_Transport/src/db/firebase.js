// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection,addDoc,getDocs,updateDoc,doc,getDoc} from "firebase/firestore";
import {  getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNVzEU8vUbq7tKzWo3wVoSGAus5I4koCE",
  authDomain: "transport-nan.firebaseapp.com",
  projectId: "transport-nan",
  storageBucket: "transport-nan.appspot.com",
  messagingSenderId: "633151727221",
  appId: "1:633151727221:web:304e19596eaef5cdef3a3c",
  measurementId: "G-6NK2TSBSYL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();

//Mes collections
const userCollection = collection(db, "clients");



export {db, auth, userCollection,createUserWithEmailAndPassword,addDoc,signInWithEmailAndPassword,getDocs,updateDoc, doc,getDoc,googleProvider}