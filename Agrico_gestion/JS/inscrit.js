let fichier = document.querySelector('input[type="file"]');
let form = document.getElementById("inscription");
let nom=document.querySelector('#Nom');
let prenom=document.querySelector('#Prenom');
let password=document.querySelector('#Password');
console.log(password)
let email=document.querySelector('#email');
const photo = document.querySelector('.photo');
const p=document.querySelector('.photo>p');


const imageElement = document.createElement('img');
// let countId=1
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

  // Vérifier si tous les champs du formulaire ont été remplis
  if (Object.values(admis).every(value => value !== "")) {

    // Vérifier si un enregistrement avec les mêmes données existe déjà dans le stockage local
    let existe = false;
    for (let i = 0; i < localStorage.length; i++) {
      let cle = localStorage.key(i);
      if (cle.startsWith("admis_")) {
        let enregistrement = JSON.parse(localStorage.getItem(cle));
        if (enregistrement.nom === admis.nom &&
            enregistrement.prenom === admis.prenom &&
            enregistrement.password === admis.password &&
            enregistrement.fichier === admis.fichier &&
            enregistrement.email === admis.email) {
          existe = true;
          break;
        }
      }
    }

    if (!existe) {
      // Enregistrer les données du formulaire dans le stockage local avec un nouvel identifiant
      let id = new Date().getTime();
      localStorage.setItem(`admis_` + id, JSON.stringify(admis));
      alert("Bravo vous etes super admine");
    } else {
      alert("Cet enregistrement existe déjà");
    }

  } else {
    alert("Veuillez remplir tous les champs du formulaire");
  }

});
