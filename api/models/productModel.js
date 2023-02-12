const mongoose = require('mongoose')

const productScherma = new mongoose.Schema({
    name : {
        type : String,
        required: [true, 'please Add a name filed']
    },
    price : {
        type : Number,
        required : [true, 'please add a price']
    }
})

module.exports = mongoose.model('Product', productScherma)