
let formSign=document.querySelector('#inscription');
const nom=document.querySelector('#Nom');
const prenom=document.querySelector('#Prenom');
const mail=document.querySelector('#email');
const password=document.querySelector('#Password');



formSign.addEventListener('submit',(e)=>{
 e.preventDefault();
 let user={
    nom:nom.value,
    prenom:prenom.value,
    mail:mail.value,
    password:password.value
 }

 console.log(user);

// Enregistre les valeurs dans le localStorage
localStorage.setItem('Nom', user.nom);
localStorage.setItem('Prenom', user.prenom);
localStorage.setItem('Email', user.mail);
localStorage.setItem('Password', user.password);
alert('Inscription terminée')

user.value=null;
})

