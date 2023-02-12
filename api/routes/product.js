const express = require('express')
const { getProduct, postProducts, updateProducts, deleteProducts } = require('../controllers/productController')
const router = express.Router()


router.get('/',getProduct)
router.post('/', postProducts)
router.patch('/:id', updateProducts)
router.delete('/:id', deleteProducts)


module.exports = router