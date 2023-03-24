
let nom=document.querySelector('#Nom');
let prenom=document.querySelector('#Prenom');
let password=document.querySelector('#Nom');
let email=document.querySelector('#email');
console.log("bonjour")




let btnCreate=document.querySelector('.btn-creer');
console.log('coucou')
let admis={
    nom:nom.value,
    prenom:prenom.value,
    email:email.value,
    password:password.value,
    image:image.value
}
console.log(admis.value);

btnCreate.addEventListener('submit',(e)=>{
    e.preventDefault();
   console.log('bonjour-coucou')
       
})


function createAdmis(){
    
}
