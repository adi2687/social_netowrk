import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {type: String, required: true,unique:true},
    email: {type: String, required: true,unique:true},
    password: {type: String, required: false}, // Optional for social login
    profileImageurl: {type: String, required: false, default: 'default-profile.jpg'},
    age: {type: Number},
    gender: {type: Number},
    facebookId: {type: String}, // For Facebook authentication
    googleId: {type: String},   // For Google authentication
    appleId: {type: String},    // For Apple authentication
    createdAt: {type: Date, default: Date.now}
})

const user = mongoose.model("user", userSchema)
export default user