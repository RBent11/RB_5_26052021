// import {getAllProducts, getOneProduct, getProductsFromAPI} from './accessAPI'

//Récupération des données de l'API à l'aide d'un fetch
async function getAllProducts() {
    return fetch("http://localhost:3000/api/cameras/")
        .then(function (res) {
            return res.json();
        })
        .then(function (products) {
            return products;
        })
        .catch(function (erreur) {
            alert(erreur);
        })

}

//Récupération des données de l'id de chaque produit depuis l'API
async function getOneProduct(id) {
    return fetch("http://localhost:3000/api/cameras/" + id)
        .then(function (res) {
            return res.json();
        })
        .then(function (products) {
            return products;
        })
        .catch(function (erreur) {
            alert(erreur);
        })

}


//récupération des données selon l'id ou tout si l'id n'est pas renseigné

async function getProductsFromAPI(id = null) {
    if (id != null) {
        return products = await getOneProduct(id);
    } else {
        return products = await getAllProducts();
    }
}


function circle(){
    let circle = document.getElementById('circle')
	let liste = JSON.parse(localStorage.getItem("panier"));
    if(liste != null){let nb_articles = liste.length; 
        circle.innerHTML = `${nb_articles}`;
        console.log(nb_articles)
        }
        
	
}



async function productsListing() {
    const oneProduct = await getProductsFromAPI();
    console.log(oneProduct)
    for (let index = 0; index < oneProduct.length; index++) {
        const element = oneProduct[index];

        product__listing.innerHTML +=
            `
					<a href="page_produit.html?id=${element._id}">

						<div class="card_product">
						<img id="img" src="${element.imageUrl}" alt="">
						<div class="card_product__description">
							<h4 class="card_product__name" id="name">${element.name}</h4>
							<span class="card_product__price" id="price">${element.price}€</span>
						</div>
						</div>
					</a>
					`;

    }


}

productsListing();
circle();
