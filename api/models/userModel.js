const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String, required : [true , 'please add name field']
    },
    email : {
        type : String, required : [true , 'please add a email filed']
    },
    password : {
        type : String, required: [true, 'please add a password filed']
    }
})


module.exports = mongoose.model('User', userSchema)