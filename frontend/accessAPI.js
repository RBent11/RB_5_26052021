//Récupération des données de l'API à l'aide d'un fetch
export async function getAllProducts() {
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
export async function getOneProduct(id) {
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


//
export async function getProductsFromAPI(id = null) {
    if (id != null) {
        return products = await getOneProduct(id);
    } else {
        return products = await getAllProducts();
    }
}


