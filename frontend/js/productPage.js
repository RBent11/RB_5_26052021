import {
    getProductsFromAPI
} from './importApi.js'

const product = document.getElementById("product");


const shop = document.getElementById("shopping_list");



//récupère chaque produit selon son url et génère la page produit
export async function getProductByURL() {

    let link = window.location.search;
    let urlParams = new URLSearchParams(link)
    // console.log(urlParams.get("id"))

    let productId = urlParams.get("id")
    const oneProduct = await getProductsFromAPI(productId);



    product.innerHTML = `
            
            <div class="product">
                <img class="product__img" src="${oneProduct.imageUrl}" alt="">
                <div class="container_description">
                    <h2 class="product__title">${oneProduct.name}</h2>
                    <p class="product__description">${oneProduct.description}</p>
                    <span class="product__price">${oneProduct.price}€</span>
                    

                    <select name="lenses" id="lenses-list">
                        
                    </select>

                    <button id="btn" class="btn-style">Ajouter au panier</button>
                </div>
            </div>

            `;


    const lenses = document.getElementById("lenses-list");
    if (oneProduct.lenses != null) {

        for (let j = 0; j < oneProduct.lenses.length; j++) {
            const element = oneProduct.lenses[j];

            lenses.innerHTML += `
                    
                    <option value=${j}>${element}</option>
    
    
                    `;
            // console.log(j)
        }
    }


    


}

function getLensesSelected() {

    return lenses.options[lenses.selectedIndex].value;
}



async function addToCart() {

    
    await getProductByURL();
    const btn = document.querySelector("#btn");
    const lenses = document.getElementById("lenses-list");

    let link = window.location.search;
    let urlParams = new URLSearchParams(link)
    console.log(urlParams.get("id"))

    let productId = urlParams.get("id")
    const oneProduct = await getProductsFromAPI(productId);

    let panier = [];
    let panier_storage = localStorage.getItem("panier");
    if (panier_storage != null) {
        panier = JSON.parse(panier_storage);
    }


    btn.addEventListener('click', () => {
        console.log(oneProduct.name)
        let lenses_choice = getLensesSelected();
        panier.push({
            productID: oneProduct._id,
            name: oneProduct.name,
            price: oneProduct.price,
            lenses: oneProduct.lenses[lenses_choice]

        })
        localStorage.setItem("panier", JSON.stringify(panier));


    })


    let liste = JSON.parse(localStorage.getItem("panier"));

    let i = 0;

    if (liste != null) {
        liste.forEach(produit => {

            shop.innerHTML +=
                `
                
        
            <tr>
                <td>${produit.name}</td>
                <td>${produit.price}€</td>
                <td>${produit.lenses}</td>
                <td><button class="btn-remove" data-id=${i}>Remove</button></td>
            </tr>

        

            `;


            i++;

        });

        (function () {

            let total = 0;
            for (let i = 0; i < liste.length; i++) {
                total += liste[i].price;
            }
            shop.innerHTML +=
                `
            <tr>
                <td>Total</td>
                <td>${total}€</td>
                <td><button><a href="form.html">Procéder au paiement</a></button></td>
            </tr>
            
            `;
        })();
    }


}



addToCart();
// getProductByURL();