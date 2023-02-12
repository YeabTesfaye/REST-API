const express = require('express')
const morgan  = require('morgan')
const bodyParser = require('body-parser')
const productRoutes = require('./api/routes/product')
const orderRoutes = require('./api/routes/order')
const userRouter = require('./api/routes/user')
const { errorHandler } = require('./api/middleware/errorMiddlerware')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : false}))
app.use('/products', productRoutes)
app.use('/orders',orderRoutes)
app.use('/user', userRouter)

app.use(errorHandler)



module.exports = app