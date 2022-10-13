import { db } from "../../db/Conf";
import { collection, doc, addDoc } from "firebase/firestore";


export const saveOne = async (_collection, _doc)=>{
    await addDoc(collection(db,_collection), _doc)
    console.log('added')
}