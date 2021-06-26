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

<h3>Voici l'identifiant de votre commande</h3>

<p>${orderId}</p>

<h3>Et le prix total</h3>

<p>${priceTotal}€</p>

`;


function removeStorage(){
    localStorage.getItem('panier');
    localStorage.getItem('formulaire');
    localStorage.getItem('orderID');

    localStorage.clear();
}

removeStorage();