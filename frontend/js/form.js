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
  }
});

// OK pour les id produits

let getContact = localStorage.getItem('formulaire')
let getProducts = localStorage.getItem('panier')


let products = []

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
    document.location.href = "confirmation.html"
  })();
}


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


const valideNom = function (nom) {

  let nomRegExp = new RegExp(/^([a-zA-Z ]+)$/);
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
  let prenomRegExp = new RegExp(/^([a-zA-Z ]+)$/);

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
  let addressRegExp = new RegExp(/^[0-9]{1,3}[A-Za-z]+$/, 'g');


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
  let villeRegExp = new RegExp(/^([a-zA-Z ]+)$/);

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

