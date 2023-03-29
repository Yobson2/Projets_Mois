let allLi=document.querySelectorAll('.navBar-dashboard>ul>li');
let blocOne=document.querySelector('.bloc-contains')
let blocFour=document.querySelector('.section')

allLi[0].addEventListener('click',()=>{
    blocOne.style.display='block';
    blocFour.style.display='none';
})

allLi[1].addEventListener('click',()=>{
    blocOne.style.display='none';
    blocFour.style.display='block';
    
})

let deco=document.querySelector('.deco')
console.log('test',deco)
deco.addEventListener('click',()=>{
  console.log("bonjour")
  window.location.href="../Home.html"
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
let form2 = document.querySelector("#inscription");
let nom=document.querySelector('#Nom');
let prenom=document.querySelector('#Prenom');
let password=document.querySelector('#Password');

let email=document.querySelector('#email');
let poste=document.querySelector('#poste')
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
form2.addEventListener("submit", function(event) {
  event.preventDefault();
  let admis = {
    nom:nom.value,
    prenom:prenom.value,
    password:password.value,
    fichier:fichier.value,
    email:email.value,
    poste:poste.value
  };
  console.log(admis)

  // Vérifier si tous les champs du formulaire ont été remplis
  if (Object.values(admis).every(value => value !== "")) {

    // Vérifier si un enregistrement avec les mêmes données existe déjà dans le stockage local
    let existe = false;
    for (let i = 0; i < localStorage.length; i++) {
      let cle = localStorage.key(i);
      if (cle.startsWith("A1_")) {
        let enregistrement = JSON.parse(localStorage.getItem(cle));
        if (enregistrement.nom === admis.nom &&
            enregistrement.prenom === admis.prenom &&
            enregistrement.password === admis.password &&
            enregistrement.fichier === admis.fichier &&
            enregistrement.poste === admis.poste &&
            enregistrement.email === admis.email) {
          existe = true;
          break;
        }
      }
    }

    if (!existe) {
      let id = new Date().getTime();
      localStorage.setItem(`A1_` + id, JSON.stringify(admis));
      alert("Bravo vous etes admine");
    } else {
      alert("Cet enregistrement existe déjà");
    }

  } else {
    alert("Veuillez remplir tous les champs du formulaire");
  }

});



//recuperation des donnees A1
let infosAdmin=[];

function getDocs(){
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
  
    // Vérifier si la clé commence par "A1"
    if (key.startsWith("A1")) {
      const admis = JSON.parse(value);
      infosAdmin.push(admis);
    }
  }
  printCard(infosAdmin);
  recentAdmin(infosAdmin)
  countData(infosAdmin)
}

getDocs();

function countData(data){
  const taille=data.length
  let card1=document.querySelectorAll('.card1>h2');
  console.log('my card',card1)
  card1.forEach(item=>{
    const tx="";
    item.textContent=taille

  })
  
}

function printCard(data){
  let GrandCard=document.querySelector('.listes-admis');
  let cards = '';
  
  data.forEach(el => {
    console.log('ele',el)
    let card=`
      <div class="card">
        <div class="img">
          <img src="../Images/Photos/Photo_admis/${el.fichier.split('\\')[2]}" alt="">
        </div>
        <div class="info">
          <span>${el.nom} ${el.prenom}</span>
          <p>${el.poste}</p>
          <div class="test">
              <button class="update"><img src="../Logo/icons8-available-updates-48.png" alt=""></button>
              <button class="Delete"><img src="../Logo/icons8-delete-67.png" alt=""></button>
          </div>
        </div>  
      </div>
    `;
    cards += card;
  });
  GrandCard.innerHTML = cards;
}
function recentAdmin(data){
  let GrandCard=document.querySelector('.admis-recents');
  let cards = '';
  
  data.slice(0,3).forEach(el => {
    console.log('ele',el)
    let card=`
    <div class="admis-card">
      <div class="photo-admis">
      <img src="../Images/Photos/Photo_admis/${el.fichier.split('\\')[2]}" alt="">
      </div>
      <div class="photo-texte">
          <h4>${el.nom} ${el.prenom}</h4>
          <p>${el.poste}</p>
      </div>
      </div>
    `;
    cards += card;
  });
  GrandCard.innerHTML = cards;
}





let deleteCard=document.querySelector('.Delete');

function removeCard() {
  let deleteButtons = document.querySelectorAll('.Delete');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.target.closest('.card').remove();
    });
  });
}
removeCard()







