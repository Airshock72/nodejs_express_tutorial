const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('/*path', (req, res) => {
    res.status(404).send('<h1>404 Resource not found</h1>')
})

app.listen(5000, () => console.log('Server is running on port 5000'))

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen