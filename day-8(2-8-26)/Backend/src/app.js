/**
 *  what it do 1) create a server and use for middlewares and route
 */

const express = require('express');
const authRouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use('/api/auth', authRouter)

module.exports = app;