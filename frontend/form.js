//valide le nom
form.lastName.addEventListener('change', function () {
  valideNom(this);
});

//valide le prénom
form.firstName.addEventListener('change', function () {
  validePrenom(this);
});

//valide l'adresse

form.address.addEventListener('change', function () {
  valideAddress(this);
});

//valide la ville

form.city.addEventListener('change', function () {
  valideVille(this);
});

//valide l'adresse mail
form.email.addEventListener('change', function () {
  valideEmail(this);
});

//validation du formulaire
form.addEventListener('submit', (e) => {
  let formulaire = [];
  e.preventDefault();
  if (valideNom(form.lastName) && validePrenom(form.firstName) && valideAddress(form.address) && valideVille(form.city) && valideEmail(form.email)) {

    formulaire.push({
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      address: form.address.value,
      city: form.city.value,
      email: form.email.value

    })
    localStorage.setItem("formulaire", JSON.stringify(formulaire));
    document.location.reload();

  } else {
    console.log("non")
  }

});

// OK pour les id produits

let getContact = localStorage.getItem('formulaire')
let getProducts = localStorage.getItem('panier')


let products = []

// if (getProducts != null) {
//   let productsParse = JSON.parse(getProducts)
//   productsParse.forEach(element => {
//     products.push(
//       element._id

//     )

//   });

// }

if (getContact != null && getProducts != null) {
  let contacts = JSON.parse(getContact)

  let contact = {
    firstName: contacts[0].firstName,
    lastName: contacts[0].lastName,
    address: contacts[0].address,
    city: contacts[0].city,
    email: contacts[0].email

  }

  let productsParse = JSON.parse(getProducts)
  productsParse.forEach(element => {
    products.push(
      element._id

    )

  });

  //soumission du formulaire
  let orderInfos = JSON.stringify({
    contact,
    products
  });

  (async function () {
    const orderID = await postInfo(orderInfos);
    localStorage.setItem("orderID", JSON.stringify(orderID.orderId))
    // console.log(orderID.orderId)
    document.location.href = "confirmation.html"
  })();

}






// console.log(orderInfos)




async function postInfo(orderInfos) {

  return fetch("http://localhost:3000/api/cameras/order", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: orderInfos
    }).then(function (res) {
      return res.json();

    })
    .catch(function (erreur) {
      alert(erreur);
    })
};



// function postInfo(orderInfos) {

//   fetch("http://localhost:3000/api/cameras/order", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       mode: 'cors',
//       body: orderInfos
//     }).then(response => {

//       let data = response.json();
//       console.log(data)

//     })
//     .catch((erreur) => {
//       console.log(erreur)
//     })
// };





const valideNom = function (nom) {

  let nomRegExp = new RegExp(/[a-z]/, 'g');
  let testNom = nomRegExp.test(nom.value);
  let lettreMax = nom.value.length;
  let small = nom.nextElementSibling;


  if (testNom && lettreMax >= 2) {
    small.innerHTML = "Nom valide"
    return true
  } else {
    small.innerHTML = "Nom non valide"
    return false
  }

};







const validePrenom = function (prenom) {
  let prenomRegExp = new RegExp(/[a-z]/, 'g');

  let testPrenom = prenomRegExp.test(prenom.value);
  let lettreMax = prenom.value.length;
  let small = prenom.nextElementSibling;

  if (testPrenom && lettreMax >= 2) {

    small.innerHTML = "Prénom valide"
    return true

  } else {
    small.innerHTML = "Prénom non valide"
    return false
  }

};



const valideAddress = function (address) {
  let addressRegExp = new RegExp(/^[0-9]{1,3}[a-z]+$/, 'g');


  let addressFormat = address.value.split(" ").join("");
  let testAddress = addressRegExp.test(addressFormat);
  let small = address.nextElementSibling;

  if (testAddress) {

    small.innerHTML = "Adresse valide"
    return true

  } else {
    small.innerHTML = "Adresse non valide"
    return false
  }

};



const valideVille = function (ville) {
  let villeRegExp = new RegExp(/[A-Za-z]/, 'g');

  let testVille = villeRegExp.test(ville.value);
  let lettreMax = ville.value.length;
  let small = ville.nextElementSibling;

  if (testVille && lettreMax >= 2) {

    small.innerHTML = "Ville valide"
    return true

  } else {
    small.innerHTML = "Ville non valide"
    return false
  }

};


const valideEmail = function (email) {
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  let testEmail = emailRegExp.test(email.value);
  let small = email.nextElementSibling;

  if (testEmail) {

    small.innerHTML = "Email valide"
    return true

  } else {
    small.innerHTML = "Email non valide"
    return false
  }

};





// let formulaire = []
// const validateBtn = document.querySelector("#validate_form")

// validateBtn.addEventListener('click', function() {
//   console.log('bonjour')
//   // formulaire.push({
//   //   nom: valideNom(nom)
//   //   // prenom: validePrenom,
//   //   // address: valideAddress,
//   //   // city: valideVille,
//   //   // email: valideEmail
//   // })
//   // localStorage.setItem("formulaire", JSON.stringify(formulaire));



// })

// // console.log(formulaire)