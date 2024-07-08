import User from "../model/user.model.js";

let tokenGeneration = async function (user) {
  let token = await user.generateToken();//user ek object hai apne aap me jiske pass following info hogi including _id:>
/*
{
  "result": true,
  "message": "user created",
  "data": {
    "userName": "Namit",
    "email": "bahubali@gmail.com",
    "password": "$2b$10$aOMnaoHBRFMEsv2yI3KKRef4W1BTR63ijTXYykqaRUYF76T04.Vhe",
    "phoneNumber": "9842092110",
    "address": [
      {
        "houseNumber": "35",
        "city": "Rajgarh",
        "pincode": 173101,
        "_id": "66869667ede8d4465c6e23c1"
      }
    ],
    "_id": "66869667ede8d4465c6e23c0",
    "__v": 0
  }
}
*/ 


 
  return token;
};

let login = async (req, res) => {
  let { email, password } = req.body;

  try {
    let existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      // checking the user is present or not
      return res.send({ result: false, message: "User doesnot exist" });
    }

    let response = await existingUser.checkPassword(password); // checking the password

    if (response) {
      let token = await tokenGeneration(existingUser); // genertaing the token
      let option = { httpOnly: true, secure: true };
console.log("login token ", token)
      return res.status(201).cookie("Token", token, option).send({
        result: true,
        message: "Login succesfull",
        data: existingUser,
      });
    } else {
      return res.send({ result: false, message: "Password is incorrect " });
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

let signup = async (req, res) => {
  let { email } = req.body;
  console.log(req.body);

  try {
    let existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.send({ result: false, message: "User already Exist " });
    }

    let newUser = new User(req.body); // we are creating the new user
console.log(newUser);//vese yehi pr _id mil jati hai user documnet ko
    let user = await newUser.save(); // saving the new user , but before save encrypt the password
//till now user is created and saved in database and hence has a _id associated with the user document
console.log("user DB per saave hua ",user)
    let token = await tokenGeneration(user); // generating the token
    let option = { httpOnly: true, secure: true }; // options for cokkies
    return res

      .cookie("Token", token, option)
      .send({ result: true, message: "user created", data: user });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};
// These controller  are only accessible after the Auth middleware
let getuser = (req, res) => {
  try {
    let user = req.user;

    return res.send({ result: true, message: "User data ", data: user });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

let updateuser = async (req, res) => {
  if (!req.user) {
    return res.send({ result: false, message: "Plese login " });
  }

  try {
    let user = req.user;
    let { _id } = user;

    let updatedData = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(updatedData);

    return res.send({
      result: true,
      message: "User updated succesfully ",
      data: updatedData,
    });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

let logout = async (req, res) => {
  if (!req.user) {
    return res.send({ result: false, message: "Plese login " });
  }

  try {
    return res
      .clearCookie("Token")
      .send({ result: true, message: "userLogout succesfully " });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

export { login, signup, getuser, updateuser, logout };