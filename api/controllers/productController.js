const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const getProduct =  asyncHandler(async(req,res) => {
    const products = await Product.find()
    res.status(200).json(products)
   
})

const postProducts = asyncHandler(async(req,res) => {
    const {name, price} = req.body
    if(!name || !price){
        res.status(404)
        throw new Error('please add name and price')
    }
    const product = await Product.create({
        name , price
      })
    if(product){
        res.status(200).json({
            id : product._id
        })
    }
})

const updateProducts = asyncHandler(async(req,res) => {
    const {id} = req.params 

    const product = await Product.findById(id)

    if(!product){
        res.status(404)
        throw new Error('No Products')
    }

    const updatedProducts = await Product.findByIdAndUpdate(id, req.body, {new : true})

    res.status(201).json(updatedProducts)
})

const deleteProducts = asyncHandler(async(req,res) =>{
    const {id} = req.params

    const product = await Product.findById(id)
    if(!product){
        res.status(404)
        throw new Error('No Products')
    }
    product.remove()
    res.status(200).json({
        id : id
    })
})
module.exports = {
    getProduct,
    updateProducts,
    deleteProducts,
    postProducts
}