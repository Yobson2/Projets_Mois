import {getDocs,collection,getDoc,doc} from 'firebase/firestore'
import { db} from '../../db/Conf'

export const getData= (_collection, callback) =>{
    getDocs(collection(db,_collection))
     .then((res)=>{
         const collect=[]
         res.forEach((doc)=>{
             let donnee = doc.data()
             donnee.id = doc.id
            //  console.log(doc.id);
             collect.push(donnee)
         })
         return callback(collect)
     })
}

export const getOne= (id,_collection,callback)=>{
    getDoc(doc(db,_collection,id))
    .then((res)=>{
        return callback(res.data())
    })
}