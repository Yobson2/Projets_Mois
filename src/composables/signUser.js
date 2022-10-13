import {db,auth} from '../../db/Conf'
import {addDoc,collection} from 'firebase/firestore'
import {createUserWithEmailAndPassword} from 'firebase/auth'


export const userCollection=collection(db,'users')

export const createUser= async (user)=>{
    console.log(user)
    createUserWithEmailAndPassword(auth,user.email,user.password)
      .then( async (res)=>{
          await addDoc(userCollection,user)
          console.log('compte crée')
      })
       .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
       })
      

}