const getfull = fetch("http://localhost:3000/api/cameras");

const product = document.getElementById("product");


async function getProductByURL() {

    const res = await getfull;
    const data = await res.json();


    let productId = window.location.hash;


    for (let index = 0; index < data.length; index++) {

        if (productId == "#" + index) {
            product.innerHTML = `
            
            <div class="product">
                <img class="product__img" src="${data[index].imageUrl}" alt="">
                <div class="container_description">
                    <h2 class="product__title">${data[index].name}</h2>
                    <p class="product__description">${data[index].description}</p>
                    <span class="product__price">${data[index].price}€</span>
                    <button id="btn">Ajouter au panier</button>
                </div>
            </div>

            `;



        }


    }

}




function redirectionPanier() {
    document.location.href = "../../frontend/panier.html"
}

async function addToCart(){

}


async function cart() {
    await getProductByURL();
    const btn = document.querySelector("#btn");
    console.log("btn");
    

    btn.addEventListener('click', () => {
        localStorage.setItem(data[index].name, data[index].price);
    })




}

cart();