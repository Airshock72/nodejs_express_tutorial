const express = require('express')
const  { products } = require('./data')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>homepage</h1>  <a href="/api/products">CLICK TO GET PRODUCTS</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => ({ id: product.id, name: product.name, image: product.image }))
    res.json(newProducts)
})

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product => product.id === Number(id))
    if (!product) return res.status(404).send('Product not found')
    return res.json(product)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v2/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) sortedProducts = sortedProducts.filter(product => product.name.includes(search))
    if (limit) sortedProducts = sortedProducts.slice(0, Number(limit))
    // if(sortedProducts.length < 1) res.status(200).send('no products matched your search')
    res.status(200).send(sortedProducts)
})

app.listen(5000, () => console.log('Server is running on port 5000'))