let btnClose=document.querySelector('.close');
let modalPanier=document.querySelector('.modal-panier');
let iconPanier=document.querySelector('.panier');
let like=document.querySelectorAll('.like');


btnClose.addEventListener('click', ()=>{
    modalPanier.classList.add('close-panier');
});
iconPanier.addEventListener('click', ()=>{
    modalPanier.classList.toggle('open-panier');
});

// // mise en place du panier

// function saveBacket(){
// localStorage.setItem('A',JSON.stringify(A))
// }
// function getBacket(){
//     let basket = localStorage.getItem('A');
//    if(basket==null){
//      return [];
//    }else{
//     return JSON.parse(basket);
//    }
// }
// function addBacket(product){
//    let basket=getBacket()
//    product.push(basket); 
//    saveBacket(basket);
//    console.log('product my test')
// }

// getBacket(product);

// // like.addEventListener('click', (e)=>{
// //     e.preventDefault();
// //     console.log('basket')
// // })

// like.forEach(item=>{
//     item.addEventListener('click',()=>{
     
//         console.log("like all")
//     })
// })

