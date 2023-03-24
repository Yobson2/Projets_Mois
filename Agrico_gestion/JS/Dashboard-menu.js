let allLi=document.querySelectorAll('.navBar-dashboard>ul>li');
let blocOne=document.querySelector('.bloc-contains')
let blocFour=document.querySelector('.section')

allLi[0].addEventListener('click',()=>{
    blocOne.style.display='block';
    blocFour.style.display='none';
    
})
allLi[1].addEventListener('click',()=>{
    blocOne.style.display='none';
    
})
allLi[2].addEventListener('click',()=>{
    blocOne.style.display='none';
    blocFour.style.display='block';
    
})






// les elements de la section
let allCard1=document.querySelectorAll('.card1');
let inscription=document.querySelector('#inscription');
let listes=document.querySelector('.listes-admis');


allCard1[3].addEventListener('click',()=>{
    listes.style.display='none';
    inscription.style.display='block';
})
allCard1[4].addEventListener('click',()=>{

    listes.style.display='flex';
    inscription.style.display='none';

})



//recuperation des données
let admisData=[]

function getData() {
    // console.log(myKey)

    // Récupération de l'id dans l'url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id)
    
    // Récupération des données depuis localStorage
    const key = `admis_${id}`;
    const data = JSON.parse(localStorage.getItem(key));
    
    // Vérification que les données sont définies
    if (!data) {
      console.error(`Aucune donnée trouvée pour l'id ${id}`);
      return;
    }
    
    // Affichage des données en console
    console.log(data,'my data');
    setData(data)
  }
  
  // Appel de la fonction getData
  getData();

function setData(data){
    let frame=document.querySelectorAll('.theme-second>ul>li')
    const elComplete=`
    <span>${data.nom} ${data.prenom}</span>
    <div class="picture">
    <img src="../Images/Photos/Photo_spAdmis/${data.fichier.split('\\')[2]}" alt="">
    </div>                     
    `
   frame[1].innerHTML=elComplete
}
  


// creer admis && liste admis

const fichier = document.querySelector('input[type="file"]');
let form = document.querySelector("#inscription");
let nom=document.querySelector('#Nom');
let prenom=document.querySelector('#Prenom');
let password=document.querySelector('#Password');
console.log(password)
let email=document.querySelector('#email');
const photo = document.querySelector('.photo');
const p=document.querySelector('.photo>p');


const imageElement = document.createElement('img');

// affiche my photo
fichier.addEventListener('change', function(event) {
  // Récupérer le fichier sélectionné
  const file = event.target.files[0];
  const imageUrl = URL.createObjectURL(file);

  // Afficher l'image dans la div photo
  imageElement.src = imageUrl;
  p.style.display='none';
  photo.appendChild(imageElement);
});
// createAdmission
form.addEventListener("submit", function(event) {
event.preventDefault();
  let admis = {
  nom:nom.value,
  prenom:prenom.value,
  password:password.value,
  fichier:fichier.value,
  email:email.value
  };
  console.log(admis)

  //Object.values() pour obtenir un tableau des valeurs objet
  if (Object.values(admis).every(value => value !== "")) {
    let id = new Date().getTime();
    localStorage.setItem("A1_" + id, JSON.stringify(admis));
    alert("Bravo cree un admine");
  } else {
    alert("Veuillez remplir tous les champs du formulaire");
  }

});






