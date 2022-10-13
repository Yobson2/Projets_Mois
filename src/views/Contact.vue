<template>
      <form action="#">
        <h3>Contactez-nous</h3>
        
       <div class="container">
        <div class="form3">
            <p>Nom</p>
            <input type="text" class="donnee">
            <p>E-mail</p>
            <input type="email" class="donnee"> 
        </div>
        <div class="form3">     
                <p>Prénom</p>
                <input type="text" class="donnee" >
                <p>Téléphone</p>
                <input type="tel" class="donnee"> 
        </div>
       </div>
        <div class="form3">
                <p>Sujet du message</p>
                <select>
                    <option >Inscrire mon bien</option>
                    <option >Demande d'informations</option>
                    <option>Autres</option>
                </select>
                   <p>Votre message</p>
                   <textarea ></textarea>
        </div>
        <input type="submit" value="Envoyer" id="Send">
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
form{
    margin-top: 100px;
    height: 100vh;
    width: 100%;
    margin-bottom: 300px;
    background-color: #b3e5fc;
}
.form3{
    margin-left: 20px;
}
.container{
    display: flex;

}
.donnee{
    width: 350px;
    height: 50px;
    border: 1px solid #000;
    outline: none;
    background-color: darkgrey;
} 
 p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: large;
}
h3{
    margin-left: 20px;
    font-size: x-large;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    letter-spacing: 0.3ch;
}
select{
    height: 40px;
    width: 1200px;
    font-weight: 1000;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: large;
    color: gray;
    background-color: darkgrey;
}
textarea{
    height: 250px;
    width: 1200px;
    background-color: darkgrey;
}
#Send{
    margin-top: 30px;
    margin-left: 40px;
    width: 100px;
    height: 40px;
    background-color: gainsboro;
    border: none;
}
#Send:hover{
    background-color: peru;
    color: white;
    padding: 10px;
}
</style>