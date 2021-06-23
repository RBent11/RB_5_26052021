
let formulaire = []

//valide le nom
form.lastName.addEventListener('change', function(){
  valideNom(this);
});


const valideNom = function(nom) {
  let nomRegExp = new RegExp(/[a-z]/, 'g');

  let testNom = nomRegExp.test(nom.value);
  let lettreMax = nom.value.length;
  let small = nom.nextElementSibling;

  if(testNom && lettreMax >= 2){

    small.innerHTML = "Nom valide"


  }
  
  else{
    small.innerHTML = "Nom non valide"
  }

};


//valide le prénom
form.firstName.addEventListener('change', function(){
  validePrenom(this);
});


const validePrenom = function(prenom) {
  let prenomRegExp = new RegExp(/[a-z]/, 'g');

  let testPrenom = prenomRegExp.test(prenom.value);
  let lettreMax = prenom.value.length;
  let small = prenom.nextElementSibling;

  if(testPrenom && lettreMax >= 2){

    small.innerHTML = "Prénom valide"

  }
  
  else{
    small.innerHTML = "Prénom non valide"
  }

};



//valide l'adresse

form.address.addEventListener('change', function(){
  valideAddress(this);
});


const valideAddress = function(address) {
  let addressRegExp = new RegExp(/^[0-9]{1,3}[a-z]+$/, 'g');

  
  let addressFormat = address.value.split(" ").join("");
  // JSON.parse(addressFormat)
  // console.log(typeof(addressFormat))




  let testAddress = addressRegExp.test(address.value);
  // let lettreMax = address.value.length;
  let small = address.nextElementSibling;

  if(testAddress){

    small.innerHTML = "Adresse valide"

  }
  
  else{
    small.innerHTML = "Adresse non valide"
  }

};



//valide la ville

form.city.addEventListener('change', function(){
  valideVille(this);
});


const valideVille = function(ville) {
  let villeRegExp = new RegExp(/[A-Za-z]/, 'g');

  let testVille = villeRegExp.test(ville.value);
  let lettreMax = ville.value.length;
  let small = ville.nextElementSibling;

  if(testVille && lettreMax >= 2){

    small.innerHTML = "Ville valide"

  }
  
  else{
    small.innerHTML = "Ville non valide"
  }

};



//valide l'adresse mail

form.email.addEventListener('change', function(){
  valideEmail(this);
});


const valideEmail = function(email) {
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  let testEmail = emailRegExp.test(email.value);
  // let lettreMax = email.value.length;
  let small = email.nextElementSibling;

  if(testEmail){

    small.innerHTML = "Email valide"

  }
  
  else{
    small.innerHTML = "Email non valide"
  }

};


validateForm = document.getElementById('validate_form')


validateForm.addEventListener('click', () => {

formulaire.push({
  nom : nom.value,
  prenom : prenom.value,
  address : address.value,
  city: ville.value,
  email: email.value
})


// console.log(formulaire)

localStorage.setItem("formulaire", JSON.stringify(formulaire)); })