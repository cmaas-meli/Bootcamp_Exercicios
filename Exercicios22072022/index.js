let products = require('./products')

const express = require('express');

const app = express();

app.use(express.json())

// Listar todos os produtos
app.get('/produtos/', (req,res) => {
    res.json(products)
});
// Listar apenas um produto
app.get('/produtos/:id', (req,res) => {
    const id = Number(req.params.id)
    res.json(products.find((product) => product.id === id))
});

// Adicionar produtos
app.post('/produtos', (req,res) =>{
    const content = req.body

    const newProducts = [...products, ...content]

    res.status(201).json(newProducts)
})

// Alterar produto
app.put('/produtos/:id', (req, res) =>{
    const id = Number(req.params.id);
    const content = req.body

    const product = products.find((product) => product.id === id)

    if(!product){
        return res.status(400).json({"message": "Produto não encontrado"})
    }

    const produtoAtualizado = products.map((product) => {
        if(product.id === id) return content; 
        return product;
    })

    products = produtoAtualizado

    res.status(200).json(products);
})

// Deletar produto
app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    
    const product = products.find((produto) => produto.id === id)

    if(!product){
        return res.status(400).json({"message": "Produto não encontrado"})
    }

    products = products.filter((product) => product.id !== id)

    res.json(products)
})

app.listen(3000, () =>
console.log('Servidor Ativo')
)