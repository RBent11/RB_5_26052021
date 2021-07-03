function circle() {
    let circle = document.getElementById('circle')
    let liste = JSON.parse(localStorage.getItem("panier"));
    if (liste != null) {
        let nb_articles = liste.length;
        circle.innerHTML = `${nb_articles}`;
        console.log(nb_articles)
    } else {
        circle.innerHTML = `0`;
    }
}