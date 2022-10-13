<template>
<movie  v-if="showAnnonce" @excent="switchAnnonce"/> 
   <div class="section">
        <!-- <img src="../assets/Images/modernisierung-wohnung-giessen.jpg" alt="">  -->
        <slideHome />
     </div> 
    <div class="titre">
        <h2>Se simplifier la vie, avoir sa propre maison</h2>
        <button @click="switchAnnonce">Annonce</button>
    </div>
    <section class="portion1">
        <h2 class="theme">Nos chantiers</h2>
        <div class="contents">
            <div class="content">
                <div class="content1">
                    <img src="../assets/Images/amenagement-bureaux-moderne-entreprise.jpeg" alt="">
                </div>
                <h4>aménagement de bureaux </h4>
            </div>
            <div class="content">
                <div class="content1">
                    <img src="../assets/Images/residence-service-senior-l-isle-d-espagnac-perspective-espace-service.jpeg" alt="">
                </div>
                <h4>Construction de residence</h4>
            </div>
            <div class="content">
                <div class="content1">
                    <img src="../assets/Images/1659543446118.jpeg" alt="">
                </div>
                <h4>Travaux de terrassement</h4>
            </div>
            <div class="content">
                <div class="content1">
                   <img src="../assets/Images/images.jpeg" alt="">
                </div>
                <h4>Fondations et maçonnerie</h4>
            </div>
             <div class="content">
                <div class="content1">
                    <img src="../assets/Images/apprendre-electricite.jpeg" alt="">
                </div>
                <h4>Électricité</h4>
            </div>
        </div>
    </section>
    <section class="portion2">
        <h2 class="theme">Nos realisations</h2>
        <div class="cont_slide">
            <img src="../assets/Images/modernisierung-wohnung-giessen.jpg" alt="">
            <img src="../assets/Images/OIP.jpg" alt="">
            <img src="../assets/Images/167-keramine_ploice_egeo_1.jpg" alt="">
            <img src="../assets/Images/R.jpg" alt="">
            <img src="../assets/Images/524202083423AM241hl4qg_Big.jpg" alt="">
            <img src="../assets/Images/R2.png" alt="">
        </div>
    </section>
    <div class="cont_element">
        <h1>Qui sommes-nous?</h1>
        <p>Etes-vous à la recherche d’un Ouvriers à Cocody Abidjan ? d’un homme competant à Marcory 
             ,à Abidjan Bingerville, à Songon ou Jacqueville? Vous êtes au bon endroit. Bienvenue sur I-SOLUS, la plateforme immobilière 
             de référence en Côte d’Ivoire etc..</p>
    </div>
    
</template>

<script>
import { getData } from '@/docs/collectDonnee'
import movie from '@/components/movie.vue'
import SlideHome from '@/components/SlideHome.vue'


export default {
  components: { movie, SlideHome },
  data(){
    return{
        showAnnonce:false
    }
  },
methods:{
    switchAnnonce(){
        this.showAnnonce=!this.showAnnonce
    }
}
}
</script>

<style scoped>
 /* mise en forme de img */

.section{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    background-image: url("../assets/Images/modernisierung-wohnung-giessen.jpg");
}
.section img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
.titre{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.titre h2{
    font-size: xx-large;
    line-height: 1.5;
}
.titre button{
    border: none;
    border-radius: 10px;
    width: 80px;
    height: 40px;
    margin-left: 260px;
    margin-right: 100px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.titre button:hover{
    background-color: #333;
    color: white;
}


/* mise en forme de la section */
.portion1{
    background-color: rgb(202, 196, 190);
    width: 100%;
    height: 50vh;
    background-image: url('../assets/Images/visu-construction-immobiliere-metiers.jpeg.crdownload');
}
.theme{
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 100px;
    color: #263238;
    text-shadow: -1px -1px;
}
.contents{
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    margin:50px;
}
.contents .content{
    height: 200px;
    width: 200px;
    background-color: #eceff1;
    margin: 20px auto;
    border-radius: 6px;
}
.content .content1{
    background-color: white;
    border-radius: 10px;
    width: 100px;
    height: 100px;
    margin: 10px auto;
}
.content1>img{
   width: 100px;
    height: 100px; 
    border-radius: 10px;
}
.content>h4{
    text-align: center;
}

/* slider */
.portion2{
    background-color: rgb(230, 224, 217);
    width: 100%;
    height: 50vh; 
}
.portion2 .cont_slide{
    display: flex;
    width: 80%;
    margin: 0px auto;
    overflow: hidden;
    margin-bottom: 50px;
}
.portion2 .cont_slide img{
    margin-left: 100px;
    width: 500px;
    height: 300px;
}

.cont_element{
    width: 80%;
    margin: 10px auto;
}
.cont_element h1{
    text-align: center;
    color: blue;
}

</style>