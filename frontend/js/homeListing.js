import {getProductsFromAPI} from './importApi.js'

const product__listing = document.getElementById("product__listing");

async function productsListing() {
    const oneProduct = await getProductsFromAPI();

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