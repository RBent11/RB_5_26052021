/**
Fonction permettant de récupérer le panier et de l'afficher sur la page panier.
Inclut l'affichage de la quantité dans le panier
 */
function getCart(){

	let liste = JSON.parse(localStorage.getItem("panier"));

    let i = 0;

    if (liste != null) {
        (function () {

            let total = 0;
            for (let i = 0; i < liste.length; i++) {
                total += liste[i].price;
            }
            shopping_list.innerHTML +=
                `
            <div class="total_price">Total du panier : ${total/100}€</div>       
            
            `;
        })();
        liste.forEach(produit => {

            shopping_list.innerHTML +=
                `
            <div class="cart_product">

                <img class="cart_product__img" src="${produit.image}" alt="">
                <div class="cart_product__infos">
                    <h4 class="cart_product__name">${produit.name}</h4>
                    <p class="cart_product__lenses">${produit.lenses}</p>
                    <p class="cart_product__price">${produit.price/100}€</p>
                    
                    <i class = "fas fa-trash btn_remove" data-id=${i}></i>
                </div>
            </div>

            `;


            i++;

        });

        let nb_articles = liste.length; 

        if(nb_articles > 1){
        	count_cart.innerHTML +=       
                `
            <p>Votre panier contient  ${nb_articles} articles</p>
            
            `;
        }
        else if(nb_articles == 1){
        	count_cart.innerHTML +=      
                `
            <p>Votre panier contient ${nb_articles} article</p>
            
            `;
        }
        else{
        	count_cart.innerHTML +=
        
                `
            <p>Le panier est vide </p>
            
            `;
        }

        circle.innerHTML = `${nb_articles}`

    }
    else{
        circle.innerHTML = `0`
    
        count_cart.innerHTML +=
        
                `
            <p>Le panier est vide </p>
            
            `;
    }
}

getCart();


/**
 * Fonction permettant la suppression d'un article du panier 
 * Suppression dans le localStorage et graphiquement dans le HTML
 */
function removeFromCart(){

	let btn_remove = document.getElementsByClassName('btn_remove')

	for (let i = 0; i < btn_remove.length; i++) {
        let buttons_remove = btn_remove[i];
        
        buttons_remove.addEventListener('click', (event) => {

            let id_product = event.target.getAttribute("data-id")
            let panier = JSON.parse(localStorage.getItem("panier"))
            panier.splice(id_product,1);
            localStorage.setItem("panier", JSON.stringify(panier));
            buttons_remove.parentElement.parentElement.remove();
            document.location.reload();
        })
    }
}

removeFromCart();

