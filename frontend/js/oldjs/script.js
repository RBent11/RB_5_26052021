const name = document.getElementById("name");
const price = document.getElementById("price");
const product_listing = document.getElementById("product__listing");

const getfull = fetch("http://localhost:3000/api/cameras");
const section = document.querySelector("#product__listing");


async function getProductsInfos() {

    const res = await getfull;
    const data = await res.json();

    for (let index = 0; index < data.length; index++) {
        //   create node elem for the dom
        let div = document.createElement("div");
        div.classList.add("card_product");
        let divProduit = document.createElement("div");
        divProduit.classList.add("card_product__name");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        h4.classList.add("card_product__name");
        let span = document.createElement("span");
        span.classList.add("card_product__price");
        let a = document.createElement("a");

        a.href = "page_produit.html"+ "?id#"+index;
        img.src = data[index].imageUrl;
        h4.innerText = data[index].name;
        span.innerText = data[index].price + '€';

        // use append for add node
        divProduit.append(h4, span);
        div.append(img, divProduit);
        a.append(div);
        section.appendChild(a);
        
    }



}





getProductsInfos();




// https://api.thecatapi.com/v1/images/search