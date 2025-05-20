import mongoose from 'mongoose'
const connect=async(mongourl)=>{
    try{
        await mongoose.connect(mongourl)
        console.log("connected to the database")
    }catch(error){
        console.log("couldnt connect to the database ", error)
    }
}
export default connect