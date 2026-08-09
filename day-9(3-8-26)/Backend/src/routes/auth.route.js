/**
 * auth.route.js
 * 1) Handles authentication routes (register, login, etc.).
 * 2) Stores user data in the database.
 * 3) Generates a JWT token containing user information.
 * 4) Signs the token using JWT_SECRET.
 */
// 1) Import Express to create authentication routes.
const express = require("express");
// 2) Import the User model (schema).
const userModel = require("../model/user.model");
// 2) Creates a separate router so we can define authentication APIs
// outside app.js and then use them as middleware in app.js and app.js stay clean
const authRouter = express.Router();
// 4) Import crypto to hash passwords.
const crypto = require("crypto");
// 5) Import jsonwebtoken to generate JWT tokens.
const jwt = require("jsonwebtoken");
// POST /api/auth/register
// 1) Receive user data from the --> {req.body}
authRouter.post("/register", async (req, res) => {
  // take uses data from req.body
  const { name, email, password } = req.body;
  // 2) Check if the email already exists in the db.
  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    // 3) you need to "return", 409 as only email has conflicts
    return res.status(409).json({
      message: "User with this email already exist.",
    });
  }
  // 4) after email we need to hash the pass, 1) req 'crypto' 2) .createHash() use algo(md5) then update-> pass then digest->hex
  const hash = crypto.createHash("md5").update(password).digest("hex");
  // 5) Create and save the new user in the database.
  const user = await userModel.create({ name, email, password: hash });
  // 6) Generate a JWT token containing the user's id and email, i npm jsonwebtoken
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  // 7) server store the jwt token in the cookie, for that we need to i npm cookie-parser
  res.cookie("JWT_TOKEN", token);
  // why coolie? server can only access cook-storage
  // 8) send the success response with status
  res.status(201).json({
    message: "Registraction successfull.",
    user: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
    token,
  });
});
// to let server verify the token is right and from same user
authRouter.get("/get-me", async (req, res) => {
  //1) to get the token
  const token = req.cookies.JWT_TOKEN;
  //2) server verify the token
  const deCoder = jwt.verify(token, process.env.JWT_SECRET);
  console.log(req.deCoder);
  //3) server find the user token by _id from db
  const user = await userModel.findById(deCoder.id);

  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
    },
  });
});
// POST /api/auth/login
// 1) Check if the email and password match the database.
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // 2) Find the user by email.
  const user = await userModel.findOne({ email });
  if (!user) {
    // 3) Return 409 if the user is not found.
    return res.status(409).json({
      message: "User not found with this email.",
      c,
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");
  // 4) Hash the entered password and compare it with the stored password.
  const isPasswordMatching = user.password === hash;
  if (!isPasswordMatching) {
    return res.status(401).json({
      message: "Invalid password.",
    });
  }
  // 5) Generate a new JWT token after successful login.
  const token = jwt.sign(
    // payload, 1) user data : user. 2) unique : with db _id
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  // 6) Store the new JWT token in a cookie.
  res.cookie("JWT_TOKEN", token);
  // 7) success staut for login
  res.status(200).json({
    message: "Login successfull.",
    user: {
      email: user.email,
    },
  });
});

// POST /api/auth/protected
authRouter.post("/protected", async (req, res) => {
  // 1) Read the cookies sent by the client.
  console.log(req.cookies);
  res.status(200).json({
    message: "This route is protected.",
  });
});
module.exports = authRouter;
