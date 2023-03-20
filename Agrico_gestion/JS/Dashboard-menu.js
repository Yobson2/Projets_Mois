let allLi=document.querySelectorAll('.navBar-dashboard>ul>li');
let blocOne=document.querySelector('.bloc-contains')
let blocFour=document.querySelector('.section')
console.log(allLi,'my li')

allLi[0].addEventListener('click',()=>{
    blocOne.style.display='block';
    blocFour.style.display='none';
    
})
allLi[1].addEventListener('click',()=>{
    blocOne.style.display='none';
    
})
allLi[2].addEventListener('click',()=>{
    blocOne.style.display='none';
    
})
allLi[3].addEventListener('click',()=>{
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
