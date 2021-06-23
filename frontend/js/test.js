const product = document.getElementById("product");
const shop = document.getElementById("shopping_list");
const product__listing = document.getElementById("product__listing");
let qty = 0;
let shop_number = document.getElementById("circle");



main();
async function getProductsFromAPI(id = null, products) {
    if (id != null) {
        return products = await getOneProduct(id);
    } else {
        return products = await getAllProducts();
    }



}

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

async function main() {
    productsListing();
    cart();


}

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


function defineLenses() {
    return lenses = document.getElementById("lenses-list");
}

async function getURL() {
    let link = window.location.search;
    let urlParams = new URLSearchParams(link)
    console.log(urlParams.get("id"))

    let productId = urlParams.get("id")
    return oneProduct = await getProductsFromAPI(productId);
}

//récupère chaque produit selon son url et génère la page produit
async function getProductByURL() {

    // let link = window.location.search;
    // let urlParams = new URLSearchParams(link)
    // console.log(urlParams.get("id"))

    // let productId = urlParams.get("id")
    // const oneProduct = await getProductsFromAPI(productId);

    await getURL();

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


    defineLenses();
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

// getProductByURL();

//fonction de redirection vers le panier - sûrement inutile
// function redirectionPanier() {
//     document.location.href = "../../frontend/panier.html"
// }


// -------------------------------- fonctions panier ------------------------------------------------

async function addToCart() {

    // let link = window.location.search;
    // let urlParams = new URLSearchParams(link)
    // console.log(urlParams.get("id"))

    // let productId = urlParams.get("id")
    // const oneProduct = await getProductsFromAPI(productId);

    await getURL();
    await getProductByURL();
    const btn = document.querySelector("#btn");
    // console.log(oneProduct);

    let panier = [];
    let panier_storage = localStorage.getItem("panier");
    if (panier_storage != null) {
        panier = JSON.parse(panier_storage);
    }



    btn.addEventListener('click', () => {
        // console.log(oneProduct.name)
        let lenses_choice = getLensesSelected();
        panier.push({

            name: oneProduct.name,
            price: oneProduct.price,
            lenses: oneProduct.lenses[lenses_choice]

        })
        localStorage.setItem("panier", JSON.stringify(panier));


    })

}

let i = 0;

let liste = JSON.parse(localStorage.getItem("panier"));
// console.table(liste);

if (liste != null) {
    liste.forEach(produit => {
        // console.log(produit.name)

        shop.innerHTML +=
            `
                
        
            <tr>
                <td>${produit.name}</td>
                <td>${produit.price}€</td>
                <td>${produit.lenses}</td>
                <td><button class="btn-remove" data-id=${i}>Remove</button></td>
            </tr>

        

            `;
        i++
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


// let occurence=[]
// let double = []

// for (let i = 0; i < liste.length; i++){
//     occurence.push(liste[i].productID);
//     occurence.sort();








// for (let j = 0; j < liste.length; j++) {
//     if(liste[i].productID == liste[j].productID){
//         // double.push(occurence[j])
//         console.log(liste[i].productID+ " sont des doubles " + occurence[j])
//     }

// }



// for (let j = 0; j < occurence.length; j++) {

//     if(occurence[j] != occurence[j-1]){
//         double.push(occurence[j])
//     }


// }
// // let double=[...new Set(occurence)];
// console.log("Liste ")
// console.log(liste)
// console.log("Occurences ")
// console.log(occurence)
// console.log("Double ")
// console.log(double)







async function removeFromCart() {



    let btn_remove = document.getElementsByClassName("btn-remove");




    for (let i = 0; i < btn_remove.length; i++) {
        let buttons_remove = btn_remove[i];
        buttons_remove.addEventListener('click', (event) => {


            let id_product = event.target.getAttribute("data-id")



            let panier = JSON.parse(localStorage.getItem("panier"))
            console.log(panier[id_product])
            panier.splice(0, id_product);
            localStorage.setItem("panier", JSON.stringify(panier));
            buttons_remove.parentElement.parentElement.remove();



        })
    }

}


// fonction qui va regrouper toutes les fonctions du panier
function cart() {

    addToCart();
    removeFromCart();

}