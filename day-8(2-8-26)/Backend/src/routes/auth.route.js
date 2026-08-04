/**
 * remember in auth.route.js 1st) we create post api with user data then 1.1) we check for email
 * 2rd) we need cookie-parser middleware in app.js,then token with user data and sign with JWT_SECRET
 */
const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require('crypto')  // for password hashing
const authRouter = express.Router();

// POST /api/auth/register
// 1st) we make a post api
authRouter.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  // 1.1) we check if the same email already exists
  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User with this email already exist.",
    });
  }

  // here we hash the password, algo we are using is "md5"-> will updated to hash
  const hash = crypto.createHash('md5').update(password).digest('hex')
  // then hash the password with hash variable
  const user = await userModel.create({ name, email, password:hash });
  // 2rd)now for token we need to install jwtwebtoken then req, then process.env.jwt_secret
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },process.env.JWT_SECRET,
  );
  // after npm i cookie-parser to store the token and req it on app.js then we make it
  // then show the token in cookie
  res.cookie("JWT_TOKEN", token);
  res.status(201).json({
    message: "User registration successfull.",
    user,
    token,
  });
});
// POST /api/auth/login
/** 
 * here the thing we call this call-back one more thing "async(req,res)=>{}"
 * that is a "Controller":all callback or fun that only execute when the req come to that api
 * controller is also a name of funtion
*/
authRouter.post('/login', async(req,res)=>{  // we call this many thing a fun, fat awrrow, or a callback
  // 1st we check if the email & pass is write then give the "new token" thats all "done" 
  const {email,password} = req.body;
  // check: if the email is wrong then 
  const user = await userModel.findOne({email})
  if(!user){ //!means if user exist then "true" but with ! it becomes false, so if code will not execute
    return res.status(404).json({
      message:"User not found with this email."
    })
  }
  // now if email exists then check password is match with the password in db, when regis..
  // the if the pass is same then the hast will also be same
  const isPasswordMatching = user.password === crypto.createHash('md5').update(password).digest('hex')//password
  // check: if the pass is worng
  if(!isPasswordMatching){
    return res.status(401).json({
      message:"Invalid password."
    })
  }
  // then create token
  const token = jwt.sign({
    id: user._id
  },process.env.JWT_SECRET)
  // and store the token in cookie
  res.cookie('JWT_SECRET',token)
  res.status(200).json({
    message:'User logged in successfull.',user
  })
})
// POST /api/auth/protected // you want to access it then /api/auth/protected
authRouter.post('/protected', (req,res)=>{
  console.log(req.cookies)  // server can access all the data with the help of req.cookies
  res.status(200).json({
    message:'This is protected route.'
  })
})
// and we need to export authrouther in app.js
module.exports = authRouter;
  