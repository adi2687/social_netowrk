import express from 'express'
import user from '../models/user.js'
const Router=express.Router()

Router.post("/login",async (req,res)=>{
    console.log("here")
res.send("thsi is the login page ")
})
export default Router