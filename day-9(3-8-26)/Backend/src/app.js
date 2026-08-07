// 1) create server instance
const express = require("express");
// req in app to store token in cookie
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.route");
const userModel = require("./model/user.model");

// calling server
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter); // auth api prefix for register, login, proteced api


// export app to server.js
module.exports = app;
