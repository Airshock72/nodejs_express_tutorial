const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end('This is the About Page')
    }
    if (req.url === '/') {
        res.end('Welcome to the HTTP server!')
    }

    res.end('You are lost, this page does not exist')
})

server.listen(5000)
