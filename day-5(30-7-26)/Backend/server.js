/**
 * iska kam server ko start karna hai and db calling
 */

require('dotenv').config();
const app = require('./src/app');
const mongoose = require('mongoose');
const connectToDb = require('./src/config/database');

connectToDb();

app.listen(3000, () => {
  console.log("Server is now runnig on Port : 3000")
})