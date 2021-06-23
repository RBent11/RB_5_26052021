// let name = document.getElementById('name');
// let price = document.getElementById('price');
// let product__listing = document.getElementById('product__listing');
// let img = document.getElementById('img');
// let div = document.createElement("div");

// const api = fetch('http://localhost:3000/api/cameras');

// // async function getProductsInfos(){
// // 	const res = await api;
// // 	const data = await res.json();

// // 	for (let index = 0; index < data.length; index++) {

// // 		div.innerHTML +=
// // 					`
// // 					<a href="page_produit.html">
// // 							<div class="card_product">
// // 							<img id="img" src="${data[index].imageUrl}" alt="">
// // 							<div class="card_product__description">
// // 								<h4 class="card_product__name" id="name">${data[index].name}</h4>
// // 								<span class="card_product__price" id="price">${data[index].price}€</span>
// // 							</div>
// // 							</div>
// // 					</a>
// // 					`;

// // 		product__listing.appendChild(div);
// // 		console.log(product__listing);


// // 	}
// // }

// // getProductsInfos();


// // async function getProductsInfos() {
// // 	fetch('http://localhost:3000/api/cameras')
// // 		.then(res => res.json())
// // 		.then(data => {
// // 			for (let index = 1; index < data.lenght; index++) {
// // 				const element = data[index];
// // 				product__listing.innerHTML =
// // 					`
// // 					<a href="page_produit.html">
// // 							<div class="card_product">
// // 							<img id="img" src="${element.url}" alt="">
// // 							<div class="card_product__description">
// // 								<h4 class="card_product__name" id="name">${element.name}</h4>
// // 								<span class="card_product__price" id="price">${element.price}€</span>
// // 							</div>
// // 							</div>
// // 					</a>
// // 					`;


// // 			}


// // 		})
// // };

// // getProductsInfos();


// // https://api.thecatapi.com/v1/images/search
// // http://localhost:3000/api/cameras

// fetch('http://localhost:3000/api/cameras')
// 	.then(res => res.json())
// 	.then(data => {
// 		for (let index = 1; index < data.lenght; index++) {
// 							const element = data[index];
// 							product__listing.innerHTML +=
// 								`
// 								<a href="page_produit.html">
// 										<div class="card_product">
// 										<img id="img" src="${element.imageUrl}" alt="">
// 										<div class="card_product__description">
// 											<h4 class="card_product__name" id="name">${element.name}</h4>
// 											<span class="card_product__price" id="price">${element.price}€</span>
// 										</div>
// 										</div>
// 								</a>
// 								`;
// 			};


// 	});


// const name = document.getElementById('name');
// const price = document.getElementById('price');
const product__listing = document.getElementById('product__listing');
// const img = document.getElementById('img');



// function getProductsInfos() {
	fetch('http://localhost:3000/api/cameras')
			.then(res => res.json())
			.then(data => {
				for (let index = 0; index < data.lenght; index++) {
					const element = data[index];

					product__listing.innerHTML +=
						`
						<a href="page_produit.html">
							<div class="card_product">
							<img id="img" src="${element.imageUrl}" alt="">
							<div class="card_product__description">
								<h4 class="card_product__name" id="name">${element.name}</h4>
								<span class="card_product__price" id="price">${element.price}€</span>
							</div>
							</div>
						</a>
						`;


			}


		})
// };

// getProductsInfos();

// https://api.thecatapi.com/v1/images/search