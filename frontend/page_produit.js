//Récupération des données de l'API à l'aide d'un fetch
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

//Récupération des données de l'id de chaque produit depuis l'API
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


//récupération des données selon l'id ou tout si l'id n'est pas renseigné

async function getProductsFromAPI(id = null) {
    if (id != null) {
        return products = await getOneProduct(id);
    } else {
        return products = await getAllProducts();
    }
}


function getIDFromURL() {
    let link = window.location.search;
    let urlParams = new URLSearchParams(link)
    // console.log(urlParams.get("id"))

    return productId = urlParams.get("id")
}

// const product = document.getElementById("product");

async function getProductByURL() {

    const productId = getIDFromURL();

    const oneProduct = await getProductsFromAPI(productId);



    product.innerHTML = `
            
            <div class="product">
                <img class="product__img" src="${oneProduct.imageUrl}" alt="">
                <div class="container_description">
                    <h2 class="product__title">${oneProduct.name}</h2>
                    <p class="product__description">${oneProduct.description}</p>
                    <span class="product__price">${oneProduct.price}€</span>
                    

                    <select name="lenses" id="lenses_list">
                        
                    </select>

                    <button id="btn" class="btn-style">Ajouter au panier</button>
                </div>
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
        // console.log(oneProduct.name)
        let lenses_choice = getLensesSelected();
        panier.push({
            _id: oneProduct._id,
            name: oneProduct.name,
            price: oneProduct.price,
            lenses: oneProduct.lenses[lenses_choice]
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