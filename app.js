const express = require('express')
const app = express()

app.get('/' , (req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.end('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Not found<h1>')
})

app.listen(5000, ()=> {
    console.log("Food e-commerce API working on port 5000!")
})

