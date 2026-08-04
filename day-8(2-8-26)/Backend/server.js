/**
 * 1) server ko start karna 
 * 2) server ko db se connect karna
 * 3) we to store secrets we req dotenv and .config(), and it should be at the top
 */

require('dotenv').config()
const app = require('./src/app');
const connectToDb = require('./src/config/database');

connectToDb();
app.listen(3000,()=>{
  console.log("Server is running on port 3000.")
})