<template>
  <div class="insc">
      <form action="#" @submit.prevent="envoyer">
        <h1>S'inscrire</h1>
        <div class="container1">
            <p><i class="fa-brands fa-google"></i></p>
            <p><i class="fa-brands fa-youtube"></i></p>
            <p><i class="fa-brands fa-facebook"></i></p>
            <p><i class="fa-brands fa-twitter"></i></p>
        </div>
        <div class="container2">
            <input type="text" placeholder="Nom" class="saissir" v-model="nom" required>
            <input type="text" placeholder="Prenom" class="saissir" v-model="prenom" required>
            <input type="email" placeholder="Email" class="saissir" v-model="email" required>
            <input type="password" placeholder="Password" class="saissir" v-model="password">
            <div class="statut">
                <p>Statut</p>
                 <select class="saissir" v-model="options" required>
                    <option>Prestation de service</option>
                    <option >Demande de services</option>
                </select>
            </div>

        </div>
        <p class="inscription">j'ai un <span @click="$emit('sign')">compte </span></p>
        <div align="center">
            <button type="submit">S'inscrire</button>
        </div>
    </form>
</div>
</template>

<script>
import {createUser} from '@/composables/signUser'
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const nom=ref('')
        const prenom=ref('')
        const password=ref('')
        const email=ref('')
        const options=ref('')

        const envoyer= async () =>{
              const utilisateur={
           nom:nom.value,
            prenom:prenom.value,
            password:password.value,
            email:email.value,
            options:options.value
        }
            await createUser(utilisateur)
            console.log(nom.value,prenom.value,options.value)
            alert('Merci pour votre inscription')
        }
        const initialiser= () =>{
            nom:null;
            prenom:null;
            password:null;
            email:null;
            options:null
        }
        return{
         nom,prenom,password,email,options,envoyer
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
}
form{
  margin-top: 30px;
  background-color: #fff;
  padding: 40px 60px;
  min-width: 300px;
  border-radius: 10px;
  background-image: url('../assets/Images/chantier-construction-ouvriers_1308-102927.webp');
}
form h1{
    color: blue;
    text-align: center;
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
.saissir{
    padding: 15px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f2;
    margin-bottom: 15px;
    outline: none;
    
}
.statut>p{
  color: #29b6f6;
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

</style>