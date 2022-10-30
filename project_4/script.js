console.log("hello world")

// var sport = prompt('Veuillez enter le sport ')
//
// tab=['foot','basket','hand','tennis']
// // if(tab.includes(sport)){
// if(tab.indexof(sport) !=-1){
//     tab.splice(tab.indexOf(sport),1);
// }else{
//     tab.push(sport);
// }
//
// console.log(tab);


var item1 = prompt('Veuillez enter l\'elemnt 1 ')
var item2 = prompt('Veuillez enter l\'elemnt 2 ')
var item3 = prompt('Veuillez enter l\'elemnt 3 ')

function somme(a, b) {
    return a + b;
}
function produit(a, b) {
    return a * b;
}

function operation(a, b,c, fonction1,fonction2) {
    console.log (fonction2(fonction1(a, b),c));
}

operation (2, 3 , 6, somme, produit)