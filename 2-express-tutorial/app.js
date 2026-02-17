const express = require('express')
let { people } = require('./data')

const app = express()

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) return res.status(400).send('Please provide name')
    res.status(201).json({ success: true, person: name })
})

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) return res.status(200).send(`Welcome ${name}`)
    return res.status(401).send('Please provide credentials')
})

app.listen(5000, () => console.log('Server is running on port 5000'))
