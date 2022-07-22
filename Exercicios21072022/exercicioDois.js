let products = require('./products')

function addProduct(array, name, price, quantity, colors){
    newProduct = {name: name, price: price, quantity:quantity, colors:colors}
    array.push(newProduct)
}
addProduct(products,"VideoGame", 4500, 50, ["black", "white"])

function removeOutOfStock(array){
    for(i = 0; i < array.length; i++){
        if(!array[i].quantity){
            array.splice(i, 1)
        }
}
}
removeOutOfStock(products)

function sumQuantity(array){
    let sum = 0
    for(i = 0; i < array.length; i++){
        sum += array[i].quantity;
    }
    console.log(sum)
}
sumQuantity(products)

function printValue(array, price){
    for(i = 0; i < array.length; i++){
        if(array[i].price > price){
            console.log(array[i])
        }
    }
}
printValue(products,900)

function printNameLetter(array, letter){
    for(i = 0; i < array.length; i++){
        if(array[i].name.includes(letter)){
            console.log(array[i])
        }
    }
}
printNameLetter(products, 'o')
