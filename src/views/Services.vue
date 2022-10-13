<template>
  <header>
        <h2>/Ouvriers</h2>
    </header>
    <div class="contenaire" v-for="item in theme" :key="item">
          <h2>{{item}}</h2>
        <div class="content">
           <Cadre  v-for="cadre in filtrage(item)" :key="cadre.id" :cadre="cadre"/>
        </div>
    </div>
    <div class="contenaire" @click="exchange">
          <h2>Recents......</h2>
        <div class="content" >
          <Card v-for="recent in recents" :key="recent.id" :recent="recent"/>
        </div>
    </div>
    <div class="contenaire">
          <h2>Benevoles</h2>
        <div class="cont_slide2">
          <div class="cadre">
                <div class="photo">
                  <img src="../assets/Images/judge-shatrese-flowers9.jpg" alt="">
                </div>
                <div class="photo_plus">
                  <h3>Nom : <span>Apo</span></h3>
                  <h3>Age : <span>30</span> ans</h3>
                  <h3>Tel : <span>07 80 99 00 50</span></h3>
                </div>
           </div>
           <div class="cadre">
                <div class="photo">
                  <img src="../assets/Images/homme-aux-cheveux-roux-porte-tenue-noire-tout-posant-exterieur_151355-6756.webp" alt="">
                </div>
                <div class="photo_plus">
                  <h3>Nom : <span>N'dah</span></h3>
                  <h3>Age : <span>30</span> ans</h3>
                  <h3>Tel : <span>07 89 90 00 00</span></h3>
                </div>
           </div>
           <div class="cadre">
                <div class="photo">
                  <img src="../assets/Images/imagesc.jpeg" alt="">
                </div>
                <div class="photo_plus">
                  <h3>Nom : <span>Affou</span></h3>
                  <h3>Age : <span>30</span> ans</h3>
                  <h3>Tel : <span>07 22 90 11 00</span></h3>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
import {getData} from '@/docs/collectDonnee'
import Cadre from '@/components/Cadre.vue'
import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../../db/Conf'
import Card from '../components/Card.vue'
export default {
components: { Cadre, Card },
data(){
  return{
    cadres:[],
    recents: [],
    theme:["Aménagement de bureaux","Construction de residence",
    "Travaux de terrassement","Fondations et maçonnerie","Électricité"]
  }
},
 mounted(){
   onSnapshot(collection(db, 'Ouvriers'), (snap)=>{
     const inter = []
     snap.docs.forEach(item => inter.push({...item.data(), id: item.id}))
     this.recents = inter.filter(item=>{
       if (item.date) return item
     })
     console.log(this.recents)
   })
   getData('Ouvriers',( data)=>{
     console.log('------------------')
       console.log(data.type)
      console.log('------------------')
      this.cadres=[...data]
      console.log(this.theme)

  })
 },
 methods:{
   filtrage(titre){
     return this.cadres.filter(cadre=> cadre.type=== titre)
   }
 }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:wght@700&family=Roboto:ital@0;1&display=swap');
header{
    background-color: rgb(194, 189, 181);
    font-size: x-large;
    height: 50px;
    text-align: center;
}
/* .contenaire{
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 20px auto;
    background-color: #333;
    border: 0.5px solid gray;
    justify-content: space-around;
} */
.contenaire{
    font-family: 'Roboto', sans-serif;
    width: 80%;
    margin: 20px auto;
    background-color: #333;
    border: 0.5px solid gray;
}
.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: aliceblue;
}
.contenaire>h2{
    color: #f5f5f5;
    text-align: center;
}
.cont_slide2{
    display: flex;
    justify-content: space-around;
    background-color: aliceblue; 
    overflow: hidden;
}

</style>