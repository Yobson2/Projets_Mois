<template>
  <div class="card1">
        <div class="sous1_card1">
            <h2>Profit</h2>
            <div class="photo">
                <img :src="infos.photo">
             </div>
          <div class="content">
            <p>Nom : <span>{{infos.Nom}}</span></p>
            <p>Prenom : <span>{{infos.Prenom}}</span></p>
            <p>Sexe : <span>{{infos.Sexe}}</span></p>
            <p>Disponibilité : <span> </span> <i class="fa-sharp fa-solid fa-check"></i></p>
            <p>Revenu : <span>{{infos.Montant}}</span></p>
            <p><i class="fa-solid fa-location-dot"></i> <span>Abidjan, {{infos.residence}}</span></p>
            <p>Tel : <span>+225 {{infos.tel}}</span></p>
          </div>
        </div>
        <div class="sous1_card2">
            <img :src="infos.maison">
        </div>
    </div>
    <div class="card2">
        <form >
            <h4>Contactez-moi</h4>
            <div class="inputs">
            <input type="text" placeholder="Nom" id="lire"> &nbsp;&nbsp;&nbsp;
            <input type="email" placeholder="Email" id="lire"> &nbsp;&nbsp;&nbsp;
            <input type="tel" placeholder="Contact" id="lire">
            </div>
            <p><textarea placeholder="je suis interessé par votre annonce....."></textarea></p>
            <p><input type="submit" value="Envoyer " class="Envoyer"></p>
        </form>
    </div>
    <div class="page">
        <h3> LE CODE DE LA CONSTRUCTION ET DE L'HABITAT</h3>
        <p>pour plus d'infos, cliquez <a href="https://loidici.biz/2021/07/12/le-code-de-la-construction-et-de-lhabitat/le-code-de-la-construction/">ici</a><i class="fa-solid fa-hand-back-point-left"></i> </p>
    </div>
</template>

<script>
import {getOne} from '@/docs/collectDonnee'
export default {
    data(){
        return{
         infos:""
        }
    },
    mounted(){  
         const getId=this.$route.params.id
         console.log(getId)
         getOne(getId ,'Ouvriers',(res)=>{
            this.infos=res
             console.log(this.infos,'mes donnees')
         })
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.card1{
    display: flex;
    margin: 40px auto;
    width: 80%;
    height: 650px;
    background-color: #e0e0e0;
}
.card1 .sous1_card1{
    border: 0.5px solid black;
    width: 30%;
    border-style: outset;
}
.sous1_card1 h2{
    text-align: center;
    font-size: x-large;
}
.sous1_card1 .photo{
    background-color: #fafafa;
    width: 200px;
    margin: 0px auto;
    border-radius: 4px;
}
.photo img{
    width: 200px;
    height: 200px;
    border-radius: 30px;
}
.content{
    margin-top: 80px;
    margin-left: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: large;
}
span{
    color: rgb(106, 114, 142);
}
.sous1_card2{
    border: 0.5px solid black;
    width: 100%; 
}
.sous1_card2>img{
    height: 650px;
    width: 100%;
}

/* formulaire */
.card2{
    margin: 0px auto;
    width: 80%;
}
.inputs{
    display: flex;
}
.inputs, #lire{
    width: 500px;
    height: 30px;
    outline: none;
}
textarea{
    width: 550px;
    height: 90px;
    outline: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.Envoyer{
    width: 80px;
    height: 30px;
    margin-bottom: 20px;
}
.Envoyer:hover{
    background-color: #333;
    color: white;
}


/* page similaire */
.page{
    width: 80%;
    margin: 10px auto;
    background-color: #9e9e9e;
    font-family: 'Roboto', sans-serif;
}
.page ,h3+p{
    text-align: center;
}

</style>