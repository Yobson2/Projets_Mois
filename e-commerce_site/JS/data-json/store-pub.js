let blocRows = document.querySelectorAll('.bloc');

async function myData() {
    let response = await fetch('../../Data/Pub-store.json');
    let data = await response.json();

    data.forEach((cardData, i) => {
        let cardDoc = '';

        cardData.card.forEach(item => {
            cardDoc += `<div class="card-data">
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


async function detailBlocArticles(){
    let rs= await fetch('../../Data/store-product.json');
    rs= await rs.json();
    console.log(rs, 'second data');

    // localStorage.setItem('data', res);
    
 
}
detailBlocArticles();

