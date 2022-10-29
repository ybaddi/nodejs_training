// exports.somme = (a,b) => {
const PI =  3.1415;
const somme = (a,b) => {
    console.log("extended");
    return a+b;
}

// exports.produit = (a,b) => {
const produit = (a,b) => {
    return a*b;
}

module.exports = {PI_extended:PI,somme_extended:somme,produit_extended:produit}