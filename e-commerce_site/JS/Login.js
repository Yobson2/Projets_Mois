let formLogin=document.querySelector('#login');
const mail=document.querySelector('#email');
const password=document.querySelector('#Password');
const message=document.querySelector('.erreur');



formLogin.addEventListener('submit',(e)=>{
    e.preventDefault();
    let user={
      mail:mail.value,
      password:password.value
   }
    
     if (localStorage.getItem('Email') === user.mail && localStorage.getItem('Password') === user.password) {
        // Redirige vers une nouvelle page
        window.location.href = 'Home.html';
        alert('Bravo vous etes connectées')
      } else {
        message.classList.add('correct_erreur');
      }
})
