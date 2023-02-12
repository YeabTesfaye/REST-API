const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId, ref : 'Product',
        required : [true , 'please add a id']
    },
    user : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User',
        required : [true , 'Please add a user id']
    },
    quantity : {
        type : Number, 
        default : 1
    },
    Date : {
        type : Date,
        default : Date.now
    }
}, {
    
})

module.exports = mongoose.model('Order', orderSchema)