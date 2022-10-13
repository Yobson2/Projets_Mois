<template>
  <div class="insc">
    <form action="#" @submit.prevent="envoyer">
        <h1>Informations personnelles</h1>
        <div class="container1">
            <p><i class="fa-sharp fa-solid fa-house"></i></p>
            <p><i class="fa-sharp fa-solid fa-phone"></i></p>
            <p><i class="fa-sharp fa-solid fa-chart-simple"></i></p>
            <p><i class="fa-sharp fa-solid fa-id-card"></i></p>
        </div>
        <div class="container2">
            <div class="content">
                <div class="info">
                    <p>Nom</p>
                <input type="text" class="donnee" v-model="dataOuvrier.Nom" required>
                </div>
                <div class="info">
                    <p>Prénom</p>
                <input type="text" class="donnee" v-model="dataOuvrier.Prenom" required>
                </div>
                
            </div>
            <div class="content">
                <div class="info">
                    <p>E-mail</p>
               <input type="email" class="donnee" v-model="dataOuvrier.email" required> 
                </div>
                <div class="info">
                    <p>Téléphone</p>
                <input type="tel" class="donnee" v-model="dataOuvrier.tel" required> 
                </div>
                
            </div>
            <div class="content">
                <div class="info">
                    <p>Salaire</p>
                <input type="text" class="donnee" v-model="dataOuvrier.salaire" required> 
                </div>
                <div class="info">
                    <p>lieu de residence</p>
                <input type="tel" class="donnee" v-model="dataOuvrier.residence" required> 
                </div>
                
            </div>
             <div class="content">
                 <div class="info">
                     <p>photo</p>
                <input type="file" title="photo" class="donnee" @change="addPicture" required accept=".jpg,.jpgeg,.png"> 
                 </div>
                 <div class="info">
                     <p>Image supplementaire</p>
                <input type="file" title="sup" class="donnee" @change="addPicture" required accept=".jpg,.jpgeg,.png">
                 </div>         
            </div>
            <div class="content">
                <div class="info">
                    <p>Age</p>
                <input type="text" class="old"  v-model="dataOuvrier.Age" required > 
                </div>
                <div class="info">
                    <p>Sexe
                <select v-model="dataOuvrier.sexe" required>
                    <option>F</option>
                    <option>M</option>
                </select> </p>
                </div>
                <div class="info">
                    <p>Status :
                        <select class="saissir" v-model="dataOuvrier.options" required>
                            <option>Prestation de service</option>
                    </select>
                    </p>
                    <p>Metier :
                        <select class="saissir" v-model="dataOuvrier.metiers" required>
                            <option>Carreleur</option>
                             <option>Charpentier</option>
                             <option>Constructeur</option>
                             <option >Électricien</option>
                             <option>Maçon</option>
                             <option >Plombier</option>
                             <option>Serrurier métallier</option>
                             <option>Monteur/Monteuse en installations thermiques</option>
                             <option >Peintre en bâtiment</option>
                             <option>Autres</option>
                    </select>
                    </p>
                </div>
               
            </div>
            <div class="content">
            </div>
                
        </div>
        <div align="center">
            <button type="submit" @click="addElement">Soumettre</button>
        </div>
     </form>
  </div>
</template>

<script>
import {saveOne} from '@/composables/saveData'
import { ref } from '@vue/reactivity'
import { serverTimestamp } from '@firebase/firestore'
import {uploadBytes,ref as sref, getDownloadURL} from 'firebase/storage'
import {storage} from '../../db/Conf'
export default {
    setup(){
        const nom=ref('')
        const prenom=ref('')
        const email=ref('')
         const tel=ref('')
         const Montant=ref('')
         const residence=ref('')
         const Sexe=ref('')
          const age=ref('')
         const options=ref('')
         const metiers=ref('')
         let photo=null
         let maison =null

         

        // infos des ouvriers
        const dataOuvrier={
            Nom:nom.value,
            Prenom:prenom.value,
            email:email.value,
            Montant:Montant.value,
            residence:residence.value,
            Sexe:Sexe.value,
            options:options.value,
            metiers:metiers.value,
            Age:age.value,
            tel:tel.value,
            date: serverTimestamp()
        }

        const getUploadUrl = (file)=>{
            const photosredf = sref(storage, `photos/${file.name}`)
            return new Promise(async r=>{
                const ab = await uploadBytes(photosredf, photo)
                const url = await getDownloadURL(ab.ref)
                r(url)
            })
        }
        const addElement= async () =>{
            // console.log(dataOuvrier)
            photo = photo ? await getUploadUrl(photo) : ''
            maison = maison ? await getUploadUrl(maison) : ''
            dataOuvrier.maison = maison
            dataOuvrier.photo = photo
            await saveOne("Ouvriers", dataOuvrier)
        }
        const addPicture= (e)=>{
            if (e.target.title === 'photo'){
                photo = e.target.files[0]
            }else{
                maison = e.target.files[0]
            }
        }
     

        return{
         addElement,addPicture,dataOuvrier
        }
    }
}
</script>

<style scoped>
     @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.insc{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    margin-bottom: 10px;
}
form{
  margin-top: 30px;
  background-color: #fff;
  padding: 40px 60px;
  min-width: 800px;
  border-radius: 20px;
  background-image: url('../assets/Images/167-keramine_ploice_egeo_1.jpg');
}
form h1{
    color: blue;
    text-align: center;
}
.donnee{
    width: 250px;
    height: 30px;
}
.old{
    width: 80px;
    height: 30px;
    border-radius: 10px;
}

.container1{
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.container1>p{
    padding: 5px;
    margin-left: 10px;
    border: 1px solid #545455;
    border-radius: 100%;
    width: 20px;
    text-align: center;
    cursor: pointer;
}

form .container2{
    display: flex;
    flex-direction: column;
}
.content{
    display: flex;
    justify-content: center;
}
.content .info{
    margin-left: 15px;
    margin-top: 10px;
}
.saissir{
    padding: 15px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f2;
    margin-bottom: 15px;
    outline: none;
    
}
p.inscription{
    font-size: 14px;
    margin-bottom: 20px;
}
span{
    color: blue;
    cursor: pointer;
}


button{
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    background-color: #545455;
    outline: none;
    cursor: pointer;
}
button:hover{
    background-color: #4fc3f7;
}

/* les paragraphes  */
p{
    font-size: large;
}

</style>