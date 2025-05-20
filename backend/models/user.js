import mongoose from 'mongoose'

const userSchema=  new mongoose.Schema({
    username:{type:String , required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profileImageurl:{type:String,required:true},
    age:{type:Number},
    gender:{type:Number},
    
})

const user=new mongoose.model("user",userSchema)
export default user