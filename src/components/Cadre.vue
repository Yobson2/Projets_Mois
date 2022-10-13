<template>
   <div class="cadre">
          <div class="photo">
            <img :src="cadre.photo">
          </div>
          <div class="photo_plus">
            <h3>Nom : <span>{{cadre.Nom}}</span></h3>
            <h3>Age : <span>{{cadre.Age}}</span> ans</h3>
            <h3>Fonction : <span>{{cadre.Fonction}}</span></h3>
            <button class="btn" @click="change(cadre.id)">Details</button>
          </div>
     </div>
</template>

<script>
export default {
props:['cadre'],
name:'cadre',
data(){
    return{

    }
},
mounted(){
    
},
methods:{
    change(id){
        this.$router.push(`/Services/Details/${id}`)
    },
    redirection(){
      console.log(res,'messages')
    }
}
}
</script>

<style>
.cadre{
    width: 250px;
    height: 420px;
    border: 0.4px solid black; 
    margin-top: 20px;
    background-color: white;
     margin-bottom: 10px;
}
.cadre:hover{
    transform: scale(0.9);
}
.cadre .photo{
    width: 250px;
    height: 250px;
}
.photo img{
    width: 250px;
    height: 250px;
}
.photo_plus{
    height: 200px;
    margin-left: 10px;
}
.photo_plus span{
    color: rgb(128, 128, 128);
}
.btn{
    border-bottom-style : none;
    border-top-style : dashed;
    border-left-style : ridge;
    border-right-style : outset;
    margin-left: 90px;
    margin-right: 100px;
    height: 30px;
    margin-bottom: 10px;
} 
.btn:hover{
    background-color: rgb(108, 103, 103);
    color: white;
}
</style>