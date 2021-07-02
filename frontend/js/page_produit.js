function getIDFromURL() {
    let link = window.location.search;
    let urlParams = new URLSearchParams(link)
    return productId = urlParams.get("id")
}



async function getProductByURL() {

    const productId = getIDFromURL();

    const oneProduct = await getProductsFromAPI(productId);

    page_product__product.innerHTML = `
            

            <div class="page_product__img">
		
                <img src="${oneProduct.imageUrl}">
    
            </div>
    
            <div class="page_product__description_box">


                <h2 class="product_title">${oneProduct.name}</h2>

                <p class="product_infos">${oneProduct.description}</p>

                <p class="product_price">${oneProduct.price/100}€</p>

                <select name="lenses" id="lenses_list">
                            
                </select>

                <button id="btn" class="addToCart">Ajouter au panier</button>

            </div>

            `;

    const lenses = document.getElementById("lenses_list");
    if (oneProduct.lenses != null) {

        for (let j = 0; j < oneProduct.lenses.length; j++) {
            const element = oneProduct.lenses[j];

            lenses.innerHTML += `
                    
                    <option value=${j}>${element}</option>
    
    
                    `;

        }
    }
}

getProductByURL();


function getLensesSelected() {

    return lenses_list.options[lenses_list.selectedIndex].value;
}




//**************************************************************************
//******************************** PANIER **********************************
//**************************************************************************
async function addToCart() {


    await getProductByURL();
    const btn = document.querySelector("#btn");
    const lenses = document.getElementById("lenses_list");


    const productId = getIDFromURL();
    const oneProduct = await getProductsFromAPI(productId);




    let panier = [];
    let panier_storage = localStorage.getItem("panier");
    if (panier_storage != null) {
        panier = JSON.parse(panier_storage);
    }


    btn.addEventListener('click', () => {
       
        let lenses_choice = getLensesSelected();
        panier.push({
            _id: oneProduct._id,
            name: oneProduct.name,
            price: oneProduct.price,
            lenses: oneProduct.lenses[lenses_choice],
            image : oneProduct.imageUrl
        })
        localStorage.setItem("panier", JSON.stringify(panier));
        document.location.reload();
    })
}

addToCart();


function circle(){
    let circle = document.getElementById('circle')
	let liste = JSON.parse(localStorage.getItem("panier"));
    if(liste != null){let nb_articles = liste.length; 
        circle.innerHTML = `${nb_articles}`;
        console.log(nb_articles)
        }
    else{circle.innerHTML = `0`;}
        
}

circle();