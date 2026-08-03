/**
 * remember in server 1st) we create post api with user data then 1.1) we check for email
 * 2rd) remember token 1) with user data and sign with JWT_SECRET
 */
const express = require("express");
const userModel = require("../models/user.model");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

// POST /register
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
  const user = await userModel.create({ name, email, password });

  // 2rd)now for token we need to install jwtwebtoken then req, then process.env.jwt_secret
  // after npm i cookie-parser to store the token and req it on app.js then we make it
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },process.env.JWT_SECRET,
  );

  // then show the token in cookie
  res.cookie("JWT_TOKEN", token);
  res.status(201).json({
    message: "User registration successfull.",
    user,
    token,
  });
});

// POST /protected // day-8 and if you want to access it then /api/auth/protected
authRouter.post('/protected', (req,res)=>{
  console.log(req.cookies)  // server can access all the data with the help of req.cookies
  res.status(200).json({
    message:'This is protected route.'
  })
})

// and we need to export authrouther in app.js
module.exports = authRouter;
