let allLi=document.querySelectorAll('.navBar-dashboard>ul>li');
let blocOne=document.querySelector('.bloc-contains')
let allBloc=document.querySelectorAll('.section');


let blocTwo=allBloc[0]
let blocThree=allBloc[1]
let blocFour=document.querySelector('.section2')
let blocFive=document.querySelector('.bilan')
let blocStatuts=document.querySelector('.statuts')
// console.log(blocFour,'text')

allLi[0].addEventListener('click',()=>{
    blocTwo.style.display='none';
    blocFive.style.display='none';
    blocThree.style.display='none';
    blocStatuts.style.display='none';
    blocFour.style.display='none'; 
    blocOne.style.display='block';
    
    
})
allLi[1].addEventListener('click',()=>{
    blocFour.style.display='none'; 
    blocOne.style.display='none';
    blocTwo.style.display='none';
    blocStatuts.style.display='none';
    blocThree.style.display='none';
    blocFive.style.display='block';
    
    // console.log('bilan')
    
})
allLi[2].addEventListener('click',()=>{
    // console.log('two')
    blocOne.style.display='none';
    blocThree.style.display='none';
    blocFour.style.display='none';
    blocFive.style.display='none';
    blocStatuts.style.display='block';
    
})
allLi[3].addEventListener('click',()=>{
    // console.log('three')
    blocOne.style.display='none';
    blocTwo.style.display='none';
    blocThree.style.display='none';
    blocFive.style.display='none';
    blocStatuts.style.display='none';   
    blocFour.style.display='block'; 
    
})
allLi[4].addEventListener('click',()=>{
    // console.log('content 4')
    blocOne.style.display='none';
    blocFive.style.display='none';
    blocFour.style.display='none';
    blocStatuts.style.display='none';
    blocThree.style.display='none';
    blocTwo.style.display='block';
   
})






// les elements de la section
let allCard1=document.querySelectorAll('.card1');
// console.log(allCard1,'my card')
let inscription=document.querySelector('#inscription');
let listes=document.querySelector('.listes-admis');


allCard1[3].addEventListener('click',()=>{
    blocThree.style.display='none';
    listes.style.display='none';
    inscription.style.display='block';

    // console.log('card1')
})
allCard1[4].addEventListener('click',()=>{
    // console.log('card2')
    blocThree.style.display='block';
    listes.style.display='none';
    inscription.style.display='none';

})
allCard1[5].addEventListener('click',()=>{
    // console.log('card3')
    
    blocThree.style.display='none';
    listes.style.display='flex';
    inscription.style.display='none';

})



// creer admis && liste admis

const fichier = document.querySelector('input[type="file"]');
let form3 = document.querySelector("#inscription");
let nom=document.querySelector('#Nom');
let prenom=document.querySelector('#Prenom');

let email=document.querySelector('#email');
let tel=document.querySelector('#tel')
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
form3.addEventListener("submit", function(event) {
  event.preventDefault();
  let admis = {
    nom:nom.value,
    prenom:prenom.value,
    fichier:fichier.value,
    email:email.value,
    tel:tel.value
  };
//   console.log(admis)

  // Vérifier si tous les champs du formulaire ont été remplis
  if (Object.values(admis).every(value => value !== "")) {

    // Vérifier si un enregistrement avec les mêmes données existe déjà dans le stockage local
    let existe = false;
    for (let i = 0; i < localStorage.length; i++) {
      let cle = localStorage.key(i);
      if (cle.startsWith("P1_")) {
        let enregistrement = JSON.parse(localStorage.getItem(cle));
        if (enregistrement.nom === admis.nom &&
            enregistrement.prenom === admis.prenom &&
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
      localStorage.setItem(`P1_` + id, JSON.stringify(admis));
      alert("Bravo vous avez enregistré un ouvrier");
    } else {
      alert("Cet enregistrement existe déjà");
    }

  } else {
    alert("Veuillez remplir tous les champs du formulaire");
  }
});


//recuperation des donnees A1
let infos=[];

function getDocs(){
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
  
    // Vérifier si la clé commence par "P1"
    if (key.startsWith("P1")) {
      const admis = JSON.parse(value);
      infos.push(admis);
    //   console.log(infos)
    }
  }
  printCard(infos);
  recentAdmin(infos)
  countData(infos)
}

getDocs();

function countData(data){
  const taille=data.length
  let card1=document.querySelectorAll('.card1>h2');
//   console.log('my card',card1)
  card1.forEach(item=>{
    const tx="";
    item.textContent=taille

  })
  
}

function printCard(data){
  let GrandCard=document.querySelector('.listes-admis');
  let cards = '';
  
  data.forEach(el => {
    // console.log('ele',el)
    let card=`
      <div class="card">
        <div class="img">
          <img src="../Images/Photos/Photo_paysans/${el.fichier.split('\\')[2]}" alt="">
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
    
    data.slice(0,4).forEach(el => {
      console.log('ele',el)
      let card=`
      <div class="admis-card">
        <div class="photo-admis">
        <img src="../Images/Photos/Photo_paysans/${el.fichier.split('\\')[2]}" alt="">
        </div>
        <div class="photo-texte">
            <h4>${el.nom} ${el.prenom}</h4>
            <p>${el.tel}</p>
        </div>
        </div>
      `;
      cards += card;
    });
    GrandCard.innerHTML = cards;
  }

  //Gestion des taches
let btnTache=document.querySelector('.doc-tache')
let inptTache=document.querySelector('.doc');
let allTaches=[];
let allGetTaches=[];



//enregistrer les taches

function registeTache() {
    btnTache.addEventListener('click', () => {
        if (allTaches.includes(inptTache.value)) {
            return;
        } else {
            allTaches.push(inptTache.value);
            localStorage.setItem("taches_", JSON.stringify(allTaches));
            // console.log('doc', allTaches);
            getTaches();
        }
    });
    getTaches();
}

registeTache();

function getTaches() {
    allGetTaches = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if (key.startsWith("taches")) {
            const taches = JSON.parse(value);
            allGetTaches.push(...taches);
        }
    }
    afficheTaches(allGetTaches);
}

function afficheTaches(data) {
    let tab = document.querySelector('.affiche-taches');
    let taches = "";
  
    let tabSelected = document.querySelector('#taches-paysans');
    let tachesSelected = ""
    data.forEach((tache) => {
      taches += `
        <div class="tache">
          <div class="name-tache">
            <p>${tache}</p>
          </div>
          <div class="delete-tache">
            <button><img src="/logo/icons8-trash-can-50.png" alt=""></button>
          </div>
        </div>
      `;
      tachesSelected += `
        <option value="${tache}">${tache}</option>
      `
    });
    tab.innerHTML = taches;
    tabSelected.innerHTML = tachesSelected;
  
    // Ajouter un gestionnaire d'événements à chaque bouton de suppression
    ///debut test ?//
    let deleteButtons = document.querySelectorAll('.delete-tache>button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        let tache = event.target.parentNode.parentNode.querySelector('.name-tache>p').textContent;
        supprimerTache(tache);
        afficheTaches(JSON.parse(localStorage.getItem('taches_')));
      });
    });
  }
  
  function supprimerTache(tache) {
    let taches = JSON.parse(localStorage.getItem('taches_'));
    taches = taches.filter((item) => item !== tache);
    localStorage.setItem('taches_', JSON.stringify(taches));
  }
  
////Fin test ?//

// attribution de taches aux paysans & nom complet

function getNomsEnregistrements() {
    let enregistrements = [];
  
    for (let i = 0; i < localStorage.length; i++) {
      let cle = localStorage.key(i);
      if (cle.startsWith("P1_")) {
        let enregistrement = JSON.parse(localStorage.getItem(cle));
        let nomComplet=`${enregistrement.nom} ${enregistrement.prenom}`
        enregistrements.push(nomComplet);
      }
    }
    afficheName(enregistrements)
    // console.log(enregistrements,'enre');
  }
  
  getNomsEnregistrements()

  function afficheName(data) {
    let tabSelected = document.querySelector('#name-paysans');
    let payName1=document.querySelector('#input_search1');
    // console.log('name222',payName1.value)
    let nomSelected = ""
    data.forEach((tache) => {
        nomSelected+=`
        <option value="${tache}">${tache}</option>
        `
    });
    tabSelected.innerHTML=nomSelected
    payName1.innerHTML=nomSelected
    
  }  
  
//   afficher les elements dans le tableau

let inputNamePaysans = document.querySelector("#name-paysans");
let inputTaches = document.querySelector("#taches-paysans");

let btnTaches=document.querySelector('.btn-taches');

btnTaches.addEventListener('click',printTableauRow)
let data = [];
let niveaux=[]
function printTableauRow(){
    let nameP="";
    let tacheP="";
    let infosPa={
        nameP:inputNamePaysans.value,
        tacheP:inputTaches.value
    }
    console.log(infosPa,'my infos')
    let tableau = document.querySelector('.element');

    if (data.includes(infosPa)) {
        return;
    } else {
        data.push(infosPa);
        let row=""
        let ran=0;
        data.forEach((el) => {
            ran+=1;
            // console.log(el,'text')
         row+= `
         <div class="element-card">
                <div class="entete2">
                    <p>${ran}-${el.nameP}</p>
                </div>
                <div class="entete2">
                    <p>${el.tacheP}</p>
                </div>
                <div class="entete2">
                    <p class="choose-check">
                        <select  id="niveau-tache">
                            <option value="En cours" class="niv1">En cours</option>
                            <option value="terminé" class="niv2">terminé</option>
                            <option value="non terminé" class="niv3">non terminé</option>
                        </select>   
                    </p> 
                </div>
           </div>
            `
        })
        tableau.innerHTML=row
        choose()
    }  
    
}

///choix de niveau

function choose(){
    let choix = document.querySelector('#niveau-tache');
    
    if(choix.value=='En cours' || choix.value=='non terminé'){
        return;
    }else{
        choix.value="30 000"
        niveaux.push(choix.value)
        localStorage.setItem("salaires_", JSON.stringify(niveaux));
    }
    console.log(niveaux)
}
  

// recherche des infos pour le payement des paysans

let btns=document.querySelector('#search1');
let payName=document.querySelector('#input_search1');

btns.addEventListener('click',()=>{
    console.log('bonjour')
    getElementByName(payName.value)
})

function getElementByName(name) {
    let element = null;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith("P1_")) {
        let record = JSON.parse(localStorage.getItem(key));
        if (record.nom === name.split(" ")[0] && record.prenom === name.split(" ")[1]) {
          element = record;
          break;
        }
      }
    }
    // return element;
    console.log(element)
    getElementP(element)
  }

function getElementP(t){
    let cards=document.querySelector('.affiche-paysans1')
    let mini="";
  console.log('data',data)
        mini = `
        <div class="card">
            <div class="img">
                <img src="../Images/Photos/Photo_paysans/${t.fichier.split("//")[1]}" alt="">
            </div>
            <div class="info">
                <span>${t.nom} ${t.prenom}</span>
                <p>${t.tel}</p>
            </div>  
        
       </div>

       <div class="details">
                <div class="taches-faite">
                    <p>Nombres de taches:</p>
                    <p></p>
                </div>
                <div class="montant">
                    <p>Salaires:</p>
                    <p></p>FCFA
                </div>
            </div>
        `;
    cards.innerHTML=mini;
    generateTasksAndCosts()
}

function generateTasksAndCosts() {
    const numTasks = Math.floor(Math.random() * 10) + 1;
    const totalCost = Math.floor(Math.random() * 900000) + 1000;
  
    const costPerTask = Math.floor(totalCost / numTasks);
  
    ///bilans
    const tjours=Math.floor(numTasks*7);
    const tMois=Math.floor(numTasks*30);
    const tannee=Math.floor(numTasks*365);
    // Crée un objet qui contient le nombre de tâches et le coût approximatif par tâche
    const tasks = {
      numTasks: numTasks,
      costPerTask: costPerTask,
      tjours:tjours,
      tMois:tMois,
      tannee:tannee
    };
  
   console.log(tasks) ;
   let toop1=document.querySelectorAll('.taches-faite>p');
   let toop2=document.querySelectorAll('.montant>p');
   toop1[1].textContent=tasks.numTasks;
   toop2[1].textContent=tasks.costPerTask;
   

   let bilanTaches=document.querySelectorAll('.b-row2>.b-row2-p>p');
   console.log(bilanTaches)
   
   bilanTaches[0].textContent=tasks.tjours
   bilanTaches[1].textContent=tasks.tMois
   bilanTaches[2].textContent=tasks.tannee
  }
  

function getBilans(){
    const numTasks = Math.floor(Math.random() * 10) + 1;
    const totalCost = Math.floor(Math.random() * 900000) + 1000;
  
    const costPerTask = Math.floor(totalCost / numTasks);
  
    ///bilans
    const tjours=Math.floor(numTasks*7);
    const tMois=Math.floor(numTasks*30);
    const tannee=Math.floor(numTasks*365);


    const pjours=Math.floor(totalCost*7);
    const pMois=Math.floor(totalCost*30);
    const pannee=Math.floor(totalCost*365);
    // Crée un objet qui contient le nombre de tâches et le coût approximatif par tâche
    const tasks = {
      numTasks: numTasks,
      costPerTask: costPerTask,
      tjours:tjours,
      tMois:tMois,
      tannee:tannee,
      pjours:pjours,
      pMois:pMois,
      pannee:pannee
    };
  
   console.log(tasks) ;
   
   let bilanTaches=document.querySelectorAll('.b-row2>.b-row2-p>p');
   console.log(bilanTaches)
   
   bilanTaches[0].textContent=tasks.tjours
   bilanTaches[1].textContent=tasks.tMois
   bilanTaches[2].textContent=tasks.tannee

   bilanTaches[3].textContent=tasks.pjours
   bilanTaches[4].textContent=tasks.pMois
   bilanTaches[5].textContent=tasks.pannee
}
  
getBilans()  
