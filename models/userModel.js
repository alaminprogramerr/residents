const mongoose=require ('mongoose')
const Schema=mongoose.Schema


const regSchema=new Schema({
    name:String,
    email:String,
    password:String,
    isActive:Boolean,
    role:String
})

const userModel=mongoose.model('userModel', regSchema)
module.exports=userModel
