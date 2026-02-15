const http = require('http')
const { readFileSync } = require('fs')

//get all Files
const homepageHtml = readFileSync('./navbar-app/index.html', 'utf8')
const homepageStyles = readFileSync('./navbar-app/styles.css', 'utf8')
const homepageJs = readFileSync('./navbar-app/browser-app.js', 'utf8')
const homepageImage = readFileSync('./navbar-app/logo.svg', 'utf8')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(homepageHtml)
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.end(homepageStyles)
    }  else if (url === '/logo.svg') {
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
        res.end(homepageImage)
    } else if (url === '/browser-app.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' })
        res.end(homepageJs)
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>About Page</h1>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>404 Page Not Found</h1>')
    }
})

server.listen(5000)
