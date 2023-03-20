
let modal=document.querySelector('.modal-montant');
let numModal=document.querySelector('.card-number');
let btnModal=document.querySelector('.del2');
let cross=document.querySelectorAll('.del');
console.log(cross)
const cover=document.querySelector('.ex');

let allServices=document.querySelectorAll('.orange');
let btnPayment=document.querySelector('.paid');
btnPayment.addEventListener('click', ()=>{
    modal.style.display='flex';
    cover.style.display='block';
})
cross[0].addEventListener('click', ()=>{
    modal.style.display='none';
    cover.style.display='none';
})

allServices.forEach(service => {
   service.addEventListener('click', ()=>{
    numModal.style.display='flex';
    modal.style.display='none';
   }) 
})
cross[1].addEventListener('click', ()=>{
    numModal.style.display='none';
    cover.style.display='none';
})