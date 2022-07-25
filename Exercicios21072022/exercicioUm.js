let products = require('./products')


const addId = (array) => array.forEach((a, i) => a.id = i + 1)
addId(products);
console.log(products)

const printName = (array) => array.forEach((a) => console.log(a.name))
printName(products)

const printId = (array, id) => console.log(array.find((a) => a.id === id))
printId(products, 3)

const printColor = (array, color) => {
    const filtered = array.filter((a) => a.colors.includes(color))
    console.log(filtered)
}
printColor(products, 'black')

const printNoColor = (array) => console.log(array.filter((a) => a.colors.length == 0))
printNoColor(products)