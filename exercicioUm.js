let products = require('./products')


function addId(array){
    for(i = 0; i < array.length; i++){
        array[i].id = i + 1;
    }
}
addId(products);

function printName(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i].name);
    }
}
printName(products)

function printId(array, id){
    for(i = 0; i < array.length; i++){
        if(array[i].id == id){
            console.log(array[i])
        }
    }
}
printId(products,3)

function printColor(array, color){
    let productsFiltered = []
    for(i = 0; i < array.length; i++){
        if(array[i].colors.find(element => element == color)){
            productsFiltered.push(array[i])
        }
    }
    console.log(productsFiltered)
}
printColor(products,"black")

function printNoColor(array){
    let productsFiltered = []
    for(i = 0; i < array.length; i++){
        if(array[i].colors.length === 0){
            productsFiltered.push(array[i])
        }
    }
    console.log(productsFiltered)
}
printNoColor(products)