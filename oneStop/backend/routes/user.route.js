import express from "express";
import auth from "../middlewares/auth.middleware.js";
import {
  login,
  signup,
  getuser,
  updateuser,
  logout 
} from "../controller/user.controller.js";

let Router = express.Router();

Router.post("/signup", signup)
  .post("/login", login)
  .get("/getuser",auth ,  getuser)
  .patch("/update",auth ,  updateuser)
  .get("/logout" ,auth,  logout )

  export default Router;