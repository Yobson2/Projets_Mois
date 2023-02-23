const produit=window.location.search.split("?").join("");
console.log(produit);

let articlesData=[];

window.addEventListener("load",produitData)

 async function produitData(){
    let res= await fetch(`../../Data/store-product.json?`);
    res= await res.json();
    let contenerArticle=document.querySelector('.contenaire-globlale');
    let cardDoc = '';
    res.forEach(el => {
        if(el.id==produit){
           
            el.card.forEach(item=>{
                console.log(item)
              cardDoc=`
              
                <div class="container">
                    <h2>${item.titre}</h2>
                  <div class="row">
                        <div class="box box1">
                            <h3>${item.sous_titre1}</h3>
                            <i class="fa-solid fa-circle-chevron-right"></i>
                            <img src="../Images/${item.image1}" />
                        </div>
                        
                        <div class="box box2">
                            <h3>${item.sous_titre2}</h3>
                            <i class="fa-solid fa-circle-chevron-right"></i>
                            <img src="../Images/${item.image2}" />
                        </div>
                        
                        <div class="box box3">
                            <h3>${item.sous_titre3}</h3>
                            <i class="fa-solid fa-circle-chevron-right"></i>
                            <img src="../Images/${item.image3}" />
                        </div>
                    </div>
                </div>
                <div class="blocs-articles">
                            <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image1}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product1}</h3>
                        <p>${item.price1}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image2}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product2}</h3>
                        <p>${item.price2}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image3}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product3}</h3>
                        <p>${item.price3}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image4}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product4}</h3>
                        <p>${item.price4}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image5}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product5}</h3>
                        <p>${item.price5}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image6}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product6}</h3>
                        <p>${item.price6}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image7}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product7}</h3>
                        <p>${item.price7}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image8}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product8}</h3>
                        <p>${item.price8}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image9}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product9}</h3>
                        <p>${item.price9}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image10}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product10}</h3>
                        <p>${item.price10}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart" ></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image11}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product11}</h3>
                        <p>${item.price11}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image12}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product12}</h3>
                        <p>${item.price12}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart" ></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                    <div class="card-col">
                    <div class="card-img">
                        <img src="../Images/${item.image13}" alt="">
                    </div>
                    <div class="name-price-articles">
                        <div class="content-infos">
                        <h3>${item.nom_product13}</h3>
                        <p>${item.price13}Fcfa</p>
                        </div>
                        <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <button class="details">Details</button>
                    </div>
                </div>
                `

               
            })
        }else{
            console.log(el.id)
        }
        contenerArticle.innerHTML=cardDoc;

    })
    
    
    checkButton()
}
produitData()


let product=`
       <div class="row">
                <div class="col-1">
                  <img src="../Images/angela-bailey-jlo7Bf4tUoY-unsplash.jpg" alt="">
                </div>
                <div class="col-2">
                    <button class="delete-product"><i class="fa-solid fa-trash"></i></i></button>
                    <h3>Lorem</h3>
                    <p><span>100</span>Fcfa</p>
                    <p class="count-product">1</p>
                </div>
                
        </div>
   `
function checkButton(){
    let detailsBtn=document.querySelectorAll('.details');
    let checkCoeur=document.querySelectorAll('.like');
    let modalPanier=document.querySelector('.modal-panier');

    
     detailsBtn.forEach((t)=>{
        t.addEventListener('click', (e) => {
            e.preventDefault();
            window.location=`DetailsArticles.html`;
         })
     });

     checkCoeur.forEach((test)=>{
        test.addEventListener('click', (e) => {
            e.preventDefault(); 
            modalPanier.classList.add('close-panier');

            // mise en place du panier

            // getBacket(product);
    
    
         })
     });
}
// let btnSearch = document.querySelector('#search');
// btnSearch.addEventListener('click', rechercherElement(liste,elementRecherche))


// function rechercherElement(liste, elementRecherche) {
//     let elementRecherche = document.querySelector('#input_search').value;

//     const elementTrouve = liste.find((element) => element === elementRecherche);
//     if (elementTrouve) {
//       console.log(`L'élément ${elementRecherche} a été trouvé dans la liste.`);
//     } else {
//       console.log(`L'élément ${elementRecherche} n'a pas été trouvé dans la liste.`);
//     }
//   }
// function saveBacket(){
//     localStorage.setItem('A',JSON.stringify(A))
//     }
//     function getBacket(){
//         let basket = localStorage.getItem('A');
//        if(basket==null){
//          return [];
//        }else{
//         return JSON.parse(basket);
//        }
//     }
//     function addBacket(product){
//        let basket=getBacket()
//        let foundProduct = basket.find(p => p.id==product.id);

//        if(foundProduct != undefined){
//           foundProduct.quantity+=1;
//        }else{
//         foundProduct.quantity=1;
//         product.push(basket); 
//        }
//        saveBacket(basket);
//        console.log('product my test')
//     }
    
    
    
    
  

  