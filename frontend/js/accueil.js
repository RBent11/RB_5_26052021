//Variable stockant la cible HTML correspondant à la div qui contiendra toutes les cartes produit
let product__listing = document.getElementById("product__listing");


//Fonction injectant le code HTML de chaque produit selon ses informations dans la balise sélectionnée au dessus.
async function productsListing() {
    const oneProduct = await getProductsFromAPI();
    for (let index = 0; index < oneProduct.length; index++) {
        const element = oneProduct[index];

        product__listing.innerHTML +=
            `
                <div class="product_box ">

                    <div class="background"><img src="${element.imageUrl}" alt=""></div>
                    
                    <div class="description">        
                        <h3 class="product_title">${element.name}</h3>
                        
                        <p class="product_box__price">${element.price/100}€</p>
    
                        <p class="product_description">${element.description}</p>
    
                        <a href="page_produit.html?id=${element._id}" class="see_product">Voir le produit</a>
                    </div>
                </div>

					`;
    }

}

productsListing();
circle();