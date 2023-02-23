let blocRows = document.querySelectorAll('.bloc');
let sectionArticles=document.querySelectorAll('.article-card');

console.log(sectionArticles)


async function myData() {
    let response = await fetch('../../Data/Pub-store.json');
    let data = await response.json();
    console.log(data)
    data.forEach((cardData, i) => {
        let cardDoc = '';

        cardData.card.forEach(item => {
            cardDoc += `
            <div class="card-data">
                <div class="card-img">
                    <img src="../Images/${item.image}" alt="">
                </div>
                <div class="name-price-articles">
                    <div class="content-infos">
                        <h3>${item.name_product}</h3>
                        <p>${item.price} Fcfa</p>
                    </div>
                    <div class="like">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>`;
        });

        blocRows[i].innerHTML = cardDoc;
    });

}

myData();


async function detailBlocArticles() {
    let rs = await fetch('../../Data/store-product.json');
    rs = await rs.json();
  
    let buttonLink = document.querySelectorAll('.move-more');
    buttonLink.forEach((el_btn, i) => {
        // nous utilisons l'index i de la boucle forEach pour récupérer
        //  l'ID correspondant à l'élément en cours. 

      el_btn.addEventListener('click', (e) => {
        e.preventDefault();
        let id = rs[i].id;
        console.log(id);
        el_btn.id = id;
        window.location=`Articles.html?${el_btn.id}`
      });
    });
  }
  
  detailBlocArticles();
  