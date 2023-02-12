const Order = require('../models/orderModel')
const Products = require('../models/productModel')
const User = require('../models/userModel')
const asynchHandler = require('express-async-handler')

const getOrders =  asynchHandler(async(req,res) => {
    const order = await Order.find()
    res.status(200).json(order)
})

const postOrder = asynchHandler(async(req,res) => {
    const {quantity, product, user} = req.body


    if((await Products.findById(product)) && (await User.findById(user))){
        const order  = await Order.create({
            quantity,
            product : product,
            user
        })
        if(!order){
            res.status(404)
            throw new Error('post order failed')
        }
    
       return res.status(200).json({
            id : order.id,
            product : order.product,
            quantity : order.quantity
        })
    }
    
    res.status(404)
    throw new Error('the product or user is not exist')
})

const updateOrder = asynchHandler( async(req,res) => {
    const {id} = req.params 
    const order = await Order.findById(id)
    if(!order){
        res.status(404)
        throw new Error('order not found')
    }
    
    console.log(order)
    
    const updatedOrder = await Products.findByIdAndUpdate(id,req.body, {new : true} )

    res.status(200).json(updatedOrder)
})

const deleteOrder = asynchHandler(async(req,res) => {
    const {id}  = req.params
    
    const order = await Order.findById(id)
    if(!order){
        res.status(404)
        throw new Error('order not found')
    }
    await order.remove()

    res.status(200).json({
        id : id
    })
})


module.exports = {
    getOrders,
    updateOrder,
    deleteOrder,
    postOrder
}