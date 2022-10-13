<template>
  <div class="body">
        <form action="#" @submit.prevent="envoyer">
        <h1>Se connecter</h1>
        <div class="container1">
            <p><i class="fa-brands fa-google"></i></p>
            <p><i class="fa-brands fa-youtube"></i></p>
            <p><i class="fa-brands fa-facebook"></i></p>
            <p><i class="fa-brands fa-twitter"></i></p>
        </div>
        <p class="text_mail">ou utiliser mon adresse e-mail:</p>
        <div class="container2">
            <input type="email" placeholder="Email" class="saissir" v-model="email" required>
            <input type="password" placeholder="Password" class="saissir" v-model="password" required>
            <div class="statut">
                <p>Statut</p>
                <select class="saissir" v-model="options">
                    <option>Prestation de service</option>
                    <option >Demande de services</option>
                </select>
            </div>
        </div>
        <p class="inscription">je n'ai pas de <span>compte</span>. je m'en <span @click="$emit('login')"> crée</span> un.</p>
        <div align="center">
            <button type="submit">Se connecter</button>
        </div>
    </form>
    </div>
</template>

<script>
import {loginTry} from '@/composables/loginUser'
export default{
    data() {
        return {
            password: this.password,
            email: this.email,
            options:this.options
        };
    },
    methods: {
        envoyer(e){
            e.preventDefault
              loginTry({ email: this.email, password: this.password, options:this.options},(res=>{
                console.log(res,'vous etes un utilisateur')
                console.log( this.email, this.password,this.options)
                // res.user? this.$router.push("/") : console.log(res.err)
                if(res.user){
                    if(this.options==="Prestation de service"){
                        this.$router.push("/ServiceVente")
                        console.log('bye')
                    }else if(this.options==="Demande de services"){
                         this.$router.push("/")
                    }
                    // this.$router.push('/ServiceVente')
                }else{
                    console.log(res.err)
                }

            }))
        }
    }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.clin{
    background-color: aqua;
}
.body{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #545455;
    height: 100vh;
   
    
}
form{
  font-family: 'Roboto', sans-serif;
  margin-top: 30px;
  background-color: #fff;
  padding: 40px 60px;
  min-width: 300px;
  border-radius: 10px;
  /* background-image: url('../assets/Images/3003035.png'); */
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
form .text_mail{
    text-align: center;
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
  color: #757575;
}
p.inscription{
    font-size: 14px;
    margin-bottom: 20px;
}
span{
    color: blue;
    cursor: pointer;
}
span :nth-child(1){
    text-decoration: none;
    color: blue;
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