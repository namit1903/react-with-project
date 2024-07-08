import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function dbConnect (){
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected .........")
    }catch(err){
        console.log("Error connecting db")
        return err ;
    }
}

export default dbConnect;