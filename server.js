const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))
const port = process.env.PORT || 8080

app.get('/api/test', (req, res) => res.send('api'))

app.listen(port)


console.log(port)