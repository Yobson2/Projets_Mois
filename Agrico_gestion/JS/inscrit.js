const fichier = document.querySelector('input[type="file"]');
let form = document.getElementById("inscription");
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
    localStorage.setItem("admis_" + id, JSON.stringify(admis));
    alert("Bravo vous etes super admine");
  } else {
    alert("Veuillez remplir tous les champs du formulaire");
  }

});




