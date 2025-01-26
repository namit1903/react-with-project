
import express from "express";
// import 'dotenv/config'
import dotenv from 'dotenv'
import dbConnect from "./database/index.db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js"
import cors from 'cors'

let server = express();
dotenv.config();
let port = process.env.PORT || 8000;

server.use(express.json()); // This is to read the body of req 
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser()); // This is used to read the cookies
server.use(cors({
    origin: "http://localhost:5173",//isko ab allow kr dia data 
    credentials :true , 
}))

server.use("/users" , userRouter);  // always place the router after the middlewares 



dbConnect().then(()=>{
    server.listen(port , ()=>{
        console.log("Server is connected at port " , port)
    })
}).catch((err)=>{
    console.log(err)
})
