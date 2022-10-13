import {db,auth} from '../../db/Conf'
import {signInWithEmailAndPassword} from 'firebase/auth'

export const loginTry= async (user,callback)=>{
    let res={
        user:null,
        err:null
    }
    signInWithEmailAndPassword(auth,user.email,user.password)
     .then((userCredentia)=>{
         res.user=userCredentia.user
         return callback(res)
     })
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
}