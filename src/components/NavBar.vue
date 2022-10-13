<template>
   <header>
        <nav>
            <h4> <i class="fa-solid fa-hammer"></i>I-SOLUS</h4>
        </nav>
        <nav>
            <ul>
                <li><router-link to="/" class="liens">Home</router-link></li>
                <li><router-link to="/Services" class="liens">Services</router-link></li>
                <li><router-link to="/Contact" class="liens">Contact</router-link></li>
                <li><router-link to="/Registre" class="liens">s'inscrire</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    mounted(){
        const navigation=document.querySelector('header')
    window.addEventListener('scroll',()=>{
      if(window.scrollY>100){
        navigation.classList.add('anime_nav')
      }else{
        navigation.classList.remove('anime_nav')
      }
    })
}
}
</script>

<style scoped>
 header{
    display: flex;
    justify-content: space-between;
    border: 0px solid black;
    height: 30%;
    position: sticky;
    top: 0;
    transition: all 0.2s ease-out;
    z-index: 5;
    background-color: rgb(174, 166, 166);
}
.anime_nav{
    background-color: rgb(202, 208, 205);
    border: none;
}
nav>h4{
    font-style: initial;
    font-size: large;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

nav>ul{
    list-style: none;
    display: flex;
    width: 200px;
    margin-right: 180px;
}
ul li{
    margin-left: 10px;
    font-size: large;
}
li .liens{
    text-decoration: none;
}
.liens:hover{
    color: darkturquoise;
}
</style>