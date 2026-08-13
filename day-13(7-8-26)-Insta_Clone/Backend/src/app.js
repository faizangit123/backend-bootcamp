const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.router");
const postRouter = require("./routes/post.router");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

module.exports = app;
