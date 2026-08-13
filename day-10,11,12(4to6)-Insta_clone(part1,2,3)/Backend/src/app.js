const express = require('express');
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.routers');
const postRouter = require('./routes/post.routers');
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)

module.exports = app;