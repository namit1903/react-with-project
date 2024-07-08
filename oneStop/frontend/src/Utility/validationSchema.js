import * as yup from 'yup';


let loginSchema = yup.object({
    email : yup.string().email().required("Email cannot be empty "),
    password : yup.string().min(6).required("Password cannot be empty").matches(/[a-z]/, "include small case letter ")
})


let signupSchema = yup.object({
    userName : yup.string().required("username cannot be empty "),
    password : yup.string().min(6).required("Password cannot be empty "),
    email : yup.string().email().required("Email cannot be empty "),
    confirmPassword : yup.string().required().oneOf([yup.ref("password"), null ] , "Password must match ")
})
export {loginSchema , signupSchema};