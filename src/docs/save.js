
const fs = require("fs")
const { addDoc, collection, getFirestore } = require("firebase/firestore")
const { initializeApp } = require("firebase/app")

const firebaseConfig = {
	apiKey: "AIzaSyBAWD3uh917mpoAcmDRTMy0I5l-mFOXMLY",
    authDomain: "projet-immobilier-b8cd9.firebaseapp.com",
    projectId: "projet-immobilier-b8cd9",
    storageBucket: "projet-immobilier-b8cd9.appspot.com",
    messagingSenderId: "756164862070",
    appId: "1:756164862070:web:aa0a09db12326c910bbf57",
    measurementId: "G-J31GL5J9RN"
};
  
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const path = require("path")

const saveDocs = (collect="", docs=[])=>{
    // Add a new document with a generated id.
    docs.forEach(async (doc) =>{
        const docRef = await addDoc(collection(db, collect), doc)
        console.log("successfully write", docRef.id)
    })
}

const saveFile = (file, collect)=>{
	fs.readFile(file, (err, data)=>{
		err ? console.log(err) : ''
		const loaded = JSON.parse(data.toString())
		saveDocs(collect, loaded)
	})
}
// 
 saveFile(path.join(__dirname, "./Ouvriers_details.json"), 'Ouvriers')
