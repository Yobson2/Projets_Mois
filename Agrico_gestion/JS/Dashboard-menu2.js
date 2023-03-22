let allLi=document.querySelectorAll('.navBar-dashboard>ul>li');
let blocOne=document.querySelector('.bloc-contains')
let allBloc=document.querySelectorAll('.section');


let blocTwo=allBloc[0]
let blocThree=allBloc[1]
let blocFour=document.querySelector('.section2')
let blocFive=document.querySelector('.bilan')
let blocStatuts=document.querySelector('.statuts')
console.log(blocFour,'text')

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
    
    console.log('bilan')
    
})
allLi[2].addEventListener('click',()=>{
    console.log('two')
    blocOne.style.display='none';
    blocThree.style.display='none';
    blocFour.style.display='none';
    blocFive.style.display='none';
    blocStatuts.style.display='block';
    
})
allLi[3].addEventListener('click',()=>{
    console.log('three')
    blocOne.style.display='none';
    blocTwo.style.display='none';
    blocThree.style.display='none';
    blocFive.style.display='none';
    blocStatuts.style.display='none';   
    blocFour.style.display='block'; 
    
})
allLi[4].addEventListener('click',()=>{
    console.log('content 4')
    blocOne.style.display='none';
    blocFive.style.display='none';
    blocFour.style.display='none';
    blocStatuts.style.display='none';
    blocThree.style.display='none';
    blocTwo.style.display='block';
   
})






// les elements de la section
let allCard1=document.querySelectorAll('.card1');
console.log(allCard1,'my card')
let inscription=document.querySelector('#inscription');
let listes=document.querySelector('.listes-admis');


allCard1[3].addEventListener('click',()=>{
    blocThree.style.display='none';
    listes.style.display='none';
    inscription.style.display='block';

    console.log('card1')
})
allCard1[4].addEventListener('click',()=>{
    console.log('card2')
    blocThree.style.display='block';
    listes.style.display='none';
    inscription.style.display='none';

})
allCard1[5].addEventListener('click',()=>{
    console.log('card3')
    
    blocThree.style.display='none';
    listes.style.display='flex';
    inscription.style.display='none';

})
