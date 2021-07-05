/**
 * Récupération des informations sur le localStorage pour afficher l'orderID et le prix total sur la page confirmation
 */

let confirmation = document.getElementById('confirmation');

let orderId = JSON.parse(localStorage.getItem('orderID'));
let price = JSON.parse(localStorage.getItem("panier")) 

let priceTotal = 0;

for (let i = 0; i < price.length; i++) {
    const element = price[i].price;

    priceTotal += element     
}


confirmation.innerHTML = `

<h1>Merci !</h1>

<h2>Votre commande a été passé avec succès !</h2>

<h3 >Voici l'identifiant de votre commande</h3>

<p class="orderID">${orderId}</p>

<h3>Prix total  de la commande</h3>

<p class="final_price">${priceTotal/100}€</p>

`;

/**
 * Suppression du localStorage 
 */
function removeStorage(){
    localStorage.clear();
}

removeStorage();
circle();