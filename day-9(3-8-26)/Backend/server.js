// 1) start server
// 3) to use .env we need to req it at the top of server
require('dotenv').config()
const app = require("./src/app");
const connectToDb = require('./src/config/database');


// 2) connect to db by calling
connectToDb();
app.listen(3000,()=>{
  console.log("Server is running on port:3000")
})