/**
 * All the auth api login flow, we are going to write it here
 * we dont write logic in auth.routers, only in controller, as many other code will come
 */
const userModel = require("../models/user.model");
// const crypto = require("crypto"); // for basic use, low lever package for security
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register logic
async function registerController(req, res) {
  const { username, bio, email, password, profilePic } = req.body;
  // if user exist with same email & username
  // server will query on the bases of email to db then db give the result
  // const isUserExistsByEmail = await userModel.findOne({ email });
  // if(isUserExistsByEmail){
  //   return res.status(409).json({
  //     message:'User exists'
  //   })
  // }
  // here again, server will query on the bases of UN to db then db will give result
  // but db take more load, so lets just make one with both email & UN
  // const isUserExistsByUserName = await userModel.findOne({username});
  // if(isUserExistsByUserName){
  //   return res.status(409).json({
  //     message:'Username already exists.'
  //   })
  // }
  // now single query for both
  const isUserAlreadyExists = await userModel.findOne({
    // in array ask for condition
    $or: [{ username }, { email }], // $or(operator):[{condition1},{cond2}]
  });
  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        "User already exists" +
        (isUserAlreadyExists.email == email
          ? "Email already exists"
          : "Username already exists"),
    });
  }
  // const hash = crypto.createHash("sha256").update(password).digest("hex");
  const hash = await bcrypt.hash(password, 10); // 10 is salt like how many time you want to do hashing

  // time to create user
  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profilePic,
  });

  // now time for token, need to i jsonwebtoken
  const token = jwt.sign(
    {
      // 1) user ka data hona cheyea 2) unique data hona che...
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  // now need to save the token on cookie, i need to i cookie-parser
  res.cookie("jwt_token", token);
  res.status(200).json({
    message: "User registration successful.",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profilePic: user.profilePic,
    },
  });
}

// login logic
async function loginController(req, res) {
  const { username, email, password } = req.body;
  // feature that we can login with either : we can do this with $or operator
  /**
   * username & password or email & password
   */
  /**
   * {username:a,email:undefined,password:test} = req.body
   * or one condition mush be true
   * {username:undefined, email:test@gmail.com,password:test} =req.body
   */
  const user = await userModel.findOne({
    $or: [
      { username: username } /*a->true*/,
      { email: email } /*undefined->false*/,
    ],
  });
  if (!user) {
    // when we dont find the user
    return res.status(404).json({
      message: "User not found",
    });
  }
  // we have the user then check the pass
  // const hash = crypto.createHash("sha256").update(password).digest("hex");
  // // now check if the pass is valid
  // const isPasswordValid = hash === user.password;
  
  // now both line is done by hashing 
  const isPasswordValid = await bcrypt.compare(password,user.password);
  
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Password is incorret.",
    });
  }
  // if pass is correct then create token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  // then set the token in cookie
  res.cookie("jwt_token", token);
  // finally done status
  res.status(200).json({
    message: "login is successful.",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profilePic: user.profilePic,
    },
  });
}

module.exports = {
  registerController,
  loginController,
};
