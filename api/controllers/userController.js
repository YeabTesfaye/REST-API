const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const registerUser =  asyncHandler(async(req,res) => {
    const {name, email,password} = req.body

    console.log(name,email,password)
    if(!name || !email || !password){
        res.status(404)
        throw new Error('please add all three fileds')
    }

    // check if the use is already exist 
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(404)
        throw new Error('the user is already existed')
    }

    // hase the password 
    const salt = await bcrypt.genSalt()
    const hasedPassword  = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password : hasedPassword
    })

    if(user){
        res.status(200).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            password : user.password
        })
    }
    else{
        res.status(404)
        throw new Error('Invalid user')
    }
})

const loginUser = asyncHandler(async(req,res) => {
    const {password,email} = req.body 

    const user = await User.findOne({email})
    const hasedPassword = user.password
    
    if(user &&(await bcrypt.compare(password, hasedPassword))){
       return res.status(200).json({
            id : user._id,
            name : user.name,
            email : user.email,
            password : user.password
        })
    }

    res.status(401)
    throw new Error('Auth Failed ')
})


module.exports = {
    registerUser,
    loginUser
}