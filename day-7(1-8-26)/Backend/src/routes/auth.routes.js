/**
 * 1) user ka data jo server main aaya hia uose save karna hai DB main
 * 2) User ko Token dena hai, uske data ke sath 
 */
const express = require('express');
const userModel = require('../model/user.model')
const authRouter = express.Router();
const jwt = require('jsonwebtoken')
// POST /register
authRouter.post('/register', async (req, res) => {
  console.log(req.body)
  const {
    name,
    email,
    password
  } = req.body;
  const isUserAlreadyExists = await userModel.findOne({
    email
  })
  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: 'Email Already Exists'
    })
  }
  const user = await userModel.create({
    name,
    email,
    password
  })

  // Now 2rd toke with 1) user details 2) sign with JWT_SECRET
  const token = jwt.sign(
    {
    id:user._id,
    email:user.email,
    },process.env.JWT_SECRET
  )
  res.cookie('JWT_TOKEN',token)
  res.status(201).json({
    message: 'User Registrated Successfull.',
    user,token
  })
  // catch (error) {
  //   // console.log(error);

  //   if (error.code === 11000) { //11000 is MongoDb error code for duplicate key (duplicate email in this case).
  //     return res.status(409).json({       //The request is valid, but conflicts with existing data, Email already exists, username already taken.
  //       message: "Email already exists."
  //     });
  //   }

  //   return res.status(500).json({
  //     message: error.message
  //   });
  // }
})
module.exports = authRouter;