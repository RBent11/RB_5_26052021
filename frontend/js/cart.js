// import {getProductByURL} from './productPage.js'

// import {getProductsFromAPI} from './importApi.js'


//fonction de redirection vers le panier - sûrement inutile
// function redirectionPanier() {
//     document.location.href = "../../frontend/panier.html"
// }




async function removeFromCart() {

    // const truc = await getProductsFromAPI();
    // await getProductByURL();
  
    let btn_remove = document.getElementsByClassName("btn-remove");

    

    for (let i = 0; i < btn_remove.length; i++) {
        let buttons_remove = btn_remove[i];
            buttons_remove.addEventListener('click', (event) => {
                let id_product = event.target.getAttribute("data-id")


                
                let panier = JSON.parse(localStorage.getItem("panier"))
                console.log(panier[id_product])
                panier.splice(0,id_product);
                localStorage.setItem("panier", JSON.stringify(panier));
                buttons_remove.parentElement.parentElement.remove();
                
                
                 
            })          
    }
}

removeFromCart();


// fonction qui va regrouper toutes les fonctions du panier
// async function cart() {

//     await addToCart();
//     await removeFromCart();
    
// }

// cart();