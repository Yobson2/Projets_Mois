
let miniModal=document.querySelector('.modal-page');
let checkUser=document.querySelector('.icon-user');
    //   miniModale
checkUser.addEventListener('click', ()=>{
    miniModal.classList.toggle('open');
})

let checkSearchBarre=document.querySelector('.icon-search');
let barreSearch=document.querySelector('.header-search-barre');

checkSearchBarre.addEventListener('click', ()=>{
    barreSearch.classList.toggle('open-barre');
})

