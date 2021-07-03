//Récupération de toutes les données de l'API à l'aide d'un fetch
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


//Fonction permettant d'appeler les deux fonctions du dessus en fonction du paramètre. 
//Si un id est renseigné, alors le produit correspondant est appelé, sinon tous les produits sont appelés.
async function getProductsFromAPI(id = null) {
    if (id != null) {
        return products = await getOneProduct(id);
    } else {
        return products = await getAllProducts();
    }
}


