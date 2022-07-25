let products = require('./products')

const addProduct = (array, name, price, quantity, colors) => {
    newProduct = {name: name, price: price, quantity:quantity, colors:colors}
    array.push(newProduct)
}
addProduct(products,"VideoGame", 4500, 50, ["black", "white"])

const removeOutOfStock = (array) => array.forEach((a, i) => a.quantity == 0 ? array.splice(i, 1) : true)
removeOutOfStock(products)
console.log(products)

const printValue = (array, price) => array.forEach((a) => a.price > price && console.log(a))
printValue(products, 900)

const printNameLetter = (array, letter) => console.log(array.filter((a) => a.name.includes(letter)))
printNameLetter(products, 'y')
