function getCart(){

	let liste = JSON.parse(localStorage.getItem("panier"));

    let i = 0;

    if (liste != null) {
        liste.forEach(produit => {

            shopping_list.innerHTML +=
                `
                
        
            <tr>
                <td>${produit.name}</td>
                <td>${produit.price}€</td>
                <td>${produit.lenses}</td>
                <td><i class="fas fa-trash btn_remove" data-id=${i}></i></td>
            </tr>

        

            `;


            i++;

        });



        (function () {

            let total = 0;
            for (let i = 0; i < liste.length; i++) {
                total += liste[i].price;
            }
            shopping_list.innerHTML +=
                `
            <tr>
                <td>Total</td>
                <td>${total}€</td>
                
            </tr>
            
            `;
        })();

        let nb_articles = liste.length; 

        if(nb_articles > 1){
        	shopping_cart.innerHTML +=
        
                `
            <p>Il y a ${nb_articles} articles dans le panier </p>
            
            `;
        }
        else if(nb_articles == 1){
        	shopping_cart.innerHTML +=
        
                `
            <p>Il y a ${nb_articles} article dans le panier </p>
            
            `;
        }
        else{
        	shopping_cart.innerHTML +=
        
                `
            <p>Le panier est vide </p>
            
            `;
        }

        circle.innerHTML = `${nb_articles}`

    }
    else{circle.innerHTML = `0`}
}

getCart();

function removeFromCart(){


	let btn_remove = document.getElementsByClassName('btn_remove')

	for (let i = 0; i < btn_remove.length; i++) {
        let buttons_remove = btn_remove[i];
        



        buttons_remove.addEventListener('click', (event) => {


            let id_product = event.target.getAttribute("data-id")
            console.log(id_product)



            let panier = JSON.parse(localStorage.getItem("panier"))
            console.log(panier[id_product])
            panier.splice(id_product,1);
            localStorage.setItem("panier", JSON.stringify(panier));
            buttons_remove.parentElement.parentElement.remove();
            document.location.reload();



        })
    }
}

removeFromCart();