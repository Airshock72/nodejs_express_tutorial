const http = require('http')
const { readFileSync } = require('fs')

//get all Files
const homepage = readFileSync('./index.html', 'utf8')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(homepage)
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>About Page</h1>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>404 Page Not Found</h1>')
    }
})

server.listen(5000)
