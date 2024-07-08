import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import dotenv from "dotenv";
dotenv.config();
let auth = async (req, res, next) => {
  let token = req.cookies?.Token;
  console.log("here is token in middleware:",token)

  try {
    if (!token) {
      //return isiluye kiya taki do response send na ho for one request
      return res
        .status(401)//unauthorized
        .send({ result: false, message: "User is not authenticated " });
    } else {
      let { id } = jwt.verify(token, process.env.PRIVATE_KEY);//payload se id extract kro

      let user = await User.findById(id);

      req.user = user;//attaching user data with request

      next();
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

export default auth;