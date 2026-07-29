// iska 2 kam hota hai : 1) server ko start karna 2) db ko connect karna

require("dotenv").config();
const app = require('./src/app');
const mongoose = require('mongoose');
const connectToDb = require('./src/config/database');

connectToDb()

app.listen(3000, () => {
  console.log("Server is now runnig on Port 3000")
})