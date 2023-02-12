const dotenv  = require('dotenv').config()
const http = require('http')
const colors = require('colors')
const app = require('./app')
const CONNECTDB = require('./config/db')
const PORT = process.env.PORT || 5000

CONNECTDB()
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`the server is listing at port ${PORT}`)
})
