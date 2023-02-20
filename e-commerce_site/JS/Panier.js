let btnClose=document.querySelector('.close');
let modalPanier=document.querySelector('.modal-panier');
let iconPanier=document.querySelector('.panier');


btnClose.addEventListener('click', ()=>{
    modalPanier.classList.add('close-panier');
});
iconPanier.addEventListener('click', ()=>{
    modalPanier.classList.toggle('open-panier');
});

