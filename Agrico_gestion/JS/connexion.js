let form = document.getElementById("login");
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let choix=document.querySelector('#choix')




form.addEventListener("submit", function(event) {
    event.preventDefault();
      testConnexion()
}) 


function testConnexion() {
    let myKey = null;
    email = email.value;
    password = password.value;
    choix=choix.value;
    let found = false;
  
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      console.log(key);
      myKey = key;
      if (choix === "super") {
        if (key.startsWith("admis_")) {
          let admis = JSON.parse(localStorage.getItem(key));
          console.log(admis, "text");
          if (
            admis.email === email &&
            admis.password === password &&
            (choix === "super")
          ) {
            found = true;
            break;
          }
        }
      } else if (choix === "admin") {
        if (key.startsWith("A1_")) {
          let admin = JSON.parse(localStorage.getItem(key));
          console.log(admin, "text");
          if (admin.email === email && admin.password === password ||admin.email === "yoyo@gmail.com" && admin.password === "121") {
            found = true;
            break;
          }
        }
      }
    }
  
    console.log(myKey, "my data");
    if (found) {
      if (choix === "super" ) {
        alert("Connexion réussie !");
        window.location.href = `../Pages/Root-Dashboard.html?id=${myKey.split("_")[1]}`;
      } else if (choix === "admin") {
        alert("Connexion réussie !");
        window.location.href = `../Pages/admis-Dashboard.html?id=${myKey.split("_")[1]}`;
      }
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  }
  
