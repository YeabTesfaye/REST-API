const express = require('express')
const { getOrders, postOrder, updateOrder, deleteOrder } = require('../controllers/orderControlerer')
const router = express.Router()


router.get('/', getOrders)
router.post('/', postOrder)
router.patch('/:id', updateOrder)
router.delete('/:id', deleteOrder)

module.exports = router