const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routers");
const postRouter = require("./routes/post.routers");

const app = express(); // Instance our entery point: all the req come through this
// app then send the req on the bases of router like auth, posts

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

module.exports = app;
