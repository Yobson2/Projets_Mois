import {db} from '../../db/Conf'
import {getDocs} from 'firebase/firestore'
import {userCollection} from './signUser'

export const getUser= async (callback)=>{
     getDocs(userCollection)
       .then((res)=>{
          const collect=[]
        res.forEach((doc) => {
            collect.push(doc.data())
        })
        return callback
       })
}